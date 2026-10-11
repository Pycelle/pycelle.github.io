(() => {
  const D = window.MUCO_PAGE_DATA || {};
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pauseAll = root => root.querySelectorAll('video').forEach(v => v.pause());
  function installVideoPolicy() {
    // Capture play events: they do not bubble, and carousels replace their videos.
    document.addEventListener('play', event => {
      const active = event.target;
      if (active.tagName !== 'VIDEO' || active.paused) return;
      document.querySelectorAll('video').forEach(video => {
        if (video !== active && !video.paused) video.pause();
      });
    }, true);
    document.addEventListener('fullscreenchange', () => {
      const fullscreen = document.fullscreenElement;
      if (fullscreen?.tagName === 'VIDEO') document.exitFullscreen().catch(() => {});
    });
    document.addEventListener('webkitbeginfullscreen', event => {
      if (event.target.tagName === 'VIDEO') event.target.webkitExitFullscreen?.();
    }, true);
  }
  installVideoPolicy();
  document.querySelectorAll('img[data-figure]').forEach(img => {
    const source = D.figures?.[img.dataset.figure];
    if (source) img.src = source;
  });
  function renderMotivation(el, cases) {
    if (!el || !cases?.length) return;
    pauseAll(el);
    el.innerHTML = cases.map((c, index) => {
      const caption = esc(c.caption).replace(/&quot;([^]*?)&quot;/g, '<strong>&quot;$1&quot;</strong>');
      return `<article class="mucovid-card abl-card motivation-case" aria-labelledby="motivation-title-${esc(c.id)}">
        <div class="motivation-case-heading">
          <p class="eyebrow">Existing Joint Generators Failure case ${String(index + 1).padStart(2, '0')}</p>
          <h3 id="motivation-title-${esc(c.id)}">${esc(c.title)}</h3>
        </div>
        <div class="reference-prompt-row">
          <div class="gen-ref-wrap">
            <div class="gt-label">Reference image</div>
            <img class="gen-ref-img" src="${esc(c.reference)}" width="960" height="544" alt="${esc(c.title)} reference image">
          </div>
          <div class="prompt-wrap">
            <div class="prompt-label">Audio-video prompt</div>
            <div class="mucovid-caption">${caption}</div>
          </div>
        </div>
        <div class="abl-variant motivation-result">
          <div class="abl-variant-name">Generated result</div>
          <div class="abl-video-single">
            <video controls controlslist="nofullscreen" playsinline preload="metadata" aria-label="${esc(c.title)} generated results">
              <source src="${esc(c.video)}" type="video/mp4">
            </video>
          </div>
          <span class="video-error-text" role="alert">Could not load this video.</span>
          <ul class="failure-modes motivation-failures" aria-label="Illustrated failure modes">${c.failureModes.map(mode => `<li><strong>${esc(mode.label)}</strong><span>${esc(mode.detail)}</span></li>`).join('')}</ul>
        </div>
      </article>`;
    }).join('');
    el.querySelectorAll('video').forEach(video => {
      video.addEventListener('error', () => video.closest('.abl-variant').classList.add('video-error'));
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (!entry.isIntersecting) pauseAll(entry.target); });
    });
    el.querySelectorAll('.motivation-case').forEach(card => observer.observe(card));
  }
  renderMotivation(document.querySelector('#motivation-cases'), D.motivation);
  function renderMuCoVid(el, items) {
    if (!el || !items?.length) return;
    let page = 0;
    function boldQuotes(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
    function render() {
      pauseAll(el);
      const c = items[page];
      const personImgs = (c.personImages||[]).map((p,i)=>{
        const desc = c.personDescriptions?.[i] || '';
        return `<div class="person-item"><img src="${esc(p)}" class="person-thumb" alt="speaker"><span class="person-tag">Person_${i}</span>${desc?`<span class="person-desc">${esc(desc)}</span>`:''}</div>`;
      }).join('');
      const utts = (c.utterances||[]).map(u=>{
        const cls = u.invisible ? ' utt-invisible' : '';
        return `<div class="utt-row${cls}"><span class="utt-person">${esc(u.person)}</span><span class="utt-text">${esc(u.text)}</span><span class="utt-time">${esc(u.time)}</span></div>`;
      }).join('');
      const dots = items.map((_,i)=>`<span class="dot${i===page?' active':''}" data-page="${i}"></span>`).join('');
      el.innerHTML = `<div class="mucovid-carousel-header"><div class="carousel-title">MuCoVid-1M sample browser</div><div class="carousel-meta">One case per page · raw clip and annotation views</div></div><div class="mucovid-card">
        <div class="mucovid-nav mucovid-prev" data-dir="-1"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M12 4l-6 6 6 6" stroke="currentColor" stroke-width="2" fill="none"/></svg></div>
        <div class="mucovid-top">
          <div class="mucovid-video-col">
            <div class="mucovid-video-wrap">
              <video controlslist="nofullscreen" id="mcv-player" controls playsinline preload="auto" disablepictureinpicture onerror="this.closest('.mucovid-video-col').classList.add('video-error')">
                <source src="${esc(c.resultVideo)}" type="video/mp4">
              </video>
            </div>
            <div class="mucovid-view-btns">
              <button class="mcv-btn active" data-view="result">Raw video</button>
              <button class="mcv-btn" data-view="bbox">Active-speaker view</button>
            </div>
            <div class="mucovid-video-id">${c.videoInfo?.fps||''} fps · ${c.videoInfo?.duration||''} s · ${c.videoInfo?.totalFrames||''} frames</div>
          </div>
          <div class="mucovid-panels">
            <div class="mucovid-panel">
              <div class="mucovid-panel-title">Person Profile</div>
              <div class="mucovid-persons">${personImgs||'<span class="muted">No profile data</span>'}</div>
            </div>
            <div class="mucovid-panel">
              <div class="mucovid-panel-title">Utterance-level Transcript</div>
              <div class="mucovid-utterances">${utts||'<span class="muted">No utterance data</span>'}</div>
            </div>
          </div>
        </div>
        <div class="mucovid-bottom">
          <div class="mucovid-panel">
            <div class="mucovid-panel-title">Clip-level Caption</div>
            <div class="mucovid-caption">${boldQuotes(c.caption||c.views?.[0]?.prompt||'')}</div>
          </div>
        </div>
        <div class="mucovid-dots">${dots}</div>
        <div class="mucovid-nav mucovid-next" data-dir="1"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M8 4l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none"/></svg></div>
      </div>`;
    }
    el.addEventListener('click', e => {
      const nav = e.target.closest('.mucovid-nav');
      if (nav) {
        const dir = parseInt(nav.dataset.dir);
        page = (page + dir + items.length) % items.length;
        render();
        return;
      }
      const dot = e.target.closest('.dot');
      if (dot) {
        page = parseInt(dot.dataset.page);
        render();
        return;
      }
      const btn = e.target.closest('.mcv-btn');
      if (btn) {
        el.querySelectorAll('.mcv-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const v = el.querySelector('#mcv-player');
        const c = items[page];
        const src = btn.dataset.view === 'bbox' ? c.activeSpeakerVideo : c.resultVideo;
        if (src && v) { v.src = src; v.load(); }
        return;
      }
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { page = (page - 1 + items.length) % items.length; render(); }
      if (e.key === 'ArrowRight') { page = (page + 1) % items.length; render(); }
    });
    render();
  }
  renderMuCoVid(document.querySelector('#dataset-carousel'), D.mucovid||[]);
  function renderDiag(el, items) {
    if (!el || !items?.length) return;
    let page = 0;
    const perPage = 2;
    const pages = Math.ceil(items.length / perPage);
    function boldQuotes(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
    function render() {
      pauseAll(el);
      const shown = items.slice(page * perPage, page * perPage + perPage);
      const category = shown[0]?.category || '';
      const dots = items.filter((_, i) => i % perPage === 0).map((_, i) => {
        const idx = i;
        return `<span class="dot${idx === page ? ' active' : ''}" data-page="${idx}"></span>`;
      }).join('');
      el.innerHTML = `<div class="mucovid-carousel-header"><div class="carousel-title">MuCoVid-Bench case browser</div><div class="carousel-meta">Two cases per page · attribution failure-prone settings</div></div><div class="mucovid-card">
        <div class="mucovid-nav mucovid-prev" data-dir="-1"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M12 4l-6 6 6 6" stroke="currentColor" stroke-width="2" fill="none"/></svg></div>
        <div class="mucovid-top">
          <span class="diag-category">${esc(category)}</span>
          <span class="diag-subtype">${esc(shown[0]?.subType || '')}</span>
          <div class="mucovid-video-grid">
            ${shown.map(v => `
              <div class="diag-video-item">
                <div class="mucovid-video-wrap">
                  <video controlslist="nofullscreen" controls playsinline preload="auto" onerror="this.closest('.diag-video-item').classList.add('video-error')" onplay="this.muted=false">
                    <source src="${esc(v.video)}" type="video/mp4">
                  </video>
                </div>
                <div class="mucovid-caption">${boldQuotes(v.caption || '')}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="mucovid-dots-row">
          <div class="mucovid-dots">${dots}</div>
        </div>
        <div class="mucovid-nav mucovid-next" data-dir="1"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M8 4l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none"/></svg></div>
      </div>`;
    }
    el.addEventListener('click', e => {
      const nav = e.target.closest('.mucovid-nav');
      if (nav) {
        const dir = parseInt(nav.dataset.dir);
        page = (page + dir + pages) % pages;
        render();
        return;
      }
      const dot = e.target.closest('.dot');
      if (dot) {
        page = parseInt(dot.dataset.page);
        render();
        return;
      }
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { page = (page - 1 + pages) % pages; render(); }
      if (e.key === 'ArrowRight') { page = (page + 1) % pages; render(); }
    });
    render();
  }
  renderDiag(document.querySelector('#benchmark-carousel'), D.mocubench||[]);
  function renderGeneralization(el, items) {
    if (!el || !items?.length) return;
    let page = 0;
    const pages = items.length;
    function boldQuotes(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
    function render() {
      pauseAll(el);
      const c = items[page];
      const dots = items.map((_,i)=>`<span class="dot${i===page?' active':''}" data-page="${i}"></span>`).join('');
      el.innerHTML = `<div class="mucovid-card gen-card">
        <div class="mucovid-nav mucovid-prev" data-dir="-1"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M12 4l-6 6 6 6" stroke="currentColor" stroke-width="2" fill="none"/></svg></div>
        <div class="gen-top-row reference-prompt-row">
          <div class="gen-ref-wrap">
            <div class="gt-label">Reference image</div>
            <img src="${esc(c.refImage || '')}" class="gen-ref-img" alt="reference">
          </div>
          <div class="prompt-wrap">
            <div class="prompt-label">Audio-video prompt</div>
            <div class="mucovid-caption">${boldQuotes(c.caption || '')}</div>
          </div>
        </div>
        <div class="gen-video-wrap">
          <div class="mucovid-video-wrap">
            <video controlslist="nofullscreen" controls playsinline preload="auto" onerror="this.closest('.gen-video-wrap').classList.add('video-error')" onplay="this.muted=false">
              <source src="${esc(c.video)}" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="mucovid-dots-row">
          <div class="mucovid-dots">${dots}</div>
        </div>
        <div class="mucovid-nav mucovid-next" data-dir="1"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M8 4l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none"/></svg></div>
      </div>`;
    }
    el.addEventListener('click', e => {
      const nav = e.target.closest('.mucovid-nav');
      if (nav) {
        const dir = parseInt(nav.dataset.dir);
        page = (page + dir + pages) % pages;
        render();
        return;
      }
      const dot = e.target.closest('.dot');
      if (dot) {
        page = parseInt(dot.dataset.page);
        render();
        return;
      }
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { page = (page - 1 + pages) % pages; render(); }
      if (e.key === 'ArrowRight') { page = (page + 1) % pages; render(); }
    });
    render();
  }
  renderGeneralization(document.querySelector('#generalization-carousel'), D.generalization||[]);
  const qualItems = (D.qualitative || []).map(group => ({id: group.id, group}));
  function renderQual(el, cases) {
    if (!el || !cases.length) return;
    let page = 0;
    const pages = cases.length;
    function boldQuotes(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
    function makeCell(name, src, failureModes = [], caption = '') {
      if (!src) return '';
      return `<div class="abl-variant">
        <div class="abl-variant-name">${esc(name)}</div>
        <div class="abl-video-single">
          <video controlslist="nofullscreen" controls playsinline preload="auto" onerror="this.closest('.abl-variant').classList.add('video-error')" onplay="this.muted=false">
            <source src="${esc(src)}" type="video/mp4">
          </video>
        </div>
        ${failureModes.length ? `<ul class="failure-modes" aria-label="Observed failure modes">${failureModes.map(mode => `<li>${esc(mode)}</li>`).join('')}</ul>` : ''}
        ${caption ? `<p class="qual-output-caption">${esc(caption)}</p>` : ''}
      </div>`;
    }
    function render() {
      pauseAll(el);
      const c = cases[page];
      const g = c.group;
      const methods = g.methods || [];
      const getM = name => methods.find(m => m.name === name);
      const magi = getM('MagiHuman');
      const ovi = getM('Ovi');
      const mova = getM('MOVA');
      const ltx = getM('LTX-2.3');
      const dots = cases.map((_,i)=>`<span class="dot${i===page?' active':''}" data-page="${i}"></span>`).join('');
      el.innerHTML = `<div class="subsection"><h3>Qualitative comparison on MuCoVid-Bench</h3><p class="muted">Side-by-side video results · speaker identity, dialogue content and turn timing</p></div><div class="mucovid-card abl-card qual-card">
        <div class="mucovid-nav mucovid-prev" data-dir="-1"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M12 4l-6 6 6 6" stroke="currentColor" stroke-width="2" fill="none"/></svg></div>
        <div class="gen-top-row">
          <div class="gen-ref-wrap">
            <div class="gt-label">Ground Truth</div>
            <video controlslist="nofullscreen" class="gt-video" controls playsinline preload="auto" aria-label="Ground Truth video" onerror="this.closest('.gen-ref-wrap').classList.add('video-error')" onplay="this.muted=false">
              <source src="${esc(g.gtVideo || '')}" type="video/mp4">
            </video>
            <span class="video-error-text" role="alert">Could not play this video.</span>
          </div>
          <div class="mucovid-caption">${boldQuotes(g.caption || '')}</div>
        </div>
        <div class="qual-comparison">
          <div class="qual-baselines">
            ${makeCell('MagiHuman', magi?.video, magi?.failureModes)}
            ${makeCell('Ovi', ovi?.video, ovi?.failureModes)}
            ${makeCell('MOVA', mova?.video, mova?.failureModes)}
            ${makeCell('LTX-2.3', ltx?.video, ltx?.failureModes)}
          </div>
          <div class="qual-ours">
            ${makeCell('MuCoGen', g.oursCombined, [], 'Jointly generated audio, video, and speaker masks')}
          </div>
        </div>
        <div class="mucovid-dots-row">
          <div class="mucovid-dots">${dots}</div>
        </div>
        <div class="mucovid-nav mucovid-next" data-dir="1"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M8 4l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none"/></svg></div>
      </div>`;
    }
    el.addEventListener('click', e => {
      const nav = e.target.closest('.mucovid-nav');
      if (nav) {
        const dir = parseInt(nav.dataset.dir);
        page = (page + dir + pages) % pages;
        render();
        return;
      }
      const dot = e.target.closest('.dot');
      if (dot) {
        page = parseInt(dot.dataset.page);
        render();
        return;
      }
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { page = (page - 1 + pages) % pages; render(); }
      if (e.key === 'ArrowRight') { page = (page + 1) % pages; render(); }
    });
    render();
  }
  renderQual(document.querySelector('#qualitative-carousel'),qualItems);
  function renderAblation(el, items) {
    if (!el || !items?.length) return;
    const c = items[0];
    const methods = c.methods || [];
    function boldQuotes(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
    function makeCell(method) {
      const src = method?.combined || method?.video;
      if (!src) return '';
      const failureModes = method.failureModes || [];
      const label = method.displayName || method.name;
      return `<div class="abl-variant${method.combined ? ' abl-variant-wide' : ''}">
        <div class="abl-variant-name">${esc(label)}</div>
        <div class="abl-video-single">
          <video controlslist="nofullscreen" controls playsinline preload="auto" aria-label="${esc(label)} ablation video" onerror="this.closest('.abl-variant').classList.add('video-error')" onplay="this.muted=false">
            <source src="${esc(src)}" type="video/mp4">
          </video>
        </div>
        <span class="video-error-text" role="alert">Could not play this video.</span>
        ${failureModes.length ? `<ul class="failure-modes" aria-label="Failure modes">${failureModes.map(mode => `<li>${esc(mode)}</li>`).join('')}</ul>` : ''}
        ${method.successLabel ? `<p class="abl-success"><span aria-hidden="true">✓</span> ${esc(method.successLabel)}</p>` : ''}
      </div>`;
    }
    const bas = methods.find(m => m.name === 'Baseline');
    const mtsg = methods.find(m => m.name === 'MTSG');
    const upbs = methods.find(m => m.name === 'UPBS');
    const muco = methods.find(m => m.name === 'MuCoGen');
    el.innerHTML = `<div class="mucovid-card abl-card ablation-comparison">
      <div class="gen-top-row">
        <div class="gen-ref-wrap">
          <div class="gt-label">Ground Truth</div>
          <video controlslist="nofullscreen" class="gt-video" controls playsinline preload="auto" aria-label="Ground Truth video" onerror="this.closest('.gen-ref-wrap').classList.add('video-error')" onplay="this.muted=false">
            <source src="${esc(c.gtVideo || '')}" type="video/mp4">
          </video>
          <span class="video-error-text" role="alert">Could not play this video.</span>
        </div>
        <div class="mucovid-caption">${boldQuotes(c.caption || '')}</div>
      </div>
      <div class="ablation-grid">
        ${makeCell(bas)}
        ${makeCell(mtsg)}
        ${makeCell(upbs)}
        ${makeCell(muco)}
      </div>
    </div>`;
  }
  renderAblation(document.querySelector('#ablation-carousel'), D.ablation || []);
  const metrics={
    all:{'Ovi':[.356,.417,.670,4.338,2.233],'MOVA':[.344,.425,.669,4.679,2.059],'MagiHuman':[.296,.474,.593,2.662,4.251],'LTX-2.3':[.534,.281,.700,4.622,2.542],'MuCoGen':[.575,.238,.728,4.974,1.237]},
    normal:{'Ovi':[.355,.348,.668,4.075,2.627],'MOVA':[.352,.344,.666,4.465,2.095],'MagiHuman':[.307,.398,.585,2.591,4.639],'LTX-2.3':[.489,.253,.687,4.288,2.684],'MuCoGen':[.517,.211,.723,4.655,1.557]},
    challenging:{'Ovi':[.356,.486,.672,4.614,1.823],'MOVA':[.336,.506,.672,4.898,2.023],'MagiHuman':[.286,.549,.600,2.732,3.871],'LTX-2.3':[.580,.309,.712,4.954,2.402],'MuCoGen':[.633,.265,.733,5.300,.908]}
  };
  const metricNames = ['U-SAA', 'IC-CER', 'Attr-F1', 'ASD-C', 'ASD-O'];
  const dirs = [1, -1, 1, 1, -1];
  const modelColors = ['#697b8c', '#009e73', '#a16bb5', '#d87827', '#1769aa'];
  const resultPages = [
    { key: 'all', label: 'All', count: 400 },
    { key: 'normal', label: 'Normal', count: 200 },
    { key: 'challenging', label: 'Challenging', count: 200 }
  ];
  // One shared scale per metric. Subset navigation must not change the axes.
  const metricRanges = metricNames.map((_, i) => {
    const values = Object.values(metrics).flatMap(subset => Object.values(subset).map(row => row[i]));
    return { min: Math.min(...values), max: Math.max(...values) };
  });
  function normalizedMetric(value, i) {
    const { min, max } = metricRanges[i];
    if (max === min) return 0.5;
    return dirs[i] > 0 ? (value - min) / (max - min) : (max - value) / (max - min);
  }
  function radarSVG(set) {
    const vals = metrics[set], names = Object.keys(vals);
    const cx = 220, cy = 154, radius = 112;
    const point = (fraction, i) => {
      const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
      return [cx + Math.cos(angle) * radius * fraction, cy + Math.sin(angle) * radius * fraction];
    };
    const points = values => values.map((value, i) => point(value, i).map(v => v.toFixed(2)).join(',')).join(' ');
    const grid = [0.25, 0.5, 0.75, 1].map(r =>
      `<polygon points="${points(Array(5).fill(r))}" fill="none" stroke="#dce3e9" stroke-width="1"/>`
    ).join('');
    const axes = metricNames.map((_, i) => {
      const [x, y] = point(1, i);
      return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#dce3e9" stroke-width="1"/>`;
    }).join('');
    const ticks = [0.25, 0.5, 0.75, 1].map(r =>
      `<text x="${cx + 7}" y="${cy - radius * r + 3}" font-size="9" fill="#71808d">${r}</text>`
    ).join('');
    const labels = metricNames.map((name, i) => {
      const [x, y] = point(1.17, i);
      const anchor = i === 0 ? 'middle' : i < 3 ? 'start' : 'end';
      return `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle" font-size="13" font-weight="600" fill="#243746">${name} ${dirs[i] > 0 ? '↑' : '↓'}</text>`;
    }).join('');
    const polygons = names.map((name, index) => {
      const values = vals[name].map(normalizedMetric);
      const color = modelColors[index];
      const outline = `<polygon data-model="${esc(name)}" points="${points(values)}" fill="${color}" fill-opacity="${name === 'MuCoGen' ? '.10' : '0'}" stroke="${color}" stroke-width="${name === 'MuCoGen' ? '2.8' : '1.7'}" stroke-linejoin="round"/>`;
      const dots = values.map((value, i) => {
        const [x, y] = point(value, i);
        return `<circle cx="${x}" cy="${y}" r="${name === 'MuCoGen' ? '3' : '2'}" fill="${color}"><title>${esc(name)} · ${metricNames[i]}: ${vals[name][i].toFixed(3)}</title></circle>`;
      }).join('');
      return outline + dots;
    }).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 295" role="img" aria-label="MuCoVid-Bench ${esc(set)}: normalized radar comparison; outward is better" font-family="Arial, sans-serif"><title>MuCoVid-Bench ${esc(set)}</title>${grid}${axes}${polygons}${ticks}${labels}</svg>`;
  }
  function updateResults(set) {
    const vals = metrics[set], names = Object.keys(vals);
    document.querySelector('#radar').innerHTML = radarSVG(set);
    document.querySelector('#radar-legend').innerHTML = names.map((name, i) =>
      `<span class="radar-legend-item"><i style="--model-color:${modelColors[i]}" aria-hidden="true"></i>${esc(name)}</span>`
    ).join('');
    document.querySelector('#results-table').innerHTML = `<caption class="sr-only">MuCoVid-Bench ${esc(set)} original metric values</caption><thead><tr><th scope="col">Method</th>${metricNames.map((name, i) => `<th scope="col">${name} ${dirs[i] > 0 ? '↑' : '↓'}</th>`).join('')}</tr></thead><tbody>${names.map((name, i) => `<tr class="${name === 'MuCoGen' ? 'highlight' : ''}"><th scope="row"><i class="table-model-swatch" style="--model-color:${modelColors[i]}" aria-hidden="true"></i>${esc(name)}</th>${vals[name].map(value => `<td>${value.toFixed(3)}</td>`).join('')}</tr>`).join('')}</tbody>`;
  }
  const quantitativeBrowser = document.querySelector('#quantitative-browser');
  let resultPage = 0;
  function showResultPage(index) {
    resultPage = (index + resultPages.length) % resultPages.length;
    const page = resultPages[resultPage];
    updateResults(page.key);
    document.querySelector('#results-subset').textContent = page.label;
    document.querySelector('#results-count').textContent = `${page.count} cases`;
    quantitativeBrowser.querySelectorAll('[data-results-page]').forEach(button => {
      const active = Number(button.dataset.resultsPage) === resultPage;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }
  quantitativeBrowser.addEventListener('click', event => {
    const direction = event.target.closest('[data-results-dir]');
    const page = event.target.closest('[data-results-page]');
    if (direction) showResultPage(resultPage + Number(direction.dataset.resultsDir));
    else if (page) showResultPage(Number(page.dataset.resultsPage));
  });
  quantitativeBrowser.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showResultPage(resultPage + (event.key === 'ArrowRight' ? 1 : -1));
  });
  showResultPage(0);
})();

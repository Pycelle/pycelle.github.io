# MuCo

Project page for **Who, What, When: Multi-Person Conversational Audio-Video Generation**.

**Authors:** Qi Shi, Zhaofan Qiu, Yingwei Pan, Ting Yao, Yongdong Zhang, and Wu Liu.

**Project website:** https://pycelle.github.io/MuCo/

This repository contains the static project website and its demonstration assets for MuCoVid-1M, MuCoVid-Bench, and MuCoGen.

## Local preview

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000/. If running on a remote server, forward port 8000 first.

## Structure

- `index.html`: page content.
- `styles.css`: layout and styling.
- `app.js`: interactive case navigation and result views.
- `page-data.js`: case descriptions and relative media paths.
- `motivation/`, `mucovid/`, `mocubench/`, `qualitative_comp/`, `generalization/`, `ablation/`: figures and demonstration media.
- `asset-map.json`: asset provenance and checksums.

The framework illustration links to its vector PDF. All page assets use relative paths.

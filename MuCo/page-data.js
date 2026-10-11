window.MUCO_PAGE_DATA = {
  "motivation": [
    {
      "id": "1",
      "sourceId": "4-2",
      "title": "Multi-turn dialogue",
      "reference": "motivation/motivation_001_reference.png",
      "video": "motivation/motivation_001_result.mp4",
      "caption": "Static close-up shot of a woman (left) and a man (right) standing side-by-side in strict profile view, facing right. The woman points and says, \"Look at that support beam.\" The man squints, \"The stress fractures are getting worse.\" The woman instructs, \"We should halt the construction process.\" The man nods, \"Agreed, better to be safe now.\"",
      "failureModes": [
        {
          "label": "Incorrect speech content",
          "detail": "The man says “The stress fractions are get worse” instead of “The stress fractures are getting worse.”"
        },
        {
          "label": "Incorrect turn timing",
          "detail": "The man starts “Agreed, better to be safe now” before the woman’s instruction; she begins “We should halt the construction process” while he is still speaking."
        }
      ],
      "provenance": "Constructed failure illustration. The prompt above describes the intended conversation; this clip illustrates deliberately induced attribution errors."
    },
    {
      "id": "2",
      "sourceId": "1-1",
      "title": "Over-the-shoulder view",
      "reference": "motivation/motivation_002_reference.png",
      "video": "motivation/motivation_002_result.mp4",
      "caption": "Static camera, tight over-the-shoulder shot. A blonde woman in the left foreground has her back to the camera. A dark-haired woman in the right background faces the camera. They have a rapid exchange. The background woman asks, \"Did you review the new documents?\" The foreground woman nods, \"Yes, the financial projections look better.\" The background woman says, \"That is a huge relief.\" The foreground woman reassures, \"We still have time to adjust.\"",
      "failureModes": [
        {
          "label": "Invisible-speaker misattribution",
          "detail": "“We still have time to adjust” belongs to the blonde woman with her back to the camera, but is assigned to the front-facing dark-haired woman."
        }
      ],
      "provenance": "Constructed failure illustration. The prompt above describes the intended conversation; this clip illustrates deliberately induced attribution errors."
    }
  ],
  "mucovid": [
    {
      "id": "032",
      "tag": "benchmark_utterance_annotated",
      "resultVideo": "mucovid/mucovid_001_raw.mp4",
      "activeSpeakerVideo": "mucovid/mucovid_001_active_speaker.mp4",
      "personImages": [
        "mucovid/mucovid_001_person_0.png",
        "mucovid/mucovid_001_person_1.png"
      ],
      "personDescriptions": [
        "young woman, light brown hair, plaid flannel",
        "young man, brown hair, gray long-sleeve"
      ],
      "videoInfo": {
        "fps": 29.97,
        "duration": 5.14,
        "totalFrames": 154
      },
      "utterances": [
        {
          "person": "person 1",
          "time": "0.20–0.88",
          "text": "\"My name is Doug.\"",
          "invisible": false
        },
        {
          "person": "person 0",
          "time": "1.04–1.60",
          "text": "\"I'm Ashley.\"",
          "invisible": false
        },
        {
          "person": "person 1",
          "time": "2.00–2.68",
          "text": "\"we live\"",
          "invisible": false
        },
        {
          "person": "person 0",
          "time": "3.00–3.96",
          "text": "\"out in the country.\"",
          "invisible": false
        },
        {
          "person": "person 1",
          "time": "4.64–5.12",
          "text": "\"Today we're going\"",
          "invisible": false
        }
      ],
      "caption": "Against light brown wood-paneled walls adorned with Western-themed illustrations of mountains, desert landscapes, windmills, and ranch scenes rendered in brown tones, two people sit facing the camera. On the left, a young white woman with long, light brown hair wears a red and black plaid flannel shirt over a black top, her hands resting in her lap as she offers a slight smile. To her right, a young white man with short brown hair and a full brown beard wears a gray long-sleeve shirt, holding a small dark object in his hands while maintaining a pleasant, neutral expression. The man says, **\"My name is Doug\"**, followed by the woman saying, **\"I’m Ashley\"**, then the man continuing, **\"and we live\"**, the woman adding, **\"out in the country\"**, and the man beginning, **\"Today we’re going\"** before the clip ends."
    },
    {
      "id": "149",
      "tag": "benchmark_utterance_annotated",
      "resultVideo": "mucovid/mucovid_002_raw.mp4",
      "activeSpeakerVideo": "mucovid/mucovid_002_active_speaker.mp4",
      "personImages": [
        "mucovid/mucovid_002_person_0.png",
        "mucovid/mucovid_002_person_1.png"
      ],
      "personDescriptions": [
        "young woman, blue scrubs, surgical cap",
        "older man, white lab coat"
      ],
      "videoInfo": {
        "fps": 24.2,
        "duration": 5,
        "totalFrames": 121
      },
      "utterances": [
        {
          "person": "person 0",
          "time": "0.76–2.16",
          "text": "\"Dr. Weber, how are you?\"",
          "invisible": false
        },
        {
          "person": "person 1",
          "time": "2.96–3.76",
          "text": "\"Oh, there she is.\"",
          "invisible": false
        },
        {
          "person": "person 1",
          "time": "4.28–4.88",
          "text": "\"How's that first day?\"",
          "invisible": false
        }
      ],
      "caption": "In a bustling hospital corridor, a young white woman in her 30s wearing blue scrubs and a light green surgical cap walks beside an older Black man in his 50s or 60s dressed in a white lab coat over dark blue scrubs, who carries a name tag and an ID badge on his chest; she offers a warm, pleasant smile while looking directly at him as he initially glances downward before meeting her gaze with a slight smile, and the background reveals a busy medical environment with other staff members, including a nurse in blue scrubs, a woman in a white coat, and another individual working at a counter. The woman says, **\"Dr. Weber, how are you?\"** The man replies, **\"Oh, there she is. How's that first day?\"**"
    },
    {
      "id": "230",
      "tag": "benchmark_utterance_annotated",
      "resultVideo": "mucovid/mucovid_003_raw.mp4",
      "activeSpeakerVideo": "mucovid/mucovid_003_active_speaker.mp4",
      "personImages": [
        "mucovid/mucovid_003_person_0.png",
        "mucovid/mucovid_003_person_1.png"
      ],
      "personDescriptions": [
        "woman, reddish-brown hair, navy trench coat",
        "man, late 30s, brown hair, corduroy jacket"
      ],
      "videoInfo": {
        "fps": 23.98,
        "duration": 5.17,
        "totalFrames": 123
      },
      "utterances": [
        {
          "person": "person 1",
          "time": "0.84–3.40",
          "text": "\"Everything. I mean, who's still up for birth and angels?\"",
          "invisible": false
        }
      ],
      "caption": "In an outdoor autumnal setting framed by dense brown and yellow foliage against a backdrop of green evergreen trees, two individuals stand near a light-colored bench while conversing with a third person whose back is turned to the camera; on the left, a woman with long, wavy reddish-brown hair in her late 20s or early 30s wears a navy blue double-breasted trench coat over a red top, carrying a black crossbody bag with a black strap across her chest, and faces right with a slight smile and calm, engaged expression as she listens; in the center, a man in his late 30s or early 40s with short, tousled light brown hair and stubble wears a tan suede or corduroy jacket with buttoned chest pockets over a white t-shirt, standing with hands near his waist while initially looking down then up toward the off-screen figure with a serious, concerned expression as he speaks, stating, **\"Everything. I mean, who's still up for burdening angels?\"**; the background features gentle ambient outdoor sounds and a faint, melancholic piano melody that underscores the contemplative mood of the exchange, while on the right, only the back of a woman with long, dark, wavy hair in a light gray top is visible, facing the two speakers as the dialogue unfolds."
    },
    {
      "id": "242",
      "tag": "benchmark_utterance_annotated",
      "resultVideo": "mucovid/mucovid_004_raw.mp4",
      "activeSpeakerVideo": "mucovid/mucovid_004_active_speaker.mp4",
      "personImages": [
        "mucovid/mucovid_004_person_0.png",
        "mucovid/mucovid_004_person_1.png",
        "mucovid/mucovid_004_person_2.png"
      ],
      "personDescriptions": [
        "man, black suit, grey tie",
        "woman, blonde hair, black dress",
        "woman, short blonde hair, black blazer"
      ],
      "videoInfo": {
        "fps": 23.98,
        "duration": 5.01,
        "totalFrames": 120
      },
      "utterances": [
        {
          "person": "person 2",
          "time": "0.00–5.00",
          "text": "\"You two don't get out of here. Inside five seconds, I'm telling the judge you came in here to get a mistrial.\"",
          "invisible": false
        }
      ],
      "caption": "In a modern corporate office setting defined by cool blue walls, a glass door with a sleek silver handle, and recessed ceiling lights, four formally dressed individuals stand in tense confrontation; a woman with short blonde hair, wearing a black blazer over a dark red turtleneck, stands to the right with a stern, authoritative expression while sharply pointing her right index finger toward two people across from her—a man in a black suit with a white shirt and grey tie, and a blonde woman beside him in a black V-neck dress with a braided updo, diamond earrings, and a ring on her left hand—while another man in a black suit with his back to the camera stands slightly left of the pair; the woman with short blonde hair delivers an urgent warning in a sharp, commanding voice: **\"You two don't get out of here inside five seconds, I'm telling the judge you came in here to get a mistrial,\"** with no significant sound effects present beyond the clear, intense dialogue."
    },
    {
      "id": "325",
      "tag": "benchmark_utterance_annotated",
      "resultVideo": "mucovid/mucovid_005_raw.mp4",
      "activeSpeakerVideo": "mucovid/mucovid_005_active_speaker.mp4",
      "personImages": [
        "mucovid/mucovid_005_person_0.png"
      ],
      "personDescriptions": [
        "man, black hair, pink polo shirt",
        "man, grayish-brown hair, floral shirt"
      ],
      "videoInfo": {
        "fps": 23.98,
        "duration": 5.26,
        "totalFrames": 126
      },
      "utterances": [
        {
          "person": "person 0",
          "time": "0.00–1.88",
          "text": "\"make sure everybody at the Nippo Bay feels special.\"",
          "invisible": false
        },
        {
          "person": "Invisible",
          "time": "1.88–2.60",
          "text": "\"No, no, of course.\"",
          "invisible": true
        },
        {
          "person": "Invisible",
          "time": "3.80–5.28",
          "text": "\"I appreciate you and Edwin.\"",
          "invisible": true
        }
      ],
      "caption": "Under a rustic thatched-roof bar shelter overlooking a sandy path flanked by lush greenery and distant palm trees, two men engage in a close conversation; the man facing the camera, a middle-aged Black individual with short black hair and a light pink short-sleeve polo shirt, leans forward with both arms resting on the bar, his expression shifting from earnest to warm as he smiles and nods while speaking, while the other man, a light-skinned individual with grayish-brown hair wearing a white shirt with blue floral patterns, listens attentively with his back to the camera, his posture leaning in slightly toward the speaker; the Black man says, **\"make sure everybody at the Napa Bay feels special\"**, followed by the other man responding, **\"No, no, of course. I appreciate you and Edwin\"**. "
    },
    {
      "id": "341",
      "tag": "benchmark_utterance_annotated",
      "resultVideo": "mucovid/mucovid_006_raw.mp4",
      "activeSpeakerVideo": "mucovid/mucovid_006_active_speaker.mp4",
      "personImages": [
        "mucovid/mucovid_006_person_0.png",
        "mucovid/mucovid_006_person_1.png",
        "mucovid/mucovid_006_person_2.png"
      ],
      "personDescriptions": [
        "middle-aged woman, dark hair updo, white blouse",
        "young woman, brown hair, pink pleated dress",
        "woman, short dark hair, purple patterned top"
      ],
      "videoInfo": {
        "fps": 23.98,
        "duration": 5.09,
        "totalFrames": 122
      },
      "utterances": [
        {
          "person": "person 1",
          "time": "0.00–3.00",
          "text": "\"And every day it feels like some new crisis.\"",
          "invisible": false
        },
        {
          "person": "Invisible",
          "time": "3.20–4.08",
          "text": "\"A Kappa Crisis?\"",
          "invisible": true
        },
        {
          "person": "Invisible",
          "time": "4.36–5.12",
          "text": "\"Wait, what?\"",
          "invisible": true
        }
      ],
      "caption": "In a sun-dappled garden lush with white roses and verdant greenery, three women stand in close conversation under bright daylight; on the left, a young white woman with long, wavy brown hair wears a pink pleated dress adorned with yellow and red floral patterns and holds a clear glass with a golden liquid, her expression earnest as she listens; the woman to her right—a middle-aged white woman with short, dark brown hair swept into an elegant updo—is dressed in a white blouse adorned with intricate embroidery of hummingbirds and leaves, along with a classic pearl necklace, speaks with a slightly raised eyebrow and a knowing smile, saying, **\"And every day, it feels like some new crisis\"**. A woman's voice off-screen responds, **\"A Kappa crisis? Wait, what?\"** Behind them, another woman with short dark hair in a purple patterned top partially observes the exchange amid the soft chatter of other attendees. "
    },
    {
      "id": "351",
      "tag": "benchmark_utterance_annotated",
      "resultVideo": "mucovid/mucovid_007_raw.mp4",
      "activeSpeakerVideo": "mucovid/mucovid_007_active_speaker.mp4",
      "personImages": [
        "mucovid/mucovid_007_person_0.png"
      ],
      "personDescriptions": [
        "middle-aged man, dark hair, flat cap, white t-shirt"
      ],
      "videoInfo": {
        "fps": 23.98,
        "duration": 5.21,
        "totalFrames": 124
      },
      "utterances": [
        {
          "person": "Invisible",
          "time": "0.84–2.84",
          "text": "\"Come on, everybody knows you too.\"",
          "invisible": true
        },
        {
          "person": "person 0",
          "time": "2.88–5.20",
          "text": "\"I mean that excuses my ignorance. I've been out to the man's camp.\"",
          "invisible": false
        }
      ],
      "caption": "In an outdoor setting framed by a weathered brick wall and a chain-link fence, with a pink floral wreath and a partially visible blue-and-white wreath hanging in the background, a middle-aged white man with short, dark hair and a weathered complexion appears in close-up, wearing a black leather flat cap and a plain white t-shirt; his face, marked by subtle wrinkles, shifts through a series of expressions as he begins by looking slightly upward and to his left with a faint, knowing smile, then turns his head to the right, his gaze dropping momentarily before lifting again with a slight smirk. The woman says, **\"Come on, everybody knows you too,\"** followed immediately by the man’s reply in a measured tone, **\"I mean that excuses my ignorance. I've been out to the man's camp,\"** with only ambient outdoor sounds present, creating a naturalistic atmosphere without prominent background music. "
    },
    {
      "id": "358",
      "tag": "benchmark_utterance_annotated",
      "resultVideo": "mucovid/mucovid_008_raw.mp4",
      "activeSpeakerVideo": "mucovid/mucovid_008_active_speaker.mp4",
      "personImages": [
        "mucovid/mucovid_008_person_0.png"
      ],
      "personDescriptions": [
        "middle-aged man, dark hair, black three-piece suit"
      ],
      "videoInfo": {
        "fps": 23.98,
        "duration": 5.26,
        "totalFrames": 126
      },
      "utterances": [
        {
          "person": "Invisible",
          "time": "0.00–1.68",
          "text": "\"No matter what we've been through, it's got to work.\"",
          "invisible": true
        },
        {
          "person": "person 0",
          "time": "1.72–2.68",
          "text": "\"Of course it has, sir.\"",
          "invisible": false
        },
        {
          "person": "person 0",
          "time": "4.08–5.24",
          "text": "\"I mean, my lord.\"",
          "invisible": false
        }
      ],
      "caption": "In a dimly lit interior room with dark brown walls, a framed landscape painting with a gold ornate frame hangs behind a middle-aged white man with neatly combed dark hair showing subtle graying at the temples; he wears a formal black three-piece suit, white dress shirt, and black tie while standing facing another person off-screen to the right whose gray hair and white cravat are partially visible. The man off-screen to the right states, **\"No matter what we've been through, it's got to work\"** The middle-aged white man with a small smile responds, **\"Of course it has, sir\"** before returning to a more solemn demeanor as he corrects himself with, **\"I mean, my lord\"**, all within the quiet, candlelit atmosphere where the only sounds are his deliberate, measured words and the soft glow of a single lit candle on the right side of the frame. "
    }
  ],
  "qualitative": [
    {
      "id": "009",
      "gtVideo": "qualitative_comp/qualitative_comp_001_gt.mp4",
      "oursCombined": "qualitative_comp/qualitative_comp_001_mucogen_combined.mp4",
      "methods": [
        {
          "name": "LTX-2.3",
          "video": "qualitative_comp/qualitative_comp_001_ltx_2_3_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "MOVA",
          "video": "qualitative_comp/qualitative_comp_001_mova_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "MagiHuman",
          "video": "qualitative_comp/qualitative_comp_001_magihuman_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "Ovi",
          "video": "qualitative_comp/qualitative_comp_001_ovi_result.mp4",
          "failureModes": [
            "Speech leakage to listeners"
          ]
        }
      ],
      "caption": "Inside a moving car during sunset, golden light streams through the rear window, illuminating the dark interior. Two men sit in the front seats, both wearing seatbelts. On the left, the driver is a white male with shoulder-length light brown hair, wearing sunglasses and a navy blue long-sleeved button-up shirt with rolled sleeves, offering a slight smile as he speaks. To his right, the passenger is a white male with dark brown hair styled back, a beard and mustache, dressed in a blue-and-white plaid button-up shirt with green accents, looking toward the driver with an expression of surprise or curiosity as he speaks. Through the windows, blurred greenery and the road indicate motion. The passenger says, **\"Don't know what's in the box\"**. The driver  replies, **\"No one knows what's in the box. \"** The passenger continues, **\"No one at all.\"**  The driver responds, **\"except for the Prime Minister of...\"** "
    },
    {
      "id": "096",
      "gtVideo": "qualitative_comp/qualitative_comp_002_gt.mp4",
      "oursCombined": "qualitative_comp/qualitative_comp_002_mucogen_combined.mp4",
      "methods": [
        {
          "name": "LTX-2.3",
          "video": "qualitative_comp/qualitative_comp_002_ltx_2_3_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "MOVA",
          "video": "qualitative_comp/qualitative_comp_002_mova_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "MagiHuman",
          "video": "qualitative_comp/qualitative_comp_002_magihuman_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "Ovi",
          "video": "qualitative_comp/qualitative_comp_002_ovi_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        }
      ],
      "caption": "In a sunlit living room, where natural light filters through a window with woven blinds and a framed photograph hangs on the wall, three young people sit on a beige couch adorned with a red blanket and colorful striped pillows. On the left, a young boy with curly brown hair wears a bright neon green sweatshirt featuring dark graphic designs and black pants; he holds a red game controller and speaks with a slightly annoyed expression. In the center, a young woman with long brown hair, dressed in a blue cardigan over a black lace-trimmed top and black tights, frowns with a bored expression as she grips a black game controller, stating, **\"Too long. I’m bored.\"** To the right, another young woman with dark hair and glasses, wearing a brown cardigan over a dark top and dark jeans, holds a white game controller while observing the others. The boy then makes an exaggerated face and adds, **\"Yeah. Next question. I feel like I’m in school,\"** with the dialogue delivered clearly against a backdrop of quiet room tone and no significant background music or sound effects."
    },
    {
      "id": "118",
      "gtVideo": "qualitative_comp/qualitative_comp_003_gt.mp4",
      "oursCombined": "qualitative_comp/qualitative_comp_003_mucogen_combined.mp4",
      "methods": [
        {
          "name": "LTX-2.3",
          "video": "qualitative_comp/qualitative_comp_003_ltx_2_3_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "MOVA",
          "video": "qualitative_comp/qualitative_comp_003_mova_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "MagiHuman",
          "video": "qualitative_comp/qualitative_comp_003_magihuman_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "Ovi",
          "video": "qualitative_comp/qualitative_comp_003_ovi_result.mp4",
          "failureModes": [
            "Incorrect speech content",
            "Invisible-speaker misattribution"
          ]
        }
      ],
      "caption": "In a modern room featuring large windows that reveal lush greenery and a stone wall outside, along with dark vertical blinds in the background, two men sit side-by-side on a light green textured couch. The man on the left is a middle-aged East Asian with short dark hair, wearing black-rimmed glasses and a navy blue button-down shirt adorned with small gold dots; he holds a wine glass filled with red wine and speaks with his mouth slightly open, his expression engaged and thoughtful. The man on the right is a young adult East Asian with short dark hair, dressed in a solid coral-red button-down shirt, maintaining a neutral expression with his lips slightly pursed as he listens. The man on the left says, **\"杨老板，那您是怎么看的？\"** followed by  a man's voice off-screen saying, **\"我是这样想的呢。\"**"
    },
    {
      "id": "372",
      "gtVideo": "qualitative_comp/qualitative_comp_004_gt.mp4",
      "oursCombined": "qualitative_comp/qualitative_comp_004_mucogen_combined.mp4",
      "methods": [
        {
          "name": "LTX-2.3",
          "video": "qualitative_comp/qualitative_comp_004_ltx_2_3_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "MOVA",
          "video": "qualitative_comp/qualitative_comp_004_mova_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution",
            "Missing speaking motion"
          ]
        },
        {
          "name": "MagiHuman",
          "video": "qualitative_comp/qualitative_comp_004_magihuman_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "Ovi",
          "video": "qualitative_comp/qualitative_comp_004_ovi_result.mp4",
          "failureModes": [
            "Missing speaking motion"
          ]
        }
      ],
      "caption": "In a dimly lit indoor setting defined by teal walls and a white grid-like wire mesh partition, a middle-aged white man with short, neatly styled graying hair holds a black rotary telephone receiver to his ear, his expression tense as he asks, **\"Are you working?\"** while dressed in a white dress shirt, a black-and-white striped tie, and a light brown knit vest; through the grid behind him, a younger white woman with blonde hair pulled back under a dark head covering appears to be speaking to an elderly white man with white hair and glasses, both partially obscured by the mesh, with framed pictures visible on the teal wall behind them, and as the off-screen man's voice responds, **\"Oh, hey, hey, we've got a couple of things going here,\"** the man’s brow furrows slightly before he replies, **\"Good. And are you safe?\"** with his mouth slightly open in earnest concern, the entire scene devoid of background music or prominent sound effects beyond the dialogue. no obvious background audio"
    },
    {
      "id": "049",
      "gtVideo": "qualitative_comp/qualitative_comp_005_gt.mp4",
      "oursCombined": "qualitative_comp/qualitative_comp_005_mucogen_combined.mp4",
      "methods": [
        {
          "name": "LTX-2.3",
          "video": "qualitative_comp/qualitative_comp_005_ltx_2_3_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "MOVA",
          "video": "qualitative_comp/qualitative_comp_005_mova_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "MagiHuman",
          "video": "qualitative_comp/qualitative_comp_005_magihuman_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "Ovi",
          "video": "qualitative_comp/qualitative_comp_005_ovi_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        }
      ],
      "caption": "In a formal office setting with vertically striped wallpaper, light-colored curtains, and a partially visible American flag, two men stand in serious conversation; the man on the left, appearing mid-40s with dark hair, a prominent mustache, and light skin, wears a black suit, white shirt, and dark plaid tie while gesturing with his right hand and maintaining a focused expression, whereas the man on the right, an older gentleman in his late 60s or early 70s with white hair, glasses, and light skin, wears a grey suit, white shirt, and green/yellow/red plaid tie while nodding slightly with a solemn demeanor, as tense dramatic orchestral music underscores their dialogue. The man on the left asks, **\"Has this meeting been requested by Mao or Stalin?\"** A man's voice off-screen replies, **\"We're not sure.\"** tense dramatic orchestral music."
    },
    {
      "id": "033",
      "gtVideo": "qualitative_comp/qualitative_comp_006_gt.mp4",
      "oursCombined": "qualitative_comp/qualitative_comp_006_mucogen_combined.mp4",
      "methods": [
        {
          "name": "LTX-2.3",
          "video": "qualitative_comp/qualitative_comp_006_ltx_2_3_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "MOVA",
          "video": "qualitative_comp/qualitative_comp_006_mova_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "MagiHuman",
          "video": "qualitative_comp/qualitative_comp_006_magihuman_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "Ovi",
          "video": "qualitative_comp/qualitative_comp_006_ovi_result.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        }
      ],
      "caption": "In a hospital room illuminated by natural light filtering through a large window with a city skyline view and green-and-white striped curtains, three individuals engage in a tense conversation; a bearded white man in his 40s sits in a wheelchair wearing a light blue hospital gown with white dots and a blue medical wristband on his left wrist, his expression troubled with furrowed brows as he looks down before shifting his gaze toward the speaker, while a white woman in her 40s with short brown hair, dressed in a dark purple zip-up cardigan over a pink top and a delicate gold necklace, sits on a hospital bed beside him with her right hand resting reassuringly on his shoulder, her face marked by anxious concern as she asks, **\"So then you would just leave the cyst in him?\"**, and across from them, a man in his 30s or 40s with dark hair seen from behind in a dark suit jacket faces the pair. The man in a dark suit jacket responds with a measured tone, **\"Other than the pain, it’s not harming Hunter.\"** The dialogue unfolds against the quiet hum of the clinical space without background music or significant sound effects."
    },
    {
      "id": "100",
      "gtVideo": "qualitative_comp/qualitative_comp_007_gt.mp4",
      "oursCombined": "qualitative_comp/qualitative_comp_007_mucogen_combined.mp4",
      "methods": [
        {
          "name": "LTX-2.3",
          "video": "qualitative_comp/qualitative_comp_007_ltx_2_3_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "MOVA",
          "video": "qualitative_comp/qualitative_comp_007_mova_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "MagiHuman",
          "video": "qualitative_comp/qualitative_comp_007_magihuman_result.mp4",
          "failureModes": [
            "Incorrect turn timing",
            "Speech leakage to listeners"
          ]
        },
        {
          "name": "Ovi",
          "video": "qualitative_comp/qualitative_comp_007_ovi_result.mp4",
          "failureModes": [
            "Speech leakage to listeners"
          ]
        }
      ],
      "caption": "In a dimly lit, ornately decorated interior space featuring a large, faded mural on the wall and a gleaming golden luggage rack beside a potted plant, three men stand in conversation; the foreground is dominated by a balding middle-aged white man with a gold chain around his neck, wearing a dark patterned collared shirt, who smiles toward another middle-aged white man with slicked-back dark hair streaked with gray, dressed in a black shirt adorned with white floral patterns, as the balding middle-aged white man places his hand on the speaker’s shoulder while responding with a knowing, subtle smile; behind them, a younger man with dark hair, wearing a dark blazer over a brown shirt and a gold pendant necklace, stands silently observing with a serious expression. The middle-aged man in the center with slicked-back hair says, **\"Mandatory. Like a commander. I like that. That’s respect\"**."
    },
    {
      "id": "144",
      "gtVideo": "qualitative_comp/qualitative_comp_008_gt.mp4",
      "oursCombined": "qualitative_comp/qualitative_comp_008_mucogen_combined.mp4",
      "methods": [
        {
          "name": "LTX-2.3",
          "video": "qualitative_comp/qualitative_comp_008_ltx_2_3_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "MOVA",
          "video": "qualitative_comp/qualitative_comp_008_mova_result.mp4",
          "failureModes": [
            "Incorrect speech content"
          ]
        },
        {
          "name": "MagiHuman",
          "video": "qualitative_comp/qualitative_comp_008_magihuman_result.mp4",
          "failureModes": [
            "Wrong-speaker attribution"
          ]
        },
        {
          "name": "Ovi",
          "video": "qualitative_comp/qualitative_comp_008_ovi_result.mp4",
          "failureModes": [
            "Missing speaking motion"
          ]
        }
      ],
      "caption": "In a sunlit historical East Asian street scene, two men stand prominently in the foreground amid a bustling backdrop of other figures near a stone railing and traditional red-and-white buildings with green foliage. The man on the left, an East Asian man in his early thirties, wears a dark green conical hat and a brown tunic over a green undergarment, with a bamboo staff slung over his shoulder; his expression is tense and concerned, lips slightly parted as he looks ahead with wide eyes. Beside him, the man on the right, an East Asian man in his late thirties or early forties, has long hair tied in a topknot with a green headband, a green tunic with brown leather straps over a white undergarment, and a stern, serious gaze as he stands with arms crossed. In the midground, a middle-aged East Asian woman in a light-colored tunic with her hair tied back appears focused on something off-screen, while other indistinct figures move behind them. The man on the right says, **\"뭔 소리요? 싸게 읽어 봐야 언니\"**."
    }
  ],
  "ablation": [
    {
      "id": "059",
      "gtVideo": "ablation/ablation_001_gt.mp4",
      "caption": "In an outdoor urban setting, three women engage in a serious conversation against the backdrop of a brick building with barred windows and a chain-link fence covered in vines; the central figure, a Black woman in her late 40s with short, curly dark hair, wears a black wrap coat over a beige V-neck sweater and a gold watch while holding a red-topped evidence bag, her expression grave and focused as she states, **\"Let's get a handwriting analysis done on that note\"**, to a white woman with red hair tied in a ponytail, dressed in a black coat over a pink collared shirt, who listens intently with a serious, concerned look, and replies, **\"This was staged then.\"** A partially visible blonde woman stands to the right, and a uniformed officer in a blue cap and dark blue uniform is seen partially behind them; the central woman then continues with a grave expression. The blonde woman on the right says, **\"Yeah, looks that way\"**, all without any background music or significant sound effects beyond the clear dialogue.",
      "methods": [
        {
          "name": "Baseline",
          "video": "ablation/ablation_001_baseline_result.mp4",
          "failureModes": [
            "Speech leakage to listeners",
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "MTSG",
          "displayName": "w/ MTSG",
          "combined": "ablation/ablation_001_mtsg_combined.mp4",
          "failureModes": [
            "Invisible-speaker misattribution"
          ]
        },
        {
          "name": "UPBS",
          "displayName": "w/ UPBS",
          "video": "ablation/ablation_001_upbs_result.mp4",
          "failureModes": [
            "Speech leakage to listeners"
          ]
        },
        {
          "name": "MuCoGen",
          "combined": "ablation/ablation_001_mucogen_combined.mp4",
          "successLabel": "Correct speaker attribution"
        }
      ]
    }
  ],
  "generalization": [
    {
      "id": "003_step_005000_3",
      "video": "generalization/generalization_001_result.mp4",
      "caption": "In a sunlit classical library surrounded by tall bookshelves, an anthropomorphic red fox in a navy suit and striped tie stands on the left holding a red rose, while a small gray rabbit police officer in a dark blue uniform stands on the right looking up at him. The fox on the left smiles warmly and presents the rose, saying, **\"Look what I found, Carrots\"**, as the rabbit listens in surprise; the rabbit on the right then blinks and asks, **\"Is that really for me?\"**, while the fox stays quiet; the fox then softly reassures her, **\"Always for you\"**, as the rabbit listens attentively with a closed mouth.",
      "refImage": "generalization/generalization_001_reference.png"
    },
    {
      "id": "005_step_005000_5",
      "video": "generalization/generalization_002_result.mp4",
      "caption": "On a school rooftop during a vibrant sunset with orange clouds and a chain-link fence, the camera captures an over-the-shoulder view framed from behind a dark-haired boy in a white school shirt in the foreground, facing a short-haired girl in the middle ground. The girl facing the camera speaks with an emotional, pleading look, **\"一緒に行くって約束したでしょ！\"**, while the boy listens quietly; the boy in the foreground then replies in a calm, reassuring tone, **\"約束は絶対に破らないよ\"**, while the front-facing girl remains silent and listens without moving her lips.",
      "refImage": "generalization/generalization_002_reference.png"
    },
    {
      "id": "007_step_005000_7",
      "video": "generalization/generalization_003_result.mp4",
      "caption": "In a shadowy black-and-white film noir speakeasy with drifting cigarette smoke and a single swinging lamp, three gangster penguins stand side by side in pinstripe suits and fedoras: a broad-shouldered penguin with a scar over his eye on the left, a lanky penguin twirling a monocle in the center, and a nervous small penguin clutching a violin case on the right. The scarred penguin on the left leans forward and growls in a low, gravelly voice, **\"In this town, the ice never melts and neither do debts\"**, while the other two penguins listen stiffly with sealed beaks.",
      "refImage": "generalization/generalization_003_reference.png"
    },
    {
      "id": "010_step_005000_10",
      "video": "generalization/generalization_004_result.mp4",
      "caption": "Inside a LEGO-built space station observatory with clear plastic windows showing a starry sky, three astronaut minifigures stand side by side on the observation deck: an orange-suited astronaut with a scratched visor on the left, a white-suited astronaut holding a tiny wrench in the center, and a blue-suited minifigure with a happy printed face on the right. The orange astronaut on the left points at a distant LEGO planet and speaks in a cheerful, slightly muffled voice, **\"Up here, every star is just another brick waiting to be placed\"**, while the other two minifigures listen with fixed plastic smiles and motionless printed mouths.",
      "refImage": "generalization/generalization_004_reference.png"
    },
    {
      "id": "012_step_005000_12",
      "video": "generalization/generalization_005_result.mp4",
      "caption": "In a warm playroom at dusk with a plush-carpet floor and a striped toy chest, three teddy-bear plush toys stand side by side under a glowing string of fairy lights: a large honey-brown bear with a patched ear on the left, a cream-colored bear holding a small violin in the center, and a tiny corduroy bear in a red bow tie on the right. The honey-brown bear on the left smooths his fur and announces in a soft, buttery voice, **\"Home is where someone waits up to hear you day\"**, while the cream and corduroy bears listen with button eyes and stitched mouths.",
      "refImage": "generalization/generalization_005_reference.png"
    },
    {
      "id": "018_step_005000_18",
      "video": "generalization/generalization_006_result.mp4",
      "caption": "在暖色系的柴犬理发店里，三只系着条纹围裙的柴犬并排站在暖黄的壁灯下：左边是戴着老花镜的店长柴犬，中间是叼着梳子的年轻柴犬，右边是捧着热毛巾的学徒柴犬。店长柴犬轻轻按了按柜台，用缓慢而郑重的口吻说道，**\"剪下的每一根毛，都与客人告别\"**, 另外两只柴犬竖起耳朵认真听着，全程紧闭嘴巴。",
      "refImage": "generalization/generalization_006_reference.png"
    },
    {
      "id": "025_step_005000_25",
      "video": "generalization/generalization_007_result.mp4",
      "caption": "In a gleaming Parisian pastry kitchen of soft painted 2D animation, three anthropomorphic mice chefs stand side by side beside a marble worktop of macarons: a seasoned mouse with a tall white toque on the left, a cheerful mouse clutching a whisk in the center, and a tiny mouse balancing a silver spoon on the right. The toque-wearing mouse on the left folds his arms and declares in a refined, lilting voice, **\"La croûte dorée est la poésie du beurre\"**, while the whisk mouse and the spoon mouse listen with rapt attention and closed mouths.",
      "refImage": "generalization/generalization_007_reference.png"
    },
    {
      "id": "031_step_005000_31",
      "video": "generalization/generalization_008_result.mp4",
      "caption": "In a torchlit medieval tavern of rich oil-painting style, a stocky dwarf with a copper tankard stands at the bar on the left, an elf with pointed ears leans against an oak pillar in the center, and a halfling in a patched coat balances on a stool on the right. The dwarf raises his tankard and booms, **\"My tale beats yours, elf!\"**, the elf smirks and replies, **\"Your beard tells it shorter\"**, the halfling chimes in, **\"Mine has a dragon AND a re...\"**, while the elf watches quietly with lips closed.",
      "refImage": "generalization/generalization_008_reference.png"
    },
    {
      "id": "048_step_005000_48",
      "video": "generalization/generalization_009_result.mp4",
      "caption": "At a late-night street-food cart with sizzling skewers under a violet Seoul night, three anthropomorphic cats sit side by side on low stools: a ginger cat with a baseball cap in the middle, a black cat with perked ears on the left, and a white cat nursing a cola on the right. The ginger cat points at the skewers, **\"떡볶이 두 개!\"**, the black cat waves a paw, **\"저는 순한 걸로 하나, 뭐가 달라요?\"**, while the black cat listens quietly with closed mouth.",
      "refImage": "generalization/generalization_009_reference.png"
    },
    {
      "id": "050_step_005000_50",
      "video": "generalization/generalization_010_result.mp4",
      "caption": "In a sunlit Parisian boulangerie with golden baguettes stacked along the counter, two anthropomorphic mice stand before the glass display while a third, smaller mouse balances on the counter edge. The big gray mouse points at a baguette, **\"Celle-ci est trop cuite\"**, the brown mouse taps the glass, **\"Celle-là est trop pâle\"**, the small mouse squeaks, **\"Prenons celle qui sent le beurre\"**, while the baker's bell rings softly and the others listen quietly.",
      "refImage": "generalization/generalization_010_reference.png"
    },
    {
      "id": "051_step_005000_51",
      "video": "generalization/generalization_011_result.mp4",
      "caption": "On a dewy forest trail of glossy 3D animation, the camera captures an over-the-shoulder view framed from behind a small brown fawn with white spots standing in the left foreground, facing a tall fox in a ranger's green vest in the middle ground. The fox facing the camera smiles kindly and asks, **\"Lost, little one?\"**, while the fawn listens quietly; the fawn in the foreground then replies in a small, hopeful voice, **\"I followed a firefly\"**, and the fox chuckles softly, **\"Then it led you to the right path\"**, while the fawn's ears twitch but its lips stay still.",
      "refImage": "generalization/generalization_011_reference.png"
    },
    {
      "id": "060_step_005000_60",
      "video": "generalization/generalization_012_result.mp4",
      "caption": "At the edge of a clay-modeled cornfield at golden hour, the camera captures an over-the-shoulder view from behind a scruffy black crow perched on a fence post in the left foreground, facing a straw-filled scarecrow farmer with patchwork overalls in the middle ground. The scarecrow facing the camera tips his broken hat and calls out, **\"The wind says my arms are loose!\"**, while the crow tilts its head; the crow in the foreground then caws back, **\"Then hug the corn, old rag!\"**, and the scarecrow's burlap mouth crinkles, **\"The corn hugs back, friend\"**, while the crow ruffles its feathers and keeps its beak shut.",
      "refImage": "generalization/generalization_012_reference.png"
    },
    {
      "id": "068_step_005000_68",
      "video": "generalization/generalization_013_result.mp4",
      "caption": "在圆滚滚的 3D 动画熊猫保育园里，镜头从前景一只穿着浅绿工作服的熊猫保育员背影拍过去，保育员蹲在竹子围栏边背对镜头，中景是一只绒毛蓬松的熊猫幼崽，正面对镜头坐在地上。幼崽面对镜头，抱着半根竹笋，奶声奶气地问，**\"笋壳剥给谁吃？\"**, 保育员静静听着；前景的保育员转过头笑着回答，**\"给最会吃的小熊\"**, 幼崽歪头又问，**\"那是我吗？\"**, 保育员点头，幼崽开心地晃着脑袋，小嘴闭着，不再出声。",
      "refImage": "generalization/generalization_013_reference.png"
    },
    {
      "id": "079_step_005000_79",
      "video": "generalization/generalization_014_result.mp4",
      "caption": "In a rain-slicked film-noir newsroom after hours, a lone cat reporter with a fedora and a dangling press camera stands beside a humming green radio, the only light in the room. A crackling radio voice speaks from outside the camera frame, **\"The mayor's siren rang at midnight, Mr. Whiskers\"**, while the cat's ears swivel; the cat reporter then leans toward the radio and answers in a low, dry voice, **\"Give me something I can print\"**, and the radio crackles back, **\"Print the silence between sirens\"**.",
      "refImage": "generalization/generalization_014_reference.png"
    },
    {
      "id": "089_step_005000_89",
      "video": "generalization/generalization_015_result.mp4",
      "caption": "In the middle of a misty watercolor forest clearing, a small green turtle with a mossy shell stands alone beside a fallen silver leaf, peering up at the fog with patient eyes. An unseen drifting forest voice speaks from outside the camera frame, **\"Turtle, the fog took the trail again\"**, while the turtle blinks slowly; the turtle then answers in a quiet, unhurried voice, **\"Then I will sit until it remembers\"**, and the forest voice whispers back kindly, **\"Then sit, little one, for it has...\"**.",
      "refImage": "generalization/generalization_015_reference.png"
    },
    {
      "id": "094_step_005000_94",
      "video": "generalization/generalization_016_result.mp4",
      "caption": "在静谧的毛绒布偶小院里，一只穿着黄睡衣的小兔子布偶独自坐在小板凳上，怀里抱着一只星空图案的枕头，望着头顶一轮毛绒月亮。一个温柔慈祥的月亮奶奶声音从画面外传来，**\"睡哪朵云上？\"**, 小兔子静静听着；小兔子随后仰起脸，怯怯地答道，**\"睡奶奶唱歌的那朵！\"**, 月亮奶奶的声音轻轻笑了，**\"那朵云，我天天替你擦\"**。",
      "refImage": "generalization/generalization_016_reference.png"
    }
  ],
  "mocubench": [
    {
      "id": "146",
      "video": "mocubench/mocubench_001_video.mp4",
      "category": "Normal",
      "subType": "Multi-turn dialogue",
      "caption": "In a brightly lit television news studio, two anchors stand behind a sleek black desk, surrounded by the modern infrastructure of a broadcast environment. The male anchor, a middle-aged Caucasian man in a dark suit jacket over a crisp white shirt, gestures animatedly with his hands as he speaks, his expression warm and engaged, while the female anchor, a middle-aged Caucasian woman in a form-fitting sleeveless purple dress, listens intently with a smile before responding, her hands open in expressive emphasis. The background reveals an open office space with desks, computers, and staff working under overhead lighting. The male anchor states, **\"those little things and they get the biggest smiles\"**, the female anchor responds with a bright, appreciative tone, **\"Oh, such independence for them\"**, to which he nods in agreement, adding, **\"Yeah. It's all about independence\"**, before she concludes with enthusiasm, **\"You know, gifts are independence. I love it\"**, their conversation flowing naturally amid the professional studio ambiance without any background music or significant sound effects beyond their clear, conversational voices."
    },
    {
      "id": "077",
      "video": "mocubench/mocubench_002_video.mp4",
      "category": "Normal",
      "subType": "Multi-turn dialogue",
      "caption": "In a domestic interior featuring floral wallpaper, blue draped curtains, a diamond-patterned window, framed artwork, and a wooden staircase railing, three individuals stand in a medium shot. On the left, a bald white man in his 50s or 60s with a white goatee wears a white short-sleeve polo shirt bearing a blue circular logo and a yellow lanyard, paired with bright blue pants; he maintains a stern expression with arms crossed while looking slightly upward.  Behind him to the right, a white man in his 40s or 50s with thinning brown hair, dressed in a red cardigan over a red-and-white checkered shirt, displays a concerned expression with slightly furrowed brows as he looks directly ahead, stating, **\"carpooled so no one would get here first.\"** In the foreground to the right, a white woman with long dark hair in her 40s or 50s wears a white collared shirt beneath a light brown cardigan; she begins with a serious expression before shifting to a sarcastic or playful look as she responds, **\"And so we could pregame, right? My big hunk of yum.\"**"
    },
    {
      "id": "160",
      "video": "mocubench/mocubench_003_video.mp4",
      "category": "Normal",
      "subType": "Monologue",
      "caption": "In a sun-drenched outdoor emergency scene bustling with activity, three people sit on folding chairs before a \"MIAMI-DADE MEDIC\" ambulance while others move through the background; a young man in a dark blue EMS uniform with a visible \"MIAMI-DADE MEDIC\" patch, blue gloves, and a clipboard gestures emphatically with his gloved hand as he speaks to a woman with long brown hair wearing a purple long-sleeved top and a police badge on her belt, who leans forward intently with a concerned expression, while a man in a light purple button-down shirt with rolled sleeves and a watch listens with a serious, worried look. The woman says, **\"Yeah, you were right, they want everything we have on DDK\"**, then continues, **\"They slow us down to a crawl. Is he alright?\"** The chaotic environment hums with movement around them, including a wheelchair and medical bags scattered near the ambulance."
    },
    {
      "id": "235",
      "video": "mocubench/mocubench_004_video.mp4",
      "category": "Normal",
      "subType": "Monologue",
      "caption": "In a dimly lit apartment kitchen during a Halloween party, Sheldon Cooper, a white man in his early 30s with short black hair and a serious expression, stands beside Leonard Hofstadter, a white man in his early 30s with brown curly hair and glasses; both are facing a shirtless, muscular white man in his 30s with short brown hair and a black necklace, whose back is to the camera. Sheldon wears a black-and-white vertically striped jumpsuit resembling a prison uniform with a single white button, while Leonard sports a green coat over a brown vest and white shirt. In the background, a woman in a pink tutu-like dress with a golden crown stands near a refrigerator, another figure in a brown robe with a red hood is partially visible, and a person in a colorful mask appears to the right, all under warm lighting that contrasts with the dark blue evening sky visible through a window with green curtains. Amidst the ambient noise of the crowded gathering, Sheldon delivers the line in a measured, exasperated tone: **\"Given the reaction to my costume, this party is a scathing indictment of the American education system.\"**"
    },
    {
      "id": "004",
      "video": "mocubench/mocubench_005_video.mp4",
      "category": "Challenging",
      "subType": "Over-the-shoulder",
      "caption": "On a bright, sunny day at a marina, a young white woman with blonde hair pulled back into a neat low bun stands on a wooden dock beside a white sailboat, her face illuminated by the sun as she looks up at a bearded white man in a blue and white plaid shirt whose back is partially turned to the camera; she wears a form-fitting green zip-up hoodie over a white mesh athletic top and a delicate gold necklace, her expression gentle with a soft smile and crinkled eyes as she speaks, while the calm blue water behind her reflects the clear sky and distant sailboats dot the horizon near a tree-lined shore. The woman says, **\"Why?\"** The man replies, **\"Because if you get them wrong, I know you're stressed,\"** and the woman responds, **\"Using dyslexia to spy on me,\"** with no background music or significant sound effects present, only the natural ambient sounds of the waterfront setting."
    },
    {
      "id": "394",
      "video": "mocubench/mocubench_006_video.mp4",
      "category": "Challenging",
      "subType": "Over-the-shoulder",
      "caption": "A young white man in his late teens or early twenties with neatly styled dark brown hair stands facing right in an office setting with beige walls, wearing a white t-shirt beneath an unbuttoned red and black plaid flannel shirt with a black hood; his expression is serious with slightly furrowed brows as he listens to a partially visible Black man in a white collared shirt whose back faces the camera, while behind the young man, a framed portrait of a man in a suit hangs on the left wall and two signs are visible on the right—one maroon with white text reading “NO SMOKING ALLOWED ON SCHOOL PROPERTY” and another black with white text stating “DO NOT USE CELLPHONES”—as the black man states, **\"...and it’s for students who are interested in careers in law enforcement,\"** prompting the young man to respond with a slight shift in his expression toward animation, **\"I’m interested. What does it entail, sir?\"**"
    },
    {
      "id": "005",
      "video": "mocubench/mocubench_007_video.mp4",
      "category": "Challenging",
      "subType": "Off-screen speech",
      "caption": "In the formal setting of what appears to be the UK House of Commons, characterized by its distinctive green leather benches and ornate wooden paneling, Theresa May, a white woman with short, grayish-blonde hair, leans forward slightly while speaking with focused intensity; she wears a navy blue blazer over a white blouse, accentuated by a dark red beaded necklace, and her mouth is open mid-sentence as she states, **\"We are working for a good deal with...\"** Behind her, a woman in a black-and-white patterned dress holds a blue pen and yellow notepad, while to May’s right, a gray-haired white man in a dark suit, light blue tie, and white shirt looks downward with a serious expression. Following May’s statement, a male narrator’s voice clearly asks, **\"Does Britain need a new center party? Both of ...\"**"
    },
    {
      "id": "333",
      "video": "mocubench/mocubench_008_video.mp4",
      "category": "Challenging",
      "subType": "Off-screen speech",
      "caption": "Inside a dimly lit, metallic spacecraft interior lined with exposed pipes, cables, and industrial panels, two people in white NASA spacesuits stand amid the tense atmosphere of a space station; the younger woman on the left, appearing to be in her late teens or early twenties with short dark hair, has tears streaming down her face, while the older man on the right, a middle-aged white man with short dark hair, leans forward slightly with wide eyes and an open mouth, his face etched with shock and urgency. The older man says, **\"More\"**, and continues, **\"More what?\"**. A man's voice off-screen responds, **\"More data. You need to see into a black hole\"**."
    }
  ],
  "figures": {
    "datasetAnalysis": "mucovid/mucovid_figure_002.svg",
    "methodOverview": "qualitative_comp/qualitative_comp_figure_002.png"
  }
};

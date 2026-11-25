# Headway Study Hub — التوثيق الكامل (المرجع الأساسي)

> آخر تحديث: بعد التحديث 6 (10 نوفمبر 2026). هذا الملف هو المرجع الأول: لمتابعة العمل في أي محادثة جديدة، ارفع هذا الملف وملف `_notes/00-READ-ME-FIRST.txt` وأعطِ المساعد «برومبت المتابعة» الموجود في آخر الملف.

## 1) ما هو الموقع

موقع دراسة ثابت (HTML/CSS/JS + Tailwind مبني مسبقاً) بواجهة عربية ومحتوى إنجليزي لكورس **Headway Intermediate (5th ed.) — الوحدة 1، صفحات 9–18**، مع ثلاثة كورسات/أقسام إضافية:

| الكورس | المعرّف | الصفحات | ملاحظات |
|---|---|---|---|
| Headway Intermediate Unit 1 | `headway-b1` / unit `u1` | 9–18 | الكورس الأساسي (الكتاب + الدروس) |
| RINO'S COURSE (مذكرات الحصص) | `rino` / unit `rino1` | 101–106 | كورس منفصل يظهر في الشريط الجانبي والرئيسية، وليس في الهيدر |
| INTERCHANGE 1 (المعلمة Sondos Badawi) | `interchange` / unit `ic1` | 201–205 | الوحدة 1: مراجعة، واجبان، ورقة الحصة الأخيرة، الاختبار النهائي |

- لا تسجيل دخول ولا خادم: يعمل بفتح `index.html` مباشرة (file://) أو عبر أي استضافة ثابتة أو TrebEdit على الهاتف (`localhost:8080`).
- التقدّم والإجابات والملاحظات والإعدادات تُحفظ في `localStorage` (مفتاح `hw1.*`) ويمكن تصديرها/استيرادها من الإعدادات ← النسخ الاحتياطي.
- الاستخدام شخصي (premise المستخدم). الحقوق لأصحابها وتُذكر في كل صفحة/ملف (CREDITS وحقل credit بالمكتبة).

## 2) قواعد ثابتة يجب عدم كسرها

- المحتوى بالإنجليزية والعربية مساعدة فقط؛ كل الأسئلة محلولة ومشروحة (`why` عربي + `whyEn` إنجليزي).
- لا يُكتب في الموقع أي شيء عن مكان وضع الملفات أو الفيديو (هذا فقط في `_notes/`).
- أرقام الهاتف تُخفى/تُستبدل (النموذج 555-0143). رقم المستخدم الحقيقي في ملف المحفظة **يجب ألا يظهر أبداً**؛ لذلك ملف `Rebhe_Homework_Portfolio_Unit1.html` لم يُضَف للمكتبة، وصفحات 202–204 أُعيد بناؤها من محتواه برقم نموذجي.
- لكل ملف خارجي مستخدم كمحتوى: اذكر المصدر والحقوق (CREDITS / credit) وضغط الملفات الكبيرة إن بقيت الجودة.
- لا تُصنَّف الملفات من الصفحة الأولى فقط: اقرأ المحتوى.
- الأسئلة التي كتبناها نحن تُعلَّم بـ «(added by us)».
- أي تعديل جديد يُطبَّق على كل ما سبق (كل الكورسات والصفحات).
- التسليم: ملفات تحديث مضغوطة `update-N.zip` (delta فوق النسخة الأساسية 29.7MB)، الحد 30 MiB للملف الواحد، ويدمجها المستخدم بالترتيب يدوياً.
- الرد على المستخدم بالعربية المبسطة.

## 3) بنية المجلدات

```
index.html            الصفحة الوحيدة (SPA بمسارات hash) + meta/SEO + JSON-LD
sw.js                 service worker للعمل دون إنترنت (يعمل على http/https فقط)
manifest.webmanifest  PWA     robots.txt
assets/css/           tailwind.css (مبني) · site.css (كل التنسيق اليدوي) · fonts.css (خطوط محلية)
assets/fonts/         woff2 محلية (9 عائلات، رخصة OFL، مصدرها Fontsource)
assets/icons/         أيقونات PWA + og-image.jpg (1200×630)
assets/js/            store.js · tts.js · render.js · app.js · tools.js · extra.js
assets/precache.json  قوائم الملفات للوضع دون إنترنت (يولّده tools/make_sw.py)
data/                 كل المحتوى كـ JS globals (انظر القسم 5)
data/pages/           ملف لكل صفحة: p09..p18 · r101..r106 · i201..i205
media/images/         unit-1 (لقطات الكتاب) · slides · gen (صور مولّدة) · files (مصغّرات المكتبة) · gallery · deco
media/audio/unit-1/   track-1.N.mp3
media/video/unit-1/   intro-1.mp4 · nick-bruckman.mp4
media/files/          ملفات التنزيل (PDF/DOCX/PPTX) — library/<cat>/...
_notes/               ملاحظات خاصة (لا تُنشر) + image-prompts
tools/                scan-files.py · make_sw.py · deploy.py
.github/workflows/    pages.yml        .gitlab-ci.yml
build/                tailwind.config.js + tw-input.css (لإعادة بناء tailwind.css)
docs/                 هذا الملف + image-prompts-v6.md
```

## 4) تشغيل وبناء واختبار

- فتح مباشر: `index.html`.
- إعادة بناء Tailwind (عند إضافة كلاسات tailwind جديدة): `cd build && ./node_modules/.bin/tailwindcss -c tailwind.config.js -i tw-input.css -o ../assets/css/tailwind.css --minify` (يلزم `npm i` داخل build).
- فحص صياغة JS: `node --check assets/js/*.js data/**/*.js`.
- اختبار آلي: Playwright (Chromium مثبّت) بنافذة 1280 و390 مع التقاط أخطاء الـconsole والـoverflow.
- ضغط PDF: `qpdf --object-streams=generate --recompress-flate` أو `gs -dPDFSETTINGS=/ebook`؛ الصور: PIL.
- توليد الوضع دون إنترنت: `python3 tools/make_sw.py` (يحدّث assets/precache.json ورقم نسخة sw.js).
- بناء نسخة النشر: `python3 tools/deploy.py --url https://... [--public]` ← مجلد `dist/`.

## 5) البيانات (globals) وبنيتها

| الملف | المتغيرات | الوظيفة |
|---|---|---|
| data/course.js | `COURSES`, `CREDITS`, `KIND_AR` | تعريف الكورسات/الوحدات/أرقام الصفحات، نص الحقوق لكل صفحة (en/ar)، ترجمة نوع الصفحة |
| data/pages/*.js | `window.PAGES` (push لكل صفحة) | محتوى الصفحات |
| data/topics.js | `TOPICS` | صفحات مواضيع (قواعد g-*، كلمات w-*) ومنها `g-questions` ومرجع القواعد 1.1/1.2 |
| data/library.js | `FILES` (+`CATS` في tools.js) | بطاقات المكتبة (ملفات) |
| data/resources.js | `RESOURCES`, `MEDIA_LINKS` | الروابط الخارجية وروابط الوسائط |
| data/files.js | `FILES` للدروس | ملفات الدروس PDF/PPTX (يُحدَّث بـ tools/scan-files.py) |
| data/scripts.js | `SCRIPTS` | نصوص تسجيلات الكتاب |
| data/oxford.js / oxford-ar.js | `OXFORD`, `OXFORD_AR` | قائمة Oxford (3000/5000) + 5323 ترجمة عربية موازية (كتبناها نحن، لم تُراجع كلمة بكلمة) |
| data/ref.js | `VERBS`, `SOUNDS`, `CLASS` | 112 فعلاً شاذاً، 45 رمز نطق، صفحة الصف (الجدول/الواجب/خريطة الوحدات) |
| data/images.js | `GEN_BASE`, `GEN_COVERS`, `GEN_SLOTS` | الصور المولّدة ومكان ظهورها |
| data/lessons/ | — | بيانات شرائح الدروس |

### مخطط الصفحة
```js
{ id, num, unit, course, kind, title, titleAr, summaryAr, summaryEn, sections:[{ id, no, tag, titleEn, titleAr, instrEn, instrAr, blocks:[...] }] }
```
أنواع البلوك `t:` — `box` (قوائم en/ar) · `text` · `photo` · `note` (tone: tip|grammar) · `audio` · `media` · `steps` · `bubbles` · `model` · `matchset` · `puzzle` · `quiz` · `q`.

أنواع السؤال `q.kind`:
- `open` : `answer, why, whyEn`
- `fill` : `prompt, answer[] (بدائل مقبولة), ar, why, whyEn`
- `tf` : `answer` (boolean)
- `choice` : `options[], correct (index), why, whyEn`

## 6) المسارات (hash routes)

`#/` الرئيسية · `#/p/N[/sec]` صفحة · `#/t/ID` موضوع · `#/lib[/cat]` الملفات والروابط · `#/oxford` · `#/lessons` · `#/grammar` · `#/words` · `#/glossary` · `#/cards` · `#/quiz` · `#/saved` · `#/class` · `#/verbs` · `#/sounds`.
الصفحات تُحدَّد بالرقم؛ `ordOf(n)` يعيد ترتيب كورس الصفحة للتالي/السابق (ORDER / RORDER / IORDER). المسارات بالـhash لا تُفهرَس منفصلة في محركات البحث (يدخل الجذر فقط في sitemap).

## 7) الإعدادات (store.js ← DEFAULTS) — 67 مفتاحاً

| المفتاح | الافتراضي |
|---|---|
| `theme` | `'paper'` |
| `accent` | `''` |
| `radius` | `'md'` |
| `shadows` | `true` |
| `glass` | `true` |
| `arFont` | `'cairo'` |
| `enFont` | `'inter'` |
| `size` | `17` |
| `lh` | `1.8` |
| `ls` | `0` |
| `para` | `1` |
| `align` | `'start'` |
| `width` | `'normal'` |
| `density` | `'cozy'` |
| `layout` | `'side-right'` |
| `sideWidth` | `'normal'` |
| `viewMode` | `'scroll'` |
| `secOpen` | `'all'` |
| `showPills` | `true` |
| `showAr` | `true` |
| `showExplain` | `true` |
| `showVocab` | `true` |
| `showAnswers` | `true` |
| `showAudio` | `true` |
| `showNotes` | `true` |
| `showInstrEn` | `true` |
| `showImages` | `true` |
| `showTags` | `true` |
| `reduceMotion` | `false` |
| `underlineLinks` | `false` |
| `ruler` | `false` |
| `bigTargets` | `false` |
| `strongFocus` | `false` |
| `voice1` | `''` |
| `voice2` | `''` |
| `voice3` | `''` |
| `voiceAr` | `''` |
| `voiceAll` | `false` |
| `ttsRate` | `0.95` |
| `ttsPitch` | `1` |
| `stickyNav` | `true` |
| `progressBar` | `true` |
| `compactHead` | `false` |
| `sidebarOpen` | `true` |
| `bgStyle` | `'dots'` |
| `deco` | `true` |
| `cardStyle` | `'soft'` |
| `fontWeight` | `400` |
| `grayscale` | `false` |
| `dimImages` | `false` |
| `hiContrastText` | `false` |
| `gearFloat` | `'auto'` |
| `gearSide` | `'left'` |
| `toTopStyle` | `'water'` |
| `toTopSide` | `'right'` |
| `showUtil` | `true` |
| `showFooter` | `true` |
| `showGallery` | `true` |
| `bgArt` | `true` |
| `scrollTopOnNav` | `true` |
| `sfx` | `false` |
| `haptics` | `true` |
| `linkPreview` | `true` |
| `wordSpacing` | `0` |
| `maxLine` | `0` |
| `autoPauseMedia` | `true` |
| `confirmReset` | `true` |

مجموعات القائمة اليسرى (⚙): تُعرَّف في `GROUPS` بـ app.js (appearance, fonts, layout, reading, float, behave, access, voice، + مجموعة «العمل دون إنترنت» بلا زر افتراضي). كل إعداد يُطبَّق في `apply()` عبر classes على body (`gray`, `dim-img`, `hi-text`, `no-deco`, `no-footer`, `no-gallery`, `no-bgart`, `focus`…) وdata-attributes على html (`data-theme`, `data-layout`, `data-bg`, `data-card`, `data-lp`) ومتغيرات CSS (`--fw`, `--ws`, `--maxline`, `--f-ar`, `--f-en`).

## 8) كود JS — قائمة الدوال

- **assets/js/store.js**: `db`، `idb`، `lsDel`، `lsGet`، `lsSet`، `merge`، `readJSON`، `saveSettings`، `saveState`
- **assets/js/tts.js**: `byName`، `ensureBar`، `hide`، `isArabic`، `list`، `load`، `mark`، `next`، `pick`، `show`، `toastRate`
- **assets/js/render.js**: `arTr`، `arr`، `audioInit`، `audioScript`، `cover`، `esc`، `fb`، `genSlots`، `initAudios`، `initVideos`، `isCollapsed`، `mInner`، `mediaCfg`، `missing`، `mount`، `msInner`، `nl`، `norm`، `nx`، `qHead`، `qInner`، `qzInner`، `rAudio`، `rBlock`، `rBox`، `rBubbles`، `rMatch`، `rMedia`، `rModel`، `rNote`، `rPhoto`، `rPuzzle`، `rQ`، `rQuiz`، `rQuote`، `rSection`، `rSteps`، `rText`، `renderPage`، `spk`، `videoInit`، `why`
- **assets/js/app.js**: `apply`، `buildDrawer`، `buildIndex`، `checkQ`، `chipKind`، `closeDrawer`، `closeSearch`، `collect`، `currentActive`، `cycleTheme`، `download`، `fmtMB`، `fontSel`، `fs`، `gearUpdate`، `gotoSec`، `inkFor`، `lessonBar`، `markPill`، `navH`، `nl`، `offRefresh`، `offlineBox`، `onScroll`، `openDrawer`، `openSearch`، `ordOf`، `pageTile`، `pickFile`، `progress`، `range`، `redo`، `relBar`، `renderSide`، `resolveTheme`، `route`، `scroll`، `search`، `secIndexById`، `sections`، `seg`، `seo`، `set`، `setMeta`، `setStepMode`، `sfx`، `showStep`، `sum`، `toast`، `tog`، `toggleFocus`، `toggleSec`، `toolTile`، `topicTile`، `utilUpdate`، `viewHome`، `viewLessons`، `viewPage`، `viewSaved`، `viewTopic`، `viewTopicIndex`، `voiceOf`، `voiceSel`، `zoom`
- **assets/js/tools.js**: `add`، `apply`، `buildGlossary`، `buildPool`، `chips`، `dueList`، `fcNext`، `fcSession`، `fcStats`، `fileCard`، `glList`، `glRefresh`، `glossary`، `inScope`، `libBind`، `linkCard`، `linkMeta`، `next`، `oxBind`، `oxKnown`، `oxList`، `oxRows`، `oxSave`، `pageLabel`، `qzAnswer`، `qzRun`، `rec`، `refresh`، `rerender`، `run`، `scopeOptions`، `shortEn`، `shuffle`، `viewCards`، `viewGlossary`، `viewLib`، `viewOxford`، `viewQuiz`، `viewSheet`، `ytId`
- **assets/js/extra.js**: `bind`، `esc`، `grp`، `head`، `say`، `verbRows`، `viewClass`، `viewSounds`، `viewVerbs`

ملاحظات: `render.js` يرسم البلوكات وي export كـ `R`؛ `app.js` الموجّه (route) والدرج والبحث؛ `tools.js` المكتبة/القاموس/البطاقات/الاختبار/Oxford (`Tools.views`)؛ `extra.js` صفحات الصف والأفعال والأصوات ويلفّ `Tools.after`.

## 9) الوظائف الرئيسية بالتفصيل

- **الوسائط**: مستمع واحد في app.js يوقف أي صوت/فيديو آخر عند تشغيل واحد (ويلغي speechSynthesis) إلا إذا أُوقف `autoPauseMedia`.
- **القائمة الجانبية**: حماية عجلة الماوس حتى لا يتحرك المحتوى عند نهاية تمرير القائمة (overscroll). مجموعتا RINO وINTERCHANGE ‏`<details>` قابلتان للطي.
- **الترس العائم (gearFloat)**: يظهر يسار الشاشة عندما يخرج `.site-brand` من العرض (أوضاع auto/always/off) ليفتح القائمة دون الرجوع للأعلى.
- **زر العودة للأعلى (water)**: دائرة SVG بموجتين متحركتين يرتفع مستواها مع نسبة التمرير؛ تمتلئ (`.full`) عند 98.5%.
- **الهيدر**: شرائح مساعدة (متابعة، تقدّم، A−/A+، مشاركة، طباعة). **الفوتر**: عن الموقع، شارات، معرض صور (يختفي إن لم تُوجد الصور)، زر للأعلى.
- **SEO**: وسوم meta/OG/Twitter ثابتة في index.html و`seo()` يحدّث الوصف و JSON-LD (`LearningResource`) لكل مسار. canonical/og:image المطلقة تُضبط في النشر بواسطة tools/deploy.py.
- **المكتبة**: شريط بحث + فلاتر (النوع/المستوى/الفئة) + أزرار تنقل الأقسام (pills واضحة) + بطاقات ملفات (فتح ⬇ تنزيل) + بطاقات روابط (favicon/صورة يوتيوب/microlink اختياري يُخزَّن `hw1.lp`).
- **الرمادي للتركيز**: صار طبقة `body.gray::after` بـ backdrop-filter (بدل filter على .main الذي كان يكسر sticky/fixed والهوامش).
- **وضع التركيز (layout=focus)**: يخفي الهيدر والشريط الجانبي؛ يحافظ على عرض المحتوى نفسه ويتوسّط؛ `scrollbar-gutter: stable` يمنع قفز التخطيط عند فتح القائمة.
- **الوضع دون إنترنت**: انظر القسم 11.
- **TTS**: `TTS.play` يوقف الوسائط أولاً؛ أصوات مختلفة لكل متحدث وصوت عربي.

## 10) الصور المولّدة

`cover(id)` في render.js يحمّل `media/images/gen/<id>.jpg` (مع بدائل الامتداد عبر `R.nx`) ويختفي بلا أثر إن لم يوجد الملف. `GEN_COVERS` يربط رقم الصفحة/الموضوع بصورة الغلاف (يشمل الآن 101–106 و201–205: الأسماء `cover-r101..r106`, `cover-i201..i205` — صور غير موجودة بعد وتنتظر التوليد). `GEN_SLOTS` يربط صور المعلومات (info-*/vocab-*) بصفحة وقسم وموضع (start/end).

| id | صفحة | قسم | الحالة |
|---|---|---|---|
| info-unit1-map | 9 | contents | موجودة |
| info-question-words | 10 | ex1 | موجودة |
| info-describing-people | 10 | ex2 | موجودة |
| info-erika-profile | 10 | starter1 | موجودة |
| info-question-order | 11 | grammar | موجودة |
| info-subject-vs-object-q | 11 | grammar | موجودة |
| info-how-questions | 11 | practice | موجودة |
| info-describing-places | 11 | ex4 | موجودة |
| info-collocations | 12 | ex2 | موجودة |
| info-compound-adjectives | 12 | ex3 | موجودة |
| info-opposites-prefixes | 12 | ex4 | موجودة |
| info-ed-ing | 12 | ex5 | موجودة |
| info-personality-wheel | 13 | ex10 | موجودة |
| info-opposites-personality | 13 | ex10 | موجودة |
| info-word-families | w-families | fam | موجودة |
| info-wolfpack-brief | 14 | ex1 | موجودة |
| info-predict-story | 14 | think | **ناقصة** |
| info-story-timeline | 15 | timeline | موجودة |
| info-story-phrases | 15 | vocabbox | موجودة |
| info-unit1-review | 15 | vocabbox | موجودة |
| vocab-personality-positive | 13 | ex8 | موجودة |
| vocab-personality-negative | 13 | ex8 | موجودة |
| vocab-appearance | 10 | starter2 | موجودة |
| vocab-feelings | 12 | ex5 | **ناقصة** |
| vocab-places | 11 | ex3 | **ناقصة** |

الصور المنتظرة الآن (3): `info-predict-story` (ص14)، `vocab-feelings` (ص12 تمرين 5)، `vocab-places` (ص11 تمرين 3). البرومبتات في `_notes/image-prompts.txt` (أرقام 37–39) وفي `docs/image-prompts-v6.html` لباقي الاحتياجات الجديدة.

## 11) العمل دون إنترنت والنشر

- الخطوط صارت محلية (`assets/fonts` + `assets/css/fonts.css`) فلا حاجة لجوجل. الاعتمادات الاختيارية الوحيدة المتصلة بالشبكة: أيقونات favicon من google.com، صور يوتيوب المصغّرة، microlink، مشغّل يوتيوب المدمج، وروابط Oxford — وكلها تتدهور بلطف دون إنترنت.
- `sw.js`: يخزّن «الصفحات والبرنامج» عند أول زيارة (shell ≈ 2.3MB)، ويقدّم المخزَّن أولاً. من ⚙ ← «العمل دون إنترنت» يمكن تنزيل مجموعات: الصور (~19MB)، الصوت والفيديو (~17.5MB)، ملفات PDF (~77MB) مع شريط تقدّم. يدعم طلبات Range للصوت/الفيديو.
- لا يعمل service worker على `file://` (لكن الموقع نفسه يعمل من الملفات دون إنترنت أصلاً).
- بعد أي تحديث للمحتوى شغّل `python3 tools/make_sw.py` (ويُشغَّل تلقائياً داخل deploy.py) ليتغير رقم النسخة ويحدّث المتصفح نفسه.
- النشر: GitHub Pages (`.github/workflows/pages.yml`)، GitLab Pages (`.gitlab-ci.yml`)، Cloudflare Pages (Build command: `python3 tools/deploy.py --url $CF_PAGES_URL`، Output: `dist`). الملف `_headers` يمنع تخزين sw.js/index.html مؤقتاً.
- **تنبيه حقوق نشر مهم**: الموقع يضم كتباً محمية (Headway القسم الخلفي، قوائم Oxford، كتاب Interchange، قصة The Falcon…). النشر العام قد يخالف الحقوق. الخيارات: مستودع/استضافة **خاصة** (Cloudflare Access مجاني حتى 50 مستخدماً، GitLab Pages بصلاحيات خاصة، أو GitHub خاص مع Pages على خطة مدفوعة)، أو نسخة عامة بـ `--public` تحذف `media/files` و`audio` و`video` (والمكتبة تُخفي الملفات) — لكن نصوص الصفحات المشتقة من الكتب تبقى.
- sitemap.xml وcanonical وog:image/url المطلقة تُولَّد في deploy.py عند تمرير `--url` (أخبر المساعد بالنطاق عند النشر).

## 12) جرد الصفحات (مولَّد آلياً)

| رقم | id | الكورس | unit | النوع | العنوان | أقسام | أسئلة | أنواعها |
|---|---|---|---|---|---|---|---|---|
| 201 | i201 | interchange | ic1 | Review | Unit 1 · Full Review & Summary | 8 | 13 | `{"choice":4,"fill":4,"open":3,"tf":2}` |
| 202 | i202 | interchange | ic1 | Homework | Homework 1 — Introduction & names | 3 | 4 | `{"open":4}` |
| 203 | i203 | interchange | ic1 | Homework | Homework 2 — Possessives & titles | 3 | 9 | `{"choice":4,"fill":2,"open":3}` |
| 204 | i204 | interchange | ic1 | Homework | Final Session Worksheet | 4 | 13 | `{"choice":5,"open":4,"fill":4}` |
| 205 | i205 | interchange | ic1 | Exam | Final Exam — Solved (Interchange Intro, Unit 1: Please call me Beth) | 8 | 34 | `{"fill":10,"choice":24}` |
| 9 | p09 | headway | u1 | Unit opener | What's your story? | 5 | 3 | `{"open":3}` |
| 10 | p10 | headway | u1 | Grammar | Information questions | 4 | 0 | `{}` |
| 11 | p11 | headway | u1 | Grammar | Information questions (continued) | 7 | 40 | `{"choice":9,"fill":21,"open":10}` |
| 12 | p12 | headway | u1 | Vocabulary and speaking | All about adjectives | 7 | 38 | `{"open":13,"fill":25}` |
| 13 | p13 | headway | u1 | Vocabulary and speaking | A personality quiz | 4 | 6 | `{"open":6}` |
| 14 | p14 | headway | u1 | Reading and speaking | What's their story? | 6 | 20 | `{"open":12,"tf":8}` |
| 15 | p15 | headway | u1 | Reading and speaking | Their story | 4 | 0 | `{}` |
| 16 | p16 | headway | u1 | Listening and speaking | Listening and speaking: My closest relative | 7 | 14 | `{"open":14}` |
| 17 | p17 | headway | u1 | Everyday English | Everyday English: Making the right noises | 7 | 14 | `{"open":8,"fill":6}` |
| 18 | p18 | headway | u1 | Writing | Writing: Describing a person – facts and opinions | 8 | 8 | `{"open":7,"choice":1}` |
| 101 | r101 | rino | rino1 | Fiche | For or Against | 10 | 15 | `{"open":7,"fill":3,"choice":4,"tf":1}` |
| 102 | r102 | rino | rino1 | Fiche | Guilty or Victim? | 6 | 22 | `{"open":16,"choice":4,"fill":2}` |
| 103 | r103 | rino | rino1 | Fiche | Tell Me a Story | 5 | 18 | `{"open":7,"fill":6,"choice":4,"tf":1}` |
| 104 | r104 | rino | rino1 | Fiche | King Lear | 11 | 17 | `{"open":5,"tf":7,"choice":5}` |
| 105 | r105 | rino | rino1 | Fiche | The Falcon (reading guide) | 5 | 13 | `{"open":4,"fill":1,"choice":4,"tf":4}` |
| 106 | r106 | rino | rino1 | Fiche | Getting there (A2 · Travel and transport) | 5 | 38 | `{"fill":24,"open":10,"tf":4}` |

**المجموع: 21 صفحة، 339 سؤالاً محلولاً** (عدا أسئلة الاختبار/البطاقات/Oxford/المفردات).

## 13) جرد مكتبة الملفات (مولَّد آلياً)

الفئات (CATS في tools.js): lessons, book, interchange, uci, placement, ai, basics, grammar, vocab, advanced, worksheets, rino.

| id | الفئة | المستوى | صفحات | الملف |
|---|---|---|---|---|
| hw-back | book | B1 | None | `None` |
| a1-pictures | basics | A1 | None | `None` |
| ar-beginner | basics | A1 | None | `None` |
| parts-of-speech | grammar | A2 | None | `None` |
| tenses | grammar | A1–B2 | None | `None` |
| routine | grammar | A1–A2 | None | `None` |
| oxford3000 | vocab | A1–B2 | None | `None` |
| oxford5000 | vocab | B2–C1 | None | `None` |
| b1-preliminary | vocab | B1 | None | `None` |
| words6000 | vocab | A1–C1 | None | `None` |
| syn-ant | vocab | B2–C2 | None | `None` |
| c1-pack | advanced | C1 | None | `None` |
| btu-c1 | advanced | C1 | None | `None` |
| btu-c2 | advanced | C2 | None | `None` |
| c2-list | advanced | C2 | None | `None` |
| life-stories | worksheets | A2 | None | `None` |
| rino-for-against | rino | B1 | None | `None` |
| rino-guilty | rino | B2 | None | `None` |
| rino-guilty-s | rino | B2 | None | `None` |
| rino-lear | rino | B2 | None | `None` |
| rino-story | rino | B1–B2 | None | `None` |
| rino-falcon | rino | B2+ | None | `None` |
| ic-book | interchange | A1–A2 | None | `None` |
| ic-review | interchange | A1 | None | `None` |
| ic-exam | interchange | A1 | None | `None` |
| uci-learn1 | uci | A1 | None | `None` |
| uci-learn2 | uci | A1 | None | `None` |
| uci-u1ls | uci | A1 | None | `None` |
| uci-u1rl | uci | A1 | None | `None` |
| uci-u2ls | uci | A1 | None | `None` |
| uci-u2rl | uci | A1 | None | `None` |
| uci-hand | uci | A1 | None | `None` |
| uci-q-full | uci | A2 | None | `None` |
| uci-c2m1l1 | uci | A2 | None | `None` |
| uci-c2m1l2 | uci | A2 | None | `None` |
| uci-c2m1l3 | uci | A2 | None | `None` |
| uci-c2m2l1 | uci | A2 | None | `None` |
| uci-c2m2l2 | uci | A2 | None | `None` |
| uci-c2m2l3 | uci | A2 | None | `None` |
| uci-c2m3l1 | uci | A2 | None | `None` |
| uci-c2m3l2 | uci | A2 | None | `None` |
| uci-c2m3l3 | uci | A2 | None | `None` |
| uci-c2m4l1 | uci | A2 | None | `None` |
| uci-c2m4l2 | uci | A2 | None | `None` |
| uci-c2m4l3 | uci | A2 | None | `None` |
| uci-wf-guide | uci | A1–A2 | None | `None` |
| uci-c1m2l1 | uci | A1–A2 | None | `None` |
| uci-c1m2l1k | uci | A1–A2 | None | `None` |
| uci-q-docx | uci | A2 | None | `None` |
| uci-wf-docx | uci | A2 | None | `None` |
| rino-esl-a2 | rino | A2 | None | `None` |


## 14) سجلّ التحديثات (delta zips)

| # | المحتوى |
|---|---|
| 1–3 | النسخة الأساسية: الصفحات 9–18، الأدوات (قاموس/بطاقات/اختبار/قواعد/كلمات/محفوظات)، المكتبة، TTS، الثيمات |
| 4 | ترجمات Oxford العربية (5323)، إزالة RINO من الهيدر، إصلاح المكتبة (إزالة probe)، 12 صورة، مراجعة r101/r103/r104 |
| 5 | SEO/PWA/manifest، معاينات الروابط، شرائح الهيدر والفوتر، زخارف، فلاتر المكتبة، خيارات الدرج، الترس العائم، زر الماء، صفحات الصف/الأفعال/الأصوات، محتوى القسم الخلفي، مراجعة r102/r105 |
| 6 | كورس Interchange 1 (201–205)، صفحة r106، 28 ملفاً جديداً بالمكتبة (UC Irvine، Interchange)، 17 صورة (13+4)، خطوط محلية، الوضع دون إنترنت (sw.js)، ملفات النشر، معرض الفوتر والخلفيات المصوّرة، إصلاح الرمادي/التركيز، أزرار تنقل المكتبة، هذا التوثيق |
| 7 | تحسين التابلت والجوال: شريط علوي نحيف، صف هوية (قائمة + شعار + بحث دائري)، تنقل بأقراص مع أيقونات وتلاشي حواف وتمركز العنصر النشط، بحث بعرض كامل على التابلت، فوتر بعمودين. الديسكتوب بلا تغيير (قسم v7 في آخر site.css) |
| 8 | كورس جديد «القواعد والكتابة الأكاديمية» (صفحة 301: اختبار القواعد المتقدمة 30 سؤالاً محلولاً)، صفحة Rino 107 (Life Stories 1.2)، 26 ملفاً جديداً في المكتبة (قواعد، كتابة إبداعية)، أرشيف الفونكس (28MB بعد إزالة تكرار الصوت)، صور المعرض g1–g7 والصور الثلاث القديمة. ملف الاختبار الأصلي غير مضمّن. |
| 9 | الوحدة 2 من Headway (صفحات 19–28 كاملة بالحلول، 13 مقطعاً صوتياً وفيديوهان)، كورس المحادثة (صفحتا 401 و402: ملاحظات اللقاءات والنطق كمتحدث أصلي + 14 ملفاً في المكتبة)، قائمة جانبية جديدة (أقسام قابلة للطي + بحث + تقدّم لكل كورس)، صفحة «دليل المستخدم» (#/guide)، معرض الفوتر المصغّر مع عارض صور، خلفيات الديكور وصورة g8، إصلاح عنوان الجوال وجدول الأفعال. |

## 15) مصادر الملفات المضافة (للحقوق)

- **UC Irvine / Coursera (25 ملفاً، 4 مجلدات)**: © The Regents of the University of California؛ المدرّسان Rachel Fernandez وKaren Vallejo. مجلدات: التعريف بالنفس (Learn New Language 1/2)، وصف النفس والروتين (Unit 1/2 Listen & Speak / Read & Listen، Get Ready Handwriting)، الأسئلة والمضارع المستمر والمستقبل (11 ملف KEY + FULL v4 PDF/DOCX)، صيغ الكلمات والمضارع البسيط (Study Guide PDF/DOCX + C1M2L1 وKEY).
- **Interchange 1 Student's Book** (Fourth Edition، Jack C. Richards، Cambridge University Press، 162 صفحة، من pdfcoffee.com) + **Full Review & Summary** (شرائح المعلمة Sondos Badawi، 11 صفحة صور) + **Final Exam Solved** (3 صفحات).
- **Rebhe_Homework_Portfolio_Unit1.html**: محفظة المستخدم (HW1، HW2، ورقة الحصة الأخيرة، محتوى الوحدات 1–3). استُخرج محتواها في الصفحات 202–204 ولم يُنشر الملف لاحتوائه رقم هاتف المستخدم.
- **ESL A2 Unit 2 Lesson 1 Student Notes** (3 صفحات، Adrian Wayne Simon 2026): صفحة r106 + ملف بالمكتبة (RINO).
- **Headway back section (33 ص)**، **Falcon**، **King Lear**، **Tell me a story**، **For or Against**، **Guilty or Victim** (Rino): انظر CREDITS.

## 16) أمور معلّقة / ملاحظات

- صور ناقصة: 3 (انظر القسم 10) + أغلفة r101–r106 و i201–i205 + صور الفوتر والخلفيات (انظر docs/image-prompts-v6.html).
- مذكرة 29 أغسطس «Agreeing, Disagreeing & Describing» غير مرفوعة وتشير لها صفحة 101.
- وحدات 2–12 في صفحة الصف عامة (من خريطة المنهج) بلا محتوى تفصيلي.
- ملف القسم الخلفي (PDF 33 ص) صور ممسوحة فلا يُضغط أكثر.
- ترجمات Oxford العربية لم تُراجع كلمة بكلمة.
- جدول نبر الكلمات في r106 يعتمد على تسجيل صوتي غير مرفق؛ وضعنا أمثلة بديلة (added by us).
- ملف صوت 1.x: الموجود track-1.1 … 1.13؛ فيديو intro-2 غير موجود بعد.
- عند النشر بنطاق: أخبر المساعد ليضع الرابط في deploy.py/الأوامر ويتحقق من og:image وsitemap.

## 17) برومبت المتابعة لمحادثة جديدة

```
أنا أكمل العمل على موقع «Headway Study Hub» (موقع دراسة عربي/إنجليزي ثابت). المرجع الكامل في docs/DOCUMENTATION.md المرفق، وقواعدي الثابتة في القسم 2. اقرأه كاملاً أولاً، ثم افتح مجلد الموقع المرفق (zip الأساسي + التحديثات بالترتيب) وتابع من القسم 16. سلّمني كل تعديل كملف update-N.zip يحوي الملفات المتغيرة فقط (الحد 30MiB للملف)، وردّ عليّ بالعربية.
```

## تحديث 10 (13 نوفمبر)
- كتاب Front section أُضيف للمكتبة (hw-front) مثل Back section؛ bg-section-a: النسختان مستخدمتان (أ لرؤوس الصفحات، ب لقسم الاختبارات).
- 23 صورة جديدة مثبتة (أغلفة/مكتبة/معرض).
- ملف برومبتات الصور الجديد: docs/image-prompts-v9.html (أغلفة 16–28 وr107 وg301 وc401 وc402 وأغلفة الكورسات والمكتبة + 15 صورة تعليمية). الربط جاهز في data/images.js، فتظهر الصورة تلقائياً عند وضعها في media/images/gen/.
- دليل متابعة الشباتر 3–12: docs/chapter-guide.html (برومبت رئيسي + خطوات الربط).
- ترقية تلقائية: ارفع update-N.zip إلى مجلد updates/ في GitHub فيُفك تلقائياً (.github/workflows/apply-updates.yml). ملاحظة: حد الرفع من المتصفح 25 ميغابايت للملف. إن كان الكومِت من الـ Actions لا يشغّل نشر الصفحات، شغّل pages.yml يدوياً (Run workflow).

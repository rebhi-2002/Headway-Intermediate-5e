# Headway Study Hub — موقع مراجعة الكورس

موقع ثابت (HTML + CSS + JS + Tailwind) بدون سيرفر وبدون تسجيل دخول. افتح `index.html` مباشرة في المتصفح.
التصميم بأسلوب مواقع الجامعات: ترويسة، قائمة رئيسية، مسار تنقل، محتوى مقالي، تذييل، بعناصر دلالية (header / nav / main / article / section / aside / figure / footer).

## البنية
```
index.html               الصفحة الوحيدة (الهيكل الدلالي)
assets/css/app.css       السمات والمكوّنات        assets/css/site.css   الهوية الجامعية المسطّحة
assets/css/tailwind.css  مبني مسبقاً من build/
assets/js/store.js       الحفظ (localStorage + IndexedDB)    tts.js  أصوات القراءة (3 أصوات + عربي)
assets/js/render.js      رسم الكتل     tools.js  القاموس/البطاقات/الاختبار/المكتبة/الملخص    app.js  التنقل والإعدادات والبحث
data/course.js  data/resources.js  data/files.js  data/topics.js  data/images.js  data/pages/pNN.js
media/images/unit-1/     لقطات الكتاب      media/images/gen/   الصور المولّدة (id.png)
_notes/                  مرجعي الخاص + برومبتات الصور (غير ظاهرة بالموقع)
media/audio/unit-1/      الصوت: track-1.1.mp3 … (راجع README داخله)
media/video/unit-1/      intro-1.mp4 · intro-2.mp4 · nick-bruckman.mp4
media/files/unit-1/<الدرس>/   PDF و PPTX في نفس المجلد      media/files/unit-1/tests/   ملفات HTML التفاعلية
tools/scan-files.py      يضيف الملفات الجديدة تلقائياً إلى data/files.js
```

## إضافة ملفات
1. ضع الملف في مكانه أعلاه.  2. شغّل `python3 tools/scan-files.py`.  3. أرسل لي الملفات لأشرحها وأضيف شرحها لصفحة المكتبة.

## الاختصارات
Ctrl+K أو / بحث · [ ] الصفحة السابقة/التالية · F وضع التركيز · Alt+T تبديل السمة.

## إعادة بناء Tailwind (اختياري)
`cd build && npm i && ./node_modules/.bin/tailwindcss -c tailwind.config.js -i tw-input.css -o ../assets/css/tailwind.css --minify`

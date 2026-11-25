/* ============================================================
   files.js — مكتبة الملفات (PDF / PPTX / HTML …)
   لكل درس عنصر واحد، وكل صيغة مسارها داخل media/files/.
   أضف ملفاً جديداً بوضعه في المجلد ثم أضف سطراً هنا (أو شغّل tools/scan-files.py ليولّدها).
   ============================================================ */
window.FILES = [
 {
  "id": "description",
  "lesson": "s-description",
  "unit": "u1",
  "title": "Description",
  "titleAr": "الوصف: Vocabulary and Speaking — The Art of Description",
  "desc": "سلايدات شرح درس الصفات والوصف (صفحة 12 وما حولها).",
  "formats": {
   "pdf": "media/files/unit-1/description/Description.pdf",
   "pptx": "media/files/unit-1/description/Description.pptx"
  }
 },
 {
  "id": "introduction",
  "lesson": "s-introduction",
  "unit": "u1",
  "title": "Introduction to Unit One",
  "titleAr": "مقدمة الوحدة الأولى: What is your story?",
  "desc": "سلايدات تعريف بالوحدة الأولى.",
  "formats": {
   "pdf": "media/files/unit-1/introduction/introduction.pdf",
   "pptx": "media/files/unit-1/introduction/introduction.pptx"
  }
 },
 {
  "id": "angulo",
  "lesson": "s-angulo",
  "unit": "u1",
  "title": "The Angulo Brothers",
  "titleAr": "الإخوة أنغولو: The Wolfpack",
  "desc": "سلايدات شرح مقالة القراءة (صفحتان 14 و15).",
  "formats": {
   "pdf": "media/files/unit-1/angulo-brothers/The_Angulo_Brothers.pdf",
   "pptx": "media/files/unit-1/angulo-brothers/The_Angulo_Brothers.pptx"
  }
 },
 {
  "id": "test1",
  "unit": "u1",
  "title": "اختبار",
  "titleAr": "اختبار تفاعلي (HTML)",
  "desc": "صفحة اختبار تفاعلية تفتح في المتصفح.",
  "formats": {
   "html": "media/files/unit-1/tests/اختبار.html"
  }
 },
 {
  "id": "saif",
  "unit": "u1",
  "title": "سيف المعرفة",
  "titleAr": "سيف المعرفة (بواسطة علي الغمري)",
  "desc": "نشاط تفاعلي HTML.",
  "formats": {
   "html": "media/files/unit-1/tests/سيف-المعرفة.html"
  }
 },
 {
  "id": "book",
  "unit": "u1",
  "title": "Headway B1 — Unit 1 pages",
  "titleAr": "صفحات الكتاب (الوحدة الأولى)",
  "desc": "صفحات الكتاب الممسوحة للوحدة الأولى.",
  "formats": {
   "pdf": "media/files/unit-1/Headway_B1.pdf"
  }
 },
 {
  "id": "hw12",
  "unit": "u1",
  "title": "Homework — page 12",
  "titleAr": "واجب صفحة 12 (صفحة تفاعلية بالصوت)",
  "desc": "الإعلانات الثلاثة والجدول مع القراءة بصوت الجهاز.",
  "formats": {
   "html": "media/files/unit-1/tests/homework-page12.html"
  }
 },
 {
  "id": "placement-test",
  "cat": "placement",
  "unit": "u1",
  "title": "Headway General Placement Test — Answer Key",
  "titleAr": "اختبار Headway العام لتحديد المستوى — المفتاح الكامل",
  "descEn": "100 multiple-choice questions in 13 sections with 4 reading texts. Every question has its correct answer and a short explanation of why it is right and why the other options are wrong.",
  "desc": "100 سؤال اختيار من متعدد في 13 قسماً مع 4 نصوص قراءة. تحت كل سؤال زر «إظهار الإجابة والشرح» يوضح سبب صحة الإجابة وسبب خطأ بقية الخيارات. الصفحة تفتح كاملة في المتصفح بصوت وتصميم مستقل؛ هنا نعرض لقطات منها فقط.",
  "formats": {
   "html": "media/files/placement/Headway-Placement-Test-Key.html"
  },
  "thumbs": [
   "media/images/files/placement-test/p1.jpg",
   "media/images/files/placement-test/p2.jpg",
   "media/images/files/placement-test/p3.jpg"
  ],
  "toc": [
   "1–14 القواعد: الأزمنة والتراكيب الأساسية",
   "15–19 المفردات والإنجليزية اليومية",
   "20–25 فهم المقروء 1",
   "26–30 القواعد: الأزمنة والتراكيب",
   "31–38 الإنجليزية الوظيفية والتواصل اليومي",
   "39–44 المفردات والحياة اليومية",
   "45–50 فهم المقروء 2",
   "51–55 القواعد",
   "56–60 القواعد",
   "61–69 المفردات والتعبيرات الاصطلاحية",
   "70–75 فهم المقروء 3",
   "76–93 القواعد والمفردات المتقدمة واستخدام اللغة",
   "94–100 فهم المقروء 4"
  ]
 },
 {
  "id": "ai-parent-guide",
  "cat": "ai",
  "unit": "u1",
  "title": "AI as a personal learning assistant — a parent’s guide",
  "titleAr": "الذكاء الاصطناعي كمساعد تعلّم شخصي — دليل وليّ الأمر",
  "descEn": "A practical guide in 26 sections with 30+ ready prompts: safety and age rules, how learning works, a Master Tutor prompt, modes (understand, practise, test, fix mistakes, review), source-grounded study, verification, and a parent dashboard.",
  "desc": "دليل عملي من 26 قسماً و30+ برومبت جاهز: قواعد الأمان والعمر، كيف يحدث التعلّم، برومبت المعلّم الرئيسي، أوضاع الاستخدام (أفهم، أتدرّب، أختبر، أصلح أخطائي، أراجع)، التعلّم من المصادر، التحقق من الإجابات، ولوحة متابعة وليّ الأمر. نسخة 2.2 (سبتمبر 2026). يُفتح كاملاً من الزر؛ هنا لقطات منه فقط.",
  "formats": {
   "html": "media/files/ai/AI-Learning-Assistant-Parent-Guide.html"
  },
  "thumbs": [
   "media/images/files/ai-parent-guide/p1.jpg",
   "media/images/files/ai-parent-guide/p2.jpg",
   "media/images/files/ai-parent-guide/p3.jpg"
  ],
  "toc": [
   "ابدأ هنا — ما يستطيع AI وما لا ينبغي أن يفعله",
   "قواعد الأمان والعمر",
   "كيف يحدث التعلّم فعلياً؟ (5 مبادئ)",
   "ملف المتعلّم (Learner Profile)",
   "إطار البرومبت (Learning Prompt Framework)",
   "البرومبت الرئيسي (Master Tutor Prompt)",
   "نظام Modes",
   "أفهم — شرح المفاهيم الصعبة",
   "أتدرّب — تمارين وتلميحات تدريجية",
   "أختبر نفسي — Quiz وبطاقات",
   "أصلح أخطائي — Error Bank",
   "أراجع لاحقاً — المراجعة المتباعدة",
   "التعامل مع الكتاب والمصادر",
   "طبقة التحقق قبل اعتماد إجابة AI",
   "الأنشطة والموارد الجاهزة",
   "الصور والفيديو والوسائط",
   "أدوات AI الحالية (Tool Matrix)",
   "تجربة 15 دقيقة",
   "دور وليّ الأمر",
   "محو الأمية في AI",
   "النزاهة الأكاديمية",
   "Checklist نجاح الجلسة",
   "لوحة متابعة وليّ الأمر",
   "المراجع والمصادر",
   "Changelog"
  ]
 }
];

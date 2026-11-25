/* ============================================================
   resources.js — الروابط الخارجية (بدل الرفع) + روابط/ملفات الفيديو
   لإضافة رابط: أضف سطراً داخل items. type = تصنيف صغير يظهر على البطاقة.
   ============================================================ */
window.RESOURCES = [
  {
    group: 'الكلاس والمجموعات',
    items: [
      { title: 'Google Classroom — الكورس', desc: 'رمز الدخول إذا طُلب: 57yfqdbw', url: 'https://classroom.google.com/c/ODk2MDI3NzUxMDQ4?cjc=57yfqdbw', type: 'CLASSROOM' },
      { title: 'واتساب — مجموعة الكورس', desc: 'المجموعة الرئيسية للكورس.', url: 'https://chat.whatsapp.com/HewFFLgtPkY2vrA6c38fPb?s=cl&p=a&iam=2', type: 'WHATSAPP' },
      { title: 'واتساب — Homework assignments for B1 level', desc: 'مجموعة الواجبات لمستوى B1.', url: 'https://chat.whatsapp.com/Ca26walQGsMAdXDzZHGX9O?s=sw&p=a&iam=2', type: 'WHATSAPP' },
      { title: 'واتساب — مجموعة المحادثة', desc: 'مجموعة المحادثة والتدرّب على الحديث.', url: 'https://chat.whatsapp.com/KuboD1N1Fl14tMViXyKZuX?s=sw&p=a&iam=2', type: 'WHATSAPP' },
      { title: 'قائمة تشغيل الكورس (YouTube)', desc: 'البلاي ليست الخاصة بالكورس.', url: 'https://youtube.com/playlist?list=PLU_iwu68lT4k&si=oeUWLMsB5pG14-ut', type: 'YOUTUBE' }
    ]
  },
  {
    group: 'الاستماع والنصوص الصوتية',
    items: [
      { title: "Student's Book Part 1 — full tapescripts (Units 1–6)", desc: 'CS Learning English. تسجيل واحد فيه كل الاستماعات: الوحدة 1 هي 1.1 إلى 1.13، والوحدة 2 تبدأ عند 21:16.', url: 'https://youtu.be/8PKoGKaL0Ig?si=kiFVu5_yWSk6DbFL', type: 'YOUTUBE' },
      { title: 'Workbook — full audios (Units 1–12)', desc: 'CS Learning English. الوحدة 1 أول مقطعين (0:00 و2:50)، والوحدة 2 تبدأ عند 4:43.', url: 'https://youtu.be/VQaCYruMVIM?si=Omth1HEVnG00EwIV', type: 'YOUTUBE' },
      { title: 'Listening Audio — playlist by unit (Units 1–12)', desc: 'Master Professional Education Centre. قائمة من 17 فيديو، لكل وحدة فيديو استماع.', url: 'https://youtube.com/playlist?list=PL0Qt_qoYxX05vnWX7ZqbgYqprrOLVvODF&si=SuC5vJN9SYtc613X', type: 'YOUTUBE' }
    ]
  },
  {
    group: 'مواقع الكورس والمصادر الرسمية',
    items: [
      { title: 'Onvid — English course 483', desc: 'صفحة الكورس فيها دروس Headway Intermediate ومصادرها.', url: 'https://onvid.org/page/engl-t/engl-t483.htm', type: 'WEB' },
      { title: 'Oxford ELT — Headway Intermediate downloads', desc: 'الصفحة الرسمية لملفات الصوت والفيديو ومصادر الطالب.', url: 'https://elt.oup.com/student/headway/int/download', type: 'WEB' }
    ]
  },
  {
    group: 'قواميس ونطق',
    items: [
      { title: 'Cambridge Dictionary', desc: 'قاموس إنجليزي مع أمثلة ونطق بريطاني وأمريكي.', url: 'https://dictionary.cambridge.org/', type: 'DICTIONARY' },
      { title: 'Cambridge — Pronunciation', desc: 'تدرّب على النطق ومخارج الأصوات.', url: 'https://dictionary.cambridge.org/pronunciation/english/module', type: 'PRONUNCIATION' },
      { title: "Oxford Learner's Dictionaries", desc: 'قاموس أكسفورد للمتعلمين: تعريفات مبسطة وقوائم Oxford 3000.', url: 'https://www.oxfordlearnersdictionaries.com/', type: 'DICTIONARY' },
      { title: 'Almaany — المعاني', desc: 'قاموس عربي إنجليزي لترجمة الكلمات والعبارات.', url: 'https://www.almaany.com/', type: 'DICTIONARY' }
    ]
  },
  {
    group: 'قواعد وكتابة أكاديمية (Grammar & Academic Writing)',
    items: [
      { title: 'LinguaCamp — معسكر اللغة', desc: 'موقع تفاعلي ثنائي اللغة: 9 جلسات في القواعد (الأزمنة، المبني للمجهول، الأفعال المساعدة، أدوات الربط) والكتابة الأكاديمية، مع بطاقات واختبارات وشارات وامتحان نهائي بشهادة. يُحفظ تقدّمك على جهازك فقط.', url: 'https://academy-orbit-play.lovable.app/', type: 'GRAMMAR' },
      { title: 'LinguaCamp — الجلسات (Sessions)', desc: 'قائمة الجلسات التسع للدراسة بالترتيب.', url: 'https://academy-orbit-play.lovable.app/sessions', type: 'GRAMMAR' },
      { title: 'LinguaCamp — الامتحان النهائي', desc: 'اختبار شامل في نهاية الجلسات.', url: 'https://academy-orbit-play.lovable.app/exam', type: 'EXAM' },
      { title: 'LinguaCamp — المعلّم الذكي (AI Tutor)', desc: 'اسأل عن أي قاعدة أو أعد صياغة فقرة كتابة.', url: 'https://academy-orbit-play.lovable.app/tutor', type: 'AI' }
    ]
  },
  {
    group: 'العروض التقديمية (للطالب والمعلّم)',
    items: [
      { title: 'Slides.com', desc: 'عروض تقديمية من المتصفح بتصميم نظيف، ويمكن مشاركتها برابط أو تضمينها.', url: 'https://slides.com/', type: 'SLIDES' },
      { title: 'Gamma', desc: 'يولّد عرضاً كاملاً من فكرة أو نص بالذكاء الاصطناعي، مع تحرير سهل.', url: 'https://gamma.app/', type: 'AI SLIDES' },
      { title: 'Beautiful.ai', desc: 'قوالب ذكية تنسّق الشرائح تلقائياً أثناء الكتابة.', url: 'https://www.beautiful.ai/', type: 'AI SLIDES' },
      { title: 'Pitch', desc: 'عروض تعاونية بقوالب أنيقة، مناسبة للعمل الجماعي.', url: 'https://pitch.com/', type: 'SLIDES' },
      { title: 'Decktopus', desc: 'مولّد عروض بالذكاء الاصطناعي مع ملاحظات المتحدث.', url: 'https://www.decktopus.com/', type: 'AI SLIDES' },
      { title: 'Presentations.AI', desc: 'يحوّل المحتوى إلى عرض مصمَّم تلقائياً.', url: 'https://www.presentations.ai/', type: 'AI SLIDES' },
      { title: 'Slidebean', desc: 'عروض سريعة من مخطط نصي مع قوالب جاهزة.', url: 'https://slidebean.com/', type: 'AI SLIDES' },
      { title: 'Google Slides', desc: 'مجاني، تعاون مباشر، ويفتح ملفات PPTX.', url: 'https://workspace.google.com/products/slides/', type: 'SLIDES' },
      { title: 'Prezi', desc: 'عرض غير خطي: تتنقل داخل لوحة كبيرة بدل شرائح متتابعة.', url: 'https://prezi.com/', type: 'SLIDES' },
      { title: 'Canva', desc: 'تصميم بالسحب والإفلات: عروض وإنفوجرافيك وملصقات.', url: 'https://www.canva.com/', type: 'DESIGN' },
      { title: 'Genially', desc: 'محتوى تفاعلي: عروض وإنفوجرافيك وألعاب تعليمية بالسحب والإفلات.', url: 'https://genially.com/', type: 'DESIGN' },
      { title: 'Visme', desc: 'عروض وإنفوجرافيك ورسوم بيانية بالسحب والإفلات.', url: 'https://www.visme.co/', type: 'DESIGN' },
      { title: 'Napkin AI', desc: 'يحوّل نصك إلى مخططات وإنفوجرافيك ورسوم توضيحية تلقائياً؛ ممتاز لشرح القواعد والعمليات بصرياً.', url: 'https://www.napkin.ai/', type: 'AI VISUALS' }
    ]
  },
  {
    group: 'أدوات الذكاء الاصطناعي للمراجعة',
    items: [
      { title: 'Google NotebookLM', desc: 'ارفع ملفاتك ونصوصك واسأل عنها، ويولّد ملخصات وبطاقات واختبارات وتسجيلاً صوتياً.', url: 'https://notebooklm.google.com', type: 'AI' },
      { title: 'Notta', desc: 'تفريغ الصوت إلى نص وملخصات للتسجيلات والمحاضرات.', url: 'https://notta.ai', type: 'AI' },
      { title: 'Claude', desc: 'مساعد للشرح والتصحيح والتدرّب على المحادثة بالإنجليزية.', url: 'https://claude.ai', type: 'AI' }
    ]
  }
];

/* الفيديوهات: يبحث الموقع أولاً عن الملف المحلي (file + .mp4 أو .webm أو .m4v أو .mov)
   ثم الرابط في url (يوتيوب يُعرض داخل الصفحة). */
window.MEDIA_LINKS = {
  'unit1-intro-1': { title: 'Unit 1 introduction video (1)', file: 'media/video/unit-1/intro-1', url: '' },
  'unit1-intro-2': { title: 'Unit 1 introduction video (2)', file: 'media/video/unit-1/intro-2', url: '' },
  'unit2-intro': { title: 'Unit 2 introduction video (Headway Openers)', file: 'media/video/unit-2/intro-2', url: '' },
  'unit2-subtitling': { title: 'Unit 2 video: The art of subtitling', file: 'media/video/unit-2/unit2-video', url: '' },
  'nick-bruckman': { title: "Nick Bruckman's story", file: 'media/video/unit-1/nick-bruckman', url: '' }
};

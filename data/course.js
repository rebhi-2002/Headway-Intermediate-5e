/* ============================================================
   بيانات الكورس العامة — عدّلها لإضافة كورسات أو وحدات جديدة
   ============================================================ */
window.PAGES = window.PAGES || [];

window.COURSES = [
  {
    id: 'headway-b1',
    title: 'Headway Intermediate',
    titleAr: 'هيدواي – المستوى المتوسط (B1)',
    edition: '5th Edition',
    descAr: 'مراجعة منظمة لكل صفحة من الكتاب: الأسئلة كاملة بالإنجليزية، وترجمة شارحة، والحل مع توضيح الخيارات، ومكان خاص لكل ملف صوتي.',
    units: [
      {
        id: 'u1',
        no: 1,
        title: "What's your story?",
        titleAr: 'ما قصتك؟',
        // أرقام الصفحات الموجودة حالياً. أضف رقم الصفحة هنا بعد إنشاء ملفها في data/pages/
        pages: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      },
      {
        id: 'u2',
        no: 2,
        title: 'Language matters',
        titleAr: 'اللغة مهمة',
        pages: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
      }
    ]
  },
  {
    id: 'rino',
    title: "RINO'S COURSE",
    titleAr: 'كورس Rino للمحادثة والنقاش',
    edition: 'Conversation club · Google Meet',
    descAr: 'مذكرات (Fiches) حصص المحادثة: المفردات والعبارات وأسئلة النقاش ومناظرات، مع شرح عربي وحلول للأسئلة.',
    units: [
      { id: 'rino1', no: 1, title: 'Class fiches', titleAr: 'مذكرات الحصص', pages: [101, 102, 103, 104, 105, 106, 107] }
    ]
  },
  {
    id: 'interchange',
    title: 'INTERCHANGE 1',
    titleAr: 'كورس Interchange 1 (المعلمة Sondos Badawi)',
    edition: 'Interchange Fourth Edition · Level 1 · Cambridge',
    descAr: 'الوحدة الأولى «Please, call me Beth»: ملخص المراجعة، الواجبات، ورقة الحصة الأخيرة والاختبار النهائي المحلول، مع شرح عربي.',
    units: [
      { id: 'ic1', no: 1, title: 'Please, call me Beth', titleAr: 'الوحدة 1: التعارف والتحيات', pages: [201, 202, 203, 204, 205] }
    ]
  },
  {
    id: 'gwriting',
    title: 'GRAMMAR & ACADEMIC WRITING',
    titleAr: 'كورس القواعد والكتابة الأكاديمية (د. نهال الحديدي)',
    edition: 'Advanced grammar · Academic writing',
    descAr: 'اختبار القواعد المتقدمة (30 سؤالاً محلولاً بالشرح) مع ملفات الكورس في قسم الملفات.',
    units: [
      { id: 'gw1', no: 1, title: 'Advanced grammar test', titleAr: 'اختبار القواعد المتقدمة', pages: [301] }
    ]
  },
  {
    id: 'conversation',
    title: 'CONVERSATION COURSE',
    titleAr: 'كورس المحادثة (د. نهال الحديدي)',
    edition: 'Interchange 5th edition · Conversation',
    descAr: 'ملاحظات اللقاءات (1–8) بالعبارات والمفردات، وملاحظات النطق كمتحدث أصلي، مع أسئلة تدريب مشروحة.',
    units: [
      { id: 'cv1', no: 1, title: 'Session notes and pronunciation', titleAr: 'ملاحظات اللقاءات والنطق', pages: [401, 402] }
    ]
  }
];

/* المصادر وحقوق النشر للصفحات المعروضة كمحتوى */
window.CREDITS = {
  19: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 19 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 19 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  20: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 20 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 20 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  21: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 21 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 21 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  22: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 22 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 22 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  23: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 23 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 23 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  24: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 24 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 24 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  25: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 25 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 25 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  26: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 26 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 26 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  27: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 27 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 27 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  28: { en: "Source: Headway Intermediate Student's Book, 5th edition (Oxford University Press), Unit 2 'Language matters', page 28 — personal study copy. The Arabic help, explanations and model answers were written for this site; answers to open questions are suggestions. Copyright of the book belongs to Oxford University Press.", ar: "المصدر: كتاب Headway Intermediate الطبعة الخامسة (Oxford University Press)، الوحدة 2 «Language matters»، صفحة 28 — نسخة للدراسة الشخصية. الشروح العربية والإجابات النموذجية كُتبت لهذا الموقع، والإجابات على الأسئلة المفتوحة اقتراحات. حقوق الكتاب لدار Oxford University Press." },
  401: { en: "Source: slides by Dr. Nahal Al-Hadidi for the Conversation course and the student's screenshots of Sessions 1–3 (Interchange 5th edition, © Cambridge University Press, unit pages). Arabic help and exercises marked 'added by us' were written for this site.", ar: "المصدر: شرائح د. نهال الحديدي لكورس المحادثة ولقطات شاشة الطالب لللقاءات 1–3 (Interchange الطبعة الخامسة، حقوقها لـ Cambridge University Press). الشروح العربية والتمارين المكتوبة «added by us» أضفناها لهذا الموقع." },
  402: { en: "Source: the lecturer's board notes (Dr. Nahal Al-Hadidi) on flap T, TR/DR and spelling, and the Interchange 5th edition pronunciation box. General explanations and practice questions were written for this site.", ar: "المصدر: ملاحظات السبورة للمحاضرة (د. نهال الحديدي) عن flap T وTR/DR والتهجئة، وفقرة النطق في Interchange الطبعة الخامسة. الشروح العامة والتدريبات كُتبت لهذا الموقع." },
  107: { en: "Source: ESL Course, CEFR A2, Unit 1 'Life Stories', Lesson 1.2 'Tell me about your childhood' — student handout (class worksheet and homework, pages 8–10). The listening tasks need the class audio, so they are not answered. Model answers were written for this site.", ar: "المصدر: كورس ESL مستوى A2، الوحدة 1 «Life Stories»، الدرس 1.2 — ورقة الطالب (ورقة الصف والواجب). مهام الاستماع تحتاج تسجيل الحصة فلم تُحلّ. النماذج كُتبت لهذا الموقع." },
  301: { en: "Source: Advanced English Grammar MCQ test from the Grammar & Academic Writing course (Dr. Nahal Al-Hadidi), based on LinguaCamp material. Only the questions and the correct answers are reproduced; the explanations were written for this site (with the student's AI-made explained guide). The original test file is not included.", ar: "المصدر: اختبار القواعد المتقدمة (اختيار من متعدد) من كورس القواعد والكتابة الأكاديمية (د. نهال الحديدي) المبني على مادة LinguaCamp. نُشرت الأسئلة والإجابات الصحيحة فقط، والشروحات كُتبت لهذا الموقع. ملف الاختبار الأصلي غير مرفق." },
  106: { en: "Source: ESL Course, CEFR A2, Unit 2 'Travel and Transport', Lesson 2.1 'Getting there' — student notes (class worksheet and homework, pages 4–6 of a 16-page booklet), © Adrian Wayne Simon 2026 as printed on the file. The answers, Arabic help and any items marked 'added by us' were written for this site.", ar: "المصدر: كورس ESL مستوى A2، الوحدة 2 «السفر والمواصلات»، الدرس 2.1، ملاحظات الطالب (ورقة صف وواجب، الصفحات 4–6 من كتيّب من 16 صفحة)، حقوق الملف Adrian Wayne Simon 2026 كما هو مطبوع. الإجابات والشرح العربي وما كُتب عليه «added by us» من إعدادنا." },
  201: { en: "Source: Review slides by Ms. Sondos Badawi (Canva) for Interchange Fourth Edition, Level 1, Unit 1 'Please, call me Beth' (Jack C. Richards, © Cambridge University Press). This page is a text rebuild of the slides with Arabic help. Questions marked 'added by us' were written for this site.", ar: "المصدر: شرائح مراجعة المعلمة Sondos Badawi للوحدة الأولى من Interchange 1 (حقوق الكتاب لدار Cambridge). هذه الصفحة إعادة كتابة نصية للشرائح مع شرح عربي. الأسئلة المكتوبة «added by us» من إعدادنا." },
  202: { en: "Source: The student's own Homework 1 for the Interchange 1 course, checked and explained. Book content belongs to Cambridge University Press. The phone number used is a sample (555-0143).", ar: "المصدر: واجب الطالب الأول في كورس Interchange 1 بعد المراجعة والشرح. محتوى الكتاب لدار Cambridge. رقم الهاتف المستخدم نموذجي (555-0143)." },
  203: { en: "Source: The student's own Homework 2 for the Interchange 1 course, checked and explained. Book content belongs to Cambridge University Press.", ar: "المصدر: واجب الطالب الثاني في كورس Interchange 1 بعد المراجعة والشرح. محتوى الكتاب لدار Cambridge." },
  204: { en: "Source: The student's Final Session Worksheet for the Interchange 1 course, checked and explained. Book content belongs to Cambridge University Press.", ar: "المصدر: ورقة الحصة الأخيرة للطالب في كورس Interchange 1 بعد المراجعة والشرح. محتوى الكتاب لدار Cambridge." },
  205: { en: "Source: Final exam paper for Interchange Intro/Level 1 Unit 1 'Please call me Beth' (course exam, solved). Book content © Cambridge University Press. Explanations and any items marked 'added by us' were written for this site.", ar: "المصدر: ورقة الاختبار النهائي للوحدة الأولى مع الحل. محتوى الكتاب لدار Cambridge. الشروحات والأسئلة المعلّمة «added by us» من إعدادنا." },
  101: { en: "Source: RINO'S COURSE · FICHE 'For or Against' (teaching handout, 30 September 2026). The words, phrases and debate material belong to the course author. Questions marked 'added by us' were written for this site.", ar: "المصدر: RINO'S COURSE · مذكرة «For or Against» (30 سبتمبر 2026). المفردات والعبارات ومواد المناظرة من إعداد صاحب الكورس. الأسئلة المكتوب عليها «added by us» أضفناها نحن في هذا الموقع." },
  102: { en: "Source: RINO'S COURSE · FICHE 'Guilty or Victim?' (teaching handout, 17 October 2026, two versions: full fiche and short student version). Based on Mary Shelley's novel Frankenstein (1818, public domain). Questions marked 'added by us' were written for this site.", ar: "المصدر: RINO'S COURSE · مذكرة «Guilty or Victim?» (17 أكتوبر 2026، نسختان: كاملة ومختصرة للطلاب). مبنية على رواية «فرانكنشتاين» لماري شيلي (1818، ملكية عامة). الأسئلة المكتوب عليها «added by us» أضفناها نحن." },
  103: { en: "Source: RINO'S COURSE · FICHE 'Tell Me a Story' (teaching handout). Exercises marked 'added by us' were written for this site.", ar: "المصدر: RINO'S COURSE · مذكرة «Tell Me a Story». التمارين المكتوب عليها «added by us» أضفناها نحن في هذا الموقع." },
  104: { en: "Source: RINO'S COURSE · FICHE 'King Lear' (teaching handout), retelling William Shakespeare's King Lear (c. 1605, public domain) and Nahum Tate's 1681 adaptation in simple modern English. Questions marked 'added by us' were written for this site.", ar: "المصدر: RINO'S COURSE · مذكرة «King Lear»، وهي إعادة سرد مبسطة لمسرحية شكسبير «الملك لير» (نحو 1605، ملكية عامة) ولنسخة ناهوم تيت (1681). الأسئلة المكتوب عليها «added by us» أضفناها نحن." },
  105: { en: "The reading text is a short-story excerpt supplied as a PDF (offered as a download in the library). It is published literature: copyright belongs to its author, translator and publisher (the file does not name them; add them here when known). This page is our own study guide, not a copy of the text.", ar: "نص القراءة مقتطف من قصة قصيرة مرفوع كملف PDF (متاح للتنزيل في المكتبة). هو أدب منشور وحقوقه لمؤلفه ومترجمه وناشره (الملف لا يذكرهم؛ أضفهم هنا عند معرفتهم). هذه الصفحة دليل دراسة من إعدادنا وليست نسخة من النص." }
};

/* وصف مختصر لأنواع الصفحات (يظهر في البطاقات) */
window.KIND_AR = {
  'Unit opener': 'افتتاح الوحدة',
  'Grammar': 'قواعد',
  'Vocabulary and speaking': 'مفردات ومحادثة',
  'Reading and speaking': 'قراءة ومحادثة',
  'Reading': 'قراءة',
  'Listening and speaking': 'استماع ومحادثة',
  'Listening': 'استماع',
  'Everyday English': 'إنجليزي يومي',
  'Writing': 'كتابة',
  'Fiche': 'مذكرة حصة',
  'Review': 'مراجعة وملخص',
  'Homework': 'واجب',
  'Exam': 'اختبار'
};

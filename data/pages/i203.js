(window.PAGES = window.PAGES || []).push({
  id: 'i203', num: 203, unit: 'ic1', course: 'interchange', kind: 'Homework',
  title: 'Homework 2 — Possessives & titles',
  titleAr: 'الواجب الثاني: ضمائر الملكية والألقاب',
  summaryAr: 'الواجب الثاني للوحدة الأولى: اختر ضمير الملكية الصحيح (my / his / her / your)، ثم ضع اللقب المناسب (Mr. أو Ms.)، ثم اكتب ثلاث جمل قصيرة عنك أو عن صديق. كل الإجابات محلولة ومشروحة.',
  summaryEn: 'The second Unit 1 homework: choose the correct possessive word (my / his / her / your), fill in the right title (Mr. or Ms.), and write three short sentences about yourself or a friend. All answers are solved and explained.',
  sections: [
    {
      id: 'part1', no: '1', tag: 'Possessives', titleEn: 'Part 1: Choose the correct answer', titleAr: 'الجزء الأول: اختر الإجابة الصحيحة',
      instrEn: 'Choose the correct possessive word.',
      instrAr: 'اختر كلمة الملكية الصحيحة.',
      blocks: [
        { t: 'box', title: 'Quick guide', titleAr: 'دليل سريع', items: [
          { en: 'my = me · your = the person I am talking to', ar: 'my لي، your للشخص الذي أخاطبه.' },
          { en: 'his = a man · her = a woman', ar: 'his لرجل، her لامرأة.' }
        ]},
        { t: 'q', kind: 'choice', n: 1, en: 'Hello! I am a new student. ___ name is Ahmed.', ar: 'مرحباً! أنا طالب جديد. ___ اسمي أحمد.', options: ['His', 'My', 'Her'], correct: 1,
          why: 'المتكلم يتحدث عن نفسه (I am)، فنستعمل My.', whyEn: 'The speaker is talking about himself (I am), so we use My.' },
        { t: 'q', kind: 'choice', n: 2, en: 'This is Sarah. ___ teacher is from London.', ar: 'هذه سارة. ___ معلمتها من لندن.', options: ['Her', 'Your', 'His'], correct: 0,
          why: 'سارة امرأة، فنستعمل Her.', whyEn: 'Sarah is a woman, so we use Her.' },
        { t: 'q', kind: 'choice', n: 3, en: 'Look at that man! What is ___ favorite sport?', ar: 'انظر إلى ذلك الرجل! ما رياضته المفضلة؟', options: ['my', 'her', 'his'], correct: 2,
          why: 'نتحدث عن رجل (that man)، فنستعمل his.', whyEn: 'We are talking about a man (that man), so we use his.' },
        { t: 'q', kind: 'choice', n: 4, en: 'What is ___ name? (asking the person in front of you) — My name is John.', ar: 'ما ___ اسم؟ (تسأل الشخص أمامك)', options: ['your', 'his', 'her'], correct: 0,
          why: 'نسأل الشخص الذي أمامنا مباشرة، فنستعمل your.', whyEn: 'We are asking the person directly in front of us, so we use your.' }
      ]
    },
    {
      id: 'part2', no: '2', tag: 'Titles', titleEn: 'Part 2: Use the correct title', titleAr: 'الجزء الثاني: ضع اللقب الاجتماعي المناسب',
      instrEn: 'Fill in the blanks with: Mr. / Ms. (In the original sheet the items are numbered 1 and 3; here they are numbered 5 and 6.)',
      instrAr: 'املأ الفراغات بـ Mr. أو Ms. (في الورقة الأصلية الرقمان 1 و3، وهنا رقّمناهما 5 و6.)',
      blocks: [
        { t: 'q', kind: 'fill', n: 5, en: 'Ali is a single young man. We call him ___ Ali.', prompt: 'We call him ___ Ali.', ar: 'علي شاب أعزب. نناديه ___ علي.', answer: ['Mr.', 'Mr'],
          why: 'للرجل نستعمل Mr. سواء كان متزوجاً أو أعزب.', whyEn: 'For a man we use Mr., whether he is married or single.' },
        { t: 'q', kind: 'fill', n: 6, en: "Huda is an independent businesswoman. (We don't know her marital status.) We call her ___ Huda.", prompt: 'We call her ___ Huda.', ar: 'هدى سيدة أعمال مستقلة (لا نعرف حالتها الاجتماعية). نناديها ___ هدى.', answer: ['Ms.', 'Ms'],
          why: 'لا نعرف إن كانت متزوجة، فنستعمل Ms. وهو اللقب العام لأي امرأة.', whyEn: 'We do not know if she is married, so we use Ms., the general title for any woman.' },
        { t: 'note', tone: 'tip', en: 'In the lesson the golden rule is title + LAST name. In this exercise the names given are first names only, so the title is used with them as the exercise asks.', ar: 'قاعدة الدرس: اللقب + اسم العائلة. وفي هذا التمرين الأسماء المعطاة أسماء أولى فقط، فنضع اللقب معها كما يطلب التمرين.' }
      ]
    },
    {
      id: 'part3', no: '3', tag: 'Writing', titleEn: 'Part 3: Writing challenge', titleAr: 'الجزء الثالث: تحدي الكتابة السريع',
      instrEn: 'Write 3 short sentences about yourself or a friend using: my, his / her, or a title. Example: My name is Sami. My teacher is Mr. Mark. His class is very fun.',
      instrAr: 'اكتب ثلاث جمل قصيرة عنك أو عن صديق باستخدام: my أو his / her أو لقب. مثال: My name is Sami. My teacher is Mr. Mark. His class is very fun.',
      blocks: [
        { t: 'q', kind: 'open', n: 7, en: 'Sentence 1 (about yourself, with my).', ar: 'الجملة 1: عن نفسك باستخدام my.', answer: 'My name is Rebhe.',
          why: 'تتحدث عن نفسك فتستعمل my مع الاسم.', whyEn: 'You are talking about yourself, so you use my with the noun.' },
        { t: 'q', kind: 'open', n: 8, en: 'Sentence 2 (about your teacher, with a title and her).', ar: 'الجملة 2: عن معلمتك بلقب وher.', answer: 'My teacher is Ms. Sondos, and her lesson is very fun.',
          why: 'المعلمة امرأة فنستعمل her. اللقب Ms. مناسب لأنه عام. (والأدق مع اللقب أن نقول Ms. Badawi لأن اللقب يأتي مع اسم العائلة.)', whyEn: 'The teacher is a woman, so we use her. Ms. fits because it is the general title. (With a title it is more exact to say Ms. Badawi, since titles go with the family name.)' },
        { t: 'q', kind: 'open', n: 9, en: 'Sentence 3 (about a male friend, with his).', ar: 'الجملة 3: عن صديق باستخدام his.', answer: 'Look at my friend; his name is Ali.',
          why: 'الصديق رجل فنستعمل his مع الاسم.', whyEn: 'The friend is a man, so we use his with the noun.' }
      ]
    }
  ]
});

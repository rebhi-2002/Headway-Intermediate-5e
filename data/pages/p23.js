(window.PAGES = window.PAGES || []).push({
  id: 'p23', num: 23, unit: 'u2', kind: 'Grammar',
  title: 'Practice: short answers, class survey, Check it',
  titleAr: 'تدريب: الإجابات القصيرة واستطلاع الصف ومراجعة الأخطاء',
  summaryAr: 'مطابقة سؤال بإجابة قصيرة وبجملة تكميلية، والرد بأدب على جمل مسموعة، واستطلاع للصف من عشرة أسئلة نجيب عنها بإجابات قصيرة مع معلومة، ثم تصحيح ستة أخطاء في ستة جمل.',
  summaryEn: 'Matching a question with a short answer and a follow-up line, replying politely to recorded lines, a ten-question class survey answered with short answers plus information, and correcting a mistake in each of six sentences.',
  sections: [
    {
      id: 'about', no: '', titleEn: 'About this page', titleAr: 'عن هذه الصفحة',
      instrEn: 'Page 23 of the book. The recordings are 2.6 and 2.7.', instrAr: 'الصفحة 23 من الكتاب. التسجيلان المستخدمان هما 2.6 و2.7.',
      blocks: [
        { t: 'photo', src: 'media/images/unit-2/p23-kayak.jpg', title: 'Kayaking at sunset', cap: 'A woman in a kayak', ar: 'صورة تغطي أعلى الصفحة: امرأة بقبعة وسترة حمراء تجدّف في قارب كاياك أحمر على بحر هادئ عند الغروب، وبجانبها جرف صخري عالٍ إلى اليمين وجبال بعيدة وسماء دافئة اللون. صورة جمالية للصفحة ولا ترتبط بسؤال محدد.', descEn: 'A photo across the top of the page: a woman in a hat and red jacket paddles a red kayak on a calm sea at sunset, with a tall rock cliff on the right, distant mountains and a warm sky. It is a decorative picture and does not relate to a specific question.' },
        { t: 'photo', src: 'media/images/unit-2/p23-survey.jpg', title: 'Class survey', cap: 'CLASS SURVEY', ar: 'بطاقة خضراء مائلة إلى الأزرق بعنوان CLASS SURVEY فيها عشرة أسئلة، كل سؤال تحته خياران YES وNO بمربعين. الأسئلة 9 و10 فارغة لتكتب فيهما سؤالين من عندك. حول البطاقة صور: عازف كمان بقميص برتقالي، وكلب صغير بني وأبيض، وطفل آسيوي يرفع يده في الصف وهو سعيد.', descEn: 'A teal card headed CLASS SURVEY with ten questions, each with YES and NO boxes. Questions 9 and 10 are blank so you can write two questions of your own. Around the card are photos: a violinist in an orange top, a small brown and white dog, and a happy Asian child raising his hand in class.' }
      ]
    },
    {
      id: 'ex1', no: '1', tag: 'Practice', titleEn: 'Match A with a short answer in B', titleAr: 'التمرين 1 (الجزء الأول): وصّل سطراً من A بإجابة قصيرة من B',
      instrEn: 'Match a line in A with a short answer in B and a line in C.',
      instrAr: 'وصّل كل سطر في العمود A بإجابة قصيرة في العمود B، ثم بسطر في العمود C. هنا الخطوة الأولى (A مع B). في الكتاب مثال محلول: 1 Did you hear that noise؟ ← Yes, I did ← I think it was thunder. القاعدة: الإجابة القصيرة تكرر الفعل المساعد في السؤال.',
      blocks: [
        { t: 'box', title: 'Column A', titleAr: 'العمود A (الأسئلة)', items: [
          { en: '1 Did you hear that noise?', ar: 'هل سمعتَ ذلك الصوت؟' },
          { en: '2 Are you doing anything tonight?', ar: 'هل ستفعل شيئاً الليلة؟' },
          { en: '3 Have you seen my phone anywhere?', ar: 'هل رأيتَ هاتفي في مكان ما؟' },
          { en: '4 Did you get those shoes you liked?', ar: 'هل اشتريتَ الحذاء الذي أعجبك؟' },
          { en: '5 Is it nearly break time?', ar: 'هل اقتربت فترة الاستراحة؟' }
        ]},
        { t: 'box', title: 'Column B: short answers', titleAr: 'العمود B (إجابات قصيرة)', items: [
          { en: "a No, I haven't.", ar: 'لا (لم أرَه).' },
          { en: 'b Yes, it is.', ar: 'نعم (إنها كذلك).' },
          { en: "c No, I'm not.", ar: 'لا (لن أفعل).' },
          { en: 'd Yes, I did.', ar: 'نعم (سمعتُه).' },
          { en: "e No, I didn't.", ar: 'لا (لم أشترِه).' }
        ]},
        { t: 'matchset',
          options: [
            { k: 'a', en: "No, I haven't.", ar: 'لا، لم أرَه.' },
            { k: 'b', en: 'Yes, it is.', ar: 'نعم، إنها كذلك.' },
            { k: 'c', en: "No, I'm not.", ar: 'لا، لست كذلك.' },
            { k: 'd', en: 'Yes, I did.', ar: 'نعم، سمعتُه.' },
            { k: 'e', en: "No, I didn't.", ar: 'لا، لم أشترِه.' }
          ],
          items: [
            { n: 1, en: 'Did you hear that noise?', ar: 'هل سمعتَ ذلك الصوت؟', answer: 'd', why: 'السؤال بـ Did (ماضٍ بسيط) فالجواب بـ did. من بين الإجابات التي فيها did هناك Yes, I did و No, I didn\'t. ويتصل Yes, I did بالسطر I think it was thunder (أظنه كان رعداً). وهذا هو مثال الكتاب.', whyEn: "The question has Did (past simple), so the answer uses did. Yes, I did fits with I think it was thunder. This is the book's example." },
            { n: 2, en: 'Are you doing anything tonight?', ar: 'هل ستفعل شيئاً الليلة؟', answer: 'c', why: 'السؤال بـ Are you doing، فالإجابة بـ am: No, I\'m not. ثم يناسبه Do you want to come round? (دعوة لزيارتي). لا يصح Yes, it is لأن الفاعل you وليس it.', whyEn: "The question has Are you doing, so the answer uses am: No, I'm not. It then fits Do you want to come round? (an invitation). Yes, it is is wrong because the subject is you, not it." },
            { n: 3, en: 'Have you seen my phone anywhere?', ar: 'هل رأيتَ هاتفي في مكان ما؟', answer: 'a', why: "السؤال بـ Have you seen (Present Perfect) فالجواب بـ have: No, I haven't. ثم يأتي Have you lost it again? (هل أضعته مرة أخرى؟).", whyEn: "The question is in the present perfect (Have you seen), so the answer uses have: No, I haven't. Then comes Have you lost it again?" },
            { n: 4, en: 'Did you get those shoes you liked?', ar: 'هل اشتريتَ الحذاء الذي أعجبك؟', answer: 'e', why: "السؤال بـ Did، ويناسبه السطر They didn't have my size (لم يكن عندهم مقاسي) فالجواب سلبي: No, I didn't.", whyEn: "The question has Did, and the line They didn't have my size shows the answer is negative: No, I didn't." },
            { n: 5, en: 'Is it nearly break time?', ar: 'هل اقتربت فترة الاستراحة؟', answer: 'b', why: "السؤال بـ Is it، فالجواب بـ is: Yes, it is. ويناسبه I'm dying for a coffee! (أتوق إلى فنجان قهوة).", whyEn: "The question has Is it, so the answer uses is: Yes, it is. It goes with I'm dying for a coffee!" }
          ] }
      ]
    },
    {
      id: 'ex1c', no: '1', tag: 'Practice', titleEn: 'Match A with a line in C', titleAr: 'التمرين 1 (الجزء الثاني): وصّل بسطر من C',
      instrEn: 'Match a line in A with a short answer in B and a line in C.',
      instrAr: 'الخطوة الثانية: وصّل كل سؤال من A بالسطر المناسب في C الذي يكمل الجملة بعد الإجابة القصيرة.',
      blocks: [
        { t: 'matchset',
          options: [
            { k: 'f', en: "They didn't have my size.", ar: 'لم يكن عندهم مقاسي.' },
            { k: 'g', en: 'I think it was thunder.', ar: 'أظنه كان رعداً.' },
            { k: 'h', en: "I'm dying for a coffee!", ar: 'أتوق إلى فنجان قهوة!' },
            { k: 'i', en: 'Do you want to come round?', ar: 'هل تريد أن تزورني؟' },
            { k: 'j', en: 'Have you lost it again?', ar: 'هل أضعتَه مرة أخرى؟' }
          ],
          items: [
            { n: 1, en: 'Did you hear that noise? (Yes, I did.)', ar: 'هل سمعتَ ذلك الصوت؟ نعم.', answer: 'g', why: 'بعد Yes, I did نذكر ما ظننتُ أنه الصوت: I think it was thunder.', whyEn: 'After Yes, I did we say what we think the noise was: I think it was thunder.' },
            { n: 2, en: "Are you doing anything tonight? (No, I'm not.)", ar: 'هل ستفعل شيئاً الليلة؟ لا.', answer: 'i', why: 'إذا لم يكن عنده برنامج الليلة فيدعوه: Do you want to come round؟ (come round = يزورني في بيتي).', whyEn: 'If he has no plans tonight, the natural follow-up is an invitation: Do you want to come round? (come round = visit me at home).' },
            { n: 3, en: "Have you seen my phone anywhere? (No, I haven't.)", ar: 'هل رأيتَ هاتفي في مكان ما؟ لا.', answer: 'j', why: 'عندما يسأل عن هاتفه ويجيب الآخر بالنفي، يسأل: Have you lost it again؟ (again تدل أنه يضيعه كثيراً).', whyEn: 'When someone asks about their phone and gets No, the natural comment is Have you lost it again? (again shows it happens often).' },
            { n: 4, en: "Did you get those shoes you liked? (No, I didn't.)", ar: 'هل اشتريتَ الحذاء؟ لا.', answer: 'f', why: "السبب بعد الجواب السلبي: They didn't have my size. (they هنا = المحل).", whyEn: "After a negative answer comes the reason: They didn't have my size. (they here means the shop)." },
            { n: 5, en: 'Is it nearly break time? (Yes, it is.)', ar: 'هل اقتربت الاستراحة؟ نعم.', answer: 'h', why: "اشتياق للقهوة يناسب وقت الاستراحة: I'm dying for a coffee! (dying for = أتوق بشدة إلى).", whyEn: "Wanting a coffee fits break time: I'm dying for a coffee! (dying for = desperately wanting)." }
          ] },
        { t: 'audio', slot: '2.6', en: 'Listen and check. Practise with a partner. Pay attention to stress and intonation.', ar: 'تسجيل 2.6: استمع وتحقق، وتدرّب مع زميلك مع الانتباه إلى النبر والتنغيم.' },
        { t: 'box', title: 'Complete matches', titleAr: 'الحل الكامل', items: [
          { en: "1 Did you hear that noise? - Yes, I did. - I think it was thunder.", ar: 'هل سمعتَ ذلك الصوت؟ نعم. أظنه كان رعداً.' },
          { en: "2 Are you doing anything tonight? - No, I'm not. - Do you want to come round?", ar: 'هل ستفعل شيئاً الليلة؟ لا. هل تريد أن تزورني؟' },
          { en: "3 Have you seen my phone anywhere? - No, I haven't. - Have you lost it again?", ar: 'هل رأيتَ هاتفي؟ لا. هل أضعتَه مرة أخرى؟' },
          { en: "4 Did you get those shoes you liked? - No, I didn't. - They didn't have my size.", ar: 'هل اشتريتَ الحذاء؟ لا. لم يكن عندهم مقاسي.' },
          { en: "5 Is it nearly break time? - Yes, it is. - I'm dying for a coffee!", ar: 'هل اقتربت الاستراحة؟ نعم. أتوق إلى فنجان قهوة!' }
        ]},
        { t: 'note', tone: 'tip', ar: 'النبر والتنغيم: الأسئلة من نوع Yes/No ينغمها يرتفع في آخرها (Did you hear that NOISE ↗). والإجابة القصيرة تُنطق بنبر قوي على الفعل المساعد (Yes, I DID. / No, I HAVEN\'T.) وينخفض صوتك في آخرها.', en: 'Stress and intonation: Yes/No questions rise at the end (Did you hear that NOISE?). In a short answer the auxiliary is stressed (Yes, I DID. / No, I HAVEN\'T.) and the voice falls at the end.' }
      ]
    },
    {
      id: 'ex2', no: '2', tag: '2.7', titleEn: 'Reply in a friendly and polite way', titleAr: 'التمرين 2: ردّ بأسلوب ودود ومهذّب',
      instrEn: 'Listen to each line and reply in a friendly and polite way. Then listen and compare.',
      instrAr: 'استمع إلى كل سطر وردّ بأسلوب ودود ومهذّب (إجابة قصيرة + معلومة). ثم استمع وقارن. هذه نماذج ردود، ويمكنك أن تكتب ردوداً مختلفة.',
      blocks: [
        { t: 'audio', slot: '2.7', en: 'Listen to each line and reply in a friendly and polite way. Then listen and compare.', ar: 'تسجيل 2.7: أسطر تردّ عليها ثم تقارن بالردود النموذجية.' },
        { t: 'q', kind: 'open', n: 1, en: 'Did you hear that noise?', ar: 'هل سمعتَ ذلك الصوت؟', answer: "Yes, I did. I think it was thunder.", why: 'إجابة قصيرة بـ did ومعلومة.', whyEn: 'A short answer with did plus information.' },
        { t: 'q', kind: 'open', n: 2, en: 'Are you doing anything tonight?', ar: 'هل ستفعل شيئاً الليلة؟', answer: "No, I'm not. Do you want to come round?", why: 'إجابة قصيرة بـ am وبعدها دعوة.', whyEn: 'A short answer with am, then an invitation.' },
        { t: 'q', kind: 'open', n: 3, en: 'Have you seen my phone anywhere?', ar: 'هل رأيتَ هاتفي في مكان ما؟', answer: "No, I haven't. Have you lost it again?", why: 'إجابة قصيرة بـ have وبعدها سؤال لطيف.', whyEn: 'A short answer with have, then a friendly question.' },
        { t: 'q', kind: 'open', n: 4, en: 'Did you get those shoes you liked?', ar: 'هل اشتريتَ الحذاء الذي أعجبك؟', answer: "No, I didn't. They didn't have my size.", why: 'إجابة سلبية بـ didn\'t ثم السبب.', whyEn: "A negative answer with didn't, then the reason." },
        { t: 'q', kind: 'open', n: 5, en: 'Is it nearly break time?', ar: 'هل اقتربت فترة الاستراحة؟', answer: "Yes, it is. I'm dying for a coffee!", why: 'إجابة قصيرة بـ is ثم معلومة عن شعورك.', whyEn: 'A short answer with is, then information about how you feel.' },
        { t: 'note', tone: 'warn', ar: 'هذه الردود نماذج مأخوذة من فكرة التمرين 1، لأن نص التسجيل 2.7 لم يُنشر في الكتاب المتاح لنا. قد تختلف ردود التسجيل لكنها تتبع القاعدة نفسها.', en: 'These replies are models based on Exercise 1 because the text of recording 2.7 is not in the book pages we have. The recording may use different words, but it follows the same rule.' }
      ]
    },
    {
      id: 'survey', no: '3', tag: 'A class survey', titleEn: 'Read the class survey', titleAr: 'استطلاع الصف: التمرين 3',
      instrEn: "Read the class survey and answer the questions about you. Add two more questions that you'd like to ask other students.",
      instrAr: 'اقرأ استطلاع الصف وأجب عن الأسئلة عن نفسك، ثم أضف سؤالين تحب أن تسألهما لطلاب آخرين. الإجابات التالية نماذج.',
      blocks: [
        { t: 'q', kind: 'open', n: 1, en: 'Are you interested in any sports?', ar: 'هل تهتم بأي رياضة؟', answer: 'YES. (Yes, I am. I like football and swimming.)', why: 'نموذج. السؤال بـ Are you interested، فالجواب بـ am.', whyEn: 'Model answer. The question has Are you interested, so the answer uses am.' },
        { t: 'q', kind: 'open', n: 2, en: 'Have you got a pet?', ar: 'هل لديك حيوان أليف؟', answer: "NO. (No, I haven't. My mother doesn't like animals.)", why: 'نموذج. Have you got → I have / I haven\'t.', whyEn: "Model answer. Have you got -> I have / I haven't." },
        { t: 'q', kind: 'open', n: 3, en: 'Does music play an important part in your life?', ar: 'هل تلعب الموسيقى دوراً مهماً في حياتك؟', answer: 'YES. (Yes, it does. I listen to music every day on my way to work.)', why: 'نموذج. Does → it does / it doesn\'t (الفاعل music = it).', whyEn: "Model answer. Does -> it does / it doesn't (the subject music = it)." },
        { t: 'q', kind: 'open', n: 4, en: 'Do you think you look at your phone too often?', ar: 'هل تظن أنك تنظر إلى هاتفك كثيراً؟', answer: "YES. (Yes, I do. I check it every few minutes.)", why: 'نموذج. Do you think → I do / I don\'t.', whyEn: "Model answer. Do you think -> I do / I don't." },
        { t: 'q', kind: 'open', n: 5, en: 'Does anyone in your family have an allergy?', ar: 'هل يعاني أحد في عائلتك من حساسية؟', answer: 'YES. (Yes, my sister does. She is allergic to nuts.)', why: 'نموذج. Does anyone → someone does / nobody does. بعد anyone نستعمل does.', whyEn: 'Model answer. After Does anyone we reply with does: Yes, my sister does.' },
        { t: 'q', kind: 'open', n: 6, en: 'Did you study English in primary school?', ar: 'هل درستَ الإنجليزية في المدرسة الابتدائية؟', answer: "NO. (No, I didn't. I started in secondary school.)", why: 'نموذج. Did → I did / I didn\'t.', whyEn: "Model answer. Did -> I did / I didn't." },
        { t: 'q', kind: 'open', n: 7, en: 'Have you ever been to England or America?', ar: 'هل زرتَ إنجلترا أو أمريكا من قبل؟', answer: "NO. (No, I haven't. But I'd love to go to London one day.)", why: 'نموذج. Have you ever been → I have / I haven\'t.', whyEn: "Model answer. Have you ever been -> I have / I haven't." },
        { t: 'q', kind: 'open', n: 8, en: 'What have you been watching on TV recently?', ar: 'ماذا كنتَ تشاهد على التلفاز مؤخراً؟', answer: "I've been watching a lot of football and a documentary series about nature.", why: 'سؤال معلومات لا يُجاب بـ yes/no. التركيب Present Perfect Continuous: I\'ve been watching ...', whyEn: "This is an information question, not Yes/No. The structure is the present perfect continuous: I've been watching ..." },
        { t: 'q', kind: 'open', n: 9, en: '(Your own question) ____ ?', ar: 'اكتب سؤالاً من عندك.', answer: 'Do you play a musical instrument? - Yes, I do. I play the guitar.', why: 'نموذج لسؤال مضاف. استعمل سؤال Yes/No ثم أجب بإجابة قصيرة.', whyEn: 'A model of an added question. Write a Yes/No question and answer it with a short answer.' },
        { t: 'q', kind: 'open', n: 10, en: '(Your own question) ____ ?', ar: 'اكتب سؤالاً ثانياً من عندك.', answer: "Are you good at cooking? - No, I'm not. I can only make eggs.", why: 'نموذج. Are you → I am / I\'m not.', whyEn: "A model. Are you -> I am / I'm not." }
      ]
    },
    {
      id: 'ex4', no: '4', tag: 'A class survey', titleEn: 'Ask and answer with a partner', titleAr: 'التمرين 4: اسأل وأجب مع زميلك',
      instrEn: 'Work with a partner. Ask and answer the questions. Give short answers in your replies and add some information.',
      instrAr: 'اعمل مع زميل: اسأل وأجب عن الأسئلة. أجب بإجابات قصيرة وأضف معلومة.',
      blocks: [
        { t: 'bubbles', lines: [
          { who: 'A', en: 'Are you interested in any sports?', ar: 'هل تهتم بأي رياضة؟' },
          { who: 'B', en: "Yes, I am. I often play tennis - I'm in a club - and I love watching rugby.", ar: 'نعم، أنا أهتم. ألعب التنس كثيراً (أنا عضو في نادٍ) وأحب مشاهدة الرجبي.' }
        ]},
        { t: 'q', kind: 'open', n: 1, en: 'Ask your partner questions 2 to 5 from the survey and answer them yourself (added by us).', ar: 'تدرّب على بقية الأسئلة. (مضاف منّا)', answer: "A: Have you got a pet?\nB: Yes, I have. I've got a cat called Luna, and she's very lazy.\nA: Does music play an important part in your life?\nB: Yes, it does. I play the piano and I go to a lot of concerts.", why: 'نموذج. كرّر الفعل المساعد then add information.', whyEn: 'A model. Repeat the auxiliary, then add information.' }
      ]
    },
    {
      id: 'ex5', no: '5', tag: 'A class survey', titleEn: 'Tell the class about each other', titleAr: 'التمرين 5: أخبر الصف عن زميلك',
      instrEn: "Tell the class about each other. 'Sergio's interested in two sports; tennis and rugby. He often ...'",
      instrAr: 'أخبر الصف عن زميلك. المثال: «سيرجيو يهتم برياضتين: التنس والرجبي. وهو غالباً…». لاحظ استعمال ضمير الغائب (He ... / She ...) وإضافة s للفعل المضارع.',
      blocks: [
        { t: 'q', kind: 'open', n: 1, en: "Tell the class about your partner. (Start: 'Sergio's interested in two sports; tennis and rugby. He often ...')", ar: 'تحدّث عن زميلك أمام الصف.', answer: "Sergio's interested in two sports; tennis and rugby. He often plays tennis - he's in a club - and he loves watching rugby. He hasn't got a pet, but his sister has a dog.", why: 'نموذج. نحوّل الإجابات إلى ضمير الغائب: I play → he plays، I\'ve got → he\'s got/he has got.', whyEn: "A model. We change the answers to the third person: I play -> he plays, I've got -> he has got." }
      ]
    },
    {
      id: 'ex6', no: '6', tag: 'A class survey', titleEn: 'What can you say about your class?', titleAr: 'التمرين 6: ماذا تقول عن صفك؟',
      instrEn: "What can you say about your class? 'Nearly everyone is interested in at least one sport. The most popular one is ... and quite a few people like ...'",
      instrAr: 'ماذا تستطيع أن تقول عن صفك؟ المثال: «تقريباً كل شخص مهتم برياضة واحدة على الأقل. الأكثر شعبية هي… وعدد لا بأس به من الناس يحب…». لاحظ أن everyone يأخذ فعلاً مفرداً (is).',
      blocks: [
        { t: 'q', kind: 'open', n: 1, en: "What can you say about your class?", ar: 'ماذا تقول عن صفك؟', answer: "Nearly everyone is interested in at least one sport. The most popular one is football, and quite a few people like swimming. About half of the class has a pet, and most of us study English every day.", why: 'نموذج. عبارات مفيدة للتعميم: nearly everyone, at least one, the most popular, quite a few, about half of, most of us. وانتبه: everyone + فعل مفرد.', whyEn: 'A model. Useful phrases for generalising: nearly everyone, at least one, the most popular, quite a few, about half of, most of us. Remember: everyone + singular verb.' }
      ]
    },
    {
      id: 'ex7', no: '7', tag: 'Check it', titleEn: 'Find a mistake in each sentence and correct it', titleAr: 'التمرين 7 (Check it): ابحث عن الخطأ في كل جملة وصحّحه',
      instrEn: 'Find a mistake in each sentence and correct it.',
      instrAr: 'ابحث عن خطأ في كل جملة وصحّحه. اكتب الجملة الصحيحة ثم اقرأ التفسير.',
      blocks: [
        { t: 'q', kind: 'open', n: 1, en: 'Everyone speak English where I work.', ar: 'الجميع يتكلم الإنجليزية في مكان عملي.', answer: 'Everyone speaks English where I work.', why: 'everyone ضمير مفرد، فالفعل في المضارع البسيط يأخذ s: speaks. تذكّر أن everyone وeveryone وsomebody تعامل معاملة المفرد.', whyEn: 'Everyone is singular, so the present simple verb needs -s: speaks. Everyone, everybody and somebody take singular verbs.' },
        { t: 'q', kind: 'open', n: 2, en: 'You know where the bus station is?', ar: 'هل تعرف أين محطة الحافلات؟', answer: 'Do you know where the bus station is?', why: 'سؤال Yes/No في المضارع البسيط يحتاج Do في أوله. وبعد where يعود الترتيب كجملة خبرية (the bus station is) وهو صحيح هنا. (هذه الجملة تُقال أحياناً في الكلام المحكي، لكن الصواب الكتابي هو Do you know ...؟)', whyEn: 'A present simple Yes/No question needs Do at the start. After where the word order is as in a statement (the bus station is), which is correct here. (In casual speech people sometimes drop Do, but the correct written form is Do you know ...?)' },
        { t: 'q', kind: 'open', n: 3, en: "'Do you like football?' 'Yes, I like.'", ar: '«هل تحب كرة القدم؟» «نعم، أحبها.»', answer: "'Yes, I do.'", why: 'الإجابة القصيرة تكرر الفعل المساعد do ولا تكرر الفعل الرئيسي like. هذا هو موضوع الصفحة.', whyEn: 'A short answer repeats the auxiliary do, not the main verb like. This is the topic of the page.' },
        { t: 'q', kind: 'open', n: 4, en: 'Do you think is going to rain?', ar: 'هل تظن أنها ستمطر؟', answer: 'Do you think it is going to rain? (Do you think it\'s going to rain?)', why: 'ينقص الفاعل it قبل is going to. في الإنجليزية لا تُحذف الفاعل: it\'s going to rain.', whyEn: "The subject it is missing before is going to. English does not drop the subject: it's going to rain." },
        { t: 'q', kind: 'open', n: 5, en: 'I seen him just a couple of minutes ago.', ar: 'رأيته قبل دقائق قليلة فقط.', answer: 'I saw him just a couple of minutes ago.', why: 'ago تدل على وقت منتهٍ، فنستعمل الماضي البسيط saw. seen هو التصريف الثالث ويحتاج have (I\'ve seen) لكن لا يصح مع ago.', whyEn: "Ago points to a finished time, so we use the past simple saw. Seen is the past participle and needs have (I've seen), but that cannot be used with ago." },
        { t: 'q', kind: 'open', n: 6, en: 'The glass was already broke when I opened the box.', ar: 'كان الكوب مكسوراً أصلاً عندما فتحتُ الصندوق.', answer: 'The glass was already broken when I opened the box.', why: 'بعد was نحتاج صفة أو اسم مفعول (past participle): broken، وليس broke (الماضي البسيط). الجملة تصف حالة الكوب.', whyEn: 'After was we need an adjective or past participle: broken, not broke (the past simple). The sentence describes the state of the glass.' }
      ]
    },
    {
      id: 'wrap', no: '', titleEn: 'What to remember', titleAr: 'ماذا أتذكّر؟',
      instrEn: 'Key points from this page.', instrAr: 'أهم ما في هذه الصفحة.',
      blocks: [
        { t: 'box', title: 'What to remember', titleAr: 'ماذا أتذكّر؟', items: [
          { en: 'Answer a Yes/No question with a short answer that repeats the auxiliary: Did you ...? - Yes, I did.', ar: 'أجب عن سؤال Yes/No بإجابة قصيرة تكرر الفعل المساعد: Did you…؟ Yes, I did.' },
          { en: 'Then add some information to keep the conversation friendly.', ar: 'ثم أضف معلومة لتبقى المحادثة ودودة.' },
          { en: 'A positive short answer is never contracted: Yes, I am (not Yes, I\'m).', ar: 'الإجابة المثبتة القصيرة لا تُختصر: Yes, I am وليس Yes, I\'m.' },
          { en: 'Everyone and anyone take a singular verb.', ar: 'everyone وanyone يأخذان فعلاً مفرداً.' },
          { en: 'Use the past simple with ago (I saw him ...); broken is the adjective/participle, broke is the past simple.', ar: 'نستعمل الماضي البسيط مع ago (I saw him)، وbroken اسم المفعول بينما broke ماضٍ بسيط.' }
        ]}
      ]
    }
  ]
});

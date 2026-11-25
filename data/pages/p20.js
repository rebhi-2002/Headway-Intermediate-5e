(window.PAGES = window.PAGES || []).push({
  id: 'p20', num: 20, unit: 'u2', kind: 'Grammar',
  title: 'Tenses and auxiliary verbs: I didn\'t know that!',
  titleAr: 'الأزمنة والأفعال المساعدة: لم أكن أعرف ذلك!',
  summaryAr: 'تمهيد: أسئلة ناقصة كلمة واحدة، ثم اختبار اللغة (الأسئلة 1–6) مع استماع إلى الإجابات 2.1، وصندوق Grammar Spot عن الأزمنة والأفعال المساعدة do/be/have، وكتابة اختبار خاص بك.',
  summaryEn: 'Starter: questions with one missing word, then the Language Quiz (questions 1-6) with the answers in recording 2.1, a Grammar Spot on tenses and the auxiliary verbs do/be/have, and writing your own quiz.',
  sections: [
    {
      id: 'starter1', no: '1', tag: 'Starter', titleEn: 'Each question has one word missing', titleAr: 'التمهيد 1: كل سؤال ينقصه كلمة واحدة',
      instrEn: 'Each question has one word missing. Write it in.',
      instrAr: 'كل سؤال ينقصه كلمة واحدة. اكتبها. المثال في الكتاب: Where (were) you born? الكلمة الناقصة هنا فعل مساعد أو حرف جر أو أداة. اكتب الكلمة في الفراغ ثم اضغط «تحقق».',
      blocks: [
        { t: 'q', kind: 'fill', n: 1, example: true, en: 'Where ___ you born?', prompt: 'Where ___ you born?', ar: 'أين وُلدت؟ (مثال الكتاب)',
          answer: ['were'], why: 'مثال الكتاب. وُلد = was/were born (مبني للمجهول في الماضي). مع you نستعمل were.', whyEn: 'Book example. "Be born" is a past passive form: was/were born. With you we use were.' },
        { t: 'q', kind: 'fill', n: 2, en: 'What languages ___ you speak?', prompt: 'What languages ___ you speak?', ar: 'ما اللغات التي تتحدثها؟',
          answer: ['do'], why: 'المضارع البسيط لعادة أو حقيقة. السؤال يحتاج do مع you لأن الفعل speak ليس له فعل مساعد.', whyEn: 'Present simple for a fact. The question needs do with you, because speak has no auxiliary verb.' },
        { t: 'q', kind: 'fill', n: 3, en: '___ you enjoy learning a foreign language?', prompt: '___ you enjoy learning a foreign language?', ar: 'هل تستمتع بتعلم لغة أجنبية؟',
          answer: ['do'], why: 'سؤال نعم/لا في المضارع البسيط يبدأ بـ Do. وبعده فعل enjoy + -ing.', whyEn: 'A yes/no question in the present simple starts with Do. After it, enjoy + -ing.' },
        { t: 'q', kind: 'fill', n: 4, en: 'Why ___ you studying English?', prompt: 'Why ___ you studying English?', ar: 'لماذا تدرس الإنجليزية؟',
          answer: ['are'], why: 'studying صيغة -ing، فالزمن المضارع المستمر: am/is/are + -ing. مع you نستعمل are.', whyEn: 'Studying is an -ing form, so this is the present continuous: am/is/are + -ing. With you we use are.' },
        { t: 'q', kind: 'fill', n: 5, en: 'Which foreign countries have you been ___?', prompt: 'Which foreign countries have you been ___?', ar: 'أي بلدان أجنبية زرتها؟',
          answer: ['to'], why: 'have you been to = هل زرت. الفعل المساعد have موجود، والكلمة الناقصة حرف الجر to بعد been عند ذكر مكان. (انظر الملاحظة أدناه.)', whyEn: 'Have you been to ...? means "have you visited ...?". The auxiliary have is already there; the missing word is the preposition to after been when we name a place. (See the note below.)' },
        { t: 'q', kind: 'fill', n: 6, en: 'What ___ you learn in the last English lesson?', prompt: 'What ___ you learn in the last English lesson?', ar: 'ماذا تعلمت في آخر درس إنجليزي؟',
          answer: ['did'], why: 'in the last lesson = حدث في الماضي، فالماضي البسيط: did + الفعل في المصدر (learn).', whyEn: 'The last lesson is in the past, so we use the past simple: did + base verb (learn).' },
        { t: 'q', kind: 'fill', n: 7, en: 'What are you going ___ do after this lesson?', prompt: 'What are you going ___ do after this lesson?', ar: 'ماذا ستفعل بعد هذا الدرس؟',
          answer: ['to'], why: 'خطة مستقبلية: am/is/are going to + مصدر. الكلمة الناقصة هي to.', whyEn: 'A future plan: am/is/are going to + base verb. The missing word is to.' },
        { t: 'note', tone: 'tip', ar: 'ملاحظة: في السؤال 5 قال الكتاب إن الناقص كلمة واحدة. الحل المقبول هو to (been to). في الإنجليزية الأمريكية قد تسمع been بدون to أحياناً في الكلام، لكن الصحيح هنا been to.', en: 'Note: in question 5 the book says one word is missing. The accepted answer is to (been to). In American speech you sometimes hear been without to, but been to is the correct answer here.' }
      ]
    },
    {
      id: 'starter2', no: '2', tag: 'Starter', titleEn: 'Ask and answer with a partner', titleAr: 'التمهيد 2: اسأل وأجب مع زميلك',
      instrEn: 'Ask and answer the questions with a partner.',
      instrAr: 'اسأل زميلك الأسئلة السبعة وأجب. المثال في الكتاب: Where were you born? ← I was born in Hungary.',
      blocks: [
        { t: 'bubbles', lines: [
          { who: 'A', en: 'Where were you born?', ar: 'أين وُلدت؟' },
          { who: 'B', en: 'I was born in Hungary.', ar: 'وُلدت في المجر.' }
        ]},
        { t: 'model',
          en: "1 Where were you born? I was born in Cairo.\n2 What languages do you speak? I speak Arabic and English, and a little French.\n3 Do you enjoy learning a foreign language? Yes, I do. It's challenging but fun.\n4 Why are you studying English? Because I need it for my work.\n5 Which foreign countries have you been to? I've been to Turkey and Jordan.\n6 What did you learn in the last English lesson? We learned about the past simple.\n7 What are you going to do after this lesson? I'm going to go home and have lunch.",
          ar: 'نموذج لإجابات كاملة (غيّر المعلومات بما يناسبك). الإجابات شخصية، وانتبه إلى أن الإجابة تستعمل الزمن نفسه الذي في السؤال.', arEn: 'A full model set of answers (change the information to suit you). The answers are personal, and notice that the answer uses the same tense as the question.' }
      ]
    },
    {
      id: 'starter3', no: '3', tag: 'Starter', titleEn: 'Tell the class about your partner', titleAr: 'التمهيد 3: أخبر الصف عن زميلك',
      instrEn: "Tell the class about your partner. 'Cintia was born in Hungary. She speaks ...'",
      instrAr: 'أخبر الصف عن زميلك. المثال: Cintia was born in Hungary. She speaks ... لاحظ التحويل إلى ضمير الغائبة: speaks (بإضافة s).',
      blocks: [
        { t: 'model',
          en: "Sara was born in Cairo. She speaks Arabic and English. She enjoys learning languages. She's studying English because she needs it for her work. She's been to Turkey. In the last lesson she learned the past simple. After this lesson she's going to go home.",
          ar: 'نموذج: نحوّل إجابات الزميل إلى ضمير الغائبة she: speaks / enjoys / is studying / has been / learned / is going to go. تذكّر -s مع he/she/it في المضارع البسيط.', arEn: 'A model: we turn the partner\'s answers into the third person she: speaks / enjoys / is studying / has been / learned / is going to go. Remember -s with he/she/it in the present simple.' }
      ]
    },
    {
      id: 'didnt', no: '', tag: 'I didn\'t know that!', titleEn: "I didn't know that!: the Language Quiz", titleAr: 'لم أكن أعرف ذلك! اختبار اللغة',
      instrEn: "1 Try to answer the questions in the Language Quiz. If you're not sure, guess. Discuss your ideas with a partner.\n2 2.1 Listen and check your answers. Make notes about the extra information you hear.\n3 Discuss your notes as a class. Does anything surprise you?",
      instrAr: '1) حاول الإجابة عن أسئلة الاختبار أدناه، وخمّن إن لم تكن متأكداً، وناقش أفكارك مع زميل. 2) استمع إلى التسجيل 2.1 وتحقق من إجاباتك، ودوّن المعلومات الإضافية. 3) ناقش ملاحظاتك مع الصف: هل فاجأك شيء؟ الأسئلة 1–6 هنا، و7–12 في الصفحة 21. جميعها محلولة مع شرح.',
      blocks: [
        { t: 'audio', slot: '2.1', en: 'Listen and check your answers. Make notes about the extra information you hear.', ar: 'تسجيل 2.1: الإجابات الصحيحة لأسئلة الاختبار (1–12) مع معلومات إضافية. دوّن ما يفاجئك.' },
        { t: 'q', kind: 'open', n: 1, en: 'Discuss your ideas with a partner. Does anything surprise you?', ar: 'ناقش أفكارك مع زميل. هل فاجأك شيء؟',
          answer: "I was surprised that a language disappears every two weeks. I also didn't know that people in the past always read aloud, and that Edison was afraid of things that worked the first time.",
          why: 'سؤال شخصي ولا يوجد جواب واحد. هذا نموذج. استعمل: I was surprised that ... / I didn\'t know that ... / It\'s amazing that ...', whyEn: "A personal question with no single correct answer; this is a model. Use: I was surprised that ... / I didn't know that ... / It's amazing that ..." }
      ]
    },
    {
      id: 'quiz1', no: '', tag: 'Language Quiz', titleEn: 'Language Quiz: questions 1-6', titleAr: 'اختبار اللغة: الأسئلة 1–6',
      instrEn: 'Language Quiz. Choose the correct answer.',
      instrAr: 'أجب عن أسئلة الاختبار. السؤال 1 له ست إجابات صحيحة. وفي كل سؤال تجد الجواب مع المعلومة الإضافية التي يذكرها التسجيل 2.1.',
      blocks: [
        { t: 'q', kind: 'open', n: 1, en: 'Which six of these languages does the UN use for official business?\na English  b Russian  c Japanese  d Spanish  e French  f Portuguese  g German  h Chinese  i Arabic  j Hindi',
          ar: 'ما اللغات الست من هذه التي تستعملها الأمم المتحدة في أعمالها الرسمية؟',
          answer: 'a English, b Russian, d Spanish, e French, h Chinese, i Arabic',
          why: 'اللغات الرسمية الست في الأمم المتحدة: الإنجليزية والروسية والإسبانية والفرنسية والصينية والعربية. أما اليابانية والبرتغالية والألمانية والهندية فليست منها. ويذكر التسجيل أن أغلب الدول الأعضاء تفضّل استلام المراسلات بالإنجليزية. لاحظ في السؤال: does the UN use (مضارع بسيط مع does).',
          whyEn: 'The six official UN languages are English, Russian, Spanish, French, Chinese and Arabic. Japanese, Portuguese, German and Hindi are not among them. The recording adds that most member nations prefer to receive correspondence in English. Notice the grammar: does the UN use (present simple with does).' },
        { t: 'q', kind: 'choice', n: 2, en: 'At what rate are languages disappearing around the world?', ar: 'بأي معدل تختفي اللغات حول العالم؟',
          options: ['a  one every two weeks', 'b  one every two months', 'c  one every two years'], correct: 0,
          why: 'تختفي لغة كل أسبوعين. ويُعتقد أن نحو نصف لغات العالم سيختفي خلال القرن القادم. السؤال بصيغة المضارع المستمر: are languages disappearing.', whyEn: 'A language disappears every two weeks. It is thought that about half of the world\'s languages will disappear in the next century. The question is in the present continuous: are languages disappearing.' },
        { t: 'photo', src: 'media/images/unit-2/p20-bee.jpg', title: 'A bumblebee', cap: 'Question 3', ar: 'صورة قريبة لنحلة طنّانة سوداء وصفراء بأجنحة شفافة، وبجانبها فقاعة كلام فيها علامة استفهام. تلمّح الصورة إلى سؤال: ماذا يقول النحل والقطط في بريطانيا؟', descEn: 'A close-up of a black and yellow bumblebee with transparent wings. Beside it is a speech bubble with a question mark, hinting at the question: what sounds do bees and cats make in Britain?' },
        { t: 'q', kind: 'choice', n: 3, en: 'In Britain, which sounds do 1 bees and 2 cats make?', ar: 'في بريطانيا، ما الأصوات التي يصدرها 1 النحل و2 القطط (كما تُكتب بالكلمات)؟',
          options: ['a  1 sum and 2 miau', 'b  1 bun and 2 nyan', 'c  1 buzz and 2 miaow'], correct: 2,
          why: 'في بريطانيا: bees go buzz وcats go miaow. أما sum وmiau فهي الألمانية، وbun وnyan فهي اليابانية. السؤال: do bees make (مضارع بسيط).', whyEn: 'In Britain, bees go buzz and cats go miaow. Sum and miau are the German sounds, and bun and nyan are the Japanese ones. The question uses the present simple: do bees make.' },
        { t: 'q', kind: 'choice', n: 4, en: 'On which continent have languages developed clicking sounds as consonants?', ar: 'في أي قارة طوّرت اللغات أصوات «النقر» كحروف ساكنة؟',
          options: ['a  Asia', 'b  South America', 'c  Africa'], correct: 2,
          why: 'كثير من اللغات الأفريقية طوّرت أصوات النقر كحروف ساكنة. وفي لغات أخرى تُستعمل النقرات فقط للتعبير عن مشاعر مثل عدم الرضا. الزمن: have developed (مضارع تام).', whyEn: 'Many African languages have developed clicking sounds as consonants. In other languages clicks are only used to express emotions such as disapproval. Tense: have developed (present perfect).' },
        { t: 'photo', src: 'media/images/unit-2/p20-atm.jpg', title: 'An ATM in Latin', cap: 'Question 5', ar: 'شاشة صرّاف آلي (ATM) تعرض رسالة بحروف لاتينية: INSERITO SCIDULAM QUAESO UT FACIUNDAM COGNOSCAS RATIONEM. على جانبي الشاشة أزرار، وفي الأسفل فتحة البطاقة ولوحة المفاتيح.', descEn: 'An ATM screen showing a message in Latin: INSERITO SCIDULAM QUAESO UT FACIUNDAM COGNOSCAS RATIONEM. There are buttons on both sides of the screen, and the card slot and keypad below.', opt: true },
        { t: 'q', kind: 'choice', n: 5, en: 'Where are you standing if you are using an ATM in Latin?', ar: 'أين تقف إذا كنت تستعمل صرّافاً آلياً باللاتينية؟',
          options: ['a  in Vatican City', 'b  in the University of Oxford', 'c  in Rome city centre'], correct: 0,
          why: 'الفاتيكان له بنك خاص به يضم صرّافاً آلياً باللاتينية، لكنه للكهنة وموظفي الفاتيكان فقط. أما أكسفورد وروما فلا. صيغة السؤال: are you standing (مضارع مستمر).', whyEn: 'The Vatican has its own private bank with an ATM in Latin, but only for priests and Vatican employees. Oxford and Rome do not. The question is in the present continuous: are you standing.' },
        { t: 'photo', src: 'media/images/unit-2/p20-reader.jpg', title: 'A boy reading', cap: 'Question 6', ar: 'صبي يبتسم يرتدي قميصاً برتقالياً ويستلقي على الأرض في مكتبة وأمامه كتاب مفتوح، وخلفه رفوف مليئة بالكتب. الصورة تتعلق بالسؤال عن القراءة الصامتة.', descEn: 'A smiling boy in an orange shirt lies on the floor of a library with an open book in front of him and shelves full of books behind. It goes with the question about reading silently.' },
        { t: 'q', kind: 'choice', n: 6, en: 'When did people first begin to read silently, and not say the words out loud?', ar: 'متى بدأ الناس يقرؤون بصمت ولا ينطقون الكلمات بصوت عال؟',
          options: ['a  in 400 BC', 'b  in the 1st century AD', 'c  in the 10th century AD'], correct: 2,
          why: 'القراءة الصامتة صارت شائعة فقط في القرن العاشر الميلادي. وفي القرن الرابع كانت غريبة إلى درجة أن الناس سافروا إلى ميلانو ليشاهدوا الأسقف أمبروز وهو يقرأ بصمت. الزمن: did ... begin (ماضٍ بسيط).', whyEn: 'Silent reading only became common in the 10th century AD. In the 4th century it was so unusual that people travelled to Milan to watch a bishop called Ambrose do it. Tense: did ... begin (past simple).' },
        { t: 'note', tone: 'tip', ar: 'الأسئلة 7–12 من الاختبار في الصفحة 21.', en: 'Quiz questions 7-12 are on page 21.' }
      ]
    },
    {
      id: 'spot', no: '', tag: 'Grammar Spot', titleEn: 'Grammar Spot', titleAr: 'ركن القواعد',
      instrEn: '1 Read the questions in the quiz again. Identify the tense in each one. Which two are passive?\n2 Answer these questions. Give examples from the quiz.\n1 Which tenses use the auxiliary verbs do/does/did to form questions and negatives?\n2 Which tenses use the verb to be (is/are/was)?\n3 Which tenses use have/has?\nGrammar reference 2.1-2.5, p141-2',
      instrAr: '1) اقرأ أسئلة الاختبار (الصفحتان 20–21) وحدّد زمن كل سؤال، وأيّ سؤالين مبنيّان للمجهول؟ 2) أجب عن الأسئلة الثلاثة مع أمثلة من الاختبار. مرجع القواعد: 2.1–2.5 ص141–142.',
      blocks: [
        { t: 'box', title: 'Tense of each quiz question', titleAr: 'زمن كل سؤال في الاختبار', items: [
          { en: '1 does the UN use: Present Simple', ar: 'المضارع البسيط' },
          { en: '2 are languages disappearing: Present Continuous', ar: 'المضارع المستمر' },
          { en: '3 do bees and cats make: Present Simple', ar: 'المضارع البسيط' },
          { en: '4 have languages developed: Present Perfect', ar: 'المضارع التام' },
          { en: '5 are you standing / are you using: Present Continuous', ar: 'المضارع المستمر' },
          { en: '6 did people first begin: Past Simple', ar: 'الماضي البسيط' },
          { en: "7 has English taken (Present Perfect), didn't English keep: Past Simple", ar: 'المضارع التام + الماضي البسيط' },
          { en: '8 was Thomas Edison doing: Past Continuous', ar: 'الماضي المستمر' },
          { en: '9 has often tried / have become: Present Perfect', ar: 'المضارع التام' },
          { en: '10 have people been using: Present Perfect Continuous', ar: 'المضارع التام المستمر' },
          { en: '11 are added: Present Simple Passive', ar: 'المضارع البسيط المبني للمجهول' },
          { en: '12 was spoken: Past Simple Passive', ar: 'الماضي البسيط المبني للمجهول' }
        ]},
        { t: 'q', kind: 'open', n: 1, en: 'Which two questions are passive?', ar: 'أيّ سؤالين مبنيّان للمجهول؟',
          answer: "Question 11 (How many new words are added to the Oxford English Dictionary every year?) and question 12 (What language was commonly spoken by well-educated Ancient Romans?).",
          why: 'المبني للمجهول = to be + اسم المفعول (past participle): are added و was spoken. الفاعل لا يقوم بالفعل بل يقع عليه الفعل.', whyEn: 'The passive = be + past participle: are added and was spoken. The subject does not do the action; the action happens to it.' },
        { t: 'q', kind: 'open', n: 2, en: 'Which tenses use the auxiliary verbs do/does/did to form questions and negatives? Give examples from the quiz.', ar: 'أي الأزمنة تستعمل do/does/did لتكوين الأسئلة والنفي؟',
          answer: "The Present Simple (does the UN use, do bees and cats make) and the Past Simple (did people first begin, didn't English keep).",
          why: 'do/does للمضارع البسيط، وdid للماضي البسيط. بعدها يأتي الفعل في صيغة المصدر (use, make, begin, keep). الأزمنة الأخرى لا تستعملها.', whyEn: 'Do/does is used for the present simple and did for the past simple. The main verb then takes the base form (use, make, begin, keep). The other tenses do not use them.' },
        { t: 'q', kind: 'open', n: 3, en: 'Which tenses use the verb to be (is/are/was)? Give examples from the quiz.', ar: 'أي الأزمنة تستعمل الفعل to be؟',
          answer: "The Present Continuous (are languages disappearing, are you standing), the Past Continuous (was Edison doing), and the passive (are added, was spoken).",
          why: 'to be + ‎-ing للمستمر (مضارع وماضٍ)، وto be + اسم المفعول للمبني للمجهول.', whyEn: 'Be + -ing is used for continuous tenses (present and past), and be + past participle for the passive.' },
        { t: 'q', kind: 'open', n: 4, en: 'Which tenses use have/has? Give examples from the quiz.', ar: 'أي الأزمنة تستعمل have/has؟',
          answer: "The Present Perfect (have languages developed, has English taken, has tried, have become) and the Present Perfect Continuous (have people been using).",
          why: 'have/has + اسم المفعول للمضارع التام، وhave/has + been + ‎-ing للمضارع التام المستمر.', whyEn: 'Have/has + past participle forms the present perfect, and have/has + been + -ing the present perfect continuous.' },
        { t: 'note', tone: 'grammar', ar: 'ثلاثة أفعال مساعدة: do (للبسيط)، be (للمستمر والمبني للمجهول)، have (للتام). ولتكوين السؤال نقدّم الفعل المساعد على الفاعل: Where were you born? وللنفي نضيف n\'t: didn\'t, isn\'t, haven\'t. وإذا لم يوجد فعل مساعد نستعمل do/does/did.', en: "Three auxiliary verbs: do (simple tenses), be (continuous and passive), have (perfect). To make a question, put the auxiliary before the subject: Where were you born? For negatives add n't: didn't, isn't, haven't. If there is no auxiliary, use do/does/did." }
      ]
    },
    {
      id: 'write', no: '4', tag: 'Write your own quiz', titleEn: 'Write your own quiz', titleAr: 'اكتب اختباراً خاصاً بك',
      instrEn: 'Work in groups.\nWrite five questions on general knowledge about the world, past and present. Do some research if necessary.\nAsk and answer the questions with another group. Which group knew the most answers?',
      instrAr: 'اعمل في مجموعات. اكتب خمسة أسئلة معرفة عامة عن العالم قديماً وحديثاً، وابحث إن لزم. ثم اسأل مجموعة أخرى وأجب عن أسئلتها. أي مجموعة عرفت أكثر الإجابات؟',
      blocks: [
        { t: 'model',
          en: "1 What language do most people in the world speak as their first language? (Mandarin Chinese)\n2 When was the first telephone invented? (1876)\n3 How many people are living on Earth today? (about 8 billion)\n4 Which country has won the most football World Cups? (Brazil, five times)\n5 Where is the Great Pyramid of Giza? (Egypt)\n(added by us)",
          ar: 'أسئلة نموذجية (أضفناها نحن) للتدريب: تلاحظ أنها تستعمل أزمنة مختلفة: المضارع البسيط، المستمر، الماضي المبني للمجهول، والمضارع التام. غيّرها بأسئلتك. تأكد دائماً من الإجابات بالبحث.', arEn: 'Sample questions (added by us) for practice. Notice they use different tenses: present simple, continuous, past passive and present perfect. Replace them with your own, and always check the answers by research.' }
      ]
    },
    {
      id: 'wrap', no: '', titleEn: 'What to remember', titleAr: 'ما يجب أن تتذكره',
      instrEn: 'Key points of page 20.', instrAr: 'أهم نقاط الصفحة 20.',
      blocks: [
        { t: 'box', title: 'What to remember', titleAr: 'ما يجب أن تتذكره', items: [
          { en: 'The three auxiliary verbs are do, be and have: do for simple tenses, be for continuous and passive, have for perfect tenses.', ar: 'الأفعال المساعدة ثلاثة: do للبسيط، وbe للمستمر والمبني للمجهول، وhave للتام.' },
          { en: 'Questions: put the auxiliary before the subject (Where were you born?). With no auxiliary, use do/does/did + base verb.', ar: 'السؤال: الفعل المساعد قبل الفاعل. وإن لم يوجد نستعمل do/does/did + المصدر.' },
          { en: 'Passive = be + past participle (are added, was spoken).', ar: 'المبني للمجهول = be + اسم المفعول.' },
          { en: 'Future plan: be going to + base verb. Experience: have you been to ...?', ar: 'الخطة المستقبلية: be going to + مصدر. والخبرة: have you been to...؟' },
          { en: "Quiz facts: six UN languages; a language disappears every two weeks; silent reading became common in the 10th century.", ar: 'معلومات الاختبار: ست لغات في الأمم المتحدة؛ تختفي لغة كل أسبوعين؛ والقراءة الصامتة شاعت في القرن العاشر.' }
        ]}
      ]
    }
  ]
});

/* ============================================================
   topics.js — صفحات القواعد والكلمات (مستخرجة من محتوى الوحدة)
   كل عنصر يشبه صفحة: sections و blocks بنفس أنواع الكتل.
   group: 'grammar' أو 'words'
   ============================================================ */
window.TOPICS = [
  /* ============ القواعد ============ */
  {
    id: 'g-questions', group: 'grammar', title: 'Information questions', titleAr: 'أسئلة المعلومات: الترتيب والأدوات',
    summaryAr: 'كيف تبني السؤال الصحيح: كلمة السؤال + المساعد + الفاعل + الفعل، ومتى لا تحتاج إلى do/does/did.', summaryEn: 'How to build a correct question: question word + auxiliary + subject + verb, and when you do not need do/does/did.',
    sections: [
      { id: 'order', no: '1', titleEn: 'Word order', titleAr: 'ترتيب الكلمات في السؤال',
        blocks: [
          { t: 'note', tone: 'grammar', ar: 'القاعدة العامة: كلمة السؤال ثم الفعل المساعد ثم الفاعل ثم الفعل الرئيسي. لا نقلب الترتيب إلى «فاعل ثم فعل» كما في الجملة الخبرية.', en: 'General rule: question word, then the auxiliary verb, then the subject, then the main verb. Do not reverse this into \'subject then verb\' as in a statement.' },
          { t: 'box', title: 'Pattern', titleAr: 'النموذج', items: [
            { en: 'Question word + auxiliary + subject + main verb', ar: 'الصيغة العامة' },
            { en: 'Where do you live?', ar: 'مضارع بسيط: do/does' },
            { en: 'What did she study?', ar: 'ماضٍ بسيط: did' },
            { en: 'Why is he crying?', ar: 'مع be: لا نحتاج do' },
            { en: 'How long have you worked here?', ar: 'مع have: المضارع التام' },
            { en: 'Where are you going?', ar: 'مضارع مستمر: be + فعل ing' }
          ]},
          { t: 'note', tone: 'tip', ar: 'بعد did نستعمل الفعل بصيغته الأولى: What did she study؟ (وليس studied). وبعد does نحذف s: Where does he live؟', en: 'After did we use the base form of the verb: What did she study? (not studied). After does we drop the s: Where does he live?' }
        ]},
      { id: 'subject', no: '2', titleEn: 'Subject questions', titleAr: 'أسئلة الفاعل: بلا do',
        blocks: [
          { t: 'note', tone: 'grammar', ar: 'إذا كانت كلمة السؤال (who أو what أو which) هي الفاعل نفسه فلا نستعمل do/does/did، ونبقي ترتيب الجملة الخبرية.', en: 'If the question word (who, what or which) is itself the subject, we do not use do/does/did, and we keep the word order of a statement.' },
          { t: 'box', title: 'Compare', titleAr: 'قارن', items: [
            { en: 'Who called you? (someone called you)', ar: 'Who هي الفاعل: بلا did' },
            { en: 'Who did you call? (you called someone)', ar: 'Who هي المفعول: نستعمل did' },
            { en: 'What happened?', ar: 'What هي الفاعل: بلا did' },
            { en: 'What did you see?', ar: 'What هي المفعول: نستعمل did' }
          ]},
          { t: 'q', kind: 'choice', n: 1, en: 'Someone broke the window. ___ ?', ar: 'اختر السؤال الصحيح عن الفاعل.', options: ['Who did break the window?', 'Who broke the window?', 'Who does break the window?'], correct: 1, why: 'Who هي الفاعل، فنقول Who broke the window؟ بلا did.', whyEn: 'Who is the subject, so we say Who broke the window? with no did.' },
          { t: 'q', kind: 'choice', n: 2, en: 'You called someone. ___ ?', ar: 'اختر السؤال الصحيح عن المفعول.', options: ['Who called you?', 'Who did you call?', 'Who you called?'], correct: 1, why: 'Who هنا مفعول، فنحتاج did والفاعل you ثم الفعل الأول call.', whyEn: 'Here Who is the object, so we need did, then the subject you, then the base verb call.' }
        ]},
      { id: 'words', no: '3', titleEn: 'Question words', titleAr: 'كلمات السؤال وأشهر استعمالاتها',
        blocks: [
          { t: 'box', title: 'Question words', titleAr: 'الكلمات', items: [
            { en: 'What …? (What colour / What size / What kind of)', ar: 'ماذا / أي نوع' },
            { en: 'Which …? (Which floor / Which part of town)', ar: 'أي واحد من محدد' },
            { en: 'Whose …? (Whose bag is this?)', ar: 'لمن (الملكية)' },
            { en: 'Who …?', ar: 'من' },
            { en: 'Where / When / Why', ar: 'أين / متى / لماذا' },
            { en: 'How …? (How are you? How did you get here?)', ar: 'كيف' }
          ]},
          { t: 'box', title: 'How + adjective / adverb', titleAr: 'How مع صفة أو ظرف', items: [
            { en: 'How old is she?', ar: 'العمر' }, { en: 'How tall is he?', ar: 'الطول' }, { en: 'How big is it?', ar: 'الحجم' },
            { en: 'How far is it to your work?', ar: 'المسافة' }, { en: 'How long is the flight?', ar: 'المدة أو الطول' },
            { en: 'How much does it weigh?', ar: 'الكمية أو الثمن (غير معدود)' }, { en: 'How many bedrooms are there?', ar: 'العدد (معدود)' }
          ]},
          { t: 'note', tone: 'tip', ar: 'What + اسم أو Which + اسم أو Whose + اسم تأتي قبل اسم. أما How فتأتي قبل صفة أو ظرف. وهذا ما تلخصه نقطتا Grammar Spot في صفحة 11.', en: 'What + noun, Which + noun and Whose + noun come before a noun. How comes before an adjective or an adverb. This is what the two Grammar Spot points on page 11 summarise.' }
        ]},
      { id: 'four', no: '4', titleEn: 'Four similar questions', titleAr: 'أربعة أسئلة متشابهة عن الأشخاص',
        blocks: [
          { t: 'box', title: 'Describing people', titleAr: 'وصف الأشخاص', items: [
            { en: "What's she like? — She's very nice and easy-going.", ar: 'الشخصية والطباع' },
            { en: 'What does she look like? — She is tall with long, wavy hair.', ar: 'الشكل الخارجي' },
            { en: 'Who does she look like? — She looks like her dad.', ar: 'الشبه بشخص آخر' },
            { en: 'How is she? — She is fine, thanks.', ar: 'الحال أو الصحة الآن' }
          ]},
          { t: 'bubbles', lines: [
            { who: 'A', en: "What's your new teacher like?", ar: 'كيف هو معلمك الجديد (شخصيته)؟' },
            { who: 'B', en: "He's really kind. He explains everything twice.", ar: 'لطيف جداً، يشرح كل شيء مرتين.' },
            { who: 'A', en: 'And what does he look like?', ar: 'وكيف يبدو شكله؟' },
            { who: 'B', en: "He's quite tall, with short grey hair and glasses.", ar: 'طويل نوعاً ما بشعر رمادي قصير ونظارات.' }
          ]},
          { t: 'q', kind: 'fill', n: 3, en: '___ is your sister like?', prompt: '___ is your sister like?', ar: 'أكمل: عن الشخصية.', answer: ['What'], why: 'What … like؟ تسأل عن الشخصية.', whyEn: 'What … like? asks about personality.' },
          { t: 'q', kind: 'fill', n: 4, en: 'What does your brother ___ like?', prompt: 'What does your brother ___ like?', ar: 'أكمل: عن الشبه.', answer: ['look'], why: 'What does he look like؟ تسأل عن الشكل، والفعل بعد does يبقى look.', whyEn: 'What does he look like? asks about appearance, and the verb after does stays in the base form: look.' }
        ]},
      { id: 'ref', no: '5', titleEn: 'Grammar reference 1.1 and 1.2', titleAr: 'المرجع السريع (Grammar reference ص 141–142)',
        blocks: [
          { t: 'note', tone: 'tip', ar: 'صفحة «ارجع إليها لاحقاً» للوحدة الأولى، بشرحنا الخاص.', en: 'The look-it-up-later page for Unit 1, in our own explanation.' },
          { t: 'box', title: '1.1 Information questions', titleAr: '1.1 أسئلة المعلومات', items: [
            { en: 'What + noun: What colour are your eyes? What language do they speak in Brazil?', ar: 'خيارات مفتوحة تقريباً (اللون، الحجم، النوع، اللغة)' },
            { en: 'Which + noun / which one: Which part of town? Which way do we go? Which one do you want, the red or the blue?', ar: 'خيارات محدودة: اثنان أو ثلاثة، أو أجزاء وطرق وأماكن' },
            { en: 'What / Which channel is the match on?', ar: 'أحياناً تصحّ الكلمتان' },
            { en: "Whose + noun: Whose book is this? / Whose is this book?", ar: 'المالك (ترتيبان ممكنان)' },
            { en: 'How + adjective / adverb: How tall? How big? How far? How often? How long does it take?', ar: 'الدرجة والمسافة والتكرار والمدة' },
            { en: 'How much (uncountable) / How many (countable): How much money? How many rooms?', ar: 'الكمية: غير معدود / معدود' }
          ]},
          { t: 'note', tone: 'tip', en: 'Quick test: small, known set of answers → which. Open choice → what. A number or degree → how.', ar: 'اختبار سريع: الخيارات قليلة ومعروفة؟ استعمل which. مفتوحة؟ what. رقم أو درجة؟ how.' },
          { t: 'box', title: '1.2 What … like? or How …?', titleAr: '1.2 What … like؟ أم How …؟', items: [
            { en: "What's … like? — the lasting nature of a person or thing: “He's a great guy.”", ar: 'الطبيعة العامة الثابتة (شخصية، طعم…)' },
            { en: "How's …? — the present condition, which can change: “Better than last year.”", ar: 'الحال الآن، وقد يتغيّر' },
            { en: "How's (a person)? — health, happiness, feelings: “He's fine, thanks.”", ar: 'الصحة والمزاج وردود الفعل' },
            { en: "Weather: How's the weather? / What's the weather like?", ar: 'للطقس تصحّ الصيغتان' }
          ]}
        ]}
    ]
  },
  {
    id: 'g-ed-ing', group: 'grammar', title: '-ed and -ing adjectives', titleAr: 'صفات -ed و -ing',
    summaryAr: 'الفرق بين الشعور (bored) وما يسبب الشعور (boring) مع أمثلة كل الكلمات التي وردت في صفحة 12.', summaryEn: 'The difference between how a person feels (bored) and what causes the feeling (boring), with examples of all the words that appeared on page 12.',
    sections: [
      { id: 'rule', no: '1', titleEn: 'The rule', titleAr: 'القاعدة',
        blocks: [
          { t: 'note', tone: 'grammar', ar: 'صفة -ed تصف شعور الإنسان: I am bored. وصفة -ing تصف الشيء أو الشخص أو الموقف الذي يسبب ذلك الشعور: The film is boring.', en: 'An -ed adjective describes how a person feels: I am bored. An -ing adjective describes the thing, person or situation that causes that feeling: The film is boring.' },
          { t: 'box', title: 'Pairs', titleAr: 'الأزواج', items: [
            { en: 'bored — boring', ar: 'ضجِر — ممل' }, { en: 'interested — interesting', ar: 'مهتم — مثير للاهتمام' }, { en: 'tired — tiring', ar: 'متعب — مُتعِب' },
            { en: 'thrilled — thrilling', ar: 'مبتهج مأخوذ — مثير مشوّق' }, { en: 'charmed — charming', ar: 'مسحور — ساحر' }, { en: 'astonished — astonishing', ar: 'مندهش — مدهش' },
            { en: 'relaxed — relaxing', ar: 'مرتاح — مريح' }, { en: 'excited — exciting', ar: 'متحمس — مثير' }, { en: 'disappointed — disappointing', ar: 'محبط — محبِط' },
            { en: 'exhausted — exhausting', ar: 'منهك — مرهق' }, { en: 'shocked — shocking', ar: 'مصدوم — صادم' }
          ]},
          { t: 'bubbles', lines: [
            { who: 'A', en: 'How was the match?', ar: 'كيف كانت المباراة؟' },
            { who: 'B', en: "It was thrilling! I was so excited that I couldn't sleep.", ar: 'كانت مثيرة! كنت متحمساً جداً حتى لم أستطع النوم.' }
          ]}
        ]},
      { id: 'practice', no: '2', titleEn: 'Practice', titleAr: 'تدرّب',
        blocks: [
          { t: 'q', kind: 'choice', n: 1, en: 'The lesson was ___.', ar: 'الدرس هو الذي يسبب الملل.', options: ['bored', 'boring'], correct: 1, why: 'نصف الدرس (الشيء) بصفة -ing.', whyEn: 'We describe the lesson (a thing) with an -ing adjective.' },
          { t: 'q', kind: 'choice', n: 2, en: 'I was ___ by the news.', ar: 'أنا الذي شعرت.', options: ['shocked', 'shocking'], correct: 0, why: 'نصف شعورنا نحن بصفة -ed.', whyEn: 'We describe our own feelings with an -ed adjective.' },
          { t: 'q', kind: 'choice', n: 3, en: 'We had a really ___ holiday.', ar: 'العطلة هي التي تريح.', options: ['relaxed', 'relaxing'], correct: 1, why: 'العطلة (الشيء) تأخذ -ing.', whyEn: 'The holiday (a thing) takes -ing, because it causes the feeling.' },
          { t: 'q', kind: 'fill', n: 4, en: 'She felt very ___ after the long run. (exhaust)', prompt: 'She felt very ___ after the long run. (exhaust)', ar: 'أكمل بالصيغة الصحيحة.', answer: ['exhausted'], why: 'شعور الإنسان: exhausted.', whyEn: 'This is a person\'s feeling, so we use exhausted.' }
        ]}
    ]
  },
  {
    id: 'g-compound', group: 'grammar', title: 'Compound adjectives', titleAr: 'الصفات المركبة',
    summaryAr: 'كيف تتكوّن الصفات المركبة من كلمتين، وأنماطها وأمثلتها من الوحدة.', summaryEn: 'How compound adjectives are formed from two words, with their patterns and examples from the unit.',
    sections: [
      { id: 'patterns', no: '1', titleEn: 'Common patterns', titleAr: 'الأنماط الشائعة',
        blocks: [
          { t: 'note', tone: 'grammar', ar: 'الصفة المركبة كلمتان أو أكثر تعملان معاً كصفة واحدة، وتُكتب غالباً بشرطة: a well-behaved child. وإذا دخل فيها رقم نستعمل المفرد: a two-bedroom flat (وليس two-bedrooms).', en: 'A compound adjective is two or more words working together as one adjective, and it is usually written with a hyphen: a well-behaved child. If a number is part of it, we use the singular: a two-bedroom flat (not two-bedrooms).' },
          { t: 'box', title: 'Patterns', titleAr: 'الأنماط', items: [
            { en: 'adverb + past participle: well-dressed, well-behaved, brand-new', ar: 'ظرف + اسم مفعول' },
            { en: 'noun + past participle: home-made, hand-made', ar: 'اسم + اسم مفعول' },
            { en: 'adjective + noun/-ed: middle-aged, full-time, bad-tempered', ar: 'صفة + اسم أو صفة -ed' },
            { en: 'adjective + -ing: good-looking, hard-working, easy-going', ar: 'صفة أو ظرف + فعل ing' },
            { en: 'number + noun: a 2-bedroom cottage', ar: 'رقم + اسم مفرد' }
          ]},
          { t: 'box', title: 'From the book', titleAr: 'من الكتاب', compact: true, items: [
            { en: 'good-looking', ar: 'وسيم' }, { en: 'hard-working', ar: 'مجتهد' }, { en: 'well-dressed', ar: 'أنيق' }, { en: 'old-fashioned', ar: 'قديم الطراز' },
            { en: 'second-hand', ar: 'مستعمل' }, { en: 'well-behaved', ar: 'مهذب' }, { en: 'brand-new', ar: 'جديد تماماً' }, { en: 'middle-aged', ar: 'في منتصف العمر' },
            { en: 'full-time', ar: 'بدوام كامل' }, { en: 'bad-tempered', ar: 'حاد الطباع' }, { en: 'home-made', ar: 'مصنوع منزلياً' }, { en: 'easy-going', ar: 'سهل المعشر' }
          ]},
          { t: 'q', kind: 'fill', n: 1, en: 'a ___-bedroom flat', prompt: 'We rented a two-___ flat. (bedrooms / bedroom)', ar: 'الكلمة الصحيحة بعد الرقم.', answer: ['bedroom'], why: 'مع الرقم نستعمل المفرد في الصفة المركبة.', whyEn: 'With a number, we use the singular form inside a compound adjective.' }
        ]}
    ]
  },
  {
    id: 'g-collocations', group: 'grammar', title: 'Adjectives and nouns that go together', titleAr: 'متلازمات: صفة + اسم',
    summaryAr: 'اختيارات الكلمات التي تأتي معاً بشكل طبيعي في الإنجليزية، من تمرين صفحة 12.', summaryEn: 'Word choices that go together naturally in English, from the exercise on page 12.',
    sections: [
      { id: 'list', no: '1', titleEn: 'Natural pairs', titleAr: 'ثنائيات طبيعية',
        blocks: [
          { t: 'note', tone: 'tip', ar: 'بعض الصفات لا تُقال مع كل اسم؛ فنقول heavy rain وليس strong rain في الغالب، ونقول fresh vegetables. حفظ الثنائيات أنفع من حفظ الكلمة منفردة.', en: 'Some adjectives cannot be used with every noun; we usually say heavy rain, not strong rain, and fresh vegetables. Learning pairs is more useful than learning single words.' },
          { t: 'box', title: 'Pairs from page 12', titleAr: 'ثنائيات الصفحة 12', items: [
            { en: 'cosy room / cosy cottage', ar: 'غرفة أو كوخ دافئ مريح' }, { en: 'cloudy sky', ar: 'سماء غائمة' }, { en: 'thrilling match', ar: 'مباراة مثيرة' },
            { en: 'stunning views', ar: 'إطلالات خلابة' }, { en: 'fresh food / fresh vegetables', ar: 'طعام طازج / خضار طازجة' }, { en: 'crowded city', ar: 'مدينة مزدحمة' },
            { en: 'cosmopolitan city', ar: 'مدينة عالمية متعددة الثقافات' }, { en: 'challenging job', ar: 'وظيفة صعبة محفّزة' }, { en: 'latest fashions', ar: 'أحدث الصيحات' },
            { en: 'mature garden', ar: 'حديقة ناضجة' }, { en: 'spicy food', ar: 'طعام حار' }, { en: 'close relative', ar: 'قريب من الدرجة الأولى' }
          ]}
        ]}
    ]
  },

  /* ============ الكلمات ============ */
  {
    id: 'w-opposites', group: 'words', title: 'Opposites', titleAr: 'الأضداد',
    summaryAr: 'أضداد صفات الشخصية والمظهر والمشاعر، مع القاعدة التي تساعدك على تخمين الضد.', summaryEn: 'Opposites of personality, appearance and feeling adjectives, with a rule to help you guess the opposite.',
    sections: [
      { id: 'personality', no: '1', titleEn: 'Personality adjectives', titleAr: 'صفات الشخصية (تمرين 10)',
        blocks: [
          { t: 'note', tone: 'grammar', ar: 'نصنع الضد غالباً بإضافة بادئة: un- (unreliable, untidy) وim- قبل p (impatient) وin- (insensitive) وdis- (dishonest) وir- (irresponsible). وبعض الأضداد كلمة مختلفة تماماً: lazy / hard-working.', en: 'We often make the opposite by adding a prefix: un- (unreliable, untidy), im- before p (impatient), in- (insensitive), dis- (dishonest) and ir- (irresponsible). Some opposites are completely different words: lazy / hard-working.' },
          { t: 'box', title: 'Pairs', titleAr: 'الأزواج', items: [
            { en: 'reliable — unreliable', ar: 'يُعتمد عليه — لا يُعتمد عليه' }, { en: 'tidy — untidy', ar: 'مرتب — غير مرتب' }, { en: 'patient — impatient', ar: 'صبور — قليل الصبر' },
            { en: 'sensitive — insensitive', ar: 'حسّاس — قليل الإحساس' }, { en: 'optimistic — pessimistic', ar: 'متفائل — متشائم' }, { en: 'lazy — hard-working', ar: 'كسول — مجتهد' },
            { en: 'moody — easy-going', ar: 'متقلب المزاج — سهل المعشر' }, { en: 'generous — mean', ar: 'كريم — بخيل' }, { en: 'shy — outgoing / sociable', ar: 'خجول — اجتماعي' },
            { en: 'cheerful — miserable', ar: 'مبتهج — بائس' }, { en: 'talkative — quiet', ar: 'ثرثار — هادئ' }, { en: 'reserved — open', ar: 'متحفظ — منفتح' },
            { en: 'ambitious — unambitious', ar: 'طموح — غير طموح' }, { en: 'sociable — unsociable', ar: 'اجتماعي — انطوائي' }
          ]}
        ]},
      { id: 'look', no: '2', titleEn: 'Appearance and others', titleAr: 'المظهر وصفات أخرى',
        blocks: [
          { t: 'box', title: 'Pairs', titleAr: 'الأزواج', items: [
            { en: 'well-behaved — badly-behaved', ar: 'مهذب — سيئ التصرف' }, { en: 'good-looking — plain', ar: 'وسيم — عادي الشكل' }, { en: 'old-fashioned — modern', ar: 'قديم الطراز — حديث' },
            { en: 'second-hand — brand-new', ar: 'مستعمل — جديد تماماً' }, { en: 'crowded — empty / quiet', ar: 'مزدحم — فارغ أو هادئ' }, { en: 'cosy — cold / uncomfortable', ar: 'دافئ مريح — بارد أو غير مريح' },
            { en: 'boring — exciting', ar: 'ممل — مثير' }, { en: 'relaxing — stressful', ar: 'مريح — مُجهِد' }, { en: 'tall — short', ar: 'طويل — قصير' }, { en: 'straight — curly', ar: 'مسترسل — مجعّد' }
          ]},
          { t: 'q', kind: 'open', n: 1, en: 'Write the opposite: tidy', ar: 'اكتب الضد.', answer: 'untidy', alt: ['messy'], why: 'tidy ضدها untidy أو messy.', whyEn: 'The opposite of tidy is untidy or messy.' },
          { t: 'q', kind: 'open', n: 2, en: 'Write the opposite: patient', ar: 'اكتب الضد.', answer: 'impatient', why: 'قبل حرف p نستعمل im-.', whyEn: 'Before the letter p we use the prefix im-.' },
          { t: 'q', kind: 'open', n: 3, en: 'Write the opposite: optimistic', ar: 'اكتب الضد.', answer: 'pessimistic', why: 'كلمة مختلفة بدل البادئة.', whyEn: 'This opposite is a different word, not a prefix.' }
        ]}
    ]
  },
  {
    id: 'w-families', group: 'words', title: 'Word families', titleAr: 'عائلات الكلمات',
    summaryAr: 'كل كلمة بأشكالها: فعل، اسم، صفة -ed، صفة -ing، وضدها حين يوجد.', summaryEn: 'Each word with its forms: verb, noun, -ed adjective, -ing adjective, and the opposite where there is one.',
    sections: [
      { id: 'fam', no: '1', titleEn: 'Emotion words', titleAr: 'كلمات المشاعر',
        blocks: [
          { t: 'note', tone: 'tip', ar: 'تعلّم الكلمة مع أسرتها دفعة واحدة؛ فتُدرك أن interest فعل واسم، وأن interested وinteresting صفتان بمعنيين مختلفين.', en: 'Learn a word together with its family: you will see that interest is both a verb and a noun, and that interested and interesting are two adjectives with different meanings.' },
          { t: 'box', title: 'Families', titleAr: 'العائلات', items: [
            { en: 'interest (v/n) → interested, interesting, uninterested', ar: 'يهتم / اهتمام' },
            { en: 'bore (v) → boredom (n) → bored, boring', ar: 'يُضجِر / ملل' },
            { en: 'tire (v) → tiredness (n) → tired, tiring', ar: 'يُتعِب / تعب' },
            { en: 'excite (v) → excitement (n) → excited, exciting', ar: 'يُثير / حماس' },
            { en: 'relax (v) → relaxation (n) → relaxed, relaxing', ar: 'يسترخي / استرخاء' },
            { en: 'shock (v/n) → shocked, shocking', ar: 'يصدم / صدمة' },
            { en: 'disappoint (v) → disappointment (n) → disappointed, disappointing', ar: 'يُحبِط / خيبة أمل' },
            { en: 'astonish (v) → astonishment (n) → astonished, astonishing', ar: 'يُدهش / دهشة' },
            { en: 'exhaust (v) → exhaustion (n) → exhausted, exhausting', ar: 'يُنهك / إنهاك' },
            { en: 'charm (v/n) → charmed, charming', ar: 'يسحر / سحر' },
            { en: 'thrill (v/n) → thrilled, thrilling', ar: 'يُشوّق / إثارة' }
          ]}
        ]},
      { id: 'pers', no: '2', titleEn: 'Personality words', titleAr: 'كلمات الشخصية',
        blocks: [
          { t: 'box', title: 'Adjective → noun', titleAr: 'من الصفة إلى الاسم', items: [
            { en: 'generous → generosity', ar: 'كرم' }, { en: 'sensitive → sensitivity', ar: 'حساسية' }, { en: 'reliable → reliability', ar: 'موثوقية' },
            { en: 'optimistic → optimism', ar: 'تفاؤل' }, { en: 'shy → shyness', ar: 'خجل' }, { en: 'lazy → laziness', ar: 'كسل' }, { en: 'ambitious → ambition', ar: 'طموح' }
          ]},
          { t: 'q', kind: 'fill', n: 1, en: 'She is a very ___ person. (generosity)', prompt: 'She is a very ___ person. (generosity)', ar: 'اكتب الصفة من الاسم.', answer: ['generous'], why: 'generosity اسم، والصفة generous.', whyEn: 'The noun is generosity, and the adjective is generous.' }
        ]}
    ]
  }
];

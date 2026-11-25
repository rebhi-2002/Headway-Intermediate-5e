(window.PAGES = window.PAGES || []).push({
  id: 'p11', num: 11, unit: 'u1', kind: 'Grammar',
  title: 'Information questions (continued)',
  titleAr: 'أسئلة المعلومات: وصف الأماكن والأشياء + Grammar Spot',
  summaryAr: 'نختار الإجابة الصحيحة عن شقة إيريكا، ونكمل أسئلة حاسوبها، ثم نراجع قاعدة What / Which / Whose / How، ونكتب سؤالاً لعشر حالات.', summaryEn: "We choose the correct answers about Erika's apartment, complete the questions about her computer, then review the What / Which / Whose / How rule and write a question for ten situations.",
  sections: [
    {
      id: 'ex3', no: '3', tag: 'Describing places', titleEn: "Read the questions about Erika's home", titleAr: 'التمرين 3: أسئلة عن بيت إيريكا',
      instrEn: "Read the questions about Erika's home. Underline the correct answer.",
      instrAr: 'اقرأ الأسئلة عن بيت إيريكا. لكل سؤال إجابتان، ضع خطاً تحت الإجابة الصحيحة التي تجيب عن السؤال فعلاً. المثال محلول: السؤال 1 جوابه الثاني.',
      blocks: [
        { t: 'photo', src: 'media/images/unit-1/p11-places.jpg', title: 'Describing places', ar: 'لوحة خضراء بعنوان Describing places فيها سبعة أسئلة وجوابان محتملان لكل سؤال (الجواب المُسطَّر هو الصحيح في السؤال 1). وإلى يمينها صورة مجمع سكني حديث: عمارات طويلة بلون كريمي بشرفات صغيرة تحيط بها مروج خضراء وأشجار، وهي المبنى الذي تسكن فيه إيريكا.', descEn: "A green panel titled Describing places, with seven questions and two possible answers for each (the underlined answer is the correct one in question 1). To its right is a photo of a modern housing complex: tall cream-coloured buildings with small balconies surrounded by green lawns and trees. This is the building where Erika lives." },
        { t: 'q', kind: 'choice', n: 1, example: true,
          en: "What's your apartment like?", ar: 'كيف هي شقتك؟ (وصف)',
          options: ['I like it a lot.', "It's modern and very comfortable."], correct: 1,
          why: 'مثال الكتاب. What … like تطلب وصفاً (modern, comfortable) وليس رأيك. أما I like it a lot فجواب عن سؤال مختلف: Do you like it؟', whyEn: "Book example. What ... like asks for a description (modern, comfortable), not your opinion. I like it a lot answers a different question: Do you like it?" },
        { t: 'q', kind: 'choice', n: 2,
          en: 'How big is it?', ar: 'ما حجمها؟',
          options: ["Yes, it's pretty big.", 'About 90 square metres.'], correct: 1,
          why: 'How big تطلب حجماً. الخيار الأول يبدأ بـ Yes ولا يصلح جواباً عن سؤال How. الثاني يعطي مساحة محددة.', whyEn: "How big asks for a size. The first option starts with Yes, so it cannot answer a How question. The second gives a specific area." },
        { t: 'q', kind: 'choice', n: 3,
          en: 'How many bedrooms are there?', ar: 'كم غرفة نوم فيها؟',
          options: ['Two doubles and a single.', 'One has an ensuite shower.'], correct: 0,
          why: 'How many تطلب عدداً: غرفتان مزدوجتان وواحدة مفردة. الخيار الثاني معلومة عن غرفة واحدة (دش داخلي) ولا تذكر العدد.', whyEn: "How many asks for a number: two double bedrooms and one single. The second option is information about one room (an ensuite shower) and does not give the number." },
        { t: 'q', kind: 'choice', n: 4,
          en: 'What size is the kitchen?', ar: 'ما حجم المطبخ؟',
          options: ["It's a kitchen-diner.", 'Four metres by two.'], correct: 1,
          why: 'What size تطلب القياس: أربعة أمتار في مترين. أما kitchen-diner فتصف نوع المطبخ (مطبخ وفيه ركن طعام).', whyEn: "What size asks for measurements: four metres by two. Kitchen-diner describes the type of kitchen (a kitchen with a dining area)." },
        { t: 'q', kind: 'choice', n: 5,
          en: 'Which floor is it on?', ar: 'في أي طابق هي؟',
          options: ['Wooden.', 'The fourth floor.'], correct: 1,
          why: 'Which floor … on تسأل عن الطابق (الدور)، فالجواب: الطابق الرابع. أما Wooden فتصف مادة الأرضية. الكلمة floor لها معنيان: طابق وأرضية.', whyEn: "Which floor ... on asks about the level in the building, so the answer is the fourth floor. Wooden describes the material of the floor. The word floor has two meanings: storey and ground surface." },
        { t: 'q', kind: 'choice', n: 6,
          en: 'Which part of town is it in?', ar: 'في أي جزء من المدينة هي؟',
          options: ["It's north of the river.", "It's near a bus stop."], correct: 0,
          why: 'Which part of town تسأل عن الجهة: شمال النهر. أما near a bus stop فموقع قريب من شيء بعينه وليس جزءاً من المدينة.', whyEn: "Which part of town asks about the area: north of the river. Near a bus stop gives a location near one particular thing, not a part of town." },
        { t: 'q', kind: 'choice', n: 7,
          en: 'How far is it to your work?', ar: 'كم تبعد عن عملك؟',
          options: ['Just a five-minute cycle ride.', 'I always go by bus.'], correct: 0,
          why: 'How far تسأل عن المسافة (أو زمنها): خمس دقائق بالدراجة. الثاني يذكر وسيلة المواصلات.', whyEn: "How far asks about distance (or the time it takes): a five-minute cycle ride. The second option mentions the means of transport." },
        { t: 'audio', slot: '1.3', en: 'Listen and check. Practise the questions and answers with a partner.', ar: 'تسجيل 1.3: استمع وتحقق، ثم تدرّب على الأسئلة والإجابات مع زميلك.' }
      ]
    },
    {
      id: 'ex4', no: '4', titleEn: 'Ask and answer questions about where you live', titleAr: 'التمرين 4: تحدّث عن مكان سكنك',
      instrEn: 'Ask and answer questions about where you live. You can use the ideas in the box to help.',
      instrAr: 'اسأل وأجب عن المكان الذي تسكنه مستعيناً بالأفكار في الصندوق.',
      blocks: [
        { t: 'bubbles', lines: [
          { who: 'A', en: "What's your flat/house like?", ar: 'كيف هي شقتك أو بيتك؟' },
          { who: 'B', en: "It's quite small, but it's got …", ar: 'صغيرة إلى حد ما، لكن فيها …' }
        ]},
        { t: 'box', title: 'Ideas', titleAr: 'أفكار للمساعدة', items: [
          { en: 'in a modern block', ar: 'في مبنى سكني حديث' },
          { en: 'a great view of …', ar: 'إطلالة رائعة على …' },
          { en: 'enormous', ar: 'ضخم جداً' },
          { en: 'noisy', ar: 'صاخب' },
          { en: 'a balcony', ar: 'شرفة' },
          { en: 'ground floor', ar: 'الطابق الأرضي' },
          { en: 'in a quiet, tree-lined road', ar: 'في شارع هادئ تصطف الأشجار على جانبيه' },
          { en: 'a tiny garden', ar: 'حديقة صغيرة جداً' },
          { en: 'needs decorating', ar: 'تحتاج إلى دهان وتجديد' }
        ]},
        { t: 'model',
          en: "What's your flat like? It's quite small, but it's got a balcony and a great view of the park. It's in a modern block on a quiet, tree-lined road.",
          ar: 'نموذج للإجابة. لاحظ استعمال but للتناقض (صغيرة، لكن فيها شرفة) و it’s got = it has got للامتلاك في الإنجليزية البريطانية.', arEn: "A model answer. Notice the use of but for contrast (small, but it has a balcony) and it's got = it has got for possession in British English." }
      ]
    },
    {
      id: 'ex5', no: '5', tag: 'Describing things', titleEn: "Complete the questions about Erika's new MacBook", titleAr: 'التمرين 5: أسئلة عن حاسوب إيريكا الجديد',
      instrEn: "Complete the questions about Erika's new MacBook with a word from below.",
      instrAr: 'أكمل الأسئلة عن حاسوب إيريكا (MacBook) بكلمة من الإطار. الكلمات سبع، والكلمة make مستخدمة في المثال (مشطوبة).',
      blocks: [
        { t: 'photo', title: 'The MacBook', ar: 'صورة جهاز MacBook فضي مفتوح بزاوية، عليه شعار التفاحة، ويظهر أسفل لوحة Describing things. وتظهر خلفه صورة باهتة لجسر أوريسند. اكتب عن جهازك بنفس الأسئلة (التمرين 6).', descEn: "A photo of a silver MacBook open at an angle, with the apple logo on it, shown below the Describing things panel. Behind it is a faint picture of the Öresund Bridge. Write about your own device using the same questions (Exercise 6)." },
        { t: 'box', title: 'Word bank', titleAr: 'بنك الكلمات', items: [
          { en: 'long', ar: '' }, { en: 'make (example)', ar: 'مستخدمة في المثال' }, { en: 'for', ar: '' }, { en: 'much', ar: '' },
          { en: 'How', ar: '' }, { en: 'weigh', ar: '' }, { en: 'Whose', ar: '' }, { en: 'size', ar: '' }
        ], compact: true },
        { t: 'q', kind: 'fill', n: 1, example: true,
          en: 'What ___ is it?  It’s a MacBook.', prompt: 'What ___ is it?', ar: 'ما ماركته (نوعه)؟ هو MacBook.',
          answer: ['make'], why: 'مثال الكتاب. What make تسأل عن الماركة أو الشركة المصنّعة.', whyEn: "Book example. What make asks about the brand or manufacturer." },
        { t: 'q', kind: 'fill', n: 2,
          en: "What's this button ___?  It turns it on.", prompt: "What's this button ___?", ar: 'ما فائدة هذا الزر؟ إنه يشغّله.',
          answer: ['for'], why: "What’s this button for? عبارة ثابتة تسأل عن وظيفة الشيء.", whyEn: "What's this button for? is a fixed expression that asks about the function of something." },
        { t: 'q', kind: 'fill', n: 3,
          en: 'How ___ is the battery life?  About nine hours.', prompt: 'How ___ is the battery life?', ar: 'كم تدوم البطارية؟ حوالي تسع ساعات.',
          answer: ['long'], why: 'How long تسأل عن مدة زمنية: nine hours.', whyEn: "How long asks about a length of time: nine hours." },
        { t: 'q', kind: 'fill', n: 4,
          en: 'How much does it ___?  It’s really light, 0.9 kg.', prompt: 'How much does it ___?', ar: 'كم يزن؟ خفيف جداً: 0.9 كغ.',
          answer: ['weigh'], why: 'How much does it weigh? سؤال الوزن. بعد does يأتي الفعل بصيغته الأساسية weigh.', whyEn: "How much does it weigh? is the question about weight. After does, the verb stays in its base form: weigh." },
        { t: 'q', kind: 'fill', n: 5,
          en: 'What ___ is it?  It’s got a 12-inch screen and it’s very slim.', prompt: 'What ___ is it?', ar: 'ما حجمه؟ شاشته 12 بوصة ونحيف جداً.',
          answer: ['size'], why: 'What size تسأل عن الحجم أو القياس. الجواب يذكر مقاس الشاشة.', whyEn: "What size asks about size or dimensions. The answer gives the screen size." },
        { t: 'q', kind: 'fill', n: 6,
          en: 'How ___ memory has it got?  16 gigabytes.', prompt: 'How ___ memory has it got?', ar: 'كم ذاكرته؟ 16 غيغابايت.',
          answer: ['much'], why: 'memory اسم غير معدود، لذلك نقول How much لا How many.', whyEn: "Memory is an uncountable noun, so we say How much, not How many." },
        { t: 'q', kind: 'fill', n: 7,
          en: '___ fast is it?  It’s much faster than my PC.', prompt: '___ fast is it?', ar: 'ما مدى سرعته؟ أسرع بكثير من حاسوبي.',
          answer: ['How'], why: 'How + صفة (fast) لنسأل عن الدرجة. وهذه نقطة Grammar Spot رقم 2.', whyEn: "How + adjective (fast) asks about the degree of something. This is Grammar Spot point 2." },
        { t: 'q', kind: 'fill', n: 8,
          en: '___ is it?  It’s mine.', prompt: '___ is it?', ar: 'لمن هو؟ إنه لي.',
          answer: ['Whose'], why: 'Whose تسأل عن الملكية، وجوابها يملك الضمير mine.', whyEn: "Whose asks about ownership, and the answer contains the possessive pronoun mine." },
        { t: 'audio', slot: '1.4', en: 'Listen and check. Practise the questions and answers.', ar: 'تسجيل 1.4: استمع وتحقق من الإجابات ثم تدرّب على الأسئلة.' }
      ]
    },
    {
      id: 'ex6', no: '6', titleEn: 'Ask about your laptop/phone/tablet', titleAr: 'التمرين 6: اسأل عن جهازك',
      instrEn: 'Ask and answer similar questions about your laptop/phone/tablet.',
      instrAr: 'اسأل وأجب بأسئلة مشابهة عن حاسوبك أو هاتفك أو جهازك اللوحي.',
      blocks: [
        { t: 'bubbles', lines: [
          { who: 'A', en: 'What make is it?', ar: 'ما ماركته؟' },
          { who: 'B', en: "It's a Samsung.", ar: 'إنه سامسونغ.' }
        ]},
        { t: 'model',
          en: "What make is it? It's a Samsung.\nWhat size is it? It's got a 6-inch screen.\nHow much memory has it got? 128 gigabytes.\nHow long is the battery life? About a day.\nHow much does it weigh? About 200 grams.\nHow fast is it? Very fast.\nWhat's this button for? It takes screenshots.\nWhose is it? It's mine.",
          ar: 'نموذج لأسئلة وإجابات عن هاتف. غيّرها حسب جهازك.', arEn: "A model of questions and answers about a phone. Change them to suit your own device." }
      ]
    },
    {
      id: 'grammar', no: '', tag: 'Grammar Spot', titleEn: 'Grammar Spot', titleAr: 'ملخص القاعدة (Grammar Spot)',
      instrAr: 'ثلاث نقاط عن أسئلة المعلومات. ابحث عن أمثلة إضافية في الصفحات كما يطلب الكتاب.', instrEn: "Three points about information questions. Look for more examples on the pages, as the book asks.",
      blocks: [
        { t: 'note', tone: 'grammar', ar: '1) What و which و whose يمكن أن تأتي قبل اسم: What colour…? Which floor…? Whose bag is this؟ أمثلة من الصفحات: What size is the kitchen؟ Which part of town؟ What kind of clothes؟ What colour eyes has she got؟', en: "1) What, which and whose can come before a noun: What colour...? Which floor...? Whose bag is this? Examples from the pages: What size is the kitchen? Which part of town? What kind of clothes? What colour eyes has she got?" },
        { t: 'note', tone: 'grammar', ar: '2) How يمكن أن تأتي قبل صفة أو ظرف: How tall / How far…؟ أمثلة من الصفحات: How old is she؟ How big is it؟ How far is it to your work؟ How long is the battery life؟ How fast is it؟', en: "2) How can come before an adjective or adverb: How tall / How far...? Examples from the pages: How old is she? How big is it? How far is it to your work? How long is the battery life? How fast is it?" },
        { t: 'q', kind: 'choice', n: 3, en: "3) Match a question and an answer:  What's he like?", ar: 'وصّل السؤال بجوابه: What’s he like؟',
          options: ['Very well, thanks.', "Very nice. He's good to talk to."], correct: 1,
          why: "What’s he like؟ تسأل عن الطباع فجوابها: لطيف جداً، من الممتع الحديث معه.", whyEn: "What's he like? asks about character, so the answer is: very nice, he's good to talk to." },
        { t: 'q', kind: 'choice', n: 4, en: '3) Match a question and an answer:  How is he?', ar: 'وصّل السؤال بجوابه: How is he؟',
          options: ['Very well, thanks.', "Very nice. He's good to talk to."], correct: 0,
          why: 'How is he؟ تسأل عن حاله الآن فجوابها: بخير، شكراً.', whyEn: "How is he? asks how he is now, so the answer is: very well, thanks." },
        { t: 'note', tone: 'tip', ar: 'مرجع القواعد: Grammar reference 1.1–1.2 صفحة 141 من الكتاب. وفي أسفل الصفحة: Go online for more grammar practice (تدريب إضافي على القواعد عبر الإنترنت).', en: "Grammar reference: Grammar reference 1.1-1.2, page 141 of the book. At the bottom of the page: Go online for more grammar practice." }
      ]
    },
    {
      id: 'practice', no: '', tag: 'Practice', titleEn: 'Question words', titleAr: 'تدريب: كلمات السؤال',
      instrEn: 'Write one question for these situations.',
      instrAr: 'اكتب سؤالاً واحداً لكل موقف من المواقف التالية. انظر إلى الخيارات المذكورة لتعرف أي كلمة سؤال تناسبها. المثال: How often do you go to the gym؟',
      blocks: [
        { t: 'q', kind: 'open', n: 1, example: true,
          en: 'Do you go to the gym every day? Every week? Once a fortnight?', ar: 'هل تذهب إلى النادي يومياً؟ كل أسبوع؟ مرة كل أسبوعين؟',
          answer: 'How often do you go to the gym?',
          why: 'الخيارات كلها تكرار، لذلك نسأل عن التكرار بـ How often. (المثال من الكتاب)', whyEn: "All the options are about frequency, so we ask about frequency with How often. (Book example)" },
        { t: 'q', kind: 'open', n: 2,
          en: 'Do you take size 40 shoes? Size 42? Size 44?', ar: 'هل مقاس حذائك 40؟ 42؟ 44؟',
          answer: 'What size shoes do you take?',
          alt: ['What size shoes do you take?', 'What size are your shoes?', 'What shoe size do you take?'],
          why: 'الخيارات مقاسات، فنسأل What size. ويمكن أيضاً What shoe size do you take؟', whyEn: "The options are sizes, so we ask What size. What shoe size do you take? is also possible." },
        { t: 'q', kind: 'open', n: 3,
          en: 'Is your house ten metres from the beach? A hundred metres? One kilometre?', ar: 'هل بيتك على بعد عشرة أمتار من الشاطئ؟ مئة متر؟ كيلومتر؟',
          answer: 'How far is your house from the beach?',
          alt: ['How far is your house from the beach?', 'How far is the beach from your house?'],
          why: 'الخيارات مسافات، فنسأل How far.', whyEn: "The options are distances, so we ask How far." },
        { t: 'q', kind: 'open', n: 4,
          en: 'Is your car an Audi? A BMW? A Toyota?', ar: 'هل سيارتك أودي؟ بي إم دبليو؟ تويوتا؟',
          answer: 'What make is your car?',
          alt: ['What make is your car?', 'What make of car have you got?', 'What make of car do you have?', 'What make is your car'],
          why: 'الخيارات ماركات (Audi, BMW, Toyota)، فنسأل What make (ما الماركة). وهي نفس صيغة السؤال في تمرين الحاسوب.', whyEn: "The options are brands (Audi, BMW, Toyota), so we ask What make. It is the same question form as in the computer exercise." },
        { t: 'q', kind: 'open', n: 5,
          en: 'Do you like pasta? Hamburgers? Spicy food?', ar: 'هل تحب المعكرونة؟ الهمبرغر؟ الطعام الحار؟',
          answer: 'What food do you like?',
          alt: ['What food do you like?', 'What kind of food do you like?', 'What sort of food do you like?', 'What do you like to eat?'],
          why: 'الخيارات أنواع طعام، فنسأل What kind of food (أي نوع من الطعام).', whyEn: "The options are types of food, so we ask What kind of food." },
        { t: 'q', kind: 'open', n: 6,
          en: 'For your sandwich, would you like white? Brown? Wholemeal? A roll?', ar: 'لشطيرتك، هل تريد خبزاً أبيض؟ أسمر؟ كامل الحبة؟ أو رغيفاً صغيراً؟',
          answer: 'What kind of bread would you like for your sandwich?',
          alt: ['What kind of bread would you like for your sandwich?', 'Which bread would you like for your sandwich?', 'What bread would you like for your sandwich?', 'What kind of bread would you like?'],
          why: 'الخيارات محدودة ومعروفة، فيصلح Which أيضاً. لكن What kind of bread أشمل.', whyEn: "The choices are limited and known, so Which also works. But What kind of bread is more general." },
        { t: 'q', kind: 'open', n: 7,
          en: 'Do two of you want coffee? Four of you? All of you?', ar: 'هل اثنان منكم يريدان قهوة؟ أربعة؟ جميعكم؟',
          answer: 'How many of you want coffee?',
          alt: ['How many of you want coffee?', 'How many of you would like coffee?'],
          why: 'الخيارات أعداد، فنسأل How many. وبعد How many of you يأتي الفعل want بلا s لأن you جمع.', whyEn: "The options are numbers, so we ask How many. After How many of you, the verb want has no -s because you is plural." },
        { t: 'q', kind: 'open', n: 8,
          en: 'Would you prefer a vanilla ice cream? Strawberry? Chocolate?', ar: 'هل تفضّل آيس كريم فانيليا؟ فراولة؟ شوكولاتة؟',
          answer: 'Which ice cream would you prefer?',
          alt: ['Which ice cream would you prefer?', 'Which flavour of ice cream would you prefer?', 'What flavour of ice cream would you prefer?', 'What flavour ice cream would you prefer?', 'Which flavour would you prefer?'],
          why: 'نختار من بين خيارات محددة، فـ Which مناسبة. وWhat flavour ممكنة أيضاً.', whyEn: "We are choosing from specific options, so Which fits. What flavour is also possible." },
        { t: 'q', kind: 'open', n: 9,
          en: "Is that Sam's bag? Suzie's? Your own?", ar: 'هل هذه حقيبة سام؟ سوزي؟ أم حقيبتك؟',
          answer: 'Whose bag is that?',
          alt: ['Whose bag is that?', 'Whose bag is this?', 'Whose is that bag?'],
          why: 'الخيارات أسماء أشخاص يملكون الحقيبة، فنسأل عن الملكية بـ Whose.', whyEn: "The options are names of people who might own the bag, so we ask about ownership with Whose." },
        { t: 'q', kind: 'open', n: 10,
          en: 'Do you go left or right for the city centre? Or straight on?', ar: 'هل تذهب يساراً أم يميناً إلى وسط المدينة؟ أم تستمر للأمام؟',
          answer: 'Which way do you go for the city centre?',
          alt: ['Which way do you go for the city centre?', 'Which way is the city centre?', 'Which way do I go for the city centre?', 'Which way is it to the city centre?'],
          why: 'الخيارات اتجاهات محددة، فنسأل Which way (أي طريق).', whyEn: "The options are specific directions, so we ask Which way." },
        { t: 'audio', slot: '1.5', en: 'Listen and check. Practise the questions with a partner and give an answer.', ar: 'تسجيل 1.5: استمع وتحقق، ثم تدرّب على الأسئلة مع زميلك وأجب عنها.' }
      ]
    }
    ,{
      id: 'extra', no: '', tag: 'Extra practice', titleEn: 'Extra practice: question words', titleAr: 'تدريب إضافي: كلمات السؤال (من إعدادنا)',
      instrEn: 'Complete each question with the correct question word.', instrAr: 'أكمل كل سؤال بكلمة السؤال الصحيحة.',
      blocks: [
        { t: 'note', tone: 'tip', en: 'Extra practice written by us (not from the book). Type one word or phrase.', ar: 'تدريب إضافي من إعدادنا (ليس من الكتاب). اكتب كلمة السؤال المناسبة.' },
        { t: 'q', kind: 'fill', n: 1, en: "___ is your teacher like?", prompt: "___ is your teacher like?", ar: "كيف هو معلمك؟ (وصف شخصيته)", answer: ["What"], why: "What ... like تسأل عن الوصف العام للشخص.", whyEn: "What ... like asks for a general description of a person." },
        { t: 'q', kind: 'fill', n: 2, en: "___ coat is this, yours or mine?", prompt: "___ coat is this, yours or mine?", ar: "معطف من هذا، معطفك أم معطفي؟", answer: ["Whose"], why: "السؤال عن المالك، فنستعمل Whose.", whyEn: "The question is about who owns it, so we use Whose." },
        { t: 'q', kind: 'fill', n: 3, en: "___ many brothers have you got?", prompt: "___ many brothers have you got?", ar: "كم أخاً لديك؟", answer: ["How"], why: "للعدد نستعمل How many.", whyEn: "For a number we use How many." },
        { t: 'q', kind: 'fill', n: 4, en: "___ of music do you like?", prompt: "___ of music do you like?", ar: "أي نوع من الموسيقى تحب؟", answer: ["What kind", "What type", "What sort"], why: "السؤال عن النوع: What kind of ... ?", whyEn: "We ask about the type: What kind of ... ?" },
        { t: 'q', kind: 'fill', n: 5, en: "___ is the airport from here?", prompt: "___ is the airport from here?", ar: "ما بعد المطار عن هنا؟", answer: ["How far"], why: "للمسافة نستعمل How far.", whyEn: "For distance we use How far." },
        { t: 'q', kind: 'fill', n: 6, en: "___ do you look like, your mum or your dad?", prompt: "___ do you look like, your mum or your dad?", ar: "بمن تشبه، بأمك أم بأبيك؟", answer: ["Who"], why: "الجواب شخص، فنسأل Who do you look like?", whyEn: "The answer is a person, so we ask Who do you look like?" },
        { t: 'q', kind: 'fill', n: 7, en: "___ colour is your bag?", prompt: "___ colour is your bag?", ar: "ما لون حقيبتك؟", answer: ["What"], why: "What + اسم (What colour) لاختيار مفتوح.", whyEn: "What + noun (What colour) for an open choice." },
        { t: 'q', kind: 'fill', n: 8, en: "___ is your grandmother today?", prompt: "___ is your grandmother today?", ar: "كيف حال جدتك اليوم؟ (صحتها الآن)", answer: ["How"], why: "How is ... ? تسأل عن الحالة الآن (الصحة والمزاج).", whyEn: "How is ... ? asks about the present condition (health, mood)." },
        { t: 'note', tone: 'tip', en: 'Check yourself: complete with What, How, Which or Whose.', ar: 'اختبر نفسك: أكمل بـ What أو How أو Which أو Whose.' },
        { t: 'q', kind: 'fill', n: 9, en: "___ is your new boss like?", prompt: "___ is your new boss like?", ar: "كيف هو مديرك الجديد؟ (شخصيته)", answer: ["What"], why: "What ... like = وصف عام.", whyEn: "What ... like = general description." },
        { t: 'q', kind: 'fill', n: 10, en: "___ is your mother today?", prompt: "___ is your mother today?", ar: "كيف حال أمك اليوم؟", answer: ["How"], why: "الحالة الصحية الآن: How is ... ?", whyEn: "Health right now: How is ... ?" },
        { t: 'q', kind: 'fill', n: 11, en: "___ way is the station?", prompt: "___ way is the station?", ar: "أي طريق إلى المحطة؟", answer: ["Which"], why: "خيارات محددة (طرق معروفة): Which way.", whyEn: "A limited set of known ways: Which way." },
        { t: 'q', kind: 'fill', n: 12, en: "___ often do you call her?", prompt: "___ often do you call her?", ar: "كم مرة تتصل بها؟", answer: ["How"], why: "التكرار: How often.", whyEn: "Frequency: How often." },
        { t: 'q', kind: 'fill', n: 13, en: "___ is this scarf? (it belongs to someone)", prompt: "___ is this scarf? (it belongs to someone)", ar: "لمن هذا الوشاح؟", answer: ["Whose"], why: "الملكية: Whose.", whyEn: "Ownership: Whose." }
      ]
    }

  ]
});

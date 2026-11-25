/* ============================================================
   angulo.js — The Angulo Brothers (teacher's slide deck, 13 slides)
   ============================================================ */
(function () {
  var IMG = 'media/images/slides/angulo/s-';
  function src(n) { return IMG + (n < 10 ? '0' : '') + n + '.jpg'; }

  /* vocabulary-table helpers: row = [term, meaning, plural, antonym, example, arWord, arExample] */
  function tableEn(rows) {
    return rows.map(function (r) {
      return r[0] + ' | ' + r[1] + ' | Plural: ' + r[2] + ' | Antonym: ' + r[3] + ' | "' + r[4] + '"';
    }).join('\n');
  }
  function tableAr(rows) {
    return rows.map(function (r) {
      return r[0] + ' = ' + r[5] + (r[3] !== 'None' ? ' (الضد: ' + r[3] + ')' : '') + ' — ' + r[6];
    }).join('\n');
  }
  function vbox(rows, title, titleAr) {
    return {
      t: 'box', title: title, titleAr: titleAr, items: rows.map(function (r) {
        return {
          en: r[0],
          arEn: r[1] + ' (plural: ' + r[2] + '; opposite: ' + r[3] + ') — e.g. ' + r[4],
          ar: r[5] + (r[3] !== 'None' ? ' — ضدها: ' + r[3] : '') + ' — ' + r[6]
        };
      })
    };
  }
  function tenseEn(rows) {
    return rows.map(function (r) { return r[0] + ' | ' + r[1] + ' | ' + r[2]; }).join('\n');
  }
  function tenseAr(rows) {
    return rows.map(function (r) { return r[1] + ' = ' + r[3]; }).join('\n');
  }

  var R7 = [
    ['Apartment', 'A set of rooms for living in (draw small vintage keys)', 'Apartments', 'None', 'They lived in a small apartment in the city.', 'شقة', 'عاشوا في شقة صغيرة في المدينة.'],
    ['Brother', 'A boy or man with the same parents', 'Brothers', 'Sister', 'Mukunda has five brothers.', 'أخ', 'لدى موكوندا خمسة إخوة.'],
    ['Sister', 'A girl or woman with the same parents', 'Sisters', 'Brother', 'They have one sister in their family.', 'أخت', 'لديهم أخت واحدة في عائلتهم.'],
    ['Father', 'A male parent', 'Fathers', 'Mother', 'Their father kept the door locked.', 'أب', 'أبقى أبوهم الباب مقفلاً.'],
    ['Mother', 'A female parent', 'Mothers', 'Father', 'Their mother helped teach them at home.', 'أم', 'ساعدت أمهم في تعليمهم في البيت.'],
    ['Manhattan', 'A busy area in New York City', 'None', 'None', 'Manhattan is a very famous place.', 'مانهاتن', 'مانهاتن مكان مشهور جداً.'],
    ['Window', 'A glass opening in a wall to see outside', 'Windows', 'None', 'They looked out the window every day.', 'نافذة', 'كانوا ينظرون من النافذة كل يوم.'],
    ['Door', 'The entrance to a room or building', 'Doors', 'None', 'The door was always closed.', 'باب', 'كان الباب مغلقاً دائماً.'],
    ['Key', 'A metal tool used to open a lock', 'Keys', 'None', 'He used a key to open the lock.', 'مفتاح', 'استخدم مفتاحاً ليفتح القفل.'],
    ['Street', 'A public road in a city or town', 'Streets', 'None', 'The street was full of fast cars.', 'شارع', 'كان الشارع مليئاً بالسيارات السريعة.'],
    ['World', 'The earth and all the people on it', 'Worlds', 'None', 'They wanted to see the outside world.', 'عالم', 'أرادوا أن يروا العالم الخارجي.'],
    ['Society', 'People living together in a community', 'Societies', 'None', 'They had to learn how to live in society.', 'مجتمع', 'كان عليهم أن يتعلموا كيف يعيشون في المجتمع.'],
    ['Rule', 'An instruction that tells you what you must do', 'Rules', 'None', 'They had to follow strict rules.', 'قاعدة / قانون', 'كان عليهم اتباع قواعد صارمة.'],
    ['Character', 'A person in a story or film', 'Characters', 'None', 'He dressed up as his favorite character.', 'شخصية (في قصة أو فيلم)', 'تنكّر بزي شخصيته المفضلة.']
  ];
  var R8 = [
    ['Film', 'A movie', 'Films', 'None', 'They watched a new film every night.', 'فيلم', 'شاهدوا فيلماً جديداً كل ليلة.'],
    ['Movie', 'A story shown in moving pictures', 'Movies', 'None', 'Making movies was their favorite hobby.', 'فيلم (سينمائي)', 'كان صنع الأفلام هوايتهم المفضلة.'],
    ['Director', 'A person who tells actors what to do', 'Directors', 'None', 'Crystal is a famous director.', 'مخرج / مخرجة', 'كريستال مخرجة مشهورة.'],
    ['Documentary', 'A film about real people and events', 'Documentaries', 'Fiction', 'The Wolfpack is an interesting documentary.', 'فيلم وثائقي', 'فيلم The Wolfpack فيلم وثائقي مثير للاهتمام.'],
    ['Story', 'A description of connected events', 'Stories', 'None', 'Every person has a unique story.', 'قصة', 'لكل إنسان قصة فريدة.'],
    ['Mask', 'A covering for the face', 'Masks', 'None', 'He wore a mask to hide his face.', 'قناع', 'ارتدى قناعاً ليخفي وجهه.'],
    ['Costume', 'Clothes worn to look like someone else', 'Costumes', 'None', 'They made costumes from paper and tape.', 'زي تنكري', 'صنعوا أزياء من الورق والشريط اللاصق.'],
    ['Prop', 'An object used by actors in a film', 'Props', 'None', 'The toy gun was a prop for the movie.', 'أداة تمثيلية (غرض يستخدمه الممثلون)', 'كان المسدس اللعبة أداة تمثيلية للفيلم.'],
    ['Camera', 'A machine used to take photos or film', 'Cameras', 'None', 'She used a camera to record them.', 'كاميرا', 'استخدمت كاميرا لتصوّرهم.'],
    ['Imagination', 'The ability to think of new ideas or pictures in your mind', 'Imaginations', 'Reality', 'Children have great imagination.', 'خيال', 'الأطفال لديهم خيال واسع.'],
    ['Reality', 'The true situation that exists', 'Realities', 'Fantasy', 'They had to face reality outside.', 'واقع', 'كان عليهم أن يواجهوا الواقع في الخارج.'],
    ['Art', 'Things created to be beautiful or express ideas', 'Arts', 'None', 'Making costumes is a form of art.', 'فن', 'صنع الأزياء شكل من أشكال الفن.'],
    ['Halloween', 'A holiday where people wear scary costumes', 'None', 'None', 'He bought the mask for Halloween.', 'الهالوين (عيد يرتدي فيه الناس أزياء مخيفة)', 'اشترى القناع للهالوين.'],
    ['Hobby', 'An activity you enjoy in your free time', 'Hobbies', 'Work', 'Watching TV was their only hobby.', 'هواية', 'كانت مشاهدة التلفاز هوايتهم الوحيدة.']
  ];
  var R9 = [
    ['Reclusive', 'Avoiding other people; living alone', 'None', 'Sociable', 'The family lived a very reclusive life.', 'منعزل', 'عاشت العائلة حياة منعزلة جداً.'],
    ['Tyrannical', 'Using power over people in a cruel way', 'None', 'Kind', 'Their father was tyrannical and strict.', 'مستبد', 'كان أبوهم مستبداً وصارماً.'],
    ['Overcrowded', 'Containing too many people', 'None', 'Empty', 'The small apartment was overcrowded.', 'مزدحم أكثر من اللازم', 'كانت الشقة الصغيرة مكتظة.'],
    ['Eccentric', 'Strange or unusual', 'None', 'Normal', 'Wearing a mask outside is eccentric.', 'غريب الأطوار', 'ارتداء قناع في الخارج تصرف غريب الأطوار.'],
    ['Strange', 'Not familiar; difficult to understand', 'None', 'Normal', 'The outside world seemed strange to them.', 'غريب', 'بدا العالم الخارجي غريباً بالنسبة لهم.'],
    ['Brave', 'Ready to face danger or pain', 'None', 'Scared', 'Mukunda was brave to leave the house.', 'شجاع', 'كان موكوندا شجاعاً حين غادر البيت.'],
    ['Scared', 'Feeling fear', 'None', 'Brave', 'He was scared of the busy streets.', 'خائف', 'كان خائفاً من الشوارع المزدحمة.'],
    ['Curious', 'Wanting to know or learn something', 'None', 'Uninterested', 'They were curious about the city.', 'فضولي', 'كانوا فضوليين تجاه المدينة.'],
    ['Real', 'Actually existing; true', 'None', 'Fake', 'They finally saw the real world.', 'حقيقي', 'رأوا العالم الحقيقي أخيراً.'],
    ['Fake', 'Not genuine; artificial', 'None', 'Real', 'They made fake swords from paper.', 'مزيّف / مصطنع', 'صنعوا سيوفاً مزيفة من الورق.'],
    ['Isolated', 'Far away from other places or people', 'None', 'Connected', 'They felt isolated in their home.', 'معزول', 'شعروا بالعزلة في بيتهم.'],
    ['Lonely', 'Sad because you have no friends', 'None', 'Popular', 'You can feel lonely in a big city.', 'وحيد (يشعر بالوحدة)', 'قد تشعر بالوحدة في مدينة كبيرة.'],
    ['Creative', 'Having good imagination or original ideas', 'None', 'Unimaginative', 'They were highly creative young men.', 'مبدع', 'كانوا شباباً مبدعين جداً.'],
    ['Strict', 'Demanding that rules are obeyed', 'None', 'Lenient', 'The rules in their house were strict.', 'صارم', 'كانت القواعد في بيتهم صارمة.']
  ];
  var R10 = [
    ['Escape', 'Getting away from a dangerous or bad place', 'Escapes', 'Capture', 'His escape from the house was a secret.', 'هروب', 'كان هروبه من البيت سراً.'],
    ['Fear', 'An unpleasant emotion caused by danger', 'Fears', 'Courage', 'He felt fear when he opened the door.', 'خوف', 'شعر بالخوف حين فتح الباب.'],
    ['Power', 'The ability to direct or influence others', 'Powers', 'Weakness', 'The father held all the power.', 'سلطة / قوة', 'كانت كل السلطة بيد الأب.'],
    ['Freedom', 'The power to act or speak as you want', 'Freedoms', 'Captivity', 'They enjoyed their freedom outside.', 'حرية', 'استمتعوا بحريتهم في الخارج.'],
    ['Secret', 'Something that is kept hidden', 'Secrets', 'Public knowledge', 'They kept their escape a secret at first.', 'سر', 'أبقوا هروبهم سراً في البداية.'],
    ['Outside', 'The external side or surface of something', 'Outsides', 'Inside', 'The outside was noisy and bright.', 'الخارج', 'كان الخارج صاخباً ومضيئاً.'],
    ['Inside', 'The inner part or surface of something', 'Insides', 'Outside', 'It was very quiet on the inside.', 'الداخل', 'كان الهدوء شديداً في الداخل.'],
    ['Quiet', 'Making little or no noise', 'None', 'Loud', 'The reclusive house was usually quiet.', 'هادئ', 'كان البيت المنعزل هادئاً في الغالب.'],
    ['Loud', 'Making a lot of noise', 'None', 'Quiet', 'New York is a very loud city.', 'صاخب', 'نيويورك مدينة صاخبة جداً.'],
    ['Dark', 'With little or no light', 'None', 'Light', 'The movie theater is dark.', 'مظلم', 'قاعة السينما مظلمة.'],
    ['Light', 'The natural agent that makes things visible', 'Lights', 'Dark', 'The light from the window was bright.', 'ضوء', 'كان الضوء القادم من النافذة ساطعاً.'],
    ['Fast', 'Moving or capable of moving at high speed', 'None', 'Slow', 'The cars on the street were fast.', 'سريع', 'كانت السيارات في الشارع سريعة.'],
    ['Slow', 'Moving or operating at a low speed', 'None', 'Fast', 'He took a slow walk down the street.', 'بطيء', 'مشى مشياً بطيئاً في الشارع.'],
    ['Youth', 'The period between childhood and adult age', 'Youths', 'Old age', 'They spent their youth indoors.', 'الشباب (مرحلة بين الطفولة والبلوغ)', 'قضوا شبابهم داخل البيت.']
  ];

  /* [past, present, future, arabic] */
  var T1 = [
    ['Lived', 'Live', 'Will live', 'عاش / يعيش / سيعيش'], ['Was / Were', 'Is / Are', 'Will be', 'كان / يكون (هو، هي، هم) / سيكون'],
    ['Had', 'Have', 'Will have', 'امتلك / يمتلك / سيمتلك'], ['Stayed', 'Stay', 'Will stay', 'بقي / يبقى / سيبقى'],
    ['Watched', 'Watch', 'Will watch', 'شاهد / يشاهد / سيشاهد'], ['Made', 'Make', 'Will make', 'صنع / يصنع / سيصنع'],
    ['Played', 'Play', 'Will play', 'لعب / يلعب / سيلعب'], ['Escaped', 'Escape', 'Will escape', 'هرب / يهرب / سيهرب'],
    ['Walked', 'Walk', 'Will walk', 'مشى / يمشي / سيمشي'], ['Saw', 'See', 'Will see', 'رأى / يرى / سيرى'],
    ['Met', 'Meet', 'Will meet', 'قابل / يقابل / سيقابل'], ['Filmed', 'Film', 'Will film', 'صوّر (فيلماً) / يصوّر / سيصوّر'],
    ['Learned', 'Learn', 'Will learn', 'تعلّم / يتعلم / سيتعلم'], ['Wanted', 'Want', 'Will want', 'أراد / يريد / سيريد'],
    ['Knew', 'Know', 'Will know', 'عرف / يعرف / سيعرف'], ['Thought', 'Think', 'Will think', 'فكّر / يفكر / سيفكر'],
    ['Felt', 'Feel', 'Will feel', 'شعر / يشعر / سيشعر']
  ];
  var T2 = [
    ['Read', 'Read', 'Will read', 'قرأ / يقرأ / سيقرأ'], ['Spoke', 'Speak', 'Will speak', 'تحدّث / يتحدث / سيتحدث'],
    ['Told', 'Tell', 'Will tell', 'أخبر / يخبر / سيخبر'], ['Heard', 'Hear', 'Will hear', 'سمع / يسمع / سيسمع'],
    ['Listened', 'Listen', 'Will listen', 'استمع / يستمع / سيستمع'], ['Understood', 'Understand', 'Will understand', 'فهم / يفهم / سيفهم'],
    ['Remembered', 'Remember', 'Will remember', 'تذكّر / يتذكر / سيتذكر'], ['Forgot', 'Forget', 'Will forget', 'نسي / ينسى / سينسى'],
    ['Loved', 'Love', 'Will love', 'أحبّ / يحب / سيحب'], ['Hated', 'Hate', 'Will hate', 'كره / يكره / سيكره'],
    ['Feared', 'Fear', 'Will fear', 'خاف / يخاف / سيخاف'], ['Hoped', 'Hope', 'Will hope', 'أمل / يأمل / سيأمل'],
    ['Tried', 'Try', 'Will try', 'حاول / يحاول / سيحاول'], ['Started', 'Start', 'Will start', 'بدأ / يبدأ / سيبدأ'],
    ['Finished', 'Finish', 'Will finish', 'أنهى / ينهي / سينهي'], ['Stopped', 'Stop', 'Will stop', 'توقف / يتوقف / سيتوقف'],
    ['Changed', 'Change', 'Will change', 'تغيّر أو غيّر / يغيّر / سيغيّر']
  ];

  (window.TOPICS = window.TOPICS || []).push({
    id: 's-angulo', group: 'lessons', title: 'The Angulo Brothers', titleAr: 'الإخوة أنغولو',
    summaryEn: "A 13-slide reading lesson about the six Angulo brothers, who grew up in a locked New York apartment and learned about the world through films, until Mukunda's escape led to the documentary The Wolfpack. It adds four vocabulary guides, two verb-tense tables and a speaking task.",
    summaryAr: 'درس قراءة من ثلاث عشرة شريحة عن الإخوة أنغولو الستة الذين نشأوا في شقة مقفلة بنيويورك وتعلموا عن العالم من الأفلام، حتى قاد هروب موكوندا إلى الفيلم الوثائقي The Wolfpack. ويضيف الدرس أربعة أدلة مفردات وجدولين للأزمنة ونشاط محادثة.',
    file: 'angulo',
    sections: [
      /* ---------------- OVERVIEW ---------------- */
      {
        id: 'overview', no: '', titleEn: 'Overview and learning goals', titleAr: 'نظرة عامة وأهداف الدرس',
        blocks: [
          { t: 'text', label: 'What this deck covers',
            en: "This deck retells the story of the Angulo brothers (Unit 1 theme: \"What is your story?\") in simple language. It goes in this order: a title slide, a warm-up about what makes a home, life inside the locked apartment, how cinema became their window to the world, Mukunda's escape to Manhattan, life after the documentary The Wolfpack, four vocabulary guides, two tables of verb tenses, and a final speaking and writing task.",
            ar: 'يروي هذا العرض قصة الإخوة أنغولو (محور الوحدة الأولى: «ما قصتك؟») بلغة مبسطة. ترتيبه: شريحة العنوان، ثم تمهيد عن معنى البيت، ثم الحياة داخل الشقة المقفلة، ثم كيف صارت السينما نافذتهم على العالم، ثم هروب موكوندا إلى مانهاتن، ثم الحياة بعد الفيلم الوثائقي The Wolfpack، ثم أربعة أدلة مفردات، وجدولان للأزمنة، وأخيراً نشاط محادثة وكتابة.',
            explainEn: 'Each slide carries the teacher\'s Arabic-teacher signature line at the bottom and a small "Gemini Notebook" mark in the corner; they are decoration and are not part of the lesson. This lesson matches the book story on pages 14 and 15 (same facts), but the slides use their own simpler wording.',
            explain: 'تحمل كل شريحة في أسفلها اسم الأستاذ علي الغمري (معلم اللغة العربية للأعاجم) وعلامة صغيرة «Gemini Notebook» في الزاوية، وهي للزينة وليست من مادة الدرس. يتوافق هذا الدرس مع قصة الكتاب في الصفحتين 14 و15 (الوقائع نفسها)، لكن الشرائح تستخدم صياغة أبسط خاصة بها.' },
          { t: 'box', title: 'Learning goals', titleAr: 'أهداف التعلم', items: [
            { en: 'Understand the main events of the Angulo brothers\' story in order.', ar: 'فهم أحداث قصة الإخوة أنغولو الرئيسية بترتيبها.' },
            { en: 'Learn about 55 new words, with plurals, opposites and example sentences.', ar: 'تعلّم نحو 55 كلمة جديدة مع الجمع والأضداد وجمل المثال.' },
            { en: 'Use key adjectives such as reclusive, tyrannical, overcrowded and eccentric.', ar: 'استعمال صفات أساسية مثل reclusive وtyrannical وovercrowded وeccentric.' },
            { en: 'Compare past, present and future forms of 34 common verbs.', ar: 'المقارنة بين الماضي والحاضر والمستقبل في 34 فعلاً شائعاً.' },
            { en: 'Speak and write about the story using vocabulary and past-tense verbs.', ar: 'التحدث والكتابة عن القصة باستعمال المفردات وأفعال الماضي.' }
          ] }
        ]
      },

      /* ---------------- SLIDE 1 ---------------- */
      {
        id: 'slide-1', no: '1', titleEn: 'Title slide', titleAr: 'شريحة العنوان',
        blocks: [
          { t: 'photo', src: src(1), title: 'Slide 1 — Title', label: 'Slide · الشريحة',
            descEn: 'The Angulo Brothers: The Wolfpack\nA True Story of Imagination, Cinema, and Freedom\nUnit 1 Theme: What is your story? Explore the incredible lives of six brothers who discovered the outside world through the magic of movies.\n(Footer in Arabic: the teacher\'s name line, "الأستاذ علي الغمري معلم اللغة العربية للأعاجم". Small "Gemini Notebook" mark in the corner.)\nPicture: an old-parchment page with ornate vintage corner decorations.',
            ar: 'الإخوة أنغولو: قطيع الذئاب (The Wolfpack)\nقصة حقيقية عن الخيال والسينما والحرية\nمحور الوحدة الأولى: ما قصتك؟ استكشف حياة ستة إخوة مذهلة اكتشفوا العالم الخارجي من خلال سحر الأفلام.\n(في الأسفل بالعربية: «الأستاذ علي الغمري معلم اللغة العربية للأعاجم»، وعلامة Gemini Notebook الصغيرة في الزاوية.)\nالصورة: ورقة قديمة بلون الرق وزخارف كلاسيكية في الزوايا.' },
          { t: 'text',
            explainEn: 'The title tells you the whole lesson in three words: imagination, cinema, freedom. A "true story" is real, not fiction. The Wolfpack is both the nickname of the brothers and the name of the documentary about them. The unit question "What is your story?" invites you to compare your own life with theirs. Notice the structure "who discovered the outside world": a relative clause (who + verb) that adds information about the brothers.',
            explain: 'يلخص العنوان الدرس كله في ثلاث كلمات: الخيال والسينما والحرية. «قصة حقيقية» (true story) أي واقعية وليست خيالية. وThe Wolfpack اسم شهرة الإخوة وهو أيضاً اسم الفيلم الوثائقي عنهم. وسؤال الوحدة «What is your story?» يدعوك إلى مقارنة حياتك بحياتهم. لاحظ التركيب «who discovered the outside world» وهو جملة وصل (who + فعل) تضيف معلومة عن الإخوة.' },
          { t: 'box', title: 'Vocabulary', titleAr: 'مفردات', items: [
            { en: 'imagination', ar: 'خيال' }, { en: 'cinema', ar: 'السينما' }, { en: 'freedom', ar: 'حرية' },
            { en: 'theme', ar: 'محور / موضوع رئيسي' }, { en: 'incredible', ar: 'لا يصدَّق / مذهل' },
            { en: 'discover', ar: 'يكتشف' }, { en: 'the outside world', ar: 'العالم الخارجي' }, { en: 'magic', ar: 'سحر' }
          ] }
        ]
      },

      /* ---------------- SLIDE 2 ---------------- */
      {
        id: 'slide-2', no: '2', titleEn: 'Before We Read: What Makes a Home?', titleAr: 'قبل القراءة: ما الذي يصنع البيت؟',
        blocks: [
          { t: 'photo', src: src(2), title: 'Slide 2 — Before We Read: What Makes a Home?', label: 'Slide · الشريحة',
            descEn: 'Before We Read: What Makes a Home?\nLeft column:\n- Imagine living your entire childhood inside one apartment.\n- You never go outside. You never meet other people.\n- Your only window to the world is the television.\nCentre (inside a floral frame): What\'s your apartment like?\nRight column:\n- How would you learn about the world?\n- What would you think of the people outside?\n- Could you be happy?\nPicture: cream page with climbing roses and a central flower ornament.',
            ar: 'قبل أن نقرأ: ما الذي يصنع البيت؟\nالعمود الأيسر:\n- تخيّل أنك تعيش طفولتك كلها داخل شقة واحدة.\n- لا تخرج أبداً. ولا تقابل أحداً من الناس.\n- نافذتك الوحيدة على العالم هي التلفاز.\nفي الوسط (داخل إطار زهري): كيف هي شقتك؟\nالعمود الأيمن:\n- كيف ستتعلم عن العالم؟\n- ماذا ستظن بالناس في الخارج؟\n- هل تستطيع أن تكون سعيداً؟\nالصورة: صفحة كريمية بزهور الورد المتسلقة وزخرفة وسطية.' },
          { t: 'text',
            explainEn: 'This is a pre-reading (warm-up) slide: it prepares your mind for the story before you read it. The left column gives the situation using the imperative "Imagine..." and present simple ("You never go outside"). The right column asks three questions with "would" (How would you...? What would you think...?) and "could" (Could you be happy?). These are second-conditional style questions: they talk about an imaginary situation, not a real one. Answer them with "I would..." or "I could / couldn\'t...". The central question "What\'s your apartment like?" asks you to describe your own home first, so you can compare it with the brothers\' home.',
            explain: 'هذه شريحة تمهيد قبل القراءة: تهيّئ ذهنك للقصة قبل أن تقرأها. العمود الأيسر يعرض الموقف بصيغة الأمر «Imagine…» وبالمضارع البسيط («You never go outside»). والعمود الأيمن يسأل ثلاثة أسئلة بـ would (كيف ستتعلم…؟ ماذا ستظن…؟) وبـ could (هل تستطيع أن تكون سعيداً؟). وهذه أسئلة من نوع الشرط الثاني: تتحدث عن موقف متخيل لا حقيقي. أجب بـ «I would…» أو «I could / couldn\'t…». أما السؤال الأوسط «What\'s your apartment like?» فيطلب منك وصف بيتك أولاً لتقارنه ببيت الإخوة.' },
          { t: 'note', tone: 'grammar',
            en: 'What is ... like? asks for a description, not a preference. "What\'s your apartment like?" = Describe your apartment (big or small? noisy or quiet?). Do not answer with "I like it".',
            ar: 'السؤال What is … like? يطلب وصفاً وليس تفضيلاً. فمعنى «What\'s your apartment like?» هو: صف شقتك (كبيرة أم صغيرة؟ صاخبة أم هادئة؟). لا تجب بـ «I like it».' },
          { t: 'box', title: 'Vocabulary', titleAr: 'مفردات', items: [
            { en: 'entire', ar: 'كامل / بأكمله' }, { en: 'childhood', ar: 'الطفولة' }, { en: 'apartment', ar: 'شقة' },
            { en: 'outside', ar: 'الخارج' }, { en: 'window to the world', ar: 'نافذة على العالم (وسيلة لمعرفة العالم)' },
            { en: 'television', ar: 'التلفاز' }, { en: 'would', ar: 'ستفعل (للموقف المتخيل)' }
          ] },
          { t: 'q', kind: 'open', n: 1, en: "What's your apartment like?", ar: 'كيف هي شقتك (أو بيتك)؟',
            answer: 'My apartment is quite small but very cosy. It has two bedrooms and a balcony. It is noisy during the day because it is near a busy street, but it is quiet at night.',
            why: 'استعمل: It is (small / big / noisy / quiet). It has … ، وصفات مثل cosy وbright وcrowded. السؤال يطلب وصفاً (What … like?). الإجابة شخصية، وهذه نموذج. بدايات مفيدة: My apartment is… / It has… / There is…',
            whyEn: 'Use: It is (small / big / noisy / quiet). It has... and adjectives such as cosy, bright, crowded. The question asks for a description (What ... like?). The answer is personal and this is only a model. Useful starters: My apartment is... / It has... / There is...' },
          { t: 'q', kind: 'open', n: 2, en: 'How would you learn about the world?', ar: 'كيف ستتعلم عن العالم؟',
            answer: 'I would learn about the world from television, films, books and the internet. I would also ask my family a lot of questions.',
            why: 'السؤال بصيغة would، فأجب بـ I would + فعل مجرد. مصادر ممكنة: television, books, films, my parents. بدايات مفيدة: I would learn… from… / I would ask…',
            whyEn: 'The question uses would, so answer with I would + base verb. Possible sources: television, books, films, my parents. Useful starters: I would learn... from... / I would ask...' },
          { t: 'q', kind: 'open', n: 3, en: 'What would you think of the people outside?', ar: 'ماذا ستظن بالناس في الخارج؟',
            answer: 'I would think they were strange and a little frightening because I would never have met them. But I would also be very curious about them.',
            why: 'للتعبير عن الرأي في موقف متخيل استعمل I would think… / I would feel… ويمكنك استعمال صفات من الدرس مثل strange وcurious وscared. بدايات مفيدة: I would think… / They would seem… to me.',
            whyEn: 'To give an opinion about an imaginary situation use I would think... / I would feel... You can use adjectives from the lesson such as strange, curious and scared. Useful starters: I would think... / They would seem... to me.' },
          { t: 'q', kind: 'open', n: 4, en: 'Could you be happy?', ar: 'هل تستطيع أن تكون سعيداً؟',
            answer: 'I don\'t think I could be happy for long. I would feel lonely and I would miss my friends and my freedom. But I could be happy for a short time if I had my family and my favourite films with me.',
            why: 'أجب بـ Yes, I could. أو No, I couldn\'t. ثم اذكر السبب (because…). كلمات مفيدة: lonely, isolated, freedom, friends. الإجابة رأي شخصي.',
            whyEn: 'Answer with Yes, I could. or No, I couldn\'t. and then give a reason (because...). Useful words: lonely, isolated, freedom, friends. The answer is a personal opinion.' }
        ]
      },

      /* ---------------- SLIDE 3 ---------------- */
      {
        id: 'slide-3', no: '3', titleEn: 'Life Inside the Locked Apartment', titleAr: 'الحياة داخل الشقة المقفلة',
        blocks: [
          { t: 'photo', src: src(3), title: 'Slide 3 — Life Inside the Locked Apartment', label: 'Slide · الشريحة',
            descEn: 'Life Inside the Locked Apartment\nLeft: Outside, New York City was loud, busy, and full of life.\nRight: Inside, the Angulo brothers lived a reclusive life. Their father was tyrannical and kept the door locked. The apartment was overcrowded with six brothers, one sister, and their parents. It was a very eccentric and strange way to grow up.\n(In the slide the words reclusive, tyrannical, overcrowded and eccentric are in bold.)\nPictures: the slide is split in two by a torn-paper edge. On the left, a sepia drawing of a busy old-fashioned New York street with horse carriages, cars and crowds. On the right, a dark wooden double door shut with chains, a padlock and bolts.',
            ar: 'الحياة داخل الشقة المقفلة\nيساراً: في الخارج كانت مدينة نيويورك صاخبة ومزدحمة ومليئة بالحياة.\nيميناً: في الداخل عاش الإخوة أنغولو حياة منعزلة. كان أبوهم مستبداً وأبقى الباب مقفلاً. وكانت الشقة مكتظة بستة إخوة وأخت واحدة ووالديهم. كانت طريقة غريبة الأطوار وعجيبة جداً للنشأة.\n(الكلمات reclusive وtyrannical وovercrowded وeccentric مكتوبة بخط عريض في الشريحة.)\nالصور: الشريحة مقسومة بحافة ورق ممزق. يساراً رسم بلون السيبيا لشارع قديم مزدحم في نيويورك فيه عربات خيل وسيارات وحشود. يميناً باب خشبي مزدوج داكن مغلق بسلاسل وقفل ومزاليج.' },
          { t: 'text',
            explainEn: 'This slide is built on contrast: outside (loud, busy, full of life) against inside (reclusive, tyrannical, overcrowded, eccentric). The four bold adjectives are the key words of the story. The father was tyrannical, so the family was reclusive; the apartment was overcrowded; and the whole way of growing up was eccentric. Note "six brothers, one sister, and their parents": that is nine people in one apartment. The drawing on the left is a stylised, old-fashioned picture of New York, so it is not a photo of the real 2010s city; it only shows the idea of a busy outside world.',
            explain: 'تقوم هذه الشريحة على التضاد: الخارج (صاخب ومزدحم ومليء بالحياة) مقابل الداخل (منعزل ومستبد ومكتظ وغريب الأطوار). والصفات الأربع بالخط العريض هي كلمات القصة المفتاحية. كان الأب مستبداً فصارت العائلة منعزلة، وكانت الشقة مكتظة، وكانت طريقة النشأة كلها غريبة الأطوار. لاحظ «six brothers, one sister, and their parents» أي تسعة أشخاص في شقة واحدة. والرسم على اليسار صورة فنية قديمة الطراز لنيويورك وليس صورة حقيقية للمدينة في أيامنا، فهو يوضح فكرة العالم الخارجي المزدحم فقط.' },
          { t: 'note', tone: 'tip',
            en: 'These four adjectives also appear in the book article (pages 14 and 15) and in Exercise 2 on page 14. Learn them as a group: reclusive = avoids people; tyrannical = uses power cruelly; overcrowded = too many people; eccentric = strange and unusual.',
            ar: 'هذه الصفات الأربع تظهر أيضاً في مقالة الكتاب (صفحتا 14 و15) وفي التمرين 2 في صفحة 14. احفظها كمجموعة: reclusive = يتجنب الناس؛ tyrannical = يستعمل سلطته بقسوة؛ overcrowded = أناس أكثر من اللازم؛ eccentric = غريب وغير مألوف.' },
          { t: 'box', title: 'Vocabulary', titleAr: 'مفردات', items: [
            { en: 'loud', ar: 'صاخب' }, { en: 'busy', ar: 'مزدحم / مشغول بالحركة' }, { en: 'full of life', ar: 'مليء بالحياة' },
            { en: 'reclusive', ar: 'منعزل' }, { en: 'tyrannical', ar: 'مستبد' }, { en: 'locked', ar: 'مقفل' },
            { en: 'overcrowded', ar: 'مكتظ' }, { en: 'eccentric', ar: 'غريب الأطوار' }, { en: 'grow up', ar: 'ينشأ / يكبر' }
          ] }
        ]
      },

      /* ---------------- SLIDE 4 ---------------- */
      {
        id: 'slide-4', no: '4', titleEn: 'Cinema: A Window to the World', titleAr: 'السينما: نافذة على العالم',
        blocks: [
          { t: 'photo', src: src(4), title: 'Slide 4 — Cinema: A Window to the World', label: 'Slide · الشريحة',
            descEn: 'Cinema: A Window to the World\n- Watching: The brothers watched thousands of films. Movies were their only friends and teachers.\n- Creating: They did not just watch; they rebuilt the movies. They created amazing costumes from simple things in the apartment.\n- Acting: They acted out their favorite stories. This helped them feel brave and powerful, even while locked inside.\nPicture: a long, curving strip of film (celluloid) winding across the slide, with a green leaf beside each of the three points.',
            ar: 'السينما: نافذة على العالم\n- المشاهدة: شاهد الإخوة آلاف الأفلام. كانت الأفلام أصدقاءهم ومعلميهم الوحيدين.\n- الصنع (الإبداع): لم يكتفوا بالمشاهدة، بل أعادوا بناء الأفلام. وصنعوا أزياء مذهلة من أشياء بسيطة في الشقة.\n- التمثيل: مثّلوا قصصهم المفضلة. وقد ساعدهم ذلك على الشعور بالشجاعة والقوة حتى وهم محبوسون في الداخل.\nالصورة: شريط فيلم طويل ملتوٍ يمتد عبر الشريحة، وبجانب كل نقطة من النقاط الثلاث ورقة شجر خضراء.' },
          { t: 'text',
            explainEn: 'The slide shows three stages: Watching, Creating, Acting. First the boys watched films, and the films taught them about people and life. Then they copied the films: they rebuilt scenes and made costumes (and props) out of everyday things such as paper and tape. Finally they acted out the stories, which gave them courage and a feeling of power even though the door was locked. The sentence "They did not just watch; they rebuilt the movies" uses the pattern not just ... but (also) to show that they did more than the obvious. In the book article the same idea is: watching films was "not just an escape from the outside world, it was their world".',
            explain: 'تعرض الشريحة ثلاث مراحل: المشاهدة ثم الصنع ثم التمثيل. أولاً شاهد الأولاد الأفلام فعلّمتهم عن الناس والحياة. ثم قلّدوا الأفلام: أعادوا بناء المشاهد وصنعوا أزياء (وأدوات تمثيلية) من أشياء يومية كالورق والشريط اللاصق. وأخيراً مثّلوا القصص، فأعطاهم ذلك الشجاعة والإحساس بالقوة مع أن الباب مقفل. والجملة «They did not just watch; they rebuilt the movies» تستعمل نمط not just … (but) لتبيّن أنهم فعلوا أكثر من المتوقع. وفي مقالة الكتاب الفكرة نفسها: مشاهدة الأفلام لم تكن «مجرد هروب من العالم الخارجي، بل كانت عالمهم».' },
          { t: 'note', tone: 'grammar',
            en: 'All the verbs here are in the past simple: watched, did not (didn\'t) watch, rebuilt, created, acted, helped. "Rebuilt" is irregular (rebuild → rebuilt). "Act out" is a phrasal verb meaning to perform a story with your body and voice.',
            ar: 'كل الأفعال هنا في الماضي البسيط: watched وdid not watch وrebuilt وcreated وacted وhelped. والفعل rebuilt شاذ (rebuild ← rebuilt). والفعل المركب act out يعني أن تؤدي قصة بالجسد والصوت.' },
          { t: 'box', title: 'Vocabulary', titleAr: 'مفردات', items: [
            { en: 'window to the world', ar: 'نافذة على العالم' }, { en: 'thousands of', ar: 'آلاف' },
            { en: 'rebuild (rebuilt)', ar: 'يعيد البناء (أعاد بناء)' }, { en: 'costume', ar: 'زي تنكري / ملابس مسرحية' },
            { en: 'simple things', ar: 'أشياء بسيطة' }, { en: 'act out', ar: 'يمثّل / يؤدي مشهداً' },
            { en: 'brave', ar: 'شجاع' }, { en: 'powerful', ar: 'قوي' }, { en: 'even while', ar: 'حتى أثناء' }
          ] }
        ]
      },

      /* ---------------- SLIDE 5 ---------------- */
      {
        id: 'slide-5', no: '5', titleEn: 'The Great Escape to Manhattan', titleAr: 'الهروب الكبير إلى مانهاتن',
        blocks: [
          { t: 'photo', src: src(5), title: 'Slide 5 — The Great Escape to Manhattan', label: 'Slide · الشريحة',
            descEn: 'The Great Escape to Manhattan\nLeft side:\n- One day, Mukunda decided he could not stay inside anymore.\n- He put on a scary Halloween mask so people would not look at him.\n- He walked out of the apartment and into the real streets of Manhattan.\nRight side:\n- Soon, the other brothers followed him outside.\n- On the street, they met a film director named Crystal Moselle. She was fascinated by their unique story.\nPicture: in the centre, a drawing of a theatre-style mask with an open laughing mouth, framed by ivy leaves and scrolls.',
            ar: 'الهروب الكبير إلى مانهاتن\nالجانب الأيسر:\n- ذات يوم قرر موكوندا أنه لا يستطيع البقاء في الداخل بعد الآن.\n- ارتدى قناع هالوين مخيفاً كي لا ينظر الناس إليه.\n- خرج من الشقة ودخل شوارع مانهاتن الحقيقية.\nالجانب الأيمن:\n- وسرعان ما تبعه بقية الإخوة إلى الخارج.\n- في الشارع قابلوا مخرجة أفلام اسمها كريستال موسيل. وقد أُعجبت بقصتهم الفريدة وانبهرت بها.\nالصورة: في الوسط رسم لقناع مسرحي بفم مفتوح ضاحك تحيط به أوراق اللبلاب والزخارف.' },
          { t: 'text',
            explainEn: 'This slide gives the turning point of the story in order, with sequence words: One day, ... Soon, ... On the street, ... Mukunda could not stay inside any more, so he took a risk. He wore a scary Halloween mask so that people would not look at him: the mask was a disguise that protected him on his first walk outside. In the book article he was 15 and the police took him to hospital for a week before he was sent home (see page 15); this slide keeps only the main event. Later the other brothers began to go out too, and on the street they met the film-maker Crystal Moselle, who was fascinated (very interested) by their unusual story. The documentary came from that meeting. Remember that the slide says the brothers met her; she did not hear of them first.',
            explain: 'تعرض هذه الشريحة نقطة التحول في القصة بالترتيب مع كلمات التسلسل: One day … Soon … On the street … لم يعد موكوندا يحتمل البقاء في الداخل فخاطر. ارتدى قناع هالوين مخيفاً حتى لا ينظر إليه الناس، فكان القناع تنكراً يحميه في أول خروج له. وفي مقالة الكتاب كان عمره 15 سنة وأخذته الشرطة إلى المستشفى أسبوعاً قبل أن يُعاد إلى البيت (انظر صفحة 15)، أما هذه الشريحة فتكتفي بالحدث الرئيسي. ثم بدأ بقية الإخوة يخرجون أيضاً، وفي الشارع التقوا بالمخرجة كريستال موسيل التي افتُتنت (اهتمت جداً) بقصتهم غير المعتادة. ومن هذا اللقاء جاء الفيلم الوثائقي. تذكّر أن الشريحة تقول إنهم هم من التقوا بها، ولم تسمع هي عنهم أولاً.' },
          { t: 'note', tone: 'grammar',
            en: '"so people would not look at him" = so (that) + would not + verb. It gives the purpose of an action in the past. Also note "could not stay ... anymore": could not = was unable to; anymore = any longer.',
            ar: 'العبارة «so people would not look at him» = so (that) + would not + فعل، وتبيّن الغاية من فعل وقع في الماضي. ولاحظ أيضاً «could not stay … anymore»: could not بمعنى لم يعد قادراً، وanymore بمعنى بعد الآن / لم يعد.' },
          { t: 'box', title: 'Vocabulary', titleAr: 'مفردات', items: [
            { en: 'decide', ar: 'يقرر' }, { en: 'anymore', ar: 'بعد الآن' }, { en: 'scary', ar: 'مخيف' },
            { en: 'mask', ar: 'قناع' }, { en: 'walk out of', ar: 'يخرج من' }, { en: 'real', ar: 'حقيقي' },
            { en: 'follow', ar: 'يتبع' }, { en: 'film director', ar: 'مخرج أفلام' }, { en: 'fascinated by', ar: 'مفتون بـ / مأخوذ بـ' },
            { en: 'unique', ar: 'فريد' }
          ] }
        ]
      },

      /* ---------------- SLIDE 6 ---------------- */
      {
        id: 'slide-6', no: '6', titleEn: 'The Wolfpack in the Real World', titleAr: 'قطيع الذئاب في العالم الحقيقي',
        blocks: [
          { t: 'photo', src: src(6), title: 'Slide 6 — The Wolfpack in the Real World', label: 'Slide · الشريحة',
            descEn: 'The Wolfpack in the Real World\nTop left: Crystal Moselle made a documentary about them called The Wolfpack.\nTop right: Today, the brothers live in the real world. They have friends, jobs, and independence.\nBottom left: The world finally saw their amazing and difficult childhood.\nBottom right: They are no longer trapped. They are writing their own real-life story.\n(The title The Wolfpack is in italics in the first sentence.)\nPicture: in the centre, a drawing of an old-fashioned film camera with a large lens; there is very small lettering on its side that is too small to read clearly. Pink roses and scrollwork frame the slide.',
            ar: 'قطيع الذئاب في العالم الحقيقي\nأعلى اليسار: صنعت كريستال موسيل فيلماً وثائقياً عنهم بعنوان The Wolfpack.\nأعلى اليمين: اليوم يعيش الإخوة في العالم الحقيقي. لديهم أصدقاء ووظائف واستقلال.\nأسفل اليسار: رأى العالم أخيراً طفولتهم المذهلة والصعبة.\nأسفل اليمين: لم يعودوا محبوسين. إنهم يكتبون قصة حياتهم الحقيقية بأنفسهم.\n(عنوان The Wolfpack مكتوب بخط مائل في الجملة الأولى.)\nالصورة: في الوسط رسم لكاميرا أفلام قديمة بعدسة كبيرة، وعلى جانبها كتابة صغيرة جداً لا تُقرأ بوضوح. وتحيط بالشريحة ورود وردية وزخارف.' },
          { t: 'text',
            explainEn: 'The last content slide of the story gives the ending: the documentary and the new life. Crystal Moselle made the film, so the world finally saw their childhood, which was "amazing and difficult" at the same time. Today they live in the real world with friends, jobs and independence (the ability to take care of yourself and make your own choices). The final sentence is a metaphor: "They are writing their own real-life story". It answers the unit question "What is your story?": your story is not fixed by your past. Note the contrast of tenses: made / saw (past) and live / have / are writing (present). "No longer" means "not any more" and is placed before the adjective: no longer trapped. This matches the book article, which says they now have friends and jobs, and three of them work in film.',
            explain: 'تقدم هذه الشريحة آخر أحداث القصة: الفيلم الوثائقي والحياة الجديدة. صنعت كريستال موسيل الفيلم فرأى العالم أخيراً طفولتهم التي كانت «مذهلة وصعبة» معاً. واليوم يعيشون في العالم الحقيقي ولديهم أصدقاء ووظائف واستقلال (القدرة على الاعتناء بنفسك واتخاذ قراراتك). والجملة الأخيرة استعارة: «They are writing their own real-life story»، وهي تجيب عن سؤال الوحدة «What is your story؟»: قصتك لا يحددها ماضيك. لاحظ التباين بين الأزمنة: made وsaw (ماضٍ) وlive وhave وare writing (حاضر). وعبارة no longer تعني «لم يعد» وتأتي قبل الصفة: no longer trapped. وهذا يوافق مقالة الكتاب التي تذكر أن لديهم الآن أصدقاء ووظائف وأن ثلاثة منهم يعملون في السينما.' },
          { t: 'box', title: 'Vocabulary', titleAr: 'مفردات', items: [
            { en: 'documentary', ar: 'فيلم وثائقي' }, { en: 'finally', ar: 'أخيراً' }, { en: 'amazing', ar: 'مذهل' },
            { en: 'childhood', ar: 'طفولة' }, { en: 'independence', ar: 'استقلال' }, { en: 'trapped', ar: 'محبوس / عالق' },
            { en: 'no longer', ar: 'لم يعد' }, { en: 'real-life', ar: 'من الحياة الحقيقية' }
          ] }
        ]
      },

      /* ---------------- SLIDE 7 ---------------- */
      {
        id: 'slide-7', no: '7', titleEn: 'Vocabulary Guide: Places & People', titleAr: 'دليل المفردات: أماكن وأشخاص',
        blocks: [
          { t: 'photo', src: src(7), title: 'Slide 7 — Vocabulary Guide: Places & People', label: 'Slide · الشريحة',
            descEn: 'Vocabulary Guide: Places & People\nColumns: Term | Meaning & Image | Plural Form | Antonym | Example Sentence\n' + tableEn(R7) + '\nPicture details: a small drawing of vintage keys beside Apartment, a small New York skyline beside Manhattan, and a single old key beside Key. (The words "draw small vintage keys" in the Apartment row are an instruction left in the slide text; they are printed on the slide, and the keys are drawn beside it.)',
            ar: 'دليل المفردات: أماكن وأشخاص\nالأعمدة: المصطلح | المعنى والصورة | صيغة الجمع | الضد | جملة مثال\n' + tableAr(R7) + '\nتفاصيل الصور: رسم صغير لمفاتيح قديمة بجانب Apartment، ورسم صغير لأفق نيويورك بجانب Manhattan، ومفتاح قديم بجانب Key. (عبارة «draw small vintage keys» في صف Apartment تعليمة تُركت في نص الشريحة وهي مطبوعة فيها، والمفاتيح مرسومة بجانبها.)' },
          { t: 'text',
            explainEn: 'This is the first of four vocabulary guides. Each row has five parts: the term, a simple English meaning, the plural form, an antonym (opposite) and an example sentence that uses the story. "None" means there is no plural or no opposite. Study the pairs of opposites: brother / sister and father / mother. Remember that Manhattan, a proper noun, has no plural. A useful habit: learn the example sentence, not only the word, because it shows the word in a real sentence.',
            explain: 'هذا أول أربعة أدلة للمفردات. كل صف فيه خمسة أجزاء: المصطلح، ومعناه بالإنجليزية البسيطة، وصيغة الجمع، والضد، وجملة مثال من القصة. كلمة «None» تعني أنه لا يوجد جمع أو لا يوجد ضد. ادرس أزواج الأضداد: brother / sister وfather / mother. وتذكّر أن Manhattan اسم علم فلا جمع له. وعادة مفيدة: احفظ جملة المثال وليس الكلمة وحدها، لأنها تُظهر الكلمة داخل جملة حقيقية.' },
          vbox(R7, 'Places & People', 'أماكن وأشخاص')
        ]
      },

      /* ---------------- SLIDE 8 ---------------- */
      {
        id: 'slide-8', no: '8', titleEn: 'Vocabulary Guide: Cinema & Creativity', titleAr: 'دليل المفردات: السينما والإبداع',
        blocks: [
          { t: 'photo', src: src(8), title: 'Slide 8 — Vocabulary Guide: Cinema & Creativity', label: 'Slide · الشريحة',
            descEn: 'Vocabulary Guide: Cinema & Creativity\nColumns: Term | Meaning & Image | Plural Form | Antonym | Example Sentence\n' + tableEn(R8) + '\nPicture details: a small drawing of two theatre masks (comedy and tragedy) beside Mask.',
            ar: 'دليل المفردات: السينما والإبداع\nالأعمدة: المصطلح | المعنى والصورة | صيغة الجمع | الضد | جملة مثال\n' + tableAr(R8) + '\nتفاصيل الصور: رسم صغير لقناعين مسرحيين (الكوميديا والتراجيديا) بجانب Mask.' },
          { t: 'text',
            explainEn: 'These are the words you need to talk about films and making things. Film and movie mean the same thing in everyday English (British English prefers film, American English prefers movie), although the slide gives slightly different explanations. Three useful contrasts: documentary / fiction (real or invented), imagination / reality (inside your mind or outside it) and hobby / work (free time or job). Reality and Fantasy: the slide gives "Fantasy" as the antonym of Reality. Note that Halloween has no plural and no antonym.',
            explain: 'هذه كلمات تحتاجها للحديث عن الأفلام وصنع الأشياء. كلمتا film وmovie بمعنى واحد في الإنجليزية اليومية (البريطانيون يفضلون film والأمريكيون يفضلون movie) مع أن الشريحة تعطي شرحين مختلفين قليلاً. وهناك ثلاثة أضداد مفيدة: documentary / fiction (حقيقي أو متخيَّل)، وimagination / reality (داخل ذهنك أو خارجه)، وhobby / work (وقت الفراغ أو العمل). وتذكر الشريحة Fantasy ضداً لـ Reality. ولاحظ أن Halloween ليس له جمع ولا ضد.' },
          vbox(R8, 'Cinema & Creativity', 'السينما والإبداع')
        ]
      },

      /* ---------------- SLIDE 9 ---------------- */
      {
        id: 'slide-9', no: '9', titleEn: 'Vocabulary Guide: Adjectives & Descriptions', titleAr: 'دليل المفردات: الصفات والأوصاف',
        blocks: [
          { t: 'photo', src: src(9), title: 'Slide 9 — Vocabulary Guide: Adjectives & Descriptions', label: 'Slide · الشريحة',
            descEn: 'Vocabulary Guide: Adjectives & Descriptions\nColumns: Term | Meaning & Image | Plural Form | Antonym | Example Sentence\n' + tableEn(R9) + '\nPicture details: a small icon beside each term (for example a padlock for Reclusive, a crown and whip for Tyrannical, a crowd for Overcrowded, a mask for Eccentric, a question mark for Strange, a shield and swords for Brave, a magnifying glass and an open book for Curious, a globe for Real, theatre masks for Fake, a tower for Isolated, a single rose for Lonely, a paint palette and a light bulb for Creative, a gavel and a book for Strict).',
            ar: 'دليل المفردات: الصفات والأوصاف\nالأعمدة: المصطلح | المعنى والصورة | صيغة الجمع | الضد | جملة مثال\n' + tableAr(R9) + '\nتفاصيل الصور: أيقونة صغيرة بجانب كل كلمة (مثلاً قفل لـ Reclusive، وتاج وسوط لـ Tyrannical، وحشد لـ Overcrowded، وقناع لـ Eccentric، وعلامة استفهام لـ Strange، ودرع وسيوف لـ Brave، وعدسة مكبرة وكتاب مفتوح لـ Curious، وكرة أرضية لـ Real، وأقنعة مسرحية لـ Fake، وبرج لـ Isolated، ووردة واحدة لـ Lonely، ولوحة ألوان ومصباح لـ Creative، ومطرقة قاضٍ وكتاب لـ Strict).' },
          { t: 'text',
            explainEn: 'Adjectives have no plural form in English, so the Plural column says "None" for every row. Learn them as pairs with their antonyms (reclusive / sociable, brave / scared, real / fake, isolated / connected). The first four (reclusive, tyrannical, overcrowded, eccentric) describe the family, father and apartment in the story. Brave, scared and curious describe how the boys felt. Careful: reclusive describes a person or life, while isolated can also describe a place; lonely is a feeling (you want company) but reclusive can be a choice. Say "Mukunda was brave to leave the house" with "to + verb" after the adjective.',
            explain: 'الصفات في الإنجليزية لا جمع لها، ولذلك كُتب «None» في عمود الجمع لكل الصفوف. تعلّمها أزواجاً مع أضدادها (reclusive / sociable وbrave / scared وreal / fake وisolated / connected). الأربع الأولى (reclusive وtyrannical وovercrowded وeccentric) تصف العائلة والأب والشقة في القصة. أما brave وscared وcurious فتصف مشاعر الأولاد. انتبه: reclusive تصف شخصاً أو حياة، أما isolated فقد تصف مكاناً أيضاً؛ وlonely شعور (تريد رفقة) بينما reclusive قد تكون اختياراً. وتأتي «to + فعل» بعد الصفة كما في «Mukunda was brave to leave the house».' },
          vbox(R9, 'Adjectives & Descriptions', 'الصفات والأوصاف')
        ]
      },

      /* ---------------- SLIDE 10 ---------------- */
      {
        id: 'slide-10', no: '10', titleEn: 'Vocabulary Guide: Abstract Concepts', titleAr: 'دليل المفردات: مفاهيم مجرّدة',
        blocks: [
          { t: 'photo', src: src(10), title: 'Slide 10 — Vocabulary Guide: Abstract Concepts', label: 'Slide · الشريحة',
            descEn: 'Vocabulary Guide: Abstract Concepts\nColumns: Term | Meaning & Image | Plural Form | Antonym | Example Sentence\n' + tableEn(R10) + '\nPicture details: small icons beside the meanings, for example a running figure and a door (Escape), a hand and a shadowy figure (Fear), a sceptre and a crown (Power), a bird and a cage (Freedom), a treasure chest (Secret), pictures of an outside and an inside view, a sleeping cat and a feather (Quiet), loudspeakers (Loud), moons (Dark), a sun (Light), a galloping horse (Fast), a snail (Slow), and a child (Youth).',
            ar: 'دليل المفردات: مفاهيم مجرّدة\nالأعمدة: المصطلح | المعنى والصورة | صيغة الجمع | الضد | جملة مثال\n' + tableAr(R10) + '\nتفاصيل الصور: أيقونات صغيرة بجانب المعاني، مثلاً شخص يركض وباب (Escape)، ويد وشخص مظلل (Fear)، وصولجان وتاج (Power)، وطائر وقفص (Freedom)، وصندوق كنز (Secret)، ومنظر خارجي ومنظر داخلي، وقطة نائمة وريشة (Quiet)، ومكبرات صوت (Loud)، وأهلّة (Dark)، وشمس (Light)، وحصان يعدو (Fast)، وحلزون (Slow)، وطفل (Youth).' },
          { t: 'text',
            explainEn: 'This guide mixes abstract nouns (escape, fear, power, freedom, secret, youth) with opposite pairs (outside / inside, quiet / loud, dark / light, fast / slow). Several words are both a noun and an adjective or have two uses: light can be a noun (the light from the window) and dark an adjective (the movie theater is dark). The antonym of Freedom is Captivity, the opposite of the brothers\' experience. Note that Fear and Escape come in the story: the family\'s fear led to the locked door and Mukunda\'s escape led to freedom. The slide itself writes "Public knowledge" as the opposite of Secret, and "Old age" as the opposite of Youth.',
            explain: 'يجمع هذا الدليل أسماء مجردة (escape وfear وpower وfreedom وsecret وyouth) مع أزواج أضداد (outside / inside وquiet / loud وdark / light وfast / slow). وبعض الكلمات لها استعمالان: light اسم (the light from the window) وdark صفة (the movie theater is dark). وضد Freedom هو Captivity (الأسر)، وهو عكس تجربة الإخوة. ولاحظ أن الخوف والهروب من أحداث القصة: خوف الأب أدى إلى الباب المقفل، وهروب موكوندا أدى إلى الحرية. وتكتب الشريحة «Public knowledge» ضداً لـ Secret و«Old age» ضداً لـ Youth.' },
          vbox(R10, 'Abstract Concepts', 'مفاهيم مجرّدة')
        ]
      },

      /* ---------------- SLIDE 11 ---------------- */
      {
        id: 'slide-11', no: '11', titleEn: 'Action in Time: Verb Tenses (Part 1)', titleAr: 'الفعل عبر الزمن: الأزمنة (الجزء الأول)',
        blocks: [
          { t: 'photo', src: src(11), title: 'Slide 11 — Action in Time: Verb Tenses (Part 1)', label: 'Slide · الشريحة',
            descEn: 'Action in Time: Verb Tenses (Part 1)\nThree columns: Past Tense | Present Tense | Future Tense\n' + tenseEn(T1) + '\nPicture: vine and flower decoration between the columns.',
            ar: 'الفعل عبر الزمن: الأزمنة (الجزء الأول)\nثلاثة أعمدة: الماضي | المضارع | المستقبل\n' + tenseAr(T1) + '\nالصورة: زخرفة من عروق ونباتات وزهور بين الأعمدة.' },
          { t: 'text',
            explainEn: 'The table gives each verb in three forms: past, present and future. Future = will + base verb (will live, will watch). Present = the base form (live, watch); for he / she / it add -s (he lives, she watches) and use is / are / have as the irregular forms of be and have. Regular past verbs end in -ed (lived, stayed, watched, played, escaped, walked, filmed, learned, wanted). Irregular past forms must be memorised: was / were, had, made, saw, met, knew, thought, felt. Note: "Learned" is American spelling; British English also uses "learnt". These are the verbs you need to retell the story: they lived, they watched, Mukunda escaped, they met Crystal.',
            explain: 'يعرض الجدول كل فعل بثلاث صيغ: الماضي والمضارع والمستقبل. المستقبل = will + الفعل المجرد (will live, will watch). المضارع = الصيغة المجردة (live, watch)، ومع he / she / it نضيف -s (he lives, she watches)، وتأتي is / are / have صيغاً شاذة للفعلين be وhave. أفعال الماضي المنتظمة تنتهي بـ -ed (lived, stayed, watched, played, escaped, walked, filmed, learned, wanted). أما الماضي الشاذ فيجب حفظه: was / were وhad وmade وsaw وmet وknew وthought وfelt. ملاحظة: learned تهجئة أمريكية، وفي البريطانية تُستعمل learnt أيضاً. هذه هي الأفعال التي تحتاجها لإعادة سرد القصة: lived وwatched وescaped (موكوندا) وmet (كريستال).' },
          { t: 'note', tone: 'grammar',
            en: 'Irregular verbs in this part: be (was / were), have (had), make (made), see (saw), meet (met), know (knew), think (thought), feel (felt). The other verbs are regular and add -ed (or -d after e).',
            ar: 'الأفعال الشاذة في هذا الجزء: be (was / were) وhave (had) وmake (made) وsee (saw) وmeet (met) وknow (knew) وthink (thought) وfeel (felt). أما بقية الأفعال فمنتظمة وتضيف -ed (أو -d بعد حرف e).' },
          { t: 'box', title: 'Verbs: past – present – future', titleAr: 'الأفعال: ماضٍ – مضارع – مستقبل', compact: true, items: T1.map(function (r) { return { en: r[0] + ' – ' + r[1] + ' – ' + r[2], ar: r[3] }; }) }
        ]
      },

      /* ---------------- SLIDE 12 ---------------- */
      {
        id: 'slide-12', no: '12', titleEn: 'Action in Time: Verb Tenses (Part 2)', titleAr: 'الفعل عبر الزمن: الأزمنة (الجزء الثاني)',
        blocks: [
          { t: 'photo', src: src(12), title: 'Slide 12 — Action in Time: Verb Tenses (Part 2)', label: 'Slide · الشريحة',
            descEn: 'Action in Time: Verb Tenses (Part 2)\nThree columns: Past Tense | Present Tense | Future Tense\n' + tenseEn(T2) + '\nPicture: a flowering vine between the columns.',
            ar: 'الفعل عبر الزمن: الأزمنة (الجزء الثاني)\nثلاثة أعمدة: الماضي | المضارع | المستقبل\n' + tenseAr(T2) + '\nالصورة: عريشة نباتية مزهرة بين الأعمدة.' },
          { t: 'text',
            explainEn: 'Part 2 continues with 17 more verbs. Irregular past forms here: spoke, told, heard, understood, forgot (and read, which is spelled the same in the past but pronounced "red"). Regular verbs: listened, remembered, loved, hated, feared, hoped, tried, started, finished, stopped, changed. Spelling rules to notice: try → tried (y changes to i), stop → stopped (the final consonant doubles), love → loved / hate → hated / hope → hoped (just add -d). Future is always will + base verb, so it never changes for different people.',
            explain: 'يكمل الجزء الثاني بسبعة عشر فعلاً أخرى. الأفعال الشاذة في الماضي هنا: spoke وtold وheard وunderstood وforgot (وread الذي يُكتب بالشكل نفسه في الماضي لكنه يُنطق «red»). والأفعال المنتظمة: listened وremembered وloved وhated وfeared وhoped وtried وstarted وfinished وstopped وchanged. قواعد إملائية للانتباه: try ← tried (تتحول y إلى i)، وstop ← stopped (يتضاعف الحرف الأخير)، وlove ← loved وhate ← hated وhope ← hoped (نضيف d فقط). والمستقبل دائماً will + الفعل المجرد فلا يتغير مع اختلاف الأشخاص.' },
          { t: 'note', tone: 'tip',
            en: 'Pronunciation of -ed: /t/ after voiceless sounds (stopped, hoped, finished, watched), /d/ after voiced sounds (loved, changed, listened, remembered), /ɪd/ after t or d (started, wanted, hated). Practise saying the past column aloud.',
            ar: 'نطق -ed: يُنطق /t/ بعد الأصوات المهموسة (stopped وhoped وfinished وwatched)، ويُنطق /d/ بعد الأصوات المجهورة (loved وchanged وlistened وremembered)، ويُنطق /ɪd/ بعد t أو d (started وwanted وhated). تدرّب على قراءة عمود الماضي بصوت عالٍ.' },
          { t: 'box', title: 'Verbs: past – present – future', titleAr: 'الأفعال: ماضٍ – مضارع – مستقبل', compact: true, items: T2.map(function (r) { return { en: r[0] + ' – ' + r[1] + ' – ' + r[2], ar: r[3] }; }) }
        ]
      },

      /* ---------------- SLIDE 13 ---------------- */
      {
        id: 'slide-13', no: '13', titleEn: 'Your Turn to Speak: Critical Thinking', titleAr: 'دورك في الحديث: التفكير الناقد',
        blocks: [
          { t: 'photo', src: src(13), title: 'Slide 13 — Your Turn to Speak: Critical Thinking', label: 'Slide · الشريحة',
            descEn: 'Your Turn to Speak: Critical Thinking\nQuestion 1: Why do you think the brothers turned to movies to understand the world?\nQuestion 2: If you had to stay in one room for a year, what three things would you keep with you?\nQuestion 3: How did Mukunda\'s escape change the future for his entire family?\nActivity: Use at least three words from the Vocabulary Guide and two verbs in the Past Tense to write your own answer to Question 3.\nPicture: the text is written on an old unrolled scroll with a floral border.',
            ar: 'دورك في الحديث: التفكير الناقد\nالسؤال 1: لماذا تظن أن الإخوة لجأوا إلى الأفلام لفهم العالم؟\nالسؤال 2: لو اضطررت إلى البقاء في غرفة واحدة سنة كاملة، فما الأشياء الثلاثة التي ستبقيها معك؟\nالسؤال 3: كيف غيّر هروب موكوندا مستقبل عائلته كلها؟\nالنشاط: استعمل ثلاث كلمات على الأقل من دليل المفردات وفعلين في الزمن الماضي لتكتب إجابتك الخاصة عن السؤال 3.\nالصورة: النص مكتوب على لفافة ورق قديمة مفتوحة بإطار زهري.' },
          { t: 'text',
            explainEn: 'This final slide asks you to think and speak, not just repeat facts. Question 1 asks for a reason (Why...?): think about what the brothers had at home and what they did not have. Question 2 uses the second conditional (If you had to..., what would you...?): you imagine an unreal situation. Question 3 asks about a result (How did ... change ...?): connect the escape with the later events (meeting Crystal, the film, new friends and jobs). The Activity is a writing task with two rules: use at least three words from the Vocabulary Guide (slides 7 to 10) and at least two past-tense verbs (slides 11 and 12). Answers are personal, so the answers below are models; use your own ideas.',
            explain: 'تطلب منك هذه الشريحة الأخيرة أن تفكر وتتحدث وليس أن تكرر معلومات فقط. السؤال 1 يطلب سبباً (Why…؟): فكّر فيما كان لدى الإخوة في البيت وما لم يكن لديهم. السؤال 2 يستعمل الشرط الثاني (If you had to…, what would you…؟): تتخيل موقفاً غير واقعي. السؤال 3 يسأل عن نتيجة (How did … change …؟): اربط الهروب بالأحداث اللاحقة (لقاء كريستال والفيلم والأصدقاء والوظائف الجديدة). والنشاط مهمة كتابية بشرطين: استعمل ثلاث كلمات على الأقل من دليل المفردات (الشرائح 7 إلى 10) وفعلين على الأقل في الماضي (الشريحتان 11 و12). الإجابات شخصية، ولذلك فالإجابات أدناه نماذج، فاستعمل أفكارك أنت.' },
          { t: 'q', kind: 'open', n: 1, en: 'Why do you think the brothers turned to movies to understand the world?', ar: 'لماذا تظن أن الإخوة لجأوا إلى الأفلام لفهم العالم؟',
            answer: 'I think they turned to movies because they could not go outside, so films were the only way to see people, cities and stories. They had no school and no friends, so movies became their friends and teachers. Their father also owned thousands of films, so movies were always in the apartment.',
            why: 'القصة تقول إن الأب أبقى الباب مقفلاً، وإن الأفلام كانت «أصدقاءهم ومعلميهم الوحيدين» (الشريحة 4). فاستعمل because + سبب. بدايات مفيدة: I think they… because… / Movies were their only… / They had no…',
            whyEn: 'The story says the father kept the door locked and that movies were "their only friends and teachers" (slide 4). Use because + a reason. Useful starters: I think they... because... / Movies were their only... / They had no...' },
          { t: 'q', kind: 'open', n: 2, en: 'If you had to stay in one room for a year, what three things would you keep with you?', ar: 'لو اضطررت إلى البقاء في غرفة واحدة سنة كاملة، فما الأشياء الثلاثة التي ستبقيها معك؟',
            answer: 'I would keep my phone with a lot of books on it, a notebook and a pen, and photos of my family. The books would help me learn and escape in my imagination, the notebook would let me write my own story, and the photos would make me feel less lonely.',
            why: 'سؤال شرط ثانٍ: If I had to… I would keep… ثم اذكر ثلاثة أشياء مع سبب لكل واحد. الإجابة شخصية. بدايات مفيدة: I would keep… because… / The first thing is… / Another important thing would be…',
            whyEn: 'This is a second-conditional question: If I had to... I would keep... Name three things and give a reason for each one. The answer is personal. Useful starters: I would keep... because... / The first thing is... / Another important thing would be...' },
          { t: 'q', kind: 'open', n: 3, en: "How did Mukunda's escape change the future for his entire family?", ar: 'كيف غيّر هروب موكوندا مستقبل عائلته كلها؟',
            answer: 'Mukunda\'s escape opened the door to the real world. After he left, his brothers followed him outside, and they met the director Crystal Moselle, who made the documentary The Wolfpack. The world saw their story, and today they have friends, jobs and independence.',
            why: 'اتبع سلسلة الأحداث من الشرائح 5 و6: خروج موكوندا ← خروج بقية الإخوة ← لقاء كريستال موسيل ← الفيلم الوثائقي ← الأصدقاء والوظائف والاستقلال. استعمل الماضي البسيط للأحداث وthen / after that للتسلسل.',
            whyEn: 'Follow the chain of events from slides 5 and 6: Mukunda goes out, then the other brothers follow, they meet Crystal Moselle, the documentary is made, and now they have friends, jobs and independence. Use the past simple for the events and then / after that for the order.' },
          { t: 'q', kind: 'open', n: 4, en: "Activity: Use at least three words from the Vocabulary Guide and two verbs in the Past Tense to write your own answer to Question 3.", ar: 'نشاط: استعمل ثلاث كلمات على الأقل من دليل المفردات وفعلين في الزمن الماضي لتكتب إجابتك الخاصة عن السؤال 3.',
            answer: 'Mukunda was brave. He escaped from the overcrowded apartment and walked into the real world. Because of his freedom, his brothers followed him and met a director. Their story changed because the world finally saw it.\n(Vocabulary Guide words: brave, overcrowded, real, freedom, director, story. Past verbs: was, escaped, walked, followed, met, changed, saw.)',
            why: 'الشرطان: (1) ثلاث كلمات على الأقل من الأدلة، وهنا brave وovercrowded وfreedom وdirector وreal وstory؛ (2) فعلان ماضيان على الأقل، وهنا escaped وwalked وfollowed وmet وchanged وsaw. استخدم الجدولين في الشريحتين 11 و12 للتأكد من صيغ الماضي الشاذة (met وsaw). تفحّص إجابتك: هل ذكرت التغيير في المستقبل؟',
            whyEn: 'The two rules: (1) at least three words from the guides, here brave, overcrowded, freedom, director, real and story; (2) at least two past-tense verbs, here escaped, walked, followed, met, changed and saw. Use the tables on slides 11 and 12 to check irregular past forms (met, saw). Check your answer: did you mention the change for the future?' },
          { t: 'model',
            en: 'Mukunda was brave and curious. One day he put on a mask and escaped from the overcrowded apartment. He met people in the real world and found freedom. After that, his brothers followed him, and they met Crystal Moselle. She made a documentary, and now the whole family has friends and a new life.',
            ar: 'كان موكوندا شجاعاً وفضولياً. وذات يوم ارتدى قناعاً وهرب من الشقة المكتظة. قابل ناساً في العالم الحقيقي ووجد الحرية. وبعد ذلك تبعه إخوته والتقوا بكريستال موسيل. فصنعت فيلماً وثائقياً، والعائلة كلها الآن لديها أصدقاء وحياة جديدة.' }
        ]
      },

      /* ---------------- TAKEAWAYS ---------------- */
      {
        id: 'takeaways', no: '', titleEn: 'Key takeaways', titleAr: 'أهم النقاط',
        blocks: [
          { t: 'text',
            explainEn: 'The story in six steps: (1) six brothers and a sister grew up in an overcrowded New York apartment; (2) their tyrannical father kept the door locked, so the family was reclusive; (3) films were their only friends and teachers, and they rebuilt and acted out the movies; (4) Mukunda put on a scary Halloween mask and escaped into Manhattan; (5) the brothers met the director Crystal Moselle, who made the documentary The Wolfpack; (6) today they have friends, jobs and independence, and they are writing their own story.',
            explain: 'القصة في ست خطوات: (1) نشأ ستة إخوة وأخت في شقة مكتظة في نيويورك؛ (2) أبقى أبوهم المستبد الباب مقفلاً فصارت العائلة منعزلة؛ (3) كانت الأفلام أصدقاءهم ومعلميهم الوحيدين فأعادوا بناءها ومثّلوها؛ (4) ارتدى موكوندا قناع هالوين مخيفاً وهرب إلى مانهاتن؛ (5) التقى الإخوة بالمخرجة كريستال موسيل التي صنعت الفيلم الوثائقي The Wolfpack؛ (6) لديهم اليوم أصدقاء ووظائف واستقلال، ويكتبون قصتهم الخاصة.' },
          { t: 'box', title: 'Top 20 words to remember', titleAr: 'عشرون كلمة أساسية للحفظ', items: [
            { en: 'reclusive', ar: 'منعزل' }, { en: 'tyrannical', ar: 'مستبد' }, { en: 'overcrowded', ar: 'مكتظ' }, { en: 'eccentric', ar: 'غريب الأطوار' },
            { en: 'apartment', ar: 'شقة' }, { en: 'locked', ar: 'مقفل' }, { en: 'escape', ar: 'هروب / يهرب' }, { en: 'freedom', ar: 'حرية' },
            { en: 'mask', ar: 'قناع' }, { en: 'costume', ar: 'زي تنكري' }, { en: 'documentary', ar: 'فيلم وثائقي' }, { en: 'director', ar: 'مخرج' },
            { en: 'imagination', ar: 'خيال' }, { en: 'reality', ar: 'واقع' }, { en: 'brave', ar: 'شجاع' }, { en: 'curious', ar: 'فضولي' },
            { en: 'isolated', ar: 'معزول' }, { en: 'lonely', ar: 'وحيد' }, { en: 'independence', ar: 'استقلال' }, { en: 'trapped', ar: 'محبوس' }
          ] },
          { t: 'box', title: 'Useful sentence patterns', titleAr: 'تراكيب مفيدة', items: [
            { en: 'They did not just watch; they rebuilt the movies.', ar: 'لم يكتفوا بالمشاهدة، بل أعادوا بناء الأفلام. (not just … but)' },
            { en: 'He put on a mask so people would not look at him.', ar: 'ارتدى قناعاً كي لا ينظر الناس إليه. (so + would not)' },
            { en: 'They are no longer trapped.', ar: 'لم يعودوا محبوسين. (no longer)' },
            { en: 'If you had to stay in one room for a year, what would you keep?', ar: 'لو اضطررت للبقاء في غرفة سنة، فماذا ستبقي معك؟ (الشرط الثاني)' },
            { en: 'What is your apartment like?', ar: 'كيف هي شقتك؟ (طلب وصف)' }
          ] },
          { t: 'note', tone: 'tip',
            en: 'Study tip: retell the story aloud in the past simple using at least ten words from the vocabulary guides. Then say how your own story is different from the Angulo brothers\'.',
            ar: 'نصيحة للدراسة: أعد سرد القصة بصوت عالٍ بالماضي البسيط مستعملاً عشر كلمات على الأقل من أدلة المفردات. ثم قل كيف تختلف قصتك أنت عن قصة الإخوة أنغولو.' }
        ]
      },

      /* ---------------- ANSWERS ---------------- */
      {
        id: 'answers', no: '', titleEn: 'Answers at a glance', titleAr: 'الإجابات النموذجية في سطور',
        blocks: [
          { t: 'note', tone: 'tip',
            en: 'All the questions in this deck are open discussion or writing questions (slides 2 and 13), so there is no single correct answer. These are short model answers; the full versions are under each question above.',
            ar: 'كل أسئلة هذا العرض أسئلة نقاش أو كتابة مفتوحة (الشريحتان 2 و13)، ولذلك لا توجد إجابة واحدة صحيحة. هذه نماذج مختصرة، والنسخ الكاملة تحت كل سؤال في الأعلى.' },
          { t: 'box', title: 'Slide 2 — model answers', titleAr: 'الشريحة 2 — إجابات نموذجية', items: [
            { en: "What's your apartment like? → It is small but cosy and a bit noisy.", ar: 'كيف هي شقتك؟ ← صغيرة ودافئة وصاخبة قليلاً.' },
            { en: 'How would you learn about the world? → From television, films, books and the internet.', ar: 'كيف ستتعلم عن العالم؟ ← من التلفاز والأفلام والكتب والإنترنت.' },
            { en: 'What would you think of the people outside? → Strange and a little frightening, but also interesting.', ar: 'ماذا ستظن بالناس في الخارج؟ ← غريبين ومخيفين قليلاً، لكنهم مثيرون للاهتمام أيضاً.' },
            { en: "Could you be happy? → Not for long; I would feel lonely.", ar: 'هل تستطيع أن تكون سعيداً؟ ← ليس لفترة طويلة، فسأشعر بالوحدة.' }
          ] },
          { t: 'box', title: 'Slide 13 — model answers', titleAr: 'الشريحة 13 — إجابات نموذجية', items: [
            { en: 'Q1 → They could not go outside, so movies were their only friends, teachers and window to the world.', ar: 'س1 ← لم يستطيعوا الخروج، فكانت الأفلام أصدقاءهم ومعلميهم ونافذتهم الوحيدة على العالم.' },
            { en: 'Q2 → Books, a notebook and pen, photos of my family.', ar: 'س2 ← كتب ودفتر وقلم وصور عائلتي.' },
            { en: 'Q3 → His escape opened the door to the real world: the brothers followed, met Crystal Moselle, and the documentary gave them friends, jobs and independence.', ar: 'س3 ← فتح هروبه الباب إلى العالم الحقيقي: تبعه إخوته والتقوا كريستال موسيل، ومنحهم الفيلم الوثائقي أصدقاء ووظائف واستقلالاً.' },
            { en: 'Activity → Use 3+ guide words and 2+ past verbs (see the model paragraph on slide 13).', ar: 'النشاط ← استعمل ثلاث كلمات أو أكثر من الأدلة وفعلين ماضيين أو أكثر (انظر الفقرة النموذجية في الشريحة 13).' }
          ] }
        ]
      }
    ]
  });
})();

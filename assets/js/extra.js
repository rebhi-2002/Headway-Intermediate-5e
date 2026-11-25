/* extra.js — صفحات: الصف، الأفعال الشاذة، الرموز الصوتية */
(function () {
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function head(t, ar, sub) { return '<header class="tool-h"><h1 class="en" dir="ltr">' + esc(t) + '</h1><p class="ar">' + esc(ar) + '</p>' + (sub ? '<p class="ar muted">' + sub + '</p>' : '') + '</header>'; }
  function say(t) { return '<button type="button" class="spk" data-act="speak" data-t="' + esc(t) + '" data-voice="1" aria-label="استمع">🔊</button>'; }

  function viewClass() {
    var C = window.CLASS, h = head('Class & course', 'الصف والكتاب: المواعيد والواجبات وخريطة الكورس');
    h += '<section class="sec"><div class="grp-h"><h2 class="ar">📅 مواعيد الحصص</h2></div><div class="tiles cls-grid">' + C.schedule.map(function (s) {
      return '<div class="cls-card"><b class="ar">' + esc(s.day) + ' <span class="en" dir="ltr">· ' + esc(s.dayEn) + '</span></b><span class="en cls-time" dir="ltr">' + esc(s.time) + '</span><span class="ar muted">' + esc(s.note) + '</span></div>';
    }).join('') + '</div><p class="ar muted">' + esc(C.scheduleNote) + '</p></section>';
    h += '<section class="sec"><div class="grp-h"><h2 class="ar">📝 الواجبات</h2></div>' + C.homework.map(function (w) {
      return '<article class="rcard hw"><h3 class="en" dir="ltr">' + esc(w.title) + '</h3><p class="ar muted">' + esc(w.titleAr) + '</p><p class="en" dir="ltr">' + esc(w.en) + ' ' + say(w.en) + '</p><p class="ar">' + esc(w.ar) + '</p>' +
        '<details class="a-script"><summary class="ar">مثال على الإجابة</summary><ul class="en" dir="ltr">' + w.example.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul><p class="ar muted">' + esc(w.exampleAr) + '</p></details></article>';
    }).join('') + '</section>';
    h += '<section class="sec"><div class="grp-h"><h2 class="ar">🎬 تسجيلات الحصص</h2></div>' + (C.recorded.length ? '<div class="tiles links">' + C.recorded.map(function (r) { return '<a class="lcard" href="' + esc(r.url) + '" target="_blank" rel="noopener"><span class="lc-b"><b class="ar">' + esc(r.title) + '</b></span></a>'; }).join('') + '</div>' : '<p class="ar muted">لا توجد تسجيلات مضافة بعد. روابط التسجيلات ومجموعات الواتساب موجودة في صفحة <a href="#/lib">الملفات والروابط</a>.</p>') + '</section>';
    h += '<section class="sec"><div class="grp-h"><h2 class="ar">🧭 كيف تدرس بهذا الموقع</h2></div><ol class="how">' + C.how.map(function (x) { return '<li><span class="ar">' + esc(x[0]) + '</span><span class="en muted" dir="ltr">' + esc(x[1]) + '</span></li>'; }).join('') + '</ol></section>';
    h += '<section class="sec"><div class="grp-h"><h2 class="ar">📘 خريطة وحدات الكتاب</h2></div><div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th class="en">Unit</th><th class="en">Focus</th></tr></thead><tbody>' + C.units.map(function (u, i) {
      return '<tr' + (i === 0 ? ' class="on"' : '') + '><td>' + u[0] + '</td><td class="en" dir="ltr">' + (i === 0 ? '<a href="#/p/9">' + esc(u[1]) + '</a>' : esc(u[1])) + '</td><td class="en" dir="ltr">' + esc(u[2]) + '</td></tr>';
    }).join('') + '</tbody></table></div><p class="ar muted">' + esc(C.unitsNote) + '</p></section>';
    h += '<aside class="credit"><span class="ar">📚 المرجع: كتاب Headway Intermediate 5th Edition، Oxford University Press، وملف المتابعة الخاص بالصف. الشرح والتمارين الإضافية من إعدادنا.</span></aside>';
    return h;
  }

  var VS = { q: '', irr: 'all' };
  function verbRows() {
    var q = VS.q.trim().toLowerCase();
    return window.VERBS.filter(function (v) { return !q || v.join(' ').toLowerCase().indexOf(q) >= 0; }).map(function (v) {
      return '<tr><td class="en vb" dir="ltr"><b>' + esc(v[0]) + '</b> ' + say(v[0]) + '</td><td class="en" dir="ltr">' + esc(v[1]) + ' ' + say(v[1].split(' / ')[0].replace(/ \/.*/, '')) + '</td><td class="en" dir="ltr">' + esc(v[2]) + '</td><td class="ar">' + esc(v[3]) + '</td></tr>';
    }).join('');
  }
  function viewVerbs() {
    return head('Irregular verbs', 'الأفعال الشاذة: الأصل والماضي واسم المفعول', 'ابحث بالإنجليزية أو العربية، واضغط 🔊 للنطق. المصدر: الصفحة 160 من الكتاب (للمراجعة الشخصية).') +
      '<div class="lib-bar"><input id="vbQ" type="search" class="lib-q" placeholder="ابحث: go, ذهب…" autocomplete="off"><span class="muted ar" id="vbN" aria-live="polite"></span></div>' +
      '<div class="tbl-wrap"><table class="tbl vbt"><thead><tr><th class="en">Base form</th><th class="en">Past simple</th><th class="en">Past participle</th><th class="ar">المعنى</th></tr></thead><tbody id="vbBody">' + verbRows() + '</tbody></table></div>' +
      '<aside class="credit"><span class="ar">📚 المرجع: Headway Intermediate 5th Edition، Oxford University Press، ص 160.</span></aside>';
  }
  function viewSounds() {
    function grp(t, ar, k) { return '<div class="grp-h"><h2 class="ar">' + ar + ' <span class="en muted" dir="ltr">' + t + '</span></h2></div><div class="snd-grid">' + window.SOUNDS.filter(function (s) { return s[4] === k; }).map(function (s) {
      return '<button type="button" class="snd" data-act="speak" data-t="' + esc(s[2]) + '" data-voice="1" title="' + esc(s[2]) + '"><b class="ipa">' + esc(s[1]) + '</b><span class="en" dir="ltr">' + esc(s[2]) + '</span><i class="ipa muted">' + esc(s[3]) + '</i></button>';
    }).join('') + '</div>'; }
    return head('Phonetic symbols', 'الرموز الصوتية (IPA): اضغط أي رمز لسماع كلمة المثال', 'الصوت من قارئ جهازك (TTS) وهو للتقريب فقط.') + grp('Consonants', 'الأصوات الساكنة', 'c') + grp('Vowels', 'أصوات العلة', 'v') + grp('Diphthongs', 'الأصوات المزدوجة', 'd') +
      '<aside class="credit"><span class="ar">📚 المرجع: Headway Intermediate 5th Edition، Oxford University Press، ص 160. الرموز معلومات صوتية عامة؛ الأمثلة بحسب الكتاب.</span></aside>';
  }
  function bind(name) {
    if (name === 'verbs') { var i = document.getElementById('vbQ'), b = document.getElementById('vbBody'), n = document.getElementById('vbN'); function r() { VS.q = i.value; b.innerHTML = verbRows(); n.textContent = b.rows.length + ' فعل'; } if (i) { i.addEventListener('input', r); r(); } }
  }
  if (window.Tools) {
    window.Tools.views.cls = viewClass; window.Tools.views.verbs = viewVerbs; window.Tools.views.sounds = viewSounds;
    var old = window.Tools.after; window.Tools.after = function (n) { old(n); bind(n); };
  }
})();

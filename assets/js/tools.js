/* ============================================================
   tools.js — القاموس، بطاقات الحفظ، الاختبار، المكتبة، ملخص الطباعة
   ============================================================ */
(function () {
  'use strict';
  var S = Store.state, esc = R.esc;
  var PG = {}; (window.PAGES || []).forEach(function (p) { PG[p.num] = p; });
  var $ = function (s, r) { return (r || document).querySelector(s); };

  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pageLabel(p) { return typeof p === 'number' ? 'p.' + p : 'قواعد'; }

  /* ---------------- القاموس: يُبنى من بيانات الصفحات ---------------- */
  var GL = null;
  function shortEn(en) {
    return en.length <= 34 && en.split(/\s+/).length <= 4 && !/[:?→(]|—/.test(en) && !/[.!]$/.test(en) && /[a-z]/i.test(en) && en !== en.toUpperCase();
  }
  function buildGlossary() {
    var map = {};
    function add(en, ar, p) {
      en = String(en).trim().replace(/\s+/g, ' '); ar = String(ar || '').trim(); if (!en || !ar) return;
      var k = en.toLowerCase();
      if (map[k]) { if (map[k].pages.indexOf(p) < 0) map[k].pages.push(p); return; }
      map[k] = { k: k, en: en, ar: ar, pages: [p] };
    }
    (window.PAGES || []).forEach(function (pg) {
      (pg.sections || []).forEach(function (sec) {
        (sec.blocks || []).forEach(function (b) {
          if (b.t === 'text') (b.vocab || []).forEach(function (v) { add(v[0], v[1], pg.num); });
          if (b.t === 'box' && !/Poster|Pattern|Pairs|Families|Compare|Question words|Phrases/i.test(b.title || '')) (b.items || []).forEach(function (it) { if (it.en && it.ar && shortEn(it.en)) add(it.en, it.ar, pg.num); });
          if (b.t === 'matchset' && b.selectKind === 'word') (b.options || []).forEach(function (o) { add(o.en, o.ar, pg.num); });
        });
      });
    });
    (window.TOPICS || []).forEach(function (t) {
      (t.sections || []).forEach(function (sec) {
        (sec.blocks || []).forEach(function (b) {
          if (b.t !== 'box') return;
          (b.items || []).forEach(function (it) {
            if (!it.en || !it.ar) return;
            var m = /^(.+?) — (.+)$/.exec(it.en), a = /^(.+?) — (.+)$/.exec(it.ar);
            if (m && a && shortEn(m[1]) && shortEn(m[2])) { add(m[1], a[1], 't'); add(m[2], a[2], 't'); }
            else if (shortEn(it.en)) add(it.en, it.ar, 't');
          });
        });
      });
    });
    GL = Object.keys(map).map(function (k) { return map[k]; }).sort(function (a, b) { return a.k < b.k ? -1 : 1; });
    return GL;
  }
  function glossary() { return GL || buildGlossary(); }
  function inScope(e, scope) { return scope === 'all' || (scope === 'diff' ? !!S.diff[e.k] : e.pages.indexOf(scope === 't' ? 't' : +scope) >= 0); }

  var gl = { q: '', scope: 'all', star: false };
  function scopeOptions(cur, withDiff) {
    var o = '<option value="all"' + (cur === 'all' ? ' selected' : '') + '>كل الصفحات</option>';
    if (withDiff) o += '<option value="diff"' + (cur === 'diff' ? ' selected' : '') + '>★ كلماتي الصعبة</option>';
    Object.keys(PG).forEach(function (n) { o += '<option value="' + n + '"' + (String(cur) === n ? ' selected' : '') + '>صفحة ' + n + '</option>'; });
    o += '<option value="t"' + (cur === 't' ? ' selected' : '') + '>صفحات القواعد والكلمات</option>';
    return o;
  }
  function glList() {
    var q = gl.q.trim().toLowerCase(), items = glossary().filter(function (e) {
      if (!inScope(e, gl.scope)) return false; if (gl.star && !S.diff[e.k]) return false;
      return !q || e.k.indexOf(q) >= 0 || e.ar.indexOf(gl.q.trim()) >= 0;
    });
    if (!items.length) return { html: '<p class="muted ar pad">لا توجد كلمات مطابقة.</p>', letters: {} };
    var by = {}, letters = {};
    items.forEach(function (e) { var l = e.k[0].toUpperCase(); if (!/[A-Z]/.test(l)) l = '#'; (by[l] = by[l] || []).push(e); letters[l] = 1; });
    var html = Object.keys(by).sort().map(function (l) {
      return '<section class="gl-sec"><h3 id="gl-' + l + '">' + l + '</h3><div class="gl">' + by[l].map(function (e) {
        return '<div class="gl-i"><button class="spk mini" data-act="speak" data-voice="1" data-t="' + esc(e.en) + '" aria-label="استمع">🔊</button><div class="w"><b>' + esc(e.en) + '</b><span class="ar">' + esc(e.ar) + '</span></div>' +
          '<span class="pg">' + e.pages.slice(0, 2).map(pageLabel).join(' · ') + '</span><button class="star' + (S.diff[e.k] ? ' on' : '') + '" data-ta="star" data-k="' + esc(e.k) + '" aria-label="كلمة صعبة" aria-pressed="' + !!S.diff[e.k] + '">' + (S.diff[e.k] ? '★' : '☆') + '</button></div>';
      }).join('') + '</div></section>';
    }).join('');
    return { html: html, letters: letters, n: items.length };
  }
  function viewGlossary() {
    var r = glList(), az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function (l) { return '<a class="' + (r.letters[l] ? '' : 'off') + '" href="#" data-ta="az" data-l="' + l + '">' + l + '</a>'; }).join('');
    return '<div class="tool"><header class="tool-h"><h1 class="ar">📖 قاموس الوحدة</h1><p class="ar">كل كلمات الصفحات السبع وصفحات القواعد في مكان واحد، تُبحث بالإنجليزية أو العربية. اضغط ☆ لإضافة كلمة إلى «كلماتي الصعبة».</p></header>' +
      '<div class="toolbar"><input type="search" id="glQ" data-ta="glq" placeholder="ابحث… (Search)" value="' + esc(gl.q) + '"><select id="glScope" data-ta="glscope">' + scopeOptions(gl.scope, true) + '</select>' +
      '<button class="chip' + (gl.star ? ' on' : '') + '" data-ta="glstar">★ الصعبة فقط</button><a class="btn ghost sm" href="#/cards">بطاقات الحفظ ←</a></div>' +
      '<div class="az" id="glAz">' + az + '</div><p class="muted ar" id="glCount">' + (r.n || 0) + ' كلمة</p><div id="glList">' + r.html + '</div></div>';
  }
  function glRefresh() {
    var r = glList(); $('#glList').innerHTML = r.html; $('#glCount').textContent = (r.n || 0) + ' كلمة';
    Array.prototype.forEach.call(document.querySelectorAll('#glAz a'), function (a) { a.classList.toggle('off', !r.letters[a.dataset.l]); });
  }

  /* ---------------- بطاقات الحفظ (نظام صناديق ليتنر) ---------------- */
  var DAY = 86400000, STEP = { 1: 0, 2: DAY, 3: 3 * DAY, 4: 7 * DAY };
  var fc = { cfg: { scope: 'all', dir: 'en', mode: 'due' }, q: [], cur: null, flip: false, done: 0, know: 0, active: false, total: 0 };
  function rec(k) { return S.fc[k] || (S.fc[k] = { b: 0, d: 0 }); }
  function dueList() {
    var now = Date.now();
    return glossary().filter(function (e) {
      if (!inScope(e, fc.cfg.scope)) return false;
      var r = S.fc[e.k]; return fc.cfg.mode === 'all' || !r || r.b === 0 || r.d <= now;
    });
  }
  function fcStats() {
    var all = glossary().filter(function (e) { return inScope(e, fc.cfg.scope); }), now = Date.now(), nw = 0, due = 0, mast = 0;
    all.forEach(function (e) { var r = S.fc[e.k]; if (!r || !r.b) nw++; else if (r.d <= now) due++; if (r && r.b >= 4) mast++; });
    return { total: all.length, nw: nw, due: due, mast: mast };
  }
  function viewCards() {
    if (fc.active) return fcSession();
    var st = fcStats();
    return '<div class="tool"><header class="tool-h"><h1 class="ar">🃏 بطاقات الحفظ</h1><p class="ar">تراجع الكلمات بنظام التكرار المتباعد: ما تعرفه يعود بعد وقت أطول، وما لا تعرفه يعود فوراً.</p></header>' +
      '<div class="stat-row"><div class="stat"><b>' + st.total + '</b>كلمات</div><div class="stat"><b>' + st.nw + '</b>جديدة</div><div class="stat"><b>' + st.due + '</b>للمراجعة</div><div class="stat"><b>' + st.mast + '</b>محفوظة</div></div>' +
      '<div class="setup" style="margin-block-start:16px"><label class="f">النطاق<select data-ta="fcscope">' + scopeOptions(fc.cfg.scope, true) + '</select></label>' +
      '<label class="f">الاتجاه<select data-ta="fcdir"><option value="en"' + (fc.cfg.dir === 'en' ? ' selected' : '') + '>إنجليزي ← عربي</option><option value="ar"' + (fc.cfg.dir === 'ar' ? ' selected' : '') + '>عربي ← إنجليزي</option></select></label>' +
      '<label class="f">الكلمات<select data-ta="fcmode"><option value="due"' + (fc.cfg.mode === 'due' ? ' selected' : '') + '>المستحقة والجديدة فقط</option><option value="all"' + (fc.cfg.mode === 'all' ? ' selected' : '') + '>كل الكلمات</option></select></label>' +
      '<button class="btn lg" data-ta="fcstart">ابدأ الجلسة</button><button class="btn ghost sm" data-ta="fcreset">مسح تقدمي في البطاقات</button></div></div>';
  }
  function fcSession() {
    var e = fc.cur;
    if (!e) {
      var pct = fc.total ? Math.round(fc.know / fc.total * 100) : 0;
      return '<div class="tool"><header class="tool-h"><h1 class="ar">🎉 انتهت الجلسة</h1></header><div class="stat-row"><div class="stat"><b>' + fc.total + '</b>بطاقات</div><div class="stat"><b>' + fc.know + '</b>عرفتها من أول مرة</div><div class="stat"><b>' + pct + '%</b>نسبة المعرفة</div></div><div class="btns"><button class="btn" data-ta="fcend">رجوع</button></div></div>';
    }
    var en = fc.cfg.dir === 'en', front = en ? '<div class="big en">' + esc(e.en) + '</div>' : '<div class="big ar">' + esc(e.ar) + '</div>', back = en ? '<div class="big ar">' + esc(e.ar) + '</div>' : '<div class="big en">' + esc(e.en) + '</div>';
    return '<div class="tool"><div class="toolbar noprint"><span class="muted ar">' + (fc.done) + ' / ' + fc.total + ' · المتبقي ' + (fc.q.length + 1) + '</span><button class="btn ghost sm" data-ta="fcend" style="margin-inline-start:auto">إنهاء</button></div>' +
      '<div class="fc-wrap"><div class="fc' + (fc.flip ? ' flip' : '') + '" data-ta="fcflip" tabindex="0" role="button" aria-label="اقلب البطاقة"><div class="fc-in"><div class="fc-f">' + front + '<small class="ar">اضغط للقلب (Space)</small></div><div class="fc-b">' + back + '<small class="en">' + (S.diff[e.k] ? '★ ' : '') + e.pages.slice(0, 2).map(pageLabel).join(' · ') + '</small></div></div></div>' +
      '<div class="btns"><button class="btn ghost" data-act="speak" data-voice="1" data-t="' + esc(e.en) + '">🔊 استمع</button><button class="btn ghost" data-ta="star" data-k="' + esc(e.k) + '" data-fc="1">' + (S.diff[e.k] ? '★ صعبة' : '☆ علّمها صعبة') + '</button></div>' +
      (fc.flip ? '<div class="fc-ans"><button class="btn danger ghost" data-ta="fcno">✖ لم أعرفها (1)</button><button class="btn" data-ta="fcyes">✔ عرفتها (2)</button></div>' : '<div class="fc-ans"><button class="btn" data-ta="fcflip">أظهر الجواب</button></div>') + '</div></div>';
  }
  function fcNext() {
    fc.cur = fc.q.shift() || null; fc.flip = false;
    if (fc.cur && fc.cfg.dir === 'en' && TTS.ok) TTS.speak(fc.cur.en, 1);
  }

  /* ---------------- الاختبار ---------------- */
  var qz = { cfg: { scope: 'all', n: 10, vocab: true, grammar: true, tf: true, fill: true }, run: null };
  function buildPool(cfg) {
    var pool = [], g = glossary().filter(function (e) { return inScope(e, cfg.scope); }), allAr = glossary();
    if (cfg.vocab) {
      g.forEach(function (e, i) {
        var others = shuffle(allAr.filter(function (x) { return x.k !== e.k && x.ar !== e.ar; })).slice(0, 3);
        if (others.length < 3) return;
        if (i % 2 === 0) pool.push({ t: 'mc', q: 'ما معنى «' + e.en + '»؟', qEn: e.en, opts: shuffle([e.ar].concat(others.map(function (o) { return o.ar; }))), ans: e.ar, why: e.en + ' = ' + e.ar, tag: 'مفردات', say: e.en });
        else pool.push({ t: 'mc', q: 'ما الكلمة الإنجليزية لـ «' + e.ar + '»؟', opts: shuffle([e.en].concat(others.map(function (o) { return o.en; }))), ans: e.en, why: e.ar + ' = ' + e.en, tag: 'مفردات', en: true });
      });
    }
    Object.keys(PG).forEach(function (n) {
      if (cfg.scope !== 'all' && cfg.scope !== 'diff' && cfg.scope !== 't' && +cfg.scope !== +n) return;
      if (cfg.scope === 't') return;
      PG[n].sections.forEach(function (sec) {
        sec.blocks.forEach(function (b) {
          if (b.t !== 'q' || b.example) return;
          if (b.kind === 'choice' && cfg.grammar && b.options && b.options.length >= 2 && typeof b.correct === 'number') pool.push({ t: 'mc', q: b.en, en: true, opts: shuffle(b.options.slice()), ans: b.options[b.correct], why: b.why || '', tag: 'p.' + n });
          if (b.kind === 'tf' && cfg.tf && typeof b.answer === 'boolean') pool.push({ t: 'mc', q: 'True or False: ' + b.en, en: true, opts: ['True', 'False'], ans: b.answer ? 'True' : 'False', why: (b.fix ? 'التصحيح: ' + b.fix + '. ' : '') + (b.why || ''), tag: 'p.' + n });
          if (b.kind === 'fill' && cfg.fill && b.answer && R.arr(b.answer).length) pool.push({ t: 'fill', q: (b.prompt || b.en), ans: R.arr(b.answer), why: b.why || '', tag: 'p.' + n });
        });
      });
    });
    (window.TOPICS || []).forEach(function (tp) {
      if (cfg.scope !== 'all' && cfg.scope !== 't') return;
      tp.sections.forEach(function (sec) { sec.blocks.forEach(function (b) {
        if (b.t !== 'q' || b.example) return;
        if (b.kind === 'choice' && cfg.grammar && typeof b.correct === 'number') pool.push({ t: 'mc', q: b.en, en: true, opts: shuffle(b.options.slice()), ans: b.options[b.correct], why: b.why || '', tag: 'قواعد' });
        if (b.kind === 'fill' && cfg.fill && b.answer) pool.push({ t: 'fill', q: (b.prompt || b.en), ans: R.arr(b.answer), why: b.why || '', tag: 'قواعد' });
      }); });
    });
    return shuffle(pool);
  }
  function viewQuiz() {
    if (qz.run) return qzRun();
    var c = qz.cfg, hist = (S.quizHist || []).slice(-8).reverse();
    return '<div class="tool"><header class="tool-h"><h1 class="ar">📝 اختبار المراجعة</h1><p class="ar">أسئلة مولّدة من محتوى الصفحات: معاني الكلمات وأسئلة الاختيار وصح/خطأ وإكمال الجمل. بعد كل سؤال يظهر السبب.</p></header>' +
      '<div class="setup"><label class="f">النطاق<select data-ta="qzscope">' + scopeOptions(c.scope, false) + '</select></label>' +
      '<label class="f">عدد الأسئلة<select data-ta="qzn">' + [5, 10, 15, 20, 30].map(function (n) { return '<option value="' + n + '"' + (c.n === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></label>' +
      '<div class="chips">' + [['vocab', 'معاني الكلمات'], ['grammar', 'اختيار من متعدد'], ['tf', 'صح / خطأ'], ['fill', 'إكمال جملة']].map(function (x) { return '<button class="chip' + (c[x[0]] ? ' on' : '') + '" data-ta="qzt" data-t="' + x[0] + '">' + x[1] + '</button>'; }).join('') + '</div>' +
      '<button class="btn lg" data-ta="qzstart">ابدأ الاختبار</button></div>' +
      (hist.length ? '<h3 class="ar" style="margin-block-start:20px">آخر المحاولات</h3><div class="hist">' + hist.map(function (h) { return '<div class="hist-i"><span class="ar">' + new Date(h.t).toLocaleDateString('ar') + ' · ' + esc(h.scope) + '</span><b>' + h.s + ' / ' + h.n + '</b></div>'; }).join('') + '</div>' : '') + '</div>';
  }
  function qzRun() {
    var r = qz.run, q = r.qs[r.i];
    if (!q) {
      var pct = Math.round(r.score / r.qs.length * 100);
      return '<div class="tool"><header class="tool-h"><h1 class="ar">' + (pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪') + ' نتيجتك: ' + r.score + ' من ' + r.qs.length + ' (' + pct + '%)</h1></header>' +
        (r.wrong.length ? '<h3 class="ar">للمراجعة</h3><div class="hist">' + r.wrong.map(function (w) { return '<div class="hist-i" style="flex-direction:column"><b class="' + (w.q.en ? 'en' : 'ar') + '">' + esc(w.q.q) + '</b><span class="ar">إجابتك: ' + esc(w.got || '—') + ' · الصحيح: <b class="en">' + esc(R.arr(w.q.ans).join(' / ')) + '</b></span>' + (w.q.why ? '<span class="muted ar">' + esc(w.q.why) + '</span>' : '') + '</div>'; }).join('') + '</div>' : '<p class="ar">ممتاز! لا أخطاء.</p>') +
        '<div class="btns"><button class="btn" data-ta="qzstart">اختبار جديد</button><button class="btn ghost" data-ta="qzend">الإعدادات</button></div></div>';
    }
    var body;
    if (q.t === 'mc') {
      body = '<div class="opts">' + q.opts.map(function (o, i) {
        var cls = 'opt'; if (r.picked != null) { if (o === q.ans) cls += ' good'; else if (i === r.picked) cls += ' wrong'; }
        return '<button class="' + cls + '" data-ta="qzpick" data-i="' + i + '"' + (r.picked != null ? ' disabled' : '') + '><span class="' + (/[؀-ۿ]/.test(o) ? 'ar' : 'en') + '" ' + (/[؀-ۿ]/.test(o) ? '' : 'dir="ltr"') + '>' + esc(o) + '</span></button>';
      }).join('') + '</div>';
    } else {
      var shown = r.picked != null;
      body = '<input class="fill en" dir="ltr" id="qzFill" autocomplete="off" spellcheck="false" placeholder="اكتب الإجابة" ' + (shown ? 'disabled value="' + esc(r.got) + '"' : '') + '>' + (shown ? '' : '<div class="btns"><button class="btn" data-ta="qzcheck">تحقق</button></div>');
    }
    var fbk = r.picked != null ? '<div class="fb ' + (r.last ? 'ok' : 'bad') + '">' + (r.last ? '✔ صحيح' : '✖ الصحيح: ' + esc(R.arr(q.ans).join(' / '))) + '</div>' + (q.why ? '<div class="why ar">' + esc(q.why) + '</div>' : '') + '<div class="btns"><button class="btn" data-ta="qznext">' + (r.i + 1 >= r.qs.length ? 'عرض النتيجة' : 'التالي ←') + '</button></div>' : '';
    return '<div class="tool"><div class="qz-card"><div class="qz-top"><span class="ar">سؤال ' + (r.i + 1) + ' من ' + r.qs.length + '</span><span class="ar">' + esc(q.tag) + ' · الدرجة ' + r.score + '</span></div>' +
      '<div class="qz-q ' + (q.en ? 'en' : 'ar') + '" ' + (q.en ? 'dir="ltr"' : '') + '>' + esc(q.q).replace(/_{3,}/g, '_____') + (q.say ? R.spk(q.say, 'mini') : '') + '</div>' + body + fbk + '</div></div>';
  }
  function qzAnswer(given) {
    var r = qz.run, q = r.qs[r.i], ok;
    if (q.t === 'mc') { r.picked = q.opts.indexOf(given); ok = given === q.ans; r.got = given; }
    else { ok = q.ans.map(R.norm).indexOf(R.norm(given)) >= 0; r.picked = 0; r.got = given; }
    r.last = ok; if (ok) r.score++; else r.wrong.push({ q: q, got: r.got });
  }

  /* ---------------- مكتبة الملفات ---------------- */
  var FMT = { pdf: ['PDF', '📄'], pptx: ['PPTX', '📊'], html: ['HTML', '🌐'], docx: ['DOCX', '📝'], mp3: ['MP3', '🎧'], mp4: ['MP4', '🎬'] };
  function viewLib() {
    var files = window.PUBLIC_BUILD ? [] : (window.FILES || []);
    var unitTitle = function (u) { var x = null, rn = false, nm = ''; (window.COURSES || []).forEach(function (c) { c.units.forEach(function (y) { if (y.id === u) { x = y; rn = c.id !== 'headway-b1'; nm = c.title; } }); }); return x ? (rn ? nm + ' — ' : 'Unit ' + x.no + ' — ') + x.title : u; };
    var h = '<div class="tool"><header class="tool-h"><h1 class="ar">📚 الملفات والروابط</h1><p class="ar">ملفات الدروس، اختبارات المستوى، أدلة الذكاء الاصطناعي، المكتبة المرجعية (أساسيات وقواعد ومفردات ومستوى متقدم)، والروابط الخارجية. لكل ملف خارجي مصدره وحقوقه.</p>' +
      '<nav class="pills" aria-label="أقسام المكتبة">' + [['lib-lessons', '🎞 الدروس'], ['lib-book', '📘 Headway'], ['lib-interchange', '📗 Interchange 1'], ['lib-uci', '🎓 UC Irvine'], ['lib-basics', '🌱 أساسيات'], ['lib-grammar', '🧩 قواعد'], ['lib-vocab', '🔤 مفردات'], ['lib-advanced', '🚀 متقدم'], ['lib-worksheets', '📝 أوراق عمل'], ['lib-rino', "🎙 RINO'S"], ['lib-gwriting', '🧩 القواعد والكتابة'], ['lib-cwriting', '✍️ الإبداعية'], ['lib-phonics', '🔊 فونكس'], ['lib-conv', '🗣 المحادثة']].map(function (c) { return '<a href="#/lib/' + c[0].replace('lib-', '') + '">' + c[1] + '</a>'; }).join('') + '<a href="#/oxford">📖 Oxford التفاعلية</a></nav></header>';
    function fileCard(f) {
      var th = (f.thumbs || []).map(function (s, i) { return '<a class="fthumb" href="' + esc(s) + '" data-act="zoom" data-src="' + esc(s) + '" data-cap="' + esc(f.title) + ' — ' + (i + 1) + '"><img src="' + esc(s) + '" alt="" loading="lazy"></a>'; }).join('');
      var fm = Object.keys(f.formats).map(function (k) {
        var m = FMT[k] || [k.toUpperCase(), '📎'], u = encodeURI(f.formats[k]);
        return '<span class="fmtp"><a class="fmt" href="' + esc(u) + '" target="_blank" rel="noopener">' + m[1] + ' فتح ' + m[0] + '</a><a class="fmt dl" href="' + esc(u) + '" download title="تنزيل ' + m[0] + '" aria-label="تنزيل ' + m[0] + '">⬇</a></span>';
      }).join('');
      return '<article class="rcard file" data-k="file" data-q="' + esc(((f.title || '') + ' ' + (f.titleAr || '') + ' ' + (f.desc || '') + ' ' + (f.descEn || '') + ' ' + (f.level || '')).toLowerCase()) + '"><h3 class="en" dir="ltr">' + esc(f.title) + '</h3><b class="ar">' + esc(f.titleAr || '') + '</b>' + (f.descEn ? '<p class="en muted" dir="ltr">' + esc(f.descEn) + '</p>' : '') + '<p class="ar muted">' + esc(f.desc || '') + '</p>' +
        (th ? '<div class="fthumbs">' + th + '</div>' : '') +
        (f.toc ? '<details class="ftoc"><summary class="ar">محتويات الملف (' + f.toc.length + ')</summary><ol class="ar">' + f.toc.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol></details>' : '') +
        (f.level ? '<span class="lvl-b en" dir="ltr">' + esc(f.level) + '</span>' : '') +
        '<div class="fmts">' + fm + (f.lesson ? '<a class="btn sm" href="#/t/' + f.lesson + '">اقرأ الشرح الكامل ←</a>' : '') + (f.page ? '<a class="btn sm" href="#/p/' + f.page + '">المحتوى في الموقع ←</a>' : '') + (f.oxford ? '<a class="btn sm" href="#/oxford">القائمة التفاعلية ←</a>' : '') + '</div>' +
        (f.big ? '<p class="ar muted">ملف ضخم: افتحه للبحث فيه ولا تقرأه متتالياً.</p>' : '') +
        (f.credit ? '<p class="fcredit en" dir="ltr"><b>Source:</b> ' + esc(f.credit) + '</p>' : '') + '</article>';
    }
    h += '<div class="lib-bar" role="search"><input id="libQ" type="search" class="lib-q" placeholder="ابحث في الملفات والروابط…" autocomplete="off" aria-label="بحث في الملفات والروابط"><div class="lib-chips" role="group" aria-label="تصفية">' + [['all', 'الكل'], ['file', '📄 ملفات'], ['link', '🔗 روابط'], ['youtube', '▶ YouTube'], ['whatsapp', '💬 WhatsApp'], ['ai', '✨ AI'], ['classroom', '🎓 Classroom']].map(function (c) { return '<button type="button" class="chip" data-lf="' + c[0] + '" aria-pressed="false">' + c[1] + '</button>'; }).join('') + '</div><span class="muted ar" id="libCount" aria-live="polite"></span></div>';
    var CATS = [['lessons', '🎞 ملفات الدروس', 'lib-lessons'], ['book', '📘 كتاب Headway: القسم الخلفي', 'lib-book'], ['interchange', '📗 Interchange 1: الكتاب والمراجعة والاختبار', 'lib-interchange'], ['uci', '🎓 UC Irvine / Coursera: ESL للمبتدئين', 'lib-uci'], ['placement', '🎯 اختبارات تحديد المستوى', 'lib-placement'], ['ai', '🤖 الذكاء الاصطناعي في التعلّم', 'lib-ai'],
      ['basics', '🌱 أساسيات (A1–A2)', 'lib-basics'], ['grammar', '🧩 قواعد وأزمنة', 'lib-grammar'], ['vocab', '🔤 مفردات وقوائم', 'lib-vocab'], ['advanced', '🚀 مستوى متقدم (C1–C2)', 'lib-advanced'], ['worksheets', '📝 أوراق عمل', 'lib-worksheets'], ['rino', "🎙 RINO'S COURSE: الملفات الأصلية", 'lib-rino'], ['gwriting', '🧩 القواعد والكتابة الأكاديمية (د. نهال الحديدي)', 'lib-gwriting'], ['cwriting', '✍️ الكتابة الإبداعية (أ. سماح مجدي)', 'lib-cwriting'], ['phonics', '🔊 الفونكس (أ. ياسمين محمد خالد)', 'lib-phonics'], ['conv', '🗣 كورس المحادثة (د. نهال الحديدي)', 'lib-conv']];
    CATS.forEach(function (c) {
      var list = files.filter(function (f) { return (f.cat || 'lessons') === c[0]; }); if (!list.length) return;
      h += '<section class="lib-sec" id="' + c[2] + '"><div class="grp-h"><h2 class="ar">' + c[1] + '</h2><span class="ar">' + list.length + ' ' + (list.length > 2 ? 'ملفات' : 'ملف') + '</span></div>' + (['interchange','uci','gwriting','cwriting','phonics','conv'].indexOf(c[0]) >= 0 ? R.cover('cover-lib-' + c[0], 'catc') : '') + '<div class="tiles files">' + list.map(fileCard).join('') + '</div></section>';
    });
    (window.RESOURCES || []).forEach(function (g) {
      h += '<section class="lk-sec"><div class="grp-h"><h2 class="ar">🔗 ' + esc(g.group) + '</h2><span class="ar">' + g.items.length + ' رابط</span></div><div class="tiles links">' + g.items.map(linkCard).join('') + '</div></section>';
    });
    return h + '<p class="ar muted lib-empty" id="libEmpty" hidden>لا توجد نتائج مطابقة. جرّب كلمة أخرى أو اختر «الكل».</p>';
  }
  /* بطاقة رابط بمعاينة: صورة (يوتيوب مباشرة، أو من جلب البيانات) + أيقونة الموقع + النطاق */
  function ytId(u) { var m = /(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{11})/.exec(u || ''); return m ? m[1] : ''; }
  function linkCard(it) {
    var host = ''; try { host = new URL(it.url).hostname.replace(/^www\./, ''); } catch (e) {}
    var yt = ytId(it.url), img = it.img || (yt ? 'https://i.ytimg.com/vi/' + yt + '/hqdefault.jpg' : '');
    var fav = host ? 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(host) + '&sz=64' : '';
    var t = String(it.type || 'LINK');
    return '<a class="lcard" data-k="link" data-t="' + esc(t) + '" data-url="' + esc(it.url || '') + '" data-q="' + esc((it.title + ' ' + (it.desc || '') + ' ' + t + ' ' + host).toLowerCase()) + '" href="' + esc(it.url || '#') + '" target="_blank" rel="noopener noreferrer">' +
      '<span class="lc-img' + (img ? '' : ' noimg') + '">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.classList.add(\'noimg\');this.remove()">' : '') + '<i class="lc-ph" aria-hidden="true">' + (/YOUTUBE/.test(t) ? '▶' : /WHATSAPP/.test(t) ? '💬' : /CLASSROOM/.test(t) ? '🎓' : /AI/.test(t) ? '✨' : /DICT/.test(t) ? '📖' : '🔗') + '</i><em class="rtype">' + esc(t) + '</em></span>' +
      '<span class="lc-b"><b class="ar lc-t">' + esc(it.title) + '</b><span class="ar muted lc-d">' + esc(it.desc || '') + '</span>' +
      '<span class="lc-f en" dir="ltr">' + (fav ? '<img src="' + esc(fav) + '" alt="" width="16" height="16" loading="lazy" referrerpolicy="no-referrer">' : '') + esc(host) + ' ↗</span></span></a>';
  }
  /* جلب بيانات الرابط (og:image/العنوان) عند توفر الإنترنت، مع تخزين مؤقت */
  function linkMeta() {
    var cache = {}; try { cache = JSON.parse(localStorage.getItem('hw1.lp') || '{}'); } catch (e) {}
    var cards = Array.prototype.filter.call(document.querySelectorAll('.lcard .lc-img.noimg'), function (c) { return !/youtu/.test(c.parentNode.dataset.url || ''); });
    var q = cards.slice(), run = 0;
    function apply(card, d) { if (!d || !d.image) return; var box = card.querySelector('.lc-img'); if (!box || !box.classList.contains('noimg')) return; var im = new Image(); im.alt = ''; im.loading = 'lazy'; im.referrerPolicy = 'no-referrer'; im.onload = function () { box.classList.remove('noimg'); box.insertBefore(im, box.firstChild); }; im.src = d.image; }
    function next() {
      if (!navigator.onLine || run >= 3 || document.documentElement.getAttribute('data-lp') === '0') return; var c = q.shift(); if (!c) return; var u = c.dataset.url; if (!u) return next(); run++;
      if (cache[u] && (Date.now() - cache[u].t) < 6048e5) { apply(c, cache[u]); run--; return next(); }
      var ctl = window.AbortController ? new AbortController() : null, tm = setTimeout(function () { ctl && ctl.abort(); }, 6000);
      fetch('https://api.microlink.io/?url=' + encodeURIComponent(u), ctl ? { signal: ctl.signal } : {}).then(function (r) { return r.json(); }).then(function (j) {
        var d = { t: Date.now(), image: j && j.data && j.data.image && j.data.image.url || '', title: j && j.data && j.data.title || '' }; cache[u] = d; try { localStorage.setItem('hw1.lp', JSON.stringify(cache)); } catch (e) {} apply(c, d);
      }).catch(function () { cache[u] = { t: Date.now(), image: '' }; }).then(function () { clearTimeout(tm); run--; next(); });
      next();
    }
    next();
  }
  /* فلاتر الملفات والروابط */
  var LF = { q: '', k: 'all' };
  function libBind() {
    var box = document.getElementById('libQ'), chips = document.querySelectorAll('[data-lf]');
    function run() {
      var q = LF.q.trim().toLowerCase(), shown = 0;
      Array.prototype.forEach.call(document.querySelectorAll('.rcard.file, .lcard'), function (c) {
        var k = c.dataset.k, t = c.dataset.t || '';
        var okK = LF.k === 'all' || (LF.k === 'file' && k === 'file') || (LF.k === 'link' && k === 'link') || (k === 'link' && LF.k.toUpperCase() === t.split(' ')[0].toUpperCase());
        var ok = okK && (!q || (c.dataset.q || '').indexOf(q) >= 0); c.hidden = !ok; if (ok) shown++;
      });
      Array.prototype.forEach.call(document.querySelectorAll('.lib-sec, .lk-sec'), function (sec) { sec.hidden = !sec.querySelector('.rcard:not([hidden]), .lcard:not([hidden])'); });
      var e = document.getElementById('libEmpty'); if (e) e.hidden = shown > 0;
      var n = document.getElementById('libCount'); if (n) n.textContent = shown + ' نتيجة';
      Array.prototype.forEach.call(chips, function (b) { b.classList.toggle('on', b.dataset.lf === LF.k); b.setAttribute('aria-pressed', b.dataset.lf === LF.k ? 'true' : 'false'); });
    }
    if (box) { box.value = LF.q; box.addEventListener('input', function () { LF.q = box.value; run(); }); }
    Array.prototype.forEach.call(chips, function (b) { b.addEventListener('click', function () { LF.k = b.dataset.lf; run(); }); });
    run(); linkMeta();
  }
  /* ---------------- قوائم Oxford التفاعلية ---------------- */
  var OX = { q: '', lvl: 'all', list: 'all', st: 'all', n: 120 }, OXK = null;
  function oxKnown() { if (OXK) return OXK; try { OXK = JSON.parse(localStorage.getItem('hw1.ox') || '{}'); } catch (e) { OXK = {}; } return OXK; }
  function oxSave() { try { localStorage.setItem('hw1.ox', JSON.stringify(OXK)); } catch (e) {} }
  function oxRows() {
    var k = oxKnown(), q = OX.q.trim().toLowerCase();
    return (window.OXFORD || []).map(function (r, i) { var a = r.split('|'); return { i: i, w: a[0], p: a[1], l: a[2], s: a[3], a: (window.OXFORD_AR || [])[i] || '' }; }).filter(function (r) {
      if (OX.lvl !== 'all' && r.l !== OX.lvl) return false;
      if (OX.list !== 'all' && r.s !== OX.list) return false;
      if (OX.st === 'known' && !k[r.i]) return false;
      if (OX.st === 'unknown' && k[r.i]) return false;
      if (q && r.w.toLowerCase().indexOf(q) < 0 && r.a.indexOf(q) < 0) return false;
      return true;
    });
  }
  function oxList() {
    var rows = oxRows(), k = oxKnown(), shown = rows.slice(0, OX.n);
    return '<p class="ar muted" id="oxCount">' + rows.length + ' كلمة' + (rows.length > shown.length ? ' (يظهر ' + shown.length + ')' : '') + '</p><ul class="oxl">' + shown.map(function (r) {
      return '<li class="' + (k[r.i] ? 'known' : '') + '"><button type="button" class="oxk" data-ox="' + r.i + '" aria-pressed="' + (k[r.i] ? 'true' : 'false') + '" title="أعرفها">' + (k[r.i] ? '✔' : '○') + '</button>' +
        '<span class="w en" dir="ltr"><b>' + esc(r.w) + '</b> <i>' + esc(r.p) + '</i></span><span class="oxa ar">' + esc(r.a) + '</span><span class="lvl-b en" dir="ltr">' + r.l + '</span><span class="lvl-b alt en" dir="ltr">O' + r.s + '</span>' +
        '<button type="button" class="oxs" data-oxs="' + esc(r.w.replace(/\s*\(.*$/, '')) + '" aria-label="نطق" title="نطق">🔊</button>' +
        '<a class="oxd en" dir="ltr" target="_blank" rel="noopener" href="https://www.oxfordlearnersdictionaries.com/definition/english/' + encodeURIComponent(r.w.replace(/\s*\(.*$/, '').replace(/,.*$/, '').trim().toLowerCase().replace(/\s+/g, '-')) + '">Oxford ↗</a></li>';
    }).join('') + '</ul>' + (rows.length > shown.length ? '<p><button type="button" class="btn ghost" id="oxMore">عرض المزيد</button></p>' : '');
  }
  function viewOxford() {
    var all = window.OXFORD || [], k = oxKnown(), kn = Object.keys(k).filter(function (x) { return k[x]; }).length;
    function chips(name, arr) { return '<div class="chips" role="group">' + arr.map(function (a) { return '<button type="button" class="chip' + (OX[name] === a[0] ? ' on' : '') + '" data-oxf="' + name + '" data-v="' + a[0] + '">' + a[1] + '</button>'; }).join('') + '</div>'; }
    return '<div class="tool"><header class="tool-h"><h1 class="ar">🔤 قوائم Oxford 3000 و5000</h1><p class="ar">أهم كلمات الإنجليزية حسب مستوى CEFR (' + all.length + ' مدخلاً). ابحث، صفِّ بالمستوى، وعلّم الكلمات التي تعرفها (تُحفظ في متصفحك). كل كلمة لها رابط قاموس Oxford ونطق.</p>' +
      '<p class="fcredit en" dir="ltr"><b>Source:</b> The Oxford 3000™ and Oxford 5000™ by CEFR level, © Oxford University Press (oxfordlearnersdictionaries.com). Reproduced for personal study only; The Arabic glosses are our own helper translations (not from Oxford).</p></header>' +
      '<div class="oxbar"><input type="search" id="oxQ" class="en" dir="ltr" placeholder="Search a word…" value="' + esc(OX.q) + '" autocomplete="off">' +
      chips('lvl', [['all', 'كل المستويات'], ['A1', 'A1'], ['A2', 'A2'], ['B1', 'B1'], ['B2', 'B2'], ['C1', 'C1']]) + chips('list', [['all', '3000 + 5000'], ['3', 'Oxford 3000'], ['5', 'Oxford 5000']]) + chips('st', [['all', 'الكل'], ['unknown', 'لا أعرفها'], ['known', 'أعرفها']]) +
      '<p class="ar muted" id="oxProg">أعرف ' + kn + ' من ' + all.length + '</p></div><div id="oxOut">' + oxList() + '</div></div>';
  }
  function oxBind() {
    var out = document.getElementById('oxOut'); if (!out) return;
    function refresh() { out.innerHTML = oxList(); var kn = Object.keys(oxKnown()).filter(function (x) { return OXK[x]; }).length; var pr = document.getElementById('oxProg'); if (pr) pr.textContent = 'أعرف ' + kn + ' من ' + (window.OXFORD || []).length; }
    document.getElementById('oxQ').addEventListener('input', function (e) { OX.q = e.target.value; OX.n = 120; refresh(); });
    document.querySelector('.oxbar').addEventListener('click', function (e) {
      var b = e.target.closest('[data-oxf]'); if (!b) return;
      OX[b.dataset.oxf] = b.dataset.v; OX.n = 120;
      Array.prototype.forEach.call(document.querySelectorAll('[data-oxf="' + b.dataset.oxf + '"]'), function (c) { c.classList.toggle('on', c === b); });
      refresh();
    });
    out.addEventListener('click', function (e) {
      var k = e.target.closest('[data-ox]'), s = e.target.closest('[data-oxs]'), m = e.target.closest('#oxMore');
      if (k) { var i = k.dataset.ox; oxKnown()[i] = !OXK[i]; if (!OXK[i]) delete OXK[i]; oxSave(); refresh(); }
      else if (s) { try { TTS.speak(s.dataset.oxs, 'en'); } catch (er) {} }
      else if (m) { OX.n += 200; refresh(); }
    });
  }
  /* ---------------- ملخص الطباعة ---------------- */
  function viewSheet(n) {
    var pg = PG[n]; if (!pg) return '<p class="ar pad">الصفحة غير موجودة</p>';
    var vocab = [], notes = [], answers = [];
    pg.sections.forEach(function (sec) {
      sec.blocks.forEach(function (b) {
        if (b.t === 'text') (b.vocab || []).forEach(function (v) { vocab.push(v); });
        if (b.t === 'note') notes.push(b.ar);
        if (b.t === 'q' && !b.example && b.answer != null) answers.push((b.n || '') + '. ' + (b.kind === 'choice' ? b.options[b.correct] : b.kind === 'tf' ? (b.answer ? 'True' : 'False') : R.arr(b.answer).join(' / ')));
        if (b.t === 'matchset') b.items.forEach(function (it) { if (!it.example) answers.push(it.n + '. ' + it.answer); });
      });
    });
    var seen = {}; vocab = vocab.filter(function (v) { var k = v[0].toLowerCase(); if (seen[k]) return false; seen[k] = 1; return true; });
    return '<div class="tool"><div class="toolbar noprint"><a class="btn ghost sm" href="#/p/' + n + '">→ الصفحة</a><button class="btn sm" data-ta="print">🖨 طباعة / حفظ PDF</button></div><div class="sheet">' +
      '<h1 class="en" dir="ltr">p.' + n + ' — ' + esc(pg.title) + '</h1><div class="ar">' + esc(pg.titleAr || '') + '</div>' +
      '<h2 class="ar">ملخص الصفحة</h2><div class="ar">' + esc(pg.summaryAr || '') + '</div>' +
      (vocab.length ? '<h2 class="ar">المفردات (' + vocab.length + ')</h2><ul class="cols">' + vocab.map(function (v) { return '<li class="vp"><b>' + esc(v[0]) + '</b><span class="ar">' + esc(v[1]) + '</span></li>'; }).join('') + '</ul>' : '') +
      (notes.length ? '<h2 class="ar">قواعد وملاحظات</h2><ul class="ar">' + notes.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '') +
      (answers.length ? '<h2 class="ar">الحلول السريعة</h2><ul class="cols en" dir="ltr">' + answers.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '') +
      '</div></div>';
  }

  /* ---------------- أحداث الأدوات ---------------- */
  function rerender() { document.dispatchEvent(new CustomEvent('tools-rerender')); }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-ta]'); if (!t) return; var a = t.dataset.ta;
    if (a === 'az') { e.preventDefault(); var el = document.getElementById('gl-' + t.dataset.l); if (el) el.scrollIntoView({ block: 'start' }); return; }
    if (a === 'star') { var k = t.dataset.k; if (S.diff[k]) delete S.diff[k]; else S.diff[k] = 1; Store.saveState(); if (t.dataset.fc) rerender(); else { t.classList.toggle('on', !!S.diff[k]); t.textContent = S.diff[k] ? '★' : '☆'; } return; }
    if (a === 'glstar') { gl.star = !gl.star; t.classList.toggle('on', gl.star); glRefresh(); return; }
    if (a === 'print') { window.print(); return; }
    if (a === 'fcflip') { fc.flip = !fc.flip; rerender(); return; }
    if (a === 'fcstart') { fc.q = shuffle(dueList()); fc.total = fc.q.length; fc.done = 0; fc.know = 0; fc.active = true; fc.seen = {}; fcNext(); rerender(); return; }
    if (a === 'fcend') { fc.active = false; fc.cur = null; rerender(); return; }
    if (a === 'fcreset') { if (confirm('مسح تقدم البطاقات؟')) { S.fc = {}; Store.saveState(); rerender(); } return; }
    if (a === 'fcyes' || a === 'fcno') {
      var e0 = fc.cur, r = rec(e0.k), now = Date.now();
      if (a === 'fcyes') { if (!fc.seen[e0.k]) fc.know++; r.b = Math.min((r.b || 0) + 1, 4); r.d = now + STEP[r.b]; }
      else { r.b = 1; r.d = now; fc.q.push(e0); fc.q = fc.q.slice(0, 40); }
      fc.seen[e0.k] = 1; fc.done = fc.total - fc.q.length; Store.saveState(); fcNext(); rerender(); return;
    }
    if (a === 'qzt') { qz.cfg[t.dataset.t] = !qz.cfg[t.dataset.t]; rerender(); return; }
    if (a === 'qzstart') {
      var pool = buildPool(qz.cfg); if (!pool.length) { alert('لا توجد أسئلة كافية لهذا الاختيار.'); return; }
      qz.run = { qs: pool.slice(0, qz.cfg.n), i: 0, score: 0, wrong: [], picked: null }; rerender(); return;
    }
    if (a === 'qzpick') { if (qz.run.picked != null) return; qzAnswer(qz.run.qs[qz.run.i].opts[+t.dataset.i]); rerender(); return; }
    if (a === 'qzcheck') { var inp = $('#qzFill'); if (qz.run.picked != null) return; qzAnswer(inp.value); rerender(); return; }
    if (a === 'qznext') {
      var r2 = qz.run; r2.i++; r2.picked = null;
      if (r2.i >= r2.qs.length) { S.quizHist.push({ t: Date.now(), s: r2.score, n: r2.qs.length, scope: r2.scope || (qz.cfg.scope === 'all' ? 'كل المحتوى' : String(qz.cfg.scope)) }); S.quizHist = S.quizHist.slice(-30); Store.saveState(); }
      rerender(); return;
    }
    if (a === 'qzend') { qz.run = null; rerender(); return; }
  });
  document.addEventListener('input', function (e) {
    var t = e.target; if (t.dataset && t.dataset.ta === 'glq') { gl.q = t.value; glRefresh(); }
  });
  document.addEventListener('change', function (e) {
    var t = e.target, a = t.dataset && t.dataset.ta; if (!a) return;
    if (a === 'glscope') { gl.scope = t.value; glRefresh(); }
    if (a === 'fcscope') { fc.cfg.scope = t.value; rerender(); }
    if (a === 'fcdir') { fc.cfg.dir = t.value; }
    if (a === 'fcmode') { fc.cfg.mode = t.value; rerender(); }
    if (a === 'qzscope') qz.cfg.scope = t.value;
    if (a === 'qzn') qz.cfg.n = +t.value;
  });
  document.addEventListener('keydown', function (e) {
    var inField = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
    if (qz.run && qz.run.picked == null && e.key === 'Enter' && e.target.id === 'qzFill') { qzAnswer(e.target.value); rerender(); return; }
    if (qz.run && qz.run.picked != null && e.key === 'Enter') { var n = document.querySelector('[data-ta="qznext"]'); if (n) n.click(); return; }
    if (!fc.active || !fc.cur || inField) return;
    if (e.key === ' ') { e.preventDefault(); fc.flip = !fc.flip; rerender(); }
    else if (fc.flip && e.key === '1') document.querySelector('[data-ta="fcno"]').click();
    else if (fc.flip && e.key === '2') document.querySelector('[data-ta="fcyes"]').click();
  });

  window.Tools = {
    views: { glossary: viewGlossary, cards: viewCards, quiz: viewQuiz, lib: viewLib, sheet: viewSheet, oxford: viewOxford },
    after: function (name) { if (name === 'lib') libBind(); if (name === 'oxford') oxBind(); },
    glossary: glossary,
    due: function () { return fcStats().due; },
    reset: function () { gl = { q: '', scope: 'all', star: false }; }
  };
})();

/* ============================================================
   app.js — التنقل والواجهة والإعدادات والبحث
   ============================================================ */
(function () {
  'use strict';
  var St = Store.settings, S = Store.state, esc = R.esc;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var THEMES = [
    ['paper', 'ورق', '#f7f5f0', '#2f6fed', 'day'], ['snow', 'ثلج', '#ffffff', '#0e9f8e', 'day'], ['mint', 'نعناع', '#eef8f2', '#1f9d63', 'day'], ['sand', 'رمل', '#f6efe3', '#c26a2c', 'day'],
    ['midnight', 'منتصف الليل', '#10172a', '#6ea8ff', 'night'], ['charcoal', 'فحم', '#1d1f23', '#f2b84b', 'night'], ['oled', 'أسود تام', '#000000', '#5ee0a0', 'night'],
    ['sepia', 'سيبيا', '#f1e6cf', '#8a5a2b', 'read'], ['contrast', 'تباين عالٍ', '#000000', '#ffe600', 'read'],
    ['aurora', 'شفق', 'linear-gradient(135deg,#0f2027,#2c5364 55%,#43cea2)', '#43cea2', 'grad'], ['sunset', 'غروب', 'linear-gradient(135deg,#ff9966,#ff5e62 55%,#6a3093)', '#ff5e62', 'grad'],
    ['ocean', 'محيط', 'linear-gradient(135deg,#0575e6,#021b79)', '#7dd3ff', 'grad'], ['forest', 'غابة', 'linear-gradient(135deg,#134e5e,#71b280)', '#d6f5a8', 'grad'], ['grape', 'عنب', 'linear-gradient(135deg,#41295a,#2f0743 50%,#8e2de2)', '#d9a6ff', 'grad'],
    ['auto', 'تلقائي', 'linear-gradient(90deg,#fbfaf7 50%,#10172a 50%)', '#2f6fed', 'auto']
  ];
  var ACCENTS = ['#2f6fed', '#0e9f8e', '#1f9d63', '#e8590c', '#d6336c', '#7048e8', '#c92a2a', '#495057'];
  var AR_FONTS = { cairo: ['Cairo', 'Cairo'], tajawal: ['Tajawal', 'Tajawal'], plex: ['IBM Plex Sans Arabic', 'IBM Plex Sans Arabic'], naskh: ['Noto Naskh Arabic', 'نسخ'], amiri: ['Amiri', 'Amiri (كلاسيكي)'], system: ['system-ui', 'خط النظام'] };
  var EN_FONTS = { inter: ['Inter', 'Inter'], atkinson: ['Atkinson Hyperlegible', 'Atkinson (واضح للقراءة)'], lora: ['Lora', 'Lora (serif)'], merri: ['Merriweather', 'Merriweather (serif)'], system: ['system-ui', 'خط النظام'], mono: ['ui-monospace, Menlo, monospace', 'Monospace'] };
  var LAYOUTS = [['side-right', 'قائمة جانبية'], ['side-left', 'قائمة يسار'], ['top', 'قائمة علوية'], ['grid', 'عمودان كثيف'], ['focus', 'تركيز']];
  var GROUPS = {
    appearance: ['theme', 'accent', 'radius', 'shadows', 'glass', 'bgStyle', 'cardStyle', 'deco', 'grayscale', 'dimImages', 'hiContrastText'],
    fonts: ['arFont', 'enFont', 'size', 'lh', 'ls', 'para', 'align', 'fontWeight', 'wordSpacing', 'maxLine'],
    layout: ['width', 'density', 'layout', 'sideWidth', 'viewMode', 'secOpen', 'showPills', 'stickyNav', 'progressBar', 'compactHead'],
    show: ['showAr', 'showExplain', 'showVocab', 'showAnswers', 'showAudio', 'showNotes', 'showInstrEn', 'showImages', 'showTags'],
    access: ['reduceMotion', 'underlineLinks', 'ruler', 'bigTargets', 'strongFocus'],
    float: ['gearFloat', 'gearSide', 'toTopStyle', 'toTopSide', 'showUtil', 'showFooter', 'showGallery', 'bgArt'],
    behave: ['scrollTopOnNav', 'autoPauseMedia', 'sfx', 'haptics', 'linkPreview', 'confirmReset'],
    voice: ['voice1', 'voice2', 'voice3', 'voiceAr', 'voiceAll', 'ttsRate', 'ttsPitch']
  };

  /* ---------------- تطبيق الإعدادات ---------------- */
  function resolveTheme() { return St.theme === 'auto' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'midnight' : 'paper') : St.theme; }
  function inkFor(hex) { var m = /^#?([0-9a-f]{6})$/i.exec(hex || ''); if (!m) return '#fff'; var n = parseInt(m[1], 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) > 150 ? '#111' : '#fff'; }
  var stepOn = false;
  function apply() {
    var root = document.documentElement, body = document.body;
    root.setAttribute('data-theme', resolveTheme()); root.setAttribute('data-layout', St.layout); root.setAttribute('data-density', St.density);
    root.setAttribute('data-width', St.width); root.setAttribute('data-radius', St.radius); root.setAttribute('data-side', St.sideWidth);
    root.style.setProperty('--fs', St.size + 'px'); root.style.setProperty('--lh', St.lh); root.style.setProperty('--ls', St.ls + 'em'); root.style.setProperty('--para', St.para);
    root.style.setProperty('--f-ar', '"' + (AR_FONTS[St.arFont] || AR_FONTS.cairo)[0] + '", "Segoe UI", Tahoma, sans-serif');
    root.style.setProperty('--f-en', '"' + (EN_FONTS[St.enFont] || EN_FONTS.inter)[0].replace(/"/g, '') + '", system-ui, -apple-system, "Segoe UI", sans-serif');
    if (St.accent) { root.style.setProperty('--accent', St.accent); root.style.setProperty('--accent-ink', inkFor(St.accent)); } else { root.style.removeProperty('--accent'); root.style.removeProperty('--accent-ink'); }
    var c = { 'hide-ar': !St.showAr, 'hide-explain': !St.showExplain, 'hide-vocab': !St.showVocab, 'hide-answers': !St.showAnswers, 'hide-audio': !St.showAudio, 'hide-notes': !St.showNotes, 'hide-instr': !St.showInstrEn, 'hide-images': !St.showImages, 'hide-tags': !St.showTags,
      'reduce-motion': St.reduceMotion, 'ul-links': St.underlineLinks, 'side-collapsed': !St.sidebarOpen, 'no-sticky-nav': !St.stickyNav, 'hide-progress': !St.progressBar, 'compact-head': St.compactHead, 'no-shadow': !St.shadows, 'no-glass': !St.glass, 'ruler': St.ruler, 'big-targets': St.bigTargets, 'strong-focus': St.strongFocus, 'align-justify': St.align === 'justify', 'no-deco': !St.deco, 'gray': St.grayscale, 'dim-img': St.dimImages, 'hi-text': St.hiContrastText, 'no-util': !St.showUtil, 'no-footer': !St.showFooter, 'no-gallery': !St.showGallery, 'no-bgart': !St.bgArt, 'tt-left': St.toTopSide === 'left', 'tt-plain': St.toTopStyle === 'plain', 'tt-off': St.toTopStyle === 'off', 'gear-left': St.gearSide !== 'right', 'gear-right': St.gearSide === 'right', 'maxline': +St.maxLine > 0 };
    root.setAttribute('data-bg', St.bgStyle); root.setAttribute('data-lp', St.linkPreview === false ? '0' : '1'); root.setAttribute('data-card', St.cardStyle); root.style.setProperty('--fw', St.fontWeight); root.style.setProperty('--ws', St.wordSpacing + 'em'); root.style.setProperty('--maxline', (+St.maxLine || 0) + 'ch'); gearUpdate();
    Object.keys(c).forEach(function (k) { body.classList.toggle(k, !!c[k]); });
    var pills = $('.pills'); if (pills) pills.style.display = St.showPills ? '' : 'none';
    if ($('.page')) setStepMode();
  }
  matchMedia('(prefers-color-scheme: dark)').addEventListener && matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { if (St.theme === 'auto') apply(); });
  function gearUpdate() {
    var g = document.getElementById('gearFloat'); if (!g) return;
    var br = document.querySelector('.site-brand'), hdrGone = !br || br.getBoundingClientRect().bottom < 0 || document.body.classList.contains('no-util') && window.scrollY > 80;
    g.hidden = St.gearFloat === 'off' ? true : (St.gearFloat === 'always' ? false : !hdrGone);
  }
  var _ac = null;
  function sfx(res) {
    try {
      if (St.haptics && navigator.vibrate) navigator.vibrate(res === 'ok' ? 18 : [30, 40, 30]);
      if (!St.sfx) return; _ac = _ac || new (window.AudioContext || window.webkitAudioContext)();
      var o = _ac.createOscillator(), gn = _ac.createGain(), t = _ac.currentTime; o.connect(gn); gn.connect(_ac.destination);
      o.type = 'sine'; o.frequency.setValueAtTime(res === 'ok' ? 660 : 220, t); if (res === 'ok') o.frequency.setValueAtTime(880, t + 0.09);
      gn.gain.setValueAtTime(0.0001, t); gn.gain.exponentialRampToValueAtTime(0.12, t + 0.02); gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.28); o.start(t); o.stop(t + 0.3);
    } catch (e) {}
  }
  function set(k, v) { St[k] = v; Store.saveSettings(); apply(); }
  function toast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('show'); }, 2200); }

  /* ---------------- البيانات ---------------- */
  var COURSE = window.COURSES[0], PG = {}, ORDER = [], TP = {};
  window.PAGES.forEach(function (p) { PG[p.num] = p; });
  (window.TOPICS || []).forEach(function (t) { TP[t.id] = t; });
  COURSE.units.forEach(function (u) { u.pages.forEach(function (n) { if (PG[n]) ORDER.push(n); }); });
  var RINO = (window.COURSES || [])[1], RORDER = [];
  if (RINO) RINO.units.forEach(function (u) { u.pages.forEach(function (n) { if (PG[n]) RORDER.push(n); }); });
  var IC = (window.COURSES || [])[2], IORDER = [];
  if (IC) IC.units.forEach(function (u) { u.pages.forEach(function (n) { if (PG[n]) IORDER.push(n); }); });
  var GW = (window.COURSES || [])[3], GORDER = [];
  if (GW) GW.units.forEach(function (u) { u.pages.forEach(function (n) { if (PG[n]) GORDER.push(n); }); });
  var CV = (window.COURSES || [])[4], VORDER = [];
  if (CV) CV.units.forEach(function (u) { u.pages.forEach(function (n) { if (PG[n]) VORDER.push(n); }); });
  var ALL = ORDER.concat(RORDER, IORDER, GORDER, VORDER);
  function ordOf(n) { return RORDER.indexOf(n) >= 0 ? RORDER : IORDER.indexOf(n) >= 0 ? IORDER : GORDER.indexOf(n) >= 0 ? GORDER : VORDER.indexOf(n) >= 0 ? VORDER : ORDER; }
  function progress() { var d = ALL.filter(function (n) { return S.done[n]; }).length; return { d: d, t: ALL.length, p: ALL.length ? Math.round(d / ALL.length * 100) : 0 }; }
  function chipKind(k) { return (window.KIND_AR || {})[k] || k; }

  /* ---------------- القائمة الجانبية ---------------- */
  function nl(href, icon, text, active, extra) { return '<a class="nl' + (active ? ' act' : '') + '" href="' + href + '"><span class="i">' + icon + '</span><span class="t">' + text + '</span>' + (extra || '') + '</a>'; }
  var SIDE_NAMES = { 'headway-b1': ['📘', 'Headway B1'], rino: ['🎙', "Rino's Course"], interchange: ['💬', 'Interchange 1'], gwriting: ['🧩', 'Grammar & Writing'], conversation: ['🗣', 'Conversation'] };
  var sideOpen = {}, sideQ = '';
  function sidePage(n, active) { return '<a class="nl page' + (active === 'p' + n ? ' act' : '') + '" href="#/p/' + n + '"><span class="n">' + n + '</span><span class="t en" dir="ltr">' + esc(PG[n].title) + '</span>' + (S.bm[n] ? '<i class="st">★</i>' : '') + (S.done[n] ? '<i class="ck">✔</i>' : '') + '</a>'; }
  function sideBox(key, icon, label, badge, inner, isActive, cls) {
    var open = sideOpen[key] != null ? sideOpen[key] : isActive;
    return '<details class="sg ' + (cls || '') + '" data-k="' + key + '"' + (open ? ' open' : '') + '><summary><span class="sgi">' + icon + '</span><span class="sgt">' + label + '</span>' + (badge ? '<span class="sgb">' + badge + '</span>' : '') + '</summary><div class="sgc">' + inner + '</div></details>';
  }
  function renderSide(active) {
    var p = progress(), due = Tools.due(), C = window.COURSES || [], courseHtml = '';
    C.forEach(function (c) {
      var all = [], inner = '';
      c.units.forEach(function (u) {
        var pgs = u.pages.filter(function (n) { return PG[n]; }); if (!pgs.length) return; all = all.concat(pgs);
        var single = c.units.length === 1;
        inner += (single ? '' : '<div class="su">Unit ' + u.no + ' · <span class="en" dir="ltr">' + esc(u.title) + '</span></div>') + pgs.map(function (n) { return sidePage(n, active); }).join('');
      });
      if (!all.length) return;
      var d = all.filter(function (n) { return S.done[n]; }).length, nm = SIDE_NAMES[c.id] || ['📗', c.title], act = all.some(function (n) { return active === 'p' + n; });
      courseHtml += sideBox('c-' + c.id, nm[0], '<span class="en" dir="ltr">' + esc(nm[1]) + '</span>', '<span dir="ltr">' + d + '/' + all.length + '</span>', inner, act, 'course');
    });
    var lessons = (window.TOPICS || []).filter(function (t) { return t.group === 'lessons'; }).map(function (t) { return '<a class="nl' + (active === 't' + t.id ? ' act' : '') + '" href="#/t/' + t.id + '"><span class="i">🎞</span><span class="t">' + esc(t.titleAr) + '</span></a>'; }).join('');
    var practice = nl('#/cards', '🃏', 'بطاقات الحفظ', active === 'cards', due ? '<span class="cnt">' + due + '</span>' : '') + nl('#/quiz', '📝', 'اختبار المراجعة', active === 'quiz') + nl('#/class', '🎓', 'الصف والواجبات', active === 'class');
    var refs = nl('#/glossary', '📖', 'قاموس الوحدة', active === 'glossary') + nl('#/grammar', '🧩', 'القواعد', active === 'grammar') + nl('#/words', '🔤', 'الأضداد وعائلات الكلمات', active === 'words') + nl('#/oxford', '🔤', 'قوائم Oxford التفاعلية', active === 'oxford') + nl('#/verbs', '🔁', 'الأفعال الشاذة', active === 'verbs') + nl('#/sounds', '🔈', 'الرموز الصوتية', active === 'sounds');
    var lib = nl('#/lib', '📚', 'كل الملفات والروابط', active === 'lib') + nl('#/lib/placement', '🎯', 'اختبارات تحديد المستوى', false) + nl('#/lib/ai', '🤖', 'الذكاء الاصطناعي في التعلّم', false);
    var h = '<div class="side-in"><div class="side-prog"><div class="prog"><i style="width:' + p.p + '%"></i></div><small class="ar">' + p.d + ' من ' + p.t + ' صفحات مُراجَعة (' + p.p + '%)</small></div>' +
      '<div class="side-top">' + nl('#/', '🏠', 'الرئيسية', active === 'home') + nl('#/saved', '★', 'المحفوظات', active === 'saved') + nl('#/guide', '🧭', 'دليل المستخدم', active === 'guide') + '</div>' +
      '<input class="side-q ar" type="search" id="sideQ" placeholder="ابحث في القائمة…" aria-label="ابحث في القائمة الجانبية" value="' + esc(sideQ) + '">' +
      '<div class="side-h2">الكورسات</div>' + courseHtml +
      '<div class="side-h2">الأدوات</div>' +
      sideBox('lessons', '🎞', 'شرائح الدروس', '', lessons, active === 'lessons' || /^t/.test(active) && (window.TOPICS || []).some(function (t) { return 't' + t.id === active && t.group === 'lessons'; })) +
      sideBox('practice', '🎯', 'تدرّب', due ? due : '', practice, ['cards', 'quiz', 'class'].indexOf(active) >= 0) +
      sideBox('refs', '📖', 'مراجع', '', refs, ['glossary', 'grammar', 'words', 'oxford', 'verbs', 'sounds'].indexOf(active) >= 0) +
      sideBox('lib', '📚', 'المكتبة', '', lib, active === 'lib') +
      '<div class="side-foot ar">اختصارات: Ctrl+K بحث · [ ] التنقل · F تركيز · Alt+T سمة</div></div>';
    $('#side').innerHTML = h; sideFilter(); try { utilUpdate(); } catch (e) {}
  }
  function sideFilter() {
    var q = sideQ.trim().toLowerCase(), root = $('#side'); if (!root) return;
    [].forEach.call(root.querySelectorAll('details.sg'), function (d) {
      var any = false;
      [].forEach.call(d.querySelectorAll('.nl'), function (a) { var ok = !q || a.textContent.toLowerCase().indexOf(q) >= 0; a.style.display = ok ? '' : 'none'; if (ok) any = true; });
      [].forEach.call(d.querySelectorAll('.su'), function (u) { u.style.display = q ? 'none' : ''; });
      d.style.display = (!q || any) ? '' : 'none'; if (q && any) d.open = true;
    });
  }
  document.addEventListener('input', function (e) { if (e.target && e.target.id === 'sideQ') { sideQ = e.target.value; sideFilter(); } });
  document.addEventListener('toggle', function (e) { var d = e.target; if (d && d.classList && d.classList.contains('sg') && !sideQ) sideOpen[d.getAttribute('data-k')] = d.open; }, true);

  /* ---------------- العروض ---------------- */
  function pageTile(n) {
    var pg = PG[n];
    return '<a class="tile page" href="#/p/' + n + '"><div class="top"><span class="pnum">' + n + '</span><span class="kd ar">' + esc(chipKind(pg.kind)) + '</span>' + (S.bm[n] ? '<i class="st">★</i>' : '') + (S.done[n] ? '<i class="ck">✔</i>' : '') + '</div><h3 class="en" dir="ltr">' + esc(pg.title) + '</h3><small class="ar">' + esc(pg.titleAr || '') + '</small></a>';
  }
  function topicTile(t) { return '<a class="tile" href="#/t/' + t.id + '"><h3 class="en" dir="ltr">' + esc(t.title) + '</h3><b class="ar">' + esc(t.titleAr) + '</b><small class="ar">' + esc(t.summaryAr || '') + '</small></a>'; }
  function toolTile(href, icon, title, sub) { return '<a class="tile" href="' + href + '"><span class="ti">' + icon + '</span><b class="ar">' + title + '</b><small class="ar">' + sub + '</small></a>'; }
  function viewHome() {
    var p = progress(), m = /^#\/p\/(\d+)/.exec(S.last || ''), ln = m && PG[+m[1]] ? +m[1] : ORDER[0], due = Tools.due();
    var words = Tools.glossary().length;
    return '<div class="home">' + R.cover('hero-home', 'hero') + '<div class="home-top"><div class="eyebrow en" dir="ltr" style="color:var(--accent);font-weight:700;font-size:.78rem">' + esc(COURSE.edition) + '</div><h1 class="en" dir="ltr">' + esc(COURSE.title) + '</h1><p class="ar">' + esc(COURSE.descAr) + '</p></div>' +
      '<a class="continue" href="#/p/' + ln + '"><div class="ring" style="--p:' + p.p + '"><b>' + p.p + '%</b></div><div><b class="ar">' + (S.last ? 'تابع من حيث توقفت' : 'ابدأ الدراسة') + '</b><small class="en" dir="ltr">p.' + ln + ' — ' + esc(PG[ln].title) + '</small></div><span class="btn go">فتح ←</span></a>' +
      COURSE.units.map(function (u) { var ps = u.pages.filter(function (n) { return PG[n]; }); return ps.length ? '<div class="grp-h"><h2 class="ar">الدراسة</h2><span class="ar">Unit ' + u.no + ' — ' + esc(u.titleAr) + '</span></div><div class="tiles">' + ps.map(pageTile).join('') + '</div>' : ''; }).join('') +
      (RORDER.length ? '<div class="grp-h"><h2 class="ar">كورس منفصل (ليس من Headway): RINO\'S COURSE</h2><span class="ar">' + esc(RINO.descAr) + '</span></div>' + R.cover('course-rino', 'catc') + '<div class="tiles">' + RORDER.map(pageTile).join('') + '</div>' : '') +
      (IORDER.length ? '<div class="grp-h"><h2 class="ar">كورس منفصل (ليس من Headway): INTERCHANGE 1</h2><span class="ar">' + esc(IC.descAr) + '</span></div>' + R.cover('course-interchange', 'catc') + '<div class="tiles">' + IORDER.map(pageTile).join('') + '</div>' : '') +
      (GORDER.length ? '<div class="grp-h"><h2 class="ar">كورس منفصل (ليس من Headway): GRAMMAR &amp; ACADEMIC WRITING</h2><span class="ar">' + esc(GW.descAr) + '</span></div>' + R.cover('course-gwriting', 'catc') + '<div class="tiles">' + GORDER.map(pageTile).join('') + '</div>' : '') +
      (VORDER.length ? '<div class="grp-h"><h2 class="ar">كورس منفصل (ليس من Headway): CONVERSATION COURSE</h2><span class="ar">' + esc(CV.descAr) + '</span></div>' + R.cover('course-conversation', 'catc') + '<div class="tiles">' + VORDER.map(pageTile).join('') + '</div>' : '') +
      '<div class="grp-h"><h2 class="ar">شرائح الدروس المشروحة</h2><a class="ar" href="#/lessons">عرض الكل</a></div><div class="tiles">' + (window.TOPICS || []).filter(function (t) { return t.group === 'lessons'; }).map(topicTile).join('') + '</div>' +
      '<div class="grp-h"><h2 class="ar">تدرّب</h2></div><div class="tiles">' + toolTile('#/cards', '🃏', 'بطاقات الحفظ', due ? due + ' كلمة تنتظر المراجعة' : 'راجع الكلمات بنظام التكرار المتباعد') + toolTile('#/quiz', '📝', 'اختبار المراجعة', 'أسئلة مولّدة من محتوى الصفحات') + toolTile('#/glossary', '📖', 'قاموس الوحدة', words + ' كلمة وعبارة') + '</div>' +
      '<div class="grp-h"><h2 class="ar">مراجع</h2></div><div class="tiles">' + (window.TOPICS || []).map(topicTile).join('') + toolTile('#/lib', '📚', 'الملفات والروابط', 'PDF وPPTX والفيديو والمواقع') + '</div></div>';
  }
  function viewLessons() {
    var list = (window.TOPICS || []).filter(function (t) { return t.group === 'lessons'; });
    return '<div class="home"><header class="tool-h"><h1 class="ar">🎞 شرائح الدروس المشروحة</h1><p class="ar">شرائح المعلّم بالترتيب، لكل شريحة: صورتها، نصها بالإنجليزية، ترجمتها، الشرح، المفردات، والحلول.</p></header><div class="tiles">' + list.map(function (t) {
      var n = t.sections.length, q = 0; t.sections.forEach(function (s) { s.blocks.forEach(function (b) { if (b.t === 'q') q++; }); });
      return '<a class="tile" href="#/t/' + t.id + '"><h3 class="en" dir="ltr">' + esc(t.title) + '</h3><b class="ar">' + esc(t.titleAr) + '</b><small class="ar">' + esc(t.summaryAr || '') + ' · ' + n + ' أقسام' + (q ? ' · ' + q + ' سؤالاً بحلوله' : '') + '</small></a>';
    }).join('') + '</div></div>';
  }
  function viewTopicIndex(group) {
    var list = (window.TOPICS || []).filter(function (t) { return t.group === group; });
    return '<div class="home"><header class="tool-h"><h1 class="ar">' + (group === 'grammar' ? '🧩 القواعد' : '🔤 الأضداد وعائلات الكلمات') + '</h1><p class="ar">' + (group === 'grammar' ? 'ملخصات قواعد الوحدة مع أمثلة وتدريبات قصيرة.' : 'تعلّم الكلمة مع ضدها وأسرتها.') + '</p></header><div class="tiles">' + list.map(topicTile).join('') + '</div></div>';
  }
  function viewGuide() { return window.GUIDE_HTML ? window.GUIDE_HTML() : ''; }
  function viewSaved() {
    var pages = ORDER.filter(function (n) { return S.bm[n]; }), tops = Object.keys(TP).filter(function (k) { return S.bm[k]; }), stars = Object.keys(S.diff).length;
    return '<div class="home"><header class="tool-h"><h1 class="ar">★ المحفوظات</h1></header>' +
      ((pages.length || tops.length) ? '<div class="tiles">' + pages.map(pageTile).join('') + tops.map(function (k) { return topicTile(TP[k]); }).join('') + '</div>' : '<p class="ar muted pad">لا توجد صفحات محفوظة. افتح صفحة واضغط ☆ في أعلاها.</p>') +
      '<div class="grp-h"><h2 class="ar">كلماتي الصعبة</h2><span class="ar">' + stars + ' كلمة</span></div><div class="tiles">' + toolTile('#/cards', '🃏', 'راجعها بالبطاقات', 'اختر النطاق «كلماتي الصعبة»') + toolTile('#/glossary', '📖', 'افتح القاموس', 'الصعبة تظهر بنجمة') + '</div></div>';
  }
  function viewPage(n) {
    var pg = PG[n], od = ordOf(n), i = od.indexOf(n), pv = PG[od[i - 1]], nx = PG[od[i + 1]], rn = od === RORDER, inn = od === IORDER, gwc = od === GORDER, cvc = od === VORDER;
    var nav = (pv ? '<a class="pg-btn prev" href="#/p/' + pv.num + '"><small class="ar">السابقة</small><b class="en" dir="ltr">p.' + pv.num + ' ' + esc(pv.title) + '</b></a>' : '<span></span>') + (nx ? '<a class="pg-btn next" href="#/p/' + nx.num + '"><small class="ar">التالية</small><b class="en" dir="ltr">p.' + nx.num + ' ' + esc(nx.title) + '</b></a>' : '<span></span>');
    var cr = (window.CREDITS || {})[n], credit = cr ? '<aside class="credit"><b class="en" dir="ltr">Credits &amp; copyright</b><p class="en" dir="ltr">' + esc(cr.en) + '</p><p class="ar">' + esc(cr.ar) + '</p></aside>' : '';
    return R.renderPage(pg, nav, { crumb: '<a href="#/">الرئيسية</a> › ' + (rn ? "RINO'S COURSE" : inn ? 'INTERCHANGE 1' : gwc ? 'GRAMMAR & WRITING' : cvc ? 'CONVERSATION' : 'Unit 1') + ' › ' + (rn || inn || gwc || cvc ? '' : 'p.') + n }).replace('</header>', '</header>' + relBar(n)).replace('<footer class="pager">', credit + '<footer class="pager">');
  }
  var RELATED = { 9: 's-introduction', 12: 's-description', 14: 's-angulo', 15: 's-angulo' };
  function relBar(n) {
    var id = RELATED[n], t = id && TP[id]; if (!t) return '';
    return '<aside class="related ar"><b>📎 شرح مرتبط:</b> <a href="#/t/' + id + '">' + esc(t.titleAr) + ' — شرائح مشروحة بالحلول</a></aside>';
  }
  function lessonBar(t) {
    if (t.group !== 'lessons') return '';
    var f = (window.FILES || []).filter(function (x) { return x.lesson === t.id; })[0], links = '';
    if (f) Object.keys(f.formats).forEach(function (k) { links += '<a class="fmt" href="' + esc(encodeURI(f.formats[k])) + '" target="_blank" rel="noopener">' + k.toUpperCase() + '</a> '; });
    return '<aside class="related ar"><b>🎞 هذه الصفحة شرح لملف الشرائح الأصلي</b> ' + links + '</aside>';
  }
  function viewTopic(id) {
    var t = TP[id]; if (!t) return '<p class="ar pad">الصفحة غير موجودة</p>';
    var list = (window.TOPICS || []).filter(function (x) { return x.group === t.group; }), i = list.indexOf(t), pv = list[i - 1], nx = list[i + 1];
    var nav = (pv ? '<a class="pg-btn prev" href="#/t/' + pv.id + '"><small class="ar">السابق</small><b class="en" dir="ltr">' + esc(pv.title) + '</b></a>' : '<span></span>') + (nx ? '<a class="pg-btn next" href="#/t/' + nx.id + '"><small class="ar">التالي</small><b class="en" dir="ltr">' + esc(nx.title) + '</b></a>' : '<span></span>');
    return R.renderPage(t, nav, { crumb: '<a href="#/' + t.group + '">' + ({ grammar: 'القواعد', words: 'الكلمات', lessons: 'شرائح الدروس' })[t.group] + '</a>' }).replace('</header>', '</header>' + lessonBar(t));
  }

  /* ---------------- التوجيه ---------------- */
  var curKey = '', curSec = 0;
  function sections() { return $$('.sec'); }
  function setStepMode() {
    var on = St.viewMode === 'step' && !!$('.page .sec');
    document.body.classList.toggle('step', on);
    var st = $('.stepper'); if (st) st.hidden = !on;
    if (on) showStep(curSec);
  }
  function showStep(i) {
    var s = sections(); if (!s.length) return;
    curSec = Math.max(0, Math.min(i, s.length - 1));
    s.forEach(function (el, k) { el.classList.toggle('cur', k === curSec); if (k === curSec) el.classList.remove('collapsed'); });
    var info = $('.stepinfo'); if (info) info.textContent = 'القسم ' + (curSec + 1) + ' من ' + s.length;
    markPill(curSec);
  }
  function markPill(i) { $$('.pill-n').forEach(function (p, k) { p.classList.toggle('act', k === i); }); var a = $('.pill-n.act'); if (a && a.scrollIntoView) { var box = a.parentNode; box.scrollLeft = a.offsetLeft - box.clientWidth / 2 + a.clientWidth / 2 - (box.dir === 'rtl' ? 0 : 0); } }
  function gotoSec(i, smooth) {
    var s = sections(); if (!s[i]) return; curSec = i;
    if (document.body.classList.contains('step')) { showStep(i); window.scrollTo({ top: 0 }); return; }
    s[i].classList.remove('collapsed'); S.col[s[i].dataset.sec] = false; var b = $('.chev', s[i]); if (b) b.textContent = '－';
    markPill(i); s[i].scrollIntoView({ behavior: St.reduceMotion || !smooth ? 'auto' : 'smooth', block: 'start' });
  }
  function secIndexById(id) { var s = sections(), k = -1; s.forEach(function (el, i) { if (el.id === 's-' + id) k = i; }); return k; }

  /* ---------------- SEO / meta ديناميكي لكل مسار ---------------- */
  function setMeta(sel, attr, val) { var e = document.querySelector(sel); if (e) e.setAttribute(attr, val); }
  function seo() {
    var t = document.title, m = document.getElementById('main'), d = '';
    var cand = m && (m.querySelector('.page-sum-en') || m.querySelector('.page-sum') || m.querySelector('.tool-h p') || m.querySelector('p'));
    if (cand) d = (cand.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 200);
    if (!d) d = 'موقع دراسة تفاعلي لكورس Headway Intermediate: شرح وتمارين محلولة وصوت وفيديو وقاموس وبطاقات حفظ.';
    setMeta('meta[name="description"]', 'content', d);
    setMeta('meta[property="og:title"]', 'content', t); setMeta('meta[property="og:description"]', 'content', d);
    setMeta('meta[name="twitter:title"]', 'content', t); setMeta('meta[name="twitter:description"]', 'content', d);
    try { var u = location.href; setMeta('meta[property="og:url"]', 'content', u); } catch (e) {}
    var ld = document.getElementById('ld-page');
    if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld-page'; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'LearningResource', name: t, description: d, inLanguage: ['en', 'ar'], educationalLevel: 'B1 Intermediate', learningResourceType: 'Study guide', isPartOf: { '@type': 'Course', name: 'Headway Intermediate 5th Edition' } });
  }
  function route(keepScroll) {
    var h = location.hash || '#/', m, active = 'home', html, key = '', afterTool = null, y = window.scrollY;
    try { TTS.stop(); } catch (e) {}
    if ((m = /^#\/p\/(\d+)(?:\/([\w-]+))?/.exec(h)) && PG[+m[1]]) {
      key = 'p' + m[1];
      if (!keepScroll && key === curKey && $('.page')) { var k = m[2] ? secIndexById(m[2]) : -1; if (k >= 0) gotoSec(k, true); return; }
      active = key; html = viewPage(+m[1]); S.last = '#/p/' + m[1]; Store.saveState(); document.title = 'p.' + m[1] + ' · ' + PG[+m[1]].title + ' — Headway';
    } else if ((m = /^#\/t\/([\w-]+)(?:\/([\w-]+))?/.exec(h)) && TP[m[1]]) {
      key = 't' + m[1];
      if (!keepScroll && key === curKey && $('.page')) { var k2 = m[2] ? secIndexById(m[2]) : -1; if (k2 >= 0) gotoSec(k2, true); return; }
      active = TP[m[1]].group; html = viewTopic(m[1]); document.title = TP[m[1]].title + ' — Headway';
    } else if (/^#\/sheet\/(\d+)/.test(h)) { m = /^#\/sheet\/(\d+)/.exec(h); key = 'sheet' + m[1]; active = 'p' + m[1]; html = Tools.views.sheet(+m[1]); }
    else if (h.indexOf('#/glossary') === 0) { key = 'glossary'; active = 'glossary'; html = Tools.views.glossary(); document.title = 'قاموس — Headway'; }
    else if (h.indexOf('#/cards') === 0) { key = 'cards'; active = 'cards'; html = Tools.views.cards(); document.title = 'بطاقات — Headway'; }
    else if (h.indexOf('#/quiz') === 0) { key = 'quiz'; active = 'quiz'; html = Tools.views.quiz(); document.title = 'اختبار — Headway'; }
    else if (h === '#/class') { key = 'class'; active = 'class'; html = Tools.views.cls(); document.title = 'الصف والكتاب — Headway'; }
    else if (h === '#/verbs') { key = 'verbs'; active = 'verbs'; html = Tools.views.verbs(); afterTool = 'verbs'; document.title = 'الأفعال الشاذة — Headway'; }
    else if (h === '#/sounds') { key = 'sounds'; active = 'sounds'; html = Tools.views.sounds(); document.title = 'الرموز الصوتية — Headway'; }
    else if (h === '#/oxford') { key = 'oxford'; active = 'lib'; html = Tools.views.oxford(); afterTool = 'oxford'; document.title = 'قوائم Oxford — Headway'; }
    else if (h.indexOf('#/lib') === 0 || h.indexOf('#/res') === 0) { key = 'lib'; active = 'lib'; html = Tools.views.lib(); afterTool = 'lib'; document.title = 'الملفات والروابط — Headway'; }
    else if (h.indexOf('#/lessons') === 0) { key = 'lessons'; active = 'lessons'; html = viewLessons(); document.title = 'شرائح الدروس — Headway'; }
    else if (h.indexOf('#/grammar') === 0) { key = 'grammar'; active = 'grammar'; html = viewTopicIndex('grammar'); }
    else if (h.indexOf('#/words') === 0) { key = 'words'; active = 'words'; html = viewTopicIndex('words'); }
    else if (h === '#/guide') { key = 'guide'; active = 'guide'; html = viewGuide(); document.title = 'دليل المستخدم — Headway Study Hub'; }
    else if (h.indexOf('#/saved') === 0 || h.indexOf('#/bm') === 0) { key = 'saved'; active = 'saved'; html = viewSaved(); }
    else { key = 'home'; html = viewHome(); document.title = 'Headway Study Hub'; }
    if (key !== curKey) { Tools.reset && key === 'glossary' && Tools.reset(); curSec = 0; }
    curKey = key;
    $('#main').innerHTML = html; renderSide(active); R.initAudios($('#main')); R.initVideos($('#main'));
    var tc = { cards: 'cover-cards', quiz: 'cover-quiz', glossary: 'cover-glossary', lib: 'cover-lib', grammar: 'cover-grammar', words: 'cover-words' }[key];
    if (tc) { var th = $('.tool-h'); if (th) th.insertAdjacentHTML('afterend', R.cover(tc)); }
    if (afterTool) Tools.after(afterTool);
    seo();
    var lm = /^#\/lib\/(\w+)/.exec(h); if (lm) setTimeout(function () { var e = document.getElementById('lib-' + lm[1]); if (e) e.scrollIntoView({ block: 'start' }); }, 60);
    document.body.classList.remove('side-open'); $('#scrim').classList.remove('show');
    var grp = /^p[1234]\d\d$/.test(active) ? 'rino' : /^p\d+$/.test(active) || active === 'sheet' ? 'study' : ({ home: 'home', cards: 'practice', quiz: 'practice', glossary: 'ref', grammar: 'grammar', words: 'words', lib: 'lib', lessons: 'lessons', class: 'class', verbs: 'ref', sounds: 'ref', oxford: 'lib' })[active] || '';
    $$('.gnav a').forEach(function (a) { a.classList.toggle('act', a.dataset.nav === grp); if (a.dataset.nav === grp) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    try { var an = $('.gnav a.act'); if (an) { var ul = an.closest('ul'); ul.scrollTo ? ul.scrollTo({ left: an.offsetLeft - (ul.clientWidth - an.offsetWidth) / 2, behavior: 'smooth' }) : (ul.scrollLeft = an.offsetLeft - (ul.clientWidth - an.offsetWidth) / 2); } } catch (e) {}
    apply();
    var sec = m && m[2] ? secIndexById(m[2]) : -1;
    if (sec >= 0) { setTimeout(function () { gotoSec(sec, true); }, 30); setTimeout(function () { var el = sections()[sec]; if (el && Math.abs(el.getBoundingClientRect().top - 120) > 80 && curKey === key) gotoSec(sec, false); }, 1100); }
    else if (keepScroll) window.scrollTo(0, y);
    else { if (St.scrollTopOnNav !== false) window.scrollTo(0, 0); if ($('.page')) markPill(0); }
  }
  document.addEventListener('tools-rerender', function () { route(true); });

  function toggleSec(key, el) {
    var cur = el.classList.contains('collapsed'); S.col[key] = !cur; Store.saveState();
    el.classList.toggle('collapsed', !cur); var c = $('.chev', el); if (c) c.textContent = !cur ? '＋' : '－';
  }
  function redo(key) {
    var el = $('[data-comp="' + key + '"]'), h = R.inner(key);
    if (el && h != null) { el.innerHTML = h; if (el.classList.contains('media-slot')) { el.classList.remove('miss'); R.videoInit(el); } }
  }

  /* ---------------- الإعدادات ---------------- */
  function seg(name, list, cur) { return '<div class="seg">' + list.map(function (o) { return '<button type="button" class="' + (String(cur) === String(o[0]) ? 'on' : '') + '" data-act="seg" data-name="' + name + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'; }
  function tog(name, label) { return '<label class="tog"><input type="checkbox" data-set="' + name + '" data-type="bool"' + (St[name] ? ' checked' : '') + '><span class="sw"></span><span class="ar">' + label + '</span></label>'; }
  function fontSel(name, map, cur) { return '<select data-set="' + name + '">' + Object.keys(map).map(function (k) { return '<option value="' + k + '"' + (cur === k ? ' selected' : '') + '>' + map[k][1] + '</option>'; }).join('') + '</select>'; }
  function range(name, label, min, max, step) { return '<div class="row"><label class="ar">' + label + ' <b id="v-' + name + '">' + St[name] + '</b></label><input type="range" min="' + min + '" max="' + max + '" step="' + step + '" data-set="' + name + '" data-type="num" value="' + St[name] + '"></div>'; }
  function sum(grp, title) { return '<summary class="ar">' + title + '<button type="button" class="rs" data-act="resetgrp" data-g="' + grp + '">↺ افتراضي</button></summary>'; }
  function voiceSel(slot, label) {
    var name = slot === 'ar' ? 'voiceAr' : 'voice' + slot, list = slot === 'ar' ? TTS.voices(true).filter(function (v) { return /^ar/i.test(v.lang); }) : TTS.voices(St.voiceAll);
    var auto = TTS.pick(slot);
    var opts = '<option value="">تلقائي' + (auto ? ' — ' + esc(auto.name) : '') + '</option>' + list.map(function (v) { return '<option value="' + esc(v.name) + '"' + (St[name] === v.name ? ' selected' : '') + '>' + esc(v.name + ' (' + v.lang + ')') + '</option>'; }).join('');
    return '<div class="row"><label class="ar">' + label + '</label><div class="voice-row"><select data-set="' + name + '" data-voicesel="' + slot + '">' + opts + '</select><button class="btn ghost sm" type="button" data-act="preview" data-slot="' + slot + '">▶ جرّب</button></div></div>';
  }
  function buildDrawer() {
    var groups = [['day', 'نهارية'], ['night', 'ليلية'], ['read', 'للقراءة'], ['grad', 'تدرّجات'], ['auto', 'تلقائي']];
    var themes = groups.map(function (g) { return '<div class="tg"><span class="ar muted">' + g[1] + '</span><div class="swatches">' + THEMES.filter(function (t) { return t[4] === g[0]; }).map(function (t) { return '<button type="button" class="sw-t' + (St.theme === t[0] ? ' on' : '') + '" data-act="theme" data-v="' + t[0] + '" style="--b:' + t[2] + ';--a:' + t[3] + '"><i></i><span class="ar">' + t[1] + '</span></button>'; }).join('') + '</div></div>'; }).join('');
    var open = $('#drawer details[open]') ? $$('#drawer details').map(function (d) { return d.open; }) : null;
    $('#drawer').innerHTML = '<div class="dr-h"><b class="ar">⚙ تخصيص الموقع</b><button class="icon-btn" data-act="closesettings" aria-label="إغلاق">✕</button></div><div class="dr-b">' +
      '<details open>' + sum('appearance', '🎨 المظهر والألوان') + themes +
      '<div class="row"><label class="ar">لون التمييز</label><div class="acc">' + ACCENTS.map(function (c) { return '<button type="button" style="--c:' + c + '" class="' + (St.accent === c ? 'on' : '') + '" data-act="accent" data-v="' + c + '" aria-label="' + c + '"></button>'; }).join('') + '<input type="color" data-set="accent" data-type="color" value="' + (St.accent || '#2f6fed') + '" aria-label="لون مخصص"></div></div>' +
      '<div class="row"><label class="ar">استدارة الزوايا</label>' + seg('radius', [['sm', 'حادة'], ['md', 'متوسطة'], ['lg', 'مستديرة']], St.radius) + '</div>' + tog('shadows', 'الظلال') + tog('glass', 'تأثير الزجاج (في التدرجات)') +
      '<div class="row"><label class="ar">نمط الخلفية</label>' + seg('bgStyle', [['dots', 'نقاط'], ['grid', 'شبكة'], ['lines', 'خطوط'], ['art', 'صورة'], ['none', 'سادة']], St.bgStyle) + '</div>' +
      '<div class="row"><label class="ar">شكل البطاقات</label>' + seg('cardStyle', [['soft', 'ناعمة'], ['flat', 'مسطحة'], ['outline', 'بإطار']], St.cardStyle) + '</div>' + tog('deco', 'الزخارف والتدرجات الخفيفة') + tog('grayscale', 'تدرّج رمادي (للتركيز)') + tog('dimImages', 'تعتيم الصور قليلاً') + tog('hiContrastText', 'نص أعلى تبايناً') + '</details>' +
      '<details>' + sum('fonts', '🔤 الخطوط والنص') + '<div class="row"><label class="ar">الخط العربي</label>' + fontSel('arFont', AR_FONTS, St.arFont) + '</div><div class="row"><label class="ar">الخط الإنجليزي</label>' + fontSel('enFont', EN_FONTS, St.enFont) + '</div>' +
      range('size', 'حجم الخط', 13, 28, 1) + range('lh', 'تباعد الأسطر', 1.3, 2.5, 0.1) + range('ls', 'تباعد الحروف', 0, 0.12, 0.01) + range('para', 'المسافة بين العناصر', 0.5, 2, 0.1) + '<div class="row"><label class="ar">سماكة الخط</label>' + seg('fontWeight', [[400, 'عادي'], [500, 'متوسط'], [600, 'سميك']], St.fontWeight) + '</div>' + range('wordSpacing', 'تباعد الكلمات', 0, 0.4, 0.02) + '<div class="row"><label class="ar">أقصى طول للسطر</label>' + seg('maxLine', [[0, 'تلقائي'], [60, 'قصير'], [75, 'متوسط'], [95, 'طويل']], St.maxLine) + '</div>' +
      '<div class="row"><label class="ar">محاذاة النص العربي</label>' + seg('align', [['start', 'عادية'], ['justify', 'ضبط']], St.align) + '</div></details>' +
      '<details>' + sum('layout', '🧭 التخطيط والعرض') + '<div class="row"><label class="ar">شكل التخطيط</label>' + seg('layout', LAYOUTS, St.layout) + '</div>' +
      '<div class="row"><label class="ar">عرض المحتوى</label>' + seg('width', [['narrow', 'ضيق'], ['normal', 'عادي'], ['wide', 'واسع'], ['full', 'كامل']], St.width) + '</div>' +
      '<div class="row"><label class="ar">كثافة العناصر</label>' + seg('density', [['compact', 'مضغوط'], ['cozy', 'متوازن'], ['roomy', 'مريح']], St.density) + '</div>' +
      '<div class="row"><label class="ar">عرض القائمة الجانبية</label>' + seg('sideWidth', [['narrow', 'ضيق'], ['normal', 'عادي'], ['wide', 'واسع']], St.sideWidth) + '</div>' +
      '<div class="row"><label class="ar">طريقة عرض الأقسام</label>' + seg('viewMode', [['scroll', 'تمرير متصل'], ['step', 'قسم واحد في كل مرة']], St.viewMode) + '</div>' +
      '<div class="row"><label class="ar">حالة الأقسام عند الفتح</label>' + seg('secOpen', [['all', 'مفتوحة'], ['first', 'الأول فقط'], ['none', 'مطوية']], St.secOpen) + '</div>' + tog('showPills', 'شريط أقسام الصفحة') + tog('stickyNav', 'تثبيت القائمة الرئيسية أعلى الشاشة') + tog('progressBar', 'شريط تقدّم القراءة') + tog('compactHead', 'ترويسة مصغّرة') + '</details>' +
      '<details>' + sum('show', '👁 ما يظهر في الصفحات') + tog('showAr', 'الترجمة العربية') + tog('showExplain', 'ملاحظات الشرح') + tog('showVocab', 'المفردات') + tog('showAnswers', 'أزرار الحل (أوقفها للاختبار الذاتي)') + tog('showAudio', 'مشغّلات الصوت') + tog('showNotes', 'ملاحظاتي') + tog('showInstrEn', 'نص التعليمات الإنجليزي') + tog('showImages', 'الصور واللقطات') + tog('showTags', 'الوسوم الصغيرة') + '</details>' +
      '<details>' + sum('float', '🧩 الأزرار العائمة والواجهة') + '<div class="row"><label class="ar">زر الإعدادات العائم (يظهر عند اختفاء الهيدر)</label>' + seg('gearFloat', [['auto', 'تلقائي'], ['always', 'دائماً'], ['off', 'إخفاء']], St.gearFloat) + '</div>' +
      '<div class="row"><label class="ar">مكان زر الإعدادات</label>' + seg('gearSide', [['left', 'يسار'], ['right', 'يمين']], St.gearSide) + '</div>' +
      '<div class="row"><label class="ar">زر العودة للأعلى</label>' + seg('toTopStyle', [['water', 'ماء متحرك'], ['plain', 'بسيط'], ['off', 'إخفاء']], St.toTopStyle) + '</div>' +
      '<div class="row"><label class="ar">مكان زر العودة للأعلى</label>' + seg('toTopSide', [['right', 'يمين'], ['left', 'يسار']], St.toTopSide) + '</div>' + tog('showUtil', 'شريط الأدوات العلوي (الخط، المشاركة…)') + tog('showFooter', 'تذييل الموقع') + tog('showGallery', 'معرض الصور في التذييل') + tog('bgArt', 'خلفيات الأقسام المصوّرة (إن وُجدت)') + '</details>' +
      '<details>' + sum('behave', '⚙ السلوك والتفاعل') + tog('scrollTopOnNav', 'العودة لأعلى الصفحة عند فتح صفحة جديدة') + tog('autoPauseMedia', 'إيقاف الصوت/الفيديو عند تشغيل آخر') + tog('sfx', 'أصوات عند فحص الإجابة') + tog('haptics', 'اهتزاز خفيف عند فحص الإجابة (الهاتف)') + tog('linkPreview', 'جلب معاينة الروابط (يحتاج إنترنت)') + tog('confirmReset', 'تأكيد قبل إعادة الضبط') + '</details>' +
      '<details>' + sum('access', '♿ إمكانية الوصول') + tog('reduceMotion', 'تقليل الحركة') + tog('underlineLinks', 'تسطير الروابط') + tog('ruler', 'مسطرة قراءة تتبع المؤشر') + tog('bigTargets', 'أزرار أكبر للمس') + tog('strongFocus', 'إطار تركيز أوضح للوحة المفاتيح') + '</details>' +
      '<details>' + sum('voice', '🔊 القراءة الصوتية') + '<p class="muted ar" style="font-size:.82rem">الأصوات المتاحة هي المثبتة على جهازك. اختر صوتاً مختلفاً لكل متحدث: الصوت 1 للنصوص والمتحدث A، والصوت 2 للمتحدث B، والصوت 3 للإعلان C.</p>' +
      tog('voiceAll', 'اعرض أصوات كل اللغات (وليس الإنجليزية فقط)') + voiceSel(1, 'الصوت 1') + voiceSel(2, 'الصوت 2') + voiceSel(3, 'الصوت 3') + voiceSel('ar', 'الصوت العربي (لقراءة الترجمة)') + range('ttsRate', 'السرعة', 0.5, 1.5, 0.05) + range('ttsPitch', 'درجة الصوت', 0.6, 1.4, 0.05) + '</details>' +
      '<details>' + '<summary class="ar">📴 العمل دون إنترنت</summary>' + offlineBox() + '</details>' +
      '<details><summary class="ar">💾 النسخ الاحتياطي</summary><p class="ar muted" style="font-size:.82rem">كل شيء يُحفظ تلقائياً في متصفحك. للنقل إلى جهاز آخر استخدم التصدير والاستيراد.</p><div class="btns"><button class="btn" data-act="export">تصدير</button><button class="btn ghost" data-act="import">استيراد</button><button class="btn ghost danger" data-act="reset">مسح كل البيانات</button></div><input type="file" id="impFile" accept="application/json" hidden></details>' +
      '</div><div class="dr-f"><button class="btn danger ghost" data-act="resetall">↺ إعادة كل الإعدادات إلى الوضع الافتراضي</button></div>';
    if (open) $$('#drawer details').forEach(function (d, i) { d.open = open[i]; });
  }
  /* ---- الوضع دون إنترنت (service worker) ---- */
  var OFF = { rows: null, msg: '', swOk: false };
  function fmtMB(b) { return b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.round(b / 1024) + ' KB'; }
  function offlineBox() {
    if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return '<p class="ar muted" style="font-size:.84rem">الوضع دون إنترنت يعمل عندما يُفتح الموقع من عنوان http/https (استضافة أو localhost)، ولا يعمل عند فتح الملف مباشرة (file://). الموقع نفسه يعمل بدون إنترنت أصلاً عند فتحه من الملفات.</p>';
    var names = { shell: ['الصفحات والبرنامج', 'shell'], images: ['الصور', 'images'], media: ['الصوت والفيديو', 'media'], files: ['ملفات PDF والمكتبة', 'files'] };
    var h = '<p class="ar muted" style="font-size:.84rem">نزّل المحتوى مرة واحدة ليعمل الموقع بعدها دون اتصال على هذا الجهاز. الصفحات تُحفظ تلقائياً، أما الصور والصوت والملفات فاختر ما تريد.</p>';
    if (OFF.rows) h += OFF.rows.map(function (r) { var n = names[r[0]]; return '<div class="row off-row"><label class="ar">' + n[0] + ' <small class="muted">(' + r[1] + '/' + r[2] + (r[3] ? ' · ' + fmtMB(r[3]) : '') + ')</small></label>' + (r[1] >= r[2] ? '<span class="ar" style="color:var(--ok,#1a7f37)">✔ جاهز دون إنترنت</span>' : '<button class="btn sm" data-act="offget" data-g="' + r[0] + '">⬇ تنزيل</button>') + '</div>'; }).join('') + '<div class="row"><button class="btn" data-act="offget" data-g="all">⬇ تنزيل كل شيء (للعمل دون إنترنت)</button></div>';
    else h += '<p class="ar muted">جارٍ فحص ما هو محفوظ…</p>';
    return h + '<div class="prog" id="offProg" hidden><i style="width:0"></i></div><p class="ar" id="offMsg" aria-live="polite" style="font-size:.84rem">' + esc(OFF.msg) + '</p>';
  }
  function offRefresh() { if (navigator.serviceWorker && navigator.serviceWorker.controller) navigator.serviceWorker.controller.postMessage({ cmd: 'status' }); }
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register('sw.js').then(function () { return navigator.serviceWorker.ready; }).then(function () { OFF.swOk = true; setTimeout(offRefresh, 400); }).catch(function () {});
    navigator.serviceWorker.addEventListener('message', function (ev) {
      var d = ev.data || {}, pr = document.getElementById('offProg'), mg = document.getElementById('offMsg');
      if (d.type === 'status') { OFF.rows = d.rows; if (document.getElementById('drawer').classList.contains('open')) buildDrawer(); }
      if (d.type === 'progress') { OFF.msg = 'جارٍ التنزيل… ' + d.done + ' / ' + d.total; if (pr) { pr.hidden = false; pr.firstChild.style.width = Math.round(d.done / d.total * 100) + '%'; } if (mg) mg.textContent = OFF.msg; }
      if (d.type === 'done') { OFF.msg = d.fail ? 'اكتمل مع ' + d.fail + ' ملف تعذّر تنزيله — أعد المحاولة.' : '✔ اكتمل التنزيل. يمكنك الآن استخدام الموقع دون إنترنت.'; offRefresh(); toast(OFF.msg); }
    });
    window.addEventListener('online', function () { document.body.classList.remove('is-offline'); }); window.addEventListener('offline', function () { document.body.classList.add('is-offline'); toast('أنت دون اتصال — المحتوى المحفوظ يعمل.'); });
  }
  function openDrawer() { offRefresh(); buildDrawer(); $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden', 'false'); $('#scrim').classList.add('show'); }
  function closeDrawer() { $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden', 'true'); $('#scrim').classList.remove('show'); document.body.classList.remove('side-open'); }
  document.addEventListener('voices-changed', function () { if ($('#drawer').classList.contains('open')) buildDrawer(); });

  /* ---------------- البحث ---------------- */
  var INDEX = null, SKIP = { t: 1, kind: 1, tone: 1, who: 1, slot: 1, key: 1, selectKind: 1, id: 1, unit: 1, k: 1, correct: 1, src: 1, voice: 1, group: 1 };
  function collect(o, out) { if (o == null) return; if (typeof o === 'string') out.push(o); else if (Array.isArray(o)) o.forEach(function (x) { collect(x, out); }); else if (typeof o === 'object') Object.keys(o).forEach(function (k) { if (!SKIP[k]) collect(o[k], out); }); }
  function buildIndex() {
    INDEX = [];
    ALL.forEach(function (n) { PG[n].sections.forEach(function (s) { var p = []; collect(s, p); INDEX.push({ href: '#/p/' + n + '/' + s.id, label: 'p.' + n + ' · ' + (s.titleEn || s.titleAr), text: p.join(' · '), low: p.join(' · ').toLowerCase() }); }); });
    (window.TOPICS || []).forEach(function (t) { t.sections.forEach(function (s) { var p = []; collect(s, p); INDEX.push({ href: '#/t/' + t.id + '/' + s.id, label: t.title + ' · ' + (s.titleEn || s.titleAr), text: p.join(' · '), low: p.join(' · ').toLowerCase() }); }); });
  }
  function search(q) {
    if (!INDEX) buildIndex(); q = q.trim().toLowerCase(); if (!q) return [];
    var terms = q.split(/\s+/);
    return INDEX.filter(function (it) { return terms.every(function (t) { return it.low.indexOf(t) >= 0; }); }).slice(0, 40).map(function (it) {
      var i = it.low.indexOf(terms[0]), a = Math.max(0, i - 50), re = new RegExp('(' + terms.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')', 'ig');
      return { href: it.href, label: it.label, html: esc(it.text.slice(a, a + 160)).replace(re, '<mark>$1</mark>') };
    });
  }
  function openSearch() { var m = $('#searchModal'); m.classList.add('open'); m.setAttribute('aria-hidden', 'false'); var i = $('#searchInput'); i.value = ''; $('#searchResults').innerHTML = '<p class="ar muted pad">اكتب كلمة بالإنجليزية أو العربية…</p>'; setTimeout(function () { i.focus(); }, 20); }
  function closeSearch() { var m = $('#searchModal'); m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); }
  $('#searchInput').addEventListener('input', function (e) {
    var r = search(e.target.value);
    $('#searchResults').innerHTML = r.length ? r.map(function (x) { return '<a class="res" href="' + x.href + '"><b class="en" dir="ltr">' + esc(x.label) + '</b><span class="snip">' + x.html + '</span></a>'; }).join('') : '<p class="ar muted pad">لا نتائج.</p>';
  });
  $('#searchResults').addEventListener('click', function (e) { if (e.target.closest('a')) closeSearch(); });
  $('#searchModal').addEventListener('mousedown', function (e) { if (e.target.id === 'searchModal') closeSearch(); });

  /* ---------------- المعاينة المكبّرة ---------------- */
  var lb = null;
  function zoom(src, cap) {
    if (!lb) { lb = document.createElement('div'); lb.className = 'lightbox'; lb.innerHTML = '<button class="btn" data-act="lbclose">✕ إغلاق</button><div class="lightbox-wrap"><img alt=""></div><div class="lb-t ar"></div>'; document.body.appendChild(lb); lb.addEventListener('click', function (e) { if (e.target.tagName === 'IMG') e.target.classList.toggle('z'); else lb.classList.remove('open'); }); }
    var im = $('img', lb); im.src = src; im.classList.remove('z'); $('.lb-t', lb).textContent = cap || ''; lb.classList.add('open');
  }

  /* ---------------- الأحداث ---------------- */
  function download(name, text) { var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500); }
  function checkQ(key, b) { var v = S.v[key], acc = b.kind === 'fill' ? R.arr(b.answer) : [].concat(R.arr(b.answer), b.alt || []); S.c[key] = (R.norm(v) !== '' && acc.map(R.norm).indexOf(R.norm(v)) >= 0) ? 'ok' : 'bad'; }
  function voiceOf(t) { var v = t.dataset.voice; return v === 'ar' ? 'ar' : (+v || 1); }
  function pickFile(accept, cb) { var f = document.createElement('input'); f.type = 'file'; f.accept = accept; f.onchange = function () { if (f.files[0]) cb(f.files[0]); }; f.click(); }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-act]'); if (!t) return;
    var a = t.dataset.act, k = t.dataset.k, b = k ? R.blk(k) : null;
    switch (a) {
      case 'speak': if (t.tagName === 'A') e.preventDefault(); TTS.speak(t.dataset.t, voiceOf(t), t); break;
      case 'readdlg': TTS.play((b.lines || []).map(function (l) { return { text: l.en, voice: l.who === 'B' ? 2 : l.who === 'C' ? 3 : 1 }; })); break;
      case 'stop': TTS.stop(); break;
      case 'check': if (b) { checkQ(k, b); Store.saveState(); redo(k); sfx(S.c[k]); } break;
      case 'reveal': S.r[k] = !S.r[k]; Store.saveState(); redo(k); break;
      case 'pick': S.v[k] = +t.dataset.i; S.c[k] = (+t.dataset.i === b.correct) ? 'ok' : 'bad'; Store.saveState(); redo(k); break;
      case 'tf': S.v[k] = t.dataset.v === 'true'; S.c[k] = (S.v[k] === b.answer) ? 'ok' : 'bad'; Store.saveState(); redo(k); break;
      case 'mcheck': S.c[k] = 1; Store.saveState(); redo(k); break;
      case 'mclear': Object.keys(S.v).forEach(function (x) { if (x.indexOf(k + '#') === 0) delete S.v[x]; }); delete S.c[k]; delete S.r[k]; Store.saveState(); redo(k); break;
      case 'qz': S.v[k] = (S.v[k] === t.dataset.v) ? undefined : t.dataset.v; Store.saveState(); redo(t.dataset.compK); break;
      case 'qzclear': Object.keys(S.v).forEach(function (x) { if (x.indexOf(k + '#') === 0) delete S.v[x]; }); Store.saveState(); redo(k); break;
      case 'pz': t.classList.toggle('hl'); break;
      case 'collapse': var sec = t.closest('.sec'); if (!document.body.classList.contains('step')) toggleSec(sec.dataset.sec, sec); break;
      case 'collapseall': var secs = sections(), anyOpen = secs.some(function (s) { return !s.classList.contains('collapsed'); }); secs.forEach(function (s) { S.col[s.dataset.sec] = anyOpen; s.classList.toggle('collapsed', anyOpen); var c = $('.chev', s); if (c) c.textContent = anyOpen ? '＋' : '－'; }); Store.saveState(); break;
      case 'gosec': e.preventDefault(); gotoSec(+t.dataset.i, true); try { history.replaceState(null, '', t.getAttribute('href')); } catch (x) {} break;
      case 'stepprev': showStep(curSec - 1); window.scrollTo({ top: 0 }); break;
      case 'stepnext': showStep(curSec + 1); window.scrollTo({ top: 0 }); break;
      case 'bmpage': S.bm[t.dataset.n] = !S.bm[t.dataset.n]; Store.saveState(); t.textContent = S.bm[t.dataset.n] ? '★' : '☆'; t.setAttribute('aria-pressed', !!S.bm[t.dataset.n]); renderSide(currentActive()); break;
      case 'donepage': S.done[t.dataset.n] = !S.done[t.dataset.n]; Store.saveState(); t.classList.toggle('on', !!S.done[t.dataset.n]); t.setAttribute('aria-pressed', !!S.done[t.dataset.n]); renderSide(currentActive()); toast(S.done[t.dataset.n] ? 'تم تعليم الصفحة كمراجَعة ✔' : 'أُزيل التعليم'); break;
      case 'zoom': e.preventDefault(); zoom(t.dataset.src, t.dataset.cap); break;
      case 'lbclose': lb.classList.remove('open'); break;
      case 'aurl': var u = prompt('الصق رابط الملف الصوتي (mp3 / m4a …):'); if (u) { S.audio[t.dataset.slot] = u.trim(); Store.saveState(); R.audioInit(t.closest('.audio-slot')); } break;
      case 'afile': var box = t.closest('.audio-slot'); pickFile('audio/*', function (f) { Store.putFile('a:' + t.dataset.slot, f).then(function () { S.audio[t.dataset.slot] = 'idb'; Store.saveState(); R.audioInit(box); toast('تم حفظ الملف في متصفحك'); }); }); break;
      case 'areset': delete S.audio[t.dataset.slot]; Store.delFile('a:' + t.dataset.slot); Store.saveState(); R.audioInit(t.closest('.audio-slot')); break;
      case 'murl': var mu = prompt('الصق الرابط (يوتيوب أو غيره):'); if (mu) { S.media[k] = mu.trim(); Store.saveState(); redo(t.closest('[data-comp]').dataset.comp); } break;
      case 'mfile': var comp = t.closest('[data-comp]').dataset.comp; pickFile('video/*', function (f) { Store.putFile('v:' + k, f).then(function () { S.mediaLocal[k] = 'idb'; delete S.media[k]; Store.saveState(); redo(comp); toast('تم حفظ الفيديو في متصفحك'); }); }); break;
      case 'mreset': var comp2 = t.closest('[data-comp]').dataset.comp; delete S.media[k]; delete S.mediaLocal[k]; Store.delFile('v:' + k); Store.saveState(); redo(comp2); break;
      case 'theme': set('theme', t.dataset.v); $$('.sw-t').forEach(function (x) { x.classList.toggle('on', x.dataset.v === St.theme); }); break;
      case 'accent': set('accent', t.dataset.v); $$('.acc button').forEach(function (x) { x.classList.toggle('on', x.dataset.v === St.accent); }); break;
      case 'seg': set(t.dataset.name, t.dataset.v); $$('[data-name="' + t.dataset.name + '"]').forEach(function (x) { x.classList.toggle('on', x.dataset.v === String(St[t.dataset.name])); }); if (t.dataset.name === 'layout') route(true); if (t.dataset.name === 'secOpen') { S.col = {}; Store.saveState(); route(true); } break;
      case 'preview': var sl = t.dataset.slot === 'ar' ? 'ar' : +t.dataset.slot; TTS.speak(sl === 'ar' ? 'مرحباً، هذا صوت القراءة العربي.' : 'Hello! This is how voice ' + sl + ' sounds.', sl); break;
      case 'resetgrp': e.preventDefault(); e.stopPropagation(); GROUPS[t.dataset.g].forEach(function (x) { St[x] = Store.DEFAULTS[x]; }); Store.saveSettings(); apply(); buildDrawer(); route(true); toast('أُعيدت هذه المجموعة للافتراضي'); break;
      case 'offget': if (navigator.serviceWorker && navigator.serviceWorker.controller) { OFF.msg = 'بدأ التنزيل…'; navigator.serviceWorker.controller.postMessage({ cmd: 'get', group: t.dataset.g }); var pm = document.getElementById('offMsg'); if (pm) pm.textContent = OFF.msg; } else toast('أعد تحميل الصفحة مرة ثم حاول.'); break;
      case 'resetall': if (St.confirmReset === false || confirm('إعادة كل إعدادات المظهر والقراءة إلى الافتراضي؟ (إجاباتك وملاحظاتك لن تُمسح)')) { Store.resetSettings(); apply(); buildDrawer(); route(true); toast('أُعيدت الإعدادات الافتراضية'); } break;
      case 'opensettings': openDrawer(); break;
      case 'closesettings': closeDrawer(); break;
      case 'export': download('headway-study-backup.json', Store.exportAll()); break;
      case 'import': $('#impFile').click(); break;
      case 'reset': if (confirm('سيُحذف كل شيء (الإعدادات والإجابات والملاحظات والبطاقات). متأكد؟')) { Store.resetAll(); location.reload(); } break;
    }
  });
  function currentActive() { var h = location.hash; var m = /^#\/p\/(\d+)/.exec(h); if (m) return 'p' + m[1]; var t = /^#\/t\/([\w-]+)/.exec(h); if (t && TP[t[1]]) return TP[t[1]].group; return (h.replace('#/', '').split('/')[0]) || 'home'; }

  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.dataset.set) {
      var v = t.dataset.type === 'bool' ? t.checked : t.dataset.type === 'num' ? parseFloat(t.value) : t.value;
      set(t.dataset.set, v); var lab = $('#v-' + t.dataset.set); if (lab) lab.textContent = v;
      if (t.dataset.set === 'accent') $$('.acc button').forEach(function (x) { x.classList.remove('on'); });
      return;
    }
    var k = t.dataset.k; if (!k) return;
    if (k.indexOf('note:') === 0) S.n[k.slice(5)] = t.value; else S.v[k] = t.value;
    Store.saveState();
  });
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.dataset.set === 'voiceAll') buildDrawer();
    if (t.id === 'impFile' && t.files[0]) { var fr = new FileReader(); fr.onload = function () { try { Store.importAll(fr.result); toast('تم الاستيراد'); setTimeout(function () { location.reload(); }, 600); } catch (x) { toast('الملف غير صالح'); } }; fr.readAsText(t.files[0]); return; }
    if (t.tagName === 'SELECT' && t.dataset.k) { S.v[t.dataset.k] = t.value; Store.saveState(); }
  });
  $('#main').addEventListener('dblclick', function () { var s = String(getSelection()).trim(); if (s && s.length < 200 && /[a-z]/i.test(s) && !/[؀-ۿ]/.test(s)) TTS.speak(s, 1); });
  document.addEventListener('mousemove', function (e) { if (St.ruler) { var r = $('#ruler'); if (r) r.style.top = e.clientY + 'px'; } });
  window.addEventListener('scroll', function () {
    if (document.body.classList.contains('step') || !$('.page .sec')) return;
    if (scroll.t) return; scroll.t = requestAnimationFrame(function () {
      scroll.t = 0; var s = sections(), idx = 0; for (var i = 0; i < s.length; i++) { if (s[i].getBoundingClientRect().top < 150) idx = i; } if (idx !== curSec) { curSec = idx; markPill(idx); }
    });
  }, { passive: true });
  function scroll() {}

  $('#btnSettings').onclick = openDrawer; $('#btnSearch').onclick = openSearch; $('#scrim').onclick = closeDrawer;
  $('#btnMenu').onclick = function () { if (innerWidth < 900) { document.body.classList.toggle('side-open'); $('#scrim').classList.toggle('show', document.body.classList.contains('side-open')); } else set('sidebarOpen', !St.sidebarOpen); };
  function cycleTheme() { var ids = THEMES.map(function (t) { return t[0]; }), i = ids.indexOf(St.theme); set('theme', ids[(i + 1) % ids.length]); toast('السمة: ' + THEMES[ids.indexOf(St.theme)][1]); }
  $('#btnTheme').onclick = cycleTheme;
  $('#btnBm').onclick = function () { location.hash = '#/saved'; };
  var prevLayout = 'side-right';
  function toggleFocus() { if (St.layout === 'focus') set('layout', prevLayout); else { prevLayout = St.layout; set('layout', 'focus'); } toast(St.layout === 'focus' ? 'وضع التركيز — اضغط F للرجوع' : 'عاد التخطيط'); }
  $('#btnFocus').onclick = toggleFocus;
  document.addEventListener('keydown', function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''));
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); return; }
    if (e.key === 'Escape') { closeSearch(); closeDrawer(); if (lb) lb.classList.remove('open'); return; }
    if (typing || e.ctrlKey || e.metaKey) return;
    if (e.altKey && e.key.toLowerCase() === 't') { cycleTheme(); return; }
    if (e.key === '/') { e.preventDefault(); openSearch(); }
    else if (e.key.toLowerCase() === 'f' && !e.altKey) toggleFocus();
    else if (e.key === '[' || e.key === ']') { var m = /^#\/p\/(\d+)/.exec(location.hash); if (!m) return; var od = ordOf(+m[1]), i = od.indexOf(+m[1]) + (e.key === ']' ? 1 : -1); if (od[i]) location.hash = '#/p/' + od[i]; }
    else if (document.body.classList.contains('step') && e.key === 'ArrowLeft') { showStep(curSec + 1); window.scrollTo({ top: 0 }); }
    else if (document.body.classList.contains('step') && e.key === 'ArrowRight') { showStep(curSec - 1); window.scrollTo({ top: 0 }); }
  });

  function navH() { var g = $('.gnav'); document.documentElement.style.setProperty('--navh', (St.stickyNav && g ? g.offsetHeight : 0) + 'px'); }
  var tt = $('#toTop'), rp = $('#readprog i'), tick = 0;
  function onScroll() {
    tick = 0; var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    if (rp) rp.style.width = (h > 0 ? Math.min(100, y / h * 100) : 0) + '%';
    if (tt) { tt.hidden = y < 400 || St.toTopStyle === 'off'; var pc = h > 0 ? Math.min(1, Math.max(0, y / h)) : 0, lv = document.getElementById('wLvl'); if (lv) lv.style.transform = 'translateY(' + (50 - pc * 52).toFixed(1) + 'px)'; tt.classList.toggle('full', pc > 0.985); tt.title = 'إلى الأعلى · ' + Math.round(pc * 100) + '%'; }
    gearUpdate();
  }
  window.addEventListener('scroll', function () { if (!tick) tick = requestAnimationFrame(onScroll); }, { passive: true });
  window.addEventListener('resize', navH); tt.onclick = function () { window.scrollTo({ top: 0, behavior: St.reduceMotion ? 'auto' : 'smooth' }); };
  var _apply = apply; apply = function () { _apply(); navH(); };
  /* أدوات الهيدر الإضافية */
  (function () {
    function fs(d) { var v = Math.max(14, Math.min(26, (+St.size || 17) + d)); set('size', v); toast('حجم الخط ' + v); }
    var b;
    if ((b = $('#btnFontMinus'))) b.onclick = function () { fs(-1); };
    if ((b = $('#btnFontPlus'))) b.onclick = function () { fs(1); };
    if ((b = $('#btnPrint'))) b.onclick = function () { window.print(); };
    if ((b = $('#btnShare'))) b.onclick = function () {
      var url = location.href, data = { title: document.title, url: url };
      if (navigator.share) { navigator.share(data).catch(function () {}); return; }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(function () { toast('نُسخ الرابط'); }, function () { toast(url); }); else toast(url);
    };
    if ((b = $('#fToTop'))) b.onclick = function () { window.scrollTo({ top: 0, behavior: St.reduceMotion ? 'auto' : 'smooth' }); };
  })();
  function utilUpdate() {
    var a = $('#btnContinue'), pr = $('#utilProg'); if (a) a.setAttribute('href', S.last || '#/p/9');
    try { var p = progress(); if (pr && p) pr.textContent = p.p + '%'; } catch (e) {}
  }
  window.addEventListener('hashchange', function () { route(false); utilUpdate(); });
  /* تشغيل وسيط واحد فقط: عند تشغيل صوت/فيديو يُوقَف أي آخر وتُلغى القراءة الصوتية */
  document.addEventListener('play', function (e) {
    var t = e.target; if (!t || !/^(AUDIO|VIDEO)$/.test(t.tagName) || St.autoPauseMedia === false) return;
    Array.prototype.forEach.call(document.querySelectorAll('audio,video'), function (m) { if (m !== t && !m.paused) m.pause(); });
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (x) {}
  }, true);
  /* منع تمرير الصفحة خلف القائمة الجانبية المفتوحة */
  var sideEl = document.getElementById('side');
  if (sideEl) { sideEl.addEventListener('wheel', function (e) { var d = e.deltaY, atTop = sideEl.scrollTop <= 0, atEnd = sideEl.scrollTop + sideEl.clientHeight >= sideEl.scrollHeight - 1; if ((d < 0 && atTop) || (d > 0 && atEnd)) e.preventDefault(); }, { passive: false }); }
  apply(); route(false); utilUpdate();
})();

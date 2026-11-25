/* ============================================================
   render.js — تحويل بيانات الصفحات إلى HTML (كل نوع من الكتل له دالة)
   ============================================================ */
(function () {
  'use strict';
  var S = Store.state;
  var BLK = {};
  var REG = {};            // key -> function () => inner HTML (لإعادة رسم مكوّن واحد)

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function nl(s) { return esc(s).replace(/\n/g, '<br>'); }
  function norm(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"')
      .replace(/\s+/g, ' ').replace(/\s*([,.;:!?])\s*/g, '$1 ').trim().replace(/[.!?,;:\s]+$/, '');
  }
  function arr(x) { return x == null ? [] : (Array.isArray(x) ? x : [x]); }

  function spk(text, cls, voice) {
    return '<button type="button" class="spk ' + (cls || '') + '" data-act="speak" data-voice="' + (voice || 1) + '" data-t="' + esc(text) + '" aria-label="استمع" title="استمع بصوت الجهاز">🔊</button>';
  }
  function arTr(t, cls) { return t ? '<div class="ar-tr ar ' + (cls || '') + '">' + nl(t) + '</div>' : ''; }

  /* ---------------- boxes / lists ---------------- */
  function rBox(b) {
    var items = (b.items || []).map(function (it) {
      if (typeof it === 'string') it = { en: it };
      return '<li class="chip-card"><span class="en" dir="ltr">' + esc(it.en) + (it.en ? spk(it.en, 'mini') : '') + '</span>' +
        (it.arEn ? '<span class="en-tr en" dir="ltr">' + nl(it.arEn) + '</span>' : '') + (it.ar ? '<span class="ar-tr ar">' + nl(it.ar) + '</span>' : '') + '</li>';
    }).join('');
    return '<section class="box' + (b.compact ? ' compact' : '') + '">' +
      '<h3 class="box-h"><span class="en" dir="ltr">' + esc(b.title || '') + '</span>' + (b.titleAr ? '<small class="ar">' + esc(b.titleAr) + '</small>' : '') + '</h3>' +
      '<ul class="chip-grid">' + items + '</ul></section>';
  }

  /* ---------------- text / reading ---------------- */
  function rText(b) {
    var v = (b.vocab || []).map(function (p) {
      return '<button type="button" class="vchip" data-act="speak" data-voice="1" data-t="' + esc(p[0]) + '"><b class="en" dir="ltr">' + esc(p[0]) + '</b><span class="ar">' + esc(p[1]) + '</span></button>';
    }).join('');
    var ui = (b.ui || []).map(function (p) {
      return '<span class="uichip"><b class="en" dir="ltr">' + esc(p[0]) + '</b><span class="ar">' + esc(p[1]) + '</span></span>';
    }).join('');
    return '<article class="textb">' +
      (b.label ? '<div class="textb-label en" dir="ltr">' + esc(b.label) + '</div>' : '') +
      (b.en ? '<div class="read en" dir="ltr">' + nl(b.en) + '</div><div class="read-tools">' + spk(b.en, 'wide', b.voice) + '</div>' : '') +
      (ui ? '<div class="x-ui"><span class="tag">عناصر الإعلان</span><div class="vgrid">' + ui + '</div></div>' : '') +
      (b.ar ? '<div class="ar-tr ar tr-body"><span class="tag">الترجمة والشرح</span>' + nl(b.ar) + '</div>' : '') +
      ((b.explain || b.explainEn) ? '<div class="x-explain"><span class="tag">Note · ملاحظة</span>' + (b.explainEn ? '<p class="en" dir="ltr">' + nl(b.explainEn) + '</p>' : '') + (b.explain ? '<p class="ar-tr ar">' + nl(b.explain) + '</p>' : '') + '</div>' : '') +
      (v ? '<div class="x-vocab"><span class="tag">مفردات</span><div class="vgrid">' + v + '</div></div>' : '') +
      '</article>';
  }

  /* ---------------- questions ---------------- */
  function qHead(b) {
    return '<div class="q-head"><span class="qn' + (b.example ? ' ex' : '') + '">' + (b.example ? 'مثال' : esc(b.n)) + '</span>' +
      '<div class="q-t"><div class="q-en en" dir="ltr">' + esc(b.en || '') + (b.en ? spk(String(b.en).replace(/___+/g, 'blank'), 'mini') : '') + '</div>' +
      (b.ar ? '<div class="q-ar ar-tr ar">' + esc(b.ar) + '</div>' : '') + '</div></div>';
  }
  function fb(c) {
    if (c === 'ok') return '<div class="fb ok">✔ صحيح</div>';
    if (c === 'bad') return '<div class="fb bad">✖ ليس بعد — جرّب مرة أخرى أو اضغط «الحل»</div>';
    return '';
  }
  function why(b) { return (b.why || b.whyEn) ? '<div class="why"><span class="tag">Why? · لماذا؟</span>' + (b.whyEn ? '<p class="en" dir="ltr">' + nl(b.whyEn) + '</p>' : '') + (b.why ? '<p class="ar-tr ar">' + nl(b.why) + '</p>' : '') + '</div>' : ''; }

  function qInner(b, key) {
    var v = S.v[key], rev = !!S.r[key] || !!b.example, c = S.c[key], h = qHead(b), body = '';
    var kind = b.kind;
    if (kind === 'fill') {
      var answers = arr(b.answer);
      if (b.example && v == null) v = answers[0];
      var inp = '<input class="fill en" dir="ltr" type="text" data-k="' + key + '" value="' + esc(v || '') + '" autocomplete="off" spellcheck="false" placeholder="…"' + (b.example ? ' readonly' : '') + '>';
      var p = b.prompt || '';
      var line = p.indexOf('___') >= 0 ? '<div class="fill-line en" dir="ltr">' + esc(p).replace(/_{3,}/, inp.replace(/\$/g, '$$$$')) + '</div>' : '<div class="fill-line">' + inp + '</div>';
      body = line;
      if (!b.example) body += '<div class="btns"><button class="btn" data-act="check" data-k="' + key + '">تحقق</button><button class="btn ghost ans" data-act="reveal" data-k="' + key + '">الحل</button></div>' + fb(c);
      if (rev) body += '<div class="sol"><span class="tag">الحل</span><span class="en" dir="ltr">' + answers.map(esc).join(' &nbsp;/&nbsp; ') + '</span></div>' + why(b);
    } else if (kind === 'choice') {
      var correct = b.correct;
      var opts = (b.options || []).map(function (o, i) {
        var cls = 'opt';
        if (v === i) cls += ' sel';
        if ((rev && i === correct) || (c === 'ok' && v === i)) cls += ' good';
        else if (c === 'bad' && v === i) cls += ' wrong';
        return '<button type="button" class="' + cls + '" data-act="pick" data-k="' + key + '" data-i="' + i + '"><span class="ol">' + String.fromCharCode(97 + i) + '</span><span class="en" dir="ltr">' + esc(o) + '</span></button>';
      }).join('');
      if (b.example && v == null) v = correct;
      body = '<div class="opts">' + opts + '</div>' + fb(c);
      if (!b.example) body += '<div class="btns"><button class="btn ghost ans" data-act="reveal" data-k="' + key + '">الحل</button></div>';
      if (rev || c === 'ok') body += why(b);
    } else if (kind === 'tf') {
      var tb = function (val, label) {
        var cls = 'opt tfb';
        if (v === val) cls += ' sel';
        if (rev && b.answer === val) cls += ' good';
        else if (c === 'ok' && v === val) cls += ' good';
        else if (c === 'bad' && v === val) cls += ' wrong';
        return '<button type="button" class="' + cls + '" data-act="tf" data-k="' + key + '" data-v="' + val + '"><span class="en" dir="ltr">' + label + '</span></button>';
      };
      body = '<div class="opts row">' + tb(true, 'True') + tb(false, 'False') + '</div>' + fb(c);
      body += '<div class="btns"><button class="btn ghost ans" data-act="reveal" data-k="' + key + '">الحل</button></div>';
      if (rev || c === 'ok') {
        if (b.answer === false && b.fix) body += '<div class="sol"><span class="tag">التصحيح</span><span class="en" dir="ltr">' + esc(b.fix) + '</span></div>';
        body += why(b);
      }
    } else { // open
      var accepted = b.alt ? [].concat(arr(b.answer), b.alt) : [];
      body = '<textarea class="area en" dir="ltr" rows="2" data-k="' + key + '" placeholder="اكتب إجابتك هنا…">' + esc(v || '') + '</textarea>';
      body += '<div class="btns">' + (accepted.length ? '<button class="btn" data-act="check" data-k="' + key + '">تحقق</button>' : '') +
        '<button class="btn ghost ans" data-act="reveal" data-k="' + key + '">' + (b.answer === null ? 'ملاحظة' : 'إجابة نموذجية') + '</button></div>' + fb(c);
      if (rev) {
        if (b.answer == null) body += '<div class="sol"><span class="tag">ملاحظة</span><span class="ar">هذا السؤال إجابته شخصية، فلا يوجد حل واحد صحيح.</span></div>';
        else body += '<div class="sol"><span class="tag">إجابة نموذجية</span><span class="en" dir="ltr">' + nl(b.answer) + '</span></div>';
        if (b.alt && b.alt.length) body += '<div class="sol alt"><span class="tag">صيغ أخرى مقبولة</span><span class="en" dir="ltr">' + b.alt.map(esc).join('<br>') + '</span></div>';
        body += why(b);
      }
    }
    return h + '<div class="q-body">' + body + '</div>';
  }
  function rQ(b, key) {
    REG[key] = function () { return qInner(b, key); };
    return '<div class="q kind-' + b.kind + '" data-comp="' + key + '">' + qInner(b, key) + '</div>';
  }

  /* ---------------- match set ---------------- */
  function msInner(b, key) {
    var word = b.selectKind === 'word', rev = !!S.r[key], chk = !!S.c[key];
    var opts = (b.options || []).map(function (o) {
      return '<li class="mo"><span class="ol">' + (word ? '' : esc(o.k)) + '</span><div><div class="en" dir="ltr">' + esc(o.en) + '</div>' + (o.ar ? '<div class="ar-tr ar">' + esc(o.ar) + '</div>' : '') + '</div></li>';
    }).join('');
    var rows = (b.items || []).map(function (it) {
      var ik = key + '#' + it.n, val = S.v[ik];
      if (it.example && val == null) val = it.answer;
      var sel = '<select class="sel en" dir="ltr" data-k="' + ik + '"' + (it.example ? ' disabled' : '') + '><option value="">—</option>' +
        (b.options || []).map(function (o) { return '<option value="' + esc(o.k) + '"' + (val === o.k ? ' selected' : '') + '>' + esc(word ? o.en : o.k) + '</option>'; }).join('') + '</select>';
      var mark = '', extra = '';
      if (chk && !it.example) mark = val === it.answer ? '<span class="mk ok">✔</span>' : (val ? '<span class="mk bad">✖</span>' : '<span class="mk">·</span>');
      if (rev || it.example) {
        var ans = (b.options || []).filter(function (o) { return o.k === it.answer; })[0];
        extra = '<div class="sol"><span class="tag">الحل</span><span class="en" dir="ltr">' + esc(word ? it.answer : it.answer + ' — ' + (ans ? ans.en : '')) + '</span></div>' + (it.why ? '<div class="why ar">' + nl(it.why) + '</div>' : '');
      }
      return '<li class="mrow' + (chk && val === it.answer ? ' good' : '') + (chk && val && val !== it.answer ? ' wrong' : '') + '"><div class="mrow-top"><span class="qn' + (it.example ? ' ex' : '') + '">' + (it.example ? 'مثال' : esc(it.n)) + '</span>' +
        '<div class="q-t"><div class="en" dir="ltr">' + esc(it.en) + spk(it.en, 'mini') + '</div>' + (it.ar ? '<div class="ar-tr ar">' + esc(it.ar) + '</div>' : '') + '</div>' + sel + mark + '</div>' + extra + '</li>';
    }).join('');
    return '<div class="ms-grid"><div><div class="ms-h">' + (word ? 'الكلمات' : 'الإجابات') + '</div><ul class="mos">' + opts + '</ul></div>' +
      '<div><div class="ms-h">الأسئلة</div><ul class="mrows">' + rows + '</ul>' +
      '<div class="btns"><button class="btn" data-act="mcheck" data-k="' + key + '">تحقق من الكل</button><button class="btn ghost ans" data-act="reveal" data-k="' + key + '">أظهر الحل</button><button class="btn ghost" data-act="mclear" data-k="' + key + '">مسح</button></div></div></div>';
  }
  function rMatch(b, key) {
    REG[key] = function () { return msInner(b, key); };
    return '<div class="matchset" data-comp="' + key + '">' + msInner(b, key) + '</div>';
  }

  /* ---------------- audio / media ---------------- */
  function rAudio(b, pg) {
    var unit = 'unit-' + String(pg.unit || 'u1').replace(/\D/g, '');
    var base = 'media/audio/' + unit + '/track-' + b.slot;
    return '<div class="audio-slot" data-slot="' + esc(b.slot) + '" data-base="' + esc(base) + '">' +
      '<div class="a-head"><span class="a-badge">🎧 ' + esc(b.slot) + '</span><div class="a-t">' +
      '<div class="en" dir="ltr">' + esc(b.en || '') + '</div>' + arTr(b.ar) + '</div></div>' +
      '<div class="a-player"></div><div class="a-status ar"></div>' + audioScript(b.slot) +
      '<div class="btns small"><button class="btn ghost" data-act="aurl" data-slot="' + esc(b.slot) + '">ربط رابط</button>' +
      '<button class="btn ghost" data-act="afile" data-slot="' + esc(b.slot) + '">اختيار ملف من جهازي</button>' +
      '<button class="btn ghost" data-act="areset" data-slot="' + esc(b.slot) + '">إعادة للافتراضي</button></div></div>';
  }
  function audioScript(slot) {
    var sc = (window.SCRIPTS || {})[slot]; if (!sc) return '';
    return '<details class="a-script"><summary><span class="en" dir="ltr">Audioscript</span> <span class="ar">نص التسجيل مع الترجمة</span></summary>' +
      sc.map(function (l) { return '<p class="sl"><b class="en" dir="ltr">' + esc(l.who) + '</b><span class="en" dir="ltr">' + esc(l.en) + '</span><span class="ar-tr ar">' + esc(l.ar) + '</span></p>'; }).join('') + '</details>';
  }
  function audioInit(el) {
    var slot = el.dataset.slot, base = el.dataset.base;
    var box = el.querySelector('.a-player'), st = el.querySelector('.a-status');
    function mount(src, label) {
      box.innerHTML = '<audio controls preload="none" src="' + esc(src) + '"></audio>';
      st.textContent = label; el.classList.add('has'); el.classList.remove('miss');
    }
    function missing() {
      box.innerHTML = ''; el.classList.add('miss'); el.classList.remove('has');
      st.textContent = 'لا يوجد تسجيل صوتي بعد. يمكنك ربط ملف أو رابط بالأزرار أدناه.';
    }
    var custom = S.audio[slot];
    if (custom === 'idb') { Store.getFile('a:' + slot).then(function (bl) { if (bl) mount(URL.createObjectURL(bl), 'ملف من جهازك'); else missing(); }); return; }
    if (custom) { mount(custom, 'رابط مخصص'); return; }
    var exts = ['mp3', 'm4a', 'ogg', 'wav'], i = 0;
    (function next() {
      if (i >= exts.length) return missing();
      var a = new Audio(), src = base + '.' + exts[i++];
      a.preload = 'metadata';
      a.onloadedmetadata = function () { mount(src, 'من مجلد media'); };
      a.onerror = next;
      a.src = src;
    })();
  }
  function initAudios(root) { Array.prototype.forEach.call((root || document).querySelectorAll('.audio-slot'), audioInit); }

  function mediaCfg(key) { return (window.MEDIA_LINKS || {})[key] || {}; }
  function mInner(b) {
    var cfg = mediaCfg(b.key), url = S.media[b.key] || cfg.url || '', yt = url && url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/), body;
    if (yt) body = '<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/' + yt[1] + '" title="' + esc(b.title) + '" allowfullscreen loading="lazy"></iframe></div>';
    else if (url) body = '<a class="btn" href="' + esc(url) + '" target="_blank" rel="noopener">فتح الرابط ↗</a>';
    else body = '<div class="v-player"></div>';
    return '<div class="a-head"><span class="a-badge">▶</span><div class="a-t"><div class="en" dir="ltr">' + esc(b.title || '') + '</div>' + arTr(b.ar) + '</div></div>' + body + '<div class="a-status ar"></div>' +
      '<div class="btns small"><button class="btn ghost" data-act="murl" data-k="' + esc(b.key) + '">ربط رابط</button><button class="btn ghost" data-act="mfile" data-k="' + esc(b.key) + '">اختيار فيديو من جهازي</button>' +
      (S.media[b.key] || S.mediaLocal[b.key] ? '<button class="btn ghost" data-act="mreset" data-k="' + esc(b.key) + '">إعادة للافتراضي</button>' : '') + '</div>';
  }
  function videoInit(el) {
    var box = el.querySelector('.v-player'), st = el.querySelector('.a-status'), key = el.dataset.mkey, cfg = mediaCfg(key); if (!box) return;
    function mount(src, label) { box.innerHTML = '<video controls preload="metadata" playsinline src="' + esc(src) + '"></video>'; st.textContent = ''; el.classList.add('has'); }
    function missing() { box.innerHTML = ''; el.classList.add('miss'); st.textContent = 'لا يوجد فيديو بعد. يمكنك ربط رابط أو اختيار ملف بالأزرار أدناه.'; }
    if (S.mediaLocal[key] === 'idb') { Store.getFile('v:' + key).then(function (bl) { if (bl) mount(URL.createObjectURL(bl), 'فيديو من جهازك'); else missing(); }); return; }
    if (!cfg.file) { missing(); return; }
    var exts = ['mp4', 'webm', 'm4v', 'mov'], i = 0;
    (function next() {
      if (i >= exts.length) return missing();
      var v = document.createElement('video'), src = cfg.file + '.' + exts[i++];
      v.preload = 'metadata'; v.onloadedmetadata = function () { mount(src, 'من مجلد media'); }; v.onerror = next; v.src = src;
    })();
  }
  function rMedia(b, key) {
    REG[key] = function () { return mInner(b); };
    return '<div class="media-slot" data-comp="' + key + '" data-mkey="' + esc(b.key) + '">' + mInner(b) + '</div>';
  }
  function initVideos(root) { Array.prototype.forEach.call((root || document).querySelectorAll('.media-slot'), videoInit); }

  function rPhoto(b) {
    if (b.src && /\.png$/.test(b.src) && b.src.indexOf('media/images/gen/') === 0) { b = Object.assign({}, b, { base: b.src.slice(0, -4), src: b.src.slice(0, -4) + '.jpg' }); }
    var img = b.src ? '<a class="ph-img" href="' + esc(b.src) + '" data-act="zoom" data-src="' + esc(b.src) + '" data-cap="' + esc(b.title || '') + '"><img src="' + esc(b.src) + '"' + (b.base ? ' data-base="' + esc(b.base) + '" data-n="0"' : '') + ' alt="' + esc(b.title || '') + '" loading="lazy" onload="if(this.naturalWidth>this.naturalHeight*1.2)this.closest(\'.photo\').classList.add(\'wideimg\')" onerror="R.nx(this)"><span class="zoomi">🔍 تكبير</span></a>' : '';
    return '<figure class="photo' + (b.src ? '' : ' noimg') + (b.opt ? ' opt' : '') + '">' + img +
      '<figcaption><div class="ph-h"><span class="tag">' + (b.label || 'وصف الصورة') + '</span><b class="en" dir="ltr">' + esc(b.title || '') + '</b></div>' +
      (b.cap ? '<div class="ph-cap en" dir="ltr">“' + esc(b.cap) + '”' + spk(b.cap, 'mini') + '</div>' : '') +
      (b.descEn ? '<p class="ph-en en" dir="ltr">' + nl(b.descEn) + '</p>' : '') + (b.ar ? '<p class="ph-ar ar-tr ar">' + nl(b.ar) + '</p>' : '') + '</figcaption></figure>';
  }

  /* ---------------- الصور المولّدة (أماكنها في data/images.js) ---------------- */
  function genSlots(pg, sec, pos) {
    var key = String(pg.num != null ? pg.num : pg.id);
    return (window.GEN_SLOTS || []).filter(function (g) { return g.page === key && g.sec === sec.id && g.pos === pos; }).map(function (g) {
      return '<div class="blk blk-photo wide">' + rPhoto({ src: g.src, title: g.title, descEn: g.en, ar: g.ar, opt: true, label: 'Illustration · توضيح' }) + '</div>';
    }).join('');
  }
  var EXTS = ['jpg', 'png', 'webp', 'jpeg'];
  function nx(img) {
    var base = img.dataset.base, n = +img.dataset.n || 0;
    if (base && n + 1 < EXTS.length) { img.dataset.n = n + 1; img.src = base + '.' + EXTS[n + 1]; var a = img.closest('a.ph-img'); if (a) { a.href = img.src; a.dataset.src = img.src; } return; }
    var ph = img.closest('.photo'); if (ph) { ph.classList.add('noimg'); return; }
    var f = img.parentNode; if (f && f.parentNode) f.parentNode.removeChild(f);
  }
  function cover(id, cls) {
    if (!id) return '';
    var full = /^info-/.test(id), base = (window.GEN_BASE || 'media/images/gen/') + id;
    if (id === 'info-collocations') return '<figure class="cover full"><img src="media/images/unit-1/p12-collocations-infographic.jpg" alt="" loading="lazy" decoding="async"></figure>';
    return '<figure class="cover ' + (cls || '') + (full ? ' full' : '') + '"><img src="' + base + '.jpg" data-base="' + base + '" data-n="0" alt="" loading="lazy" decoding="async" onerror="R.nx(this)"></figure>';
  }

  /* ---------------- small blocks ---------------- */
  function rBubbles(b, key) {
    return '<div class="bubbles"><div class="btns small"><button class="btn ghost sm" data-act="readdlg" data-k="' + key + '">🔊 اقرأ الحوار بصوتين</button></div>' + (b.lines || []).map(function (l) {
      return '<div class="bub who-' + esc(l.who) + '"><span class="who">' + esc(l.who) + '</span><div><div class="en" dir="ltr">' + esc(l.en) + spk(l.en, 'mini', l.who === 'B' ? 2 : 1) + '</div>' + arTr(l.ar) + '</div></div>';
    }).join('') + '</div>';
  }
  function rModel(b) {
    return '<figure class="model"><figcaption class="model-h"><span class="tag">نموذج</span>' + spk(b.en, 'mini') + '</figcaption><blockquote class="en model-t" dir="ltr">' + nl(b.en) + '</blockquote>' + arTr(b.ar) + '</figure>';
  }
  function rNote(b) {
    var g = b.tone === 'grammar';
    return '<aside class="note ' + (g ? 'grammar' : 'tip') + '"><strong class="note-i">' + (g ? 'Rule · قاعدة' : 'Tip · ملاحظة') + '</strong>' + (b.en ? '<p class="en" dir="ltr">' + nl(b.en) + '</p>' : '') + (b.ar ? '<p class="ar-tr ar">' + nl(b.ar) + '</p>' : '') + '</aside>';
  }
  function rQuote(b) {
    return '<figure class="quote"><blockquote class="en" dir="ltr">' + esc(b.en) + spk(b.en, 'mini') + '</blockquote><figcaption class="en" dir="ltr">— ' + esc(b.who) + '</figcaption>' +
      arTr(b.ar) + ((b.explain || b.explainEn) ? '<div class="x-explain"><span class="tag">Meaning · المعنى</span>' + (b.explainEn ? '<p class="en" dir="ltr">' + nl(b.explainEn) + '</p>' : '') + (b.explain ? '<p class="ar-tr ar">' + nl(b.explain) + '</p>' : '') + '</div>' : '') + '</figure>';
  }
  function rPuzzle(b) {
    var rows = (b.rows || []).map(function (r) {
      return '<div class="prow" dir="ltr">' + r.split('').map(function (ch) { return '<i data-act="pz">' + esc(ch) + '</i>'; }).join('') + '</div>';
    }).join('');
    return '<div class="puzzle"><div class="box-h"><b class="en" dir="ltr">' + esc(b.title || '') + '</b><span class="ar">اضغط على الحروف لتظليلها أثناء البحث</span></div><div class="pz-grid">' + rows + '</div></div>';
  }
  function qzInner(b, key) {
    var yes = [], some = [];
    var rows = (b.items || []).map(function (it) {
      var v = S.v[key + '#' + it.n];
      if (v === 'Y') yes.push(it.adj); else if (v === 'S') some.push(it.adj);
      var btn = function (c, l) { return '<button type="button" class="yn' + (v === c ? ' on ' + c : '') + '" data-act="qz" data-k="' + key + '#' + it.n + '" data-comp-k="' + key + '" data-v="' + c + '">' + l + '</button>'; };
      return '<li class="qzrow"><span class="qn">' + it.n + '</span><div class="q-t"><div class="en" dir="ltr">' + esc(it.en) + '</div><div class="ar-tr ar">' + esc(it.ar) + '</div></div><div class="yns">' + btn('Y', 'Yes') + btn('S', 'Sometimes') + btn('N', 'No') + '</div></li>';
    }).join('');
    var res = '<div class="qz-res ar"><b>نتيجتك</b>' + (yes.length || some.length ?
      '<div>الصفات التي تصفك: <span class="en" dir="ltr">' + (yes.map(function (a) { return '<em class="pill">' + esc(a) + '</em>'; }).join('') || '—') + '</span></div>' +
      (some.length ? '<div>أحياناً: <span class="en" dir="ltr">' + some.map(function (a) { return '<em class="pill soft">' + esc(a) + '</em>'; }).join('') + '</span></div>' : '') :
      '<div class="muted">أجب عن الأسئلة (Yes / Sometimes / No) لتظهر الصفات المناسبة لك.</div>') +
      '<div class="btns small"><button class="btn ghost" data-act="qzclear" data-k="' + key + '">مسح الإجابات</button></div></div>';
    return '<div class="box-h"><b class="en" dir="ltr">' + esc(b.title || '') + '</b><span class="ar">أجب بصدق ثم انظر أي الصفات تصفك</span></div><ul class="qzrows">' + rows + '</ul>' + res;
  }
  function rQuiz(b, key) {
    REG[key] = function () { return qzInner(b, key); };
    return '<div class="quiz" data-comp="' + key + '">' + qzInner(b, key) + '</div>';
  }
  function rSteps(b) {
    return '<ol class="steps">' + (b.items || []).map(function (s, i) {
      return '<li><span class="sn">' + (i + 1) + '</span><div><div class="en" dir="ltr"><b>' + esc(s.en) + '</b></div>' + arTr(s.ar) + '</div></li>';
    }).join('') + '</ol>';
  }

  /* ---------------- sections / pages ---------------- */
  var WIDE = { photo: 1, text: 1, audio: 1, matchset: 1, puzzle: 1, quiz: 1, steps: 1, media: 1, quote: 1, model: 1, box: 0 };

  function rBlock(b, pg, sec, bi) {
    var key = pg.id + ':' + sec.id + ':' + bi, h;
    BLK[key] = b;
    switch (b.t) {
      case 'box': h = rBox(b); break;
      case 'text': h = rText(b); break;
      case 'q': h = rQ(b, key); break;
      case 'matchset': h = rMatch(b, key); break;
      case 'audio': h = rAudio(b, pg); break;
      case 'bubbles': h = rBubbles(b, key); break;
      case 'model': h = rModel(b); break;
      case 'note': h = rNote(b); break;
      case 'media': h = rMedia(b, key); break;
      case 'photo': h = rPhoto(b); break;
      case 'quote': h = rQuote(b); break;
      case 'puzzle': h = rPuzzle(b); break;
      case 'quiz': h = rQuiz(b, key); break;
      case 'steps': h = rSteps(b); break;
      default: h = '';
    }
    return '<div class="blk blk-' + b.t + (WIDE[b.t] || b.t === 'q' && b.kind === 'open' ? ' wide' : '') + '">' + h + '</div>';
  }

  function isCollapsed(sk, i) {
    if (S.col[sk] !== undefined) return !!S.col[sk];
    var o = Store.settings.secOpen;
    return o === 'none' || (o === 'first' && i > 0);
  }
  function rSection(sec, pg, i) {
    var sk = pg.id + ':' + sec.id, col = isCollapsed(sk, i || 0);
    var blocks = (sec.blocks || []).map(function (b, bi) { return rBlock(b, pg, sec, bi); }).join('');
    return '<section class="sec' + (col ? ' collapsed' : '') + '" id="s-' + esc(sec.id) + '" data-sec="' + sk + '" data-i="' + (i || 0) + '">' +
      '<header class="sec-h" data-act="collapse" data-k="' + sk + '"><span class="sec-no">' + (sec.no ? esc(sec.no) : '•') + '</span><div class="sec-t">' +
      (sec.tag ? '<div class="sec-tag en" dir="ltr">' + esc(sec.tag) + '</div>' : '') +
      '<h2 class="en" dir="ltr">' + esc(sec.titleEn || '') + '</h2>' + (sec.titleAr ? '<p class="ar-tr ar sec-ar">' + esc(sec.titleAr) + '</p>' : '') + '</div>' +
      '<span class="chev" aria-hidden="true">' + (col ? '＋' : '－') + '</span></header>' +
      '<div class="sec-body">' +
      (sec.instrEn ? '<p class="instr en" dir="ltr"><strong>' + nl(sec.instrEn) + '</strong>' + spk(sec.instrEn, 'mini') + '</p>' : '') +
      (sec.instrAr ? '<p class="instr-ar ar-tr ar">' + nl(sec.instrAr) + '</p>' : '') +
      '<div class="blocks">' + genSlots(pg, sec, 'start') + blocks + genSlots(pg, sec, 'end') + '</div>' +
      '<details class="mynote"' + (S.n[sk] ? ' open' : '') + '><summary class="ar">ملاحظاتي على هذا القسم</summary><textarea class="area" data-k="note:' + sk + '" rows="3" placeholder="اكتب ملاحظاتك هنا…">' + esc(S.n[sk] || '') + '</textarea></details>' +
      '</div></section>';
  }

  function renderPage(pg, nav, opts) {
    opts = opts || {};
    REG = {}; window.__REG = REG;
    var key = pg.num != null ? pg.num : pg.id, base = pg.num != null ? '#/p/' + pg.num : '#/t/' + pg.id;
    var cr = (window.KIND_AR || {})[pg.kind] || pg.kind || '';
    var pills = (pg.sections || []).map(function (s, i) {
      return '<a class="pill-n" data-act="gosec" data-i="' + i + '" href="' + base + '/' + esc(s.id) + '"><b>' + (s.no ? esc(s.no) : '•') + '</b><span class="en" dir="ltr">' + esc(s.titleEn || s.titleAr) + '</span></a>';
    }).join('');
    var tools = '<button class="icon-btn" data-act="bmpage" data-n="' + esc(key) + '" aria-pressed="' + (!!S.bm[key]) + '" title="حفظ في المحفوظات">' + (S.bm[key] ? '★' : '☆') + '</button>' +
      '<button class="icon-btn' + (S.done[key] ? ' on' : '') + '" data-act="donepage" data-n="' + esc(key) + '" aria-pressed="' + (!!S.done[key]) + '" title="علّم كمراجَعة">✓</button>' +
      (pg.num != null ? '<a class="icon-btn" href="#/sheet/' + pg.num + '" title="ملخص للطباعة">🖨</a>' : '') +
      '<button class="icon-btn" data-act="collapseall" title="طيّ/فتح كل الأقسام">⇕</button>';
    return '<article class="page" data-page="' + esc(key) + '">' +
      '<header class="page-h"><div class="page-top"><nav class="crumb ar" aria-label="مسار التنقل">' + (opts.crumb || '') + '</nav><div class="page-tools" role="toolbar" aria-label="أدوات الصفحة">' + tools + '</div></div>' +
      '<h1 class="en" dir="ltr">' + esc(pg.title) + '</h1><p class="ar page-ar">' + esc(pg.titleAr || '') + '</p>' +
      (cr ? '<div class="kinds"><span class="kind">' + esc(cr) + '</span></div>' : '') +
      (pg.summaryEn ? '<p class="en page-sum-en" dir="ltr">' + esc(pg.summaryEn) + '</p>' : '') + '<p class="ar-tr ar page-sum">' + esc(pg.summaryAr || '') + '</p></header>' + cover((window.GEN_COVERS || {})[String(key)]) +
      (pills ? '<nav class="pills" aria-label="أقسام الصفحة">' + pills + '</nav>' : '') +
      '<div class="sections">' + (pg.sections || []).map(function (s, i) { return rSection(s, pg, i); }).join('') + '</div>' +
      '<div class="stepper" hidden><button class="btn ghost" data-act="stepprev">→ السابق</button><span class="ar stepinfo"></span><button class="btn" data-act="stepnext">التالي ←</button></div>' +
      '<footer class="pager">' + (nav || '') + '</footer></article>';
  }

  window.R = {
    esc: esc, norm: norm, arr: arr, REG: function () { return REG; }, renderPage: renderPage,
    blk: function (key) { return BLK[key]; },
    inner: function (key) { return REG[key] ? REG[key]() : null; },
    initAudios: initAudios, audioInit: audioInit, initVideos: initVideos, videoInit: videoInit, rSection: rSection, cover: cover, nx: nx, spk: spk, nl: nl, arTr: arTr
  };
})();

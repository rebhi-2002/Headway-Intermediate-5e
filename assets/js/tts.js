/* ============================================================
   tts.js — القراءة الصوتية بأصوات الجهاز (عدة أصوات: 1 و2 و3 + عربي)
   ============================================================ */
(function () {
  'use strict';
  var St = Store.settings;
  var ok = 'speechSynthesis' in window;
  var all = [], queue = [], playing = false, paused = false, bar = null, cur = null;

  function load() {
    if (!ok) return;
    all = speechSynthesis.getVoices() || [];
    document.dispatchEvent(new CustomEvent('voices-changed'));
  }
  if (ok) { load(); speechSynthesis.onvoiceschanged = load; }

  function list(filter) {
    return all.filter(function (v) { return filter ? true : /^en/i.test(v.lang); });
  }
  function isArabic(t) { return /[؀-ۿ]/.test(t) && !/[A-Za-z]{3}/.test(t); }
  function byName(n) { return all.filter(function (v) { return v.name === n; })[0]; }
  function pick(slot) {
    if (slot === 'ar') {
      var a = byName(St.voiceAr); if (a) return a;
      return all.filter(function (v) { return /^ar/i.test(v.lang); })[0] || null;
    }
    var n = St['voice' + slot], v = n && byName(n);
    if (v) return v;
    // اختيار تلقائي مختلف لكل رقم صوت إن لم يحدد المستخدم
    var en = list(false); if (!en.length) return null;
    var uk = en.filter(function (x) { return /en-GB/i.test(x.lang); }), us = en.filter(function (x) { return /en-US/i.test(x.lang); });
    var seq = [].concat(us, uk, en).filter(function (x, i, arr) { return arr.indexOf(x) === i; });
    return seq[(slot - 1) % seq.length];
  }

  function ensureBar() {
    if (bar) return bar;
    bar = document.createElement('div'); bar.className = 'readbar'; bar.hidden = true;
    bar.innerHTML = '<span class="rb-t ar"></span><button type="button" data-rb="pause" aria-label="إيقاف مؤقت">⏸</button><button type="button" data-rb="slow" aria-label="أبطأ">−</button><button type="button" data-rb="fast" aria-label="أسرع">+</button><button type="button" data-rb="stop" aria-label="إيقاف">⏹</button>';
    document.body.appendChild(bar);
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-rb]'); if (!b) return; var a = b.dataset.rb;
      if (a === 'stop') TTS.stop();
      else if (a === 'pause') TTS.togglePause();
      else { St.ttsRate = Math.max(0.5, Math.min(1.5, +(St.ttsRate + (a === 'fast' ? 0.1 : -0.1)).toFixed(2))); Store.saveSettings(); toastRate(); }
    });
    return bar;
  }
  function toastRate() { var t = bar.querySelector('.rb-t'); t.textContent = 'السرعة ' + St.ttsRate.toFixed(2); }
  function show(txt) { if (!bar) ensureBar(); bar.hidden = false; bar.querySelector('.rb-t').textContent = txt.slice(0, 60) + (txt.length > 60 ? '…' : ''); bar.querySelector('[data-rb="pause"]').textContent = paused ? '▶' : '⏸'; }
  function hide() { if (bar) bar.hidden = true; }
  function mark(el, on) { if (el && el.classList) el.classList.toggle('speaking', on); }

  function next() {
    if (!queue.length) { playing = false; hide(); mark(cur, false); cur = null; return; }
    var it = queue.shift();
    mark(cur, false); cur = it.el || null; mark(cur, true);
    var u = new SpeechSynthesisUtterance(it.text);
    var arabic = it.voice === 'ar' || isArabic(it.text), slot = arabic ? 'ar' : (it.voice || 1);
    var v = pick(slot);
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = arabic ? 'ar-SA' : 'en-GB';
    u.rate = St.ttsRate; u.pitch = St.ttsPitch || 1;
    u.onend = function () { next(); };
    u.onerror = function () { next(); };
    show(it.text);
    speechSynthesis.speak(u);
  }

  var TTS = window.TTS = {
    ok: ok,
    voices: function (filterAll) { return list(filterAll); },
    pick: pick,
    stop: function () { if (!ok) return; queue = []; playing = false; paused = false; speechSynthesis.cancel(); mark(cur, false); cur = null; hide(); },
    togglePause: function () {
      if (!ok || !playing) return;
      if (paused) { speechSynthesis.resume(); paused = false; } else { speechSynthesis.pause(); paused = true; }
      show(cur ? 'قراءة…' : 'قراءة…'); bar.querySelector('[data-rb="pause"]').textContent = paused ? '▶' : '⏸';
    },
    /* items: [{text, voice, el}] */
    play: function (items) { try { Array.prototype.forEach.call(document.querySelectorAll('audio,video'), function (m) { m.pause(); }); } catch (x) {}
      if (!ok) return false;
      speechSynthesis.cancel(); paused = false; playing = true;
      queue = items.filter(function (i) { return i && i.text && i.text.trim(); });
      setTimeout(next, 40);
      return true;
    },
    speak: function (text, voice, el) { return TTS.play([{ text: text, voice: voice, el: el }]); },
    isSpeaking: function (text) { return playing && cur && cur.dataset && cur.dataset.t === text; }
  };
})();

/* ============================================================
   store.js — الإعدادات والحالة المحفوظة (localStorage) + ملفات الصوت المحلية (IndexedDB)
   ============================================================ */
(function () {
  'use strict';
  var NS = 'hw1';
  var mem = {};
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return mem[k] || null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { mem[k] = v; } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { delete mem[k]; } }

  var DEFAULTS = {
    theme: 'paper', accent: '', radius: 'md', shadows: true, glass: true,
    arFont: 'cairo', enFont: 'inter',
    size: 17, lh: 1.8, ls: 0, para: 1, align: 'start',
    width: 'normal', density: 'cozy', layout: 'side-right', sideWidth: 'normal',
    viewMode: 'scroll', secOpen: 'all', showPills: true,
    showAr: true, showExplain: true, showVocab: true, showAnswers: true, showAudio: true, showNotes: true,
    showInstrEn: true, showImages: true, showTags: true,
    reduceMotion: false, underlineLinks: false, ruler: false, bigTargets: false, strongFocus: false,
    voice1: '', voice2: '', voice3: '', voiceAr: '', voiceAll: false, ttsRate: 0.95, ttsPitch: 1, stickyNav: true, progressBar: true, compactHead: false, sidebarOpen: true,
    bgStyle: 'dots', deco: true, cardStyle: 'soft', fontWeight: 400, grayscale: false, dimImages: false, hiContrastText: false, gearFloat: 'auto', gearSide: 'left', toTopStyle: 'water', toTopSide: 'right', showUtil: true, showFooter: true, showGallery: true, bgArt: true, scrollTopOnNav: true, sfx: false, haptics: true, linkPreview: true, wordSpacing: 0, maxLine: 0, autoPauseMedia: true, confirmReset: true
  };
  var STATE0 = { v: {}, r: {}, c: {}, n: {}, done: {}, bm: {}, col: {}, audio: {}, media: {}, mediaLocal: {}, fc: {}, diff: {}, quizHist: [], last: '' };

  function readJSON(k, fallback) {
    try { var s = lsGet(k); if (!s) return fallback; var o = JSON.parse(s); return o && typeof o === 'object' ? o : fallback; }
    catch (e) { return fallback; }
  }
  function merge(base, extra) {
    var o = {}, k;
    for (k in base) o[k] = base[k];
    for (k in extra) if (extra[k] !== undefined) o[k] = extra[k];
    return o;
  }

  var settings = merge(DEFAULTS, readJSON(NS + '.settings', {}));
  var state = merge(STATE0, readJSON(NS + '.state', {}));
  Object.keys(STATE0).forEach(function (k) { if (typeof STATE0[k] === 'object' && (!state[k] || typeof state[k] !== 'object')) state[k] = Array.isArray(STATE0[k]) ? [] : {}; });

  var t1 = null, t2 = null;
  function saveSettings() { clearTimeout(t1); t1 = setTimeout(function () { lsSet(NS + '.settings', JSON.stringify(settings)); }, 60); }
  function saveState() { clearTimeout(t2); t2 = setTimeout(function () { lsSet(NS + '.state', JSON.stringify(state)); }, 250); }
  window.addEventListener('beforeunload', function () {
    lsSet(NS + '.settings', JSON.stringify(settings)); lsSet(NS + '.state', JSON.stringify(state));
  });

  /* ---------- IndexedDB: ملفات صوت يختارها المستخدم من جهازه ---------- */
  var dbp = null;
  function db() {
    if (dbp) return dbp;
    dbp = new Promise(function (res, rej) {
      try {
        var rq = indexedDB.open('hw1-files', 1);
        rq.onupgradeneeded = function () { rq.result.createObjectStore('files'); };
        rq.onsuccess = function () { res(rq.result); };
        rq.onerror = function () { rej(rq.error); };
      } catch (e) { rej(e); }
    });
    return dbp;
  }
  function idb(mode, fn) {
    return db().then(function (d) {
      return new Promise(function (res, rej) {
        var tx = d.transaction('files', mode), r = fn(tx.objectStore('files'));
        tx.oncomplete = function () { res(r && r.result); };
        tx.onerror = function () { rej(tx.error); };
      });
    });
  }

  window.Store = {
    NS: NS, DEFAULTS: DEFAULTS, settings: settings, state: state,
    saveSettings: saveSettings, saveState: saveState,
    putFile: function (k, blob) { return idb('readwrite', function (s) { return s.put(blob, k); }); },
    getFile: function (k) { return idb('readonly', function (s) { return s.get(k); }).catch(function () { return null; }); },
    delFile: function (k) { return idb('readwrite', function (s) { return s.delete(k); }).catch(function () {}); },
    exportAll: function () { return JSON.stringify({ app: 'headway-study-hub', v: 1, settings: settings, state: state }, null, 2); },
    importAll: function (txt) {
      var o = JSON.parse(txt);
      if (!o || o.app !== 'headway-study-hub') throw new Error('bad file');
      Object.keys(settings).forEach(function (k) { delete settings[k]; });
      Object.keys(state).forEach(function (k) { delete state[k]; });
      Object.assign(settings, merge(DEFAULTS, o.settings || {}));
      Object.assign(state, merge(STATE0, o.state || {}));
      Object.keys(STATE0).forEach(function (k) { if (typeof STATE0[k] === 'object' && (!state[k] || typeof state[k] !== 'object')) state[k] = Array.isArray(STATE0[k]) ? [] : {}; });
      lsSet(NS + '.settings', JSON.stringify(settings)); lsSet(NS + '.state', JSON.stringify(state));
    },
    resetSettings: function () { Object.keys(settings).forEach(function (k) { delete settings[k]; }); Object.assign(settings, DEFAULTS); lsSet(NS + '.settings', JSON.stringify(settings)); },
    resetAll: function () { lsDel(NS + '.settings'); lsDel(NS + '.state'); }
  };
})();

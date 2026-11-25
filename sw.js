/* Service worker — يجعل الموقع يعمل دون إنترنت (يعمل فقط عبر http/https وليس file://).
   VERSION و assets/precache.json يُحدَّثان بواسطة: python3 tools/make_sw.py */
var VERSION = '20261113223326';
var CORE = 'hw-core-' + VERSION, RUN = 'hw-run';
self.addEventListener('install', function (e) {
  e.waitUntil(fetch('assets/precache.json', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (m) {
    return caches.open(CORE).then(function (c) { return Promise.all(m.shell.map(function (u) { return c.add(u).catch(function () {}); })); });
  }).catch(function () {}).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k.indexOf('hw-core-') === 0 && k !== CORE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
function rangeResp(resp, req) {
  var h = req.headers.get('range'); if (!h) return Promise.resolve(resp);
  return resp.blob().then(function (b) {
    var m = /bytes=(\d*)-(\d*)/.exec(h), s = m[1] ? +m[1] : 0, en = m[2] ? +m[2] : b.size - 1;
    return new Response(b.slice(s, en + 1), { status: 206, statusText: 'Partial Content', headers: { 'Content-Type': resp.headers.get('Content-Type') || 'application/octet-stream', 'Content-Range': 'bytes ' + s + '-' + en + '/' + b.size, 'Content-Length': String(en - s + 1), 'Accept-Ranges': 'bytes' } });
  });
}
self.addEventListener('fetch', function (e) {
  var req = e.request; if (req.method !== 'GET') return;
  var u = new URL(req.url); if (u.origin !== location.origin) return;
  var big = /\/media\//.test(u.pathname);
  e.respondWith(caches.match(req.url, { ignoreSearch: true }).then(function (hit) {
    if (hit && big) return rangeResp(hit, req);
    var net = fetch(big ? new Request(req.url) : req).then(function (r) {
      if (r && r.ok && r.status === 200) { var cp = r.clone(); caches.open(big ? RUN : CORE).then(function (c) { c.put(req.url, cp); }); }
      return r;
    });
    if (hit) { net.catch(function () {}); return hit; }
    return net.then(function (r) { return big ? rangeResp(r, req) : r; }).catch(function () { return caches.match('index.html'); });
  }));
});
/* تنزيل مجموعة كاملة مع تقدّم: postMessage({cmd:'get', group:'images'|'media'|'files'|'all'}) */
self.addEventListener('message', function (e) {
  var d = e.data || {}, src = e.source;
  function say(o) { if (src) src.postMessage(o); }
  if (d.cmd === 'status') {
    fetch('assets/precache.json', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (m) {
      return Promise.all(['shell', 'images', 'media', 'files'].map(function (g) {
        return Promise.all(m[g].map(function (x) { var url = typeof x === 'string' ? x : x.u; return caches.match(url, { ignoreSearch: true }).then(function (h) { return h ? 1 : 0; }); })).then(function (a) { return [g, a.reduce(function (s, v) { return s + v; }, 0), m[g].length, m[g + 'Bytes'] || 0]; });
      })).then(function (rows) { say({ type: 'status', rows: rows }); });
    }).catch(function () { say({ type: 'status', rows: [] }); });
  }
  if (d.cmd === 'get') {
    e.waitUntil(fetch('assets/precache.json', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (m) {
      var groups = d.group === 'all' ? ['shell', 'images', 'media', 'files'] : [d.group], list = [];
      groups.forEach(function (g) { m[g].forEach(function (x) { list.push({ g: g, u: typeof x === 'string' ? x : x.u }); }); });
      var done = 0, fail = 0, i = 0, total = list.length;
      function one() {
        if (i >= list.length) return Promise.resolve();
        var it = list[i++], big = it.g !== 'shell';
        return caches.match(it.u, { ignoreSearch: true }).then(function (h) {
          if (h) return;
          return fetch(it.u).then(function (r) { if (!r.ok) throw 0; return caches.open(big ? RUN : CORE).then(function (c) { return c.put(it.u, r); }); }).catch(function () { fail++; });
        }).then(function () { done++; if (done % 3 === 0 || done === total) say({ type: 'progress', group: d.group, done: done, total: total, fail: fail }); return one(); });
      }
      return Promise.all([one(), one(), one()]).then(function () { say({ type: 'done', group: d.group, done: done, total: total, fail: fail }); });
    }).catch(function () { say({ type: 'done', group: d.group, done: 0, total: 0, fail: 1 }); }));
  }
});

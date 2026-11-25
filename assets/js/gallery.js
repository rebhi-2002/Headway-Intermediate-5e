/* معرض الفوتر: شريط أفقي صغير + عارض ملء الشاشة (تنقل، سحب، لوحة المفاتيح) */
(function () {
  var box, imgs, cur = 0, sx = null;
  function build() {
    box = document.createElement('div'); box.className = 'lb'; box.hidden = true; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'عارض الصور');
    box.innerHTML = '<button class="lb-x" aria-label="إغلاق">✕</button><button class="lb-n lb-prev" aria-label="السابقة">‹</button><figure><img alt=""><figcaption><b class="en" dir="ltr"></b><span class="ar"></span><i class="lb-c" dir="ltr"></i></figcaption></figure><button class="lb-n lb-next" aria-label="التالية">›</button>';
    document.body.appendChild(box);
    box.addEventListener('click', function (e) { if (e.target === box || e.target.className === 'lb-x') close(); });
    box.querySelector('.lb-prev').onclick = function () { go(-1); }; box.querySelector('.lb-next').onclick = function () { go(1); };
    box.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', function (e) { if (sx == null) return; var d = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1); });
  }
  function show() {
    var a = imgs[cur], im = box.querySelector('img');
    im.src = a.getAttribute('href'); im.alt = a.getAttribute('data-en') || '';
    box.querySelector('b').textContent = a.getAttribute('data-en') || ''; box.querySelector('span').textContent = a.getAttribute('data-ar') || '';
    box.querySelector('.lb-c').textContent = (cur + 1) + ' / ' + imgs.length;
  }
  function go(d) { cur = (cur + d + imgs.length) % imgs.length; show(); }
  function open(i) { if (!box) build(); cur = i; show(); box.hidden = false; document.documentElement.classList.add('lb-open'); box.querySelector('.lb-x').focus(); }
  function close() { box.hidden = true; document.documentElement.classList.remove('lb-open'); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('.g-strip .gi'); if (!a) return;
    e.preventDefault(); imgs = [].slice.call(document.querySelectorAll('.g-strip .gi')); open(imgs.indexOf(a));
  });
  document.addEventListener('keydown', function (e) {
    if (!box || box.hidden) return;
    if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') go(1); else if (e.key === 'ArrowLeft') go(-1);
  });
})();

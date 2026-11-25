#!/usr/bin/env python3
"""يبني نسخة النشر في dist/ : يضبط الروابط المطلقة (canonical/og/sitemap) ويولّد ملفات الوضع دون إنترنت.
  python3 tools/deploy.py --url https://USER.github.io/REPO            # نسخة كاملة (للاستضافة الخاصة)
  python3 tools/deploy.py --url https://example.com --public           # نسخة عامة: بدون ملفات PDF/صوت/فيديو المحمية بحقوق النشر
"""
import argparse, os, re, shutil, subprocess, sys, datetime
ap = argparse.ArgumentParser(); ap.add_argument('--url', default=''); ap.add_argument('--out', default='dist'); ap.add_argument('--public', action='store_true')
a = ap.parse_args()
root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..')); out = os.path.abspath(a.out)
url = a.url.rstrip('/')
if os.path.exists(out): shutil.rmtree(out)
ign = shutil.ignore_patterns('build', 'tools', '_notes', '.github', '.gitlab-ci.yml', 'docs', 'node_modules', '.git', 'dist', '*.zip', 'README.md')
shutil.copytree(root, out, ignore=ign)
if a.public:
    for d in ('media/files', 'media/audio', 'media/video'): shutil.rmtree(os.path.join(out, d), ignore_errors=True)
idx = open(os.path.join(out, 'index.html'), encoding='utf-8').read()
if a.public: idx = idx.replace('<head>', '<head>\n<script>window.PUBLIC_BUILD=true;</script>', 1)
if url:
    idx = idx.replace('<meta property="og:url" content="">', '<meta property="og:url" content="%s/">' % url)
    idx = idx.replace('content="assets/icons/og-image.jpg"', 'content="%s/assets/icons/og-image.jpg"' % url)
    if 'rel="canonical"' not in idx: idx = idx.replace('</head>', '<link rel="canonical" href="%s/">\n</head>' % url, 1)
    idx = idx.replace('"@type":"WebSite",', '"@type":"WebSite","url":"%s/",' % url, 1)
    today = datetime.date.today().isoformat()
    open(os.path.join(out, 'sitemap.xml'), 'w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>%s/</loc><lastmod>%s</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>\n</urlset>\n' % (url, today))
    rb = open(os.path.join(out, 'robots.txt')).read().rstrip() + '\nSitemap: %s/sitemap.xml\n' % url
    open(os.path.join(out, 'robots.txt'), 'w').write(rb)
open(os.path.join(out, 'index.html'), 'w', encoding='utf-8').write(idx)
open(os.path.join(out, '.nojekyll'), 'w').write('')
open(os.path.join(out, '_headers'), 'w').write('/sw.js\n  Cache-Control: no-cache\n/assets/precache.json\n  Cache-Control: no-cache\n/index.html\n  Cache-Control: no-cache\n')
subprocess.check_call([sys.executable, os.path.join(root, 'tools/make_sw.py'), out])
print('dist ready:', out, '| public' if a.public else '| full')

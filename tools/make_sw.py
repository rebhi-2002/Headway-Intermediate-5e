#!/usr/bin/env python3
"""يولّد assets/precache.json (قوائم الملفات للوضع دون إنترنت) ويختم نسخة sw.js.
الاستخدام: python3 tools/make_sw.py [مجلد_الموقع]   (الافتراضي: المجلد الأب لهذا السكربت)"""
import os, sys, json, time, re
root = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), '..'))
skip_dirs = {'build', 'tools', '_notes', '.github', 'docs', 'node_modules', '.git', 'dist'}
skip_files = {'sw.js', 'README.md', '.gitlab-ci.yml'}
g = {'shell': [], 'images': [], 'media': [], 'files': []}; size = {k: 0 for k in g}
for d, dirs, fs in os.walk(root):
    dirs[:] = [x for x in dirs if x not in skip_dirs]
    for f in fs:
        p = os.path.join(d, f); r = os.path.relpath(p, root).replace(os.sep, '/')
        if r in skip_files or r.startswith('assets/precache') or f.startswith('.') or r.endswith('.zip'): continue
        n = os.path.getsize(p)
        if r.startswith('media/files/'): k = 'files'
        elif r.startswith('media/audio/') or r.startswith('media/video/'): k = 'media'
        elif r.startswith('media/images/'): k = 'images'
        else: k = 'shell'
        g[k].append({'u': r, 's': n} if k != 'shell' else r); size[k] += n
g['shell'].insert(0, './')
out = dict(g); out['version'] = time.strftime('%Y%m%d%H%M%S')
for k in size: out[k + 'Bytes'] = size[k]
open(os.path.join(root, 'assets/precache.json'), 'w').write(json.dumps(out, ensure_ascii=False))
sw = open(os.path.join(root, 'sw.js')).read()
sw = re.sub(r"var VERSION = '[^']*';", "var VERSION = '%s';" % out['version'], sw, count=1)
open(os.path.join(root, 'sw.js'), 'w').write(sw)
print({k: (len(g[k]), round(size[k] / 1048576, 1)) for k in g}, out['version'])

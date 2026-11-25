#!/usr/bin/env python3
"""يمسح media/files/ ويدمج أي ملف جديد (pdf/pptx/html/…) في data/files.js
الاستخدام:  python3 tools/scan-files.py
لا يحذف أي عنصر موجود؛ يضيف فقط الدروس/الصيغ الناقصة."""
import os, re, json, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES_JS = os.path.join(ROOT, 'data', 'files.js')
BASE = os.path.join(ROOT, 'media', 'files')
EXT = {'.pdf': 'pdf', '.pptx': 'pptx', '.ppt': 'pptx', '.html': 'html', '.htm': 'html', '.docx': 'docx', '.xlsx': 'xlsx'}
src = open(FILES_JS, encoding='utf-8').read()
known = set(re.findall(r"'(media/files/[^']+)'", src))
found = {}
for d, _, fs in os.walk(BASE):
    for f in sorted(fs):
        ext = os.path.splitext(f)[1].lower()
        if ext not in EXT: continue
        rel = os.path.relpath(os.path.join(d, f), ROOT).replace(os.sep, '/')
        if rel in known: continue
        parts = rel.split('/')           # media/files/unit-1/<lesson>/<file>
        unit = 'u' + re.sub(r'\D', '', parts[2]) if len(parts) > 3 else 'u1'
        lesson = parts[3] if len(parts) > 4 else os.path.splitext(f)[0]
        found.setdefault((unit, lesson), {})[EXT[ext]] = rel
if not found: print('لا توجد ملفات جديدة.'); sys.exit(0)
add = ''
for (unit, lesson), fm in found.items():
    title = lesson.replace('-', ' ').replace('_', ' ').title()
    add += "  { id: %s, unit: %s, title: %s, titleAr: %s, desc: 'ملف مُضاف تلقائياً — سيُشرح لاحقاً.', formats: %s },\n" % (json.dumps(re.sub(r'[^\w-]', '', lesson).lower()), json.dumps(unit), json.dumps(title, ensure_ascii=False), json.dumps(title, ensure_ascii=False), json.dumps(fm))
i = src.rindex('];')
open(FILES_JS, 'w', encoding='utf-8').write(src[:i] + add + src[i:])
print('أُضيف %d عنصر:' % len(found), ', '.join(l for _, l in found))

// Run: node tests/i18n.test.js
// Checks the language data against the pages: every UI key exists in every language,
// every lesson section and code comment has a translation, and every page loads the layer.
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const root = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const LANGS = ['en', 'vi'];
const SOURCE = 'en';

/* ---------- Load every data file the way a browser would ---------- */

const sandbox = { window: {} };
vm.createContext(sandbox);
const dataFiles = ['i18n/en.js', 'i18n/vi.js'];
for (const lang of LANGS) {
  const dir = path.join(root, 'i18n', lang);
  if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) dataFiles.push(`i18n/${lang}/${f}`);
}
for (const f of dataFiles) vm.runInContext(read(f), sandbox, { filename: f });
const data = sandbox.window.STUDY_LAB_I18N_DATA;
assert.ok(Array.isArray(data) && data.length, 'language data registered');

const global = {}, pages = {};
for (const d of data) {
  assert.ok(LANGS.includes(d.lang), `known language: ${d.lang}`);
  if (d.page) {
    pages[d.page] = pages[d.page] || {};
    assert.ok(!pages[d.page][d.lang], `one ${d.lang} file for ${d.page}`);
    pages[d.page][d.lang] = { strings: d.strings || {}, comments: d.comments || {} };
  } else {
    assert.ok(!global[d.lang], `one site-wide file for ${d.lang}`);
    assert.ok(d.name && d.short, `${d.lang}: name and short label for the toggle`);
    global[d.lang] = d.strings;
  }
}
const has = (o, k) => !!o && Object.prototype.hasOwnProperty.call(o, k);
const nonEmpty = v => typeof v === 'string' && v.trim() !== '';

/* ---------- Site-wide UI strings: same keys in every language ---------- */

for (const lang of LANGS) assert.ok(global[lang], `site-wide strings for ${lang}`);
const globalKeys = Object.keys(global[SOURCE]).sort();
for (const lang of LANGS) {
  assert.deepStrictEqual(Object.keys(global[lang]).sort(), globalKeys, `i18n/${lang}.js has exactly the same keys as i18n/${SOURCE}.js`);
  for (const k of globalKeys) assert.ok(nonEmpty(global[lang][k]) || k === 'lab.doneSuffix', `${lang}: ${k} is not empty`);
}
// {placeholders} must match, otherwise a value silently disappears in one language.
const placeholders = s => [...String(s).matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort().join(',');
for (const k of globalKeys) for (const lang of LANGS) {
  assert.strictEqual(placeholders(global[lang][k]), placeholders(global[SOURCE][k]), `${lang}: ${k} keeps the same {placeholders}`);
}

/* ---------- Pages ---------- */

const index = read('index.html');
const lessons = [...index.matchAll(/class="navitem" href="([a-z0-9-]+)\.html"/g)].map(m => m[1]);
assert.ok(lessons.length >= 20, 'lessons found in the sidebar');
const htmlFiles = fs.readdirSync(root).filter(f => f.endsWith('.html')).sort();

// The pages' own highlighter regex, so comment detection matches the browser exactly.
const TOKEN = /(\/\/.*$|#(?![a-zA-Z]).*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+\.?\d*n?\b)/gm;
const MARKER = /\/\/|#(?![a-zA-Z])/g;
function commentTranslation(text, dict) { // same rule as i18n/i18n.js
  MARKER.lastIndex = 0;
  let m;
  while ((m = MARKER.exec(text))) {
    const key = text.slice(m.index + m[0].length).trim();
    if (key && has(dict, key)) return dict[key];
  }
  return null;
}
const decode = s => s.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

// Keys passed to I18N.t / text / html / attr (and lab.js's `t` alias) in a script.
function keysUsed(src, alsoBareT) {
  const used = [];
  const re = alsoBareT ? /(?:\bI18N\.(t|text|html|attr)|(?<![\w.])(t))\(/g : /\bI18N\.(t|text|html|attr)\(/g;
  let m;
  while ((m = re.exec(src))) {
    let depth = 1, j = re.lastIndex;
    for (; j < src.length && depth; j++) { if (src[j] === '(') depth++; else if (src[j] === ')') depth--; }
    let args = src.slice(re.lastIndex, j - 1)
      .replace(/getElementById\('[^']*'\)/g, '').replace(/querySelector\('[^']*'\)/g, '').replace(/field\([^)]*\)/g, '');
    const lits = [...args.matchAll(/'([A-Za-z][\w.-]*)'(\s*\+)?/g)].map(x => ({ key: x[1], prefix: !!x[2] }));
    if (m[1] === 'attr') lits.shift(); // attribute name
    used.push(...lits);
  }
  return used;
}
function resolves(key, prefix, page, lang) {
  const dicts = [page && page[lang] && page[lang].strings, global[lang]].filter(Boolean);
  return dicts.some(d => prefix ? Object.keys(d).some(k => k.startsWith(key)) : has(d, key));
}

let sectionCount = 0, commentCount = 0, keyCount = 0;
for (const f of htmlFiles) {
  const slug = f.replace(/\.html$/, '');
  const html = read(f);
  const page = pages[slug];
  assert.ok(page && page.vi, `${f}: has i18n/vi/${slug}.js`);

  // Scripts: data files first, then i18n.js, all before any inline script, lab.js, or quiz data.
  const srcs = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => ({ src: m[1], at: m.index }));
  const want = ['i18n/en.js', 'i18n/vi.js', ...(page.en ? [`i18n/en/${slug}.js`] : []), `i18n/vi/${slug}.js`, 'i18n/i18n.js'];
  const loaded = srcs.map(s => s.src).filter(s => s.startsWith('i18n/'));
  assert.deepStrictEqual(loaded, want, `${f}: loads the language files, then i18n/i18n.js`);
  for (const s of loaded) assert.ok(fs.existsSync(path.join(root, s)), `${f}: ${s} exists`);
  const i18nAt = srcs.find(s => s.src === 'i18n/i18n.js').at;
  const firstInline = html.indexOf('<script>');
  assert.ok(firstInline === -1 || i18nAt < firstInline, `${f}: i18n.js loads before the page's own scripts`);
  assert.ok(i18nAt < html.indexOf('src="lab.js"'), `${f}: i18n.js loads before lab.js`);

  // English page strings are a subset of every translation, with the same placeholders.
  if (page.en) for (const [k, v] of Object.entries(page.en.strings)) for (const lang of LANGS.filter(l => l !== SOURCE)) {
    assert.ok(has(page[lang].strings, k), `${f}: "${k}" exists in ${lang}`);
    assert.strictEqual(placeholders(page[lang].strings[k]), placeholders(v), `${f}: "${k}" keeps the same {placeholders} in ${lang}`);
  }

  // Every key the markup uses exists in every translation (page strings first, then site-wide).
  const markupKeys = [
    ...[...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]),
    ...[...html.matchAll(/data-i18n-html="([^"]+)"/g)].map(m => m[1]),
    ...[...html.matchAll(/data-i18n-attr="([^"]+)"/g)].flatMap(m => m[1].split(';').map(p => p.split(':')[1].trim())),
  ];
  assert.ok(markupKeys.length > 10, `${f}: markup is wired for translation`);
  for (const k of markupKeys) for (const lang of LANGS.filter(l => l !== SOURCE)) {
    assert.ok(resolves(k, false, page, lang), `${f}: key "${k}" has a ${lang} translation`);
    keyCount++;
  }

  // Every key a page script asks for exists in English and in every translation.
  const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).join('\n');
  for (const { key, prefix } of keysUsed(inline, false)) for (const lang of LANGS) {
    assert.ok(resolves(key, prefix, page, lang), `${f}: script key "${key}${prefix ? '…' : ''}" exists in ${lang}`);
  }

  if (slug === 'index') continue;

  // Lesson sections: title, subtitle and the "How it works" prose all have translations.
  for (const section of ['title', 'sub', 'explain']) {
    assert.ok(html.includes(`data-i18n-html="${section}"`), `${f}: section "${section}" is marked up`);
    for (const lang of LANGS.filter(l => l !== SOURCE)) {
      const v = page[lang].strings[section];
      assert.ok(nonEmpty(v), `${f}: section "${section}" has ${lang} content`);
      sectionCount++;
    }
  }
  const enExplain = html.match(/<div class="explain" data-i18n-html="explain">([\s\S]*?)\n  <\/div>\n/)[1];
  for (const lang of LANGS.filter(l => l !== SOURCE)) {
    const tr = page[lang].strings.explain;
    const count = (s, re) => (s.match(re) || []).length;
    for (const [what, re] of [['<h2>', /<h2>/g], ['<li>', /<li>/g], ['<ol', /<ol/g], ['<ul>', /<ul>/g], ['example box', /class="example-box"/g], ['<p>', /<p>/g]]) {
      assert.strictEqual(count(tr, re), count(enExplain, re), `${f}: ${lang} explain keeps the same structure (${what})`);
    }
    // Balanced markup, so swapping it in can't break the page.
    const stack = [];
    for (const t of tr.matchAll(/<(\/?)([a-z0-9]+)[^>]*?(\/?)>/g)) {
      if (t[3] || ['br', 'hr', 'img'].includes(t[2])) continue;
      if (!t[1]) stack.push(t[2]); else assert.strictEqual(stack.pop(), t[2], `${f}: ${lang} explain has balanced <${t[2]}>`);
    }
    assert.strictEqual(stack.length, 0, `${f}: ${lang} explain closes every tag`);
  }

  // Code comments shown in the code box (and its 💡 explanation bar) all have translations.
  const lines = [...html.matchAll(/<span class="codeline" data-line="\d+">([\s\S]*?)<\/span>/g)].map(m => decode(m[1]));
  for (const line of lines) {
    for (const tok of line.matchAll(TOKEN)) {
      if (!tok[1] || !/[a-z]{2}/i.test(tok[1])) continue;
      for (const lang of LANGS.filter(l => l !== SOURCE)) {
        assert.ok(commentTranslation(tok[1], page[lang].comments), `${f}: comment "${tok[1].trim()}" has a ${lang} translation`);
      }
      commentCount++;
    }
  }
}

// lab.js: every key it asks for exists in every language; every lesson has a title.
for (const { key, prefix } of keysUsed(read('lab.js'), true)) for (const lang of LANGS) {
  assert.ok(resolves(key, prefix, null, lang) || key.startsWith('lesson.'), `lab.js: key "${key}" exists in ${lang}`);
}
for (const slug of lessons) for (const lang of LANGS) assert.ok(nonEmpty(global[lang][`lesson.${slug}`]), `${lang}: lesson.${slug}`);

console.log(`i18n validation passed: ${LANGS.join('/')} · ${globalKeys.length} site-wide keys · ${htmlFiles.length} pages · ` +
  `${keyCount} markup keys · ${sectionCount} lesson sections · ${commentCount} code comments`);

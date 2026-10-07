// Run: node tests/lab-quizzes.test.js
const fs = require('fs'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..');
const Q = require(path.join(root, 'lab-quizzes.js'));
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const lessons = [...index.matchAll(/class="navitem" href="([a-z0-9-]+)\.html"/g)].map(m => m[1]);
const TRANSLATIONS = ['vi']; // every question must carry these, next to the English
assert.ok(lessons.length >= 20, 'lessons found in the sidebar');
for (const slug of lessons) {
  assert.ok(Q[slug], `quiz exists for ${slug}`);
  assert.strictEqual(Q[slug].length, 3, `${slug} has 3 questions`);
  Q[slug].forEach((q, i) => {
    assert.ok(q.q && q.why, `${slug}: question and explanation present`);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${slug}: answer index valid`);
    assert.strictEqual(new Set(q.options).size, q.options.length, `${slug}: options distinct`);
    for (const lang of TRANSLATIONS) {
      const tr = q[lang], where = `${slug} #${i + 1} [${lang}]`;
      assert.ok(tr && typeof tr === 'object', `${where}: translation present`);
      assert.ok(typeof tr.q === 'string' && tr.q.trim() && tr.q !== q.q, `${where}: question translated`);
      assert.ok(typeof tr.why === 'string' && tr.why.trim() && tr.why !== q.why, `${where}: explanation translated`);
      assert.ok(Array.isArray(tr.options), `${where}: options present`);
      assert.strictEqual(tr.options.length, q.options.length, `${where}: same number of options`);
      assert.ok(tr.options.every(o => typeof o === 'string' && o.trim()), `${where}: options non-empty`);
      assert.strictEqual(new Set(tr.options).size, tr.options.length, `${where}: options distinct`);
      // One shared answer index: a translation may not carry its own.
      assert.ok(tr.answer === undefined || tr.answer === q.answer, `${where}: same correct answer index`);
      assert.ok(Object.keys(tr).every(k => ['q', 'options', 'why'].includes(k)), `${where}: only q/options/why`);
    }
  });
}
assert.deepStrictEqual(Object.keys(Q).filter(k => !lessons.includes(k)), [], 'no quiz for a missing lesson');
for (const f of fs.readdirSync(root).filter(f => f.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(root, f), 'utf8');
  assert.ok(html.includes('src="lab.js"') && html.includes('href="lab.css"'), `${f} loads lab.js and lab.css`);
}
console.log(`study-lab quiz validation passed: ${lessons.length} lessons, ${lessons.length * 3} questions (+ ${TRANSLATIONS.join(', ')})`);

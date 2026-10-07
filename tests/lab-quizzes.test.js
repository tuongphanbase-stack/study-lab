// Run: node tests/lab-quizzes.test.js
const fs = require('fs'), path = require('path'), assert = require('assert');
const root = path.join(__dirname, '..');
const Q = require(path.join(root, 'lab-quizzes.js'));
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const lessons = [...index.matchAll(/class="navitem" href="([a-z0-9-]+)\.html"/g)].map(m => m[1]);
assert.ok(lessons.length >= 20, 'lessons found in the sidebar');
for (const slug of lessons) {
  assert.ok(Q[slug], `quiz exists for ${slug}`);
  assert.strictEqual(Q[slug].length, 3, `${slug} has 3 questions`);
  for (const q of Q[slug]) {
    assert.ok(q.q && q.why, `${slug}: question and explanation present`);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${slug}: answer index valid`);
    assert.strictEqual(new Set(q.options).size, q.options.length, `${slug}: options distinct`);
  }
}
assert.deepStrictEqual(Object.keys(Q).filter(k => !lessons.includes(k)), [], 'no quiz for a missing lesson');
for (const f of fs.readdirSync(root).filter(f => f.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(root, f), 'utf8');
  assert.ok(html.includes('src="lab.js"') && html.includes('href="lab.css"'), `${f} loads lab.js and lab.css`);
}
console.log(`study-lab quiz validation passed: ${lessons.length} lessons, ${lessons.length * 3} questions`);

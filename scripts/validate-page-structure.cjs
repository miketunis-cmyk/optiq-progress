// Enforces docs/page-structure.md: section order, card counts and no long prose above the folds.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf8');
const order = ['class="intro"', 'class="dash-tiles"', 'id="overall-heading"', 'id="pace-heading"', 'id="new-heading"', 'id="ready-heading"', 'id="next-heading"', 'id="area-heading"', 'class="promise"', 'id="lab-heading"', 'id="all-requests"', 'Earlier updates, in detail', '<footer>'];
let at = -1;
for (const marker of order) {
  const next = html.indexOf(marker);
  assert(next > at, `Section missing or out of order: ${marker}`);
  assert.equal(html.indexOf(marker, next + 1), -1, `Section repeated: ${marker}`);
  at = next;
}
const between = (a, b) => html.slice(html.indexOf(a), html.indexOf(b));
const count = (text, re) => (text.match(re) || []).length;
const words = text => text.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').trim().split(/\s+/).filter(Boolean).length;
assert.equal(count(between('class="dash-tiles"', 'id="overall-heading"'), /class="tile /g), 4, 'Exactly four tiles');
const pace = count(between('id="pace-heading"', 'id="new-heading"'), /<li/g);
assert(pace >= 1 && pace <= 5, 'Update pace holds one to five entries');
assert.equal(count(between('id="pace-heading"', 'id="new-heading"'), /class="latest"/g), 1, 'One entry is marked latest');
const fresh = count(between('id="new-heading"', 'id="ready-heading"'), /<article/g);
assert(fresh >= 6 && fresh <= 9, 'New this week holds six to nine cards');
assert(count(between('id="ready-heading"', 'id="next-heading"'), /class="step-card"/g) >= 1, 'Built and waiting has a card');
assert.equal(count(between('id="next-heading"', 'id="area-heading"'), /class="step-card"/g), 3, 'Coming next holds three cards');
const above = between('class="intro"', 'id="lab-heading"');
for (const [, tag, body] of above.matchAll(/<(p|span)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/g)) {
  assert(words(body) <= 25, `Text above the folds is too long (${words(body)} words): ${body.slice(0, 60)}`);
}
for (const [, body] of above.matchAll(/<h3>([\s\S]*?)<\/h3>/g)) assert(words(body) <= 6, `Card title too long: ${body}`);
for (const [, body] of above.matchAll(/<\/h3><p>([\s\S]*?)<\/p>/g)) assert(words(body) <= 15, `Card sentence too long: ${body}`);
assert(!/#\d{3,}|\bPR\b|hotfix|Hermes/i.test(above.replace(/<[^>]+>/g, ' ')), 'No internal references above the folds');
assert(html.indexOf('dashboard.js') > html.indexOf('app.js'), 'dashboard.js loads after app.js');
console.log('PASS: canonical page structure, card counts and plain-language limits hold.');

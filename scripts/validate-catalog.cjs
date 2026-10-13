const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = {window: {}};
for (const filename of ['data.js', 'consolidations.js', 'catalog.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, {filename});
}
const {OPTIQ_REQUESTS: originals, OPTIQ_CATALOG: items, OPTIQ_CONSOLIDATIONS: groups} = context.window;
assert.equal(new Set(originals.map(row => row.id)).size, originals.length, 'Original IDs must be unique');
assert.equal(new Set(items.map(row => row.id)).size, items.length, 'Work-item IDs must be unique');
const covered = items.flatMap(row => row.consolidatedSources || [row]);
assert.equal(covered.length, originals.length, 'No source may be dropped or repeated');
assert.equal(new Set(covered.map(row => row.id)).size, originals.length, 'Every source belongs to exactly one item');
for (const source of originals) {
  assert.equal(covered.find(row => row.id === source.id), source, `Original record changed: ${source.id}`);
}
for (const item of items.filter(row => row.consolidatedSources)) {
  assert(item.consolidatedSources.length >= 2, `A group needs overlapping sources: ${item.id}`);
  assert(item.title && item.description && item.detail && item.nextStep, `Missing combined scope: ${item.id}`);
  if (item.status === 'complete') {
    assert(item.consolidatedSources.every(row => row.status === 'complete'), `Unfinished work marked complete: ${item.id}`);
  }
  if (item.status === 'deferred') {
    assert(item.consolidatedSources.every(row => row.status === 'deferred'), `Active work deferred: ${item.id}`);
  }
}
const first = items.find(row => row.id === 'quickbooks-status-sync');
const second = items.find(row => row.id === 'optiq-billing-rules');
assert(first.topPriority && first.priorityOrder === 1, 'Invoice/payment sync must stay first');
assert(second.topPriority && second.priorityOrder === 2, 'Invoice rules must follow sync');
assert.equal(items.filter(row => row.topPriority).length, 2, 'Only the two billing increments have top priority');
assert(items.some(row => row.id === 'immunoassay-method-wording'), 'Unconfirmed test association must stay independently visible');
assert(items.some(row => row.id === 'conformity'), 'Conformity keeps its own Sample Details scope');
assert(items.some(row => row.id === 'white-label-attestation'), 'Consent capture remains distinct from document retrieval');
console.log(`PASS: ${originals.length} original records preserved exactly once in ${items.length} work items; ${groups.length} overlap groups; billing first; completion boundaries retained.`);

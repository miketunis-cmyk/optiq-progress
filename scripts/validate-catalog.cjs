const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = {window: {}};
for (const filename of ['data.js', 'consolidations.js', 'review.js', 'reconciliation.js', 'ownership.js', 'catalog.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, {filename});
}
const {OPTIQ_REQUESTS: originals, OPTIQ_CATALOG: items, OPTIQ_CONSOLIDATIONS: groups} = context.window;
assert.equal(new Set(originals.map(row => row.id)).size, originals.length, 'Original IDs must be unique');
assert.equal(new Set(items.map(row => row.id)).size, items.length, 'Work-item IDs must be unique');
function originalRecord(row) { while (row.previousReview) row = row.previousReview; return row; }
const covered = items.flatMap(row => row.consolidatedSources || [originalRecord(row)]);
assert.equal(covered.length, originals.length, 'No source may be dropped or repeated');
assert.equal(new Set(covered.map(row => row.id)).size, originals.length, 'Every source belongs to exactly one item');
for (const source of originals) {
  assert.equal(covered.find(row => row.id === source.id), source, `Original record changed: ${source.id}`);
}
for (const item of items.filter(row => row.consolidatedSources)) {
  assert(item.consolidatedSources.length >= 2, `A group needs overlapping sources: ${item.id}`);
  assert(item.title && item.description && item.detail && item.nextStep, `Missing combined scope: ${item.id}`);
  if (item.status === 'complete') {
    assert(item.consolidatedSources.every(row => row.status === 'complete') || item.deliveryEvidence?.kind === 'production', `Completion needs original closure or dated production evidence: ${item.id}`);
  }
  if (item.status === 'deferred') {
    assert(item.consolidatedSources.every(row => row.status === 'deferred'), `Active work deferred: ${item.id}`);
  }
}
const priorityIds = ['fentanyl-results', 'conformity', 'quickbooks-status-sync', 'optiq-billing-rules'];
for (const [index, id] of priorityIds.entries()) {
  const item = items.find(row => row.id === id);
  assert(item?.topPriority && item.priorityOrder === index + 1, `Priority order must preserve immediate Fentanyl focus, broader Conformity priority and the billing sequence: ${id}`);
}
assert.equal(items.filter(row => row.topPriority).length, priorityIds.length, 'Only Fentanyl, Conformity and the two billing increments have explicit priority');
const fentanyl = items.find(row => row.id === 'fentanyl-results');
assert(fentanyl?.consolidatedSources?.some(row => row.id === 'immunoassay-method-wording'), 'Confirmed Fentanyl wording must retain its original record within the Fentanyl item');
assert(items.some(row => row.id === 'conformity'), 'Conformity keeps its own Sample Details scope');
assert(items.some(row => row.id === 'white-label-attestation'), 'Consent capture remains distinct from document retrieval');
console.log(`PASS: ${originals.length} original records preserved exactly once in ${items.length} work items; ${groups.length} overlap groups; immediate Fentanyl focus, Conformity and billing sequence retained.`);

const dated = context.window.OPTIQ_RECONCILIATION;
assert.equal(dated.date, '2026-10-30');
for (const id of ['frozen-sort','printed-labels','net-content-undo','retained-intent','stale-tab-refresh','inventory-receiving-defaults','chemical-components-grid-stability','public-coa-access-hardening']) {
  const item = items.find(row => row.id === id);
  assert.equal(item?.status, 'complete', `Recorded delivery missing: ${id}`);
  assert.equal(item.deliveryEvidence?.kind, 'production', `Production evidence missing: ${id}`);
  assert(item.previousReview && item.evidenceUrl.includes(dated.checklistCommit), `History/snapshot missing: ${id}`);
}
for (const id of ['conformity','white-label-printed-lookup','quickbooks-status-sync','standard-based-net-content','automatic-analysis-evidence','white-label-release-emails']) {
  assert.notEqual(items.find(row => row.id === id)?.status, 'complete', `Open dependency incorrectly completed: ${id}`);
}
for (const [id, update] of Object.entries(dated.updates)) {
  assert(items.some(row => row.id === id), `Unknown reconciliation target: ${id}`);
  assert(update.currentAsOf === dated.date && update.evidenceUrl.includes(dated.checklistCommit), `Undated or unbound evidence: ${id}`);
}
assert(!items.find(row => row.id === 'portal-price-visibility').detail.includes('Stripe handles'));
assert(items.find(row => row.id === 'sample-details-documents').status !== 'complete', 'Attachment delivery must not silently close original-slip acceptance');
console.log(`PASS: ${Object.keys(dated.updates).length} dated reconciliations and ${dated.additions.length} new tracked scopes; production closures and activation/Demo holds preserved.`);

const assigned = context.window.OPTIQ_OWNERSHIP;
assert.equal(Object.keys(assigned.updates).length, 62, 'Retain the58 owner records and four separate new Demo scopes');
for (const [id, update] of Object.entries(assigned.updates)) {
  const item = items.find(row => row.id === id);
  assert.equal(item.currentOwner, update.currentOwner);
  if (assigned.assignedIds.includes(id)) assert(/\([^)]+,[a-f0-9-]{36}\)/.test(item.currentOwner), `Owner needs exact chat identity: ${id}`);
  assert(item.nextStep && item.ownershipRecordUrl && (item.status === 'complete' || item.currentBlocker), `Missing owner handoff: ${id}`);
  assert.equal(item.status, item.previousReview.status, `Assignment changed delivery status: ${id}`);
}
console.log('PASS:62 retained owner records;53 original exact chat assignments and9 retained source scopes; completed delivery and remaining blockers stay distinct.');

// The installed release must not close newer Demo-only scope or lose prior evidence.
assert.equal(originals.length,131);
assert.equal(items.length,104);
const installed=items.find(row=>row.id==='data-analysis-demo-review');
assert.equal(installed.status,'complete');
assert.equal(installed.deliveryEvidence.release,'5046f44ebc8a48bde8d03a8ad602c2448467547b');
assert.deepEqual(Array.from(installed.deliveryEvidence.prs),[6876,6991,7011]);
for(const id of ['data-analysis-ion-signal-match','data-analysis-spectrum-smoothing','data-analysis-ion-composite','data-analysis-stable-ion-table']) {
  const item=items.find(row=>row.id===id);
  assert(item && item.status!=='complete' && item.currentBlocker, 'New Demo scope cannot inherit production completion: '+id);
}
for(const [id,update] of Object.entries(dated.followUpUpdates)) {
  const item=items.find(row=>row.id===id);
  assert.equal(item.status,update.status || item.previousReview.status);
  assert.equal(update.currentAsOf,dated.followUpDate);
  assert(update.evidenceUrl.includes(dated.followUpChecklistCommit));
}
for(const id of ['bulk-coa-amendments','submission-matrix-save-parity','grid-widths','shared-lims-priorities']) {
  const item=items.find(row=>row.id===id);
  assert.equal(item.status,'check');
  assert(item.lastSubstantiveEvidenceAt && item.evidence.includes('not new implementation'));
}
console.log('PASS: installed scope closes independently; four newer scopes remain open; older recovery evidence dates and original history retained.');

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
const priorityIds = ['data-analysis-ion-composite', 'portal-price-visibility'];
for (const [index, id] of priorityIds.entries()) {
  const item = items.find(row => row.id === id);
  assert(item?.topPriority && item.priorityOrder === index + 1, `Priority order must preserve the latest chromatogram and website release decisions: ${id}`);
}
assert.equal(items.filter(row => row.topPriority).length, priorityIds.length, 'Only chromatograms and the coordinated website package have numbered priority in the latest decision');
const fentanyl = items.find(row => row.id === 'fentanyl-results');
assert(fentanyl?.consolidatedSources?.some(row => row.id === 'immunoassay-method-wording'), 'Confirmed Fentanyl wording must retain its original record within the Fentanyl item');
assert(items.some(row => row.id === 'conformity'), 'Conformity keeps its own Sample Details scope');
assert(items.some(row => row.id === 'white-label-attestation'), 'Consent capture remains distinct from document retrieval');
console.log(`PASS: ${originals.length} original records preserved exactly once in ${items.length} work items; ${groups.length} overlap groups; latest owner priorities applied.`);

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
assert.equal(Object.keys(assigned.updates).length, 65, 'Retain existing owner records plus three newly tracked source scopes');
for (const [id, update] of Object.entries(assigned.updates)) {
  let item = items.find(row => row.id === id);
  while (item && item.currentOwner !== update.currentOwner) item = item.previousReview;
  assert(item, `Earlier owner assignment must remain in history: ${id}`);
  if (assigned.assignedIds.includes(id)) assert(/\([^)]+,[a-f0-9-]{36}\)/.test(item.currentOwner), `Owner needs exact chat identity: ${id}`);
  assert(item.nextStep && item.ownershipRecordUrl && (item.status === 'complete' || item.currentBlocker), `Missing owner handoff: ${id}`);
  assert.equal(item.status, item.previousReview.status, `Assignment changed delivery status: ${id}`);
}
console.log('PASS:65 retained owner records;53 original exact chat assignments and12 retained source scopes; completed delivery and remaining blockers stay distinct.');

// The installed release must not close newer Demo-only scope or lose prior evidence.
assert.equal(originals.length,139);
assert.equal(items.length,112);
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
  assert(update.evidenceUrl.includes(dated.followUpChecklistCommit) ||
    (/^[a-f0-9]{40}$/.test(update.sourceHead || '') &&
      (update.evidenceUrl === `https://github.com/himmapan-lab/smpltrax-v2/pull/${update.sourcePullRequest}` ||
        (update.liveSourceEvidence?.release === update.sourceHead &&
          update.liveSourceEvidence.versionUrl === 'https://optiq.smpltrax.com/health/version' &&
          update.evidenceUrl === `https://github.com/himmapan-lab/smpltrax-v2/blob/${update.sourceHead}/${update.sourcePath}`))),
    `Current evidence needs a pinned checklist or recorded PR head: ${id}`);
}
for(const id of ['bulk-coa-amendments','submission-matrix-save-parity','shared-lims-priorities']) {
  const item=items.find(row=>row.id===id);
  assert.equal(item.status,'check');
  assert(item.lastSubstantiveEvidenceAt);
  let history=item;
  while(history && !history.evidence?.includes('not new implementation')) history=history.previousReview;
  assert(history, `Original recovery boundary must survive later evidence: ${id}`);
}
console.log('PASS: installed scope closes independently; four newer scopes remain open; older recovery evidence dates and original history retained.');

for(const id of ['my-products-disabled','compact-sample-photo-clarity','optiq-dark-branding']) {
 const item=items.find(row=>row.id===id);
 assert(item && item.status!=='complete' && item.currentBlocker && item.nextStep);
}
assert.equal(items.find(row=>row.id==='my-products-disabled').plannedAvailability,'off');
assert.equal(items.filter(row=>row.status==='complete').length,41);
console.log('PASS: full intake preserves delivery history and keeps My Products planned off.');

assert.equal(dated.followUpDate, '2026-11-02');
assert.equal(dated.followUpHistory.at(-1).date, '2026-11-02', 'Retain the preceding source-review snapshot');
assert(dated.followUpHistory.some(record=>record.date==='2026-10-30'), 'Retain earlier published evidence');
const newIds = ['reporting-hub-edit-safety', 'client-portal-coa-shortcuts', 'client-facing-clarity', 'order-validation-clarity', 'optiq-blue-accent'];
for (const id of newIds) {
  const item=items.find(row=>row.id===id);
  assert(item && item.status!=='complete' && item.currentBlocker && item.nextStep && item.currentOwner, `New source work is not installed delivery: ${id}`);
  assert.equal(item.currentAsOf, dated.followUpDate);
}
assert.equal(items.find(row=>row.id==='optiq-dark-branding').status,'built');
assert.equal(items.find(row=>row.id==='grid-widths').status,'partial');
assert.equal(items.find(row=>row.id==='conformity').sourcePullRequest,6735);
let productHistory = items.find(row=>row.id==='my-products-disabled');
while (productHistory && !productHistory.detail?.includes('backed out')) productHistory = productHistory.previousReview;
assert(productHistory, 'Retain the earlier backed-out My Products record when newer work supersedes it');
assert.equal(items.find(row=>row.id==='stable-released-coa-links').sourcePullRequest,7221);
for(const id of ['data-analysis-ion-signal-match','data-analysis-spectrum-smoothing','data-analysis-ion-composite','data-analysis-stable-ion-table','data-analysis-batches']) {
  const item=items.find(row=>row.id===id);
  assert.equal(item.sourcePullRequest,7263,`Current combined integration path missing: ${id}`);
  assert.notEqual(item.status,'complete');
}
const receipt=items.find(row=>row.id==='receipt-emails');
assert.equal(receipt.status,'complete');
assert.equal(receipt.deliveryEvidence.release,'5046f44ebc8a48bde8d03a8ad602c2448467547b');
assert.equal(receipt.liveSourceEvidence.release,receipt.deliveryEvidence.release);
assert.equal(receipt.currentBlocker,'');
assert.equal(items.find(row=>row.id==='invoice-status').status,'partial');
assert.notEqual(items.find(row=>row.id==='bulk-coa-amendments').status,'complete');
console.log('PASS: fresh live-source reconciliation closes receipt delivery and keeps narrower follow-ups and activation holds separate.');

// Reader wording must cover every item without changing the evidence underneath.
const catalogBeforeWording = JSON.stringify(items);
vm.runInNewContext(fs.readFileSync(path.join(root, 'plain-language.js'), 'utf8'), context);
const wording = context.window.OPTIQ_PLAIN_LANGUAGE;
assert.deepEqual(Object.keys(wording).sort(), Array.from(items, row => row.id).sort());
for (const item of items) {
  const view = wording[item.id];
  assert(view.title && view.summary, `Missing reader summary: ${item.id}`);
  assert(item.status === 'complete' || view.nextStep, `Missing plain next step: ${item.id}`);
}
assert.equal(JSON.stringify(items), catalogBeforeWording, 'Reader wording must not change source records');
console.log(`PASS: plain-language titles and summaries cover all ${items.length} items; statuses and source records unchanged.`);

// Other labs belong here only when the request concerns Optiq's partner-lab work.
const partnerWorkIds = new Set(['partner-inventory', 'partner-sample-routing']);
for (const item of items) {
  if (/mammoth|excelbis/i.test(JSON.stringify([item, wording[item.id]]))) {
    assert(partnerWorkIds.has(item.id), `Other-lab reference outside Optiq partner work: ${item.id}`);
  }
}
for (const id of ['mammoth-portal-coa', 'excelbis-billing-follow-on']) {
  assert(!items.some(item => item.id === id), `Separate lab rollout must stay outside Optiq: ${id}`);
}
assert(wording['partner-sample-routing'].summary.includes('ExcelBIS'), 'Retain the documented Optiq partner-lab relationship');
console.log('PASS: other-lab references are limited to Optiq partner work; separate rollouts are excluded.');

const execution = context.window.OPTIQ_EXECUTION_PLAN;
const executionStates = new Set(['needs-start', 'needs-plan', 'in-progress', 'almost-complete', 'needs-information']);
for (const [id, plan] of Object.entries(execution.items)) {
  assert(executionStates.has(plan.state), `Unknown work state: ${id}`);
  assert([plan.why, plan.owner, plan.done].every(value => typeof value === 'string' && value.trim()), `Missing planning context: ${id}`);
  assert(Array.isArray(plan.steps) && plan.steps.length > 0 && plan.steps.every(step => typeof step === 'string' && step.trim()), `Missing attack plan: ${id}`);
  const item = items.find(row => row.id === id);
  assert.equal(item.status, item.previousReview.status, `Planning must not change delivery status: ${id}`);
}
console.log(`PASS: ${Object.keys(execution.items).length} execution classifications have plans and completion criteria; delivery status is unchanged.`);

// Export only approved public fields from a private, latest-comment Hermes snapshot.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const source = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const context = {window:{}};
for (const file of ['data','consolidations','review','reconciliation','ownership','scope-audit','catalog']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file+'.js'),'utf8'), context);
}
const byId = new Map(source.records.map(record => [record.business_id, record]));
const known = {
  'certified-imports': ['Accepted CSV qualification owner', 'The existing builder owns the remaining export checks; the test environment is on hold.'],
  'chromatogram-source-selection': ['Completed implementation owner retains the work', 'The bounded implementation is recorded complete. Release and availability remain separate.'],
  'customer-results-api': ['Recorded Frontier review owner', 'The existing review owner is retained. Continued pickup and the remote connection still need confirmation.'],
  'inspection-rules': ['Recorded inspection implementation owner', 'The existing owner retains the source and checks; release preparation and target verification remain.'],
  'invoice-status': ['Recorded invoice implementation owner', 'The existing owner retains the source; the test environment and final workflow checks remain blocked.'],
  'live-vial-count': ['Release follow-through coordinator', 'Earlier implementation is retained; final release pickup and customer acceptance remain open.']
};
const items = {};
for (const item of context.window.OPTIQ_CATALOG) {
  const record = byId.get(item.id);
  assert(record, `Missing canonical record: ${item.id}`);
  const remaining = !['complete','deferred'].includes(item.status);
  if (remaining) assert(record.ownership_reconciliation && record.accountable_coordinator, `Missing ownership reconciliation: ${item.id}`);
  const recorded = record.responsible_worker && known[item.id];
  items[item.id] = {
    boardId: record.board_task_id,
    revision: record.canonical_revision,
    workState: record.observed_status,
    coordinator: remaining ? 'Smpltrax · Hermy coordinator' : null,
    implementation: remaining ? (recorded?.[0] || 'Implementation owner not yet confirmed') : null,
    ownershipDetail: remaining ? (recorded?.[1] || 'Hermy is responsible for confirming who will finish the remaining work. Earlier contributors and their work remain recorded in the history.') : null,
    checkedAt: record.ownership_reconciliation?.checked_at || source.generated_at
  };
}
const day = Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'America/Los_Angeles',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(source.generated_at)).map(p=>[p.type,p.value]));
const date = `${day.year}-${day.month}-${day.day}`;
const output = {observedAt:source.generated_at, date, source:'Hermes smpltrax board; latest task and typed-comment records', items};
fs.writeFileSync(path.join(root,'progress-snapshot.js'), "'use strict';\n// Public allowlist only; private board histories and worker identities stay in Hermes.\nwindow.OPTIQ_PROGRESS_SNAPSHOT = "+JSON.stringify(output,null,2)+';\n');
console.log(`Exported ${Object.keys(items).length} canonical references and public ownership summaries.`);

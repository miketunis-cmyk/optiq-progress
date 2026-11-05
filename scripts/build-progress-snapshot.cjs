// Export only approved public fields from a private, latest-comment Hermes snapshot.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const assert = require('node:assert/strict');
const hasQueuedAcceptance = require('./ownership-acceptance.cjs');
const root = path.resolve(__dirname, '..');
const source = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const context = {window:{}};
for (const file of ['data','consolidations','review','reconciliation','ownership','scope-audit','catalog']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file+'.js'),'utf8'), context);
}
const byId = new Map(source.records.map(record => [record.business_id, record]));
const known = {
  'certified-imports': ['Earlier CSV contributor retained', 'The earlier contributor remains recorded; acceptance of the remaining scope must be confirmed.'],
  'chromatogram-source-selection': ['Completed implementation owner retains the work', 'The bounded implementation is recorded complete. Release and availability remain separate.'],
  'customer-results-api': ['Recorded Frontier review owner', 'The existing review owner is retained. Continued pickup and the remote connection still need confirmation.'],
  'inspection-rules': ['Recorded inspection implementation owner', 'The existing owner retains the source and checks; release preparation and target verification remain.'],
  'invoice-status': ['Recorded invoice implementation owner', 'The existing owner retains the source; the test environment and final workflow checks remain blocked.'],
  'live-vial-count': ['Release follow-through coordinator', 'Earlier implementation is retained; final release pickup and customer acceptance remain open.']
};
const accepted = {
  'certified-certificate-extraction': ['Reference-value contributor', 'The existing CSV contributor accepted the separate certificate-reading and reviewed lot-save work, queued after CSV qualification. Staff confirmation and provider-access boundaries remain.'],
  'client-portal-coa-shortcuts': ['Client portal contributor', 'The existing My Products contributor accepted certificate-shortcut qualification and focused regression fixes. The exact source, access behavior and integration prerequisites must be confirmed first.'],
  'client-facing-clarity': ['Client portal contributor', 'The existing My Products contributor accepted the remaining portal counts, certificate notices and permission-message clarity within the agreed scope. Source and behavior must be bound before work starts.'],
  'certified-imports': ['CSV qualification contributor', 'The existing contributor accepted the remaining save, reopen, CSV download and access checks. The test-environment hold remains; reading supplier certificates is a separate subtask.'],
  'my-products-disabled': ['My Products contributor', 'The existing contributor accepted the remaining Optiq integration and affected checks. Customer draft-policy, shared integration and activation prerequisites remain.'],
  'invoice-status': ['Invoice implementation contributor', 'The existing contributor accepted the invoice-status integration and remaining checks. Confirming the authoritative billing-data source remains a separate ownership gap.'],
  'inspection-rules': ['Inspection implementation contributor', 'The existing contributor accepted the color-picker integration and its checks. Broader scientific inspection rules and certificate changes are outside that acceptance.'],
  'live-vial-count': ['Amount Required implementation contributor', 'The existing contributor accepted the amount display, saved-result checks and related repairs. Lab mapping and scientific quantities remain with their existing authorities.'],
  'data-analysis-batches': ['Data Analysis batch contributor', 'The existing contributor accepted the purity-batch and late-arrival integration and remaining checks. Broader Data Analysis and scientific calculations are outside that acceptance.'],
  'optiq-dark-branding': ['Branding qualification contributor', 'The existing contributor accepted checks that the final website, application and email assets match the approved branding. This is qualification only; new implementation or redesign is not assigned.']
};
const gapSummaries = {
  historical_route_unavailable: 'The earlier owner cannot currently be reached through the established route. Hermy is responsible for arranging an accepted handoff while preserving the existing work.',
  existing_claude_route_or_capacity_gap: 'An existing contributor is identified, but the remaining assignment cannot yet be confirmed through an available route. Hermy owns the handoff and next action.',
  successor_manager_confirmed_implementation_scope_gap: 'The current UI coordinator is identified. Hermy is confirming which existing contributor will finish this item’s remaining implementation.',
  implementation_identity_or_scope_gap: 'Hermy is matching the existing source work to a contributor and a specific finishing scope. Implementation ownership is still unconfirmed.',
  input_owner_distinct_implementation_gap: 'The required lab or partner inputs remain with their existing owners. Hermy is confirming whether further implementation is needed and who will own it.',
  archived_source_custodian_remaining_scope_gap: 'The earlier source custodian is retained in the history. Hermy is arranging a current owner for the remaining implementation.',
  source_owner_declined_undefined_finishing_scope: 'The earlier contributor’s completed work is preserved. Hermy must define the remaining integration scope and obtain acceptance from a suitable contributor.'
};
const items = {};
for (const item of context.window.OPTIQ_CATALOG) {
  const record = byId.get(item.id);
  assert(record, `Missing canonical record: ${item.id}`);
  const remaining = !['complete','deferred'].includes(item.status);
  if (remaining) assert(record.ownership_reconciliation && record.accountable_coordinator, `Missing ownership reconciliation: ${item.id}`);
  const recorded = record.responsible_worker && known[item.id];
  const engineering = remaining && hasQueuedAcceptance(record);
  const qualification = remaining && hasQueuedAcceptance(record, 'qualification');
  const confirmed = engineering || qualification;
  if (confirmed) assert(accepted[item.id], `Review public wording for newly accepted scope: ${item.id}`);
  const summary = confirmed ? accepted[item.id] : recorded;
  items[item.id] = {
    boardId: record.board_task_id,
    revision: record.canonical_revision,
    workState: record.observed_status,
    coordinator: remaining ? 'Smpltrax · Hermy coordinator' : null,
    implementation: remaining ? (confirmed ? `Confirmed queued ${qualification?'qualification owner':'owner'} · ${summary[0]}` : summary?.[0] || 'Implementation owner not yet confirmed') : null,
    ownershipDetail: remaining ? (summary?.[1] || gapSummaries[record.ownership_reconciliation?.implementation_state] || 'Hermy is responsible for confirming who will finish the remaining work. Earlier contributors and their work remain recorded in the history.') + (confirmed ? ' This confirms queued responsibility for the stated scope; existing execution and release holds remain.' : '') : null,
    acceptedQueuedScope: Boolean(confirmed),
    acceptedOwnershipKind: engineering ? 'implementation' : qualification ? 'qualification' : null,
    checkedAt: record.ownership_reconciliation?.checked_at || source.generated_at
  };
}
const day = Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'America/Los_Angeles',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(source.generated_at)).map(p=>[p.type,p.value]));
const date = `${day.year}-${day.month}-${day.day}`;
const output = {observedAt:source.generated_at, date, source:'Hermes smpltrax board; latest task and typed-comment records', items};
fs.writeFileSync(path.join(root,'progress-snapshot.js'), "'use strict';\n// Public allowlist only; private board histories and worker identities stay in Hermes.\nwindow.OPTIQ_PROGRESS_SNAPSHOT = "+JSON.stringify(output,null,2)+';\n');
console.log(`Exported ${Object.keys(items).length} canonical references and public ownership summaries.`);

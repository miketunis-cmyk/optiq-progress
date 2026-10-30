'use strict';
// Original records remain intact; confirmed additions and review updates retain provenance.
const review = window.OPTIQ_REVIEW || {updates:{}, additions:[]};
const originalSourceIds = new Set(window.OPTIQ_REQUESTS.map(request => request.id));
for (const request of review.additions) {
  if (originalSourceIds.has(request.id)) throw new Error(`Duplicate review source: ${request.id}`);
  originalSourceIds.add(request.id);
  window.OPTIQ_REQUESTS.push(request);
}
// A lossless view over the original requests: original IDs, statuses and history stay intact.
const sourceById = new Map(window.OPTIQ_REQUESTS.map(request => [request.id, request]));
const consolidationBySource = new Map();
for (const group of window.OPTIQ_CONSOLIDATIONS) {
  if (!group.sourceIds.includes(group.id)) throw new Error(`Missing group anchor: ${group.id}`);
  for (const id of group.sourceIds) {
    if (!sourceById.has(id) || consolidationBySource.has(id)) throw new Error(`Invalid consolidation source: ${id}`);
    consolidationBySource.set(id, group);
  }
}
window.OPTIQ_CATALOG = window.OPTIQ_REQUESTS.flatMap(request => {
  const group = consolidationBySource.get(request.id);
  if (!group) return [request];
  if (group.id !== request.id) return [];
  const sources = group.sourceIds.map(id => sourceById.get(id));
  return [{
    ...request,
    meetingPriority: sources.some(source => source.meetingPriority),
    ...group,
    consolidatedSources: sources,
    currentAsOf: group.currentAsOf || '2026-10-12',
    currentDisposition: group.currentDisposition || group.detail,
    currentEvidenceBoundary: group.currentEvidenceBoundary || 'Consolidation preserves the original evidence and delivery status; no new implementation or release verification.',
    evidence: group.evidence || `Consolidated ${sources.length} overlapping records on 12 October. Original requirements, progress and evidence are retained below; this is a planning update.`
  }];
});

const catalogIds = new Set(window.OPTIQ_CATALOG.map(request => request.id));
for (const id of Object.keys(review.updates)) {
  if (!catalogIds.has(id)) throw new Error(`Review update has no work item: ${id}`);
}
window.OPTIQ_CATALOG = window.OPTIQ_CATALOG.map(request => {
  const update = review.updates[request.id];
  return update ? {...request, ...update, previousReview: request} : request;
});

const reconciliation = window.OPTIQ_RECONCILIATION;
if (reconciliation) {
  for (const id of Object.keys(reconciliation.updates)) {
    if (!catalogIds.has(id)) throw new Error(`Reconciliation update has no work item: ${id}`);
  }
  window.OPTIQ_CATALOG = window.OPTIQ_CATALOG.map(request => {
    const update = reconciliation.updates[request.id];
    return update ? {...request, ...update, previousReview: request} : request;
  });
}

const ownership = window.OPTIQ_OWNERSHIP;
if (ownership) {
  for (const id of Object.keys(ownership.updates)) {
    if (!catalogIds.has(id)) throw new Error(`Owner assignment has no work item: ${id}`);
  }
  window.OPTIQ_CATALOG = window.OPTIQ_CATALOG.map(request => {
    const update = ownership.updates[request.id];
    return update ? {...request, ...update, previousReview: request} : request;
  });
}

'use strict';
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

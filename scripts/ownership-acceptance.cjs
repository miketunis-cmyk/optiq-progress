// A historical name or coordinator role cannot become an accepted implementation owner.
module.exports = function hasQueuedAcceptance(record, kind = 'implementation') {
  const assignment = record.ownership_reconciliation;
  const evidence = assignment?.acceptance_evidence;
  const acceptedId = assignment?.accepted_owner?.native_id;
  const worker = record.responsible_worker;
  const workerId = worker?.native_id || worker?.native_thread_id || worker?.native_session_id;
  return Boolean(['implementation','qualification'].includes(kind)
    && assignment?.implementation_state === `accepted_queued_bounded_${kind}`
    && acceptedId && workerId === acceptedId
    && assignment.accepted_scope?.trim()
    && evidence?.turn_id && evidence?.message_id && evidence?.completed_at);
};

'use strict';
const requests=window.OPTIQ_CATALOG;
const plain=r=>window.OPTIQ_PLAIN_LANGUAGE?.[r.id]||{title:r.title,summary:r.description,nextStep:r.question||r.nextStep};
function nextStep(r){return plain(r).nextStep||(r.status==='complete'?'Recorded complete. See the details for the dated record.':'See the supporting record for the next step.');}
const statuses={queued:{label:'Planned',rank:2},working:{label:'In progress',rank:0},built:{label:'Built · not yet available',rank:1},complete:{label:'Recorded complete',rank:4},unverified:{label:'Needs checking',rank:3},deferred:{label:'On hold',rank:5},proposed:{label:'Idea',rank:6}};
const noteLabels={optiq:'Needs an Optiq answer',partial:'Some parts delivered',verification:'Checks still needed'};
// Present delivery stage separately from waiting reasons; keep source records intact.
function progressStage(r){
  if(r.status==='partial')return 'working';
  if(r.status==='check')return 'unverified';
  if(r.status==='optiq')return r.stage===0?'queued':r.stage===1?'working':r.stage===2?'built':'unverified';
  return Object.hasOwn(statuses,r.status)?r.status:'unverified';
}
function recordedNotes(r){
  if(Array.isArray(r.currentNotes))return [...new Set(r.currentNotes)];
  const notes=[];
  if(r.status==='optiq')notes.push('optiq');
  if(r.status==='partial')notes.push('partial');
  if(progressStage(r)==='unverified')notes.push('verification');
  if(r.consolidatedSources)notes.push(...r.consolidatedSources.flatMap(recordedNotes));
  return [...new Set(notes)];
}
function requestNotes(r){
  const notes=recordedNotes(r).filter(note=>note!=='optiq');
  if(window.OPTIQ_LAB_QUESTIONS.some(question=>question.sourceIds.includes(r.id)))notes.push('optiq');
  return [...new Set(notes)];
}
function matchesStatus(r,status){return status==='all'||(status==='reviewed'?r.reviewedOn===window.OPTIQ_REVIEW?.date:status==='meeting'?r.meetingPriority:progressStage(r)===status);}

let selectedStatus='all',selectedNote=null,query='',selectedView='remaining';
const viewLabels={remaining:'Remaining work',completed:'Completed',deferred:'Deferred / not proceeding'};
const workView=window.OPTIQ_WORK_VIEW;
const groups=window.OPTIQ_WORK_GROUPS;
const currentOwnership=r=>window.OPTIQ_PROGRESS_SNAPSHOT.items[r.id];
const inView=r=>workView.viewFor(r)===selectedView;
const expandedRequests=new Set();
const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=status=>status==='complete'?'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>':status==='unverified'?'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 5.8v4.7m0 2.5v1"/></svg>':status==='built'?'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>':'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 2"/></svg>';
function renderViews(){
  document.querySelector('#work-views').innerHTML=Object.entries(viewLabels).map(([view,label])=>`<button class="progress-filter" type="button" data-view="${view}" aria-pressed="${selectedView===view}">${escapeHtml(label)} <span class="filter-count">${requests.filter(r=>workView.viewFor(r)===view).length}</span></button>`).join('');
}
function renderSummary(){
  const stages=selectedView==='remaining'?['queued','working','built','unverified']:selectedView==='completed'?['complete']:['deferred'];
  document.querySelector('#summary').innerHTML=stages.map(status=>`<button class="summary-button" type="button" data-status="${status}" aria-pressed="${selectedStatus===status}"><span class="summary-number">${requests.filter(r=>inView(r)&&progressStage(r)===status).length}</span><span class="summary-label">${statuses[status].label}</span></button>`).join('');
  document.querySelector('#stage-context').textContent='Counts refer to individual work items, including subtasks. Grouping does not change their delivery status. A completed code milestone does not establish availability at the lab.';
}
function renderProgressFilters(){
  const scopes=selectedView==='remaining'?['all','reviewed','meeting','unverified','proposed']:['all'];
  document.querySelector('#progress-filters').innerHTML=scopes.map(status=>{
    const label=status==='all'?'All in this view':status==='reviewed'?'Reviewed 23 Oct':status==='meeting'?'From lab meetings':status==='proposed'?'Ideas':statuses[status].label;
    return `<button class="progress-filter" type="button" data-status="${status}" aria-pressed="${status===selectedStatus}"><span>${escapeHtml(label)}</span><span class="filter-count">${requests.filter(r=>inView(r)&&matchesStatus(r,status)).length}</span></button>`;
  }).join('');
  document.querySelector('#note-filters').innerHTML=Object.keys(noteLabels).map(note=>`<button class="progress-filter" type="button" data-note="${note}" aria-pressed="${note===selectedNote}"><span>${escapeHtml(noteLabels[note])}</span><span class="filter-count">${requests.filter(r=>inView(r)&&requestNotes(r).includes(note)).length}</span></button>`).join('');
}
function labQuestions(){return window.OPTIQ_LAB_QUESTIONS;}
function renderLabQuestions(){document.querySelector('#lab-questions').innerHTML=labQuestions().map((q,i)=>`<article class="question"><div class="question-label"><span class="question-number">${i+1}</span><h3>${escapeHtml(q.title)}</h3></div><div><p>${escapeHtml(q.question)}</p></div></article>`).join('');}
// Show dated records instead of unmeasured completion percentages.
function evidenceBasis(r){
  if(r.evidenceBasis)return r.evidenceBasis;
  if(r.id==='receipt-emails')return 'Release prepared · not live';
  if(r.reviewedOn)return 'Scope confirmed with Mike';
  return r.status==='complete'?'Earlier completion record':'Earlier status record';
}
function statusRecord(r){
  const date=r.currentAsOf||r.reviewedOn;
  const label=date?new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(date+'T00:00:00Z')):'Date not recorded';
  return '<div class="status-record"><span>Status recorded: '+(date?'<time datetime="'+escapeHtml(date)+'">'+escapeHtml(label)+'</time>':label)+'</span></div>';
}
function requestReference(r){return [r.area,r.topPriority?'Priority request':r.meetingPriority?'From lab meetings':''].filter(Boolean).join(' · ');}
function originalNotes(r){
  if(!r.consolidatedSources)return '';
  return `<details class="original-notes"><summary>Original requirements and progress (${r.consolidatedSources.length} records)</summary>${r.consolidatedSources.map(source=>`<article><h4>${escapeHtml(source.title)}</h4><p><strong>${escapeHtml(statuses[progressStage(source)].label)}</strong>${requestNotes(source).length?' · '+escapeHtml(requestNotes(source).map(note=>noteLabels[note]).join(' · ')):''}${source.currentAsOf?' · '+escapeHtml(source.currentAsOf):''}</p><p>${escapeHtml(source.description)}</p><p>${escapeHtml(source.detail)}</p><p><strong>Next step:</strong> ${escapeHtml(source.nextStep||source.description)}</p>${source.question?`<p><strong>Lab question:</strong> ${escapeHtml(source.question)}</p>`:''}${source.currentOwner?`<p><strong>Owner:</strong> ${escapeHtml(source.currentOwner)}</p>`:''}<p>${escapeHtml(source.evidence)}</p>${source.currentEvidenceBoundary?`<p>${escapeHtml(source.currentEvidenceBoundary)}</p>`:''}</article>`).join('')}</details>`;
}
function previousReviewNotes(r){
  const records=[];
  for(let previous=r.previousReview;previous;previous=previous.previousReview)records.push(previous);
  if(!records.length)return '';
  return `<details class="original-notes"><summary>Earlier work-item history (${records.length} dated records)</summary>${records.map(previous=>`<article><h4>${escapeHtml(previous.title)}</h4><p>${escapeHtml(previous.currentAsOf||previous.reviewedOn||'Earlier record')} · ${escapeHtml(statuses[progressStage(previous)].label)}</p><p>${escapeHtml(previous.detail||previous.description||'')}</p><p><strong>Recorded owner:</strong> ${escapeHtml(previous.currentOwner||'Not recorded')}</p><p><strong>Recorded next step:</strong> ${escapeHtml(previous.nextStep||'Not recorded')}</p><p>${escapeHtml(previous.evidence||'')}</p></article>`).join('')}</details>`;
}
function ownershipSummary(r){
  const o=currentOwnership(r);
  return o?.coordinator?`<p class="ownership-summary"><strong>Follow-through:</strong> ${escapeHtml(o.coordinator)}<br><span>${escapeHtml(o.implementation)}</span></p>`:'';
}
function ownershipDetails(r){
  const o=currentOwnership(r);
  if(!o)return '';
  return `<section class="ownership-record" aria-label="Current ownership">${ownershipSummary(r)}${o.ownershipDetail?`<p>${escapeHtml(o.ownershipDetail)}</p>`:''}<p>Work record: ${escapeHtml(({waiting:'Waiting for the next step',blocked:'Blocked',done:'Recorded work milestone complete',retained:'Retained for follow-up'})[o.workState]||o.workState)}. This is separate from the delivery status above.</p><p class="row-reference">Ownership checked ${escapeHtml(new Date(o.checkedAt).toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric', timeZone:'America/Los_Angeles'}))} · Hermes item ${escapeHtml(o.boardId)} · ${escapeHtml(o.revision)}</p></section>`;
}
const executionLabels={
  'needs-start':'Needs to be started',
  'needs-plan':'Needs a plan',
  'in-progress':'Already in progress',
  'almost-complete':'Almost completed',
  'needs-information':'Requires more information'
};
function executionDetails(r){
  const p=r.executionPlan;
  if(!p)return '';
  return `<section class="execution-plan" aria-label="Delivery plan"><p><strong>Earlier planning state:</strong> ${escapeHtml(executionLabels[p.state])}</p><p>${escapeHtml(p.why)}</p><p><strong>Earlier planning owner / pickup:</strong> ${escapeHtml(p.owner)}</p><ol>${p.steps.map(step=>`<li>${escapeHtml(step)}</li>`).join('')}</ol><p><strong>Done when:</strong> ${escapeHtml(p.done)}</p></section>`;
}
function row(r){
  if(r.presentationGroup)return groupRow(r);
  const expanded=expandedRequests.has(r.id);
  const stage=progressStage(r);
  const view=plain(r);
  const notes=requestNotes(r).map(note=>`<span class="request-note ${note}">${escapeHtml(noteLabels[note])}</span>`).join('');
  return `<tr class="request-row is-${r.status}" data-request="${r.id}"><td class="request-name"><div class="request-title-line"><button class="row-toggle" type="button" aria-label="${expanded?'Hide':'Show'} details for ${escapeHtml(view.title)}" aria-expanded="${expanded}" aria-controls="detail-${r.id}" data-detail="${r.id}"><span class="expand-mark" aria-hidden="true">${expanded?'−':'+'}</span></button><span class="request-title">${escapeHtml(view.title)}</span></div><p class="request-summary">${escapeHtml(view.summary)}</p><span class="row-reference">${escapeHtml(requestReference(r))}</span></td><td class="request-status"><span class="badge ${stage}">${icon(stage)}${escapeHtml(statuses[stage].label)}</span>${notes?`<div class="request-notes">${notes}</div>`:''}${statusRecord(r)}</td><td class="request-next ${requestNotes(r).includes('optiq')?'lab-next':''}">${escapeHtml(nextStep(r))}${ownershipSummary(r)}</td></tr><tr class="detail-row" id="detail-${r.id}" ${expanded?'':'hidden'}><td colspan="3"><div class="row-detail"><p>${escapeHtml(view.summary)}</p>${ownershipDetails(r)}<p><strong>What happens next:</strong> ${escapeHtml(nextStep(r))}</p>${r.evidenceUrl?`<p><a href="${escapeHtml(r.evidenceUrl)}" target="_blank" rel="noopener">Supporting record for this update</a></p>`:''}<details class="original-notes"><summary>Technical details and earlier updates</summary>${executionDetails(r)}<p><strong>Original title:</strong> ${escapeHtml(r.title)}</p><p>${escapeHtml(r.description)}</p><p>${escapeHtml(r.detail)}</p>${r.currentBlocker?`<p><strong>What is still outstanding:</strong> ${escapeHtml(r.currentBlocker)}</p>`:''}<p><strong>Recorded next step:</strong> ${escapeHtml(r.question||r.nextStep||r.description)}</p><p><strong>Earlier recorded contact:</strong> ${escapeHtml(r.currentOwner||'Named owner not recorded')}${r.ownershipRecordUrl?` · <a href="${escapeHtml(r.ownershipRecordUrl)}" target="_blank" rel="noopener">Assignment record</a>`:''}</p><p><strong>Status based on:</strong> ${escapeHtml(evidenceBasis(r))}</p><p><strong>Supporting information:</strong> ${escapeHtml(r.evidence)}</p>${r.currentEvidenceBoundary?`<p>${escapeHtml(r.currentEvidenceBoundary)}</p>`:''}${originalNotes(r)}${previousReviewNotes(r)}</details>${r.reviewPreview?(document.querySelector('#approval-preview-template')?.innerHTML||''):''}</div></td></tr>`;
}

function groupRow(r){
  const g=r.presentationGroup,expanded=expandedRequests.has(r.id);
  const counts=Object.entries(viewLabels).map(([view,label])=>{const n=r.members.filter(child=>workView.viewFor(child)===view).length;return n?`${n} ${{remaining:'remaining',completed:'completed',deferred:'deferred'}[view]}`:'';}).filter(Boolean).join(' · ');
  return `<tr class="request-row grouped-request" data-request="${r.id}"><td class="request-name"><div class="request-title-line"><button class="row-toggle" type="button" aria-label="${expanded?'Hide':'Show'} subtasks for ${escapeHtml(g.title)}" aria-expanded="${expanded}" aria-controls="detail-${r.id}" data-detail="${r.id}"><span class="expand-mark" aria-hidden="true">${expanded?'−':'+'}</span></button><span class="request-title">${escapeHtml(g.title)}</span></div><p class="request-summary">${escapeHtml(g.summary)}</p><span class="row-reference">${r.members.length} independently tracked subtasks</span></td><td class="request-status"><span class="badge working">${escapeHtml(counts)}</span><p class="status-record">Each subtask keeps its own status.</p></td><td class="request-next">Expand for each subtask’s next step and owner.${ownershipSummary(r)}</td></tr><tr class="detail-row" id="detail-${r.id}" ${expanded?'':'hidden'}><td colspan="3"><div class="row-detail"><p>Showing ${r.visibleMembers.length} of ${r.members.length} subtasks in this view and filter. Completed and deferred subtasks stay available in their own views.</p>${r.visibleMembers.map(subtask).join('')}</div></td></tr>`;
}
function subtask(r){
  const p=plain(r),stage=progressStage(r);
  return `<details class="subtask" id="subtask-${r.id}"><summary><span>${escapeHtml(p.title)}</span><span class="badge ${stage}">${escapeHtml(statuses[stage].label)}</span></summary><p>${escapeHtml(p.summary)}</p><p><strong>Next step:</strong> ${escapeHtml(nextStep(r))}</p>${statusRecord(r)}${ownershipDetails(r)}<details class="original-notes"><summary>Scope, evidence and history</summary><p>${escapeHtml(r.description)}</p><p>${escapeHtml(r.detail)}</p>${r.currentBlocker?`<p><strong>Outstanding:</strong> ${escapeHtml(r.currentBlocker)}</p>`:''}${executionDetails(r)}<p>${escapeHtml(r.evidence||'')}</p>${r.evidenceUrl?`<p><a href="${escapeHtml(r.evidenceUrl)}" target="_blank" rel="noopener">Supporting record</a></p>`:''}${r.currentEvidenceBoundary?`<p>${escapeHtml(r.currentEvidenceBoundary)}</p>`:''}${originalNotes(r)}${previousReviewNotes(r)}</details></details>`;
}
function visibleRequests(){
  const terms=query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  const matches=(r,group)=>matchesStatus(r,selectedStatus)&&(!selectedNote||requestNotes(r).includes(selectedNote))&&terms.every(term=>[r.id,group?.title||'',group?.summary||'',plain(r).title,plain(r).summary,nextStep(r),r.title,r.description,r.detail,r.ref||'',r.currentOwner||'',r.nextStep||'',currentOwnership(r)?.implementation||'',currentOwnership(r)?.coordinator||'',currentOwnership(r)?.boardId||'',r.executionPlan?.why||'',...(r.executionPlan?.steps||[]),r.area,statuses[progressStage(r)].label,...requestNotes(r).map(note=>noteLabels[note]),...(r.consolidatedSources||[]).flatMap(source=>[source.id,source.title,source.description,source.detail,source.question||'',source.nextStep||''])].join(' ').toLocaleLowerCase().includes(term));
  return workView.project(requests,groups,selectedView,matches).sort((a,b)=>Number(Boolean(b.topPriority))-Number(Boolean(a.topPriority))||(a.priorityOrder||0)-(b.priorityOrder||0)||Number(Boolean(b.meetingPriority))-Number(Boolean(a.meetingPriority))||statuses[progressStage(a)].rank-statuses[progressStage(b)].rank);
}
function render(){
  renderViews();renderSummary();renderProgressFilters();
  const visible=visibleRequests(),count=visible.reduce((sum,r)=>sum+(r.visibleMembers?.length||1),0),total=requests.filter(inView).length;
  document.querySelector('#request-grid').innerHTML=`<table><caption class="sr-only">Optiq ${escapeHtml(viewLabels[selectedView].toLowerCase())}, progress and next steps</caption><thead><tr><th scope="col">Request</th><th scope="col">Status</th><th scope="col">What happens next</th></tr></thead><tbody>${visible.map(row).join('')}</tbody></table>`;
  document.querySelector('#results-count').textContent=`${visible.length} ${visible.length===1?'entry':'entries'} · ${count} of ${total} work items in ${viewLabels[selectedView].toLowerCase()}`;
  const filtered=selectedStatus!=='all'||selectedNote||query.trim();
  document.querySelector('#reset-filters').hidden=!filtered;document.querySelector('#filter-actions').hidden=!filtered;document.querySelector('#empty-state').hidden=visible.length>0;document.querySelector('#request-grid').hidden=!visible.length;
  document.querySelector('.lab-panel').hidden=selectedView!=='remaining';
}
function showApprovalPreview(){if(location.hash!=='#verification-design-preview')return;selectedView='completed';selectedStatus='all';selectedNote=null;query='';document.querySelector('#search').value='';expandedRequests.add('verify-results-font');render();document.querySelector('#verification-design-preview').scrollIntoView({block:'start'});}
function reset(){selectedStatus='all';selectedNote=null;query='';document.querySelector('#search').value='';render();}
document.querySelector('#work-views').addEventListener('click',event=>{const button=event.target.closest('[data-view]');if(!button)return;selectedView=button.dataset.view;reset();});
document.querySelector('#summary').addEventListener('click',event=>{const button=event.target.closest('[data-status]');if(!button)return;selectedStatus=selectedStatus===button.dataset.status?'all':button.dataset.status;render();});
document.querySelector('#progress-filters').addEventListener('click',event=>{const button=event.target.closest('[data-status]');if(!button)return;selectedStatus=button.dataset.status;render();});
document.querySelector('#note-filters')?.addEventListener('click',event=>{const button=event.target.closest('[data-note]');if(!button)return;selectedNote=selectedNote===button.dataset.note?null:button.dataset.note;render();});
document.querySelector('#search').addEventListener('input',event=>{query=event.target.value;render();});
document.querySelector('#request-grid').addEventListener('click',event=>{const button=event.target.closest('[data-detail]');if(!button)return;const expanded=button.getAttribute('aria-expanded')==='true';if(expanded)expandedRequests.delete(button.dataset.detail);else expandedRequests.add(button.dataset.detail);button.setAttribute('aria-expanded',String(!expanded));button.setAttribute('aria-label',`${expanded?'Show':'Hide'} details for ${groups.find(g=>g.id===button.dataset.detail)?.title||plain(requests.find(r=>r.id===button.dataset.detail)).title}`);button.querySelector('.expand-mark').textContent=expanded?'+':'−';document.getElementById(`detail-${button.dataset.detail}`).hidden=expanded;});
window.addEventListener('hashchange',showApprovalPreview);
document.querySelector('#lab-questions').addEventListener('click',event=>{if(event.target.closest('.review-preview-link')){event.preventDefault();if(location.hash==='#verification-design-preview')showApprovalPreview();else location.hash='verification-design-preview';}});
document.querySelector('#reset-filters').addEventListener('click',reset);document.querySelector('#empty-reset').addEventListener('click',reset);document.querySelector('#print-button').addEventListener('click',()=>window.print());
document.querySelector('#copy-questions').addEventListener('click',async()=>{const text='Optiq — details to confirm\n\n'+labQuestions().map((r,i)=>`${i+1}. ${r.title}\n${r.question}`).join('\n\n');const feedback=document.querySelector('#copy-feedback');try{await navigator.clipboard.writeText(text);feedback.textContent='Questions copied. Ready to paste into your shared discussion.';}catch{feedback.textContent='Select and copy the questions above; clipboard access is unavailable in this browser.';}});
renderLabQuestions();render();showApprovalPreview();

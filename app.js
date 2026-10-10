'use strict';
const requests=window.OPTIQ_REQUESTS;
const statuses={queued:{label:'Planned',rank:2},working:{label:'In progress',rank:0},built:{label:'Built — release pending',rank:1},complete:{label:'Completed',rank:4},unverified:{label:'Status unverified',rank:3},deferred:{label:'Deferred',rank:5},proposed:{label:'Idea',rank:6}};
const noteLabels={optiq:'Needs Optiq input',partial:'Partly delivered',verification:'Needs verification'};
// Present delivery stage separately from waiting reasons; keep source records intact.
function progressStage(r){
  if(r.status==='partial')return 'working';
  if(r.status==='check')return 'unverified';
  if(r.status==='optiq')return r.stage===0?'queued':r.stage===1?'working':r.stage===2?'built':'unverified';
  return Object.hasOwn(statuses,r.status)?r.status:'unverified';
}
function requestNotes(r){
  const notes=[];
  if(r.status==='optiq')notes.push('optiq');
  if(r.status==='partial')notes.push('partial');
  if(progressStage(r)==='unverified')notes.push('verification');
  return notes;
}
function matchesStatus(r,status){return status==='all'||(status==='meeting'?r.meetingPriority:progressStage(r)===status);}

let selectedStatus='all',selectedNote=null,query='';
const expandedRequests=new Set();
const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=status=>status==='complete'?'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>':status==='unverified'?'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 5.8v4.7m0 2.5v1"/></svg>':status==='built'?'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>':'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 2"/></svg>';
function renderSummary(){
  document.querySelector('#summary').innerHTML=['queued','working','built','complete'].map(status=>`<button class="summary-button" type="button" data-status="${status}" aria-pressed="${selectedStatus===status}"><span class="summary-number">${requests.filter(r=>progressStage(r)===status).length}</span><span class="summary-label">${statuses[status].label}</span></button>`).join('');
  const context=document.querySelector('#stage-context');
  if(context)context.textContent=`Progress is based on saved records. ${requests.filter(r=>progressStage(r)==='unverified').length} requests still need an availability check; ${requests.filter(r=>r.status==='deferred').length} requests are deferred and ${requests.filter(r=>r.status==='proposed').length} are ideas.`;
}
function renderProgressFilters(){
  const container=document.querySelector('#progress-filters');
  if(!container.childElementCount){
    const scopes=['all','meeting',...(document.querySelector('#note-filters')?[]:['unverified']),'deferred','proposed'];
    container.innerHTML=scopes.map(status=>{
      const label=status==='all'?'All requests':status==='meeting'?'Meeting priorities':status==='proposed'?'Ideas':statuses[status].label;
      const count=requests.filter(r=>matchesStatus(r,status)).length;
      return `<button class="progress-filter" type="button" data-status="${status}" aria-pressed="false"><span>${escapeHtml(label)}</span><span class="filter-count">${count}</span></button>`;
    }).join('');
  }
  container.querySelectorAll('[data-status]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.status===selectedStatus)));
  const notes=document.querySelector('#note-filters');
  if(!notes)return;
  if(!notes.childElementCount)notes.innerHTML=Object.keys(noteLabels).map(note=>`<button class="progress-filter" type="button" data-note="${note}" aria-pressed="false"><span>${escapeHtml(noteLabels[note])}</span><span class="filter-count">${requests.filter(r=>requestNotes(r).includes(note)).length}</span></button>`).join('');
  notes.querySelectorAll('[data-note]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.note===selectedNote)));
}
function labQuestions(){return requests.filter(r=>r.status==='optiq').sort((a,b)=>Number(Boolean(b.nextReview))-Number(Boolean(a.nextReview)));}
function renderLabQuestions(){document.querySelector('#lab-questions').innerHTML=labQuestions().map((r,i)=>`<article class="question"><div class="question-label"><span class="question-number">${i+1}</span><h3>${escapeHtml(r.title)}</h3></div><div><p>${escapeHtml(r.question)}</p>${r.reviewPreview?`<a class="review-preview-link" href="${escapeHtml(r.reviewPreview)}">View approval preview</a>`:''}</div></article>`).join('');}
// Milestone positions are categorical, not estimates of work completed.
// Foundation credit is tied to an existing capability recorded in the evidence.
const foundations={
  "coa-summary-layout": "Multi-page COA tools and the detailed Conformity layout are built; combining and releasing the new tests remains.",
  "requested-white-label-photo": "Photo selection exists for eligible private drafts; customer requests awaiting approval need a separate fix.",
  "inspection-checks": "Receiving checks already exist; seal observations still need to save correctly.",
  "frozen-sort": "Rows can already be sorted; keeping them still while editing is planned.",
  "printed-labels": "Label printing already exists; separate symbol and test-name choices are planned.",
  "manufacturer-profiles": "Manufacturer names can be entered by hand; saved choices are planned.",
  "client-bulk-white-label": "The client bulk white-label request screen is built and tested; current Optiq availability is not confirmed.",
  "blend-potency": "The COA layout is ready; entering each peptide’s result still needs work.",
  "certified-imports": "Values can be entered by hand; spreadsheet export and document import are planned."
};
function engineeringProgress(r){
  if(r.id==='verify-results-font'&&r.status!=='complete')return {label:'Design ready',fill:92,basis:r.currentDisposition||r.evidence};
  if(r.status==='check')return {label:'Delivery needs checking',fill:28,basis:r.currentDisposition||r.evidence};
  if(r.status==='deferred')return {label:'Deferred request',fill:28,basis:r.currentDisposition||r.evidence};
  if(r.status==='proposed')return {label:'Idea recorded',fill:28,basis:r.currentDisposition||r.evidence};
  if(r.id==='multi-lab-login')return {label:'Plan ready',fill:55,basis:r.currentDisposition||r.evidence};
  if(r.id==='grid-widths')return {label:'Readability released; width choices built',fill:92,basis:r.currentDisposition||r.evidence};
  if(r.status==='complete')return {label:'Recorded as complete',fill:100,basis:r.currentDisposition||r.evidence};
  if(r.id==='universal-import')return {label:'Some parts built',fill:76,basis:r.currentDisposition||r.evidence};
  if(r.status==='partial')return {label:'Partly delivered',fill:76,basis:r.currentDisposition||r.evidence};
  if(r.stage===2)return {label:'Feature built',fill:92,basis:r.currentDisposition||r.evidence};
  if(foundations[r.id])return {label:'Starting tools ready',fill:55,basis:r.currentDisposition||r.evidence};
  if(r.stage===1)return {label:'Work in progress',fill:76,basis:r.currentDisposition||r.evidence};
  return {label:'Request recorded',fill:28,basis:r.currentDisposition||r.evidence};
}
function progressBar(r){if(['unverified','deferred','proposed'].includes(progressStage(r)))return '';const p=engineeringProgress(r);return `<div class="engineering-progress" title="${escapeHtml(p.basis)}"><div class="milestone-track" role="img" aria-label="Progress: ${escapeHtml(p.label)}. ${escapeHtml(p.basis)}"><span style="width:${p.fill}%"></span><i></i><i></i><i></i></div><span class="milestone-label">${escapeHtml(p.label)}</span></div>`;}
function requestReference(r){return [r.area,r.nextReview?'Next review':r.meetingPriority?'Meeting priority':''].filter(Boolean).join(' · ');}
function row(r){
  const expanded=expandedRequests.has(r.id);
  const stage=progressStage(r);
  const notes=requestNotes(r).map(note=>`<span class="request-note ${note}">${escapeHtml(noteLabels[note])}</span>`).join('');
  return `<tr class="request-row is-${r.status}" data-request="${r.id}"><td class="request-name"><div class="request-title-line"><button class="row-toggle" type="button" aria-label="${expanded?'Hide':'Show'} details for ${escapeHtml(r.title)}" aria-expanded="${expanded}" aria-controls="detail-${r.id}" data-detail="${r.id}"><span class="expand-mark" aria-hidden="true">${expanded?'−':'+'}</span></button><span class="request-title">${escapeHtml(r.title)}</span></div><span class="row-reference">${escapeHtml(requestReference(r))}</span></td><td class="request-status"><span class="badge ${stage}">${icon(stage)}${escapeHtml(statuses[stage].label)}</span>${notes?`<div class="request-notes">${notes}</div>`:''}${progressBar(r)}</td><td class="request-next ${r.question?'lab-next':''}">${escapeHtml(r.question||r.nextStep||r.description)}</td></tr><tr class="detail-row" id="detail-${r.id}" ${expanded?'':'hidden'}><td colspan="3"><div class="row-detail"><p>${escapeHtml(r.description)}</p><p>${escapeHtml(r.detail)}</p><span>${escapeHtml(r.evidence)}</span>${r.reviewPreview?(document.querySelector('#approval-preview-template')?.innerHTML||''):''}</div></td></tr>`;
}
function visibleRequests(){
  const terms=query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  return requests.filter(r=>matchesStatus(r,selectedStatus)&&(!selectedNote||requestNotes(r).includes(selectedNote))&&terms.every(term=>[r.title,r.description,r.detail,r.ref||'',r.area,statuses[progressStage(r)].label,...requestNotes(r).map(note=>noteLabels[note]),r.meetingPriority?'meeting priority':'',r.nextReview?'next review':''].join(' ').toLocaleLowerCase().includes(term))).sort((a,b)=>Number(Boolean(b.nextReview))-Number(Boolean(a.nextReview))||Number(Boolean(b.meetingPriority))-Number(Boolean(a.meetingPriority))||Number(requestNotes(b).includes('optiq'))-Number(requestNotes(a).includes('optiq'))||statuses[progressStage(a)].rank-statuses[progressStage(b)].rank);
}
function render(){renderSummary();renderProgressFilters();const visible=visibleRequests();document.querySelector('#request-grid').innerHTML=`<table><caption class="sr-only">Optiq feature requests, progress, and next steps</caption><thead><tr><th scope="col">Request</th><th scope="col">Progress / notes</th><th scope="col">Next step</th></tr></thead><tbody>${visible.map(row).join('')}</tbody></table>`;document.querySelector('#results-count').textContent=`${visible.length} of ${requests.length} requests`;const filtered=selectedStatus!=='all'||selectedNote||query.trim();document.querySelector('#reset-filters').hidden=!filtered;document.querySelector('#filter-actions').hidden=!filtered;document.querySelector('#empty-state').hidden=visible.length>0;document.querySelector('#request-grid').hidden=!visible.length;}
function showApprovalPreview(){if(location.hash!=='#verification-design-preview')return;selectedStatus='all';selectedNote=null;query='';document.querySelector('#search').value='';expandedRequests.add('verify-results-font');render();document.querySelector('#verification-design-preview').scrollIntoView({block:'start'});}
function reset(){selectedStatus='all';selectedNote=null;query='';document.querySelector('#search').value='';render();}
document.querySelector('#summary').addEventListener('click',event=>{const button=event.target.closest('[data-status]');if(!button)return;selectedStatus=selectedStatus===button.dataset.status?'all':button.dataset.status;render();});
document.querySelector('#progress-filters').addEventListener('click',event=>{const button=event.target.closest('[data-status]');if(!button)return;selectedStatus=button.dataset.status;render();});
document.querySelector('#note-filters')?.addEventListener('click',event=>{const button=event.target.closest('[data-note]');if(!button)return;selectedNote=selectedNote===button.dataset.note?null:button.dataset.note;render();});
document.querySelector('#search').addEventListener('input',event=>{query=event.target.value;render();});
document.querySelector('#request-grid').addEventListener('click',event=>{const button=event.target.closest('[data-detail]');if(!button)return;const expanded=button.getAttribute('aria-expanded')==='true';if(expanded)expandedRequests.delete(button.dataset.detail);else expandedRequests.add(button.dataset.detail);button.setAttribute('aria-expanded',String(!expanded));button.setAttribute('aria-label',`${expanded?'Show':'Hide'} details for ${requests.find(r=>r.id===button.dataset.detail).title}`);button.querySelector('.expand-mark').textContent=expanded?'+':'−';document.getElementById(`detail-${button.dataset.detail}`).hidden=expanded;});
window.addEventListener('hashchange',showApprovalPreview);
document.querySelector('#lab-questions').addEventListener('click',event=>{if(event.target.closest('.review-preview-link')){event.preventDefault();if(location.hash==='#verification-design-preview')showApprovalPreview();else location.hash='verification-design-preview';}});
document.querySelector('#reset-filters').addEventListener('click',reset);document.querySelector('#empty-reset').addEventListener('click',reset);document.querySelector('#print-button').addEventListener('click',()=>window.print());
document.querySelector('#copy-questions').addEventListener('click',async()=>{const text='Optiq — details to confirm\n\n'+labQuestions().map((r,i)=>`${i+1}. ${r.title}\n${r.question}`).join('\n\n');const feedback=document.querySelector('#copy-feedback');try{await navigator.clipboard.writeText(text);feedback.textContent='Questions copied. Ready to paste into your shared discussion.';}catch{feedback.textContent='Select and copy the questions above; clipboard access is unavailable in this browser.';}});
renderLabQuestions();render();showApprovalPreview();

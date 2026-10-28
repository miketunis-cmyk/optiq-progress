'use strict';
const requests=window.OPTIQ_CATALOG;
const statuses={queued:{label:'Planned',rank:2},working:{label:'In progress',rank:0},built:{label:'Built — release pending',rank:1},complete:{label:'Completed',rank:4},unverified:{label:'Verification pending',rank:3},deferred:{label:'Deferred',rank:5},proposed:{label:'Idea',rank:6}};
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
  if(r.consolidatedSources)notes.push(...r.consolidatedSources.flatMap(requestNotes));
  return [...new Set(notes)];
}
function matchesStatus(r,status){return status==='all'||(status==='reviewed'?r.reviewedOn===window.OPTIQ_REVIEW?.date:status==='meeting'?r.meetingPriority:progressStage(r)===status);}

let selectedStatus='all',selectedNote=null,query='';
const expandedRequests=new Set();
const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=status=>status==='complete'?'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>':status==='unverified'?'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 5.8v4.7m0 2.5v1"/></svg>':status==='built'?'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>':'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 2"/></svg>';
function renderSummary(){
  document.querySelector('#summary').innerHTML=['queued','working','built','complete'].map(status=>`<button class="summary-button" type="button" data-status="${status}" aria-pressed="${selectedStatus===status}"><span class="summary-number">${requests.filter(r=>progressStage(r)===status).length}</span><span class="summary-label">${statuses[status].label}</span></button>`).join('');
  const context=document.querySelector('#stage-context');
  if(context)context.textContent=`Statuses reflect the dated evidence on each item. This page update is not a fresh live test of every feature. Verification is pending for ${(n=>n===1?'1 request':n+' requests')(requests.filter(r=>progressStage(r)==='unverified').length)}; ${requests.filter(r=>r.status==='deferred').length} requests are deferred and ${requests.filter(r=>r.status==='proposed').length} are ideas. Friday’s confirmed review: ${requests.filter(r=>r.reviewedOn==='2026-10-23').length} items; ${requests.filter(r=>r.reviewedOn==='2026-10-23'&&r.status==='complete').length} completed and ${requests.filter(r=>r.reviewedOn==='2026-10-23'&&r.status!=='complete').length} open.`;
}
function renderProgressFilters(){
  const container=document.querySelector('#progress-filters');
  if(!container.childElementCount){
    const scopes=['all','reviewed','meeting',...(document.querySelector('#note-filters')?[]:['unverified']),'deferred','proposed'];
    container.innerHTML=scopes.map(status=>{
      const label=status==='all'?'All requests':status==='reviewed'?'23 Oct review':status==='meeting'?'Meeting priorities':status==='proposed'?'Ideas':statuses[status].label;
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
function labQuestions(){return requests.filter(r=>requestNotes(r).includes('optiq')&&r.question).sort((a,b)=>Number(Boolean(b.topPriority))-Number(Boolean(a.topPriority))||(a.priorityOrder||0)-(b.priorityOrder||0)||Number(Boolean(b.nextReview))-Number(Boolean(a.nextReview)));}
function renderLabQuestions(){document.querySelector('#lab-questions').innerHTML=labQuestions().map((r,i)=>`<article class="question"><div class="question-label"><span class="question-number">${i+1}</span><h3>${escapeHtml(r.title)}</h3></div><div><p>${escapeHtml(r.question)}</p>${r.reviewPreview?`<a class="review-preview-link" href="${escapeHtml(r.reviewPreview)}">View approval preview</a>`:''}</div></article>`).join('');}
// Show dated records instead of unmeasured completion percentages.
function evidenceBasis(r){
  if(r.evidenceBasis)return r.evidenceBasis;
  if(r.id==='receipt-emails')return 'Release prepared · not live';
  if(r.reviewedOn)return 'Scope confirmed with Mike';
  return r.status==='complete'?'Earlier completion record':'Earlier status record';
}
function statusRecord(r){
  const date=r.currentAsOf||r.reviewedOn;
  return '<div class="status-record"><span>'+escapeHtml(evidenceBasis(r))+'</span><span>Status recorded: '+(date?'<time datetime="'+escapeHtml(date)+'">'+escapeHtml(date)+'</time>':'date not recorded')+'</span></div>';
}
function requestReference(r){return [r.area,r.priorityLabel||(r.nextReview?'Next review':r.meetingPriority?'Meeting priority':'')].filter(Boolean).join(' · ');}
function originalNotes(r){
  if(!r.consolidatedSources)return '';
  return `<details class="original-notes"><summary>Original requirements and progress (${r.consolidatedSources.length} records)</summary>${r.consolidatedSources.map(source=>`<article><h4>${escapeHtml(source.title)}</h4><p><strong>${escapeHtml(statuses[progressStage(source)].label)}</strong>${requestNotes(source).length?' · '+escapeHtml(requestNotes(source).map(note=>noteLabels[note]).join(' · ')):''}${source.currentAsOf?' · '+escapeHtml(source.currentAsOf):''}</p><p>${escapeHtml(source.description)}</p><p>${escapeHtml(source.detail)}</p><p><strong>Next step:</strong> ${escapeHtml(source.nextStep||source.description)}</p>${source.question?`<p><strong>Lab question:</strong> ${escapeHtml(source.question)}</p>`:''}${source.currentOwner?`<p><strong>Owner:</strong> ${escapeHtml(source.currentOwner)}</p>`:''}<p>${escapeHtml(source.evidence)}</p>${source.currentEvidenceBoundary?`<p>${escapeHtml(source.currentEvidenceBoundary)}</p>`:''}</article>`).join('')}</details>`;
}
function previousReviewNotes(r){
  if(!r.previousReview)return "";
  const previous=r.previousReview;
  return `<details class="original-notes"><summary>Earlier work-item record — superseded by the dated update above</summary><article><h4>${escapeHtml(previous.title)}</h4><p>${escapeHtml(previous.detail)}</p><p>${escapeHtml(previous.evidence||"")}</p></article></details>`;
}
function row(r){
  const expanded=expandedRequests.has(r.id);
  const stage=progressStage(r);
  const notes=requestNotes(r).map(note=>`<span class="request-note ${note}">${escapeHtml(noteLabels[note])}</span>`).join('');
  return `<tr class="request-row is-${r.status}" data-request="${r.id}"><td class="request-name"><div class="request-title-line"><button class="row-toggle" type="button" aria-label="${expanded?'Hide':'Show'} details for ${escapeHtml(r.title)}" aria-expanded="${expanded}" aria-controls="detail-${r.id}" data-detail="${r.id}"><span class="expand-mark" aria-hidden="true">${expanded?'−':'+'}</span></button><span class="request-title">${escapeHtml(r.title)}</span></div><span class="row-reference">${escapeHtml(requestReference(r))}</span></td><td class="request-status"><span class="badge ${stage}">${icon(stage)}${escapeHtml(statuses[stage].label)}</span>${notes?`<div class="request-notes">${notes}</div>`:''}${statusRecord(r)}</td><td class="request-next ${r.question?'lab-next':''}">${escapeHtml(r.question||r.nextStep||r.description)}<p class="request-owner"><strong>Owner:</strong> ${escapeHtml(r.currentOwner||'Named owner not recorded')}</p></td></tr><tr class="detail-row" id="detail-${r.id}" ${expanded?'':'hidden'}><td colspan="3"><div class="row-detail"><p>${escapeHtml(r.description)}</p><p>${escapeHtml(r.detail)}</p><p><strong>Evidence:</strong> ${escapeHtml(r.evidence)}</p>${r.currentEvidenceBoundary?`<p>${escapeHtml(r.currentEvidenceBoundary)}</p>`:''}${originalNotes(r)}${previousReviewNotes(r)}${r.reviewPreview?(document.querySelector('#approval-preview-template')?.innerHTML||''):''}</div></td></tr>`;
}
function visibleRequests(){
  const terms=query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  return requests.filter(r=>matchesStatus(r,selectedStatus)&&(!selectedNote||requestNotes(r).includes(selectedNote))&&terms.every(term=>[r.title,r.description,r.detail,r.ref||'',r.priorityLabel||'',r.currentOwner||'',r.nextStep||'',r.area,statuses[progressStage(r)].label,...requestNotes(r).map(note=>noteLabels[note]),r.meetingPriority?'meeting priority':'',r.nextReview?'next review':'',...(r.consolidatedSources||[]).flatMap(source=>[source.title,source.description,source.detail,source.question||'',source.nextStep||'',source.ref||''])].join(' ').toLocaleLowerCase().includes(term))).sort((a,b)=>Number(Boolean(b.topPriority))-Number(Boolean(a.topPriority))||(a.priorityOrder||0)-(b.priorityOrder||0)||Number(Boolean(b.nextReview))-Number(Boolean(a.nextReview))||Number(Boolean(b.meetingPriority))-Number(Boolean(a.meetingPriority))||Number(requestNotes(b).includes('optiq'))-Number(requestNotes(a).includes('optiq'))||statuses[progressStage(a)].rank-statuses[progressStage(b)].rank);
}
function render(){renderSummary();renderProgressFilters();const visible=visibleRequests();document.querySelector('#request-grid').innerHTML=`<table><caption class="sr-only">Optiq feature requests, progress, and next steps</caption><thead><tr><th scope="col">Request</th><th scope="col">Progress / notes</th><th scope="col">Next step / owner</th></tr></thead><tbody>${visible.map(row).join('')}</tbody></table>`;document.querySelector('#results-count').textContent=`${visible.length} of ${requests.length} work items · ${window.OPTIQ_REQUESTS.length} source requests retained`;const filtered=selectedStatus!=='all'||selectedNote||query.trim();document.querySelector('#reset-filters').hidden=!filtered;document.querySelector('#filter-actions').hidden=!filtered;document.querySelector('#empty-state').hidden=visible.length>0;document.querySelector('#request-grid').hidden=!visible.length;}
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

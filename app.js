'use strict';
const requests=window.OPTIQ_REQUESTS;
const statuses={complete:{label:'Completed',rank:5},built:{label:'Built',rank:2},working:{label:'In progress',rank:1},optiq:{label:'Needs Optiq input',rank:0},queued:{label:'Planned',rank:4},partial:{label:'Partly built',rank:2.5},check:{label:'Needs checking',rank:1.5},deferred:{label:'Deferred',rank:6},proposed:{label:'Idea',rank:7}};
let selectedStatus='all',query='';
const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=status=>status==='complete'?'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>':status==='optiq'?'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 5.8v4.7m0 2.5v1"/></svg>':status==='built'?'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>':'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 2"/></svg>';
function renderSummary(){document.querySelector('#summary').innerHTML=['complete','built','working','optiq'].map(status=>`<button class="summary-button" type="button" data-status="${status}" aria-pressed="${selectedStatus===status}"><span class="summary-number">${requests.filter(r=>r.status===status).length}</span><span class="summary-label">${statuses[status].label}</span></button>`).join('');}
function renderProgressFilters(){
  const container=document.querySelector('#progress-filters');
  if(!container.childElementCount){
    container.innerHTML=['all','meeting','check','queued','working','partial','built','optiq','complete','deferred','proposed'].map(status=>{
      const label=status==='all'?'All':status==='meeting'?'Meeting priorities':statuses[status].label;
      const count=status==='all'?requests.length:status==='meeting'?requests.filter(r=>r.meetingPriority).length:requests.filter(r=>r.status===status).length;
      return `<button class="progress-filter" type="button" data-status="${status}" aria-pressed="false"><span>${escapeHtml(label)}</span><span class="filter-count">${count}</span></button>`;
    }).join('');
  }
  container.querySelectorAll('[data-status]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.status===selectedStatus)));
}
function labQuestions(){return requests.filter(r=>r.status==='optiq').sort((a,b)=>Number(Boolean(b.nextReview))-Number(Boolean(a.nextReview)));}
function renderLabQuestions(){document.querySelector('#lab-questions').innerHTML=labQuestions().map((r,i)=>`<article class="question"><div class="question-label"><span class="question-number">${i+1}</span><h3>${escapeHtml(r.title)}</h3></div><p>${escapeHtml(r.question)}</p></article>`).join('');}
// Milestone positions are categorical, not estimates of work completed.
// Foundation credit is tied to an existing capability recorded in the evidence.
const foundations={
  "coa-summary-layout": "Multi-page COA tools and the detailed Conformity layout are built; combining and releasing the new tests remains.",
  "requested-white-label-photo": "Photo selection exists for eligible private drafts; customer requests awaiting approval need a separate fix.",
  "batch-templates": "Some tools are already available; the lab’s preparation sheet and vial order are still needed.",
  "inspection-checks": "Receiving checks already exist; seal observations still need to save correctly.",
  "frozen-sort": "Rows can already be sorted; keeping them still while editing is planned.",
  "printed-labels": "Label printing already exists; separate symbol and test-name choices are planned.",
  "manufacturer-profiles": "Manufacturer names can be entered by hand; saved choices are planned.",
  "client-bulk-white-label": "The client bulk white-label request screen is built and tested; current Optiq availability is not confirmed.",
  "blend-potency": "The COA layout is ready; entering each peptide’s result still needs work.",
  "certified-imports": "Values can be entered by hand; spreadsheet export and document import are planned."
};
function engineeringProgress(r){
  if(r.id==='verify-results-font')return {label:'Design ready',fill:92,basis:r.evidence};
  if(r.status==='check')return {label:'Delivery needs checking',fill:28,basis:r.evidence};
  if(r.status==='deferred')return {label:'Deferred request',fill:28,basis:r.evidence};
  if(r.status==='proposed')return {label:'Idea recorded',fill:28,basis:r.evidence};
  if(r.id==='multi-lab-login')return {label:'Plan ready',fill:55,basis:r.evidence};
  if(r.id==='grid-widths')return {label:'Readability released; width choices built',fill:92,basis:r.evidence};
  if(r.status==='complete')return {label:'Released / resolved',fill:100,basis:r.evidence};
  if(r.id==='universal-import')return {label:'Some parts built',fill:76,basis:'Importing exists for chemistry panels and Net Content; the remaining peptide tests are being checked.'};
  if(r.status==='partial')return {label:'Some parts built',fill:76,basis:r.evidence};
  if(r.stage===2)return {label:'Feature built',fill:92,basis:r.evidence};
  if(foundations[r.id])return {label:'Starting tools ready',fill:55,basis:foundations[r.id]};
  if(r.stage===1)return {label:'Work in progress',fill:76,basis:r.evidence};
  return {label:'Request recorded',fill:28,basis:r.evidence};
}
function progressBar(r){const p=engineeringProgress(r);return `<div class="engineering-progress" title="${escapeHtml(p.basis)}"><div class="milestone-track" role="img" aria-label="Progress: ${escapeHtml(p.label)}. ${escapeHtml(p.basis)}"><span style="width:${p.fill}%"></span><i></i><i></i><i></i></div><span class="milestone-label">${escapeHtml(p.label)}</span></div>`;}
function requestReference(r){return [r.area,r.nextReview?'Next review':r.meetingPriority?'Meeting priority':''].filter(Boolean).join(' · ');}
function row(r){return `<tr class="request-row is-${r.status}" data-request="${r.id}"><td class="request-name"><button class="row-toggle" type="button" aria-expanded="false" aria-controls="detail-${r.id}" data-detail="${r.id}"><span class="expand-mark" aria-hidden="true">+</span><span>${escapeHtml(r.title)}</span></button><span class="row-reference">${escapeHtml(requestReference(r))}</span></td><td class="request-status"><span class="badge ${r.status}">${icon(r.status)}${statuses[r.status].label}</span>${progressBar(r)}</td><td class="request-next ${r.question?'lab-next':''}">${escapeHtml(r.question||r.nextStep||r.description)}</td></tr><tr class="detail-row" id="detail-${r.id}" hidden><td colspan="3"><div class="row-detail"><p>${escapeHtml(r.description)}</p><p>${escapeHtml(r.detail)}</p><span>${escapeHtml(r.evidence)}</span></div></td></tr>`;}
function render(){renderSummary();renderProgressFilters();const terms=query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);const visible=requests.filter(r=>(selectedStatus==='all'||(selectedStatus==='meeting'?r.meetingPriority:r.status===selectedStatus))&&terms.every(term=>[r.title,r.description,r.detail,r.ref||'',r.area,statuses[r.status].label,r.meetingPriority?'meeting priority':'',r.nextReview?'next review':''].join(' ').toLocaleLowerCase().includes(term))).sort((a,b)=>Number(Boolean(b.nextReview))-Number(Boolean(a.nextReview))||Number(Boolean(b.meetingPriority))-Number(Boolean(a.meetingPriority))||statuses[a.status].rank-statuses[b.status].rank);document.querySelector('#request-grid').innerHTML=`<table><caption class="sr-only">Optiq feature requests, progress, and next steps</caption><thead><tr><th scope="col">Request</th><th scope="col">Progress</th><th scope="col">Next step</th></tr></thead><tbody>${visible.map(row).join('')}</tbody></table>`;document.querySelector('#results-count').textContent=`${visible.length} of ${requests.length} requests`;const filtered=selectedStatus!=='all'||query.trim();document.querySelector('#reset-filters').hidden=!filtered;document.querySelector('#filter-actions').hidden=!filtered;document.querySelector('#empty-state').hidden=visible.length>0;document.querySelector('#request-grid').hidden=!visible.length;}
function reset(){selectedStatus='all';query='';document.querySelector('#search').value='';render();}
document.querySelector('#summary').addEventListener('click',event=>{const button=event.target.closest('[data-status]');if(!button)return;selectedStatus=selectedStatus===button.dataset.status?'all':button.dataset.status;render();});
document.querySelector('#progress-filters').addEventListener('click',event=>{const button=event.target.closest('[data-status]');if(!button)return;selectedStatus=button.dataset.status;render();});
document.querySelector('#search').addEventListener('input',event=>{query=event.target.value;render();});
document.querySelector('#request-grid').addEventListener('click',event=>{const button=event.target.closest('[data-detail]');if(!button)return;const expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!expanded));button.querySelector('.expand-mark').textContent=expanded?'+':'−';document.getElementById(`detail-${button.dataset.detail}`).hidden=expanded;});
document.querySelector('#reset-filters').addEventListener('click',reset);document.querySelector('#empty-reset').addEventListener('click',reset);document.querySelector('#print-button').addEventListener('click',()=>window.print());
document.querySelector('#copy-questions').addEventListener('click',async()=>{const text='Optiq — details to confirm\n\n'+labQuestions().map((r,i)=>`${i+1}. ${r.title}\n${r.question}`).join('\n\n');const feedback=document.querySelector('#copy-feedback');try{await navigator.clipboard.writeText(text);feedback.textContent='Questions copied. Ready to paste into your shared discussion.';}catch{feedback.textContent='Select and copy the questions above; clipboard access is unavailable in this browser.';}});
renderLabQuestions();render();

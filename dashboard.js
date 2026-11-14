'use strict';
// At-a-glance bars. Counted from the same catalog as the request list; no status is changed here.
(() => {
  const items = window.OPTIQ_CATALOG || [];
  const stageOf = r => r.status === 'complete' ? 'done'
    : r.status === 'deferred' ? 'hold'
    : r.status === 'queued' || r.status === 'proposed' || (r.status === 'optiq' && r.stage === 0) ? 'planned'
    : r.status === 'working' || r.status === 'partial' || r.status === 'built' || (r.status === 'optiq' && (r.stage === 1 || r.stage === 2)) ? 'moving'
    : 'check';
  const tones = [['done', 'Delivered'], ['moving', 'In progress'], ['check', 'Final checks'], ['planned', 'Planned']];
  const areas = [
    ['Results and certificates', ['Reports & analyses', 'Reporting Hub', 'White labels', 'Labels']],
    ['Receiving samples', ['Receiving']],
    ['Analysis', ['Data Analysis', 'User Interface']],
    ['Website, orders and payments', ['Client portal', 'Client Portal', 'Orders & pricing', 'Orders & operations', 'Billing', 'Client management']],
    ['Running the lab', ['Inventory & operations', 'Lab operations', 'Lab access', 'Planning & communication']]
  ];
  const tally = rows => rows.reduce((t, r) => (t[stageOf(r)]++, t), {done: 0, moving: 0, check: 0, planned: 0, hold: 0});
  const active = t => t.done + t.moving + t.check + t.planned;
  const bar = t => tones.filter(([k]) => t[k]).map(([k, label]) => `<span class="seg ${k}" style="flex:${t[k]}" title="${label}: ${t[k]}"><b>${t[k]}</b></span>`).join('');
  const legend = t => tones.map(([k, label]) => `<span><i class="dot ${k}"></i>${label}${t ? ` <b>${t[k]}</b>` : ''}</span>`).join('');
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const all = tally(items), total = active(all);
  if (!total) return;
  set('tile-delivered', all.done);
  set('tile-moving', all.moving + all.check);
  set('tile-questions', (window.OPTIQ_LAB_QUESTIONS || []).length);
  set('overall-headline', `<b>${Math.round((all.done + all.moving + all.check) / total * 100)}%</b> delivered or underway`);
  const overall = document.getElementById('overall-bar');
  if (overall) {
    overall.innerHTML = bar(all);
    overall.setAttribute('role', 'img');
    overall.setAttribute('aria-label', tones.map(([k, label]) => `${label} ${all[k]}`).join(', ') + ` of ${total} requests`);
  }
  set('overall-legend', legend(all));
  set('area-bars', areas.map(([name, keys]) => {
    const t = tally(items.filter(r => keys.includes(r.area))), n = active(t);
    if (!n) return '';
    return `<div class="area-row"><span class="area-name">${name}</span><div class="stack-bar" role="img" aria-label="${name}: ${tones.map(([k, label]) => `${label} ${t[k]}`).join(', ')}">${bar(t)}</div><span class="area-pct">${Math.round((n - t.planned) / n * 100)}% done or underway</span></div>`;
  }).join(''));
  set('area-legend', legend());
  set('fold-count', `${items.length} requests`);
  const fold = document.getElementById('all-requests');
  if (fold && location.hash === '#verification-design-preview') fold.open = true;
  window.addEventListener('beforeprint', () => document.querySelectorAll('details.fold').forEach(d => { d.open = true; }));
})();

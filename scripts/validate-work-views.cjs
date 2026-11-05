const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname,'..'), c = {window:{}};
new vm.Script(['data','consolidations','review','reconciliation','ownership','scope-audit','catalog','plain-language','work-groups','work-view','progress-snapshot','app'].map(file=>fs.readFileSync(path.join(root,file+'.js'),'utf8')).join('\n'));
for (const file of ['data','consolidations','review','reconciliation','ownership','scope-audit','catalog','work-groups','work-view','progress-snapshot']) {
  vm.runInNewContext(fs.readFileSync(path.join(root,file+'.js'),'utf8'),c);
}
const {OPTIQ_CATALOG:items, OPTIQ_WORK_GROUPS:groups, OPTIQ_WORK_VIEW:view, OPTIQ_PROGRESS_SNAPSHOT:snapshot} = c.window;
const before = JSON.stringify(items), seen = [], counts = {};
for (const name of ['remaining','completed','deferred']) {
  const rows = view.project(items,groups,name);
  const children = rows.flatMap(r=>r.visibleMembers||[r]);
  assert(children.every(r=>view.viewFor(r)===name), `Wrong item in ${name}`);
  seen.push(...children.map(r=>r.id));
  counts[name]={entries:rows.length,workItems:children.length};
}
assert.equal(seen.length,items.length);
assert.equal(new Set(seen).size,items.length,'No work item is dropped or repeated across views');
assert.equal(JSON.stringify(items),before,'Projection must preserve every source and history');
assert.equal(groups.length,7);
assert.equal(Object.keys(snapshot.items).length,items.length);
for (const item of items) {
  const current=snapshot.items[item.id];
  assert(current.boardId && current.revision && current.checkedAt, `Unbound canonical projection: ${item.id}`);
  if(view.viewFor(item)==='remaining')assert(current.coordinator && current.implementation && current.ownershipDetail);
}
// A completed parent must never hide or complete its unfinished child.
const mixed=[{id:'parent',status:'complete'},{id:'child',status:'queued'}];
const family=[{id:'parent',title:'Mixed delivery',members:['parent','child']}];
assert.equal(view.project(mixed,family,'remaining')[0].visibleMembers[0].id,'child');
assert.equal(view.project(mixed,family,'completed')[0].visibleMembers[0].id,'parent');
// Searching a child still exposes its parent and only the matching child.
const result=view.project(items,groups,'remaining',r=>r.id==='frontier-connection-inputs');
assert.equal(result.length,1);assert.equal(result[0].id,'customer-results-api');
assert.equal(result[0].visibleMembers.length,1);
assert.throws(()=>view.project(items,[...groups,groups[0]],'remaining'),/repeated/);
assert(!JSON.stringify(snapshot).match(/\/Users\/|\.hermes|native_thread|native_session|ssh |[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/),'Private board details must not enter the public snapshot');
console.log('PASS: lossless groups, separate views, mixed-status subtasks, child search and public ownership allowlist.',counts);

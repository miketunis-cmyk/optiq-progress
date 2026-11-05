'use strict';
// Delivery views never infer completion from a parent, a worker label or a code-only milestone.
window.OPTIQ_WORK_VIEW = (() => {
  const viewFor = item => item.status === 'complete' ? 'completed' : item.status === 'deferred' ? 'deferred' : 'remaining';
  function project(items, groups, view, matches = () => true) {
    const byId = new Map(items.map(item => [item.id, item]));
    const byMember = new Map();
    for (const group of groups) {
      if (!group.members.includes(group.id)) throw new Error(`Missing existing parent: ${group.id}`);
      for (const id of group.members) {
        if (!byId.has(id) || byMember.has(id)) throw new Error(`Missing or repeated subtask: ${id}`);
        byMember.set(id, group);
      }
    }
    return items.flatMap(item => {
      const group = byMember.get(item.id);
      if (!group) return viewFor(item) === view && matches(item) ? [item] : [];
      if (group.id !== item.id) return [];
      const members = group.members.map(id => byId.get(id));
      const visibleMembers = members.filter(child => viewFor(child) === view && matches(child, group));
      return visibleMembers.length ? [{...item, presentationGroup: group, members, visibleMembers}] : [];
    });
  }
  return {viewFor, project};
})();

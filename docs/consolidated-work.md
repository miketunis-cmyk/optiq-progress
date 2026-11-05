# Consolidated work and ownership

The November 4, 2026 update implements Mike's request to consolidate overlapping
requests, keep subtasks and history, separate completed/deferred work and reconcile
ownership. Seven presentation parents reuse existing business IDs. No task or source
requirement was deleted, merged away or marked complete by this update.

`work-groups.js` defines presentation membership. `work-view.js` places each child in
its own delivery view and allows searching individual children. Parents do not confer
completion on their children. The existing catalog, original sources, delivery statuses,
scientific requirements, release boundaries and historical ownership remain intact.
The page now exposes the entire earlier-review chain.

The authoritative work store remains the existing Hermes `smpltrax` board. Its latest
typed comment supersedes its initial task body. Organization was appended to the same
76 unfinished task records as `progress_organization` and `ownership_reconciliation`,
with stable parent/member business and board IDs. These are presentation relationships;
native scheduling dependencies, claims, assignments and lifecycle fields are unchanged.
Hermy's existing follow-through responsibility is recorded separately from accepted
bounded contributors and unconfirmed remaining-scope implementation ownership.

The public `progress-snapshot.js` is a dated allowlisted projection, not another writable
work store or a live poller. It contains board IDs/revisions and public role summaries;
private board histories, host paths and native worker identities are not exported.
To refresh it, first obtain an authorized latest-comment board export privately, then:

```sh
node scripts/build-progress-snapshot.cjs /absolute/private/path/board-snapshot.json
node scripts/validate-catalog.cjs
node scripts/validate-work-views.cjs
```

Review the role summaries and their evidence when refreshing. A populated worker field
can mean source custody or a completed bounded contribution; it does not establish
current activity or full delivery ownership. Refresh the snapshot date and observation
wording together. A board code milestone must not silently replace the catalog's
customer-availability evidence. Publish through a branch and PR after browser checks.

Validation on November 4: all 153 original requirements and 126 work items retained;
63 remaining entries covering 76 work items, 41 recorded-complete entries and nine
deferred/not-proceeding entries. Browser checks exercised group expansion, child scope
and history, completed/deferred views, child-ID search and empty-search recovery.
See [grouped-page proof](../evidence/consolidated-work-2026-11-04.jpg).

The view validator is the reusable safeguard against dropped/repeated children,
inherited completion and leaking private ownership details. No scheduler was added.

The ownership follow-up confirms nine bounded queued engineering scopes and one
qualification-only scope with the existing contributors. Sixty-six remaining items
still have explicit ownership gaps. Accepted scope is not full-item completion or
active execution; environment, input, provider and release holds remain. Hermy owns
follow-through on the unconfirmed assignments in the existing board.

The exporter requires a matching current contributor identity, an explicit accepted
scope and a native acceptance locator before showing “Confirmed queued owner.”
Qualification-only acceptance is labeled separately. The validator rejects custody
alone, stale identities and missing acceptance evidence. Public wording stays
allowlisted and scoped; it does not export private contributor identities or paths.

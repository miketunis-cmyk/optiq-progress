# Optiq update — 9 November 2026

Smpltrax delivered two software update packages for Optiq, with improvements to
analysis, certificate chart choices, Net Content entry, results-table controls and
sample-batch management. Website review and payment integration also progressed
in test environments.

The [live software version record](https://optiq.smpltrax.com/health/version),
read at 16:29:55 UTC on 9 November (08:29:55 Pacific), reported:

| Surface | Installed revision | Installation time (UTC) |
| --- | --- | --- |
| Web | `3ee80fbcd8c3388e3d0b15e3b388fcac1bfda468` | 9 November, 11:50:14 |
| API | Same revision | 9 November, 12:02:23 |
| Node runtime | Same revision | 9 November, 12:02:24 |
| Separate COA worker | `43c77b3c28ab7c3942e8cd0d8718862e90a9cb96` | Previously installed |
| Photo service | `17c14d3769779f3d0645659c207f740834982755` | Previously installed |

The second package contains the first package's changes. The live readback confirms
the cumulative installation; it does not establish the first package's separate
installation time. Earlier progress-page references to the 30 October software are
superseded by this dated readback.

## Release sources

- [Deploy 1, PR 7690](https://github.com/himmapan-lab/smpltrax-v2/pull/7690):
  cumulative release at `370a49fd27`, including purity/table alignment, restored
  results-table columns, split-peak handling, ion tick boxes and hover explanations.
- [Deploy 2, PR 7704](https://github.com/himmapan-lab/smpltrax-v2/pull/7704):
  cumulative release at `3ee80fbcd8`; adds named signal controls, manual-purity
  attribution, bounded availability waits, identity-review improvements, chart
  labels and further batch/client-screen refinements.
- [Changes between the two packages](https://github.com/himmapan-lab/smpltrax-v2/compare/370a49fd27...3ee80fbcd8).
- Earlier work included in the cumulative release includes
  [certificate chart switches](https://github.com/himmapan-lab/smpltrax-v2/pull/7669),
  [Net Content entry](https://github.com/himmapan-lab/smpltrax-v2/pull/7676),
  [batch samples](https://github.com/himmapan-lab/smpltrax-v2/pull/7680) and
  [portal approval](https://github.com/himmapan-lab/smpltrax-v2/pull/7677).

Release-check records describe synthetic analyst actions, saved chart choices and
certificate printing. Those records are separate from installation confirmation.
No new customer-record interactions, scientific recalculations, settings changes,
payments or messages were performed to prepare this progress-page update.

Additional installed-source checks confirm PRs 7021 (dark branding), 7245
(portal results links), 7263 (Data Analysis chain), 7221 (certificate links),
7541 (return to the same results-table page) and 7281 (saved-order validation)
are ancestors of the installed revision. Their remaining qualification is retained;
source inclusion is not presented as a new live interaction test.

## Work still underway

The wider automatic-analysis and standard-based Net Content requests remain open;
installed components do not qualify every method, reference or remaining scientific
case. Results-table editing/undo and remaining certificate cases also retain their
open scope. The pending-approval login repair
[PR 7666](https://github.com/himmapan-lab/smpltrax-v2/pull/7666) was still open when
checked and is not described as delivered.

Weekend website-review evidence covers 25 pages plus the ordering form in the test
environment. Payment checks include invoices, payment links and QuickBooks status
updates; they are preparation work, with
[PR 7644](https://github.com/himmapan-lab/smpltrax-v2/pull/7644),
[PR 7650](https://github.com/himmapan-lab/smpltrax-v2/pull/7650),
[PR 7657](https://github.com/himmapan-lab/smpltrax-v2/pull/7657) and
[PR 7670](https://github.com/himmapan-lab/smpltrax-v2/pull/7670) as source references.
Website launch and real customer-payment activation remain separate.

## Page maintenance

The dated `weekend-update.js` projection updates existing request IDs after the
historical catalog and wording layers. It retains each previous record, all 153
source requirements, all 126 work items and the earlier ownership snapshot. Only
the narrow certificate-chart on/off request is newly recorded complete. Wider
requests retain their unfinished scope. No board ownership or worker activity is
inferred from release inclusion.

Both existing validators exercise the final projection. The reusable safeguard
checks source coverage, preserved history, the installed-version binding and the
separation of production delivery from test-environment payment work. Future
release updates should retain this distinction and use fresh installed-version
readback rather than treating a merge or an old checklist as deployment proof.

Validation for this page: catalog/work-view validators, JavaScript syntax and diff
checks passed. Browser checks exercised completed-item search/details, grouped-child
search/expansion, empty-search recovery, desktop light/dark and a 390px layout.
Preview screenshots: [desktop](../evidence/weekend-update-desktop-2026-11-09.jpg)
and [mobile](../evidence/weekend-update-mobile-2026-11-09.jpg).

# Optiq progress review — 14 October 2026

The existing list retains **105 original requests, 78 consolidated work items and 17 overlap groups**. Fentanyl is Mike’s immediate focus. Conformity remains the leading broader Optiq priority; QuickBooks Online status sync still precedes customer-specific invoicing, and ExcelBIS billing remains deferred until the Optiq pilot is proven.

## Baseline and evidence boundary

The published `data.js` matched the `gh-pages` source at `c5e4a9b`, the merge of [progress-page PR #30](https://github.com/miketunis-cmyk/optiq-progress/pull/30), published 12 October Pacific / 13 October 03:41 UTC. GitHub Pages was configured to publish `gh-pages` at the repository root. PRs 21–30 are historical updates, not pending engineering work.

This review reconciles owner messages, preserved handoffs and GitHub PR evidence through **14 October 2026, 00:23 Pacific / 07:23 UTC**. Source and test records below are primarily dated **13 October Pacific**. A later change in a running owner's chat is outside this snapshot. No lab environment, instrument, customer action, deployment, schedule or other owner's workspace was changed by this review.

“Implemented” identifies source; “reviewed” identifies source review; “merged” identifies a named target branch; local fixture/renderer proof identifies only the exercised scope. None substitutes for the full authenticated workflow, staging or live/customer readiness. **No newly examined requirement is marked completed or newly available at Optiq.** Existing completed portions stay closed, including the older completed records whose release links remain missing.

## Verified changes and remaining work

| Existing item | Dated evidence and concrete progress | Accountable custody and next step | Delivery boundary |
| --- | --- | --- | --- |
| Fentanyl (`fentanyl-results`, `immunoassay-method-wording`) | 13 Oct: [draft #5516](https://github.com/himmapan-lab/smpltrax-v2/pull/5516) implements approved wording and the canonical icon, with independent source CLEAR, focused tests and synthetic COA/picker rendering. [Draft #5537](https://github.com/himmapan-lab/smpltrax-v2/pull/5537) adds the ordinary configured-analysis/training/results/COA path. Remote installation succeeded after a dependency repair; subsequent fixture, identity and training-audit repairs remain under validation. | **Fentanyl — finish full UI workflow testing**, `01a13867-415d-70d2-98c9-be0317c9a8de`, is the confirmed successor. Finish current checks and both authenticated UI journeys, then eligible merge/release preparation. **COA Mockups** retains design. | The Fentanyl source row is now **in progress** for the full analysis requirement; the wording source row is **built, release pending**. The consolidated Fentanyl item was already in progress. No complete normal test-selection → saved order → explicit manual Pass/Fail → independent review → Reporting Hub → released COA proof, staged readiness or live availability. Method: Immunoassay; Specification: <10 ng/mL. Never calculate a verdict or invent a price. |
| Conformity (`conformity`) | 13 Oct: **MASTER** and **Finalize Optiq Conformity** record successful bounded database initialization/migration phases, repaired storage/transport prerequisites, preserved database continuation and focused inline-result checks. Vial-name changes were awaiting independent review. [Merged #5530](https://github.com/himmapan-lab/smpltrax-v2/pull/5530) records development-friction follow-ups, not product completion. | **MASTER**, `01a136ed-039c-78a0-9b4b-f9c18ca03214`, coordinates delivery; **Finalize Optiq Conformity**, `01a13361-7f7e-77b0-a357-26f3af678c30`, retains implementation/proof. Continue on the preserved dataset, finish review and the actual three-vial/nine-result journey. | Still in progress. Full submission, receiving, inline results, save/reopen, independent review and released COA remain unproved. Reuse accepted physical-vial allocation/reuse, original-result credit, minimum counts, pricing and descriptive-statistics contracts. Conformity belongs in Sample Details; no new Reporting Hub Conformity group or conformity Pass/Fail verdict. |
| Spectral references (`spectral-reference-library`) | 13 Oct: instrument-aware browsing [#5517](https://github.com/himmapan-lab/smpltrax-v2/pull/5517) and immutable metadata comparison [#5521](https://github.com/himmapan-lab/smpltrax-v2/pull/5521) merged to main. [#5527](https://github.com/himmapan-lab/smpltrax-v2/pull/5527) promoted the Library and lab peptide registry to `claude/optiq-clean-line`; focused tests, synthetic browser interactions and seven disposable MariaDB replay cases passed. | Existing Library source/release custodian under **October 9 recovery — reconcile and finish…**. Finish licensed production artifacts, authentic reference/sample lineage and approved deployment preparation. Archived Library handoffs retain context only. | Built, release pending. Synthetic fixtures and a disposable registry copy do not approve acquired standards or prove authentic sample-to-COA acceptance. No live Library availability or cross-instrument equivalence claim. |
| Collection and scientific workflows (`empower-native-collection`, `analysis-framework`) | 13 Oct: autonomous revision source [#5504](https://github.com/himmapan-lab/smpltrax-v2/pull/5504) merged to main; durable completed-import admission and guarded disabled worker [#5508](https://github.com/himmapan-lab/smpltrax-v2/pull/5508) merged to the Optiq release branch. Draft #5537 adds configured manual analysis. | Existing recovery, collector, scientific-workflow and result-lineage custodians retain their scopes. The Fentanyl successor owns current analysis-creation proof. Qualify the installed source/worker tuple and authorized collection/recovery/result-lineage journey, then provide the analyst handoff. | In progress/partly delivered. No new collector installation, activation, complete-run/recovery acceptance or scientific release. Preserve original raw data, physical-vial/injection/preparation links, held runs, QC and separate human release authority. |
| COA mockups (`coa-oct14-mockups`) | 13 Oct: **COA Mockups**, `01a11a22-c368-7763-9946-73412ccd7368`, produced r70 one/two-analyte comparisons and r71 original-layout two-analyte examples, with five replicates. The next requested comparison uses the same three analytes, five replicates and values in both layouts. | **COA Mockups** remains the sole design owner. Finish the design review, then coordinate approved integration with existing implementation owners. Preserved design examples: `output/pdf/optiq-analyte-breakpoint-comparison-20261013-r70/` and `output/pdf/optiq-original-two-analyte-conformity-20261013-r71/` in the existing V2 workspace. | The original mockup source row moves from planned to in progress; its consolidated design group was already in progress. PDF/PNG mockups are not delivered behavior. No final breakpoint or layout approval inferred. Retain long-name readability, normal/large panels, page breaks, first-page inspection and prominent Fentanyl. |
| Visual inspection (`inspection-rules`) | The 13 Oct COA design work is active. The 9 Oct **Optiq inspection — paused successor** handoff retains intake proof but says COA binding remains unfinished. | Existing inspection implementation custodian and **COA Mockups** for appearance. Finish design review and prove saved observations, separate Reporting Hub column, first-page display and missing/page-break cases. | Still in progress with lab decisions retained. No newly proven full field persistence or final COA integration. Damaged/empty-vial and powder-observation rules remain unresolved. |
| Inventory (`inventory-follow-ups`) | 13 Oct: **Optiq2 Inventory — fix build root cause…**, `01a12ef1-ff0d-7ec1-80cf-e60ccd677f1b`, explicitly stopped work and paused its schedule. [#5499](https://github.com/himmapan-lab/smpltrax-v2/pull/5499) remains a draft fixture candidate. | The stopped Inventory owner retains source/evidence custody. An authorized continuation must establish a qualified test/transport route, upgrade proof and installer access. | Partly built, not installed. Old artifact retrieval or compiler source review is not product delivery. This refresh resumes nothing and keeps completed Inventory parts closed. Full safe edits, purchasing and receiving remain open. |
| Lab documents/quality (`sop-documents`) | 13 Oct: draft #5537 connects native SOP/training evidence to configured analyses; account-transition and audit-metadata repairs are under validation. | Existing QMS custodian retains document/quality workflows; current Fentanyl owner owns its scoped training integration. Lab quality owners retain adoption and lifecycle decisions. | Built parts remain pending complete checks. Training source progress does not complete SOP/document control, nonconformance/CAPA or three-lab adoption. No new signature/approval policy. |
| Spectrum release follow-through (`coa-automatic-ion-interpretation`) | 13 Oct: [#5532](https://github.com/himmapan-lab/smpltrax-v2/pull/5532) merged scoped optional spectrum-summary release preparation. Exact projected API/web tests, disposable MariaDB checks and 312 same/zero-difference COA boundary cases support compatibility. | Existing spectrum source/release custodian under the recovery owner. Finish immutable artifacts and remaining release prerequisites, coordinate Conformity and obtain exact Optiq release approval. | Built, release pending. This is supporting compatibility/release work, not new live ion-suggestion availability, scientific approval or Conformity completion. Actual saved-spectrum/review/COA follow-through remains required. |

## Requirements and gaps retained across the whole list

- QuickBooks Online remains the billing platform. Customer notes are the approved source of rates, rush charges and exceptions; unapproved prices, discounts, volume thresholds and penalties are not invented. No new QuickBooks sync or billing dry-run completion evidence was found. ExcelBIS remains deferred.
- Submission documents and signed attestations, editable receiving defaults and full/partial deliveries, sample/order-linked messenger history and notifications, retained-vial location, existing quality modules and Mammoth portal/COA/workflow configuration all remain on the existing list. [PO catalog draft #5454](https://github.com/himmapan-lab/smpltrax-v2/pull/5454) predates this baseline and does not establish complete receipt/default acceptance.
- Sample-specific Action Required retains explicit client reply, staff resolution and reopened history. Existing photo-request source/tests and the 12 Oct artifact-export repair predate the baseline; no newer full database/browser journey was found. The dedicated general sample/order messaging requirement remains separate.
- The 12 Oct four-job import verification (four archive hashes, 672 chunks in 20 channels and four associations) also predates the baseline. The eight pre-existing lab-result entries lack analysis-run lineage; this gap stays separate and owned. No instrument probe or retry was performed here.
- White-label edits, bulk COA corrections, Net Content Undo, printed labels and lab-document adoption retain their stopped/paused handoffs and unfinished proof. A context-only or archived successor is historical custody evidence, not a new active worker.
- [Shared-priorities #5184](https://github.com/himmapan-lab/smpltrax-v2/pull/5184) remains a draft with verification holds. Its older 93-request snapshot is not the current 105-source/78-item catalog. The public page stays complete; native staff priority save/reopen and Optiq availability remain separate unfinished work.
- The five removed meeting-review items remain absent: marketing, Kevin workspace, vague quantity work, manifest-removal work and Mammoth validation. The retained Mammoth portal/COA configuration requirement and original tracker IDs are preserved.

## Review method and follow-through opportunity

Read-only inspection covered the current list, PR history since #30, current and archived owner chats, their linked successor handoffs, and preserved source/proof records. Titles and summaries were used only to discover records. Paused predecessors were not treated as current active owners. The local review packet retains the owner-message snapshots and PR bodies at `optiq-progress-refresh-20261014/` under the initiating agent's artifacts directory.

The existing catalog validator checks lossless original-ID coverage, group completion boundaries and the approved immediate-focus/billing order. Future page refreshes can reuse this evidence table and validator; no scheduler or background agent was added. Native shared-priority catalog reconciliation should consume the reviewed published catalog through its existing owner rather than creating another tracker.

## Coverage of all existing work items

The table below records the scope of this refresh, not another task list. “Baseline retained” means no new completion/availability claim was added; it does not assert that an active owner made no progress. Original requirements, owners, deferred decisions and evidence remain in the expanded source records.

| Existing item ID | Original source IDs | Current recorded status | Review disposition |
| --- | --- | --- | --- |
| `conformity` | `conformity` | working | Dated progress/proof boundary updated; see above |
| `inspection-rules` | `inspection-rules`, `inspection-checks` | optiq | Dated progress/proof boundary updated; see above |
| `verify-results-font` | `verify-results-font`, `verify-results`, `public-coa-boundaries`, `digital-coa-verification` | complete | Baseline retained |
| `spectral-reference-library` | `spectral-reference-library` | built | Dated progress/proof boundary updated; see above |
| `fentanyl-results` | `fentanyl-results`, `immunoassay-method-wording` | working | Dated progress/proof boundary updated; see above |
| `coa-summary-layout` | `coa-summary-layout`, `coa-mass-spectra`, `coa-chromatogram-spectrum-order` | complete | Baseline retained |
| `receipt-emails` | `receipt-emails` | complete | Baseline retained |
| `invoice-status` | `invoice-status` | complete | Baseline retained |
| `frozen-sort` | `frozen-sort` | queued | Baseline retained |
| `receiving-tables` | `receiving-tables` | complete | Baseline retained |
| `lot-number` | `lot-number` | complete | Baseline retained |
| `printed-labels` | `printed-labels` | queued | Baseline retained |
| `client-scrolling` | `client-scrolling` | complete | Baseline retained |
| `grid-widths` | `grid-widths` | partial | Baseline retained |
| `inventory-release` | `inventory-release` | complete | Baseline retained |
| `iu-units` | `iu-units` | complete | Baseline retained |
| `preview-performance` | `preview-performance` | complete | Baseline retained |
| `sop-documents` | `sop-documents`, `document-release`, `quality-workflows-multi-lab` | working | Dated progress/proof boundary updated; see above |
| `partner-inventory` | `partner-inventory`, `intercompany-supplies` | working | Baseline retained |
| `manufacturer-profiles` | `manufacturer-profiles`, `managed-brand-accounts` | deferred | Baseline retained |
| `client-bulk-white-label` | `client-bulk-white-label`, `white-label-drafts`, `requested-white-label-photo` | built | Baseline retained |
| `blend-potency` | `blend-potency` | working | Baseline retained |
| `photo-reliability` | `photo-reliability` | complete | Baseline retained |
| `scan-intake` | `scan-intake` | working | Baseline retained |
| `certified-imports` | `certified-imports` | working | Baseline retained |
| `retained-intent` | `retained-intent` | queued | Baseline retained |
| `intake-identity` | `intake-identity` | complete | Baseline retained |
| `analysis-framework` | `analysis-framework`, `configured-sample-actions`, `instrument-workflow` | working | Dated progress/proof boundary updated; see above |
| `purchasing-core` | `purchasing-core` | complete | Baseline retained |
| `reporting-method-drafts` | `reporting-method-drafts` | complete | Baseline retained |
| `staff-scan-access` | `staff-scan-access` | complete | Baseline retained |
| `multi-lab-login` | `multi-lab-login` | queued | Baseline retained |
| `shared-feature-tracker` | `shared-feature-tracker` | complete | Baseline retained |
| `missing-order-recovery` | `missing-order-recovery` | complete | Baseline retained |
| `net-content-undo` | `net-content-undo`, `net-content-editing` | built | Baseline retained |
| `bulk-coa-amendments` | `bulk-coa-amendments` | built | Baseline retained |
| `pda-peak-default` | `pda-peak-default` | complete | Baseline retained |
| `native-empower-charts` | `native-empower-charts` | complete | Baseline retained |
| `empower-native-collection` | `empower-native-collection`, `universal-import` | partial | Dated progress/proof boundary updated; see above |
| `inventory-follow-ups` | `inventory-follow-ups`, `purchasing`, `watched-folder-documents` | partial | Dated progress/proof boundary updated; see above |
| `purchasing-status-words` | `purchasing-status-words` | complete | Baseline retained |
| `purchase-history-forecast` | `purchase-history-forecast` | complete | Baseline retained |
| `water-sample-type` | `water-sample-type` | complete | Baseline retained |
| `order-submit-retry` | `order-submit-retry` | built | Baseline retained |
| `white-label-attestation` | `white-label-attestation` | check | Baseline retained |
| `white-label-photo-vials` | `white-label-photo-vials` | deferred | Baseline retained |
| `white-label-missing-vials` | `white-label-missing-vials` | deferred | Baseline retained |
| `white-label-required-lot` | `white-label-required-lot` | deferred | Baseline retained |
| `client-create-invite` | `client-create-invite` | complete | Baseline retained |
| `public-signup-approval` | `public-signup-approval` | complete | Baseline retained |
| `portal-price-visibility` | `portal-price-visibility` | deferred | Baseline retained |
| `panel-presets` | `panel-presets` | deferred | Baseline retained |
| `live-vial-count` | `live-vial-count` | working | Baseline retained |
| `unresolved-client-orders` | `unresolved-client-orders` | complete | Baseline retained |
| `net-content-per-vial` | `net-content-per-vial` | deferred | Baseline retained |
| `coa-status-language` | `coa-status-language` | complete | Baseline retained |
| `partner-sample-routing` | `partner-sample-routing` | check | Baseline retained |
| `intake-attention-notices` | `intake-attention-notices`, `customer-photos` | working | Baseline retained |
| `shared-lims-priorities` | `shared-lims-priorities` | built | Baseline retained |
| `hubspot-onboarding` | `hubspot-onboarding` | deferred | Baseline retained |
| `customer-qr-labels` | `customer-qr-labels` | deferred | Baseline retained |
| `coa-tamper-evidence` | `coa-tamper-evidence` | deferred | Baseline retained |
| `tablet-sample-type` | `tablet-sample-type` | complete | Baseline retained |
| `coa-spectrum-interpretation` | `coa-spectrum-interpretation`, `coa-manual-dalton-summaries`, `coa-saved-spectrum-callouts`, `coa-dalton-callouts` | complete | Baseline retained |
| `submission-matrix-save-parity` | `submission-matrix-save-parity`, `saved-order-selections` | built | Baseline retained |
| `stale-tab-refresh` | `stale-tab-refresh` | built | Baseline retained |
| `stable-released-coa-links` | `stable-released-coa-links` | built | Baseline retained |
| `coa-automatic-ion-interpretation` | `coa-automatic-ion-interpretation` | built | Dated progress/proof boundary updated; see above |
| `quickbooks-status-sync` | `quickbooks-status-sync` | queued | Baseline retained |
| `optiq-billing-rules` | `optiq-billing-rules`, `client-specific-pricing`, `rush-surcharge` | optiq | Baseline retained |
| `excelbis-billing-follow-on` | `excelbis-billing-follow-on` | deferred | Baseline retained |
| `coa-oct14-mockups` | `coa-oct14-mockups`, `coa-chart-page-filling` | working | Dated progress/proof boundary updated; see above |
| `sample-details-documents` | `sample-details-documents` | queued | Baseline retained |
| `inventory-receiving-defaults` | `inventory-receiving-defaults` | queued | Baseline retained |
| `chemical-components-grid-stability` | `chemical-components-grid-stability` | built | Baseline retained |
| `sample-order-client-messaging` | `sample-order-client-messaging` | queued | Baseline retained |
| `sample-storage-multi-lab` | `sample-storage-multi-lab` | queued | Baseline retained |
| `mammoth-portal-coa` | `mammoth-portal-coa` | queued | Baseline retained |

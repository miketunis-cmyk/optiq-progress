// Original records and their history remain in data.js. Each source belongs to one work item.
window.OPTIQ_CONSOLIDATIONS = [
  {
    "id": "fentanyl-results",
    "sourceIds": [
      "fentanyl-results",
      "immunoassay-method-wording"
    ],
    "title": "Fentanyl analysis: test selection through COA",
    "status": "working",
    "stage": 1,
    "description": "Offer Fentanyl as an ordinary selectable analysis, save the order, enter explicit manual Pass/Fail, independently review it and produce the COA with Method: Immunoassay; Specification: <10 ng/mL.",
    "detail": "Fentanyl result and reporting changes are built; the approved method/specification text is now implemented in a draft and the complete saved-result-to-certificate flow remains unverified. Mike confirmed Fentanyl, Method: Immunoassay and Specification: <10 ng/mL on 12 October, resolving the prior wording question. Preserve existing result-entry and audited reporting behavior, keep the separate Reporting Hub column, and coordinate the prominent certificate presentation and integration with the existing COA Mockups owner. Fentanyl remains ahead of QR drop-off. No firm release date was agreed; implementation and source review do not establish full workflow or release verification. Progress reviewed 14 October: 13 October: the approved report defaults, canonical icon and explicit manual Pass/Fail behavior are implemented and source-reviewed in draft PR #5516, with focused checks and synthetic renderer/picker proof. The current sole Fentanyl owner is Fentanyl — finish full UI workflow testing; the archived Fentynl chat confirmed transfer. Draft PR #5537 implements the ordinary staff-defined analysis, training, results and COA path on the Optiq release branch. Remote validation found dependency, fixture, identity and training-audit defects; repairs and checks are continuing. Full authenticated Fentanyl and arbitrary-analysis journeys, final-head review/merge, qualified release artifacts and live/customer availability are not established. Source review and draft CI do not complete this requirement. Recorded owner: Fentanyl — finish full UI workflow testing; COA Mockups owns design.",
    "question": null,
    "nextStep": "Fentanyl — finish full UI workflow testing: finish corrected remote checks and both ordinary authenticated UI journeys; prove normal test selection, saved order, explicit manual Pass/Fail result, independent review, Reporting Hub and released COA with Method: Immunoassay; Specification: <10 ng/mL. Preserve permissions, training and existing saved metadata; do not infer a verdict or invent prices.",
    "currentAsOf": "2026-10-14",
    "currentOwner": "Fentanyl — finish full UI workflow testing; COA Mockups owns design",
    "currentDisposition": "13 October: the approved report defaults, canonical icon and explicit manual Pass/Fail behavior are implemented and source-reviewed in draft PR #5516, with focused checks and synthetic renderer/picker proof. The current sole Fentanyl owner is Fentanyl — finish full UI workflow testing; the archived Fentynl chat confirmed transfer. Draft PR #5537 implements the ordinary staff-defined analysis, training, results and COA path on the Optiq release branch. Remote validation found dependency, fixture, identity and training-audit defects; repairs and checks are continuing. Full authenticated Fentanyl and arbitrary-analysis journeys, final-head review/merge, qualified release artifacts and live/customer availability are not established. Source review and draft CI do not complete this requirement.",
    "currentEvidenceBoundary": "Dated source, review and proof boundaries are recorded separately; no new installed or customer-ready availability is claimed.",
    "evidence": "13 October: PR #5516 and draft PR #5537, and the current owner’s recorded validation. Archived Fentynl (01a136b5-84c1-7812-8d00-281184f69640) explicitly transferred to Fentanyl — finish full UI workflow testing (01a13867-415d-70d2-98c9-be0317c9a8de). See the 14 October evidence review for dated links and proof boundaries.",
    "topPriority": true,
    "priorityOrder": 1,
    "priorityLabel": "Immediate focus"
  },
  {
    id: 'optiq-billing-rules',
    sourceIds: ['optiq-billing-rules', 'client-specific-pricing', 'rush-surcharge'],
    title: 'Optiq invoicing: customer rates, formats and rush rules',
    status: 'optiq', stage: 0, topPriority: true, priorityOrder: 4,
    priorityLabel: 'After status sync',
    description: 'Generate reviewed invoices using explicit customer pricing, sample references, quantities, formatting exceptions and rush rules.',
    detail: 'Mike selected QuickBooks customer notes as the starting source for Optiq rates, rush charges and customer exceptions on 12 October. After QuickBooks invoice/payment status sync, extract those notes into testable configuration and flag missing or conflicting information for the billing lead. Retain sample IDs and names; support grouped lines with quantities where wanted and other customer-specific layouts. Grouping is not a universal preference. Confirm actual rush rules and verify the displayed extra amount. The $50/$100 rush examples and illustrative 10% discount are not approved policies; volume thresholds and missed-commitment penalties remain unresolved. Use human-reviewed dry runs to reproduce agreed rates, references, quantities and formats, rather than AI deciding each invoice or unattended sending. Prove Optiq before the separately tracked ExcelBIS extension. Public price visibility and broader package/volume policy remain lower priority.',
    question: 'Billing lead: provide access to the QuickBooks customer notes and confirm missing or conflicting rates, invoice-format preferences, exceptions and rush rules.',
    nextStep: 'Smpltrax: extract QuickBooks customer notes into configuration and reviewed dry runs after status sync. Billing lead: confirm missing or conflicting rates, formats and rush exceptions.'
  },
  {
    "id": "inspection-rules",
    "sourceIds": [
      "inspection-rules",
      "inspection-checks"
    ],
    "title": "Visual inspection: saved vial checks, Reporting Hub and COA",
    "status": "optiq",
    "stage": 1,
    "description": "Save vial and cap integrity and colors, give inspection its own Reporting Hub column, and show it on the COA’s first page.",
    "detail": "Verify intact/cracked vial condition, cap and seal integrity, vial color and cap color against the built receiving controls, including correct persistence of seal observations. Existing controls do not prove all requested fields are delivered. Complete missing fields and saved-observation-to-COA checks, including missing information and page breaks. Review the first-page presentation in the 14 October design package before application wiring. Input controls, controlled vocabulary and final layout remain open. Powder appearance, visible amount, damaged/empty vials and customer follow-up rules still need lab decisions; none was settled by the later meeting. Progress reviewed 14 October: 13 October COA design work is underway with the existing COA Mockups owner. Design artifacts do not demonstrate saved inspection observations on a released COA. No new complete field-persistence, separate Reporting Hub column or first-page integration proof was found; existing intake proof stays retained and the unresolved lab rules stay open. Recorded owner: Existing inspection implementation custodian; COA Mockups owns design.",
    "question": "Please review the 14 October inspection mockup and confirm input vocabulary and outstanding damaged/empty-vial and powder-observation rules.",
    "nextStep": "Existing inspection and COA owners: finish appearance review, then verify all required stored observations, the separate Reporting Hub column, missing information and first-page/page-break behavior. Lab owners resolve only the remaining vocabulary and damaged/empty-vial rules.",
    "currentAsOf": "2026-10-14",
    "currentOwner": "Existing inspection implementation custodian; COA Mockups owns design",
    "currentDisposition": "13 October COA design work is underway with the existing COA Mockups owner. Design artifacts do not demonstrate saved inspection observations on a released COA. No new complete field-persistence, separate Reporting Hub column or first-page integration proof was found; existing intake proof stays retained and the unresolved lab rules stay open.",
    "currentEvidenceBoundary": "Dated source, review and proof boundaries are recorded separately; no new installed or customer-ready availability is claimed.",
    "evidence": "13 October: COA Mockups design record; the 9 October Optiq inspection — paused successor handoff retains intake proof and identifies COA binding as unfinished. The 14 October review found no newer complete inspection journey."
  },
  {
    id: 'client-bulk-white-label', sourceIds: ['client-bulk-white-label', 'white-label-drafts', 'requested-white-label-photo'],
    title: 'White-label requests: bulk selection, private drafts and photos',
    status: 'built', stage: 2,
    description: 'Let clients request several branded COAs and let approved staff edit the private draft, printed client details and selected photo.',
    detail: 'The bulk request screen, private-draft editing and photo-selection fixes are built with earlier checks; current full availability at Optiq remains unconfirmed. Verify the complete private request → staff edit → save → reopen → correct PDF journey, including printed client names and customer-requested photos. Use test requests for verification and preserve official released certificates. Consent capture, submission-document retrieval and optional brand/manufacturer profiles are separate requirements, not evidence this editing workflow is delivered.',
    nextStep: 'Smpltrax: prove the combined private request, edit, save/reopen and PDF workflow, with authorized photo selection and unchanged official released versions.'
  },
  {
    "id": "coa-oct14-mockups",
    "sourceIds": [
      "coa-oct14-mockups",
      "coa-chart-page-filling"
    ],
    "title": "14 October COA mockups, readable fields and page layout",
    "status": "working",
    "stage": 1,
    "nextReview": true,
    "priorityLabel": "Design review · Wednesday 14 October",
    "description": "Review the revised table and all-inclusive mockups, then qualify readable fields, charts and page breaks in the approved layout.",
    "detail": "The 14 October target is a mockup review, not a production-release deadline. Keep the preferred side-by-side information layout, show the COA number instead of the test type in the relevant header, and review top-border/header cleanup. Put vial inspection on page one and make fentanyl prominent; include their separate Reporting Hub columns in the design package. Size sections and plots to use available space without shrinking plots or splitting evidence sections. Long client/sample names must avoid clipping and overlap; adjust only the affected field, with wrapping versus font reduction still open. Check normal panels and unusually large combinations while preserving readability. Final fentanyl placement, header treatment and page breaks remain open. A standalone summary page followed by tables was discussed, not adopted. Agree on appearance before wiring stored results and protect the existing COA workflow. Chart-fitting changes are built but rendered-page checks remain. The earlier accepted COA layout stays completed in its own record. Progress reviewed 14 October: 13 October: the existing COA Mockups owner produced one- and two-analyte Conformity comparisons using five replicates and an original-layout two-analyte example. Mike is comparing layout crowding/readability; the current request compares both layouts using the same three analytes and five replicates. These are PDF/PNG design artifacts, not implemented or deployed certificate behavior. No universal analyte-count breakpoint or final layout approval is inferred. The 14 October target remains a design review, not a live-release deadline. Recorded owner: COA Mockups — sole design owner; existing implementation owners integrate approved layouts.",
    "nextStep": "COA Mockups: complete the same-values three-analyte comparison and finish the design review, retaining long-name, panel-size, inspection and Fentanyl requirements. Existing implementation owners then integrate the approved appearance and prove stored-data-to-COA behavior.",
    "currentAsOf": "2026-10-14",
    "currentOwner": "COA Mockups — sole design owner; existing implementation owners integrate approved layouts",
    "currentDisposition": "13 October: the existing COA Mockups owner produced one- and two-analyte Conformity comparisons using five replicates and an original-layout two-analyte example. Mike is comparing layout crowding/readability; the current request compares both layouts using the same three analytes and five replicates. These are PDF/PNG design artifacts, not implemented or deployed certificate behavior. No universal analyte-count breakpoint or final layout approval is inferred. The 14 October target remains a design review, not a live-release deadline.",
    "currentEvidenceBoundary": "Dated source, review and proof boundaries are recorded separately; no new installed or customer-ready availability is claimed.",
    "evidence": "13 October: COA Mockups (01a11a22-c368-7763-9946-73412ccd7368), retained r70 one/two-analyte comparison and r71 original-two-analyte PDF/PNG artifacts; subsequent same-values three-analyte comparison request. Paths and owner evidence are recorded in the 14 October review."
  },
  {
    "id": "sop-documents",
    "sourceIds": [
      "sop-documents",
      "document-release",
      "quality-workflows-multi-lab"
    ],
    "title": "Lab quality: documents, SOPs, nonconformance and CAPA",
    "status": "working",
    "stage": 1,
    "description": "Make the existing document and quality workflows usable across all three labs, with controlled approval and signatures after the core tools work.",
    "detail": "Parts of document editing, forms, logs and quality-issue tools are built. Audit usable modules and finish importing, editing, saving, earlier-version retrieval, forms/logs, permissions, concurrent-edit and recovery checks. Identify and configure the remaining nonconformance and CAPA workflows, agree transition from existing trackers/documents and avoid equivalent parallel manual tracking. Reuse existing tools. Inventory and quality adoption need not wait for complete analytical migration. Approval roles, permissions, document lifecycle, sign-off and detailed CAPA/nonconformance rules remain open. Approving and signing versions and reusable cross-lab templates follow the usable core; the meeting did not settle a new signature policy. The ambiguous January 1 start-work comment is not a blanket deadline. Proposed completion check: staff complete the selected workflows without duplicate trackers. Progress reviewed 14 October: 13 October: draft PR #5537 connects native SOP/training evidence to the ordinary configured-analysis path. Remote checks exposed account-transition and audit-metadata defects; repairs remain under validation. This is scoped training integration progress, not complete SOP/document control, nonconformance/CAPA or cross-lab adoption. Existing QMS custody, approval/lifecycle decisions and complete versioned-document checks remain open. Recorded owner: Existing lab-document/QMS custodian; Fentanyl — finish full UI workflow testing for its scoped native training integration.",
    "nextStep": "Existing QMS and scoped analysis-training owners: finish training verification without duplicating SOPs, then verify the retained document/quality workflows. Lab quality owners retain adoption, tracker-transition and lifecycle decisions.",
    "currentAsOf": "2026-10-14",
    "currentOwner": "Existing lab-document/QMS custodian; Fentanyl — finish full UI workflow testing for its scoped native training integration",
    "currentDisposition": "13 October: draft PR #5537 connects native SOP/training evidence to the ordinary configured-analysis path. Remote checks exposed account-transition and audit-metadata defects; repairs remain under validation. This is scoped training integration progress, not complete SOP/document control, nonconformance/CAPA or cross-lab adoption. Existing QMS custody, approval/lifecycle decisions and complete versioned-document checks remain open.",
    "currentEvidenceBoundary": "Dated source, review and proof boundaries are recorded separately; no new installed or customer-ready availability is claimed.",
    "evidence": "13 October: draft #5537 native training integration and current Fentanyl owner validation record. The archived Lab documents paused handoff is context only and does not establish a new implementation owner or completed QMS adoption."
  },
  {
    id: 'intake-attention-notices', sourceIds: ['intake-attention-notices', 'customer-photos'],
    title: 'Action Required: intake photos and client portal replies',
    status: 'working', stage: 1,
    description: 'Resolve unidentified samples and missing vial labels through a saved portal request, photographs and the client’s reply.',
    detail: "The earlier optional photo-request record overlaps the requested missing-label case and remains included in this combined item. Continue existing sample-specific request/reply implementation PR #4869: staff attach private photos to identify an unknown received item or request supporting information for selected active samples. Clients reply with notes or files; staff explicitly resolve the request and retain the exchange in order history with affected-sample links. Preserve the contract that replies/resolution do not change sample/order progress or hold unrelated samples. Mike’s AR-08 suppression of generic Action Required notices remains in force. Use established request types, permissions and resolution rules. Full staff-request → client-reply → staff-resolution browser acceptance and release remain pending; no complete availability claim is made. General asynchronous sample/order messaging remains separately tracked.",
    nextStep: "Existing customer-request owner: prove private staff requests, attachments, the correct customer reply, explicit staff resolution and reopened history under the established contract, then complete ready-state checks and release preparation."
  },
  {
    "id": "inventory-follow-ups",
    "sourceIds": [
      "inventory-follow-ups",
      "purchasing",
      "watched-folder-documents"
    ],
    "title": "Inventory follow-ups: safe edits, purchasing and document intake",
    "status": "partial",
    "stage": 1,
    "description": "Finish safe Inventory editing, supplier/order follow-ups and assisted entry from retained business documents.",
    "detail": "Inventory redesign is partly built. Verify safe supplier editing and saving to the correct item, including switching items and discarding changes without overwriting another item. Finish the complete purchasing journey, vendor replies and purchase-order attention queue. Original business attachments can be retained; invoice/packing-slip/photographed-document reading into proposed Inventory entries remains unfinished. Reliable collection from a watched local folder remains an unfinished proposed approach, not a new background service commitment. Confirm the existing developer and saved work for supplier replies, invoice suggestions and attention handling before continuing. Catalog/PO receiving defaults, certified-lot import and partner settlement remain distinct work. Progress reviewed 14 October: 13 October: the latest Inventory owner explicitly stopped this chat and paused its scheduled follow-through. Inventory has not been installed; old compiler/artifact recovery is not product delivery. Draft PR #5499 remains a fixture candidate, not a completed upgrade or signed-in Inventory journey. Existing source/evidence is preserved. Current transport qualification, full upgrade proof and installer access remain unresolved. This status does not reopen completed Inventory changes or authorize resuming stopped work. Recorded owner: Optiq2 Inventory — fix build root cause… — stopped, preserved custody.",
    "nextStep": "Preserved Inventory owner: retain the stopped work and evidence. Any authorized continuation must establish a qualified test route and prove safe edits, full purchasing/receiving and upgrade checks before installation.",
    "currentAsOf": "2026-10-14",
    "currentOwner": "Optiq2 Inventory — fix build root cause… — stopped, preserved custody",
    "currentDisposition": "13 October: the latest Inventory owner explicitly stopped this chat and paused its scheduled follow-through. Inventory has not been installed; old compiler/artifact recovery is not product delivery. Draft PR #5499 remains a fixture candidate, not a completed upgrade or signed-in Inventory journey. Existing source/evidence is preserved. Current transport qualification, full upgrade proof and installer access remain unresolved. This status does not reopen completed Inventory changes or authorize resuming stopped work.",
    "currentEvidenceBoundary": "Dated source, review and proof boundaries are recorded separately; no new installed or customer-ready availability is claimed.",
    "evidence": "13 October: Optiq2 Inventory — fix build root cause… (01a12ef1-ff0d-7ec1-80cf-e60ccd677f1b) explicitly confirms stopped work and paused schedule; PR #5499 is still draft. Earlier Inventory successors are historical custody evidence."
  },
  {
    "id": "empower-native-collection",
    "sourceIds": [
      "empower-native-collection",
      "universal-import"
    ],
    "title": "Instrument result collection, Sample ID matching and recovery",
    "status": "partial",
    "stage": 1,
    "description": "Support automatic completed-run collection and result-file uploads with correct Sample ID matching, retained evidence and recovery.",
    "detail": "The matching fix was installed and verified on 9 October: use explicit Sample IDs, permit different product wording and avoid treating numbers in product names as IDs. Conflicting IDs remain unmatched; staff must supply the correct ID, and the product name is not a second check. Complete test/import coverage, automatic collection of completed Empower runs without manual export, collector setup on the new computer and interrupted-import recovery. Previously held runs were not retried; their outcomes remain unconfirmed. Staff need to inspect incoming injections and mass-spectral data in the correct records. Participants described work underway, not verified installation/usability. Define preliminary sample/QC checks and expected-run/missing-result notification conditions; “over an hour” is not an approved threshold. Automatic result release was not specified. Prove a representative authorized instrument-to-record journey and prepare a practical tutorial for Brian and other analysts once reliable. Native analysis, instrument batches and reportable-run selection are tracked with the testing workflow. Progress reviewed 14 October: 13 October: autonomous Empower Purity/Identity revision source merged to main in PR #5504; durable completed-import admission and guarded worker/source integration merged to the Optiq release branch in #5508. The worker remains disabled pending separately qualified activation. These source merges do not verify new-computer collector setup, all completed runs, interrupted recovery, previously held runs, reportable lineage or analyst handoff. The independently checked four-job archives, destinations and sample associations were established on 12 October before this update’s baseline and are retained as prior evidence, not new progress. Recorded owner: October 9 recovery — reconcile and finish… with existing collector/result-lineage custodians.",
    "nextStep": "Existing recovery, collector and scientific-result owners: qualify the installed source/worker tuple and authorized completed-run, recovery and reportable-lineage journey, then document analyst handoff. Preserve held runs and missing-result/QC decisions; do not activate or retry them as part of this list update.",
    "currentAsOf": "2026-10-14",
    "currentOwner": "October 9 recovery — reconcile and finish… with existing collector/result-lineage custodians",
    "currentDisposition": "13 October: autonomous Empower Purity/Identity revision source merged to main in PR #5504; durable completed-import admission and guarded worker/source integration merged to the Optiq release branch in #5508. The worker remains disabled pending separately qualified activation. These source merges do not verify new-computer collector setup, all completed runs, interrupted recovery, previously held runs, reportable lineage or analyst handoff. The independently checked four-job archives, destinations and sample associations were established on 12 October before this update’s baseline and are retained as prior evidence, not new progress.",
    "currentEvidenceBoundary": "Dated source, review and proof boundaries are recorded separately; no new installed or customer-ready availability is claimed.",
    "evidence": "13 October: merged PRs #5504 and #5508 explicitly exclude deployment, activation and customer/scientific release. Prior 12 October result-import owner evidence confirmed four archives, 672 chunks/20 channels and four associations, with the eight pre-existing lab-result entries’ analysis-run lineage still open."
  },
  {
    "id": "analysis-framework",
    "sourceIds": [
      "analysis-framework",
      "configured-sample-actions",
      "instrument-workflow"
    ],
    "title": "Lab testing workflow: Sample Details, analysis and repeat runs",
    "status": "working",
    "stage": 1,
    "description": "Connect lab-specific Sample Details actions, preparation, instrument batches, native analysis, result history and staff review through the final COA.",
    "detail": "Lab-specific Sample Details and repeat-work actions remain an existing draft; the connected testing process is unfinished. Reconcile retained work and preserve source custody, original result files, immutable lab capability/method pins and caller permissions. Reuse accepted method, QC, preparation and repeat-run contracts; identify only genuine remaining gaps. Verify LIMS-generated batches and explicit repreparation/rerun handling where required. Distinguish physical vials from injections and preparation records and preserve reportable-result selection. Native peak integration and calculations currently done manually remain useful near-term work. Prove the complete correct-record → analysis → human review → COA journey and analyst handoff through the existing release authority. Specific Conformity parent/vial rules remain in the Conformity item; collection/import acceptance is separate. Progress reviewed 14 October: 13 October: shared autonomous revision source merged via #5504 and the Optiq disabled-worker integration via #5508. Draft #5537 adds the ordinary configured-analysis/training/result/COA path; schema replay fixtures and native provisioning are still under proof. Neither source merges nor remote checks demonstrate the complete scientific review/COA journey. The existing accepted preparation, repeat-work, reportable-run, QC and human release contracts remain authoritative. Retain separate physical vial, injection, preparation and original-data links. Recorded owner: Existing lab-testing/scientific workflow custodians; Fentanyl — finish full UI workflow testing owns the current analysis-creation proof.",
    "nextStep": "Existing workflow owners: finish native schema/fixture and actual authenticated analysis proof, preserve source-to-result lineage and separate review/release authority, then document a representative analyst workflow. Fentanyl owner retains the immediate normal-analysis acceptance work.",
    "currentAsOf": "2026-10-14",
    "currentOwner": "Existing lab-testing/scientific workflow custodians; Fentanyl — finish full UI workflow testing owns the current analysis-creation proof",
    "currentDisposition": "13 October: shared autonomous revision source merged via #5504 and the Optiq disabled-worker integration via #5508. Draft #5537 adds the ordinary configured-analysis/training/result/COA path; schema replay fixtures and native provisioning are still under proof. Neither source merges nor remote checks demonstrate the complete scientific review/COA journey. The existing accepted preparation, repeat-work, reportable-run, QC and human release contracts remain authoritative. Retain separate physical vial, injection, preparation and original-data links.",
    "currentEvidenceBoundary": "Dated source, review and proof boundaries are recorded separately; no new installed or customer-ready availability is claimed.",
    "evidence": "13 October: PRs #5504/#5508 and draft #5537; prior testing-workflow evidence already retained its 416-row workbook match and unrun full runtime/live acceptance. No new complete authenticated analysis or released-COA proof is claimed."
  },
  {
    id: 'verify-results-font', sourceIds: ['verify-results-font', 'verify-results', 'public-coa-boundaries', 'digital-coa-verification'],
    title: 'COA verification: public lookup, widget and record design',
    status: 'complete', stage: 3,
    description: 'Look up and compare released COAs on the public website using the completed widget and agreed Verification Record design.',
    detail: 'The public lookup, website widget and visible digital-COA verification indicator are recorded complete. Preserve the agreed fonts, spacing and unique certificate ID, and the verification indicator at the top and while scrolling. Lookup was recorded released/checked on 27 September; record typography on 4 October; Mike confirmed the widget complete on 10 October. Earlier lookup/design supporting release or check records still need linking, a record-keeping follow-up that does not reopen completed work. This consolidation is not a new live verification. Customer vial QR labels and optional tamper-evidence ideas remain separate deferred work.',
    nextStep: 'Completed. Link the outstanding earlier supporting lookup/design records; keep the working verification features closed.'
  },
  {
    id: 'coa-spectrum-interpretation', sourceIds: ['coa-spectrum-interpretation', 'coa-manual-dalton-summaries', 'coa-saved-spectrum-callouts', 'coa-dalton-callouts'],
    title: 'Completed spectrum cards: saved mass, interpretation and callouts',
    status: 'complete', stage: 3,
    description: 'Edit and save molecular mass and interpretation from COA cards, preserve them on navigation/reload, and use readable callout sizes.',
    detail: 'Mike accepted manual molecular-mass summaries, interpretation/card editing and saved details remaining visible as complete, and confirmed smaller molecular-mass text is already complete. Retain manual mass and interpretation on the COA, persistence while navigating or refreshing and readable values without oversized callouts. Newer interface changes and automatic ion suggestions are separate unfinished scope. The original completion records remain closed; consolidation adds no fresh delivery claim.',
    nextStep: 'Completed. Any later interface or automatic-ion improvement stays separately tracked.'
  },
  {
    id: 'coa-summary-layout', sourceIds: ['coa-summary-layout', 'coa-mass-spectra', 'coa-chromatogram-spectrum-order'],
    title: 'Completed COA summary, measured spectra and chart ordering',
    status: 'complete', stage: 3,
    description: 'Retain the accepted first-page summary, supporting test pages and ordered chromatograms/measured spectra, including blends.',
    detail: 'Mike accepted the first-page summary followed by supporting charts/spectra, measured-spectrum display and chart ordering/grouping as complete. Keep one or more selected measured spectra with the sample chromatogram, including blends; chromatograms precede mass spectra with one clear heading per grouped spectrum page. New test sections, automatic instrument collection/import and further page-spacing improvements are separate unfinished work. The 14 October revised mockups do not reopen this completed baseline.',
    nextStep: 'Completed. Track new layout/test sections and automatic collection in their separate active items.'
  },
  {
    id: 'manufacturer-profiles', sourceIds: ['manufacturer-profiles', 'managed-brand-accounts'],
    title: 'Deferred customer brands, manufacturers and parent accounts',
    status: 'deferred', stage: 0,
    description: 'Keep reusable customer/manufacturer profiles, early branded-COA requests and several brands under a parent portal account for later.',
    detail: 'Saved manufacturer choices and earlier white-label intent are optional profile improvements. Managing several client/brand identities through one parent account is part of that same deferred profile work. Existing manual manufacturer entry and current request/draft tools are distinct from these future conveniences; neither profile request is newly activated by consolidation.',
    nextStep: 'Keep the customer product/manufacturer profiles and parent-brand account work deferred.'
  },
  {
    id: 'net-content-undo', sourceIds: ['net-content-undo', 'net-content-editing'],
    title: 'Net Content editing, copy/fill and remaining Undo checks',
    status: 'built', stage: 2,
    description: 'Keep the completed amount/unit editing and copy/fill behavior, and verify Undo restores both values and units after reopening.',
    detail: 'Editing Net Content amounts and units and copying/filling rows are recorded complete, with the earlier supporting check record still to link. Undo remains a separate unfinished part within this item: the prior proposed fix was closed without inclusion in the product; restoring both value and unit after a drag-fill, saving and reopening still needs a complete check. Confirm the current implementation and correct any failure found. Group progress follows the unfinished Undo portion; the original editing completion remains closed.',
    nextStep: 'Smpltrax: verify Undo in the real screen through save/reload and link the earlier completed editing evidence.'
  },
  {
    id: 'submission-matrix-save-parity', sourceIds: ['submission-matrix-save-parity', 'saved-order-selections'],
    title: 'Submission choices and consistent saved/reopened drafts',
    status: 'built', stage: 2,
    description: 'Restore chosen tests in saved drafts and keep material choices, peptide symbols and saved selections consistent.',
    detail: 'Restoring available tests on saved-order reopening and warning about no-longer-offered tests are recorded complete (4 October, with earlier browser proof), and the supporting record still needs linking. Material-choice, peptide-symbol and draft-consistency fixes are built with five check cases prepared; they are not yet installed in the limited test environment. Finish that environment update and run the five save/reopen cases, preserving Tablet behavior. The completed test-selection fix remains closed while broader consistency checks await proof.',
    nextStep: 'Smpltrax: prepare the limited test environment and run the five saved-draft consistency cases; link the existing completed selection evidence.'
  },
  {
    id: 'partner-inventory', sourceIds: ['partner-inventory', 'intercompany-supplies'],
    title: 'Partner inventory sharing, supply balances and settlement',
    status: 'working', stage: 1,
    description: 'Share selected partner stock information while keeping stock separate, and track partner purchases, running balances and month-end invoices.',
    detail: 'Partner inventory sharing and related supply balances are partly built. Viewing permissions and the complete process remain unfinished; intercompany settlement is unverified. Track supplies bought for the partner, reviewable running obligations and month-end invoices using the agreed charging/accounting contract. Confirm partner agreements and access rules before use. Sample send-out, reviewed-result exchange and related analytical charges are a distinct partner-lab workflow, kept separately.',
    nextStep: 'Smpltrax: verify selected-stock sharing, access boundaries and supply/settlement records. Labs: confirm the partner charging and accounting agreements.'
  }
];

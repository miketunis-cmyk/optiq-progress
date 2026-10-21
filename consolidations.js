// Original records remain in data.js. Each source belongs to one work item.
window.OPTIQ_CONSOLIDATIONS = [
  {
    "id": "fentanyl-results",
    "sourceIds": [
      "fentanyl-results",
      "immunoassay-method-wording"
    ],
    "title": "Fentanyl analysis: test selection through COA",
    "status": "complete",
    "stage": 3,
    "description": "Offer Fentanyl as an ordinary selectable analysis, save the order, enter explicit manual Pass/Fail, independently review it and produce the COA with Method: Immunoassay; Specification: <10 ng/mL.",
    "detail": "Fentanyl result entry and reporting are built, including the lab-approved wording confirmed by Mike on 12 October: Method: Immunoassay; Specification: <10 ng/mL. Preserve existing result-entry and audited reporting behavior and keep the separate Reporting Hub column and prominent certificate presentation. Fentanyl remains ahead of QR drop-off. Progress reviewed 20 October: Fentanyl was installed at Optiq on 20 October 2026. It arrives switched off: the Fentanyl test stays a draft until Optiq staff turn it on, and nobody’s access changed. Once it is on, staff select Fentanyl as an ordinary test, save the order, enter Pass or Fail manually, send it for independent review and produce the COA with Method: Immunoassay; Specification: <10 ng/mL. Publishing a new analysis needs the lab’s Analysis Lifecycle training.",
    "question": null,
    "nextStep": "Optiq: turn the Fentanyl test on when the lab is ready. Smpltrax: confirm the first released Fentanyl COA once it is in use.",
    "currentAsOf": "2026-10-20",
    "currentOwner": "Smpltrax",
    "currentDisposition": "Fentanyl was installed at Optiq on 20 October 2026. It arrives switched off: the Fentanyl test stays a draft until Optiq staff turn it on, and nobody’s access changed. Once it is on, staff select Fentanyl as an ordinary test, save the order, enter Pass or Fail manually, send it for independent review and produce the COA with Method: Immunoassay; Specification: <10 ng/mL. Publishing a new analysis needs the lab’s Analysis Lifecycle training.",
    "evidence": "20 October: after an independent review, Fentanyl was installed at Optiq on 20 October 2026 during a short maintenance window, and the site was healthy afterwards. The test is installed switched off, and everyone’s access is the same as before.",
    "topPriority": true,
    "priorityOrder": 1,
    "priorityLabel": "Immediate focus"
  },
  {
    "id": "optiq-billing-rules",
    "sourceIds": [
      "optiq-billing-rules",
      "client-specific-pricing",
      "rush-surcharge"
    ],
    "title": "Optiq invoicing: customer rates, formats and rush rules",
    "status": "optiq",
    "stage": 0,
    "topPriority": true,
    "priorityOrder": 4,
    "priorityLabel": "After status sync",
    "description": "Generate reviewed invoices using explicit customer pricing, sample references, quantities, formatting exceptions and rush rules.",
    "detail": "Mike selected QuickBooks customer notes as the starting source for Optiq rates, rush charges and customer exceptions on 12 October. After QuickBooks invoice/payment status sync, extract those notes into testable configuration and flag missing or conflicting information for the billing lead. Retain sample IDs and names; support grouped lines with quantities where wanted and other customer-specific layouts. Grouping is not a universal preference. Confirm actual rush rules and verify the displayed extra amount. The $50/$100 rush examples and illustrative 10% discount are not approved policies. Use human-reviewed dry runs to reproduce agreed rates, references, quantities and formats, rather than AI deciding each invoice or unattended sending. Prove Optiq before the separately tracked ExcelBIS extension. Public price visibility and broader package/volume policy remain lower priority.",
    "question": "Billing lead: provide access to the QuickBooks customer notes and confirm missing or conflicting rates, invoice-format preferences, exceptions and rush rules.",
    "nextStep": "Smpltrax: load the QuickBooks customer notes into the billing rules and review dry runs once the QuickBooks connection is set up. Billing lead: confirm missing or conflicting rates, formats and rush exceptions.",
    "evidence": "20 October: the billing-rules format and an invoice dry run are built for all labs; Optiq’s rates are placeholders until the billing lead confirms them.",
    "currentDisposition": "undefined Progress reviewed 20 October: the billing-rules format and an invoice dry run are built for all labs. Optiq’s rates are placeholders until the billing lead confirms them, so every dry run is flagged for review.",
    "currentOwner": "Smpltrax, with Optiq’s billing lead",
    "currentAsOf": "2026-10-20"
  },
  {
    "id": "inspection-rules",
    "sourceIds": [
      "inspection-rules",
      "inspection-checks"
    ],
    "title": "Visual inspection: saved vial checks, Reporting Hub and COA",
    "status": "working",
    "stage": 1,
    "description": "Save vial and cap integrity and colors, give inspection its own Reporting Hub column, and show it on the COA’s first page.",
    "detail": "Verify intact/cracked vial condition, cap and seal integrity, vial color and cap color against the built receiving controls, including correct persistence of seal observations. Complete missing fields and saved-observation-to-COA checks, including missing information and page breaks. Review the first-page presentation in the 14 October design package before application wiring. Input controls, controlled vocabulary and final layout come next. Powder appearance, visible amount, damaged/empty vials and customer follow-up rules will be decided with the lab; none was settled by the later meeting. Progress reviewed 20 October: staff can now correct COA physical observations from Reporting Hub, with a required reason; this was built on 20 October and is not yet installed at Optiq. On the 20 October call, visual inspection was placed after the updated COA (COA 2.0) and Conformity, as its own section in Reporting Hub. The remaining vial-check wording is confirmed with the lab when this work starts.",
    "question": null,
    "nextStep": "Smpltrax: after COA 2.0 and Conformity, build visual inspection as its own Reporting Hub section, confirm the remaining vial-check wording with the lab, then verify the stored observations and the first-page COA display.",
    "currentAsOf": "2026-10-20",
    "currentOwner": "Smpltrax",
    "currentDisposition": "Staff can now correct COA physical observations from Reporting Hub with a reason (built 20 October, not yet installed at Optiq). Visual inspection comes after COA 2.0 and Conformity, as its own Reporting Hub section. Nothing is needed from the lab right now; the remaining vial-check wording is confirmed when this work starts.",
    "evidence": "20 October: correcting COA physical observations with a reason is merged, not yet installed at Optiq. The order of work after Fentanyl was set on the 20 October call: COA 2.0, then Conformity, then visual inspection."
  },
  {
    "id": "client-bulk-white-label",
    "sourceIds": [
      "client-bulk-white-label",
      "white-label-drafts",
      "requested-white-label-photo"
    ],
    "title": "White-label requests: bulk selection, private drafts and photos",
    "status": "built",
    "stage": 2,
    "description": "Let clients request several branded COAs and let approved staff edit the private draft, printed client details and selected photo.",
    "detail": "The bulk request screen, private-draft editing and photo-selection fixes are built with earlier checks; current full availability at Optiq will be confirmed. Verify the complete private request → staff edit → save → reopen → correct PDF journey, including printed client names and customer-requested photos. Use test requests for verification and preserve official released certificates. Consent capture, submission-document retrieval and optional brand/manufacturer profiles are separate requirements, not evidence this editing workflow is delivered.",
    "nextStep": "Smpltrax: confirm the combined private request, edit, save/reopen and PDF workflow, with authorized photo selection and unchanged official released versions."
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
    "detail": "The 14 October target is a mockup review, not a production-release deadline. Keep the preferred side-by-side information layout, show the COA number instead of the test type in the relevant header, and review top-border/header cleanup. Put vial inspection on page one and make fentanyl prominent; include their separate Reporting Hub columns in the design package. Size sections and plots to use available space without shrinking plots or splitting evidence sections. Long client/sample names must avoid clipping and overlap; adjust only the affected field, with wrapping versus font reduction still open. Check normal panels and unusually large combinations while preserving readability. Final fentanyl placement, header treatment and page breaks come next. A standalone summary page followed by tables was discussed, not adopted. Agree on appearance before wiring stored results and protect the existing COA workflow. Chart-fitting changes are built but rendered-page checks remain. The earlier accepted COA layout stays completed in its own record. Progress reviewed 20 October: As discussed on the 20 October call, the formatting of the updated COA (COA 2.0) is done: a large green Fentanyl panel, layouts that adjust to the number of analytes, and no list at the top. Connecting stored results to the new layout is the remaining work, and it is the next piece of work after Fentanyl. It is not yet installed at Optiq.",
    "nextStep": "Smpltrax: connect stored results to the COA 2.0 layout, check one-, two- and multi-analyte certificates and the Fentanyl panel, then prepare it for installation after Fentanyl.",
    "currentAsOf": "2026-10-20",
    "currentOwner": "Smpltrax",
    "currentDisposition": "As discussed on the 20 October call, the formatting of the updated COA (COA 2.0) is done: a large green Fentanyl panel, layouts that adjust to the number of analytes, and no list at the top. Connecting stored results to the new layout is the remaining work, and it is the next piece of work after Fentanyl. It is not yet installed at Optiq.",
    "evidence": "20 October: as discussed on the call, COA 2.0 formatting is done and connecting stored results is the remaining work. Not yet installed at Optiq. The 13 October design files are retained."
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
    "detail": "Parts of document editing, forms, logs and quality-issue tools are built. Audit usable modules and finish importing, editing, saving, earlier-version retrieval, forms/logs, permissions, concurrent-edit and recovery checks. Identify and configure the remaining nonconformance and CAPA workflows, agree transition from existing trackers/documents and avoid equivalent parallel manual tracking. Reuse existing tools. Inventory and quality adoption need not wait for complete analytical migration. Approval roles, permissions, document lifecycle, sign-off and detailed CAPA/nonconformance rules come next. Approving and signing versions and reusable cross-lab templates follow the usable core. The ambiguous January 1 start-work comment is not a blanket deadline. Proposed completion check: staff complete the selected workflows without duplicate trackers. Progress reviewed 20 October: connecting SOP training to lab-defined analyses is still in draft. Complete document control, nonconformance/CAPA and cross-lab adoption come next.",
    "nextStep": "Smpltrax: finish the training connection without duplicating SOPs, then verify the retained document and quality workflows. Lab quality owners keep the adoption and approval decisions.",
    "currentAsOf": "2026-10-20",
    "currentOwner": "Smpltrax",
    "currentDisposition": "Connecting SOP training to lab-defined analyses is still in draft. Complete document control, nonconformance/CAPA and cross-lab adoption come next.",
    "evidence": "20 October: training connection for lab-defined analyses remains in draft. No completed quality-system adoption is claimed."
  },
  {
    "id": "intake-attention-notices",
    "sourceIds": [
      "intake-attention-notices",
      "customer-photos"
    ],
    "title": "Action Required: intake photos and client portal replies",
    "status": "working",
    "stage": 1,
    "description": "Resolve unidentified samples and missing vial labels through a saved portal request, photographs and the client’s reply.",
    "detail": "The earlier optional photo-request record overlaps the requested missing-label case and remains included in this combined item. Continue the existing sample-specific request/reply implementation: staff attach private photos to identify an unknown received item or request supporting information for selected active samples. Clients reply with notes or files; staff explicitly resolve the request and retain the exchange in order history with affected-sample links. Preserve the design that replies/resolution do not change sample/order progress or hold unrelated samples. Mike’s suppression of generic Action Required notices remains in force. Use established request types, permissions and resolution rules. Full staff-request → client-reply → staff-resolution browser acceptance and release come next; no complete availability claim is made. General asynchronous sample/order messaging remains separately tracked. Progress reviewed 20 October: this work is scheduled after the coming Optiq releases.",
    "nextStep": "Existing customer-request owner: finish the full staff-request → client-reply → staff-resolution check and prepare the reviewed release.",
    "evidence": "Additional requirements from the corrected 12 October morning meeting summary. Completion checks below are proposed tests, not meeting decisions or fresh verification. Mike kept the existing item or follow-through during the 12 October review.",
    "currentDisposition": "The sample-specific customer-request work is in draft and scheduled after the coming Optiq releases. Full browser acceptance and release come next.",
    "currentOwner": "Smpltrax",
    "currentAsOf": "2026-10-20"
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
    "detail": "Inventory redesign is partly built. Verify safe supplier editing and saving to the correct item, including switching items and discarding changes without overwriting another item. Finish the complete purchasing journey, vendor replies and purchase-order attention queue. Original business attachments can be retained; invoice/packing-slip/photographed-document reading into proposed Inventory entries comes next. Collection from a watched local folder is a proposed approach. Confirm the existing developer and saved work for supplier replies, invoice suggestions and attention handling before continuing. Catalog/PO receiving defaults, certified-lot import and partner settlement remain distinct work. Progress reviewed 20 October: filling purchase-order lines from the lab’s inventory list was built on 17 October and is not yet released to Optiq. Safe supplier editing, the full purchasing journey and document reading come next; Inventory is not yet installed at Optiq.",
    "nextStep": "Smpltrax: continue Inventory with a qualified test route, confirm safe edits and the full purchasing and receiving journey, then prepare installation.",
    "currentAsOf": "2026-10-20",
    "currentOwner": "Smpltrax",
    "currentDisposition": "Filling purchase-order lines from the lab’s inventory list was built on 17 October and is not yet released to Optiq. Safe supplier editing, the full purchasing journey and document reading come next; Inventory is not yet installed at Optiq.",
    "evidence": "20 October: purchase-order lines from the inventory list merged 17 October, not yet released to Optiq. Earlier Inventory work is preserved."
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
    "detail": "The matching fix was installed and verified on 9 October: use explicit Sample IDs, permit different product wording and avoid treating numbers in product names as IDs. Conflicting IDs remain unmatched; staff must supply the correct ID, and the product name is not a second check. Complete test/import coverage, automatic collection of completed Empower runs without manual export, collector setup on the new computer and interrupted-import recovery. Staff need to inspect incoming injections and mass-spectral data in the correct records. Participants described work underway. Define preliminary sample/QC checks and expected-run/missing-result notification conditions; “over an hour” is not an approved threshold. Automatic result release was not specified. Prove a representative authorized instrument-to-record journey and prepare a practical tutorial for Brian and other analysts once reliable. Native analysis, instrument batches and reportable-run selection are tracked with the testing workflow. Progress reviewed 20 October: automatic purity and the Empower time-unit fix are prepared for the release after Fentanyl. Recording the Empower method and instrument at import is in draft. Automatic collection of all completed runs and recovery of interrupted imports will be confirmed next.",
    "nextStep": "Smpltrax: confirm a representative completed run reaches the correct record, confirm recovery of interrupted imports and held runs, then document the analyst workflow.",
    "currentAsOf": "2026-10-20",
    "currentOwner": "Smpltrax",
    "currentDisposition": "Automatic purity and the Empower time-unit fix are prepared for the release after Fentanyl. Recording the method and instrument at import is in draft. Automatic collection of all completed runs and recovery of interrupted imports will be confirmed next.",
    "evidence": "20 October: the Empower time-unit fix and automatic purity are prepared for the release after Fentanyl. Recording the method and instrument at import is in draft. Earlier 12 October checks of four imported runs are retained."
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
    "detail": "Lab-specific Sample Details and repeat-work actions remain an existing draft; the connected testing process comes next. Build on the existing work and preserve source records, original result files, immutable lab capability/method pins and caller permissions. Reuse accepted method, QC, preparation and repeat-run rules; identify only the work that remains. Verify LIMS-generated batches and explicit repreparation/rerun handling where required. Distinguish physical vials from injections and preparation records and preserve reportable-result selection. Native peak integration and calculations currently done manually remain useful near-term work. Prove the complete correct-record → analysis → human review → COA journey and analyst handoff through the existing release authority. Specific Conformity parent/vial rules remain in the Conformity item; collection/import acceptance is separate. Progress reviewed 20 October: Automatic purity and automatic library identity for peptide samples are built and waiting to be installed after Fentanyl. Results are labelled automatic and unreleased until an analyst reviews them. Purity is the combined area of all peptide peaks, shown live in the peak table with a card for each peptide peak. The release adds a Data Analysis area with a list of runs to analyse and purity review, live purity in the peak table, and a fix for Empower run time units. Staff remain responsible for review and release. A practice installation on a copy of Optiq’s data comes next, before it becomes available at Optiq. Lab-defined analyses through results, training and COA are still in draft.",
    "nextStep": "Smpltrax: rehearse the purity and identity release on a copy of Optiq’s data, then install it after Fentanyl with approval. Finish lab-defined analyses through to the COA and document a representative analyst workflow.",
    "currentAsOf": "2026-10-20",
    "currentOwner": "Smpltrax",
    "currentDisposition": "Automatic purity and automatic library identity for peptide samples are built and waiting to be installed after Fentanyl. Results are labelled automatic and unreleased until an analyst reviews them. Purity is the combined area of all peptide peaks, shown live in the peak table with a card for each peptide peak. The release adds a Data Analysis area with a list of runs to analyse and purity review, live purity in the peak table, and a fix for Empower run time units. Staff remain responsible for review and release. A practice installation on a copy of Optiq’s data comes next, before it becomes available at Optiq. Lab-defined analyses through results, training and COA are still in draft.",
    "evidence": "20 October: automatic purity, automatic identity, the Data Analysis area and the Empower time-unit fix are merged and prepared for the release after Fentanyl. Lab-defined analyses through results, training and COA remain in draft."
  },
  {
    "id": "verify-results-font",
    "sourceIds": [
      "verify-results-font",
      "verify-results",
      "public-coa-boundaries",
      "digital-coa-verification"
    ],
    "title": "COA verification: public lookup, widget and record design",
    "status": "complete",
    "stage": 3,
    "description": "Look up and compare released COAs on the public website using the completed widget and agreed Verification Record design.",
    "detail": "The public lookup, website widget and visible digital-COA verification indicator are recorded complete. Preserve the agreed fonts, spacing and unique certificate ID, and the verification indicator at the top and while scrolling. Lookup was recorded released/checked on 27 September; record typography on 4 October; Mike confirmed the widget complete on 10 October. This consolidation is not a new live verification. Customer vial QR labels and optional tamper-evidence ideas remain separate deferred work.",
    "nextStep": "Completed. Link the outstanding earlier supporting lookup/design records; keep the working verification features closed."
  },
  {
    "id": "coa-spectrum-interpretation",
    "sourceIds": [
      "coa-spectrum-interpretation",
      "coa-manual-dalton-summaries",
      "coa-saved-spectrum-callouts",
      "coa-dalton-callouts"
    ],
    "title": "Completed spectrum cards: saved mass, interpretation and callouts",
    "status": "complete",
    "stage": 3,
    "description": "Edit and save molecular mass and interpretation from COA cards, preserve them on navigation/reload, and use readable callout sizes.",
    "detail": "Mike accepted manual molecular-mass summaries, interpretation/card editing and saved details remaining visible as complete, and confirmed smaller molecular-mass text is already complete. Retain manual mass and interpretation on the COA, persistence while navigating or refreshing and readable values without oversized callouts. Newer interface changes and automatic ion suggestions are separate follow-on scope. The original completion records remain closed; consolidation adds no fresh delivery claim.",
    "nextStep": "Completed. Any later interface or automatic-ion improvement stays separately tracked."
  },
  {
    "id": "coa-summary-layout",
    "sourceIds": [
      "coa-summary-layout",
      "coa-mass-spectra",
      "coa-chromatogram-spectrum-order"
    ],
    "title": "Completed COA summary, measured spectra and chart ordering",
    "status": "complete",
    "stage": 3,
    "description": "Retain the accepted first-page summary, supporting test pages and ordered chromatograms/measured spectra, including blends.",
    "detail": "Mike accepted the first-page summary followed by supporting charts/spectra, measured-spectrum display and chart ordering/grouping as complete. Keep one or more selected measured spectra with the sample chromatogram, including blends; chromatograms precede mass spectra with one clear heading per grouped spectrum page. New test sections, automatic instrument collection/import and further page-spacing improvements are separate follow-on work.",
    "nextStep": "Completed. Track new layout/test sections and automatic collection in their separate active items."
  },
  {
    "id": "manufacturer-profiles",
    "sourceIds": [
      "manufacturer-profiles",
      "managed-brand-accounts"
    ],
    "title": "Deferred customer brands, manufacturers and parent accounts",
    "status": "deferred",
    "stage": 0,
    "description": "Keep reusable customer/manufacturer profiles, early branded-COA requests and several brands under a parent portal account for later.",
    "detail": "Saved manufacturer choices and earlier white-label intent are optional profile improvements. Managing several client/brand identities through one parent account is part of that same deferred profile work. Existing manual manufacturer entry and current request/draft tools are distinct from these future conveniences; neither profile request is newly activated by consolidation.",
    "nextStep": "Keep the customer product/manufacturer profiles and parent-brand account work deferred."
  },
  {
    "id": "net-content-undo",
    "sourceIds": [
      "net-content-undo",
      "net-content-editing"
    ],
    "title": "Net Content editing, copy/fill and remaining Undo checks",
    "status": "built",
    "stage": 2,
    "description": "Keep the completed amount/unit editing and copy/fill behavior, and verify Undo restores both values and units after reopening.",
    "detail": "Editing Net Content amounts and units and copying/filling rows are recorded complete. Undo is the remaining part within this item: the prior proposed fix was closed without inclusion in the product; restoring both value and unit after a drag-fill, saving and reopening will be checked end to end. Confirm the current implementation. Group progress follows the remaining Undo portion; the original editing completion remains closed.",
    "nextStep": "Smpltrax: verify Undo in the real screen through save/reload."
  },
  {
    "id": "submission-matrix-save-parity",
    "sourceIds": [
      "submission-matrix-save-parity",
      "saved-order-selections"
    ],
    "title": "Submission choices and consistent saved/reopened drafts",
    "status": "built",
    "stage": 2,
    "description": "Restore chosen tests in saved drafts and keep material choices, peptide symbols and saved selections consistent.",
    "detail": "Restoring available tests on saved-order reopening and warning about no-longer-offered tests are recorded complete (4 October, with earlier browser checks). Material-choice, peptide-symbol and draft-consistency fixes are built with five check cases prepared; they are not yet installed in the limited test environment. Finish that environment update and run the five save/reopen cases, preserving Tablet behavior. The test-selection fix is complete; broader consistency checks follow.",
    "nextStep": "Smpltrax: prepare the limited test environment and run the five saved-draft consistency cases; link the existing completed selection evidence."
  },
  {
    "id": "partner-inventory",
    "sourceIds": [
      "partner-inventory",
      "intercompany-supplies"
    ],
    "title": "Partner inventory sharing, supply balances and settlement",
    "status": "working",
    "stage": 1,
    "description": "Share selected partner stock information while keeping stock separate, and track partner purchases, running balances and month-end invoices.",
    "detail": "Partner inventory sharing and related supply balances are partly built. Viewing permissions and the complete process come next. Track supplies bought for the partner, reviewable running obligations and month-end invoices using the agreed charging/accounting contract. Confirm partner agreements and access rules before use. Sample send-out, reviewed-result exchange and related analytical charges are a distinct partner-lab workflow, kept separately.",
    "nextStep": "Smpltrax: verify access boundaries and supply records, then bring this into Optiq’s version. Labs: confirm the partner charging and accounting agreements.",
    "evidence": "20 October: sharing selected stock with a partner lab and recording supply charges are built for all labs; the charging rules are placeholders. Not yet in Optiq’s version.",
    "currentDisposition": "Sharing selected stock with a partner lab and recording supplies charged to the partner are built for all labs. The charging rules are placeholders until the labs confirm their partner agreements; month-end invoices and settlement are not yet verified, and this is not yet in Optiq’s version. Sample send-out and result exchange are a separate partner-lab workflow.",
    "currentOwner": "Smpltrax",
    "currentAsOf": "2026-10-20"
  }
];

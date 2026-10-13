// Original records and their history remain in data.js. Each source belongs to one work item.
window.OPTIQ_CONSOLIDATIONS = [
  {
    "id": "fentanyl-results",
    "sourceIds": [
      "fentanyl-results",
      "immunoassay-method-wording"
    ],
    "title": "Fentanyl results, method wording and COA",
    "status": "working",
    "stage": 1,
    "description": "Complete Fentanyl reporting with the confirmed Method: Immunoassay and Specification: <10 ng/mL.",
    "detail": "Fentanyl result and reporting changes are built; the approved method/specification text still needs application and the complete saved-result-to-certificate flow remains unverified. Mike confirmed Fentanyl, Method: Immunoassay and Specification: <10 ng/mL on 12 October, resolving the prior wording question. Preserve existing result-entry and audited reporting behavior, keep the separate Reporting Hub column, and coordinate the prominent certificate presentation and integration with the existing COA Mockups owner. Fentanyl remains ahead of QR drop-off. No firm release date was agreed; no new implementation or release verification is claimed.",
    "question": null,
    "nextStep": "Smpltrax: apply the confirmed Fentanyl wording and finish the saved-result-to-COA proof with the existing Fentanyl and COA owners."
  },
  {
    id: 'optiq-billing-rules',
    sourceIds: ['optiq-billing-rules', 'client-specific-pricing', 'rush-surcharge'],
    title: 'Optiq invoicing: customer rates, formats and rush rules',
    status: 'optiq', stage: 0, topPriority: true, priorityOrder: 3,
    priorityLabel: 'After status sync',
    description: 'Generate reviewed invoices using explicit customer pricing, sample references, quantities, formatting exceptions and rush rules.',
    detail: 'Mike selected QuickBooks customer notes as the starting source for Optiq rates, rush charges and customer exceptions on 12 October. After QuickBooks invoice/payment status sync, extract those notes into testable configuration and flag missing or conflicting information for the billing lead. Retain sample IDs and names; support grouped lines with quantities where wanted and other customer-specific layouts. Grouping is not a universal preference. Confirm actual rush rules and verify the displayed extra amount. The $50/$100 rush examples and illustrative 10% discount are not approved policies; volume thresholds and missed-commitment penalties remain unresolved. Use human-reviewed dry runs to reproduce agreed rates, references, quantities and formats, rather than AI deciding each invoice or unattended sending. Prove Optiq before the separately tracked ExcelBIS extension. Public price visibility and broader package/volume policy remain lower priority.',
    question: 'Billing lead: provide access to the QuickBooks customer notes and confirm missing or conflicting rates, invoice-format preferences, exceptions and rush rules.',
    nextStep: 'Smpltrax: extract QuickBooks customer notes into configuration and reviewed dry runs after status sync. Billing lead: confirm missing or conflicting rates, formats and rush exceptions.'
  },
  {
    id: 'inspection-rules', sourceIds: ['inspection-rules', 'inspection-checks'],
    title: 'Visual inspection: saved vial checks, Reporting Hub and COA',
    status: 'optiq', stage: 1,
    description: 'Save vial and cap integrity and colors, give inspection its own Reporting Hub column, and show it on the COA’s first page.',
    detail: 'Verify intact/cracked vial condition, cap and seal integrity, vial color and cap color against the built receiving controls, including correct persistence of seal observations. Existing controls do not prove all requested fields are delivered. Complete missing fields and saved-observation-to-COA checks, including missing information and page breaks. Review the first-page presentation in the 14 October design package before application wiring. Input controls, controlled vocabulary and final layout remain open. Powder appearance, visible amount, damaged/empty vials and customer follow-up rules still need lab decisions; none was settled by the later meeting.',
    question: 'Please review the 14 October inspection mockup and confirm input vocabulary and outstanding damaged/empty-vial and powder-observation rules.',
    nextStep: 'Smpltrax: verify saved checks and the separate Reporting Hub column, then qualify the approved first-page COA presentation.'
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
    id: 'coa-oct14-mockups', sourceIds: ['coa-oct14-mockups', 'coa-chart-page-filling'],
    title: '14 October COA mockups, readable fields and page layout',
    status: 'working', stage: 1, nextReview: true,
    priorityLabel: 'Design review · Wednesday 14 October',
    description: 'Review the revised table and all-inclusive mockups, then qualify readable fields, charts and page breaks in the approved layout.',
    detail: 'The 14 October target is a mockup review, not a production-release deadline. Keep the preferred side-by-side information layout, show the COA number instead of the test type in the relevant header, and review top-border/header cleanup. Put vial inspection on page one and make fentanyl prominent; include their separate Reporting Hub columns in the design package. Size sections and plots to use available space without shrinking plots or splitting evidence sections. Long client/sample names must avoid clipping and overlap; adjust only the affected field, with wrapping versus font reduction still open. Check normal panels and unusually large combinations while preserving readability. Final fentanyl placement, header treatment and page breaks remain open. A standalone summary page followed by tables was discussed, not adopted. Agree on appearance before wiring stored results and protect the existing COA workflow. Chart-fitting changes are built but rendered-page checks remain. The earlier accepted COA layout stays completed in its own record.',
    nextStep: 'Smpltrax: prepare Wednesday’s mockups and check long names, large panels, chart sizing and evidence page breaks. Lab reviewers: choose the outstanding layout rules before wiring and rollout.'
  },
  {
    id: 'sop-documents', sourceIds: ['sop-documents', 'document-release', 'quality-workflows-multi-lab'],
    title: 'Lab quality: documents, SOPs, nonconformance and CAPA',
    status: 'working', stage: 1,
    description: 'Make the existing document and quality workflows usable across all three labs, with controlled approval and signatures after the core tools work.',
    detail: 'Parts of document editing, forms, logs and quality-issue tools are built. Audit usable modules and finish importing, editing, saving, earlier-version retrieval, forms/logs, permissions, concurrent-edit and recovery checks. Identify and configure the remaining nonconformance and CAPA workflows, agree transition from existing trackers/documents and avoid equivalent parallel manual tracking. Reuse existing tools. Inventory and quality adoption need not wait for complete analytical migration. Approval roles, permissions, document lifecycle, sign-off and detailed CAPA/nonconformance rules remain open. Approving and signing versions and reusable cross-lab templates follow the usable core; the meeting did not settle a new signature policy. The ambiguous January 1 start-work comment is not a blanket deadline. Proposed completion check: staff complete the selected workflows without duplicate trackers.',
    nextStep: 'Smpltrax and lab quality owners: verify the core modules, agree missing rules and tracker transition, then add the approved version/signature/template workflows.'
  },
  {
    id: 'intake-attention-notices', sourceIds: ['intake-attention-notices', 'customer-photos'],
    title: 'Action Required: intake photos and client portal replies',
    status: 'working', stage: 1,
    description: 'Resolve unidentified samples and missing vial labels through a saved portal request, photographs and the client’s reply.',
    detail: 'The earlier optional photo-request entry overlaps the now-requested missing-label scenario; it is included here rather than left as a second task. Existing Action Required and customer-reply tools have code checks but do not prove the complete saved conversation. For three conformity vials without adequate labels, staff send photos with preset reasons and ask the client to identify them. Keep the request and clarification private, linked to the correct submission/sample and retrievable. Verify sending, attachments, correct customer, reply and reopening. Administrator-maintained custom reasons versus one-off free text, reason permissions and status/resolution behavior beyond the exchange remain open. General asynchronous sample/order messaging is a related, separately tracked capability.',
    nextStep: 'Smpltrax: prove the saved photo-request/reply flow for missing vial labels. Lab operations: confirm reason maintenance, resolution behavior and notification timing.'
  },
  {
    id: 'inventory-follow-ups', sourceIds: ['inventory-follow-ups', 'purchasing', 'watched-folder-documents'],
    title: 'Inventory follow-ups: safe edits, purchasing and document intake',
    status: 'partial', stage: 1,
    description: 'Finish safe Inventory editing, supplier/order follow-ups and assisted entry from retained business documents.',
    detail: 'Inventory redesign is partly built. Verify safe supplier editing and saving to the correct item, including switching items and discarding changes without overwriting another item. Finish the complete purchasing journey, vendor replies and purchase-order attention queue. Original business attachments can be retained; invoice/packing-slip/photographed-document reading into proposed Inventory entries remains unfinished. Reliable collection from a watched local folder remains an unfinished proposed approach, not a new background service commitment. Confirm the existing developer and saved work for supplier replies, invoice suggestions and attention handling before continuing. Catalog/PO receiving defaults, certified-lot import and partner settlement remain distinct work.',
    nextStep: 'Smpltrax: confirm ownership and retained work, prove safe editing, then finish purchasing follow-ups, document proposals and reliable collection.'
  },
  {
    id: 'empower-native-collection', sourceIds: ['empower-native-collection', 'universal-import'],
    title: 'Instrument result collection, Sample ID matching and recovery',
    status: 'partial', stage: 1,
    description: 'Support automatic completed-run collection and result-file uploads with correct Sample ID matching, retained evidence and recovery.',
    detail: 'The matching fix was installed and verified on 9 October: use explicit Sample IDs, permit different product wording and avoid treating numbers in product names as IDs. Conflicting IDs remain unmatched; staff must supply the correct ID, and the product name is not a second check. Complete test/import coverage, automatic collection of completed Empower runs without manual export, collector setup on the new computer and interrupted-import recovery. Previously held runs were not retried; their outcomes remain unconfirmed. Staff need to inspect incoming injections and mass-spectral data in the correct records. Participants described work underway, not verified installation/usability. Define preliminary sample/QC checks and expected-run/missing-result notification conditions; “over an hour” is not an approved threshold. Automatic result release was not specified. Prove a representative authorized instrument-to-record journey and prepare a practical tutorial for Brian and other analysts once reliable. Native analysis, instrument batches and reportable-run selection are tracked with the testing workflow.',
    nextStep: 'Smpltrax: verify collection, upload coverage and recovery through the correct records. Analysts: confirm sample/QC and missing-result rules, then validate the documented handoff.'
  },
  {
    id: 'analysis-framework', sourceIds: ['analysis-framework', 'configured-sample-actions', 'instrument-workflow'],
    title: 'Lab testing workflow: Sample Details, analysis and repeat runs',
    status: 'working', stage: 1,
    description: 'Connect lab-specific Sample Details actions, preparation, instrument batches, native analysis, result history and staff review through the final COA.',
    detail: 'Lab-specific sample actions remain a draft requiring reconciliation with related changes; the connected testing process is unfinished. Show the tests and repeat-work actions the lab actually uses. Verify original instrument run-list implementation, source custody, ownership and current use rather than treating a built label as availability proof. Retain original result files linked to runs. Separately scope LIMS-generated batches and explicit repreparation/rerun handling; these were discussed improvements, not delivered features. Distinguish physical vials from injections and preparation records and define reportable-result selection. Native peak integration and calculations currently done manually are useful near-term work for Optiq and potentially Mammoth. Exact calculations, QC, monitoring thresholds, batch details and rerun rules remain open; no automatic result release was specified. Prove the complete correct-record → analysis → human review → COA journey and analyst handoff. Specific conformity parent/vial rules remain in the Conformity item; collection/import acceptance is separate.',
    nextStep: 'Smpltrax: reconcile and prove the connected workflow and existing source custody. Analysts/method owners: define calculations, QC, batches and reportable-run rules before analytical acceptance.'
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

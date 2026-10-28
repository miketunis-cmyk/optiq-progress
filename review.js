'use strict';
// Current decisions overlay earlier evidence; original request records remain unchanged.
window.OPTIQ_REVIEW = {
  "date": "2026-10-23",
  "summary": "Mike and Smpltrax reviewed Optiq’s feedback on 23 October and agreed a focused delivery plan: build on existing capabilities, validate complete workflows, and prioritize practical improvements for lab staff and clients.",
  "updates": {
    "invoice-status": {
      "title": "Invoice status and the Uninvoiced quick filter",
      "status": "queued",
      "stage": 0,
      "description": "Keep the existing invoice-status capability and add an Uninvoiced quick-filter button above the TS grid.",
      "detail": "Invoice status itself was previously recorded complete. On 23 October Mike confirmed the missing request is specifically an Uninvoiced button above the Reporting Hub TS grid that shows rows not yet invoiced. Do not rebuild invoice status or conflate this with photo sorting.",
      "nextStep": "Smpltrax: add and click-test the Uninvoiced quick-filter button using the existing invoice status.",
      "currentDisposition": "Existing invoice status is retained; the Uninvoiced quick filter is newly confirmed work.",
      "evidence": "23 October: Mike explicitly selected Uninvoiced for the quick-filter button.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "portal-price-visibility": {
      "title": "Low-friction ordering cart and public pricing",
      "status": "queued",
      "stage": 0,
      "description": "Let customers choose tests, see the full price, supply required sample information and pay through a familiar checkout.",
      "detail": "The 23 October decision supersedes the earlier deferred/hidden-public-pricing direction. Build a low-friction, mobile-friendly ordering journey with public prices and clear sample-submission instructions. Returning clients sign in before payment for their agreed pricing and can reuse My Products information with the new lot details. Keep complex promotions and unapproved pricing rules out of the initial scope. Click-test new-customer and returning-customer journeys before accepting the design. Saved results must not become results for a new lot. Coordinate payment work with the existing QuickBooks owner.",
      "nextStep": "Smpltrax: prepare and click-test the checkout and My Products journeys; lab pricing is required before real charges.",
      "currentDisposition": "Checkout direction agreed; the proposed journey still needs click-testing. Prior public-pricing deferral is superseded.",
      "evidence": "23 October: Mike selected familiar low-friction checkout and repeat ordering through My Products.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "public-signup-approval": {
      "title": "Portal access after payment or staff invitation",
      "status": "queued",
      "stage": 0,
      "description": "Keep public browsing and checkout available while restricting portal access to verified purchasers and invited clients.",
      "detail": "The 23 October decision supersedes keeping public signup unchanged. To limit casual snooping, grant new purchasers access after successful payment and email verification; established clients can enter by staff invitation without a retail purchase. Checkout confirmation shows shipping/drop-off instructions immediately, and Track my order leads through verification to the authorized order. No open portal registration. Access to an existing company and its other records requires authorization, not a typed company name. This is a proposed flow pending click-testing, coordinated with the cart rather than a second checkout project.",
      "nextStep": "Smpltrax: implement and click-test the paid-purchaser and invited-client paths, recovery and company-record boundaries.",
      "currentDisposition": "New access direction agreed; implementation and click-testing are not verified.",
      "evidence": "23 October: Mike chose payment plus email verification or staff invitation to reduce casual portal access.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "optiq-billing-rules": {
      "status": "optiq",
      "stage": 0,
      "title": "Client prices, testing packages and billing rules",
      "description": "Use approved client-specific test and package prices through ordering and invoicing.",
      "detail": "Mike confirmed that client-specific pricing and testing packages already exist at least in part. Red-team that framework, complete missing behavior and verify that prices apply consistently through orders and invoices. This item needs the lab approved price sheet, package prices and client-specific agreements before the configuration can be verified against actual rates. Preserve earlier invoice-format, rush-rule and sample-reference requirements. Illustrative discounts or five/seven-panel offers are not approved pricing policy.",
      "question": "Optiq billing lead: supply the approved test and package price sheet, client-specific rates, and exceptions or rush rules so existing pricing and invoice behavior can be checked.",
      "nextStep": "Lab: supply the approved pricing. Smpltrax: red-team the existing test/package pricing framework and verify it through ordering and invoicing.",
      "currentDisposition": "Needs lab pricing. Existing framework is to be challenged and completed, not rebuilt by default.",
      "evidence": "23 October: Mike explicitly classified this as needing lab information and requested red-teaming existing per-client pricing.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "quickbooks-status-sync": {
      "detail": "Mike confirmed on 12 October that Optiq uses QuickBooks Online. The meeting ended by elevating billing; Mike’s subsequent direct priority review puts Conformity first. Invoice/payment status sync remains the first billing step. Start with invoiced and paid status synchronization at Optiq. An order number was proposed for matching; confirm how the actual records identify each order. Investigate the real QuickBooks connection and authorization requirements. No completion date was agreed. 23 October: Mike confirmed that QuickBooks setup and integration are already being handled in a separate active workstream. Do not create a duplicate implementation from this review.",
      "nextStep": "Existing QuickBooks owner: complete and verify the connection and agreed invoice/payment flow; coordinate checkout and white-label billing dependencies.",
      "currentDisposition": "Existing QuickBooks work continues separately. This review adds dependencies, not a duplicate implementation or a completion claim.",
      "evidence": "23 October: Mike reported that QuickBooks work is underway separately. No new payment or accounting verification was performed in this review.",
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "analysis-framework": {
      "title": "Lab testing workflow and direct result entry",
      "detail": "Lab-specific Sample Details and repeat-work actions remain an existing draft; the connected testing process comes next. Build on the existing work and preserve source records, original result files, immutable lab capability/method pins and caller permissions. Reuse accepted method, QC, preparation and repeat-run rules; identify only the work that remains. Verify LIMS-generated batches and explicit repreparation/rerun handling where required. Distinguish physical vials from injections and preparation records and preserve reportable-result selection. Native peak integration and calculations currently done manually remain useful near-term work. Prove the complete correct-record → analysis → human review → COA journey and analyst handoff through the existing release authority. Specific Conformity parent/vial rules remain in the Conformity item; collection/import acceptance is separate. Progress reviewed 20 October: Automatic purity and automatic library identity for peptide samples are built and waiting to be installed after Fentanyl. Results are labelled automatic and unreleased until an analyst reviews them. Purity is the combined area of all peptide peaks, shown live in the peak table with a card for each peptide peak. The release adds a Data Analysis area with a list of runs to analyse and purity review, live purity in the peak table, and a fix for Empower run time units. Staff remain responsible for review and release. A practice installation on a copy of Optiq’s data comes next, before it becomes available at Optiq. Lab-defined analyses through results, training and COA are still in draft. 23 October review: prioritize completion of the existing direct-entry work for sterility and endotoxin results. Smpltrax will locate the implementation, confirm its owner and remaining work, and validate the staff workflow before release. This builds on prior development and aims to eliminate duplicate entry.",
      "nextStep": "Smpltrax: confirm the existing direct-entry implementation and remaining delivery steps; validate the complete analyst workflow and coordinate permission controls.",
      "currentDisposition": "Lab-specific Sample Details and repeat-work actions remain an existing draft; the connected testing process comes next. Build on the existing work and preserve source records, original result files, immutable lab capability/method pins and caller permissions. Reuse accepted method, QC, preparation and repeat-run rules; identify only the work that remains. Verify LIMS-generated batches and explicit repreparation/rerun handling where required. Distinguish physical vials from injections and preparation records and preserve reportable-result selection. Native peak integration and calculations currently done manually remain useful near-term work. Prove the complete correct-record → analysis → human review → COA journey and analyst handoff through the existing release authority. Specific Conformity parent/vial rules remain in the Conformity item; collection/import acceptance is separate. Progress reviewed 20 October: Automatic purity and automatic library identity for peptide samples are built and waiting to be installed after Fentanyl. Results are labelled automatic and unreleased until an analyst reviews them. Purity is the combined area of all peptide peaks, shown live in the peak table with a card for each peptide peak. The release adds a Data Analysis area with a list of runs to analyse and purity review, live purity in the peak table, and a fix for Empower run time units. Staff remain responsible for review and release. A practice installation on a copy of Optiq’s data comes next, before it becomes available at Optiq. Lab-defined analyses through results, training and COA are still in draft. 23 October review: prioritize completion of the existing direct-entry work for sterility and endotoxin results. Smpltrax will locate the implementation, confirm its owner and remaining work, and validate the staff workflow before release. This builds on prior development and aims to eliminate duplicate entry.",
      "evidence": "23 October: Mike reported weeks-old direct-entry work and requested recovery rather than a duplicate build. Earlier analysis evidence is retained.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "inventory-follow-ups": {
      "title": "Purchasing and inventory: complete workflow validation",
      "status": "check",
      "stage": 0,
      "description": "Red-team the existing purchasing and inventory workflows, not just basic item editing.",
      "detail": "Build on the existing purchasing and inventory modules with an end-to-end review: purchasing, receiving, stocking, usage and reordering. Smpltrax will test how the steps connect, resolve defects and recheck earlier findings. Supplier editing and document intake remain included. This review uses test data; operational readiness will be confirmed by workflow testing.",
      "nextStep": "Smpltrax: click-test the complete existing purchasing/inventory journey, repair defects and retest; record usability improvements separately from blockers.",
      "currentDisposition": "Build on the existing purchasing and inventory modules with an end-to-end review: purchasing, receiving, stocking, usage and reordering. Smpltrax will test how the steps connect, resolve defects and recheck earlier findings. Supplier editing and document intake remain included. This review uses test data; operational readiness will be confirmed by workflow testing.",
      "evidence": "23 October: Mike requested agent click-testing of purchasing and the full inventory lifecycle, with repair and regression checks.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "sop-documents": {
      "title": "Quality workflows: document control, SOPs, NCR and CAPA",
      "status": "check",
      "stage": 0,
      "description": "Test and improve the existing document-control, SOP, nonconformance and corrective-action workflows.",
      "detail": "Validate and refine the existing quality workflows from document approval and training through issue reporting, investigation, corrective action and resolution. Mike has asked for a usability review as well as functional testing, with attention to clear language, efficient steps and obvious next actions. Smpltrax will address findings and retest the complete journey. Method validation remains with the lab.",
      "nextStep": "Smpltrax: red-team the existing workflows and UI/UX, fix functional and usability defects, and click-test the repaired end-to-end paths.",
      "currentDisposition": "Validate and refine the existing quality workflows from document approval and training through issue reporting, investigation, corrective action and resolution. Mike has asked for a usability review as well as functional testing, with attention to clear language, efficient steps and obvious next actions. Smpltrax will address findings and retest the complete journey. Method validation remains with the lab.",
      "evidence": "23 October: Mike confirmed existing implementation is expected and requested testing, repair and UI/UX red-teaming.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "spectral-reference-library": {
      "status": "check",
      "stage": 0,
      "title": "Audit collected standard runs and the reference library",
      "description": "Check whether already-collected instrument runs contain the standards needed by the existing analysis library.",
      "detail": "Use the existing instrument-data collector to identify reference-standard runs already available to the lab. Smpltrax will check collection coverage, supporting records and compatibility with the reference library before requesting additional uploads or runs. The lab retains responsibility for approving and qualifying scientific references.",
      "nextStep": "Smpltrax: audit collected runs and standard metadata, connect verified references to existing library work and identify genuine missing inputs.",
      "currentDisposition": "Use the existing instrument-data collector to identify reference-standard runs already available to the lab. Smpltrax will check collection coverage, supporting records and compatibility with the reference library before requesting additional uploads or runs. The lab retains responsibility for approving and qualifying scientific references.",
      "evidence": "23 October: Mike identified the existing collector as the first source to audit; no new instrument access or data inspection was performed.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "hubspot-onboarding": {
      "title": "HubSpot and Smpltrax client synchronization",
      "status": "queued",
      "stage": 0,
      "description": "Avoid maintaining the same client information separately in HubSpot and Smpltrax.",
      "detail": "Mike confirmed on 23 October that relevant client information should synchronize in both directions. This supersedes the earlier deferral. Inspect any existing integration first, define the records and fields to synchronize, resolve duplicates and specify which system controls conflicting updates. Do not indiscriminately mirror every field or start a duplicate integration.",
      "nextStep": "Smpltrax: inspect existing HubSpot work, define synchronization ownership and conflict rules, then verify the client-record flow.",
      "currentDisposition": "Synchronization is confirmed work; current implementation remains to be inspected.",
      "evidence": "23 October: Mike confirmed the HubSpot/LIMS synchronization requirement and the need to establish field and conflict ownership.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "receipt-emails": {
      "title": "Company-name receipt emails: prepared for release",
      "status": "built",
      "stage": 2,
      "description": "Personalize the existing sample-received email with the client’s company name in the subject and greeting.",
      "detail": "The company-name enhancement is built, independently reviewed and prepared as a focused release for Optiq. Receipt tests, rollback tests and the live compatibility checks passed, and the release package is checksum-verified. The subject and greeting will use the client’s company name while preserving the current receipt workflow and recent reporting improvements. The package is prepared for approved deployment; the enhancement is not yet live.",
      "nextStep": "Smpltrax: complete the approved rollout and verify the installed receipt-email enhancement.",
      "currentDisposition": "The company-name enhancement is built, independently reviewed and prepared as a focused release for Optiq. Receipt tests, rollback tests and the live compatibility checks passed, and the release package is checksum-verified. The subject and greeting will use the client’s company name while preserving the current receipt workflow and recent reporting improvements. The package is prepared for approved deployment; the enhancement is not yet live.",
      "evidence": "PR #6519 merged on 24 October. Required CI, independent review, 26 receipt tests, 14 Linux rollback tests and 36 live prerequisite checks passed. Exact release package prepared and sealed; deployment approval remains outstanding.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-24",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    },
    "coa-status-language": {
      "title": "Verify existing COA identity mismatch indicators",
      "status": "check",
      "stage": 0,
      "description": "Verify that a result differing from the submitted claim does not appear as a successful green identity match.",
      "detail": "The mismatch indicator is reported as addressed; Smpltrax will confirm the behavior in representative PDFs and digital cards before closing the item. Mike confirmed that current compound identity names should remain in place. This verification concerns clear report presentation and does not change scientific findings or report history.",
      "nextStep": "Smpltrax: locate the existing fix and verify a mismatched result in the PDF and digital card; close if it passes.",
      "currentDisposition": "The mismatch indicator is reported as addressed; Smpltrax will confirm the behavior in representative PDFs and digital cards before closing the item. Mike confirmed that current compound identity names should remain in place. This verification concerns clear report presentation and does not change scientific findings or report history.",
      "evidence": "23 October: Mike said the green-status issue may already be handled and decided to retain current COA identity naming.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentEvidenceBoundary": "23 October discussion records scope and next steps; it does not establish new implementation, click-test completion or live deployment."
    }
  },
  "additions": [
    {
      "id": "reporting-hub-pagination",
      "title": "Reporting Hub pagination and page-size changes",
      "area": "Reporting Hub",
      "status": "queued",
      "stage": 0,
      "description": "Make the page buttons change pages and page-size changes work reliably.",
      "detail": "Lazz cannot move between pages with the page buttons and also reported freezing when changing page size. Mike confirmed one ticket covers both pagination behaviors.",
      "nextStep": "Smpltrax: reproduce both behaviors, fix their causes and click-test page navigation and page-size changes.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Lazz cannot move between pages with the page buttons and also reported freezing when changing page size. Mike confirmed one ticket covers both pagination behaviors.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "lab-photo-sort",
      "title": "Sort the image column by lab-photo presence",
      "area": "Reporting Hub",
      "status": "queued",
      "stage": 0,
      "description": "Sort rows by whether a lab-uploaded photo is present or absent.",
      "detail": "This is the specific image-column sorting request. Client-provided photos do not count. A missing lab photo is not proof that a sample has not arrived; lab-wide sample status tracking is a separate item.",
      "nextStep": "Smpltrax: make both sort directions use lab-uploaded photo presence and verify client-only photos do not count.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "This is the specific image-column sorting request. Client-provided photos do not count. A missing lab photo is not proof that a sample has not arrived; lab-wide sample status tracking is a separate item.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "ordered-test-search",
      "title": "Find samples by tests ordered",
      "area": "Reporting Hub",
      "status": "queued",
      "stage": 0,
      "description": "Find samples with a particular test ordered, independently of their test results.",
      "detail": "Mike confirmed the example of finding samples with fentanyl testing ordered. This concerns ordered tests, not result values. It is separate from the intermittent test-copy issue that worked during the meeting.",
      "nextStep": "Smpltrax: inspect the existing search/filter controls and make ordered-test lookup work in the Reporting Hub.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Mike confirmed the example of finding samples with fentanyl testing ordered. This concerns ordered tests, not result values. It is separate from the intermittent test-copy issue that worked during the meeting.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "sample-status-audit",
      "title": "Clear, traceable sample status across the lab",
      "area": "Lab operations",
      "status": "queued",
      "stage": 0,
      "description": "Make sample status meaningful, traceable and visible throughout the lab workflow.",
      "detail": "Review the existing sample lifecycle so staff can establish where each sample is, what its status means and which action recorded it. Start with physical receipt: lab photos are useful supporting evidence, while a missing photo does not establish non-receipt. Confirm how arrival and completed intake are recorded and make those distinctions clear throughout the lab.",
      "nextStep": "Smpltrax: inspect the existing lifecycle and receipt records, identify gaps, and define and verify reliable status transitions and visibility.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Review the existing sample lifecycle so staff can establish where each sample is, what its status means and which action recorded it. Start with physical receipt: lab photos are useful supporting evidence, while a missing photo does not establish non-receipt. Confirm how arrival and completed intake are recorded and make those distinctions clear throughout the lab.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "stacked-filter-views",
      "title": "Combine filter views and quick-filter buttons",
      "area": "Reporting Hub",
      "status": "queued",
      "stage": 0,
      "description": "Let saved filter views and quick-filter buttons combine their conditions.",
      "detail": "Mike confirmed that selected filter views and filter buttons should stack rather than replace one another. Shift-click sorting is a separate existing capability, not the filtering requirement.",
      "nextStep": "Smpltrax: verify and fix combined filtering, including clearing one condition without losing the others.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Mike confirmed that selected filter views and filter buttons should stack rather than replace one another. Shift-click sorting is a separate existing capability, not the filtering requirement.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "lab-specific-filter-views",
      "title": "Configure filter views and buttons per lab",
      "area": "Reporting Hub",
      "status": "queued",
      "stage": 0,
      "description": "Use lab-appropriate filter views and quick-filter buttons without affecting other labs.",
      "detail": "One ticket covers the configuration fix and removing Compliance, Research and Close from Optiq. Those presets carried over from cannabis workflows. Preserve the underlying capabilities for labs that need them. Stacking filters is a separate behavior.",
      "nextStep": "Smpltrax: configure the views and buttons per lab, correct Optiq defaults and prove another lab is unchanged.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "One ticket covers the configuration fix and removing Compliance, Research and Close from Optiq. Those presets carried over from cannabis workflows. Preserve the underlying capabilities for labs that need them. Stacking filters is a separate behavior.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "custom-filter-view-audit",
      "title": "Custom filter views: consistency and usability",
      "area": "Reporting Hub",
      "status": "check",
      "stage": 0,
      "description": "Make existing custom filter views match the columns and their supported operations.",
      "detail": "Refine the existing custom filter views so each column offers suitable filtering and sorting options, and saved views return the expected records and order. The review will check the previously reported mismatches and build on the filtering tools already available.",
      "nextStep": "Smpltrax: test representative columns and saved views, fix mismatches and verify the expected rows and ordering.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Refine the existing custom filter views so each column offers suitable filtering and sorting options, and saved views return the expected records and order. The review will check the previously reported mismatches and build on the filtering tools already available.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "trusted-white-label-approval",
      "title": "Trusted-client white labels and billing records",
      "area": "White labels",
      "status": "queued",
      "stage": 0,
      "description": "Allow selected trusted clients to generate permitted white labels without manual approval while retaining billing visibility.",
      "detail": "Mike confirmed a trusted-client permission within existing white-label editing limits; other clients still require approval. Keep a record of what each client generated for billing. A copy-friendly email summary is an interim option if QuickBooks integration is delayed, not a second accounting system. Existing bulk-request, draft and photo work remains separate.",
      "nextStep": "Smpltrax: define and verify the permission-controlled flow and billing record; coordinate the interim summary with the existing QuickBooks work.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Mike confirmed a trusted-client permission within existing white-label editing limits; other clients still require approval. Keep a record of what each client generated for billing. A copy-friendly email summary is an interim option if QuickBooks integration is delayed, not a second accounting system. Existing bulk-request, draft and photo work remains separate.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "internal-document-checks",
      "title": "Automatically reconcile sample and report information",
      "area": "Lab operations",
      "status": "queued",
      "stage": 0,
      "description": "Run consistency checks inside Smpltrax so staff do not have to download and re-upload documents for manual checking.",
      "detail": "Audit the information already held in the LIMS and its existing checks, then automatically compare the relevant COA, manifest and chain-of-custody data and flag discrepancies for review. Identifiers, licenses and sample types were discussed. The operator current checklist can help assess coverage, but the system should run the checks without Lazz initiating a separate tool.",
      "nextStep": "Smpltrax: inventory existing data and checks, establish coverage and missing comparisons, and verify that discrepancies are surfaced reliably.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Audit the information already held in the LIMS and its existing checks, then automatically compare the relevant COA, manifest and chain-of-custody data and flag discrepancies for review. Identifiers, licenses and sample types were discussed. The operator current checklist can help assess coverage, but the system should run the checks without Lazz initiating a separate tool.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "result-entry-permission-profiles",
      "title": "Result-entry views and grid controls by permission profile",
      "area": "Reporting Hub",
      "status": "queued",
      "stage": 0,
      "description": "Show staff the appropriate result grids and control editing behaviors by permission profile.",
      "detail": "Align result-entry views and editing controls with each staff member’s permission profile. Smpltrax will verify existing visibility and edit restrictions, assess controls such as drag-to-fill, and address missing safeguards. This supports the direct-result-entry workflow and reduces the chance of unintended edits.",
      "nextStep": "Smpltrax: audit the existing profile controls, fill genuine gaps and click-test permitted and restricted result-entry behavior.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Align result-entry views and editing controls with each staff member’s permission profile. Smpltrax will verify existing visibility and edit restrictions, assess controls such as drag-to-fill, and address missing safeguards. This supports the direct-result-entry workflow and reduces the chance of unintended edits.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "customer-results-api",
      "title": "Customer results API, verification cards and webhooks",
      "area": "Client portal",
      "status": "queued",
      "stage": 0,
      "description": "Provide customer-authorized access to released COA PDFs, structured results and Verify Results cards.",
      "detail": "New reusable integration, with Frontier as the first use case. Provide revocable customer integration credentials restricted to the correct lab account and authorized records; check access on every request. Include the information reported on their COAs, PDF retrieval, structured result data and verification-card access or embed links. Webhooks can notify customers when reports are released or revised. Keep secret credentials on the customer server, not in public browser code. Start read-only and provide a documented integration example.",
      "nextStep": "Smpltrax: design the scoped API and webhook/card integration; obtain the first customer technical requirements and verify cross-client access isolation.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "New reusable integration, with Frontier as the first use case. Provide revocable customer integration credentials restricted to the correct lab account and authorized records; check access on every request. Include the information reported on their COAs, PDF retrieval, structured result data and verification-card access or embed links. Webhooks can notify customers when reports are released or revised. Keep secret credentials on the customer server, not in public browser code. Start read-only and provide a documented integration example.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "boarding-pass-parity",
      "title": "Wallet-ready COA cards: continue boarding pass parity",
      "area": "Client portal",
      "status": "check",
      "stage": 0,
      "description": "Build on the earlier wallet-card investigation and confirm the remaining delivery requirements.",
      "detail": "Continue the earlier “boarding pass parity” concept: a COA card with familiar presentation and save-to-wallet behavior. Smpltrax will locate the prior implementation and research, verify the existing Apple developer and signing setup, and identify what remains. Account availability and implementation status still need confirmation.",
      "nextStep": "Smpltrax: review the existing wallet-card work and developer setup, then define the remaining implementation.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Continue the earlier “boarding pass parity” concept: a COA card with familiar presentation and save-to-wallet behavior. Smpltrax will locate the prior implementation and research, verify the existing Apple developer and signing setup, and identify what remains. Account availability and implementation status still need confirmation.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    },
    {
      "id": "abandoned-order-reminders",
      "title": "Order completion and sample-arrival reminders",
      "area": "Client portal",
      "status": "queued",
      "stage": 0,
      "description": "Help customers resume unfinished orders and send samples for paid orders that are still waiting for them.",
      "detail": "Mike confirmed friendly reminders with a direct link to resume the order. Paid orders awaiting samples need a distinct message with shipping/drop-off instructions. Stop the appropriate reminders when the step is completed or the customer opts out. Timing and final messages remain to be defined; this review does not activate outbound messages.",
      "nextStep": "Smpltrax: define the unfinished-checkout and paid-awaiting-samples triggers, message cadence and resume links; verify suppression before activation.",
      "meetingPriority": true,
      "reviewedOn": "2026-10-23",
      "currentAsOf": "2026-10-23",
      "currentDisposition": "Mike confirmed friendly reminders with a direct link to resume the order. Paid orders awaiting samples need a distinct message with shipping/drop-off instructions. Stop the appropriate reminders when the step is completed or the customer opts out. Timing and final messages remain to be defined; this review does not activate outbound messages.",
      "currentOwner": "Smpltrax",
      "evidence": "Scope confirmed with Mike on 23 October. Delivery stage and verification requirements are shown separately."
    }
  ]
};

// 24 October release-evidence reconciliation. Original source records remain in history.
Object.assign(window.OPTIQ_REVIEW.updates, {
  "coa-oct14-mockups": {
    "status": "partial",
    "stage": 2,
    "title": "COA 2.0: installed layout and remaining qualification",
    "nextReview": false,
    "priorityLabel": "",
    "currentAsOf": "2026-10-24",
    "evidenceBasis": "Installed release checked",
    "description": "COA 2.0 is installed at Optiq; finish qualification of the remaining layout cases against the agreed design.",
    "detail": "The earlier statement that COA 2.0 was not installed is superseded. The installed release includes the COA 2.0 renderer and receipt-inspection storage. A recorded 24 October production check verified the generated PDF and browser preview for a real amended COA, including the corrected Confirmed identity wording. The new renderer applies to newly generated certificates; existing released artifacts are preserved. This does not establish that every long-name, multi-analyte, Fentanyl and page-break case in the original design request has passed.",
    "nextStep": "Smpltrax: reconcile the remaining layout cases with existing release proof and verify any uncovered cases; retain the approved layout and existing released certificates.",
    "currentDisposition": "COA 2.0 is installed. Remaining layout qualification is separate from the completed installation.",
    "evidence": "24 October: the live version endpoint matches the recorded COA 2.0 plus confirmed-identity release. The release completion record includes a real browser preview and downloaded PDF check. No new report was generated during this list audit.",
    "currentEvidenceBoundary": "Installed code and the recorded certificate check are confirmed; this is not a claim that every original layout acceptance case has been tested."
  },
  "stable-released-coa-links": {
    "status": "partial",
    "stage": 2,
    "currentAsOf": "2026-10-24",
    "evidenceBasis": "Installed scope checked",
    "detail": "The installed release includes the ordinary permanent COA-link implementation. The original request also covers customer-branded links and release/recovery behavior. The source contract treats stable white-label publication as a separate scope, so installation of ordinary links does not close the whole request.",
    "nextStep": "Smpltrax: confirm remaining white-label link and recovery coverage against the installed release before closing the combined request.",
    "currentDisposition": "Ordinary permanent-link code is installed; the combined white-label and recovery requirements remain to be verified.",
    "evidence": "24 October: the live release identity and its recorded source contracts confirm the ordinary permanent-link implementation in the installed baseline. This audit did not exercise customer links or publish replacement certificates.",
    "currentEvidenceBoundary": "Code inclusion is confirmed. End-to-end link behavior and the full white-label scope were not freshly tested."
  },
  "client-bulk-white-label": {
    "status": "partial",
    "stage": 2,
    "currentAsOf": "2026-10-24",
    "evidenceBasis": "Installed scope checked",
    "detail": "The installed release includes bulk white-label request and review-screen changes. Earlier records also cover private-draft editing and photo-selection fixes. Full coverage of the combined private request → staff edit → save → reopen → correct PDF journey still needs verification, including printed client names and customer-requested photos. Preserve official released certificates. Consent capture, document retrieval and brand profiles remain separate requirements.",
    "nextStep": "Smpltrax: verify the remaining private-draft, authorized-photo and PDF workflow against the installed release, retaining prior proof where it covers the same behavior.",
    "currentDisposition": "Bulk request and review changes are included in the installed release; the full combined workflow is not yet verified.",
    "evidence": "24 October: the live release identity and recorded release source contracts include the bulk white-label pages and review changes. Existing checks are retained; this audit did not submit customer requests or generate white-label reports.",
    "currentEvidenceBoundary": "Installed scope does not prove every private-draft, photo and PDF interaction. The remaining checks stay open."
  },
  "inspection-rules": {
    "status": "working",
    "stage": 1,
    "currentAsOf": "2026-10-24",
    "evidenceBasis": "Installed scope checked",
    "detail": "COA 2.0 receipt-inspection storage and certificate presentation are installed. This does not establish delivery of the full receiving and Reporting Hub editing workflow. Verify vial condition, cap and seal integrity, colors and persistence against the existing controls. Confirm the separate Reporting Hub section, correction-with-reason behavior and saved-observation-to-COA journey before marking them delivered. Remaining vocabulary and customer follow-up rules need lab agreement where not already settled.",
    "nextStep": "Smpltrax: verify which receiving and Reporting Hub controls are installed, finish confirmed gaps, and check saved observations through to the COA; resolve remaining vial-check wording with the lab.",
    "currentDisposition": "Storage and COA presentation are installed; the broader visual-inspection workflow remains open.",
    "evidence": "24 October: the installed COA 2.0 source contract includes receipt-inspection storage and presentation. The full intake/Reporting Hub interaction was not tested during this audit; earlier implementation records are retained.",
    "currentEvidenceBoundary": "Do not infer that all inspection controls or correction actions are live from the COA renderer and storage release."
  }
});

Object.assign(window.OPTIQ_REVIEW.updates["receipt-emails"], {nextStep: "Mike: approve the prepared release. Smpltrax: then deploy it and verify the installed company-name receipt email.", currentEvidenceBoundary: "The release package and prerequisite checks are complete. Deployment is awaiting Mike’s approval; the company-name enhancement is not live."});

// 24 October cart decisions: payment before order placement; Optiq owns pricing input.
for (const [id, update] of Object.entries({
  "portal-price-visibility": {
    "detail": "The 23 October decision supersedes the earlier deferred/hidden-public-pricing direction. Build a low-friction, mobile-friendly ordering journey with public prices and clear sample-submission instructions. Returning clients sign in before payment for their agreed pricing and can reuse My Products information with the new lot details. Keep complex promotions and unapproved pricing rules out of the initial scope. Click-test new-customer and returning-customer journeys before accepting the design. Saved results must not become results for a new lot. Coordinate payment work with the existing QuickBooks owner. 24 October clarification: customers enter required sample information and review the total before payment. Payment must succeed before the order is placed; unfinished or unsuccessful checkout remains a draft. Payment is required by default for every client. The lab can turn off upfront payment through a per-client setting for approved clients with agreed billing terms. Portal invitation alone does not waive payment.",
    "nextStep": "Smpltrax: prepare and click-test prepaid new-customer and returning-customer checkout, plus the approved client-terms exception. Optiq must supply approved pricing before real charges.",
    "currentDisposition": "Payment-before-order placement is agreed, with a per-client exception for approved billing terms. Checkout implementation and click-testing remain unverified.",
    "evidence": "23 October: Mike selected familiar low-friction checkout and repeat ordering through My Products. 24 October: Mike clarified that payment precedes order placement, not sample-data entry, and confirmed payment is required by default with a client-specific terms setting.",
    "currentAsOf": "2026-10-24",
    "currentEvidenceBoundary": "These are confirmed product requirements, not evidence that checkout or the terms setting is implemented or live."
  },
  "optiq-billing-rules": {
    "status": "optiq",
    "stage": 0,
    "currentAsOf": "2026-10-24",
    "currentDisposition": "Waiting on Optiq for approved test, package and client-specific prices. Checkout design can proceed while those inputs are gathered.",
    "evidence": "23 October: Mike explicitly classified this as needing lab information and requested red-teaming existing per-client pricing. 24 October: Mike reconfirmed that pricing is an information request for Optiq.",
    "nextStep": "Optiq: provide approved pricing and applicable rush or exception rules. Smpltrax: continue checkout design and verify the existing pricing framework once those inputs arrive.",
    "currentEvidenceBoundary": "Pricing remains pending lab input. No illustrative price, discount or rush rule has been adopted through this review."
  }
})) {
  Object.assign(window.OPTIQ_REVIEW.updates[id], update);
}

// 27 October: reconcile installed full upgrade and Data Analysis top-up.
for (const [id, update] of Object.entries({
  "reporting-hub-pagination": {
    "status": "complete",
    "stage": 3,
    "currentAsOf": "2026-10-27",
    "evidenceBasis": "Installed repair and retained browser proof",
    "detail": "Page navigation and page-size changes are installed. The pagination repair preserves the selected page across aggregate rerenders.",
    "currentDisposition": "Page navigation and page-size changes are installed. The pagination repair preserves the selected page across aggregate rerenders.",
    "nextStep": "Delivered. Smpltrax retains the existing regression and browser proof; any new defect stays separately owned.",
    "evidence": "27 October: the public Optiq /health/version endpoint reports API, web and Node runtime at 89167befd679365d5fb3702e3b92ccf38ac9d08a. GitHub ancestry confirms inclusion of the 26 October full-install version 950b90c0 and Reporting Hub repairs #6602/#6604. Existing source review and browser proof are retained; this work-list audit made no customer changes. Repair: https://github.com/himmapan-lab/smpltrax-v2/pull/6602",
    "currentEvidenceBoundary": "Release inclusion is verified. The repair owner recorded local browser proof before merge; no authenticated production click-test was performed during this list update."
  },
  "ordered-test-search": {
    "status": "complete",
    "stage": 3,
    "currentAsOf": "2026-10-27",
    "evidenceBasis": "Installed repair and retained browser proof",
    "detail": "Tests Ordered now matches the actual ordered analysis codes, including Fentanyl, rather than result values. The repair is installed.",
    "currentDisposition": "Tests Ordered now matches the actual ordered analysis codes, including Fentanyl, rather than result values. The repair is installed.",
    "nextStep": "Delivered. Smpltrax retains the existing regression and browser proof; any new defect stays separately owned.",
    "evidence": "27 October: the public Optiq /health/version endpoint reports API, web and Node runtime at 89167befd679365d5fb3702e3b92ccf38ac9d08a. GitHub ancestry confirms inclusion of the 26 October full-install version 950b90c0 and Reporting Hub repairs #6602/#6604. Existing source review and browser proof are retained; this work-list audit made no customer changes. Repair: https://github.com/himmapan-lab/smpltrax-v2/pull/6604",
    "currentEvidenceBoundary": "Release inclusion is verified. The repair owner recorded local browser proof before merge; no authenticated production click-test was performed during this list update."
  },
  "stacked-filter-views": {
    "status": "complete",
    "stage": 3,
    "currentAsOf": "2026-10-27",
    "evidenceBasis": "Installed repair and retained browser proof",
    "detail": "Saved views keep their own AND/OR expressions and combine with quick-filter buttons. Each condition can be removed independently, and remembered selections survive reload. The repair is installed.",
    "currentDisposition": "Saved views keep their own AND/OR expressions and combine with quick-filter buttons. Each condition can be removed independently, and remembered selections survive reload. The repair is installed.",
    "nextStep": "Delivered. Smpltrax retains the existing regression and browser proof; any new defect stays separately owned.",
    "evidence": "27 October: the public Optiq /health/version endpoint reports API, web and Node runtime at 89167befd679365d5fb3702e3b92ccf38ac9d08a. GitHub ancestry confirms inclusion of the 26 October full-install version 950b90c0 and Reporting Hub repairs #6602/#6604. Existing source review and browser proof are retained; this work-list audit made no customer changes. Repair: https://github.com/himmapan-lab/smpltrax-v2/pull/6604",
    "currentEvidenceBoundary": "Release inclusion is verified. The repair owner recorded local browser proof before merge; no authenticated production click-test was performed during this list update."
  },
  "lab-specific-filter-views": {
    "status": "complete",
    "stage": 3,
    "currentAsOf": "2026-10-27",
    "evidenceBasis": "Installed repair and retained browser proof",
    "detail": "Optiq no longer offers Compliance, Research or Close in its preset buttons, dropdown or editor. Other lab profiles retain their own presets. The repair is installed.",
    "currentDisposition": "Optiq no longer offers Compliance, Research or Close in its preset buttons, dropdown or editor. Other lab profiles retain their own presets. The repair is installed.",
    "nextStep": "Delivered. Smpltrax retains the existing regression and browser proof; any new defect stays separately owned.",
    "evidence": "27 October: the public Optiq /health/version endpoint reports API, web and Node runtime at 89167befd679365d5fb3702e3b92ccf38ac9d08a. GitHub ancestry confirms inclusion of the 26 October full-install version 950b90c0 and Reporting Hub repairs #6602/#6604. Existing source review and browser proof are retained; this work-list audit made no customer changes. Repair: https://github.com/himmapan-lab/smpltrax-v2/pull/6604",
    "currentEvidenceBoundary": "Release inclusion is verified. The repair owner recorded local browser proof before merge; no authenticated production click-test was performed during this list update."
  },
  "custom-filter-view-audit": {
    "status": "complete",
    "stage": 3,
    "currentAsOf": "2026-10-27",
    "evidenceBasis": "Installed repair and retained browser proof",
    "detail": "The reviewed filter repairs are installed: valid views keep their intended rows and ordering; incompatible or malformed saved filters visibly block results until corrected. Date and client-value normalization fixes are included. Broader future usability improvements remain separate.",
    "currentDisposition": "The reviewed filter repairs are installed: valid views keep their intended rows and ordering; incompatible or malformed saved filters visibly block results until corrected. Date and client-value normalization fixes are included. Broader future usability improvements remain separate.",
    "nextStep": "Delivered. Smpltrax retains the existing regression and browser proof; any new defect stays separately owned.",
    "evidence": "27 October: the public Optiq /health/version endpoint reports API, web and Node runtime at 89167befd679365d5fb3702e3b92ccf38ac9d08a. GitHub ancestry confirms inclusion of the 26 October full-install version 950b90c0 and Reporting Hub repairs #6602/#6604. Existing source review and browser proof are retained; this work-list audit made no customer changes. Repair: https://github.com/himmapan-lab/smpltrax-v2/pull/6604",
    "currentEvidenceBoundary": "Release inclusion is verified. The repair owner recorded local browser proof before merge; no authenticated production click-test was performed during this list update."
  },
  "analysis-framework": {
    "status": "partial",
    "stage": 2,
    "title": "Lab testing workflow: Data Analysis installed, end-to-end work remains",
    "currentAsOf": "2026-10-27",
    "evidenceBasis": "Installed Data Analysis release checked",
    "description": "Data Analysis and its reviewed purity/identity workspace updates are installed. Finish the wider lab-defined result-entry and analyst-to-COA workflow.",
    "detail": "The earlier statement that Data Analysis is waiting for installation is superseded. The installed 89167bef release includes the Data Analysis integration (#6729): the sample review strip, combined identity table, purity recording permissions, sample header pane, chart drag selection and lab peptide mass fields. Prior workflow requirements remain: correct sample/result matching, original source preservation, immutable method pins, repeat work and reportable-result selection, human review, and the released COA. Sterility/endotoxin direct entry and the full lab-defined workflow retain their existing owners and completion checks. Collector activation and qualified reference-library contents are separate; installing the workspace does not prove either.",
    "currentDisposition": "Data Analysis is installed. The complete direct-entry, analyst-review and released-COA workflow remains open.",
    "nextStep": "Smpltrax: verify the remaining direct-result-entry and analyst-to-COA journey; establish collector and reference-library readiness separately before any activation.",
    "evidence": "27 October: /health/version reports the #6729 merge 89167bef on both API and web. The PR records 572 web and 41 API tests passed and explicitly keeps the collector off pending end-to-end proof and approval. https://github.com/himmapan-lab/smpltrax-v2/pull/6729",
    "currentEvidenceBoundary": "Installed source is confirmed. This audit did not run an analysis, activate collection, qualify reference standards or release a customer COA."
  },
  "conformity": {
    "status": "partial",
    "stage": 2,
    "currentAsOf": "2026-10-27",
    "evidenceBasis": "Installed code; activation and full workflow unverified",
    "detail": "The full upgrade is installed, superseding the earlier blanket statement that no new Conformity code is available at Optiq. The installed release carries the lab-defined Conformity implementation, Sample Details integration and activation controls. Installation alone does not establish the current switches, approved lab configuration or completion of the parent/vial → result entry → independent review → COA journey. Preserve the established parent/vial lineage, analysis-specific result types and agreed scope. Existing lab configuration and end-to-end acceptance obligations remain open.",
    "currentDisposition": "Conformity code is installed. Current activation, lab configuration and the complete vial-to-COA workflow still need verified evidence.",
    "nextStep": "Smpltrax: reconcile the installation owner’s activation record, verify Optiq’s approved analyses and service catalogue, and finish the full parent/vial-to-COA acceptance check.",
    "evidence": "27 October: the public Optiq /health/version endpoint reports API, web and Node runtime at 89167befd679365d5fb3702e3b92ccf38ac9d08a. GitHub ancestry confirms inclusion of the 26 October full-install version 950b90c0 and Reporting Hub repairs #6602/#6604. Existing source review and browser proof are retained; this work-list audit made no customer changes. The installed release includes docs/operations/optiq-conformity-activation-release.md; it treats installation and activation as separate controls.",
    "currentEvidenceBoundary": "No runtime switch or customer workflow was checked in this audit. Do not infer that Conformity is enabled or fully qualified from installed code."
  },
  "receipt-emails": {
    "status": "partial",
    "stage": 2,
    "title": "Company-name receipt emails: installed, delivery verification remains",
    "currentAsOf": "2026-10-27",
    "evidenceBasis": "Installed receipt-email source checked",
    "description": "The installed receipt email uses the client company name in its subject and greeting. Verify the delivery behavior through the existing owner.",
    "detail": "The old standalone release package and request for Mike to approve it are superseded by the full installed application. In installed API source 89167bef, sampleReceiptNotificationService selects the distributor company name with a submitter-name fallback, and sampleReceiptEmail uses that resolved name in the subject and greeting. Whole-order/partial receipt behavior and recipient isolation remain in scope. This proves inclusion of the company-name enhancement, while actual outbound delivery is not newly verified.",
    "currentDisposition": "Company-name receipt code is installed; the old standalone deployment is no longer the next action. Delivery verification remains with the receipt owner.",
    "nextStep": "Smpltrax: reconcile existing receipt delivery evidence against the installed version and complete any remaining authorized verification; do not deploy the stale standalone package.",
    "evidence": "27 October: installed API identity 89167bef confirmed at /health/version. Exact-source inspection verifies the company-name SQL selection and rendered greeting/subject. No email was sent during this audit.",
    "currentEvidenceBoundary": "Installed behavior is verified from source and release identity; no new customer receipt or email-delivery test was performed."
  },
  "invoice-status": {
    "currentAsOf": "2026-10-27",
    "currentDisposition": "27 October release reconciliation: this remains open. Installed Reporting Hub filter/pagination repairs do not establish authoritative issued-invoice coverage for sample-level billable work. The Hub owner still records no verified coverage writer; manual Paid/Unpaid labels cannot replace it.",
    "detail": "Invoice status itself was previously recorded complete. On 23 October Mike confirmed the missing request is specifically an Uninvoiced button above the Reporting Hub TS grid that shows rows not yet invoiced. Do not rebuild invoice status or conflate this with photo sorting. 27 October release reconciliation: this remains open. Installed Reporting Hub filter/pagination repairs do not establish authoritative issued-invoice coverage for sample-level billable work. The Hub owner still records no verified coverage writer; manual Paid/Unpaid labels cannot replace it.",
    "nextStep": "Existing QuickBooks and Reporting Hub owners: establish authoritative issued-invoice coverage, then implement and prove the Uninvoiced filter.",
    "evidence": "27 October: the public Optiq /health/version endpoint reports API, web and Node runtime at 89167befd679365d5fb3702e3b92ccf38ac9d08a. GitHub ancestry confirms inclusion of the 26 October full-install version 950b90c0 and Reporting Hub repairs #6602/#6604. Existing source review and browser proof are retained; this work-list audit made no customer changes. Existing Hub owner records retain this unfinished obligation.",
    "currentEvidenceBoundary": "The deployment does not close this item; no invoice, payment, photo or customer record was changed."
  },
  "lab-photo-sort": {
    "currentAsOf": "2026-10-27",
    "currentDisposition": "27 October release reconciliation: this remains open. Installed Reporting Hub filter/pagination repairs do not establish authoritative lab-photo provenance. The existing photo origin/lineage work and its database proof remain outstanding.",
    "detail": "This is the specific image-column sorting request. Client-provided photos do not count. A missing lab photo is not proof that a sample has not arrived; lab-wide sample status tracking is a separate item. 27 October release reconciliation: this remains open. Installed Reporting Hub filter/pagination repairs do not establish authoritative lab-photo provenance. The existing photo origin/lineage work and its database proof remain outstanding.",
    "nextStep": "Existing Reporting Hub owner: complete photo-origin/lineage proof, then verify lab-photo sorting.",
    "evidence": "27 October: the public Optiq /health/version endpoint reports API, web and Node runtime at 89167befd679365d5fb3702e3b92ccf38ac9d08a. GitHub ancestry confirms inclusion of the 26 October full-install version 950b90c0 and Reporting Hub repairs #6602/#6604. Existing source review and browser proof are retained; this work-list audit made no customer changes. Existing Hub owner records retain this unfinished obligation.",
    "currentEvidenceBoundary": "The deployment does not close this item; no invoice, payment, photo or customer record was changed."
  }
})) {
  window.OPTIQ_REVIEW.updates[id] = {...window.OPTIQ_REVIEW.updates[id], ...update};
}

// 28 October gap analysis: current delivery/ownership, with earlier records retained.
window.OPTIQ_REVIEW.gapAnalysisDate = "2026-10-28";
for (const [id, update] of Object.entries({
  "invoice-status": {
    "currentOwner": "QuickBooks Production Readiness + Reporting Hub owner — invoice coverage dependency",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "Still open: installed Hub filter repairs do not establish issued-invoice coverage of sample-level billable work. Manual Paid/Unpaid labels are insufficient.",
    "detail": "Keep the existing invoice-status capability and add an Uninvoiced quick-filter button above the TS grid. Still open: installed Hub filter repairs do not establish issued-invoice coverage of sample-level billable work. Manual Paid/Unpaid labels are insufficient.",
    "nextStep": "Establish authoritative issued-invoice coverage, then implement and prove the Uninvoiced quick filter.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Still open: installed Hub filter repairs do not establish issued-invoice coverage of sample-level billable work. Manual Paid/Unpaid labels are insufficient.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "portal-price-visibility": {
    "currentOwner": "Shopping Cart — retained design owner; Optiq Manager owns implementation pickup",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "Checkout requirements are agreed; complete implementation and click-testing remain unverified. Stripe handles customer payments; QuickBooks handles accounting. Payment precedes order placement except for approved client billing terms.",
    "detail": "Let customers choose tests, see the full price, supply required sample information and pay through a familiar checkout. Checkout requirements are agreed; complete implementation and click-testing remain unverified. Stripe handles customer payments; QuickBooks handles accounting. Payment precedes order placement except for approved client billing terms.",
    "nextStep": "Finish new and returning customer checkout, required sample details and approved terms exceptions; use approved Optiq prices before real charges.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Checkout requirements are agreed; complete implementation and click-testing remain unverified. Stripe handles customer payments; QuickBooks handles accounting. Payment precedes order placement except for approved client billing terms.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "public-signup-approval": {
    "currentOwner": "Optiq Manager — accountable delivery owner; implementation pickup unconfirmed",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "Paid-purchaser and staff-invitation access direction is agreed; completed implementation and verification are not established.",
    "detail": "Keep public browsing and checkout available while restricting portal access to verified purchasers and invited clients. Paid-purchaser and staff-invitation access direction is agreed; completed implementation and verification are not established.",
    "nextStep": "Implement and test access, account recovery and correct company association for both paths.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Paid-purchaser and staff-invitation access direction is agreed; completed implementation and verification are not established.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "optiq-billing-rules": {
    "currentOwner": "Optiq billing lead — approved rates; QuickBooks/Cart owners — implementation",
    "currentAsOf": "2026-10-28",
    "status": "optiq",
    "currentDisposition": "Approved test, package, customer-specific and rush prices remain outstanding inputs. Pricing framework work exists; design can continue while lab inputs are gathered.",
    "detail": "Use approved client-specific test and package prices through ordering and invoicing. Approved test, package, customer-specific and rush prices remain outstanding inputs. Pricing framework work exists; design can continue while lab inputs are gathered.",
    "nextStep": "Optiq supplies approved rates and exceptions; existing owners configure and verify them without treating illustrative prices as policy.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Approved test, package, customer-specific and rush prices remain outstanding inputs. Pricing framework work exists; design can continue while lab inputs are gathered.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "quickbooks-status-sync": {
    "currentOwner": "QuickBooks Production Readiness — current delivery owner",
    "currentAsOf": "2026-10-28",
    "status": "working",
    "currentDisposition": "Staff invoicing and read-only invoice matching are merged on main (#6805/#6834). The canonical Optiq port #6837 remains draft/held for target browser/database proof and release gates. Docker testing recovery has been authorized; no live activation is established.",
    "detail": "Bring QuickBooks Online invoice and payment information into the matching Smpltrax order so staff do not update both systems manually. Staff invoicing and read-only invoice matching are merged on main (#6805/#6834). The canonical Optiq port #6837 remains draft/held for target browser/database proof and release gates. Docker testing recovery has been authorized; no live activation is established.",
    "nextStep": "Finish target runtime proof and exact-source review, then prepare the eligible Optiq release and approval package. Initial delivery reflects existing QuickBooks invoices with financial writes disabled.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Staff invoicing and read-only invoice matching are merged on main (#6805/#6834). The canonical Optiq port #6837 remains draft/held for target browser/database proof and release gates. Docker testing recovery has been authorized; no live activation is established.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "analysis-framework": {
    "currentOwner": "Optiq Manager + existing Data Analysis owner; direct-entry successor pickup unconfirmed",
    "currentAsOf": "2026-10-28",
    "status": "partial",
    "currentDisposition": "Data Analysis is installed and real Empower runs are importing automatically. Today's existing live-check owner reports about 3½–5½ minutes after acquisition for ten recent successful runs; the list has no timed refresh. Complete direct entry, permissions, review and released-COA acceptance remain open.",
    "detail": "Data Analysis and its reviewed purity/identity workspace updates are installed. Finish the wider lab-defined result-entry and analyst-to-COA workflow. Data Analysis is installed and real Empower runs are importing automatically. Today's existing live-check owner reports about 3½–5½ minutes after acquisition for ten recent successful runs; the list has no timed refresh. Complete direct entry, permissions, review and released-COA acceptance remain open.",
    "nextStep": "Close the retained result-entry handoff and prove direct entry → save/reopen → independent review → released COA. Resolve list freshness and import exceptions separately.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Data Analysis is installed and real Empower runs are importing automatically. Today's existing live-check owner reports about 3½–5½ minutes after acquisition for ten recent successful runs; the list has no timed refresh. Complete direct entry, permissions, review and released-COA acceptance remain open.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "inventory-follow-ups": {
    "currentOwner": "Optiq Purchasing and Inventory Review… — cleared plan; Optiq Manager owns implementation pickup",
    "currentAsOf": "2026-10-28",
    "status": "check",
    "currentDisposition": "Existing modules and an independently cleared repair plan are available. Current records do not establish completed implementation or whole-workflow acceptance.",
    "detail": "Red-team the existing purchasing and inventory workflows, not just basic item editing. Existing modules and an independently cleared repair plan are available. Current records do not establish completed implementation or whole-workflow acceptance.",
    "nextStep": "Implement remaining findings and verify purchasing → receiving → stock → usage → reorder, including supplier editing and document intake.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Existing modules and an independently cleared repair plan are available. Current records do not establish completed implementation or whole-workflow acceptance.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "sop-documents": {
    "currentOwner": "Optiq Quality Workflows Review Plan — cleared plan; Optiq Manager owns implementation pickup",
    "currentAsOf": "2026-10-28",
    "status": "check",
    "currentDisposition": "The revised document/training/NCR/CAPA plan is independently cleared. Staff acknowledgement screens, safe review/closure behavior and complete workflow qualification remain outstanding.",
    "detail": "Test and improve the existing document-control, SOP, nonconformance and corrective-action workflows. The revised document/training/NCR/CAPA plan is independently cleared. Staff acknowledgement screens, safe review/closure behavior and complete workflow qualification remain outstanding.",
    "nextStep": "Use the cleared plan to finish repairs and prove approval, training, issue investigation, corrective action and independent closure together.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. The revised document/training/NCR/CAPA plan is independently cleared. Staff acknowledgement screens, safe review/closure behavior and complete workflow qualification remain outstanding.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "spectral-reference-library": {
    "currentOwner": "Existing spectral-library/Data Analysis owners + AI100 deployment owner; lab qualifies references",
    "currentAsOf": "2026-10-28",
    "status": "partial",
    "currentDisposition": "All 16 draft reference entries were seeded and 33 cached no-library channels refreshed. Historical matching is still recorded as incomplete. Library visibility/retirement and ion-display corrections are in the current release pipeline. Loaded references do not establish lab qualification.",
    "detail": "Check whether already-collected instrument runs contain the standards needed by the existing analysis library. All 16 draft reference entries were seeded and 33 cached no-library channels refreshed. Historical matching is still recorded as incomplete. Library visibility/retirement and ion-display corrections are in the current release pipeline. Loaded references do not establish lab qualification.",
    "nextStep": "Finish historical coverage and genuine evidence gaps; integrate and qualify the library lifecycle/display fixes, and retain lab approval of scientific references.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. All 16 draft reference entries were seeded and 33 cached no-library channels refreshed. Historical matching is still recorded as incomplete. Library visibility/retirement and ion-display corrections are in the current release pipeline. Loaded references do not establish lab qualification.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "hubspot-onboarding": {
    "currentOwner": "Optiq Manager — accountable delivery owner; implementation pickup unconfirmed",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "Synchronization is confirmed scope; a completed current implementation is not established.",
    "detail": "Avoid maintaining the same client information separately in HubSpot and Smpltrax. Synchronization is confirmed scope; a completed current implementation is not established.",
    "nextStep": "Inspect reusable HubSpot work, confirm record ownership and conflict handling, and prove client synchronization.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Synchronization is confirmed scope; a completed current implementation is not established.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "receipt-emails": {
    "currentOwner": "Optiq Company-Name Receipt Release — existing receipt owner",
    "currentAsOf": "2026-10-28",
    "status": "partial",
    "currentDisposition": "Company-name receipt code is installed. Actual delivery evidence still needs reconciliation; the older standalone deployment is obsolete.",
    "detail": "The installed receipt email uses the client company name in its subject and greeting. Verify the delivery behavior through the existing owner. Company-name receipt code is installed. Actual delivery evidence still needs reconciliation; the older standalone deployment is obsolete.",
    "nextStep": "Reconcile existing delivery evidence against the installed version and finish remaining authorized verification.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Company-name receipt code is installed. Actual delivery evidence still needs reconciliation; the older standalone deployment is obsolete.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "coa-status-language": {
    "currentOwner": "Optiq Manager — COA owner verification pickup unconfirmed",
    "currentAsOf": "2026-10-28",
    "status": "check",
    "currentDisposition": "Identity mismatch indicators were previously reported addressed; representative PDF and digital-card proof is still required before closure.",
    "detail": "Verify that a result differing from the submitted claim does not appear as a successful green identity match. Identity mismatch indicators were previously reported addressed; representative PDF and digital-card proof is still required before closure.",
    "nextStep": "Locate the installed fix and verify mismatched identity on both report surfaces, preserving scientific findings and issued report history.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Identity mismatch indicators were previously reported addressed; representative PDF and digital-card proof is still required before closure.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "reporting-hub-pagination": {
    "currentOwner": "Reporting Hub repair owner — delivered; Optiq Manager retains follow-up",
    "currentAsOf": "2026-10-28",
    "status": "complete",
    "currentDisposition": "Page navigation and page-size changes are installed. The pagination repair preserves the selected page across aggregate rerenders.",
    "detail": "Make the page buttons change pages and page-size changes work reliably. Page navigation and page-size changes are installed. The pagination repair preserves the selected page across aggregate rerenders.",
    "nextStep": "Delivered. Retain existing browser/regression proof; track any new defect separately.",
    "evidence": "27 October installed-release reconciliation: #6602/#6604 included; existing source and browser proof retained. 28 October gap analysis confirms the recorded delivered scope without claiming a new live retest.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "ordered-test-search": {
    "currentOwner": "Reporting Hub repair owner — delivered; Optiq Manager retains follow-up",
    "currentAsOf": "2026-10-28",
    "status": "complete",
    "currentDisposition": "Tests Ordered now matches the actual ordered analysis codes, including Fentanyl, rather than result values. The repair is installed.",
    "detail": "Find samples with a particular test ordered, independently of their test results. Tests Ordered now matches the actual ordered analysis codes, including Fentanyl, rather than result values. The repair is installed.",
    "nextStep": "Delivered. Retain existing browser/regression proof; track any new defect separately.",
    "evidence": "27 October installed-release reconciliation: #6602/#6604 included; existing source and browser proof retained. 28 October gap analysis confirms the recorded delivered scope without claiming a new live retest.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "stacked-filter-views": {
    "currentOwner": "Reporting Hub repair owner — delivered; Optiq Manager retains follow-up",
    "currentAsOf": "2026-10-28",
    "status": "complete",
    "currentDisposition": "Saved views keep their own AND/OR expressions and combine with quick-filter buttons. Each condition can be removed independently, and remembered selections survive reload. The repair is installed.",
    "detail": "Let saved filter views and quick-filter buttons combine their conditions. Saved views keep their own AND/OR expressions and combine with quick-filter buttons. Each condition can be removed independently, and remembered selections survive reload. The repair is installed.",
    "nextStep": "Delivered. Retain existing browser/regression proof; track any new defect separately.",
    "evidence": "27 October installed-release reconciliation: #6602/#6604 included; existing source and browser proof retained. 28 October gap analysis confirms the recorded delivered scope without claiming a new live retest.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "lab-specific-filter-views": {
    "currentOwner": "Reporting Hub repair owner — delivered; Optiq Manager retains follow-up",
    "currentAsOf": "2026-10-28",
    "status": "complete",
    "currentDisposition": "Optiq no longer offers Compliance, Research or Close in its preset buttons, dropdown or editor. Other lab profiles retain their own presets. The repair is installed.",
    "detail": "Use lab-appropriate filter views and quick-filter buttons without affecting other labs. Optiq no longer offers Compliance, Research or Close in its preset buttons, dropdown or editor. Other lab profiles retain their own presets. The repair is installed.",
    "nextStep": "Delivered. Retain existing browser/regression proof; track any new defect separately.",
    "evidence": "27 October installed-release reconciliation: #6602/#6604 included; existing source and browser proof retained. 28 October gap analysis confirms the recorded delivered scope without claiming a new live retest.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "custom-filter-view-audit": {
    "currentOwner": "Reporting Hub repair owner — delivered; Optiq Manager retains follow-up",
    "currentAsOf": "2026-10-28",
    "status": "complete",
    "currentDisposition": "The reviewed filter repairs are installed: valid views keep their intended rows and ordering; incompatible or malformed saved filters visibly block results until corrected. Date and client-value normalization fixes are included. Broader future usability improvements remain separate.",
    "detail": "Make existing custom filter views match the columns and their supported operations. The reviewed filter repairs are installed: valid views keep their intended rows and ordering; incompatible or malformed saved filters visibly block results until corrected. Date and client-value normalization fixes are included. Broader future usability improvements remain separate.",
    "nextStep": "Delivered. Retain existing browser/regression proof; track any new defect separately.",
    "evidence": "27 October installed-release reconciliation: #6602/#6604 included; existing source and browser proof retained. 28 October gap analysis confirms the recorded delivered scope without claiming a new live retest.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "lab-photo-sort": {
    "currentOwner": "Optiq Reporting Hub Repair Plan — existing Hub owner; Optiq Manager coordinates remaining pickup",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "Still open: installed filtering repairs do not establish authoritative photo provenance. Client photos must not count as lab photos; missing photos do not prove non-receipt.",
    "detail": "Sort rows by whether a lab-uploaded photo is present or absent. Still open: installed filtering repairs do not establish authoritative photo provenance. Client photos must not count as lab photos; missing photos do not prove non-receipt.",
    "nextStep": "Complete photo-origin/lineage database proof, then verify lab-photo presence sorting.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Still open: installed filtering repairs do not establish authoritative photo provenance. Client photos must not count as lab photos; missing photos do not prove non-receipt.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "sample-status-audit": {
    "currentOwner": "Optiq Sample Status Tracking — cleared plan; Optiq Manager owns implementation pickup",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "The revised lifecycle repair plan is independently cleared; implementation/runtime acceptance is not established. Receipt cycles, holds and analytical restoration dependencies remain explicit.",
    "detail": "Make sample status meaningful, traceable and visible throughout the lab workflow. The revised lifecycle repair plan is independently cleared; implementation/runtime acceptance is not established. Receipt cycles, holds and analytical restoration dependencies remain explicit.",
    "nextStep": "Implement and prove receipt/intake distinctions, preserved holds, audited transitions and safe restoration; coordinate receipt and analysis owners.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. The revised lifecycle repair plan is independently cleared; implementation/runtime acceptance is not established. Receipt cycles, holds and analytical restoration dependencies remain explicit.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "trusted-white-label-approval": {
    "currentOwner": "Optiq Trusted-Client White-Label Approval… — cleared plan; Optiq Manager owns implementation pickup",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "The trusted-client plan is independently cleared. Permission/revocation and durable billing activity records remain implementation work; billing-policy-dependent activation requires confirmed lab rules.",
    "detail": "Allow selected trusted clients to generate permitted white labels without manual approval while retaining billing visibility. The trusted-client plan is independently cleared. Permission/revocation and durable billing activity records remain implementation work; billing-policy-dependent activation requires confirmed lab rules.",
    "nextStep": "Build and verify trusted approval, revocation and billing activity records; confirm charge triggers, rates, exemptions and replacement rules before charge-dependent activation.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. The trusted-client plan is independently cleared. Permission/revocation and durable billing activity records remain implementation work; billing-policy-dependent activation requires confirmed lab rules.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "internal-document-checks": {
    "currentOwner": "Optiq Manager — accountable delivery owner; implementation pickup unconfirmed",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "Automatic COA, manifest and chain-of-custody reconciliation is confirmed scope; completed implementation is not established.",
    "detail": "Run consistency checks inside Smpltrax so staff do not have to download and re-upload documents for manual checking. Automatic COA, manifest and chain-of-custody reconciliation is confirmed scope; completed implementation is not established.",
    "nextStep": "Inventory existing comparisons, identify missing checks and verify that discrepancies surface automatically for review.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Automatic COA, manifest and chain-of-custody reconciliation is confirmed scope; completed implementation is not established.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "result-entry-permission-profiles": {
    "currentOwner": "Optiq Manager + existing Data Analysis owner; direct-entry successor pickup unconfirmed",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "Related recovery planning and batch-edit permission work exist. Complete profile-specific visibility, editing and drag-fill proof remains outstanding.",
    "detail": "Show staff the appropriate result grids and control editing behaviors by permission profile. Related recovery planning and batch-edit permission work exist. Complete profile-specific visibility, editing and drag-fill proof remains outstanding.",
    "nextStep": "Confirm result-entry successor ownership and prove allowed/denied views, edits, bulk updates and drag-fill behavior.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Related recovery planning and batch-edit permission work exist. Complete profile-specific visibility, editing and drag-fill proof remains outstanding.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "customer-results-api": {
    "currentOwner": "Optiq Customer Results API and Certificate… — cleared plan; Optiq Manager owns implementation pickup",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "Revision 2 of the integration plan is independently cleared. Implementation and runtime qualification are not established.",
    "detail": "Provide customer-authorized access to released COA PDFs, structured results and Verify Results cards. Revision 2 of the integration plan is independently cleared. Implementation and runtime qualification are not established.",
    "nextStep": "Implement and verify scoped credentials, revocation, authorized PDFs/results, embeds and release/revision webhooks, including cross-client isolation.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Revision 2 of the integration plan is independently cleared. Implementation and runtime qualification are not established.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "boarding-pass-parity": {
    "currentOwner": "Optiq Manager — accountable delivery owner; implementation pickup unconfirmed",
    "currentAsOf": "2026-10-28",
    "status": "check",
    "currentDisposition": "Wallet-card work remains a recovery/research item; current signing readiness and usable delivery are unverified.",
    "detail": "Build on the earlier wallet-card investigation and confirm the remaining delivery requirements. Wallet-card work remains a recovery/research item; current signing readiness and usable delivery are unverified.",
    "nextStep": "Locate retained implementation, verify developer/signing setup and establish the remaining build and acceptance checks.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Wallet-card work remains a recovery/research item; current signing readiness and usable delivery are unverified.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "abandoned-order-reminders": {
    "currentOwner": "Optiq Manager — accountable delivery owner; implementation pickup unconfirmed",
    "currentAsOf": "2026-10-28",
    "status": "queued",
    "currentDisposition": "Separate unfinished-checkout and paid-awaiting-samples reminders are confirmed scope. Trigger timing, final messages and suppression proof remain outstanding.",
    "detail": "Help customers resume unfinished orders and send samples for paid orders that are still waiting for them. Separate unfinished-checkout and paid-awaiting-samples reminders are confirmed scope. Trigger timing, final messages and suppression proof remain outstanding.",
    "nextStep": "Define cadence, resume/instruction links and completion/opt-out suppression; test before outbound activation.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Separate unfinished-checkout and paid-awaiting-samples reminders are confirmed scope. Trigger timing, final messages and suppression proof remain outstanding.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "conformity": {
    "currentOwner": "Optiq Manager + deployment owner + Optiq lab admin",
    "currentAsOf": "2026-10-28",
    "status": "partial",
    "currentDisposition": "Conformity code is installed. The 27 October live record has draft service configuration and no active catalogue rows. Approved configuration, client availability and the full parent/vial-to-COA journey remain outstanding. Existing-sample follow-up is held for its required click-test.",
    "detail": "Keep one client-facing parent sample and track each conformity vial and its Purity, Identity or Net Content results inside the parent’s Sample Details. Conformity code is installed. The 27 October live record has draft service configuration and no active catalogue rows. Approved configuration, client availability and the full parent/vial-to-COA journey remain outstanding. Existing-sample follow-up is held for its required click-test.",
    "nextStep": "Complete approved analysis/service setup and activation evidence, then prove ordered vials → receiving → results → review → released COA.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Conformity code is installed. The 27 October live record has draft service configuration and no active catalogue rows. Approved configuration, client availability and the full parent/vial-to-COA journey remain outstanding. Existing-sample follow-up is held for its required click-test.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "inspection-rules": {
    "currentOwner": "Optiq Manager — receiving/COA owner pickup unconfirmed",
    "currentAsOf": "2026-10-28",
    "status": "partial",
    "currentDisposition": "Inspection storage and COA presentation are installed. Complete receiving/Hub controls, remaining vial-check wording and saved-observation-to-COA proof remain open.",
    "detail": "Save vial and cap integrity and colors, give inspection its own Reporting Hub column, and show it on the COA’s first page. Inspection storage and COA presentation are installed. Complete receiving/Hub controls, remaining vial-check wording and saved-observation-to-COA proof remain open.",
    "nextStep": "Confirm installed controls, agree remaining wording with the lab and verify the complete receiving-to-report workflow.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Inspection storage and COA presentation are installed. Complete receiving/Hub controls, remaining vial-check wording and saved-observation-to-COA proof remain open.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "coa-oct14-mockups": {
    "currentOwner": "Optiq Manager + existing COA owner",
    "currentAsOf": "2026-10-28",
    "status": "partial",
    "currentDisposition": "COA 2.0 is installed; remaining layout qualification and uncovered cases remain open. Current wavelength/chart fixes require their own evidence and release handling.",
    "detail": "COA 2.0 is installed at Optiq; finish qualification of the remaining layout cases against the agreed design. COA 2.0 is installed; remaining layout qualification and uncovered cases remain open. Current wavelength/chart fixes require their own evidence and release handling.",
    "nextStep": "Reconcile retained layout proof, finish uncovered cases and qualify the selected chart fixes without regenerating existing issued certificates.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. COA 2.0 is installed; remaining layout qualification and uncovered cases remain open. Current wavelength/chart fixes require their own evidence and release handling.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "stable-released-coa-links": {
    "currentOwner": "Existing white-label/COA owner + AI100 deployment owner",
    "currentAsOf": "2026-10-28",
    "status": "partial",
    "currentDisposition": "Ordinary permanent-link code is installed. White-label and recovery acceptance remains incomplete; printed-number lookup activation is tracked separately.",
    "detail": "Keep normal and customer-branded certificate links pointing to the sample’s latest released version. Ordinary permanent-link code is installed. White-label and recovery acceptance remains incomplete; printed-number lookup activation is tracked separately.",
    "nextStep": "Verify the combined white-label/permanent-link/recovery cases against the installed version.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Ordinary permanent-link code is installed. White-label and recovery acceptance remains incomplete; printed-number lookup activation is tracked separately.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "client-bulk-white-label": {
    "currentOwner": "Existing white-label owner + AI100 deployment owner",
    "currentAsOf": "2026-10-28",
    "status": "partial",
    "currentDisposition": "Bulk request/review work and portal white-label ZIP support are installed. ZIP fallback disclosure was installed on 28 October. The full private-draft, authorized-photo and correct-PDF journey remains unverified.",
    "detail": "Let clients request several branded COAs and let approved staff edit the private draft, printed client details and selected photo. Bulk request/review work and portal white-label ZIP support are installed. ZIP fallback disclosure was installed on 28 October. The full private-draft, authorized-photo and correct-PDF journey remains unverified.",
    "nextStep": "Finish the retained draft → edit → save/reopen → authorized photo → correct PDF acceptance cases.",
    "evidence": "28 October gap analysis: reconciled the confirmed 23 October review, the 27 October work-list release audit, current PRs and existing owner-chat records. Bulk request/review work and portal white-label ZIP support are installed. ZIP fallback disclosure was installed on 28 October. The full private-draft, authorized-photo and correct-PDF journey remains unverified.",
    "currentEvidenceBoundary": "Dated delivery and owner records; this tracker update is not a fresh end-to-end live test or a new implementation assignment."
  },
  "verify-results-font": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "fentanyl-results": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "coa-summary-layout": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "frozen-sort": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "receiving-tables": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "lot-number": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "printed-labels": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "client-scrolling": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "grid-widths": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "inventory-release": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "iu-units": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "preview-performance": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "partner-inventory": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "manufacturer-profiles": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "blend-potency": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "photo-reliability": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "scan-intake": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "certified-imports": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "retained-intent": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "intake-identity": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "purchasing-core": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "reporting-method-drafts": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "staff-scan-access": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "multi-lab-login": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "shared-feature-tracker": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "missing-order-recovery": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "net-content-undo": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "bulk-coa-amendments": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "pda-peak-default": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "native-empower-charts": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "empower-native-collection": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "purchasing-status-words": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "purchase-history-forecast": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "water-sample-type": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "order-submit-retry": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "white-label-attestation": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "white-label-photo-vials": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "white-label-missing-vials": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "white-label-required-lot": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "client-create-invite": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "panel-presets": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "live-vial-count": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "unresolved-client-orders": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "net-content-per-vial": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "partner-sample-routing": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "intake-attention-notices": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "shared-lims-priorities": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "customer-qr-labels": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "coa-tamper-evidence": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "tablet-sample-type": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "coa-spectrum-interpretation": {
    "currentOwner": "Optiq Manager — retained delivery record and follow-up",
    "currentOwnerAsOf": "2026-10-28"
  },
  "submission-matrix-save-parity": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "stale-tab-refresh": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "coa-automatic-ion-interpretation": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "sample-details-documents": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "inventory-receiving-defaults": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "chemical-components-grid-stability": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "sample-order-client-messaging": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "sample-storage-multi-lab": {
    "currentOwner": "Optiq Manager — delivery routing; named implementation pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  },
  "mammoth-portal-coa": {
    "currentOwner": "Mammoth operations + Smpltrax onboarding; named pickup not recorded",
    "currentOwnerAsOf": "2026-10-28"
  }
})) {
 window.OPTIQ_REVIEW.updates[id] = {...window.OPTIQ_REVIEW.updates[id], ...update};
}
window.OPTIQ_REVIEW.additions.push(...[
  {
    "id": "public-coa-access-hardening",
    "area": "Reports & analyses",
    "title": "Harden public certificate access while keeping printed QR links",
    "status": "working",
    "stage": 1,
    "description": "Keep authorized public certificate verification usable while preventing unintended report discovery.",
    "detail": "The 28 October release checklist records an urgent access-hardening repair. Existing printed QR links must keep working. Implementation/review and the exact release are still pending.",
    "currentDisposition": "Urgent repair in the current release pipeline; not recorded as deployed.",
    "nextStep": "Existing COA access owner finishes the repair and its positive/negative proof; deployment owner includes the eligible reviewed result in the exact approved release.",
    "currentOwner": "Existing Claude Optiq COA access owner + AI100 deployment owner",
    "currentAsOf": "2026-10-28",
    "evidence": "28 October shared deployment checklist: public-COA access hardening is current work; preserve existing printed links.",
    "currentEvidenceBoundary": "Public-facing scope summary only; no new live security test or deployment claim."
  },
  {
    "id": "white-label-printed-lookup",
    "area": "Reports & analyses",
    "title": "Verify white-label certificates by their printed number",
    "status": "partial",
    "stage": 1,
    "description": "Return the correct issued white-label certificate from its printed identifier.",
    "detail": "Code #6779 and the registry migration are installed. Registration reconciliation and ordered lookup activation remain unfinished; installation alone does not make the feature available.",
    "currentDisposition": "Installed code; activation and full acceptance remain open.",
    "nextStep": "Reconcile issued-certificate registration, handle evidence conflicts, activate in order and verify correct white-label lookup plus unknown-number rejection.",
    "currentOwner": "Existing white-label owner + AI100 deployment owner",
    "currentAsOf": "2026-10-28",
    "evidence": "28 October shared deployment checklist and issue #6777 retain activation work after #6779 installation.",
    "currentEvidenceBoundary": "No activation or live customer action is authorized by this tracker update."
  }
]);

for (const id of ["invoice-status","portal-price-visibility","public-signup-approval","optiq-billing-rules","quickbooks-status-sync","analysis-framework","inventory-follow-ups","sop-documents","spectral-reference-library","hubspot-onboarding","receipt-emails","coa-status-language","reporting-hub-pagination","ordered-test-search","stacked-filter-views","lab-specific-filter-views","custom-filter-view-audit","lab-photo-sort","sample-status-audit","trusted-white-label-approval","internal-document-checks","result-entry-permission-profiles","customer-results-api","boarding-pass-parity","abandoned-order-reminders","conformity","inspection-rules","coa-oct14-mockups","stable-released-coa-links","client-bulk-white-label"]) { window.OPTIQ_REVIEW.updates[id].evidenceBasis = "28 October delivery/owner reconciliation"; }

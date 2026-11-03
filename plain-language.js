'use strict';
// Reader-facing wording only. Status, ownership, dates and source history stay in the catalog.
// Columns: record ID | short title | what it means | what happens next (optional for closed work).
window.OPTIQ_PLAIN_LANGUAGE = Object.fromEntries(`
chromatogram-source-selection|Choose separate charts for the certificate and purity calculation|Let staff choose which instrument chart appears on the certificate and which is used to calculate purity.|Our team will check the current choices and plan any missing controls.
conformity|Finish the existing Conformity workflow|Claude is integrating the vial screens and results. Preserve client-entered vial names and the existing approved reporting design.|Finish naming, settings, integration and order-to-report checks; confirm release ownership and resolve existing holds before activation.
inspection-rules|Preview custom vial colors on the certificate|Choose cap, vial and contents colors using standard swatches or a custom color wheel, with a preview of the actual certificate illustration.|Keep the existing inspection controls and receiving repair; assign the color-picker work and prove saved colors on PDF and online certificates.
verify-results-font|Check a certificate online|Look up an issued test certificate and compare it with the lab’s saved record.|
spectral-reference-library|Create and reuse library standards on demand|Let one successful run seed a standard and make it usable immediately after explicit creation at Optiq, with approval requirements configurable by lab.|Locate Scott’s standard runs and finish the create-and-use path, preserving the source data and confirming preparation and method inputs.
fentanyl-results|Restore the missing Fentanyl summary box|Fentanyl results are reported, but the six-box selection rule leaves its approved summary box off some multi-test certificates.|Assign and fix the selection priority, check the full multi-test PDF and online certificate, and separately decide whether issued certificates need amendment.
coa-summary-layout|Clearer test certificates and charts|Show a summary first, followed by supporting test results and charts in the agreed order.|
receipt-emails|Receipt emails name the client or company|The name is already included in both the subject and greeting at Optiq.|Delivered. Keep this in later updates; investigate a specific email problem if reported.
invoice-status|Invoice statuses and the Uninvoiced filter|Invoice statuses are visible in live Orders. The separate Uninvoiced button was not visible in the views checked.|Confirm the intended shortcut and which work each invoice covers; keep existing status support.
frozen-sort|Keep rows still while editing|Rows stay in place while staff edit and save. Staff can sort again when ready.|
receiving-tables|Updated tables for receiving samples|Use clearer order and sample tables when recording what arrived at the lab.|
lot-number|Show the lot or batch number|Display the number automatically in the sample receiving table.|
printed-labels|Choose what appears on sample labels|Choose test symbols, three-letter test names, or both when printing labels.|
client-scrolling|Scroll smoothly through clients|Move through the client list more easily.|
grid-widths|Make table columns easier to read|Fit columns to their contents or keep a width chosen by staff.|Check the remaining tables and confirm that chosen widths stay saved.
inventory-release|Manage stock and reference materials|Record stock, deliveries and certified values for reference materials in the Inventory screens.|
iu-units|Choose units for the amount in a sample|Report Net Content, the amount of material in a sample, in the units selected by the lab.|
preview-performance|Faster photo and chart previews|Load smaller previews in the Reporting Hub results table.|
sop-documents|Manage procedures and quality issues|Keep approved procedures, staff training, quality problems and corrective actions together.|Check the existing work and finish the missing approval, training and problem-resolution steps.
partner-inventory|Share stock information with partner labs|Share agreed stock details while keeping each lab’s stock separate, and track purchases and balances.|Check who can see each record and confirm how partner charges and monthly balances should work.
manufacturer-profiles|Manage customer brands and parent accounts|Keep reusable brand and manufacturer details and link several brands to one customer account.|On hold for later. This work needs to be reopened before it continues.
client-bulk-white-label|Request several customer-branded certificates|Let customers request several certificates, with private drafts and photos that approved staff can edit.|Check the full journey from editing and reopening a draft to producing the correct certificate and download.
blend-potency|Enter a separate quantity for each peptide|Start the entry table with declared peptide names, allow changes when the sample differs, and keep the current Confirmed identity workflow.|Connect the existing editor to the cell, configure the approved method, send Laz the mockup, and prove saved values and vertical certificate entries.
photo-reliability|Clear photos and recoverable hidden orders|View original photos clearly and hide or restore an order without deleting its samples or results.|
scan-intake|Scan and check arriving samples|Scan an order, correct its sample list and confirm what arrived.|Finish checking the scan, review and receiving steps together.
certified-imports|Import certified reference-material values|Export saved lot values and read values from a reference certificate for staff to confirm.|Finish checking the import and export, including staff confirmation before imported values are saved.
retained-intent|Recover older customer requests|Keep the original details of archived requests so they can be found again.|
intake-identity|Show peptide names clearly when receiving samples|Make it clear which peptide or mixture the customer submitted.|
analysis-framework|Connect testing all the way to the certificate|The Data Analysis screens are installed; the full result-entry, configured review and reporting process still needs work.|Check methods, staff access, saved results, the lab-configured review steps and final certificates together before release.
purchasing-core|Track purchase orders and buying history|Import earlier purchases and see which orders need attention.|
reporting-method-drafts|Prepare draft test methods|Use existing report fields to set up a draft method in Analysis Settings.|
staff-scan-access|Staff scanning and protected editing|Let signed-in staff search and scan labels while protecting saved records and photos.|
multi-lab-login|Use one login across permitted labs|Let staff switch between the labs they are allowed to use.|Finish lab switching and check that staff cannot access another lab’s restricted information.
shared-feature-tracker|One shared progress list|Keep requests, progress and questions in one place for the lab.|
missing-order-recovery|Find orders with many photos|Make sure an order remains easy to find even when it has many photos.|
net-content-undo|Edit sample amounts and undo mistakes|Copy amounts and units between rows, with Undo restoring both correctly after saving.|
bulk-coa-amendments|Correct several certificates together|Existing bulk certificate generation is installed. Remaining checks concern the next combined software update.|Reuse the existing feature and check only the cases affected by the next update.
pda-peak-default|Start chart peak selection in the right place|Start from the light-detector chart while keeping the related mass-spectrum data available.|
native-empower-charts|Show charts from original Empower files|Display charts when the original instrument files have been retained.|
empower-native-collection|Resolve all instrument runs from the existing queue|Include unmatched and non-sample runs. Let analysts organize them and review AI recommendations. New records start only with an explicit Create from this run action.|Adapt the existing collector and queue, connect the intake and resolution controls, and prove visibility, safe retries, correct links and source history.
inventory-follow-ups|Check purchasing through to stock use|Make sure ordering, receiving, using stock and reordering work together.|Check the full process and resolve the remaining supplier and document issues.
purchasing-status-words|Use familiar purchase-order status words|Show the lab’s own terms on purchase lines and in their history.|
purchase-history-forecast|Suggest when to reorder supplies|Use purchase history to show when regularly bought items may be due again.|
water-sample-type|Identify water samples and required volumes|Offer Water as a sample type and show the minimum volume needed for the selected tests.|
order-submit-retry|Recognise an order already submitted|After a retry or reload, show an order that was already placed instead of creating another.|Check already-submitted orders, unsent orders and connection failures without creating duplicates.
white-label-attestation|Save agreement to customer-branded certificates|Keep the customer’s agreement to the approved terms.|On hold for later.
white-label-photo-vials|Link a photography vial to its brand|Keep each brand’s photography vial and photo linked to the intended certificate.|On hold for later. Private editing of certificate photos is tracked separately.
white-label-missing-vials|Rejected idea: stop work for a missing photo vial|The proposal to stop work automatically when a photography vial is missing was ruled out.|No work planned. Keep this rule out of the active workflow.
white-label-required-lot|Rejected idea: require a missing lot number|Use a lot or batch number when supplied; do not require information the customer does not have.|No work planned. Keep the agreed optional-number rule.
client-create-invite|Create a client and send an invitation|Reuse contact details and make invitation status and resending easy to find.|
public-signup-approval|Give customers access after payment or invitation|Allow public browsing and checkout, with account access for verified purchasers and invited clients.|Check new and returning customers, failed payments and saved drafts before approval to turn this on.
portal-price-visibility|Website, ordering and payment in one journey|Show public list prices to visitors and account prices to signed-in customers. Release the website, cart, saved-product ordering and payment connections together.|Existing Claude owners finish the combined sandbox journey, confirm commercial inputs with Optiq, and prepare the coordinated release and lab walkthrough.
panel-presets|Offer Standard and Extended test packages|Show agreed test packages while still allowing individual tests.|On hold for later; only package rules needed for current billing work will be considered now.
live-vial-count|Show how many vials are needed|Update vial counts as customers choose tests and extra services.|Finish checking the counts against the selected tests and package rules.
unresolved-client-orders|Find orders needing a client match|Show orders that still need to be linked to the correct client.|
net-content-per-vial|Clarify the amount reported per vial|Confirm the agreed meaning and wording of Net Content per vial.|On hold for later. No change to reporting is currently approved.
coa-status-language|Show identity mismatches clearly|Make sure a result that differs from the customer’s claim does not look like a successful match.|Check the existing indicators with matching and mismatching results.
partner-sample-routing|Track samples sent to another lab|Track Optiq’s work with partner labs, including ExcelBIS, from sample handover to returned results and charges.|Check the complete handover, return of results and charging process.
intake-attention-notices|Ask clients about unclear or unlabelled samples|Send a saved request with photos and keep the client’s reply with the sample.|Check the staff request, client reply and final resolution together.
shared-lims-priorities|Save shared priorities in the lab system|Let authorised lab staff view the work list and save priority changes.|Confirm that staff can save and reopen changes and that access is correctly limited.
hubspot-onboarding|Keep client details in step with HubSpot|Avoid entering the same client information twice.|Check the existing connection and decide which record takes priority when the two systems disagree.
customer-qr-labels|Explore customer vial labels with QR codes|Consider labels that link to the certificate or its verification page.|On hold for later.
coa-tamper-evidence|Explore stronger checks of issued certificates|Consider ways to confirm that a certificate matches its original saved record.|On hold for later. Any future design must still allow legitimate corrections.
tablet-sample-type|Choose Tablet separately from Capsule|Use a distinct Tablet option when submitting samples.|
coa-spectrum-interpretation|Save notes and labels on spectrum charts|Keep the entered molecular mass and interpretation when moving between screens or reopening a certificate.|
submission-matrix-save-parity|Keep test choices in saved order drafts|Restore selected tests and sample choices when customers reopen a draft.|Check saving and reopening complete orders, including the newer draft-saving improvements.
stale-tab-refresh|Refresh a browser tab using an older version|Offer a clear refresh when an open tab is behind the latest installed version.|
stable-released-coa-links|Keep certificate links up to date|Open the latest issued version from normal and customer-branded certificate links.|Check the remaining link changes before including them in an approved release.
coa-automatic-ion-interpretation|Suggest spectrum matches for staff to review|Use the entered molecular mass to suggest matching signals on a certificate’s spectrum chart.|Finish checking the suggestions and saved results; staff review remains required.
quickbooks-status-sync|Show invoice and payment updates from QuickBooks|Keep invoice and payment information up to date. Laz has said this is less urgent.|Our team will finish the agreed updates alongside the website and checkout work.
optiq-billing-rules|Confirm the lab’s prices and billing rules|Use the lab’s public prices and each customer’s agreed prices.|Optiq confirms prices, packages, discounts and when payment is due. Our team will apply them and check the totals.
coa-oct14-mockups|Finish checking the new certificate layout|The new layout is installed; some test and chart combinations still need checking.|Check the remaining examples against the agreed design.
sample-details-documents|Open the right paperwork from Sample Details|Attachments are installed. Existing checks cover original slips, marked-up paperwork, signed agreements and access.|Reuse passed checks and verify affected document paths in the next complete update and recovery plan.
inventory-receiving-defaults|Easier receiving of purchased supplies|Start with the usual units, storage locations and quantities, with changes allowed for partial deliveries.|
chemical-components-grid-stability|Keep the chemical-components table steady|Make the table smoother while staff add or edit components.|
sample-order-client-messaging|Keep client conversations with the sample or order|Save messages and replies where staff can find them later.|Check the record links and agree who receives and responds to notifications before sending is enabled.
sample-storage-multi-lab|Find stored samples and individual vials|Help staff locate retained material for retesting across labs.|Compare the current storage records and agree the details needed to find a vial reliably.
reporting-hub-pagination|Move reliably between results-table pages|Make page buttons and page-size changes work consistently.|
lab-photo-sort|Find samples with or without a lab photo|Sort the photo column by whether the lab has uploaded a photo.|Confirm how lab photos are distinguished from customer photos, then build and check the sort option.
ordered-test-search|Find samples by the tests ordered|Search for a selected test even before a result has been entered.|
sample-status-audit|Make sample status clear and traceable|Show where each sample is in the lab process and keep a history of changes.|Finish checking receipt, holds and restoration, with a record of each change.
stacked-filter-views|Combine saved filters and quick buttons|Use several filtering choices together to narrow the results table.|
lab-specific-filter-views|Give each lab its own filters|Configure useful filters and quick buttons without changing another lab’s setup.|
custom-filter-view-audit|Make custom filters consistent|Match each filter to the table column and choices it supports.|
trusted-white-label-approval|Let approved clients create branded certificates|Allow selected clients to use permitted branding without manual approval, while keeping billing records.|Build and check approval, removal of access and activity records; agree billing rules before enabling charges.
internal-document-checks|Check sample and report details automatically|Flag inconsistent information without staff downloading and uploading documents by hand.|Review existing checks and add the missing comparisons.
result-entry-permission-profiles|Show staff the right result-entry controls|Limit visible results, editing and bulk changes to what each staff member is allowed to do.|Check permitted and blocked actions, then finish any missing controls.
customer-results-api|Finish the existing Frontier results API work|Mac mini Codex already has a developer payload and a locally demonstrated integration. Production connectivity is not yet established.|Reuse the existing package, finish current review and remote synthetic checks, and prepare the separately approved partner activation.
boarding-pass-parity|Check what is needed for phone-wallet certificates|Build on earlier work exploring certificate cards that can be saved to a phone wallet.|Confirm the remaining requirements and check what the existing work already supports.
abandoned-order-reminders|Remind customers to finish orders or send samples|Help customers resume an unfinished order or send samples for an order already paid for.|Agree timing and links, and check that reminders stop after completion or opting out. Sending stays off for now.
public-coa-access-hardening|Protect public certificate lookup|Keep authorised verification and printed QR links usable while limiting unintended access to reports.|
white-label-printed-lookup|Find a branded certificate by its printed number|Return the correct issued customer-branded certificate from the number printed on it.|Finish checking correct and incorrect lookups and obtain separate approval before turning this on.
data-analysis-demo-review|Updated Data Analysis screens are installed|Use the updated purity and identity controls, chart navigation and spectrum display.|Complete the final check on the installed screens. Newer improvements are listed separately.
standard-based-net-content|Calculate Net Content from sample and standard|Use the existing single-point work to calculate reviewed quantities with actual preparation adjustments and retained standard evidence.|Finish the complete Data Analysis-to-certificate path. Expose one-off changes and permission-controlled method updates directly in Data Analysis.
data-analysis-batches|Group Data Analysis work into named batches|Some run controls are delivered; named batches still need work.|Finish named-batch handling and check it with the combined Data Analysis update before release.
automatic-analysis-evidence|Check automatic analysis and fix stalled work|The analysis screens are installed, but some automatic processing has stalled.|Our team will find the cause and prepare a recovery plan for approval.
white-label-release-emails|Email customers when branded certificates are ready|The email feature is already installed. The latest recorded check says it is switched off.|Our team will check the remaining preparation and arrange the notice and approval to switch it on.
measured-microbiology-results|Record measured microbiology results|Optionally include measured endotoxin, yeast and mould results.|
lc-method-deletion|Remove unused instrument test methods safely|Allow permitted staff to delete unused methods while retaining a record of the deletion.|
data-analysis-ion-signal-match|Explain spectrum comparisons clearly|Show whether a comparison uses a measured reference or signals from the current instrument run.|Check the combined Data Analysis update and its scientific results before an approved release.
data-analysis-spectrum-smoothing|Adjust how smooth a spectrum looks|Choose a raw display or smooth it using up to 100 scans.|Check the combined Data Analysis update before an approved release.
data-analysis-ion-composite|Automatic chromatograms for purity and identity|Use PDA data for purity and an analyte-specific MS chromatogram for identity and reporting. This is the first priority and ships independently.|Finish the existing work and prove save/reopen plus the correct charts on PDF and digital certificates, then prepare the release.
data-analysis-stable-ion-table|Keep signal rows in place as selections change|Distinguish suggested, selected and saved signals without moving their rows.|Check the combined Data Analysis update before an approved release.
my-products-disabled|Finish ordering from saved products|Connect the existing My Products redesign to account pricing, the order cart and checkout.|Complete and prove the current ports with the existing owners, retaining drafts and availability controls, for the coordinated website release.
compact-sample-photo-clarity|Make small sample photos clearer|Move the photo count off the image so the photo is easier to see.|Finish checking the updated photos in the full Sample Details screen before installation.
optiq-dark-branding|Use the approved Optiq logo in dark mode|Use the agreed logo and emblem in the app and email branding.|Include the finished change in the next approved release and check the installed branding.
reporting-hub-edit-safety|Keep results-table edits on the right samples|Protect edits when staff change pages, sort, paste or use keyboard shortcuts.|Finish the requested editing checks and obtain release approval before installation.
client-portal-coa-shortcuts|Open test certificates directly from an order|Give customers a Results column, easier page sizes and clearer loading.|Check access, saved layouts and phone use, then include the change in an approved release.
client-facing-clarity|Clearer messages and certificate status for clients|Show useful messages and accurate status, with consistent email branding.|Finish the remaining messages and counts, check email setup, and include them in an approved release. Optional notices stay off.
order-validation-clarity|Explain order errors and prevent duplicate samples|Show missing details together and catch repeated sample-name and lot-number combinations.|Finish checks for saved orders and simultaneous edits before an approved release.
optiq-blue-accent|Use Optiq blue across the screens|Apply the brand colour to buttons, tabs, menus, date pickers and tables.|Finish checking light and dark mode before including the change in an approved release.
guided-analysis-training|Practise entering and reviewing results before the quality audit|Give new staff guided exercises with made-up data and keep a record of their progress.|Once the results screens are ready, our team will finish and check the exercises before the audit. The audit date has not been recorded.
iso-mode-controls|Manage the lab’s quality controls in one place|Let the lab choose its quality controls, including which steps need a second person’s approval. Optiq has agreed to leave second approval off for now.|Our team will check the existing controls and finish the missing connections and training before the quality audit.
`.trim().split('\n').map(line => {
  const [id, title, summary, nextStep] = line.split('|');
  return [id, {title, summary, nextStep}];
}));

Object.assign(window.OPTIQ_PLAIN_LANGUAGE, window.OPTIQ_SCOPE_AUDIT?.readerUpdates || {});

// Only specific, unresolved customer decisions belong in the question panel.
// Technical coordination, release preparation and duplicate requests stay with our team.
window.OPTIQ_LAB_QUESTIONS = [
  {
    id: 'prices',
    sourceIds: ['optiq-billing-rules', 'portal-price-visibility'],
    title: 'What are the final prices and payment terms?',
    question: 'Please confirm the price of each test and package, what each package includes, any customer or volume discounts, and when customers should pay.'
  },
  {
    id: 'reference-records',
    sourceIds: ['spectral-reference-library', 'standard-based-net-content', 'net-content-method-inputs'],
    title: 'Scott: which reference tests and preparation records should we use?',
    question: 'Please identify the reference materials and test dates, and share any missing approved procedures and records showing how the reference materials and samples were prepared. Our team will find and connect the records already supplied.'
  },
  {
    id: 'measurement-choice',
    sourceIds: ['net-content-method-inputs'],
    title: 'Scott: which measurement should be used when several are suitable?',
    question: 'The earlier discussion left one choice open: should the quantity calculation use the suitable measurement with the strongest instrument signal? Please confirm this or point us to the lab’s approved rule. Our team will apply it.'
  }
];

'use strict';
// Reader-facing wording only. Status, ownership, dates and source history stay in the catalog.
// Columns: record ID | short title | what it means | what happens next (optional for closed work).
window.OPTIQ_PLAIN_LANGUAGE = Object.fromEntries(`
conformity|Track every vial in a Conformity test|Keep each vial’s purity, identity and amount results together under one sample.|Finish the vial screens and missing-result handling, check the test methods, and obtain approval before turning this on.
inspection-rules|Record how each vial looks|Save checks of the vial, cap and colours, then show them in the results table and test certificate.|Finish the inspection controls and wording, then check that saved observations appear correctly on the certificate.
verify-results-font|Check a certificate online|Look up an issued test certificate and compare it with the lab’s saved record.|
spectral-reference-library|Check the library of reference test results|Make sure the lab has suitable results from known reference materials to compare with customer samples.|Confirm which reference materials are covered and finish checking how new reference results enter the library.
fentanyl-results|Order and report a Fentanyl test|Choose the test, record a Pass or Fail, have it independently reviewed, and include it on the test certificate.|
coa-summary-layout|Clearer test certificates and charts|Show a summary first, followed by supporting test results and charts in the agreed order.|
receipt-emails|Use the company name in receipt emails|The company-name change is installed; correct delivery still needs to be confirmed.|Check the saved email records to confirm the right company name, recipient and delivery.
invoice-status|Find samples that have not been invoiced|Add an Uninvoiced button above the results table.|Confirm which samples each invoice covers, then check the button with fully and partly invoiced orders.
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
blend-potency|Report results for each peptide in a mixture|Give each peptide its own result on the test certificate.|Finish checking the calculations and reference materials, then check the complete report before release.
photo-reliability|Clear photos and recoverable hidden orders|View original photos clearly and hide or restore an order without deleting its samples or results.|
scan-intake|Scan and check arriving samples|Scan an order, correct its sample list and confirm what arrived.|Finish checking the scan, review and receiving steps together.
certified-imports|Import certified reference-material values|Export saved lot values and read values from a reference certificate for staff to confirm.|Finish checking the import and export, including staff confirmation before imported values are saved.
retained-intent|Recover older customer requests|Keep the original details of archived requests so they can be found again.|
intake-identity|Show peptide names clearly when receiving samples|Make it clear which peptide or mixture the customer submitted.|
analysis-framework|Connect testing all the way to the certificate|The Data Analysis screens are installed; the full result-entry, review and reporting process still needs work.|Check test methods, staff access, saved results, independent review and final certificates together before approval.
purchasing-core|Track purchase orders and buying history|Import earlier purchases and see which orders need attention.|
reporting-method-drafts|Prepare draft test methods|Use existing report fields to set up a draft method in Analysis Settings.|
staff-scan-access|Staff scanning and protected editing|Let signed-in staff search and scan labels while protecting saved records and photos.|
multi-lab-login|Use one login across permitted labs|Let staff switch between the labs they are allowed to use.|Finish lab switching and check that staff cannot access another lab’s restricted information.
shared-feature-tracker|One shared progress list|Keep requests, progress and questions in one place for the lab.|
missing-order-recovery|Find orders with many photos|Make sure an order remains easy to find even when it has many photos.|
net-content-undo|Edit sample amounts and undo mistakes|Copy amounts and units between rows, with Undo restoring both correctly after saving.|
bulk-coa-amendments|Correct several certificates together|Replace selected certificates while keeping their earlier issued versions.|Check selection, correction and replacement together, including access to the earlier certificates.
pda-peak-default|Start chart peak selection in the right place|Start from the light-detector chart while keeping the related mass-spectrum data available.|
native-empower-charts|Show charts from original Empower files|Display charts when the original instrument files have been retained.|
empower-native-collection|Match instrument results to the right samples|Collect completed test results and recover interrupted imports without losing the original files.|Finish checking sample matching, interrupted imports and results that need to be held for review.
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
portal-price-visibility|Simpler ordering with clear prices|Let customers choose tests, see the total, enter sample details and pay.|Finish payment checks in the test environment, confirm the payment terms and obtain approval before customer use.
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
quickbooks-status-sync|Bring invoice and payment status in from QuickBooks|Show the matching QuickBooks information on a Smpltrax order so staff do not update both systems.|The connection is off. Finish reliability, privacy and consent checks, then obtain approval before turning it on.
optiq-billing-rules|Confirm client prices and billing rules|Use the approved test prices, packages, client rates and rush-charge rules.|Optiq: provide the approved price list, special client rates, package prices and any rush charges or exceptions.
coa-oct14-mockups|Finish checking the new certificate layout|The new layout is installed; some test and chart combinations still need checking.|Check the remaining examples against the agreed design.
sample-details-documents|Open the right paperwork from Sample Details|Find the original submission slip, marked-up scans and signed customer agreement with the sample.|Confirm that each document is linked to the correct sample and reopens for authorised staff.
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
customer-results-api|Let customers connect their systems to released results|Provide authorised access to issued certificates, result data and verification cards.|Build the agreed connection in stages and check access, including when permission is removed.
boarding-pass-parity|Check what is needed for phone-wallet certificates|Build on earlier work exploring certificate cards that can be saved to a phone wallet.|Confirm the remaining requirements and check what the existing work already supports.
abandoned-order-reminders|Remind customers to finish orders or send samples|Help customers resume an unfinished order or send samples for an order already paid for.|Agree timing and links, and check that reminders stop after completion or opting out. Sending stays off for now.
public-coa-access-hardening|Protect public certificate lookup|Keep authorised verification and printed QR links usable while limiting unintended access to reports.|
white-label-printed-lookup|Find a branded certificate by its printed number|Return the correct issued customer-branded certificate from the number printed on it.|Finish checking correct and incorrect lookups and obtain separate approval before turning this on.
data-analysis-demo-review|Updated Data Analysis screens are installed|Use the updated purity and identity controls, chart navigation and spectrum display.|Complete the final check on the installed screens. Newer improvements are listed separately.
standard-based-net-content|Calculate sample amounts from reference materials|Calculate Net Content using a known reference material and support certificates based on two test runs.|Finish the calculation foundations, reference-material intake and lab checks. Separate release and activation approvals are still needed.
data-analysis-batches|Group Data Analysis work into named batches|Some run controls are delivered; named batches still need work.|Finish named-batch handling and check it with the combined Data Analysis update before release.
automatic-analysis-evidence|Check automatic analysis and its supporting records|Confirm that automatic results can be traced to usable original test records.|Find the missing records and result links, and prepare the repairs. Automatic jobs remain subject to separate approval before restarting.
white-label-release-emails|Email customers when branded certificates are ready|The email feature is installed but switched off.|Mike or the lab lead: confirm the required lab notice and readiness before these emails are switched on.
measured-microbiology-results|Record measured microbiology results|Optionally include measured endotoxin, yeast and mould results.|
lc-method-deletion|Remove unused instrument test methods safely|Allow permitted staff to delete unused methods while retaining a record of the deletion.|
data-analysis-ion-signal-match|Explain spectrum comparisons clearly|Show whether a comparison uses a measured reference or signals from the current instrument run.|Check the combined Data Analysis update and its scientific results before an approved release.
data-analysis-spectrum-smoothing|Adjust how smooth a spectrum looks|Choose a raw display or smooth it using up to 100 scans.|Check the combined Data Analysis update before an approved release.
data-analysis-ion-composite|View selected instrument signals together|Compare selected signals on the same time scale and finish automatic grouping of identified peaks.|Finish the grouping action and check it with the combined Data Analysis update before release.
data-analysis-stable-ion-table|Keep signal rows in place as selections change|Distinguish suggested, selected and saved signals without moving their rows.|Check the combined Data Analysis update before an approved release.
my-products-disabled|Prepare My Products without opening it to clients|Bring the product catalogue and ordering tools to Optiq while keeping customer access off.|Complete the missing work and check orders, saved drafts and blocked access before release. Customer access stays off.
compact-sample-photo-clarity|Make small sample photos clearer|Move the photo count off the image so the photo is easier to see.|Finish checking the updated photos in the full Sample Details screen before installation.
optiq-dark-branding|Use the approved Optiq logo in dark mode|Use the agreed logo and emblem in the app and email branding.|Include the finished change in the next approved release and check the installed branding.
reporting-hub-edit-safety|Keep results-table edits on the right samples|Protect edits when staff change pages, sort, paste or use keyboard shortcuts.|Finish the requested editing checks and obtain release approval before installation.
client-portal-coa-shortcuts|Open test certificates directly from an order|Give customers a Results column, easier page sizes and clearer loading.|Check access, saved layouts and phone use, then include the change in an approved release.
client-facing-clarity|Clearer messages and certificate status for clients|Show useful messages and accurate status, with consistent email branding.|Finish the remaining messages and counts, check email setup, and include them in an approved release. Optional notices stay off.
order-validation-clarity|Explain order errors and prevent duplicate samples|Show missing details together and catch repeated sample-name and lot-number combinations.|Finish checks for saved orders and simultaneous edits before an approved release.
optiq-blue-accent|Use Optiq blue across the screens|Apply the brand colour to buttons, tabs, menus, date pickers and tables.|Finish checking light and dark mode before including the change in an approved release.
`.trim().split('\n').map(line => {
  const [id, title, summary, nextStep] = line.split('|');
  return [id, {title, summary, nextStep}];
}));

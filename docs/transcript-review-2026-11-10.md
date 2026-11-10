# Optiq conversation review — 10 November 2026

Customer-facing summary of the November 9 conversations and November 10 owner clarifications. Original work items and delivery history are preserved. This update records scope and next actions, not newly verified implementation, deployment, scientific acceptance, reviewer outreach or payment activation. Other-lab demos, internal access details and customer order information are outside this public summary.

## Make results-table saves reliable

A fix is reported underway for values that appear saved but later disappear, delayed test updates and lag. Completion still needs checking.

Next: Verify saved values after navigating away and reopening, and confirm that the certificate uses the saved results. Preserve the improved filtering behavior.

## Keep selected samples while searching

Batch Samples already retains selections. A separate issue affects the To Analyse picker: selected samples become unchecked when search is cleared.

Next: Reuse the working selection behavior in To Analyse and verify multiple searches followed by Analyze Selected. Continue the existing prep, batch-assignment and dilution workflow work.

## Finish the daily analysis-to-certificate workflow

Assigned-ion selection, analyte-dropdown usability and difficult-plot fixes are reported underway. Reference comparisons remain part of the existing purity and identity work.

Next: Verify the repaired workflow. Investigate recommendations displayed without accept/reject controls, and preserve independent purity and certificate chart choices.

## Show usable recommendation controls

A suggested analyte appeared without the checkmark to accept it or the X to reject it. This remains a specific issue to investigate.

Next: Restore the expected review controls and verify the recommendation-to-saved-result workflow without assuming scientific acceptance.

## Build automatic Net Content into Data Analysis

Per-peptide entry is installed. The next work is the automatic single-point calculation in Data Analysis, reusing earlier calculation notes and existing source.

Next: Recover the previous detailed calculation discussion, current code and approved reference/preparation evidence before defining further implementation. One overall blend purity and Net Content per component remain the reporting direction.

## Recover the calculation and reference records

Earlier conversations and notes contain calculation detail. The team should recover those records and connect the lab’s existing reference and preparation information.

Next: Inspect what is already supplied before asking the lab to repeat it. Establish only the remaining method inputs and scientific qualification; stability discussion added no new study task.

## Support client defaults and order-specific methods

The lab needs both a default method for a client’s future orders and a method selected for an individual order. The certificate should show the applicable method.

Next: Map the existing configuration and implement or qualify the remaining client/default and per-order behavior.

## Find order documents from Order Details

Staff want an Order Details page with the submission slip and other documents related to that order. Existing sample-document associations and attachments should be reused.

Next: Verify order-level discovery, reopening and printing rather than rebuilding the attachment system.

## Finish the website with lab feedback and pricing

The next step is to send the current preview links to the lab reviewers, obtain feedback and pricing, and verify the combined sandbox work.

Next: Complete reviewer distribution and pricing, then prepare real Square and QuickBooks connections after sandbox completion is verified. Customer payment activation remains separate.

## Keep QuickBooks and Optiq invoicing aligned

The current billing scope is Optiq. Staff prefer to work in QuickBooks and see invoice and payment status reflected in Smpltrax.

Next: Confirm the working pricing baseline and existing integration checks before real-account connection and separately controlled activation.

## Use client defaults for certificate charts

Chart and mass-spectrum inclusion is already covered by the checkboxes under client information, according to the owner review.

Next: Keep the existing settings; investigate a specific missing case or regression if reported.


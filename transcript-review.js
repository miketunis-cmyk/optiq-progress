'use strict';
// Customer-facing projection of the Nov 9 transcript / Nov 10 owner review.
// Delivery status stays unchanged; the board retains authoritative owner notes.
(() => {
const updates = {
  "reporting-hub-edit-safety": {
    "title": "Make results-table saves reliable",
    "summary": "A fix is reported underway for values that appear saved but later disappear, delayed test updates and lag. Completion still needs checking.",
    "nextStep": "Verify saved values after navigating away and reopening, and confirm that the certificate uses the saved results. Preserve the improved filtering behavior."
  },
  "data-analysis-batches": {
    "title": "Keep selected samples while searching",
    "summary": "Batch Samples already retains selections. A separate issue affects the To Analyse picker: selected samples become unchecked when search is cleared.",
    "nextStep": "Reuse the working selection behavior in To Analyse and verify multiple searches followed by Analyze Selected. Continue the existing prep, batch-assignment and dilution workflow work."
  },
  "data-analysis-ion-composite": {
    "title": "Finish the daily analysis-to-certificate workflow",
    "summary": "Assigned-ion selection, analyte-dropdown usability and difficult-plot fixes are reported underway. Reference comparisons remain part of the existing purity and identity work.",
    "nextStep": "Verify the repaired workflow. Investigate recommendations displayed without accept/reject controls, and preserve independent purity and certificate chart choices."
  },
  "data-analysis-stable-ion-table": {
    "title": "Show usable recommendation controls",
    "summary": "A suggested analyte appeared without the checkmark to accept it or the X to reject it. This remains a specific issue to investigate.",
    "nextStep": "Restore the expected review controls and verify the recommendation-to-saved-result workflow without assuming scientific acceptance."
  },
  "standard-based-net-content": {
    "title": "Build automatic Net Content into Data Analysis",
    "summary": "Per-peptide entry is installed. The next work is the automatic single-point calculation in Data Analysis, reusing earlier calculation notes and existing source.",
    "nextStep": "Recover the previous detailed calculation discussion, current code and approved reference/preparation evidence before defining further implementation. One overall blend purity and Net Content per component remain the reporting direction."
  },
  "net-content-method-inputs": {
    "title": "Recover the calculation and reference records",
    "summary": "Earlier conversations and notes contain calculation detail. The team should recover those records and connect the lab’s existing reference and preparation information.",
    "nextStep": "Inspect what is already supplied before asking the lab to repeat it. Establish only the remaining method inputs and scientific qualification; stability discussion added no new study task."
  },
  "reporting-method-drafts": {
    "title": "Support client defaults and order-specific methods",
    "summary": "The lab needs both a default method for a client’s future orders and a method selected for an individual order. The certificate should show the applicable method.",
    "nextStep": "Map the existing configuration and implement or qualify the remaining client/default and per-order behavior."
  },
  "sample-details-documents": {
    "title": "Find order documents from Order Details",
    "summary": "Staff want an Order Details page with the submission slip and other documents related to that order. Existing sample-document associations and attachments should be reused.",
    "nextStep": "Verify order-level discovery, reopening and printing rather than rebuilding the attachment system."
  },
  "portal-price-visibility": {
    "title": "Finish the website with lab feedback and pricing",
    "summary": "The next step is to send the current preview links to the lab reviewers, obtain feedback and pricing, and verify the combined sandbox work.",
    "nextStep": "Complete reviewer distribution and pricing, then prepare real Square and QuickBooks connections after sandbox completion is verified. Customer payment activation remains separate."
  },
  "quickbooks-status-sync": {
    "title": "Keep QuickBooks and Optiq invoicing aligned",
    "summary": "The current billing scope is Optiq. Staff prefer to work in QuickBooks and see invoice and payment status reflected in Smpltrax.",
    "nextStep": "Confirm the working pricing baseline and existing integration checks before real-account connection and separately controlled activation."
  },
  "chromatogram-report-inclusion": {
    "title": "Use client defaults for certificate charts",
    "summary": "Chart and mass-spectrum inclusion is already covered by the checkboxes under client information, according to the owner review.",
    "nextStep": "Keep the existing settings; investigate a specific missing case or regression if reported."
  }
};
for (const id of Object.keys(updates)) {
  if (!window.OPTIQ_CATALOG.some(row => row.id === id)) throw new Error('Unknown review item: '+id);
}
window.OPTIQ_CATALOG = window.OPTIQ_CATALOG.map(row => {
  const update=updates[row.id]; if (!update) return row;
  window.OPTIQ_PLAIN_LANGUAGE[row.id]=update;
  return {...row, currentAsOf:'2026-11-10', currentDisposition:update.summary,
    detail:update.summary, nextStep:update.nextStep,
    currentBlocker:row.status==='complete' ? '' : update.nextStep,
    evidence:'Owner reviewed the conversation-derived scope on 10 November. Reported fixes are not independent completion evidence.',
    evidenceBasis:'10 November 2026 owner scope clarification; earlier release evidence retained',
    evidenceUrl:'docs/transcript-review-2026-11-10.md',
    currentEvidenceBoundary:'Scope and next-action update only. No new deployment, scientific qualification, customer result change, outreach or payment activation is claimed.',
    transcriptReview:true, previousReview:row};
});
})();

'use strict';
// Dated customer-facing release projection; original requirements and history remain intact.
// Installed web/API/runtime observed at the public version endpoint, not inferred from merge.
(() => {
  const release = '3ee80fbcd8c3388e3d0b15e3b388fcac1bfda468';
  const checkedAt = '2026-11-09T16:29:55.444Z';
  const updates = {
  "chromatogram-report-inclusion": {
    "status": "complete",
    "title": "Choose which charts appear on the certificate",
    "summary": "Staff can now include or leave out instrument charts and mass spectra using tick boxes in the results table. Customer defaults are also available.",
    "nextStep": "Available in the installed update. Further refinements will be tracked separately.",
    "detail": "The simple report on/off controls were included in Deploy 1 and retained in Deploy 2. Synthetic checks exercised saving the choices and printing with charts off.",
    "prs": [
      7653,
      7669,
      7690,
      7704
    ]
  },
  "chromatogram-source-selection": {
    "status": "partial",
    "title": "Choose the right chart for analysis and reporting",
    "summary": "The installed update separates showing a signal, editing it, using it for purity and selecting it for the certificate. Each control is named.",
    "nextStep": "Our team will finish checking the wider request against the lab’s analysis and certificate examples.",
    "detail": "Installed controls and source-loading repairs are delivered. This does not close every original source-selection or method qualification case.",
    "prs": [
      7679,
      7690,
      7704
    ]
  },
  "data-analysis-ion-composite": {
    "status": "partial",
    "title": "Connect analysis charts to the certificate",
    "summary": "Both weekend updates are installed. They improve purity review, identity suggestions, chart choices and the path from saved analysis to the certificate. Staff remain responsible for reviewing analytical results.",
    "nextStep": "Our team will finish the remaining scientific and reporting checks and address outstanding cases.",
    "detail": "Deploy 1 and Deploy 2 are installed. Their synthetic release checks cover analyst actions and certificates; outstanding scientific cases remain open. This is not blanket method qualification.",
    "prs": [
      7690,
      7704
    ]
  },
  "data-analysis-batches": {
    "status": "partial",
    "title": "Manage samples in an analysis batch",
    "summary": "The installed Batch samples window combines adding and removing samples, searchable sample IDs and selections kept while searching. The second update adds layout and drag-order improvements.",
    "nextStep": "Our team will check the remaining batch-workflow requirements against the updated window.",
    "detail": "The Batch samples work was included in Deploy 1, with further layout and drag-order work in Deploy 2. Wider batch requirements remain open.",
    "prs": [
      7680,
      7690,
      7704
    ]
  },
  "data-analysis-ion-signal-match": {
    "status": "partial",
    "title": "Make identity evidence easier to review",
    "summary": "The latest update gives clearer identity suggestions and signal evidence, while keeping the analyst’s review central to the final result.",
    "nextStep": "Our team will finish the remaining reference comparisons and scientific checks.",
    "detail": "Deploy 2 includes updated identity suggestions, signal evidence and explanatory wording. It does not qualify every peptide, reference or analytical method.",
    "prs": [
      7704
    ]
  },
  "data-analysis-stable-ion-table": {
    "status": "partial",
    "title": "Keep signal choices clear during review",
    "summary": "The installed updates improve ion selection, evidence explanations and the handling of marks left behind when a peak is split or removed.",
    "nextStep": "Our team will check the remaining table and selection cases in the full workflow.",
    "detail": "Deploy 1 includes adduct tick boxes, split-peak handling and ion hover details. Deploy 2 follows with cleanup of marks left behind after peak changes.",
    "prs": [
      7620,
      7622,
      7624,
      7690,
      7704
    ]
  },
  "standard-based-net-content": {
    "status": "partial",
    "title": "Review Net Content for each peptide",
    "summary": "The installed update lets staff enter and review Net Content for individual peptides in a mixture and choose how identity appears on the certificate. Automatic calculation still depends on approved methods and reference records.",
    "nextStep": "Our team will finish the automatic calculation workflow using the lab’s approved method and preparation details.",
    "detail": "Per-peptide Net Content entry and certificate handling are installed. This is separate from qualification of automatic standard-based calculation, reference evidence and method settings.",
    "prs": [
      7581,
      7676,
      7690,
      7704
    ]
  },
  "net-content-method-controls": {
    "status": "partial",
    "title": "Set up Net Content with the right controls",
    "summary": "Staff now have clearer per-peptide entry controls in the installed Net Content window. Lab-wide method defaults and automatic calculation controls remain a separate part of the work.",
    "nextStep": "Our team will finish the missing method settings and permission checks.",
    "detail": "Installed entry controls do not establish completion of method defaults, one-off scientific adjustments or permission-controlled method updates.",
    "prs": [
      7676,
      7690
    ]
  },
  "reporting-hub-edit-safety": {
    "status": "partial",
    "title": "Keep results-table work clear and consistent",
    "summary": "The installed updates restore chart columns in saved layouts, improve saving certificate tick boxes across rows and keep the table from waiting indefinitely for background checks.",
    "nextStep": "Our team will finish the remaining editing and undo checks; this wider request remains open.",
    "detail": "Installed table improvements are delivered. The wider editing/paste/keyboard scope and known undo cases are not closed by installation.",
    "prs": [
      7669,
      7689,
      7690,
      7704
    ]
  },
  "coa-oct14-mockups": {
    "status": "partial",
    "title": "Continue refining the test certificate",
    "summary": "The installed updates add clearer chart and spectrum choices, per-peptide Net Content handling and further chart-label improvements.",
    "nextStep": "Our team will finish checking the remaining certificate layouts and analytical examples.",
    "detail": "Both releases include certificate-related changes. The separate COA worker version remains unchanged in the live version report; this record concerns web/API changes and does not claim a worker replacement or full layout qualification.",
    "prs": [
      7581,
      7584,
      7690,
      7704
    ]
  },
  "public-signup-approval": {
    "status": "partial",
    "title": "Make customer access easier to manage",
    "summary": "The installed update makes portal approval clearer: staff choose the company and access, then use one approval action. Further signup and payment-linked access work remains.",
    "nextStep": "Our team will finish the remaining signup cases, including the pending-approval sign-in repair, before a later approved release.",
    "detail": "Portal approval improvements are installed. PR 7666 remains open as of this update and is not included in this delivery; payment and invitation scope remains open.",
    "prs": [
      7677,
      7690,
      7704
    ]
  },
  "portal-price-visibility": {
    "status": "partial",
    "title": "Bring the website, ordering and payments together",
    "summary": "The weekend produced a website review page and test-environment checks connecting ordering, invoices, payment links and QuickBooks updates. These parts are being prepared for release.",
    "nextStep": "Our team will complete the combined checks and release preparation. The lab can review the website through its separate review page.",
    "detail": "Website review and payment workflow results are dated worker reports from test environments, not production activation. The public website launch and real customer payments remain separate.",
    "prs": [
      7644,
      7650,
      7657,
      7670
    ]
  },
  "blend-potency": {
    "status": "partial",
    "title": "Enter a separate quantity for each peptide",
    "summary": "The installed Net Content window lets staff enter values for each peptide in a mixture and choose per-peptide or shared identity wording for the certificate.",
    "nextStep": "Our team will finish the remaining method and certificate-example checks.",
    "detail": "The per-peptide editor is now connected and included in the installed release. Wider method qualification remains open.",
    "prs": [
      7581,
      7676,
      7690
    ]
  },
  "data-analysis-spectrum-smoothing": {
    "status": "partial",
    "title": "Adjust how smooth a spectrum looks",
    "summary": "The Data Analysis update, including the spectrum-smoothing controls, is now part of the installed software.",
    "nextStep": "Our team will finish checking the remaining display and scientific examples.",
    "detail": "The combined Data Analysis change in PR 7263 is an ancestor of the installed release. Installation does not replace the outstanding feature checks.",
    "prs": [
      7263,
      7690,
      7704
    ]
  },
  "optiq-dark-branding": {
    "status": "partial",
    "title": "Use the approved Optiq logo in dark mode",
    "summary": "The approved dark-mode branding is included in the installed software update.",
    "nextStep": "Our team will finish the remaining screen and email-branding checks without sending customer test emails.",
    "detail": "PR 7021 is included in the installed cumulative release. Remaining branding qualification is kept open.",
    "prs": [
      7021,
      7690
    ]
  },
  "client-portal-coa-shortcuts": {
    "status": "partial",
    "title": "Open test certificates directly from an order",
    "summary": "The installed update includes direct results links from customer orders, smaller page sizes and clearer loading.",
    "nextStep": "Our team will finish the remaining access, saved-layout and phone checks.",
    "detail": "PR 7245 is included in the installed cumulative release. Wider access and layout acceptance stays open.",
    "prs": [
      7245,
      7690
    ]
  },
  "stable-released-coa-links": {
    "status": "partial",
    "title": "Keep certificate links up to date",
    "summary": "The certificate-link repair is included in the installed software, so the earlier request is no longer waiting for installation.",
    "nextStep": "Our team will finish the remaining old-link, current-version and withdrawn-certificate checks.",
    "detail": "PR 7221 is included in the installed cumulative release. The remaining link-behavior checks are separate; no customer links were exercised for this page update.",
    "prs": [
      7221,
      7690
    ]
  },
  "reporting-hub-pagination": {
    "status": "complete",
    "title": "Keep your place in the results table",
    "summary": "The latest installed update also includes the repair that keeps the results-table page when staff open a sample and return.",
    "nextStep": "The earlier paging work remains recorded complete. Our team will check any remaining return-navigation cases separately.",
    "detail": "PR 7541 is included in the installed cumulative release. This adds installation evidence to the earlier completed pagination record; no new live interaction test is claimed.",
    "prs": [
      7541,
      7690
    ]
  },
  "order-validation-clarity": {
    "status": "partial",
    "title": "Explain order errors and prevent duplicate samples",
    "summary": "The installed release includes clearer order validation and checks for repeated sample-name and lot-number combinations when staff edit or re-import an order.",
    "nextStep": "Our team will finish any remaining ordering and simultaneous-edit cases.",
    "detail": "PR 7281 is included in the installed cumulative release. Installation is separate from any outstanding full-workflow checks.",
    "prs": [
      7281,
      7690
    ]
  },
  "quickbooks-status-sync": {
    "status": "partial",
    "title": "Keep invoice and payment information up to date",
    "summary": "Weekend test-environment checks connected QuickBooks payment updates to Smpltrax and confirmed that a paid test invoice could show as settled without a manual refresh.",
    "nextStep": "Our team will complete the remaining accounting checks and release preparation before customer activation.",
    "detail": "Test-environment progress from the existing payment lane, including PR 7650. This does not claim production sync activation or complete the broader accounting request.",
    "prs": [
      7650
    ]
  }
};
  const ids = new Set(window.OPTIQ_CATALOG.map(row => row.id));
  for (const id of Object.keys(updates)) {
    if (!ids.has(id)) throw new Error(`Weekend update has no work item: ${id}`);
  }
  window.OPTIQ_CATALOG = window.OPTIQ_CATALOG.map(row => {
    const update = updates[row.id];
    if (!update) return row;
    const installed = !['portal-price-visibility','quickbooks-status-sync'].includes(row.id);
    const evidence = {
      kind: installed ? 'production' : 'sandbox', release: installed ? release : null,
      checkedAt, prs: update.prs,
      basis: installed ? 'Public installed-version readback plus release source and synthetic release-check records.' : 'Dated weekend test-environment reports; no production activation.'
    };
    window.OPTIQ_PLAIN_LANGUAGE[row.id] = {title: update.title, summary: update.summary, nextStep: update.nextStep};
    return {...row, status: update.status, currentAsOf: '2026-11-09',
      currentNotes: update.status === 'complete' ? [] : ['partial','verification'],
      currentDisposition: update.summary, detail: update.detail, nextStep: update.nextStep,
      currentBlocker: update.status === 'complete' ? '' : update.nextStep,
      evidence: update.detail, evidenceUrl: 'docs/weekend-update-2026-11-09.md',
      evidenceBasis: evidence.basis, currentEvidenceBoundary: installed
        ? 'Installation is confirmed. Workflow checks used synthetic samples; no new customer-record interaction was performed for this page update. Wider scientific qualification and remaining scope stay separate.'
        : 'Test-environment progress only. Website launch, real payments and remaining release approvals are separate.',
      weekendEvidence: evidence,
      ...(update.status === 'complete' && row.status !== 'complete' ? {deliveryEvidence: evidence} : {}),
      previousReview: row};
  });
})();

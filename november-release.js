'use strict';
// Publish bounded release milestones on the existing requests and retain their history.
(() => {
  const versionRecord = 'https://optiq.smpltrax.com/health/version';
  const releaseEvidence = 'Optiq’s API, web and reporting runtime version was confirmed on 18 November for the 17 November Pacific time install.';
  const updates = {
    'reporting-method-drafts': {
      title: 'Sterility method on certificates (qPCR)',
      summary: 'Since 12 November, staff can choose qPCR or USP <71> per sample and the certificate prints the saved method.',
      nextStep: 'Staff can use the Sterility Method column for new results.',
      detail: 'The earlier Client methods on certificates card referred to this sterility change. The method is saved with the sample result. Issued certificates keep their original wording. General client defaults and order-level method selection were discussed separately.',
      evidence: 'The 12 November Optiq release added per-sample method selection. The recorded release check rendered the selected method on both PDF and web certificates.'
    },
    'data-analysis-ion-composite': {
      title: 'Faster assigned-ion charts',
      summary: 'The 17 November update loads assigned ions together, labels their peaks, and carries assignments from 214 to 280 nm.',
      nextStep: 'Check the full save-and-reopen workflow and confirm that PDF and web certificates use the intended traces.',
      detail: 'Saved-chart notices now appear on the chart when the saved settings differ. The wider purity and identity workflow still needs end-to-end checks.'
    },
    'chromatogram-source-selection': {
      title: 'Choose the certificate trace while charts load',
      summary: 'Since 17 November, staff can select another trace for the certificate while a previous trace is still opening.',
      nextStep: 'Check the chosen trace after saving and reopening. Review the separate purity and certificate selections in the full workflow.'
    },
    'data-analysis-stable-ion-table': {
      title: 'Review weak identity suggestions',
      summary: 'Staff can accept or dismiss weak suggestions when the order names the suggested peptide. The fix shipped in the update before 17 November.',
      nextStep: 'Check that accepting or dismissing a suggestion gives the expected saved result.'
    },
    'ordered-test-search': {
      title: 'See requested tests in saved sample layouts',
      summary: 'The 17 November update restores the Requested Tests column in earlier saved peptide sample layouts. Staff can also search by ordered test.',
      nextStep: 'Staff can use the column in the Samples list or expand an order to see its samples.'
    },
    'iu-units': {
      title: 'Use IU for peptide label claims',
      summary: 'Since 17 November, customers can choose international units when entering peptide label claims on a new order.',
      nextStep: 'Use IU when the label claim is given in international units.',
      detail: 'IU is saved as entered. A mass comparison requires a claim in compatible units.'
    },
    'coa-summary-layout': {
      title: 'Clearer certificates, including Adamax wording',
      summary: 'Since 17 November, certificates show Adamax. Unusual entries flag the wording for analyst review while the certificate is generated.',
      nextStep: 'Review any wording warning before releasing the certificate.'
    },
    'conformity': {
      title: 'Conformity testing for each vial',
      summary: 'The installed controls support ordering Conformity on existing samples, choosing tests and entering vials.',
      nextStep: 'Confirm the vial and results workflow with Optiq and get the lab’s go-ahead before switching it on.',
      signoff: true
    },
    'analysis-framework': {
      title: 'PPI sample prep, batching and results',
      summary: 'The 17 November install includes the sample-prep grid, printable worksheet and run-group batching for purity, Net Content and identity.',
      nextStep: 'Run the full prep-to-certificate workflow with the lab and agree when to turn it on.',
      signoff: true
    },
    'data-analysis-ion-signal-match': {
      title: 'Review identity evidence and label mass',
      summary: 'Staff can review signal matches. The label mass check is installed behind a lab setting.',
      nextStep: 'Check label mass on a real instrument run with the lab and get approval before switching it on.',
      signoff: true
    },
    'portal-price-visibility': {
      title: 'Review the new website and order form',
      summary: 'The preview includes 25 pages and the order form. The lab’s final prices and launch approval are pending.',
      nextStep: 'Ask Optiq to sign off on the pages and order form and confirm the published pricing before launch.',
      evidence: 'Website preview and test-environment ordering checks recorded in the 9 November update.',
      evidenceUrl: 'docs/weekend-update-2026-11-09.md',
      signoff: true
    },
    'operational-checkout-accounting': {
      title: 'Approve Square payments for customer orders',
      summary: 'Ordering and payments have been tested together. Customer card payments await final prices and live account setup.',
      nextStep: 'Confirm prices and billing terms, set up Square and get the lab’s go-ahead before accepting customer payments.',
      evidence: 'Test-environment ordering and payment checks recorded in the 9 November update.',
      evidenceUrl: 'docs/weekend-update-2026-11-09.md',
      signoff: true
    },
    'quickbooks-status-sync': {
      title: 'Approve live QuickBooks invoice and payment sync',
      summary: 'Invoice and payment changes were tested. Live QuickBooks setup and approval are pending.',
      nextStep: 'Connect Optiq’s account, confirm a test invoice and payment with the lab, and get approval before switching on live sync.',
      evidence: 'A paid test invoice was checked in the test environment. The 17 November install includes support for Optiq’s own QuickBooks connection.',
      signoff: true
    }
  };

  const catalog = window.OPTIQ_CATALOG;
  for (const id of Object.keys(updates)) {
    if (!catalog.some(row => row.id === id)) throw new Error('Unknown November release item: ' + id);
  }
  window.OPTIQ_CATALOG = catalog.map(row => {
    const update = updates[row.id];
    if (!update) return row;
    const {title, summary, nextStep, detail = summary, evidence = releaseEvidence, evidenceUrl = versionRecord, signoff} = update;
    window.OPTIQ_PLAIN_LANGUAGE[row.id] = {title, summary, nextStep};
    return {
      ...row,
      currentAsOf: '2026-11-18',
      currentDisposition: summary,
      detail,
      nextStep,
      currentBlocker: row.status === 'complete' ? '' : nextStep,
      currentNotes: signoff ? [...(row.currentNotes || []), 'signoff'] : row.currentNotes,
      evidence,
      evidenceBasis: '18 November release and scope review',
      evidenceUrl,
      currentEvidenceBoundary: signoff ? 'Optiq approval is still pending for this rollout.' : '',
      previousReview: row
    };
  });
})();

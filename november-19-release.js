'use strict';
// 19 November install: bounded updates on existing requests. Statuses are unchanged.
(() => {
  const evidence = 'Optiq’s API, web and reporting runtime version was confirmed on 19 November for the 19 November install.';
  const updates = {
    'standard-based-net-content': {
      title: 'Net Content from a single standard',
      summary: 'Since 19 November, staff can calculate Net Content in Data Analysis from a single-point standard, including each peptide in a blend.',
      nextStep: 'Use approved reference and preparation records for each method before relying on the calculated value.'
    }
  };
  const catalog = window.OPTIQ_CATALOG;
  for (const id of Object.keys(updates)) {
    if (!catalog.some(row => row.id === id)) throw new Error('Unknown 19 November release item: ' + id);
  }
  window.OPTIQ_CATALOG = catalog.map(row => {
    const update = updates[row.id];
    if (!update) return row;
    const {title, summary, nextStep} = update;
    window.OPTIQ_PLAIN_LANGUAGE[row.id] = {title, summary, nextStep};
    return {
      ...row,
      currentAsOf: '2026-11-19',
      currentDisposition: summary,
      detail: summary,
      nextStep,
      currentBlocker: row.status === 'complete' ? '' : nextStep,
      evidence,
      evidenceBasis: '19 November release',
      evidenceUrl: 'https://optiq.smpltrax.com/health/version',
      previousReview: row
    };
  });
})();

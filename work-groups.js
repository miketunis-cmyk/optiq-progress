'use strict';
// Presentation parents reuse existing business IDs. Every child remains independently tracked.
window.OPTIQ_WORK_GROUPS = [
  {id:'spectral-reference-library', title:'Reference library', summary:'Create, approve and reuse reference tests, with their original run evidence.', members:['spectral-reference-library','library-standard-entry-policy']},
  {id:'partner-inventory', title:'Partner supplies and settlement', summary:'Share permitted stock information and agree how partner supplies are charged and settled.', members:['partner-inventory','partner-supply-settlement']},
  {id:'customer-results-api', title:'Frontier results connection', summary:'Connect the existing results package to Frontier using the agreed endpoint and authorized data.', members:['customer-results-api','frontier-connection-inputs']},
  {id:'conformity', title:'Conformity testing', summary:'Keep each vial’s results, name and label together through review and the final certificate.', members:['conformity','conformity-child-labels']},
  {id:'standard-based-net-content', title:'Net Content', summary:'Calculate sample amounts using approved scientific inputs and the right analyst controls.', members:['standard-based-net-content','net-content-method-controls','net-content-method-inputs']},
  {id:'certified-imports', title:'Reference-material import and export', summary:'Export saved reference values and read proposed values from supplier certificates for staff to confirm.', members:['certified-imports','certified-certificate-extraction']},
  {id:'portal-price-visibility', title:'Website, ordering and payments', summary:'Bring website ordering, saved products, account access, customer prices and payment recording together.', members:['portal-price-visibility','my-products-disabled','public-signup-approval','authenticated-order-handoff','account-price-resolution','operational-checkout-accounting','unattended-payment-recovery']}
];

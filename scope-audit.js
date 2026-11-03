'use strict';
// Requirement-level scope audit; source/delivery history is never replaced by parent progress.
window.OPTIQ_SCOPE_AUDIT = {
  "date": "2026-11-02",
  "basis": "Requirement-level review of the November 2 call, later owner rulings, investigation reports and cited source PRs. No new live tests or implementation verification. An active parent never supplies progress credit to an unverified additional requirement.",
  "reviewedItemIds": [
    "conformity",
    "inspection-rules",
    "verify-results-font",
    "spectral-reference-library",
    "fentanyl-results",
    "coa-summary-layout",
    "receipt-emails",
    "invoice-status",
    "frozen-sort",
    "receiving-tables",
    "lot-number",
    "printed-labels",
    "client-scrolling",
    "grid-widths",
    "inventory-release",
    "iu-units",
    "preview-performance",
    "sop-documents",
    "partner-inventory",
    "manufacturer-profiles",
    "client-bulk-white-label",
    "blend-potency",
    "photo-reliability",
    "scan-intake",
    "certified-imports",
    "retained-intent",
    "intake-identity",
    "analysis-framework",
    "purchasing-core",
    "reporting-method-drafts",
    "staff-scan-access",
    "multi-lab-login",
    "shared-feature-tracker",
    "missing-order-recovery",
    "net-content-undo",
    "bulk-coa-amendments",
    "pda-peak-default",
    "native-empower-charts",
    "empower-native-collection",
    "inventory-follow-ups",
    "purchasing-status-words",
    "purchase-history-forecast",
    "water-sample-type",
    "order-submit-retry",
    "white-label-attestation",
    "white-label-photo-vials",
    "white-label-missing-vials",
    "white-label-required-lot",
    "client-create-invite",
    "public-signup-approval",
    "portal-price-visibility",
    "panel-presets",
    "live-vial-count",
    "unresolved-client-orders",
    "net-content-per-vial",
    "coa-status-language",
    "partner-sample-routing",
    "intake-attention-notices",
    "shared-lims-priorities",
    "hubspot-onboarding",
    "customer-qr-labels",
    "coa-tamper-evidence",
    "tablet-sample-type",
    "coa-spectrum-interpretation",
    "submission-matrix-save-parity",
    "stale-tab-refresh",
    "stable-released-coa-links",
    "coa-automatic-ion-interpretation",
    "quickbooks-status-sync",
    "optiq-billing-rules",
    "coa-oct14-mockups",
    "sample-details-documents",
    "inventory-receiving-defaults",
    "chemical-components-grid-stability",
    "sample-order-client-messaging",
    "sample-storage-multi-lab",
    "reporting-hub-pagination",
    "lab-photo-sort",
    "ordered-test-search",
    "sample-status-audit",
    "stacked-filter-views",
    "lab-specific-filter-views",
    "custom-filter-view-audit",
    "trusted-white-label-approval",
    "internal-document-checks",
    "result-entry-permission-profiles",
    "customer-results-api",
    "boarding-pass-parity",
    "abandoned-order-reminders",
    "public-coa-access-hardening",
    "white-label-printed-lookup",
    "guided-analysis-training",
    "iso-mode-controls",
    "chromatogram-source-selection",
    "data-analysis-demo-review",
    "standard-based-net-content",
    "data-analysis-batches",
    "automatic-analysis-evidence",
    "white-label-release-emails",
    "measured-microbiology-results",
    "lc-method-deletion",
    "data-analysis-ion-signal-match",
    "data-analysis-spectrum-smoothing",
    "data-analysis-ion-composite",
    "data-analysis-stable-ion-table",
    "my-products-disabled",
    "compact-sample-photo-clarity",
    "optiq-dark-branding",
    "reporting-hub-edit-safety",
    "client-portal-coa-shortcuts",
    "client-facing-clarity",
    "order-validation-clarity",
    "optiq-blue-accent"
  ],
  "sources": [
    {
      "kind": "call",
      "record": "AUD-20261102-WA0002_transcript.txt; Mike is speaker 1, Laz speaker 2"
    },
    {
      "kind": "owner-rulings",
      "record": "November 2 clarification session and requirement-level classification correction"
    },
    {
      "kind": "investigation",
      "record": "Website/payment, Conformity, multi-analyte COA, Empower and Frontier investigation reports from November 2"
    },
    {
      "kind": "source",
      "record": "PRs 6889 and 6931 merged; 6946 and 7211 open; 7263 merged. Source state does not establish installation."
    }
  ],
  "additions": [
    {
      "id": "net-content-method-controls",
      "title": "Configure Net Content defaults and change them inside Data Analysis",
      "area": "Data Analysis",
      "status": "queued",
      "stage": 0,
      "description": "For Net Content, configure lab defaults and let analysts make one-off changes or update the method when permitted, directly in Data Analysis.",
      "detail": "The single-point calculation and per-result value override exist. That does not establish lab defaults, inline standard/run-selection changes, or saving a permitted change back to a method. November 2 owner rulings; PR #6889 implements standard selection, a preparation factor and a result-value override, not verified coverage of these additional method controls.",
      "nextStep": "Audit the current settings and one-off controls; define only missing lab defaults, per-sample/per-peptide changes and permission-controlled method updates.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing Data Analysis/Net Content owners; additional settings scope has no confirmed pickup",
      "meetingPriority": true,
      "scopeParentIds": [
        "standard-based-net-content"
      ],
      "evidence": "November 2 owner rulings; PR #6889 implements standard selection, a preparation factor and a result-value override, not verified coverage of these additional method controls.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "authenticated-order-handoff",
      "title": "Connect website ordering to the signed-in customer journey",
      "area": "Orders & pricing",
      "status": "queued",
      "stage": 0,
      "description": "Connect the existing public website and signed-in portal/saved-product ordering without losing drafts, selections or customer identity.",
      "detail": "The public widget and signed-in saved-product wizard are separate paths. The investigation did not establish their completed authenticated handoff or a safe account identity for invoice eligibility. Website/payment investigation: login/signup disabled in the preview; My Products uses the signed-in wizard; public widget is separate; typed-email invoice matching does not establish authenticated account identity.",
      "nextStep": "Map the existing public and signed-in paths; define the missing handoff and verified-customer/invoice eligibility behavior.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing website, portal and checkout owners; bridge implementation pickup unconfirmed",
      "meetingPriority": true,
      "scopeParentIds": [
        "portal-price-visibility",
        "my-products-disabled",
        "public-signup-approval"
      ],
      "evidence": "Website/payment investigation: login/signup disabled in the preview; My Products uses the signed-in wizard; public widget is separate; typed-email invoice matching does not establish authenticated account identity.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "account-price-resolution",
      "title": "Apply account prices consistently throughout ordering and billing",
      "area": "Orders & pricing",
      "status": "queued",
      "stage": 0,
      "description": "Implement the settled guest-versus-account pricing policy across all customer journeys; final price amounts remain a separate Optiq input.",
      "detail": "The display policy is settled, but the inspected public price resolver has no account input. Sandbox payment success does not establish configured customer pricing across all surfaces. Mike settled public versus signed-in display; website/payment investigation found the public resolver accepts lab context without account-price input.",
      "nextStep": "Audit current account-price support and plan the missing authenticated price resolution across website, cart, saved products, checkout and billing.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing pricing and checkout owners; account-pricing implementation pickup unconfirmed",
      "meetingPriority": true,
      "scopeParentIds": [
        "portal-price-visibility",
        "my-products-disabled",
        "optiq-billing-rules"
      ],
      "evidence": "Mike settled public versus signed-in display; website/payment investigation found the public resolver accepts lab context without account-price input.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "operational-checkout-accounting",
      "title": "Connect checkout payments to operational accounting records",
      "area": "Billing",
      "status": "queued",
      "stage": 0,
      "description": "Finish the operational accounting connection required by checkout; optional invoice-status enhancements remain lower priority.",
      "detail": "The sandbox recorder creates QuickBooks invoice/payment entries but deliberately writes no operational LIMS invoice/receipt rows and refuses production recording. A switch change cannot finish that connection. Website/payment investigation of the current sandbox recorder and stopped QuickBooks handoff; no production finance change is authorized by this planning record.",
      "nextStep": "Recover the existing finance handoff and define the minimum order/payment/LIMS/QuickBooks linkage and recording responsibilities.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing finance/checkout owners; operational accounting plan and pickup unconfirmed",
      "meetingPriority": true,
      "scopeParentIds": [
        "portal-price-visibility",
        "quickbooks-status-sync"
      ],
      "evidence": "Website/payment investigation of the current sandbox recorder and stopped QuickBooks handoff; no production finance change is authorized by this planning record.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "unattended-payment-recovery",
      "title": "Recover payments when the customer closes the browser",
      "area": "Billing",
      "status": "queued",
      "stage": 0,
      "description": "Recover incomplete payment/accounting work even after the customer leaves; reuse the existing duplicate protection.",
      "detail": "Same-request retries and duplicate-charge protection exist. Recovery after the customer leaves, pending capture, or failed accounting was not established; the named reconciler was not located in the inspected source. Website/payment investigation distinguished implemented same-request retry protection from unverified unattended recovery.",
      "nextStep": "Locate any existing recovery implementation and define only the missing closed-browser, pending-capture and accounting-failure transitions.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing checkout/finance owners; unattended-recovery plan and pickup unconfirmed",
      "meetingPriority": true,
      "scopeParentIds": [
        "portal-price-visibility",
        "order-submit-retry"
      ],
      "evidence": "Website/payment investigation distinguished implemented same-request retry protection from unverified unattended recovery.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "conformity-child-labels",
      "title": "Finish child names, labels and QR identity",
      "area": "Reports & analyses",
      "status": "queued",
      "stage": 0,
      "description": "Start the already-planned child naming and label follow-ons separately from the active Conformity grid/report integration.",
      "detail": "The agreed child-sample plan already defines the remaining work. Parent-page integration is underway, but configurable child names, child-specific labels/QRs and setting-based Conformity numbering have no verified successor pickup. Conformity investigation and PR #7211: step 1 is implemented; agreed steps 2\u20134 remain follow-ons, required before Conformity goes live.",
      "nextStep": "Recover steps 2\u20134 of the existing agreed child-sample plan and confirm pickup; do not replace step 1.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing Conformity/child-sample owners; follow-on pickup still needed",
      "meetingPriority": true,
      "scopeParentIds": [
        "conformity"
      ],
      "evidence": "Conformity investigation and PR #7211: step 1 is implemented; agreed steps 2\u20134 remain follow-ons, required before Conformity goes live.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "chromatogram-report-inclusion",
      "title": "Choose whether a report includes chromatograms",
      "area": "Data Analysis",
      "status": "queued",
      "stage": 0,
      "description": "Offer the requested simple report on/off choice. This is separate from selecting the report trace and purity-calculation trace.",
      "detail": "The call requests a simple report inclusion choice. Generating a reportable trace does not establish a working on/off control, and this requirement has no separately verified coverage. November 2 call 58:47: a simple choice for whether the customer's report needs chromatograms; existing COA display logic must be reused.",
      "nextStep": "Audit existing report/chart inclusion controls and determine whether they already satisfy the requested simple on/off choice.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing Data Analysis/COA owners; inclusion-control coverage and pickup unconfirmed",
      "meetingPriority": true,
      "scopeParentIds": [
        "data-analysis-ion-composite"
      ],
      "evidence": "November 2 call 58:47: a simple choice for whether the customer's report needs chromatograms; existing COA display logic must be reused.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "certified-certificate-extraction",
      "title": "Read proposed reference values from a certificate",
      "area": "Inventory & operations",
      "status": "queued",
      "stage": 0,
      "description": "Plan certificate reading separately from the existing CSV export, keeping staff confirmation before values are saved.",
      "detail": "Existing source evidence supports CSV export of stored lot values. Reading proposed values from a certificate was described as the next step; export progress does not establish that extraction is underway. Existing certified-imports record: October 20 CSV export built; certificate reading explicitly comes next. No current extraction implementation handback was found.",
      "nextStep": "Audit existing certificate-reading work and define the missing supported input and proposed-value review flow.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing certified-value import/export owners; certificate-reading pickup unconfirmed",
      "meetingPriority": true,
      "scopeParentIds": [
        "certified-imports"
      ],
      "evidence": "Existing certified-imports record: October 20 CSV export built; certificate reading explicitly comes next. No current extraction implementation handback was found.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "partner-supply-settlement",
      "title": "Confirm partner supply charging and settlement rules",
      "area": "Inventory & operations",
      "status": "queued",
      "stage": 0,
      "description": "Resolve partner-specific supply charges and settlement inputs separately from existing stock-sharing progress.",
      "detail": "Stock sharing and supply-charge source exist, but charging rules are placeholders and actual partner settlement/access agreements remain unconfirmed. Existing partner-inventory scope explicitly separates partly built sharing/charges from placeholder charging and unqualified settlement agreements.",
      "nextStep": "Obtain the actual partner sharing permissions, supply charging and month-end settlement agreements.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Optiq partner/commercial owners provide agreements; existing inventory/finance owners apply them",
      "meetingPriority": true,
      "scopeParentIds": [
        "partner-inventory"
      ],
      "evidence": "Existing partner-inventory scope explicitly separates partly built sharing/charges from placeholder charging and unqualified settlement agreements.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent.",
      "question": "Obtain the actual partner sharing permissions, supply charging and month-end settlement agreements.",
      "currentNotes": [
        "optiq"
      ]
    },
    {
      "id": "frontier-connection-inputs",
      "title": "Confirm Frontier test endpoints and released-data mapping",
      "area": "Client portal",
      "status": "queued",
      "stage": 0,
      "description": "Supply the endpoint and authorized data inputs the active API work needs; its local demonstration does not establish the real connection.",
      "detail": "The synthetic API package and remote-preparation work exist. The approved non-production host, exact receiver URL/path and authorized released-data mapping are separate unresolved inputs. Frontier investigation: local synthetic package exists; manager already raised endpoint inputs; real-source admission and production activation remain unproven/unapproved.",
      "nextStep": "Resolve the existing requests for approved test endpoints and an authorized small released-data mapping; do not restart the API implementation or duplicate the questions.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing API + BYOA Delivery Manager and authorized data owner; use the already-raised input requests",
      "meetingPriority": true,
      "scopeParentIds": [
        "customer-results-api"
      ],
      "evidence": "Frontier investigation: local synthetic package exists; manager already raised endpoint inputs; real-source admission and production activation remain unproven/unapproved.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent.",
      "question": "Resolve the existing requests for approved test endpoints and an authorized small released-data mapping; do not restart the API implementation or duplicate the questions.",
      "currentNotes": [
        "optiq"
      ]
    },
    {
      "id": "analyst-access-walkthrough",
      "title": "Help Scott and Laz enter results now",
      "area": "Lab operations",
      "status": "queued",
      "stage": 0,
      "description": "Start immediate access and current-workflow assistance; do not wait for the new training feature or change current identity behavior.",
      "detail": "Immediate account access and a short direct-entry walkthrough are separate from the deferred reusable training product. No completed access/walkthrough handback was verified. November 2 call 34:22\u201335:57 and 53:09\u201353:43; training plan already required immediate help to stay separate from reusable walkthrough development.",
      "nextStep": "Check Scott's and Laz's existing account access and intended permissions, without assuming they have signed in.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing Optiq support/analysis owner; immediate assistance pickup needed",
      "meetingPriority": true,
      "scopeParentIds": [
        "analysis-framework",
        "guided-analysis-training"
      ],
      "evidence": "November 2 call 34:22\u201335:57 and 53:09\u201353:43; training plan already required immediate help to stay separate from reusable walkthrough development.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "library-standard-entry-policy",
      "title": "Configure explicit standard creation and immediate use",
      "area": "Reports & analyses",
      "status": "queued",
      "stage": 0,
      "description": "Plan the settled one-run/explicit-create/immediate-use policy separately from obtaining Scott's actual run and preparation records.",
      "detail": "The policy is settled: one successful run can be enough, creation is explicit, approval is lab-configurable and current Optiq entries are usable immediately. Missing run facts do not establish that this policy is implemented. November 2 owner rulings settle policy; actual standard names, run dates and preparation facts remain separately pending. PR #6946 supplies standard marking source, not verification of this complete policy.",
      "nextStep": "Audit existing library entry and standard-qualification controls against the settled policy; reuse the all-runs intake plan.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Existing library/native-run owners; creation/use policy coverage and pickup unconfirmed",
      "meetingPriority": true,
      "scopeParentIds": [
        "spectral-reference-library",
        "empower-native-collection"
      ],
      "evidence": "November 2 owner rulings settle policy; actual standard names, run dates and preparation facts remain separately pending. PR #6946 supplies standard marking source, not verification of this complete policy.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent."
    },
    {
      "id": "net-content-method-inputs",
      "title": "Confirm Net Content methods and run-selection inputs",
      "area": "Data Analysis",
      "status": "queued",
      "stage": 0,
      "description": "Obtain the scientific method and run-selection inputs separately from the existing calculator and new inline controls.",
      "detail": "Calculation source exists, but genuine approved methods, preparation factors and applicable response-range/run-selection settings still need lab input. The recorded highest-raw-peak interpretation of in-range was explicitly left for Scott to confirm. Multi-analyte investigation found no configured Net Content method. PR #6931 records missing run-method links/ranges and Scott's unresolved in-range interpretation; PR #6889 is single-point source, not lab method approval.",
      "nextStep": "Obtain approved method/preparation details, Empower-to-LIMS method mappings, response units/ranges and confirmation of the proposed in-range rule.",
      "currentAsOf": "2026-11-02",
      "currentOwner": "Scott/Laz supply approved scientific inputs; existing method and Net Content owners apply them",
      "meetingPriority": true,
      "scopeParentIds": [
        "standard-based-net-content",
        "net-content-method-controls"
      ],
      "evidence": "Multi-analyte investigation found no configured Net Content method. PR #6931 records missing run-method links/ranges and Scott's unresolved in-range interpretation; PR #6889 is single-point source, not lab method approval.",
      "currentEvidenceBoundary": "Separate requirement/input; no inherited implementation, runtime or delivery credit from the parent.",
      "question": "Obtain approved method/preparation details, Empower-to-LIMS method mappings, response units/ranges and confirmation of the proposed in-range rule.",
      "currentNotes": [
        "optiq"
      ]
    }
  ],
  "updates": {
    "data-analysis-ion-signal-match": {
      "evidence": "Requirement audit: PR #7263 is now MERGED on the Optiq release line. It includes the recorded Data Analysis chain; merge does not establish installation, final combined acceptance, or coverage of additional selectors/inclusion controls. Earlier snapshots remain in history.",
      "currentAsOf": "2026-11-02"
    },
    "data-analysis-spectrum-smoothing": {
      "evidence": "Requirement audit: PR #7263 is now MERGED on the Optiq release line. It includes the recorded Data Analysis chain; merge does not establish installation, final combined acceptance, or coverage of additional selectors/inclusion controls. Earlier snapshots remain in history.",
      "currentAsOf": "2026-11-02"
    },
    "data-analysis-ion-composite": {
      "evidence": "Requirement audit: PR #7263 is now MERGED on the Optiq release line. It includes the recorded Data Analysis chain; merge does not establish installation, final combined acceptance, or coverage of additional selectors/inclusion controls. Earlier snapshots remain in history.",
      "currentAsOf": "2026-11-02"
    },
    "data-analysis-stable-ion-table": {
      "evidence": "Requirement audit: PR #7263 is now MERGED on the Optiq release line. It includes the recorded Data Analysis chain; merge does not establish installation, final combined acceptance, or coverage of additional selectors/inclusion controls. Earlier snapshots remain in history.",
      "currentAsOf": "2026-11-02"
    },
    "data-analysis-batches": {
      "evidence": "Requirement audit: PR #7263 is now MERGED on the Optiq release line. It includes the recorded Data Analysis chain; merge does not establish installation, final combined acceptance, or coverage of additional selectors/inclusion controls. Earlier snapshots remain in history.",
      "currentAsOf": "2026-11-02"
    }
  },
  "executionPlans": {
    "net-content-method-controls": {
      "state": "needs-plan",
      "why": "The single-point calculation and per-result value override exist. That does not establish lab defaults, inline standard/run-selection changes, or saving a permitted change back to a method.",
      "owner": "Existing Data Analysis/Net Content owners; additional settings scope has no confirmed pickup",
      "steps": [
        "Audit the current settings and one-off controls; define only missing lab defaults, per-sample/per-peptide changes and permission-controlled method updates.",
        "Specify both update options already agreed by Mike, and retain the exact method, standard, inputs and override used by each historical result.",
        "Confirm pickup and prove one-off versus method updates, denied permission, save/reopen and unchanged historical results."
      ],
      "done": "The agreed defaults and inline change paths work without menu diving; one-off changes and authorized method updates have distinct, retained effects."
    },
    "authenticated-order-handoff": {
      "state": "needs-plan",
      "why": "The public widget and signed-in saved-product wizard are separate paths. The investigation did not establish their completed authenticated handoff or a safe account identity for invoice eligibility.",
      "owner": "Existing website, portal and checkout owners; bridge implementation pickup unconfirmed",
      "steps": [
        "Map the existing public and signed-in paths; define the missing handoff and verified-customer/invoice eligibility behavior.",
        "Reuse current cart, draft and My Products contracts while preserving customer boundaries and intended portal access.",
        "Confirm pickup and prove new and saved-product orders, sign-in transitions, existing drafts and refusal of another customer's account access."
      ],
      "done": "Customers can use the agreed new-order and saved-product paths with the correct authenticated identity and retained order details."
    },
    "account-price-resolution": {
      "state": "needs-plan",
      "why": "The display policy is settled, but the inspected public price resolver has no account input. Sandbox payment success does not establish configured customer pricing across all surfaces.",
      "owner": "Existing pricing and checkout owners; account-pricing implementation pickup unconfirmed",
      "steps": [
        "Audit current account-price support and plan the missing authenticated price resolution across website, cart, saved products, checkout and billing.",
        "Use one confirmed catalogue and the account rules supplied through the separate commercial-input item.",
        "Confirm pickup and prove two accounts, guest prices, changed totals and matching order/payment/accounting amounts."
      ],
      "done": "Guests see public prices and signed-in customers see their configured prices consistently, without access to another account's prices."
    },
    "operational-checkout-accounting": {
      "state": "needs-plan",
      "why": "The sandbox recorder creates QuickBooks invoice/payment entries but deliberately writes no operational LIMS invoice/receipt rows and refuses production recording. A switch change cannot finish that connection.",
      "owner": "Existing finance/checkout owners; operational accounting plan and pickup unconfirmed",
      "steps": [
        "Recover the existing finance handoff and define the minimum order/payment/LIMS/QuickBooks linkage and recording responsibilities.",
        "Separate this required accounting increment from lower-priority status-sync enhancements and retain existing writes-off boundaries.",
        "Confirm pickup and prove one linked set of synthetic records per transaction, correct totals and recoverable provider failures before preparing activation."
      ],
      "done": "An accepted order/payment has the agreed operational and provider records linked consistently, with visible recoverable discrepancies and no duplicates."
    },
    "unattended-payment-recovery": {
      "state": "needs-plan",
      "why": "Same-request retries and duplicate-charge protection exist. Recovery after the customer leaves, pending capture, or failed accounting was not established; the named reconciler was not located in the inspected source.",
      "owner": "Existing checkout/finance owners; unattended-recovery plan and pickup unconfirmed",
      "steps": [
        "Locate any existing recovery implementation and define only the missing closed-browser, pending-capture and accounting-failure transitions.",
        "Specify durable recovery ownership, staff visibility and retry boundaries using existing order/payment identities.",
        "Confirm pickup and prove closed-tab, timeout and provider-failure cases with synthetic transactions and no second order, charge or accounting entry."
      ],
      "done": "The transaction reaches a truthful final or staff-action state after the browser disappears, with recoverable exceptions and no duplicate financial records."
    },
    "conformity-child-labels": {
      "state": "needs-start",
      "why": "The agreed child-sample plan already defines the remaining work. Parent-page integration is underway, but configurable child names, child-specific labels/QRs and setting-based Conformity numbering have no verified successor pickup.",
      "owner": "Existing Conformity/child-sample owners; follow-on pickup still needed",
      "steps": [
        "Recover steps 2\u20134 of the existing agreed child-sample plan and confirm pickup; do not replace step 1.",
        "Implement lab-configured child naming, each child's own label/QR identity and Conformity numbering from that setting, preserving client-entered vial names.",
        "Prove named child creation, label scan resolution and order-to-result-to-report identity together before Conformity activation."
      ],
      "done": "Each child is named and scannable as itself under the lab setting; client vial names and parent/result/report associations remain correct."
    },
    "chromatogram-report-inclusion": {
      "state": "needs-plan",
      "why": "The call requests a simple report inclusion choice. Generating a reportable trace does not establish a working on/off control, and this requirement has no separately verified coverage.",
      "owner": "Existing Data Analysis/COA owners; inclusion-control coverage and pickup unconfirmed",
      "steps": [
        "Audit existing report/chart inclusion controls and determine whether they already satisfy the requested simple on/off choice.",
        "If coverage is missing, define the smallest reuse of existing report settings, independent of source selection and scientific calculations.",
        "Confirm any implementation pickup and prove included/excluded PDF and digital reports without changing stored purity, identity or source evidence."
      ],
      "done": "The analyst can include or omit the intended chart in the report without changing its scientific calculation or saved evidence."
    },
    "certified-certificate-extraction": {
      "state": "needs-plan",
      "why": "Existing source evidence supports CSV export of stored lot values. Reading proposed values from a certificate was described as the next step; export progress does not establish that extraction is underway.",
      "owner": "Existing certified-value import/export owners; certificate-reading pickup unconfirmed",
      "steps": [
        "Audit existing certificate-reading work and define the missing supported input and proposed-value review flow.",
        "Reuse lot, unit and certified-value storage; require staff confirmation before saving extracted values.",
        "Confirm pickup and prove a representative certificate through review, correction, correct lot/value/unit storage and export."
      ],
      "done": "Staff can review and correct certificate-derived proposals before they become the correct lot's stored values."
    },
    "partner-supply-settlement": {
      "state": "needs-information",
      "why": "Stock sharing and supply-charge source exist, but charging rules are placeholders and actual partner settlement/access agreements remain unconfirmed.",
      "owner": "Optiq partner/commercial owners provide agreements; existing inventory/finance owners apply them",
      "steps": [
        "Obtain the actual partner sharing permissions, supply charging and month-end settlement agreements.",
        "Map the confirmed inputs to the existing stock/balance source and identify only missing implementation.",
        "Verify allowed/denied access and a synthetic purchase-to-balance-to-invoice example before use."
      ],
      "done": "The agreed partner rules are recorded and the supply balances and settlement reflect them consistently."
    },
    "frontier-connection-inputs": {
      "state": "needs-information",
      "why": "The synthetic API package and remote-preparation work exist. The approved non-production host, exact receiver URL/path and authorized released-data mapping are separate unresolved inputs.",
      "owner": "Existing API + BYOA Delivery Manager and authorized data owner; use the already-raised input requests",
      "steps": [
        "Resolve the existing requests for approved test endpoints and an authorized small released-data mapping; do not restart the API implementation or duplicate the questions.",
        "Bind company, SKU, physical lot, panel and released version/PDF to source-checked fields using the current contract.",
        "Let the existing owner qualify the connection and prepare separately approved external/production activation."
      ],
      "done": "The existing API owner has the approved endpoint and source inputs needed for the bounded remote/real-source qualification."
    },
    "analyst-access-walkthrough": {
      "state": "needs-start",
      "why": "Immediate account access and a short direct-entry walkthrough are separate from the deferred reusable training product. No completed access/walkthrough handback was verified.",
      "owner": "Existing Optiq support/analysis owner; immediate assistance pickup needed",
      "steps": [
        "Check Scott's and Laz's existing account access and intended permissions, without assuming they have signed in.",
        "Walk through the currently available result-entry workflow with safe practice data, and record any concrete blocker for its existing owner.",
        "Confirm they can return to that workflow independently; keep future reusable training tracked separately."
      ],
      "done": "Both analysts can access and use the current intended workflow, or any specific permission/product blocker has a confirmed owner and next action."
    },
    "library-standard-entry-policy": {
      "state": "needs-plan",
      "why": "The policy is settled: one successful run can be enough, creation is explicit, approval is lab-configurable and current Optiq entries are usable immediately. Missing run facts do not establish that this policy is implemented.",
      "owner": "Existing library/native-run owners; creation/use policy coverage and pickup unconfirmed",
      "steps": [
        "Audit existing library entry and standard-qualification controls against the settled policy; reuse the all-runs intake plan.",
        "Define only missing explicit creation, retained instrument/calculation evidence and granular lab approval/use settings.",
        "Confirm pickup and prove one-run creation, Optiq immediate use, a lab requiring approval, and on-demand reuse without changing historical calculations."
      ],
      "done": "An explicitly created, sufficiently evidenced entry follows the lab's configured approval/use policy and is reusable on demand."
    },
    "net-content-method-inputs": {
      "state": "needs-information",
      "why": "Calculation source exists, but genuine approved methods, preparation factors and applicable response-range/run-selection settings still need lab input. The recorded highest-raw-peak interpretation of in-range was explicitly left for Scott to confirm.",
      "owner": "Scott/Laz supply approved scientific inputs; existing method and Net Content owners apply them",
      "steps": [
        "Obtain approved method/preparation details, Empower-to-LIMS method mappings, response units/ranges and confirmation of the proposed in-range rule.",
        "Reconcile those inputs with existing single-point, blend and per-run selection source, without inventing method approval or a calibration curve.",
        "Qualify representative ordinary, exceptional-preparation and diluted/undiluted cases under the accepted configuration."
      ],
      "done": "The implementation uses documented, accepted method and preparation/run-selection inputs, with historical calculation evidence retained."
    },
    "invoice-status": {
      "state": "needs-plan",
      "why": "Invoice statuses exist in live Orders. The requested Uninvoiced shortcut and authoritative invoice coverage have not been verified as active implementation.",
      "owner": "Existing Invoice statuses: live; Uninvoiced filter remains owner; current pickup needs confirmation",
      "steps": [
        "Recover the current shortcut/filter source and define the missing button using authoritative invoice coverage.",
        "Confirm pickup and prove the correct uninvoiced rows and preservation of existing invoice statuses."
      ],
      "done": "The agreed shortcut filters the correct rows using existing invoice data, with current browser proof."
    },
    "scan-intake": {
      "state": "needs-plan",
      "why": "The retained scan/review/receipt scope lacks current complete source/acceptance and pickup evidence; an older working label cannot establish current work.",
      "owner": "Existing Scan, review, and receive samples owner; current pickup needs confirmation",
      "steps": [
        "Recover the installed scan-to-review-to-receipt path and its existing proof; identify only missing steps and workstation dependencies.",
        "Confirm a bounded pickup and prove provisional drop-off versus explicit staff-verified receipt without automatic receiving."
      ],
      "done": "The retained workflow and explicit receipt boundary are proven on the current candidate."
    },
    "live-vial-count": {
      "state": "needs-plan",
      "why": "This optional Amount required improvement has no current complete implementation/pickup handback; it must not inherit website progress.",
      "owner": "Existing Show vial requirements while choosing tests owner; current pickup needs confirmation",
      "steps": [
        "Audit existing vial-count rules and define the missing live Amount required display using the confirmed test/package requirements.",
        "Confirm pickup if prioritized and prove count changes without adding mandatory inputs."
      ],
      "done": "The optional display correctly updates required vials per lot while preserving ordinary ordering; it is not made a launch blocker."
    },
    "intake-attention-notices": {
      "state": "needs-plan",
      "why": "The request/reply/resolution workflow was scheduled after coming releases. A historic working label does not verify active implementation of its missing links.",
      "owner": "Existing Action Required: intake photos and client portal replies owner; current pickup needs confirmation",
      "steps": [
        "Recover the existing sample-specific request/reply source and identify the remaining bounded links and current pickup.",
        "Prove staff request, client reply and explicit staff resolution with retained sample history and unchanged unrelated sample progress."
      ],
      "done": "The specific workflow is proven and ready under the existing permissions; generic Action Required notices remain suppressed."
    },
    "certified-imports": {
      "state": "needs-plan",
      "why": "Stored-value CSV export has source progress, but current finishing pickup and a complete export round-trip are unverified. Certificate reading now has its own Needs a plan item.",
      "owner": "Existing Export and import certified lot values owner; current pickup needs confirmation",
      "steps": [
        "Recover the existing CSV export and identify only missing lot/value/unit export behavior and current pickup.",
        "Prove a synthetic stored-value CSV export/round-trip; coordinate separately with the planned certificate-reading increment."
      ],
      "done": "Existing stored lot values export accurately with current proof; unstarted certificate extraction receives no progress credit."
    },
    "standard-based-net-content": {
      "state": "in-progress",
      "why": "Existing single-point/blend calculation and retained-record source remain in progress. Inline defaults/method updates and approved method/run-selection inputs have separate work states.",
      "owner": "Existing MacBook Claude Net Content workers; retain the current implementation",
      "steps": [
        "Reconcile the existing calculator, blend/per-peptide runs and standard-marking source with the intended candidate.",
        "Coordinate with the separately planned method controls and pending scientific inputs; do not count those requirements as implemented.",
        "Prove the existing calculation path through analyst save and PDF/digital COA, including the actual accepted preparation factors."
      ],
      "done": "The existing calculator is integrated and qualified using accepted inputs; separate method controls are independently tracked."
    },
    "portal-price-visibility": {
      "state": "in-progress",
      "why": "Website/services and sandbox checkout source remain in progress. Authenticated handoff, account pricing, operational accounting and unattended recovery each now need their own plan.",
      "owner": "Existing Claude website/checkout contributors; package-wide pickup must be confirmed",
      "steps": [
        "Retain the current website and sandbox checkout contributors and confirm package-wide pickup.",
        "Coordinate the separately planned handoff, account prices, operational accounting and unattended recovery with the pending commercial catalogue.",
        "Qualify the resulting coordinated package and Laz/staff walkthrough before preparing release."
      ],
      "done": "The existing site/checkout increment is qualified; release of the complete package also requires its separately tracked increments and inputs."
    },
    "my-products-disabled": {
      "state": "in-progress",
      "why": "The existing saved-product redesign/ports remain in progress. That progress does not cover the separately planned authenticated handoff and account-price resolution.",
      "owner": "Existing Claude My Products and portal owners",
      "steps": [
        "Recover and complete the existing retained redesign/ports without losing company isolation, drafts or off-state controls.",
        "Coordinate the separate handoff and pricing plans with the website/checkout package.",
        "Prove the resulting own-company product/new-lot/reorder journey before preparing activation."
      ],
      "done": "The existing saved-product increment is qualified, with its additional pricing/handoff dependencies independently tracked."
    },
    "conformity": {
      "state": "in-progress",
      "why": "The current grid/report integration and reviewed companions remain in progress. Agreed child names, labels/QRs and lab-setting numbering are separately Needs to be started.",
      "owner": "Active MacBook Claude conformity worker/coordinator; final delivery pickup must be confirmed",
      "steps": [
        "Complete the current grid/report integration and required reviewed companions while preserving client vial names and existing holds.",
        "Coordinate pickup of the separately tracked child identity/label follow-ons and required lab settings.",
        "Qualify the combined order-to-vial-to-result-to-report journey before preparing activation."
      ],
      "done": "The existing integration is qualified; child identity/label follow-ons and release holds remain independently visible until resolved."
    },
    "data-analysis-ion-composite": {
      "state": "in-progress",
      "why": "The assigned-ion signal/report source and Data Analysis integration remain in progress. Independent report-versus-purity source selection and report inclusion controls are separately Needs a plan.",
      "owner": "Existing MacBook Claude Data Analysis workers; confirm one owner through release",
      "steps": [
        "Reconcile the existing assigned-ion/report source and Data Analysis chain, preserving scientific evidence and approved COA display logic.",
        "Coordinate the separate source-selector and report-inclusion plans without giving them inherited progress credit.",
        "Prove saved traces and the correct purity/identity/report paths on the actual candidate and prepare the independent chromatogram release."
      ],
      "done": "The existing trace/report source is qualified; separate selector and inclusion requirements retain their own completion criteria."
    },
    "customer-results-api": {
      "state": "in-progress",
      "why": "The existing synthetic API package, local integration and remote preparation remain in progress. Endpoint approval and authorized real-data mapping are separate Requires more information inputs.",
      "owner": "Mac mini Codex \u2014 Continue Frontier results API; API + BYOA Delivery Manager",
      "steps": [
        "Reuse the existing developer package and reconcile current contract/review heads.",
        "Continue bounded remote preparation and recovery qualification with the existing owner, using the separately requested endpoint/data inputs.",
        "Prepare real-source qualification and separately approved partner/production activation."
      ],
      "done": "The existing API increment has current evidence and an activation package; unprovided endpoint/data inputs receive no completion credit."
    }
  },
  "readerUpdates": {
    "net-content-method-controls": {
      "title": "Change quantity-test settings while reviewing results",
      "summary": "Let staff use the lab’s usual settings or make an allowed change for one sample.",
      "nextStep": "Our team will check the existing controls and finish any missing settings."
    },
    "authenticated-order-handoff": {
      "title": "Keep an order when a customer signs in",
      "summary": "Keep the customer’s selected tests and saved order as they move from the website to their account.",
      "nextStep": "Our team will check the full sign-in and ordering journey and finish any missing steps."
    },
    "account-price-resolution": {
      "title": "Use the right customer price throughout an order",
      "summary": "Show each customer their agreed prices in the cart, checkout and invoice.",
      "nextStep": "Our team will check that the same prices and discounts apply at every step."
    },
    "operational-checkout-accounting": {
      "title": "Record checkout payments in QuickBooks",
      "summary": "Connect the customer’s order, payment and accounting records.",
      "nextStep": "Our team will finish the connection and check that orders and payments are recorded correctly."
    },
    "unattended-payment-recovery": {
      "title": "Finish recording a payment after the customer leaves",
      "summary": "Keep track of payments even if the customer closes the browser, without charging twice.",
      "nextStep": "Our team will check interrupted payments and finish any missing recovery steps."
    },
    "conformity-child-labels": {
      "title": "Keep each vial’s name and label together",
      "summary": "Preserve the customer’s vial names and link each vial to the right label and scannable code.",
      "nextStep": "Our team will finish the planned naming and label work alongside the vial-testing screens."
    },
    "chromatogram-report-inclusion": {
      "title": "Choose whether test charts appear on a certificate",
      "summary": "Let staff include or leave out the instrument charts on a report.",
      "nextStep": "Our team will check the existing report options and add this choice if it is missing."
    },
    "certified-certificate-extraction": {
      "title": "Read reference values from a supplier’s certificate",
      "summary": "Suggest values from a reference-material certificate for staff to check before saving.",
      "nextStep": "Our team will check existing document-reading tools and plan the remaining work."
    },
    "partner-supply-settlement": {
      "title": "Work out charges for supplies shared with partner labs",
      "summary": "The charging and payment arrangements need to match the partner agreements.",
      "nextStep": "Our team will review the existing agreements and list any specific missing business decision before asking Optiq."
    },
    "frontier-connection-inputs": {
      "title": "Arrange a test connection with Frontier",
      "summary": "Our team needs to agree where Frontier will receive test results and how the information should be sent.",
      "nextStep": "Our integration team will follow up on the existing requests with Frontier and the person authorised to approve data sharing."
    },
    "analyst-access-walkthrough": {
      "title": "Help Scott and Laz enter results now",
      "summary": "Help them use their existing accounts and the current results screens.",
      "nextStep": "Our team will check their access and walk them through entering results."
    },
    "library-standard-entry-policy": {
      "title": "Save and reuse a reference test",
      "summary": "Allow staff to save a successful reference test and use it in later calculations, as already agreed.",
      "nextStep": "Our team will check the existing controls and finish any missing steps."
    },
    "net-content-method-inputs": {
      "title": "Use the lab’s approved quantity-testing procedure",
      "summary": "Calculations need the correct preparation details and rules for choosing suitable measurements.",
      "nextStep": "Our team will collect the existing procedures and ask Scott only for missing records or unresolved scientific choices."
    },
    "portal-price-visibility": {
      "title": "Order and pay through the website",
      "summary": "The website and trial checkout are being built. Customers should be able to sign in, keep their order and pay the right price.",
      "nextStep": "Our team will finish and test the complete ordering journey using the lab’s confirmed prices."
    },
    "standard-based-net-content": {
      "title": "Calculate how much material is in a sample",
      "summary": "Compare the sample with a known reference and account for how both were prepared.",
      "nextStep": "Our team will check the calculations through to the final certificate using approved lab procedures."
    },
    "my-products-disabled": {
      "title": "Finish ordering from saved products",
      "summary": "Let customers order again from saved product details using their account prices.",
      "nextStep": "Our team will finish the connection to the cart and check saved products, new batches and prices."
    },
    "conformity": {
      "title": "Finish testing and reporting each vial",
      "summary": "Work is underway to keep each vial’s name, results and certificate together.",
      "nextStep": "Our team will finish the screens and labels, then check an order all the way through to its report."
    },
    "data-analysis-ion-composite": {
      "title": "Automatically prepare purity and identity charts",
      "summary": "Prepare the instrument charts used to assess purity and identify a substance. This is the first priority.",
      "nextStep": "Our team will check that the correct charts are saved, reopened and shown on certificates."
    },
    "customer-results-api": {
      "title": "Send approved results to Frontier",
      "summary": "The connection has been demonstrated with made-up data. It still needs checking with Frontier before use.",
      "nextStep": "Our integration team will arrange the test connection and check that the right results reach Frontier."
    },
    "certified-imports": {
      "title": "Export saved reference-material values",
      "summary": "Let staff download values already stored for reference materials.",
      "nextStep": "Our team will finish checking the download. Reading values from a supplier’s certificate is separate work."
    },
    "invoice-status": {
      "title": "See which orders still need an invoice",
      "summary": "Invoice statuses are already visible. A shortcut for orders without invoices is still missing.",
      "nextStep": "Our team will check the existing filters and finish the missing shortcut."
    },
    "live-vial-count": {
      "title": "Show how many vials are needed",
      "summary": "An optional order display would tell customers how many vials to send.",
      "nextStep": "Our team will check the package quantities and plan the display."
    },
    "scan-intake": {
      "title": "Scan and check arriving samples",
      "summary": "Help staff scan arriving samples, check the details and confirm receipt.",
      "nextStep": "Our team will check the existing steps and finish what is missing."
    },
    "intake-attention-notices": {
      "title": "Ask clients about unclear or unlabelled samples",
      "summary": "Let staff ask about a specific sample and keep the customer’s reply with it.",
      "nextStep": "Our team will finish checking the question, reply and resolution steps."
    },
    "partner-inventory": {
      "title": "Share stock information with partner labs",
      "summary": "Some stock-sharing and supply-balance features are built. Charges must follow the partner agreements.",
      "nextStep": "Our team will check access and balances, and review the agreements before requesting any missing decisions."
    },
    "spectral-reference-library": {
      "title": "Save reference tests for later comparisons",
      "summary": "Use known reference materials to help interpret later sample results.",
      "nextStep": "Our team will locate Scott’s tests and preparation records, then finish saving and selecting them."
    }
  },
  "outcomes": {
    "conformity": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [
        "conformity-child-labels"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "inspection-rules": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "verify-results-font": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "spectral-reference-library": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [
        "library-standard-entry-policy"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "fentanyl-results": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "coa-summary-layout": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "receipt-emails": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "invoice-status": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Remaining work receives its own conservative work state; no inferred active implementation."
    },
    "frozen-sort": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "receiving-tables": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "lot-number": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "printed-labels": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "client-scrolling": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "grid-widths": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "inventory-release": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "iu-units": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "preview-performance": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "sop-documents": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "partner-inventory": {
      "retainedDeliveryStatus": "working",
      "separateRequirementIds": [
        "partner-supply-settlement"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "manufacturer-profiles": {
      "retainedDeliveryStatus": "deferred",
      "separateRequirementIds": [],
      "disposition": "Retain the existing deferred/rejected/handled ruling; not promoted into active launch scope."
    },
    "client-bulk-white-label": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "blend-potency": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "photo-reliability": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "scan-intake": {
      "retainedDeliveryStatus": "working",
      "separateRequirementIds": [],
      "disposition": "Remaining work receives its own conservative work state; no inferred active implementation."
    },
    "certified-imports": {
      "retainedDeliveryStatus": "working",
      "separateRequirementIds": [
        "certified-certificate-extraction"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "retained-intent": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "intake-identity": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "analysis-framework": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [
        "analyst-access-walkthrough"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "purchasing-core": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "reporting-method-drafts": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "staff-scan-access": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "multi-lab-login": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "shared-feature-tracker": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "missing-order-recovery": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "net-content-undo": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "bulk-coa-amendments": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "pda-peak-default": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "native-empower-charts": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "empower-native-collection": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [
        "library-standard-entry-policy"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "inventory-follow-ups": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "purchasing-status-words": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "purchase-history-forecast": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "water-sample-type": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "order-submit-retry": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [
        "unattended-payment-recovery"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "white-label-attestation": {
      "retainedDeliveryStatus": "deferred",
      "separateRequirementIds": [],
      "disposition": "Retain the existing deferred/rejected/handled ruling; not promoted into active launch scope."
    },
    "white-label-photo-vials": {
      "retainedDeliveryStatus": "deferred",
      "separateRequirementIds": [],
      "disposition": "Retain the existing deferred/rejected/handled ruling; not promoted into active launch scope."
    },
    "white-label-missing-vials": {
      "retainedDeliveryStatus": "deferred",
      "separateRequirementIds": [],
      "disposition": "Retain the existing deferred/rejected/handled ruling; not promoted into active launch scope."
    },
    "white-label-required-lot": {
      "retainedDeliveryStatus": "deferred",
      "separateRequirementIds": [],
      "disposition": "Retain the existing deferred/rejected/handled ruling; not promoted into active launch scope."
    },
    "client-create-invite": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "public-signup-approval": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [
        "authenticated-order-handoff"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "portal-price-visibility": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [
        "authenticated-order-handoff",
        "account-price-resolution",
        "operational-checkout-accounting",
        "unattended-payment-recovery"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "panel-presets": {
      "retainedDeliveryStatus": "deferred",
      "separateRequirementIds": [],
      "disposition": "Retain the existing deferred/rejected/handled ruling; not promoted into active launch scope."
    },
    "live-vial-count": {
      "retainedDeliveryStatus": "working",
      "separateRequirementIds": [],
      "disposition": "Remaining work receives its own conservative work state; no inferred active implementation."
    },
    "unresolved-client-orders": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "net-content-per-vial": {
      "retainedDeliveryStatus": "deferred",
      "separateRequirementIds": [],
      "disposition": "Retain the existing deferred/rejected/handled ruling; not promoted into active launch scope."
    },
    "coa-status-language": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "partner-sample-routing": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "intake-attention-notices": {
      "retainedDeliveryStatus": "working",
      "separateRequirementIds": [],
      "disposition": "Remaining work receives its own conservative work state; no inferred active implementation."
    },
    "shared-lims-priorities": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "hubspot-onboarding": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "customer-qr-labels": {
      "retainedDeliveryStatus": "deferred",
      "separateRequirementIds": [],
      "disposition": "Retain the existing deferred/rejected/handled ruling; not promoted into active launch scope."
    },
    "coa-tamper-evidence": {
      "retainedDeliveryStatus": "deferred",
      "separateRequirementIds": [],
      "disposition": "Retain the existing deferred/rejected/handled ruling; not promoted into active launch scope."
    },
    "tablet-sample-type": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "coa-spectrum-interpretation": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "submission-matrix-save-parity": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "stale-tab-refresh": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "stable-released-coa-links": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "coa-automatic-ion-interpretation": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "quickbooks-status-sync": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [
        "operational-checkout-accounting"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "optiq-billing-rules": {
      "retainedDeliveryStatus": "optiq",
      "separateRequirementIds": [
        "account-price-resolution"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "coa-oct14-mockups": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "sample-details-documents": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "inventory-receiving-defaults": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "chemical-components-grid-stability": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "sample-order-client-messaging": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "sample-storage-multi-lab": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "reporting-hub-pagination": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "lab-photo-sort": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "ordered-test-search": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "sample-status-audit": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "stacked-filter-views": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "lab-specific-filter-views": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "custom-filter-view-audit": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "trusted-white-label-approval": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "internal-document-checks": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "result-entry-permission-profiles": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "customer-results-api": {
      "retainedDeliveryStatus": "working",
      "separateRequirementIds": [
        "frontier-connection-inputs"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "boarding-pass-parity": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "abandoned-order-reminders": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "public-coa-access-hardening": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "white-label-printed-lookup": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "guided-analysis-training": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [
        "analyst-access-walkthrough"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "iso-mode-controls": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "chromatogram-source-selection": {
      "retainedDeliveryStatus": "queued",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "data-analysis-demo-review": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "standard-based-net-content": {
      "retainedDeliveryStatus": "built",
      "separateRequirementIds": [
        "net-content-method-controls",
        "net-content-method-inputs"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "data-analysis-batches": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "automatic-analysis-evidence": {
      "retainedDeliveryStatus": "check",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "white-label-release-emails": {
      "retainedDeliveryStatus": "built",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "measured-microbiology-results": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "lc-method-deletion": {
      "retainedDeliveryStatus": "complete",
      "separateRequirementIds": [],
      "disposition": "Retain recorded completion for the original scope; no new requirement is given inherited completion credit."
    },
    "data-analysis-ion-signal-match": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "data-analysis-spectrum-smoothing": {
      "retainedDeliveryStatus": "built",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "data-analysis-ion-composite": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [
        "chromatogram-report-inclusion"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "data-analysis-stable-ion-table": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing requirement-specific classification and evidence boundary."
    },
    "my-products-disabled": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [
        "authenticated-order-handoff",
        "account-price-resolution"
      ],
      "disposition": "Additional requirement/input split out; existing source/delivery history retained."
    },
    "compact-sample-photo-clarity": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "optiq-dark-branding": {
      "retainedDeliveryStatus": "built",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "reporting-hub-edit-safety": {
      "retainedDeliveryStatus": "built",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "client-portal-coa-shortcuts": {
      "retainedDeliveryStatus": "built",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "client-facing-clarity": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "order-validation-clarity": {
      "retainedDeliveryStatus": "partial",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    },
    "optiq-blue-accent": {
      "retainedDeliveryStatus": "working",
      "separateRequirementIds": [],
      "disposition": "Retain the existing bounded scope and recorded delivery status; no additional committed requirement identified in this audit."
    }
  }
};
window.OPTIQ_REVIEW.additions.push(...window.OPTIQ_SCOPE_AUDIT.additions);
Object.assign(window.OPTIQ_EXECUTION_PLAN.items, window.OPTIQ_SCOPE_AUDIT.executionPlans);

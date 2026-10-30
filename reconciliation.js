'use strict';
// Dated reconciliation overlays the prior review; source records and earlier decisions stay intact.
window.OPTIQ_RECONCILIATION = {
  "date": "2026-10-30",
  "checklistCommit": "29d0692ef5ea62200049888f52f7bc61b8170aa4",
  "checklistUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
  "updates": {
    "frozen-sort": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "status": "complete",
      "stage": 3,
      "detail": "Rows keep their position while staff edit, save or encounter a save failure. An explicit refresh or sort reorders them. The row-stability repair is installed; the earlier unassigned implementation step is closed.",
      "nextStep": "Delivered in Optiq’s installed release. Track any new request separately.",
      "currentOwner": "Original feature owner + Optiq deployment owner",
      "evidence": "PR #6904 is recorded installed and verified in release 55daac (30 October), with required release CI, independent review and retained affected-path proof.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6904
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    },
    "printed-labels": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "status": "complete",
      "stage": 3,
      "detail": "Both label-printing screens retain the saved choice of test symbols, three-letter test names or both. The label-design database update and reviewed implementation are installed.",
      "nextStep": "Delivered in Optiq’s installed release. Track any new request separately.",
      "currentOwner": "Original feature owner + Optiq deployment owner",
      "evidence": "PR #6905 is recorded installed and verified in release 55daac (30 October), with required release CI, independent review and retained affected-path proof.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6905
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    },
    "net-content-undo": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "title": "Net Content editing, copy/fill and Undo",
      "status": "complete",
      "stage": 3,
      "detail": "The previously delivered amount/unit editing and copy/fill behavior is retained. Undo now restores both the value and unit after drag-fill, including save/reload. This closes the remaining Undo scope; automatic standard-based Net Content and blend calculations are separate held work.",
      "nextStep": "Delivered in Optiq’s installed release. Track any new request separately.",
      "currentOwner": "Original feature owner + Optiq deployment owner",
      "evidence": "PR #6891 is recorded installed and verified in release 55daac (30 October), with required release CI, independent review and retained affected-path proof.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6891
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      },
      "description": "Edit and copy/fill Net Content amounts and units, with Undo restoring both through save/reload."
    },
    "retained-intent": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "title": "Recover archived portal requests",
      "status": "complete",
      "stage": 3,
      "detail": "Receiving has Active and Archived views with the 30-day boundary, stable paging through older orders and access to the existing request details and receiving actions. Original submission information remains recoverable. The retained boundary and paging proof covers the installed implementation.",
      "nextStep": "Delivered in Optiq’s installed release. Track any new request separately.",
      "currentOwner": "Original feature owner + Optiq deployment owner",
      "evidence": "PR #6903 is recorded installed and verified in release 55daac (30 October), with required release CI, independent review and retained affected-path proof.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6903
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    },
    "stale-tab-refresh": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "status": "complete",
      "stage": 3,
      "detail": "The application-version notice, unsaved-work reminder and explicit Keep working / Reload behavior are delivered. Recovered eight-case browser proof and the original notice/modal sources match the installed release. Reporting Hub stale-save guards and preservation of edited drafts are also installed; the old test-environment install step is closed.",
      "nextStep": "Delivered in Optiq’s installed release. Track any new request separately.",
      "currentOwner": "Original feature owner + Optiq deployment owner",
      "evidence": "30 October source reconciliation recovered the original application-version notice/modal and eight-case proof and matched them byte-for-byte to installed release 55daac. PR #6900 separately delivers the Reporting Hub stale-save guards; it is not the source of the version notice.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6900
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    },
    "inventory-receiving-defaults": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "title": "PO receiving defaults and full or partial receipts",
      "status": "complete",
      "stage": 3,
      "detail": "Known purchasing units, order quantities, storage defaults and shelf-life suggestions are available with staff overrides. Retained browser/API/database proof covers full and partial receipts, over-receipt rejection and completion of the remaining balance. Receipt date follows the server’s existing behavior; any change to the lab’s back-dating policy remains an operations decision.",
      "nextStep": "Delivered in Optiq’s installed release. Track any new request separately.",
      "currentOwner": "Original feature owner + Optiq deployment owner",
      "evidence": "PR #6896 is recorded installed and verified in release 55daac (30 October), with required release CI, independent review and retained affected-path proof.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6896
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    },
    "chemical-components-grid-stability": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "status": "complete",
      "stage": 3,
      "detail": "The fractional-zoom fit-to-width repair and readable empty-grid message are installed. Retained browser proof covers adding, editing, tabbing, hovering and empty/nonempty transitions across widths and zoom levels.",
      "nextStep": "Delivered in Optiq’s installed release. Track any new request separately.",
      "currentOwner": "Original feature owner + Optiq deployment owner",
      "evidence": "PR #6897 is recorded installed and verified in release 55daac (30 October), with required release CI, independent review and retained affected-path proof.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6897
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    },
    "public-coa-access-hardening": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "status": "complete",
      "stage": 3,
      "detail": "Public certificate enumeration protections shipped in the approved 29 October release, preserving existing printed QR and token access. The earlier urgent repair and installation steps are closed.",
      "nextStep": "Delivered. Keep new certificate-access or printed-number activation work in its own item.",
      "currentOwner": "COA access owner + Optiq deployment owner",
      "evidence": "PR #6841 is recorded live in release 1129 on 29 October after required CI, review, affected-worker readiness and queue resume.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "1129f3b7cf094f5d22942b995d2f3214dc9dfef0",
        "prs": [
          6841
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    },
    "fentanyl-results": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "status": "complete",
      "stage": 3,
      "detail": "Fentanyl remains an ordinary orderable test with manual result entry, independent review and the agreed Immunoassay method and <10 ng/mL specification. The latest COA wording uses Detected / Not detected for Result while the verdict badge retains Pass / Fail. The wording repair is installed.",
      "nextStep": "Delivered; retain the lab’s independent review and analysis lifecycle controls.",
      "currentOwner": "Fentanyl/COA owner + Optiq deployment owner",
      "evidence": "Original activation recorded 21 October; PR #6899’s result/verdict wording is recorded live in release 55daac on 30 October.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6899
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    },
    "sample-details-documents": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "The calm Sample Details page and compact Data Analysis Sample card are installed. PR #6902 restores Paperwork / Attestation attachment, list, reload and authenticated reopen from Sample Documents, preserving existing generated documents and tenant/storage controls. This closes the missing attachment implementation. Confirm the broader requirement that each sample exposes its original digital submission slip and the correct annotated paperwork or signed attestation; do not infer that full original scope from attachment support alone. Consent capture remains separate.",
      "nextStep": "Use the installed Documents controls to confirm original digital-slip access and the correct sample/order paperwork and attestation links; finish only any uncovered cases.",
      "currentOwner": "Sample Documents owner + Optiq Manager",
      "evidence": "PR #6902 is recorded installed in release 55daac on 30 October; retained upload/list/reload/authenticated-PDF proof applies. PR #6866’s compact Sample card is also installed.",
      "priorityLabel": "Sample Details and submission documents"
    },
    "spectral-reference-library": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "All 16 draft references are loaded. The original historical manifest is complete: 1,246 runs and 4,984 UV/PDA channels accounted for (4,949 refreshed and 35 reused), with explicit missing-evidence outcomes. Library precision/reason labels, evidence chips, one peptide list and literature-first pickers shipped on 29 October. Completion of that historical pass does not qualify the references or prove later imports. The 30 October record says all 16 current entries derive from client samples; usable real standard injections and supported intake/preparation are still needed for standard-based Net Content. Keep literature suggestions distinct from qualified measured references.",
      "nextStep": "Lab/scientific owner: establish genuine standard injections, supported intake and audited method/reference qualification. Keep missing spectra and polarity gaps explicit; do not repeat the completed historical manifest.",
      "currentOwner": "Spectral-library and scientific/data owners + Optiq lab",
      "evidence": "Checklist: original 4,984-channel manifest completed 28 October; PRs #6831/#6839/#6851/#6856 live 29 October. The #6946 follow-up records the real-standard intake/preparation gap on 30 October."
    },
    "analysis-framework": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "Data Analysis is installed with the 29 October predicted-ion, sample-ID, reported-channel, integration-speed, saved-integration, overlay/Undo and completion fixes. The 30 October release adds delivered batch components and preserves staff review. Wider lab-defined result-entry and analyst-to-COA acceptance remains open. The autonomous-analysis worker is currently recorded inactive; it must not be described as delivering qualified automatic results. Original job coverage and scientific qualification are separate from installed UI behavior.",
      "nextStep": "Finish the retained direct-entry → save/reopen → independent review → released-COA cases. Track autonomous worker restoration, evidence qualification and the newer Demo UI separately.",
      "currentOwner": "Data Analysis/result-entry owners + scientific/data owner",
      "evidence": "PRs #6812–#6824 and #6854/#6858 are recorded live in 1129; selected batch components are installed in 55daac. The latest recorded autonomous worker observation is inactive at 04:10 UTC on 30 October."
    },
    "coa-automatic-ion-interpretation": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "Ion suggestion and staff editing are part of installed Data Analysis, including selected-analyte prediction without a library standard, the full predicted-ion list and corrected chart-labelled matching. The old statement that this entire capability is not available at Optiq is superseded. Retain staff review: a suggestion does not establish Identity. The retained saved-spectrum → edited observed ions → reopen → correct certificate acceptance must still be reconciled; the newer current-scan scoring and unified Identity Demo are separate production-pending work.",
      "nextStep": "Reconcile the installed saved-ion and certificate acceptance proof, finish uncovered cases and keep Demo-only scoring separate.",
      "currentOwner": "Data Analysis/COA owner + deployment owner",
      "evidence": "PRs #6821/#6817/#6823 are recorded live in the 29 October release. Cumulative #6876 remains a separate Demo/source candidate, without a new production install."
    },
    "coa-oct14-mockups": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "COA 2.0 and the reviewed typography/layout are installed. The 29 October chart repair makes new certificate chart selections follow the reported UV channel while preserving issued PDFs and existing pinned selections. The 30 October release also installs the reviewed Fentanyl result wording and optional numeric microbiology result handling. Remaining layout/analysis cases still need qualification. Two-run COA and automatic standard-based Net Content were explicitly excluded from the current release.",
      "nextStep": "Finish only uncovered layout and analysis qualification cases using retained proof. Keep two-run certificates and automatic Net Content with their deferred foundations.",
      "currentOwner": "COA qualification owner + Optiq Manager",
      "evidence": "Installed checklist records: #6812 in 1129; #6898/#6899 in 55daac. #6931 and #6889 are explicit release exclusions."
    },
    "blend-potency": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 1,
      "detail": "Manual component claims, existing Reporting Hub entry/Undo and independent component ion traces are retained in the installed release. Automatic per-peptide Net Content and two-run COA reporting are held with the standard calculator and real-standard intake/preparation. PR #6939’s copied-data proof does not make the blend recording workflow live; it conflicts with the reduced release after its foundations were deferred.",
      "nextStep": "Restore the reviewed standard calculator, real standard intake/preparation and two-run lineage together; rebase and review per-peptide recording against that source before the ordered migrations and any separately approved release.",
      "currentOwner": "Blend/standard-calculation owner + collecting/deployment managers",
      "evidence": "55daac retains #6921’s independent ion traces but excludes its calculator; #6889/#6931/#6939/#6946 remain held. Per-peptide recording requires the documented ordered migrations."
    },
    "portal-price-visibility": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 1,
      "detail": "The agreed scope remains public prices, required sample information and a low-friction checkout, with sign-in for agreed client rates and approved billing-term exceptions. Square sandbox checkout code/configuration is recorded installed; this is not real-payment availability. The newer internal review/confirmation UI (#6945) remains a Demo-only pending addition: its copied environment lacks a prerequisite migration and privately supplied sandbox settings. The earlier Stripe implementation claim is superseded by the installed Square sandbox evidence. QuickBooks accounting remains separate and off.",
      "nextStep": "Checkout owner: complete the supported Demo prerequisites and internal review, then prove the agreed new/returning-client journey and approved prices before requesting any real-payment release.",
      "currentOwner": "Square checkout owner + Demo/deployment owner + Optiq billing lead",
      "evidence": "#6855’s installed Square sandbox was reconciled in the checklist; #6945 is open at reviewed source with the Demo prerequisite hold recorded 30 October. No real charge or production checkout completion is claimed."
    },
    "public-signup-approval": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "status": "queued",
      "stage": 0,
      "detail": "Keep the agreed portal entry after payment or staff invitation, approved client billing-term exceptions and low-friction checkout. Installed sandbox payment code does not establish the complete signup/account journey. No newer end-to-end completion record was found in the deployment checklist.",
      "nextStep": "Prove signup, payment or approved-terms handling, account access and staff invitation together with the checkout owner.",
      "currentOwner": "Portal/checkout owner — Optiq Manager coordinates pickup",
      "evidence": "23 October agreed scope retained; 30 October reconciliation found sandbox checkout work but no complete signup/account acceptance."
    },
    "receipt-emails": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "Company-name receipt subjects and greetings, including lab-scoped customer-name lookup, are already installed. Do not rebuild the obsolete standalone receipt release to deliver that code. Actual delivery and recipient behavior still need reconciliation against existing owner/outbox/inbox evidence. This does not authorize a new outbound smoke email.",
      "nextStep": "Existing receipt owner: reconcile retained delivery/recipient evidence for the installed code and close only the remaining proof gap.",
      "currentOwner": "Existing receipt owner + Optiq deployment owner",
      "evidence": "Checklist records receipt source inclusion in installed 1129 and a separate held delivery-verification item carried through 30 October."
    },
    "conformity": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "Conformity remains inside Sample Details with one client-facing parent and traceable internal vials/results. Installed switches and draft service/catalogue configuration do not establish client availability. Lab setup, method/service qualification, existing-sample handling and complete order → receive → results → review → released-COA proof remain open. Converge the existing-sample work on the lean form; preserve per-vial lineage and descriptive statistics without a pass/fail Conformity verdict.",
      "nextStep": "Lab admin and Conformity owner: finish approved service/method setup and the existing-sample cases, then prove the complete workflow before scoped activation.",
      "currentOwner": "Conformity owner + Optiq lab admin + deployment owner",
      "evidence": "30 October checklist retains Conformity qualification/activation and #6735/#6733 follow-up. The zero-active-catalogue observation is dated 27 October, not a new live read."
    },
    "white-label-printed-lookup": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "Printed-number registry code and its migration are installed. The read-only printed-number audit helper is also installed. Historical registration reconciliation, ambiguous/original-footer evidence and ordered public lookup activation remain open; the audit helper does not activate lookup.",
      "nextStep": "White-label owner: reconcile registration and conflicting evidence, then perform separately approved ordered activation and correct/unknown-number acceptance.",
      "currentOwner": "White-label lookup owner + deployment owner",
      "evidence": "#6779 registry installation retained; #6893’s read-only helper is recorded live in 55daac. Printed-number activation remains explicitly open."
    },
    "quickbooks-status-sync": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "optiq",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "Existing-invoice editor, Connect code, application callback/telemetry privacy and the prepared-observation checker are installed with QuickBooks switched off. Guarded activation/proof repairs have merged to main; branch merge alone does not deliver the Optiq activation adapter or qualify live finance behavior. Legal/customer consent, operator recovery/reader checks, separate Apache/log-sink qualification, Mike’s click-test and exact-release approval remain. Do not connect a production accounting company or enable QuickBooks from this progress update.",
      "nextStep": "QuickBooks owner: reconcile the merged activation tooling with current Optiq source, finish sandbox/recovery/privacy qualification and present the exact scoped activation for approval. Billing lead supplies the approved accounting and consent inputs.",
      "currentOwner": "QuickBooks takeover owner + Optiq Manager + billing lead",
      "evidence": "Checklist: #6837/#6912/#6923/#6895 application code installed in 55daac while off; #6907/#6933 main tooling merged. Finance activation and Apache changes remain separately held."
    },
    "stable-released-coa-links": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "Ordinary permanent-link code is installed. The deployed enumeration repair preserves existing QR/token access, and report/client throttle relief is installed. These changes do not close white-label permanent-link/recovery acceptance or activate printed-number lookup.",
      "nextStep": "COA owner: reconcile the installed white-label/permanent-link/recovery cases and finish remaining acceptance without regenerating issued certificates as a test.",
      "currentOwner": "COA link/white-label owner + deployment owner",
      "evidence": "Earlier permanent-link record retained; #6841 live in 1129 and #6909/#6910 throttle relief live 29 October. Printed-number activation remains open."
    },
    "client-bulk-white-label": {
      "currentAsOf": "2026-10-30",
      "currentOwnerAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "currentEvidenceBoundary": "Based on the dated deployment record and retained proof; this page reconciliation did not retest the production application.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "status": "partial",
      "stage": 2,
      "detail": "Bulk requests, portal white-label ZIP support and fallback disclosure are installed. Subsequent report/client throttle relief is delivered. Full authorized private-draft → edit → save/reopen → photo → correct-PDF acceptance remains open. White-label release emails are still a separate held activation requiring the lab notice first.",
      "nextStep": "Finish retained private-draft/photo/PDF acceptance. Mike and the release-email owner resolve the separate lab-notice and activation prerequisites before any send.",
      "currentOwner": "White-label workflow owner + release-email owner + Optiq Manager",
      "evidence": "Installed ZIP/fallback record retained; #6909/#6910 relief live 29 October. #5887 email activation remains held; no email or customer release was used as smoke."
    }
  },
  "additions": [
    {
      "id": "data-analysis-demo-review",
      "area": "Reports & analyses",
      "title": "Data Analysis Demo: unified Identity, Purity and peak controls",
      "status": "built",
      "stage": 2,
      "description": "Data Analysis Demo: unified Identity, Purity and peak controls.",
      "detail": "The cumulative Demo candidate preserves 31 intentional review outcomes, including unified analyte/ion controls, current-scan scores, Compact Purity, stable peak-grid deletion, keyboard focus, baseline endpoint isolation and pane-menu behavior. The full cumulative source is reconciled with the installed release. Protected source integration and a separately approved production publication remain; earlier component-level visual holds are historical. Acquired-spectrum hover is a later Demo-only follow-up, and recommended-peak comparison work is still a separate pending addition. None is newly installed on production.",
      "nextStep": "Demo/source owner and deployment owner: finish protected integration and the exact release preparation, accounting for later Demo additions without replacing its copied data.",
      "currentDisposition": "The cumulative Demo candidate preserves 31 intentional review outcomes, including unified analyte/ion controls, current-scan scores, Compact Purity, stable peak-grid deletion, keyboard focus, baseline endpoint isolation and pane-menu behavior. The full cumulative source is reconciled with the installed release. Protected source integration and a separately approved production publication remain; earlier component-level visual holds are historical. Acquired-spectrum hover is a later Demo-only follow-up, and recommended-peak comparison work is still a separate pending addition. None is newly installed on production.",
      "currentOwner": "Cumulative Demo/source owner + Optiq deployment owner",
      "currentOwnerAsOf": "2026-10-30",
      "currentAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "evidence": "Checklist DEMO032 reconciles cumulative #6876 to release 55daac; DEMO033 records hover as a separate Demo-only change. #6982 comparison remains open and not published. No new production publication is recorded.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "currentEvidenceBoundary": "Dated deployment/source evidence only; no new production test or activation was performed by this page update."
    },
    {
      "id": "standard-based-net-content",
      "area": "Reports & analyses",
      "title": "Automatic standard-based Net Content and two-run COAs",
      "status": "built",
      "stage": 2,
      "description": "Automatic standard-based Net Content and two-run COAs.",
      "detail": "The reduced release excluded the automatic standard calculator, its component calculator, two-run COA lineage and per-peptide blend recording. Manual Reporting Hub amounts/units and Undo remain available. Restoration needs genuine standard injections, supported bridge/intake and standard-mark preparation, current-source integration and fresh end-to-end proof. A loaded draft library or fixture-only preparation is insufficient.",
      "nextStep": "Standard-calculation and intake owners: restore the complete standard preparation/calculation path, two-run lineage and ordered migrations together before any approved install or method activation.",
      "currentDisposition": "The reduced release excluded the automatic standard calculator, its component calculator, two-run COA lineage and per-peptide blend recording. Manual Reporting Hub amounts/units and Undo remain available. Restoration needs genuine standard injections, supported bridge/intake and standard-mark preparation, current-source integration and fresh end-to-end proof. A loaded draft library or fixture-only preparation is insufficient.",
      "currentOwner": "Standard-calculation/intake owners + collecting manager",
      "currentOwnerAsOf": "2026-10-30",
      "currentAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "evidence": "Checklist explicitly defers #6889/#6921 calculator, #6931, #6939 and #6946; chrom041, chrom042 and inv284 are future ordered dependencies, not installed work in 55daac.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "verification"
      ],
      "currentEvidenceBoundary": "Dated deployment/source evidence only; no new production test or activation was performed by this page update."
    },
    {
      "id": "data-analysis-batches",
      "area": "Reports & analyses",
      "title": "Data Analysis batches: delivered run controls and remaining named batches",
      "status": "partial",
      "stage": 1,
      "description": "Data Analysis batches: delivered run controls and remaining named batches.",
      "detail": "Picking another injection keeps the batch. Installed components include the stale-parent guard, retirement of legacy batch saving, SCIEX Add sample with Undo and the read-only run-list Batches view. Named batches and auto-join of late samples remain open. Purity Add sample was excluded from the reduced release; the fixture repair is retained source, not a standalone product install. No sign-off workflow was requested.",
      "nextStep": "Batch owner: finish named batches and late-sample behavior; restore purity Add sample/Undo with complete current-source proof before inclusion in a later approved release.",
      "currentDisposition": "Picking another injection keeps the batch. Installed components include the stale-parent guard, retirement of legacy batch saving, SCIEX Add sample with Undo and the read-only run-list Batches view. Named batches and auto-join of late samples remain open. Purity Add sample was excluded from the reduced release; the fixture repair is retained source, not a standalone product install. No sign-off workflow was requested.",
      "currentOwner": "Data Analysis batch owner + deployment owner",
      "currentOwnerAsOf": "2026-10-30",
      "currentAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "evidence": "#6920/#6925/#6929/#6932/#6934 are recorded installed in 55daac. #6938 remains held; #6940 repairs its source fixture without installing that excluded feature.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "partial",
        "verification"
      ],
      "currentEvidenceBoundary": "Dated deployment/source evidence only; no new production test or activation was performed by this page update."
    },
    {
      "id": "automatic-analysis-evidence",
      "area": "Reports & analyses",
      "title": "Automatic analysis: worker state and qualified evidence",
      "status": "check",
      "stage": 1,
      "description": "Automatic analysis: worker state and qualified evidence.",
      "detail": "The latest recorded production observation says the autonomous-analysis worker is inactive. The earlier 26-job batch completed operationally, but all 26 lack qualified numerical purity/identity because usable original evidence, declared coverage or audited method/sample/reference linkage is missing. This is not a promise of automatic analytical results. The completed 4,984-channel historical matching manifest is a separate coverage task.",
      "nextStep": "Deployment/scientific owners: establish the authorized current worker scope and qualified source evidence, then use supported fresh revisions. Preserve sealed admissions and keep unknown results explicit; complete the outstanding authenticated production-browser check.",
      "currentDisposition": "The latest recorded production observation says the autonomous-analysis worker is inactive. The earlier 26-job batch completed operationally, but all 26 lack qualified numerical purity/identity because usable original evidence, declared coverage or audited method/sample/reference linkage is missing. This is not a promise of automatic analytical results. The completed 4,984-channel historical matching manifest is a separate coverage task.",
      "currentOwner": "Scientific/data owner + Optiq deployment owner",
      "currentOwnerAsOf": "2026-10-30",
      "currentAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "evidence": "Checklist observation at 04:10 UTC on 30 October: worker inactive; stop authority unknown. Earlier original 26-job processing is complete, while numerical result qualification and current backlog progress remain unproved.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "verification"
      ],
      "currentEvidenceBoundary": "Dated deployment/source evidence only; no new production test or activation was performed by this page update."
    },
    {
      "id": "white-label-release-emails",
      "area": "Reports & analyses",
      "title": "White-label release emails: installed code, activation held",
      "status": "built",
      "stage": 2,
      "description": "White-label release emails: installed code, activation held.",
      "detail": "Release-email code is installed. Mike must first notify the lab and prerequisite data work must finish before the separately scoped Settings activation and readback. Activation covers subsequent releases only; no historical backlog send or outbound smoke email is part of this reconciliation.",
      "nextStep": "Mike and the release-email owner: complete the lab notice and prerequisite checks, then obtain and carry out the scoped activation.",
      "currentDisposition": "Release-email code is installed. Mike must first notify the lab and prerequisite data work must finish before the separately scoped Settings activation and readback. Activation covers subsequent releases only; no historical backlog send or outbound smoke email is part of this reconciliation.",
      "currentOwner": "Mike + release-email/deployment owner",
      "currentOwnerAsOf": "2026-10-30",
      "currentAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "evidence": "Checklist #5887 remains held for lab notice/data/activation; code installation is complete.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [
        "optiq"
      ],
      "currentEvidenceBoundary": "Dated deployment/source evidence only; no new production test or activation was performed by this page update.",
      "question": "Mike / lab lead: confirm the required lab notice and readiness before release-email activation."
    },
    {
      "id": "measured-microbiology-results",
      "area": "Reports & analyses",
      "title": "Optional measured endotoxin, yeast and mold results",
      "status": "complete",
      "stage": 3,
      "description": "Optional measured endotoxin, yeast and mold results.",
      "detail": "Optional numeric microbiology results are installed while preserving legitimate verdict-only corrections and the existing report safeguards.",
      "nextStep": "Delivered. Retain existing independent review and correction controls.",
      "currentDisposition": "Optional numeric microbiology results are installed while preserving legitimate verdict-only corrections and the existing report safeguards.",
      "currentOwner": "Microbiology/COA owner + deployment owner",
      "currentOwnerAsOf": "2026-10-30",
      "currentAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "evidence": "PR #6898 is recorded live in release 55daac on 30 October with retained focused/browser/scientific proof and required release review/CI.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "currentEvidenceBoundary": "Dated deployment/source evidence only; no new production test or activation was performed by this page update.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6898
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    },
    {
      "id": "lc-method-deletion",
      "area": "Reports & analyses",
      "title": "Audited deletion of unused LC methods",
      "status": "complete",
      "stage": 3,
      "description": "Audited deletion of unused LC methods.",
      "detail": "Staff can delete unused LC methods with an atomic audit record; linked or run-used methods remain protected. Existing staff access is preserved. This is an application/API capability and performs no instrument-computer operation.",
      "nextStep": "Delivered; use the existing method permissions and audit controls.",
      "currentDisposition": "Staff can delete unused LC methods with an atomic audit record; linked or run-used methods remain protected. Existing staff access is preserved. This is an application/API capability and performs no instrument-computer operation.",
      "currentOwner": "Methods owner + deployment owner",
      "currentOwnerAsOf": "2026-10-30",
      "currentAsOf": "2026-10-30",
      "evidenceBasis": "30 October deployment reconciliation",
      "evidence": "PR #6913 is recorded installed in 55daac after exact-head review, required CI and retained route/database proof.",
      "evidenceUrl": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md",
      "currentNotes": [],
      "currentEvidenceBoundary": "Dated deployment/source evidence only; no new production test or activation was performed by this page update.",
      "deliveryEvidence": {
        "kind": "production",
        "release": "55daac0877d66e6a06f05dddfc1cdcc5968ff58b",
        "prs": [
          6913
        ],
        "record": "https://github.com/himmapan-lab/fleet-memory/blob/29d0692ef5ea62200049888f52f7bc61b8170aa4/shared/deploy-checklist.md"
      }
    }
  ]
};
window.OPTIQ_REVIEW.additions.push(...window.OPTIQ_RECONCILIATION.additions);

# Canonical page structure

Adopted 14 November 2026 at Mike's direction. Every update to the progress page keeps this
structure. Change the content inside a section; do not add, remove or reorder sections, and do
not bring long prose back to the top of the page.

`node scripts/validate-page-structure.cjs` enforces the order and the limits below.

## Sections, in order

| # | Section | Anchor | What changes each update |
|---|---------|--------|--------------------------|
| 1 | Headline | `.intro` | One short headline and one sentence. Date of the latest install. |
| 2 | Four tiles | `.dash-tiles` | Number of installs. The other three count themselves. |
| 3 | Overall progress bar | `#overall-heading` | Nothing. Counted from the catalog. |
| 4 | Update pace | `#pace-heading` | Add the new install to the timeline; keep at most five entries, newest last and marked `latest`. |
| 5 | New this week | `#new-heading` | Replace the cards with what the latest install made live. Six to nine cards. |
| 6 | Built and waiting for your go-ahead | `#ready-heading` | Installed but switched off. Steps: Built, Installed, Lab go-ahead, Switched on. |
| 7 | Coming next | `#next-heading` | Three cards. Steps: Planned, Building, Testing, Live. |
| 8 | Progress by area | `#area-heading` | Nothing. Counted from the catalog. |
| 9 | Trust strip | `.promise` | Rarely changes. |
| 10 | What we need from Optiq | `#lab-heading` | Driven by `OPTIQ_LAB_QUESTIONS`. |
| 11 | Every request, in detail | `#all-requests` | Folded. Driven by the catalog. |
| 12 | Earlier updates, in detail | second `details.fold` | Folded. Move the previous "New this week" here as a dated block. |
| 13 | Footer | `footer` | Date the installed version was confirmed. |

## Writing rules

- Plain words a lab manager would use. No pull-request numbers, code names or internal tool names.
- A card is a title of up to six words and one sentence of up to fifteen words.
- No paragraph above the folded sections is longer than 25 words.
- Bars and colour carry the status: green is live, blue is underway or installed and switched
  off, amber is being checked or coming next, grey is planned.
- Show Smpltrax's delivery pace and follow-through, and stay accurate: "live" means confirmed at
  `https://optiq.smpltrax.com/health/version`; installed-but-off work belongs in section 6.
- Bars are counted from the catalog. To move a bar, update the request's status with its dated
  evidence; never hand-edit a number.

## Each update

1. Confirm the installed version and date at the version record.
2. Update sections 1, 2 (install count), 4, 5, 6, 7 and the footer date in `index.html`.
3. Move the previous "New this week" into section 12.
4. Bump the `?v=` on any file you changed and the masthead date.
5. Run every script in `scripts/`, then check light, dark and phone width.

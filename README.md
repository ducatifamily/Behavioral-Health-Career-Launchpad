# Behavioral Health Careers Launchpad — NBHP + WREDI

Static GitHub/Render site revised from the original Behavioral Health Careers Launchpad.

## What changed

- Reframed the site clearly as an **NBHP + WREDI community workforce resource**.
- Added the supplied **WREDI** and **NBHP** logos.
- Added current WREDI workforce-shortage context using the current NBHP/WREDI source.
- Clarified that the seven highlighted careers are examples of high-demand regional pathways, not the complete behavioral-health field.
- Added **advanced career pathways** (counseling/therapy, social work, psychology, psychiatric nursing, psychiatry).
- Added a **career comparison table** with 2025 BLS national median pay and 2025–2035 projected growth for selected comparable occupations.
- Added a neutral **Houston/Texas college and university** directory.
- Added official credential/training gateways and community training options.
- Added WREDI **externship, scholarship, internship/practicum** links.
- Replaced the AAHI-centered career-tools presentation with a neutral **community resources** area where AAHI/Avicenna are options among several resources.
- Added a searchable directory of the **current hiring pages supplied by Lisa Albert**.
- Preserved and expanded the **career matcher** and **next-step plan**.
- No database or API is required. The career plan is stored only in the visitor's browser.

## Files

- `index.html`
- `styles.css`
- `app.js`
- `render.yaml`
- `wredi-logo.png`
- `nbhp-logo.png`

## Deploy on Render

1. Create or update a GitHub repository.
2. Put all files in the repository root exactly as shown above.
3. Connect the GitHub repository to Render.
4. Render can read `render.yaml` and deploy the project as a static site.

If replacing an existing Render site tied to GitHub, replace the old repository files with these and commit/push. Render should redeploy automatically if auto-deploy is enabled.

## Maintenance notes

### Member organization links
The searchable employer directory is intentionally data-light: organization name + hiring link. If a hiring URL changes, edit the corresponding `<a class="org-card">` entry in `index.html`.

### Adding member logos later
Member logos were **not** added because only NBHP and WREDI logo files were supplied. The organization cards are already structured so logos can be added later without redesigning the page.

### Workforce statistics
Current homepage statistics link back to:
- https://www.nbhp.org/wredi.html

### Salary / outlook figures
Comparison data link directly to the current U.S. Bureau of Labor Statistics Occupational Outlook Handbook pages. These figures are national, not Houston-specific.

### Neutrality
The site deliberately presents Avicenna/AAHI as options among many community resources rather than as the default pathway.


## Logo path fix
The two PNG logo files are intentionally stored in the repository root beside `index.html`. This avoids missing-folder issues when files are uploaded to GitHub manually.


## Final refinements included

- Removed the provider-specific Avicenna link from the BHT career card; the BHT card now sends visitors to the neutral training directory.
- Added a community-facing **Start Where You Are** section for visitors who want to work sooner, build experience first, or pursue an advanced career.
- Added a true side-by-side comparison of all seven highlighted pathways.
- Retained the separate BLS workforce snapshot for salary and outlook context.
- Expanded training into a filterable **Find Training & Certification** directory so Avicenna appears as one option among multiple public, credentialing, community, and professional resources.
- The same GitHub repository and Render service can be used; replace the existing files with this package and commit.

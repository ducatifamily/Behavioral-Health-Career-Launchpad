# Behavioral Health Careers Launchpad — Simple Career Explorer

This version is intentionally **not a course**. It is a lightweight career-exploration microsite based on the content and career pathways in the original Canvas export.

## Files

- `index.html` — the entire site (HTML, CSS, and JavaScript)
- `launchpad-hero.png` — WREDI launchpad artwork
- `render.yaml` — Render static-site configuration
- `README.md` — these instructions

## Important: GitHub upload

**Unzip the downloaded package first. Do not upload the ZIP file itself to GitHub.**

Create or open the GitHub repository, choose **Add file → Upload files**, and upload these four files from inside the unzipped folder. Each file is small enough for GitHub's browser uploader.

## Deploy on Render

1. Push/upload these files to the root of the GitHub repository.
2. In Render, create a new Blueprint or Static Site connected to that repository.
3. Render can use the included `render.yaml`.
4. There is no build step; the publish path is the repository root.

## Design approach

The site removes LMS/course behaviors such as modules, grades, assignment submissions, discussion boards, and required progress. It keeps the career-exploration purpose and presents it as:

- Explore Careers
- Support Recovery
- Strengthen Communities
- Plan Your Future
- Seven career pathway cards
- A lightweight career-interest matcher
- A browser-saved next-step plan
- Links to AAHI CareerConnect and the AAHI Allied Health Online Library

# Fix GitHub Pages deployment

## Diagnosis
The latest custom site deployment failed after the site built successfully. GitHub then kept serving the older branch-based Pages deployment, which shows the README.

## Change
- Replace the failing redirect-file command with a simpler, reliable file creation step.
- Ensure the static output folder exists before adding the root redirect and fallback page.
- Keep the existing ET/RU pages, repository-aware address, styling, gallery, and booking form unchanged.

## Verification
- Confirm the local preview still builds successfully.
- Confirm the next GitHub workflow run completes and replaces the README deployment.

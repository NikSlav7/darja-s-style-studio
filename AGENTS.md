<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- ALL changes must be GitHub Pages-ready straight away: static build only (STATIC_BUILD=1 path), every path/asset/link respects BASE_PATH via `import.meta.env.BASE_URL`, media bundled in the project (never Lovable-hosted URLs), head tags/canonical/sitemap use absolute final URLs. Verify with `STATIC_BUILD=1 BASE_PATH=/darja-s-style-studio/ bunx vite build` producing `dist/client/et/index.html` + `dist/client/ru/index.html` before finishing.
- No backend: booking form posts directly to the Google Apps Script endpoint in `src/lib/booking-config.ts`; never add server functions, Lovable Cloud, Supabase, or form services.
- Keep bilingual public copy and gallery/service media configuration in `src/lib/site-data.ts` so content changes do not require layout edits.
- Use `/et` and `/ru` as language-specific single-page experiences and redirect `/` to `/et` so each language has an indexable URL.
- Keep GitHub Pages output preparation in `scripts/prepare-github-pages.ts` so redirects and artifact checks remain portable and testable.
- TanStack Router must use `trailingSlash: "preserve"` in `src/router.tsx`: the static prerenderer requests trailing-slash URLs and the default ("never") causes an infinite redirect loop that skips prerendering.

- Keep gallery category content and labels in the shared bilingual data module, and use bundled image files for static GitHub Pages compatibility.
- Keep portfolio carousel behavior in its own presentation component, reading the single gallery list from the shared bilingual data module, so photos can be added without changing layout code.

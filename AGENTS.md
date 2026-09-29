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

- Keep bilingual public copy and gallery/service media configuration in `src/lib/site-data.ts` so content changes do not require layout edits.
- Use `/et` and `/ru` as language-specific single-page experiences and redirect `/` to `/et` so each language has an indexable URL.
- Keep GitHub Pages output preparation in `scripts/prepare-github-pages.ts` so redirects and artifact checks remain portable and testable.

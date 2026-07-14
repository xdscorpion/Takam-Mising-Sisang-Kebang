# Takam Mising Sí:sang Kébang — website

A single-page static site. No build step, no framework — just `index.html`,
`styles.css`, and `script.js`.

## Files
- `index.html` — page structure and copy
- `styles.css` — colours, type, layout, animation
- `script.js` — mobile nav, scroll reveal, and the word-reclamation ticker
- `netlify.toml` — tells Netlify there's no build command, just publish the folder as-is

## Deploy to GitHub + Netlify
1. Copy these files into the root of your GitHub repo (or a subfolder — if you
   use a subfolder, update `publish` in `netlify.toml` to that folder's path).
2. Commit and push.
3. Since Netlify is already connected to the repo, it will redeploy automatically
   on every push to your main branch. No build command is needed.

## The "word reclamation" section
Near the top of `script.js` is a `wordPairs` array:

```js
const wordPairs = [
  { loan: 'schedule', mising: '— add real word —', meaning: 'e.g. a native term for planning/time-order' },
  ...
];
```

These are placeholders — I don't have a verified Mising word list, so replace
`mising` and `meaning` with the community's confirmed words before publishing.
Add as many pairs as you like; the ticker cycles through all of them.

## Contact form
The "Get Involved" form uses Netlify Forms (`data-netlify="true"`), so
submissions will show up in your Netlify dashboard under **Forms** automatically
once deployed — no backend needed.

## Customising
- Colours and fonts are defined as CSS variables at the top of `styles.css`
  (`:root { ... }`) — change values there to retheme the whole site.
- All animation respects `prefers-reduced-motion`.

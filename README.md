# Gift Dayo — Data + AI + Engineering portfolio
Static React + Vite site for GitHub Pages. HashRouter (no server rewrites), `VITE_BASE` sets the repo path.

## Local
`npm install && npm run dev` · production: `npm run build`

## Deploy
1. Create a GitHub repo, push this code to `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds with base `/REPO/` and publishes. Site: `https://USERNAME.github.io/REPO/`.
4. Custom domain later: Settings → Pages → Custom domain, then build with `VITE_BASE=/`.
Anything on a public Pages site is public: never ship keys, tokens or private data.

## Add a Data Lab app
Add an object to `src/data/apps.js`:
- External: `type:'external', url:'https://…', embed:false` (use `embed:true` only if the host allows iframes).
- Internal: `type:'internal'`, create `src/pages/MyTool.jsx`, register it in `src/pages/internalApps.js`.
Projects: `src/data/projects.js`. Replace placeholders in `site.js` (email, GitHub, LinkedIn) and drop `cv.pdf` in `public/`.

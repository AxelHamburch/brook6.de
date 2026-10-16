# brook6.de

Website für **₿rook6**, einen **fiktiven** Bitcoin-Stammtisch in der Hamburger
Speicherstadt – Dummy-/Platzhalter-Projekt, das die technische Struktur von
[bamo21.de](https://github.com/AxelHamburch/bamo21.de) übernimmt, inhaltlich
aber komplett eigenständig ist.

Built as a static single-page application with [React](https://react.dev/) 19,
[Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/), using
[react-router-dom](https://reactrouter.com/) for client-side routing,
[framer-motion](https://www.framer.com/motion/) for animations and
[lucide-react](https://lucide.dev/) for icons.

## Tech stack

- **React 19** – UI components (function components + hooks)
- **Vite 7** – dev server and production bundler
- **Tailwind CSS 3** – utility-first styling with a river/brick palette in
  `tailwind.config.js`: `brand` (Bitcoin orange), `brick` (red klinker brick),
  `brook` (murky Fleet-blue) and `dusk` (dark fog/night neutral)
- **react-router-dom 7** – routes for the home page and legal pages (`/de/impressum`, `/de/datenschutz`)
- Path alias `@/` maps to `src/` (see `jsconfig.json`)

## Project structure

- `src/App.jsx` – app root, routing setup
- `src/components/` – page sections (Hero, Facts, About, Footer, Navigation,
  Impressum, Datenschutz)
- `src/hooks/useStaleBuildReload.js` – reloads stale pre-rendered tabs once a newer build is live
- `assets/logo-brook6.svg` – simple placeholder logo
- `public/` – static assets (favicon, `.htaccess`)

## Notable details

- **Block height as version stamp:** at build time, `vite.config.js` fetches the current
  Bitcoin block height from mempool.space and injects it into the footer. If the request
  fails, a `xxxxxx` placeholder is shown instead.
- **Dummy content:** all text, the address ("Brook 6, Speicherstadt Hamburg") and the
  Impressum/Datenschutz data are fictional placeholders and clearly marked as such.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Produces a static `dist/` folder (HTML/CSS/JS). **No Node.js server** is required in
production.

## Deployment

Upload the contents of `dist/` (not the folder itself) to the web root of any static
web host. Make sure the server honors the included `.htaccess` (or equivalent rewrite
rules): it provides the HTTPS redirect and the SPA fallback to `index.html`, without
which direct requests to sub-pages (e.g. `/de/impressum`) return a 404.

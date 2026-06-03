# Portfolio Guillaume Beaufort

Portfolio web application built with Vue 3, TypeScript, Tailwind CSS and a lightweight Node.js/Express backend.

## Live demo

- https://guiguislide.github.io/Portfolio-Guillaume-Beaufort/

## Project overview

This repository contains a professional portfolio website that showcases personal projects, skills, and contact information. It is structured as a modern single-page application (SPA) with client-side routing and a dedicated backend folder for future API or server functionality.

## Key features

- Responsive Vue 3 frontend with Tailwind CSS styling
- Vue Router navigation for Home, About, Projects and Contact pages
- Static site deployment via GitHub Pages using the `docs/` folder
- Build-ready frontend output optimized by Vite
- Optional backend service powered by Express and TypeScript

## Technology stack

### Frontend
- Vue 3
- Vue Router
- Vite
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express
- TypeScript
- CORS

## Repository structure

- `frontend/` — Vue application source code
- `backend/` — Express server and backend service code
- `docs/` — Published GitHub Pages static site output

## Development setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Build and deploy

### Build the frontend

```bash
cd frontend
npm run build
```

### Publish to GitHub Pages

1. Copy the generated frontend build from `frontend/dist/` into the root `docs/` folder.
2. Commit and push the changes to the repository branch configured for Pages.
3. GitHub Pages will serve the site from `docs/`.

> Note: The frontend is configured for GitHub Pages under the repo path `/Portfolio-Guillaume-Beaufort/`.

## Notes

- The `docs/` folder is the published output used by GitHub Pages.
- If the site appears blank, make sure the asset paths are correct and the latest build output is present in `docs/`.
- The backend is optional and can be expanded later to add API endpoints.

## Contact

For questions or updates, use the Contact page on the portfolio site.

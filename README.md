# Rozsa-Vet

Bilingual Slovak/Hungarian static website for the Rozsa-Vet veterinary hospital in Dunajská Streda.

## Development

Use Node.js 22 or newer.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The site is built with Astro and can be deployed to GitHub Pages through the workflow in `.github/workflows/deploy.yml`.

The workflow defaults to a GitHub Pages project URL. For a custom domain, add repository variables:

- `SITE_URL=https://www.rozsa-vet.sk`
- `BASE_PATH=/`
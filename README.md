# Cat Explorer

A small React application for browsing cat images and viewing breed details when the API supplies them.

**Stack:** React · JavaScript · CSS · Create React App

## Features

- Image grid loaded from TheCatAPI.
- Reload action for fetching another set of images.
- Detail view with available breed, origin, lifespan and temperament.
- Loading and error states, plus fallbacks for missing breed data.

## Run locally

```bash
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000).

```bash
npm run build
```

## API

The browser requests the public image-search endpoint without an embedded API key. Anonymous responses can contain fewer details or be subject to provider limits; breed information is optional.

Do not put private API keys into client-side JavaScript or `REACT_APP_*` variables: values used by the browser are included in the frontend bundle. Features that need a private key should use a server-side proxy.

## Structure

- `src/App.js` — request state and selected image.
- `src/components/CatList.jsx`, `CatCard.jsx` — image grid.
- `src/components/CatDetails.jsx` — detail view.
- `src/components/Header.jsx` — reload control.

## Scope

A React API-integration exercise. It uses the existing Create React App toolchain and does not include a backend or persistent favorites.

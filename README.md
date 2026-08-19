# Portfolio Chat Shell

A small, reusable ChatGPT-inspired portfolio interface. This repository contains only the visual frame and interaction shell; add your own content, data source, and deployment configuration privately.

## Run locally

```bash
npm install
npm run dev
```

Build a static export with `npm run build`.

## Customize

Replace the placeholder navigation and response in `pages/index.tsx`, then adapt the styling in `styles/globals.css`.

This public shell intentionally contains no personal portfolio data, model files, credentials, or hosting-provider configuration.

## Semantic reasoning

The live portfolio pairs this interface with a compact semantic reasoning layer that runs at the edge and in the browser. Instead of requiring an exact question match, the layer normalizes a visitor's intent, retrieves the most relevant portfolio sections, and composes a grounded response from those sections. This keeps interaction responsive while demonstrating practical Edge AI: small-footprint inference, local-first data access, and graceful operation on constrained devices.

The implementation notes are in [`docs/semantic-reasoning.md`](docs/semantic-reasoning.md). The production knowledge base and model assets are intentionally kept private.

# Safawala Network

A network of 42 independently-deployed Next.js sites for Safawala's wedding safa, pagdi and turban-tying services across different cities and destinations.

Each top-level folder is a self-contained Next.js app for one domain — e.g. `safawalapune/` deploys to safawalapune.com, `safawalarishikesh/` deploys to safawalarishikesh.com, and so on. There is no shared build or shared dependencies between them; each folder has its own `package.json`, `node_modules` (not committed), and deployment target.

To work on a single site:

```bash
cd <domain-folder>
npm install
npm run dev
```

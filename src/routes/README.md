# Routes

Ce dossier contient toutes les pages de l'application.
Chaque fichier `.tsx` correspond à une route automatiquement détectée par TanStack Router.

| Fichier | URL |
| --- | --- |
| `index.tsx` | `/` — Page d'accueil |
| `a-propos.tsx` | `/a-propos` |
| `piliers.tsx` | `/piliers` |
| `programmes.tsx` | `/programmes` |
| `evenements.tsx` | `/evenements` |
| `impact.tsx` | `/impact` |
| `contact.tsx` | `/contact` |
| `__root.tsx` | Layout principal (contient la navbar et le footer) |

## Pourquoi `routeTree.gen.ts` est généré automatiquement ?

J'ai utilisé le système de **file-based routing** de TanStack Router, qui scanne automatiquement ce dossier `src/routes/` et génère le fichier `routeTree.gen.ts` pour construire l'arbre de navigation de l'application. C'est le même principe que Next.js avec son dossier `pages/` — je n'ai pas besoin d'écrire les routes à la main, elles sont détectées depuis les fichiers. Ce fichier se régénère automatiquement à chaque `npm run dev` ou `npm run build`, donc je ne le modifie jamais directement.
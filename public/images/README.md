# Images Lyncra Books

Cette arborescence distingue les images institutionnelles du site et les médias éditoriaux.

## Dossiers

- `branding/` : logo, favicon et éléments d'identité visuelle.
- `hero/` : visuels principaux des pages (accueil, à-propos).
- `editorial/` : photos d'illustration utilisées dans les sections éditoriales.
- `collections/` : visuels statiques des collections mises en avant.
- `banners/` : bannières promotionnelles ou campagnes ponctuelles.
- `placeholders/` : visuels de secours lorsque la couverture d'un livre ou l'image d'un contenu est absente.

## Conventions

- Préférer WebP ou AVIF pour les photos ; SVG pour les logos et icônes vectorielles.
- Utiliser des noms explicites, minuscules, sans espaces ni accents (ex. `homepage-hero.webp`).
- Réserver ce dossier aux ressources statiques livrées avec Nuxt.
- À terme, les couvertures des livres, portraits d'auteurs et médias des articles/collections gérés dans WordPress seront servis depuis la bibliothèque média WordPress, pas copiés ici.
- Dans l'application, référencer les fichiers avec un chemin depuis la racine, par exemple `/images/hero/homepage.webp`.

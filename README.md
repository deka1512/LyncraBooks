# Lyncra Books

Site vitrine et catalogue de livres chrétiens de Lyncra Books.

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- CSS natif avec variables de design
- Catalogue statique local
- Demandes et commandes via WhatsApp

**Périmètre actuel :** le site fonctionne sans WordPress, sans API externe et sans base de données. Les livres et les profils éditoriaux sont gérés dans les fichiers TypeScript du projet.

## Développement local

Prérequis : Node.js 22 ou plus récent.

```bash
npm ci
npm run dev
```

Pour générer la version de production :

```bash
npm run build
npm run preview
```

## Gestion du catalogue

Les données sont centralisées dans :

- `app/data/books.ts` : titres, résumés, catégories, couvertures, prix et auteur associé.
- `app/data/authors.ts` : profils des auteurs et collections éditoriales.
- `public/images/books/` : couvertures SVG locales.

Pour ajouter un livre, ajouter une entrée dans `books.ts`, renseigner son `authorSlug` et placer sa couverture dans `public/images/books/`.

Pour ajouter un auteur, créer son profil dans `authors.ts`, puis associer ses livres à son slug.

Les prix actuels sont des valeurs de démonstration : ils doivent être confirmés avant toute publication commerciale.

## Pages

- `/` : accueil et sélection de livres
- `/livres` : catalogue et filtres par catégorie
- `/livres/:slug` : fiche d'un livre et commande WhatsApp
- `/auteurs` : répertoire des auteurs et collections éditoriales
- `/auteurs/:slug` : profil et bibliographie
- `/collections` : présentation des univers éditoriaux
- `/a-propos` : présentation de Lyncra Books
- `/contact` : coordonnées et contact WhatsApp
- `/faq` : questions fréquentes

## Identité visuelle — Élégance naturelle

| Rôle | Couleur |
|---|---|
| Vert profond | `#193C32` |
| Ivoire | `#F8F5EF` |
| Or doux | `#B89A61` |
| Brun | `#46372E` |
| Blanc | `#FFFFFF` |

- Titres : Cormorant Garamond
- Interface : Inter

## Périmètre commercial

- Pas de compte client.
- Pas de panier.
- Pas de paiement en ligne.
- Les commandes sont initiées sur WhatsApp.
- Les prix et disponibilités sont confirmés par l'équipe.

## Qualité

Le workflow GitHub Actions `Nuxt build` exécute `npm ci` puis `npm run build` sur les push vers `main` et les branches `feature/**`, ainsi que sur les pull requests ciblant `main`.

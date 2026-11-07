# Lyncra Books

Site vitrine et catalogue de livres de Lyncra Books.

## Stack

- Nuxt 4 / Vue 3
- TypeScript
- WordPress Headless via l'API REST
- CSS natif avec variables de design
- Commandes et demandes via WhatsApp

## Développement local

Prérequis : Node.js 22 ou plus récent.

```bash
npm install
cp .env.example .env
npm run dev
```

## Variables d'environnement

- `NUXT_WORDPRESS_URL` : URL de l'installation WordPress (sans slash final).
- `NUXT_PUBLIC_SITE_URL` : URL publique du site Nuxt.
- `NUXT_PUBLIC_WHATSAPP_NUMBER` : numéro WhatsApp au format international, chiffres uniquement (ex. indicatif pays + numéro, sans `+` ni espaces).

## Configuration WordPress

Le frontend attend un type de contenu personnalisé exposé par l'API REST sous le point d'accès `/wp-json/wp/v2/books`.

Dans WordPress, le type de contenu des livres doit notamment avoir :

- `show_in_rest: true`
- un slug REST `books`
- le support du titre, du contenu, de l'extrait et de l'image mise en avant
- une ou plusieurs taxonomies exposées dans REST pour organiser les ouvrages

Les images mises en avant sont utilisées comme couvertures. Les termes des taxonomies (hors étiquettes) sont affichés comme catégories sur les fiches.

Le site gère proprement l'absence d'URL WordPress ou un catalogue vide : les pages restent consultables avec un état vide informatif.

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

## Pages

- `/` : accueil et sélection de livres
- `/livres` : catalogue dynamique
- `/livres/:slug` : fiche d'un livre et commande WhatsApp
- `/collections` : univers éditoriaux
- `/a-propos` : présentation de Lyncra Books
- `/contact` : contact WhatsApp
- `/faq` : questions fréquentes

## Périmètre commercial

- Pas de compte client.
- Pas de panier.
- Pas de paiement en ligne.
- Les commandes sont initiées sur WhatsApp.
- Les prix et disponibilités sont confirmés par l'équipe.

## Qualité

Le workflow GitHub Actions `Nuxt build` lance l'installation des dépendances et `npm run build` sur chaque push ou pull request vers `main`.

# Lyncra Books

Site vitrine et catalogue éditorial de Lyncra Books.

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- WordPress Headless (CMS)
- CSS natif avec variables de design

## Développement local

```bash
npm install
npm run dev
```

## Configuration

Copier `.env.example` vers `.env`, puis renseigner :

- `NUXT_WORDPRESS_URL` : URL de l'installation WordPress utilisée comme CMS.
- `NUXT_PUBLIC_SITE_URL` : URL publique du site Nuxt.

## Identité visuelle

Palette « Élégance naturelle » :

- Vert profond : `#193C32`
- Ivoire : `#F8F5EF`
- Or doux : `#B89A61`
- Brun : `#46372E`
- Blanc : `#FFFFFF`

Typographies : Cormorant Garamond (titres) et Inter (interface).

## Fonctionnement commercial

- Catalogue consultable sans compte client.
- Demandes et commandes orientées vers WhatsApp.
- Aucun panier ni paiement en ligne dans le périmètre initial.

## Structure

```text
app/
  app.vue
  assets/
    css/
      main.css
  pages/
    index.vue
nuxt.config.ts
.env.example
```

Le catalogue dynamique et les pages éditoriales seront connectés à WordPress dans les prochaines étapes.

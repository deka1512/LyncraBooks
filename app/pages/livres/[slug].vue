<script setup lang="ts">
import { books } from '~/data/books'

const route = useRoute()
const slug = String(route.params.slug)
const book = books.find(item => item.slug === slug)

if (!book) {
  throw createError({ statusCode: 404, statusMessage: 'Livre introuvable' })
}

const { orderLink } = useWhatsApp()

useSeoMeta({
  title: () => `${book.title} | Lyncra Books`,
  description: book.summary,
})
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container detail-main">
      <NuxtLink to="/livres" class="back-link">← Retour au catalogue</NuxtLink>
      <div class="detail-grid">
        <div class="detail-cover">
          <img :src="book.image" :alt="`Ambiance de lecture pour ${book.title}`">
        </div>
        <div class="detail-copy">
          <p class="eyebrow">{{ book.category }}</p>
          <h1>{{ book.title }}</h1>
          <p class="author">{{ book.author }}</p>
          <p class="summary">{{ book.summary }}</p>
          <a class="order-button" :href="orderLink(book.title)" target="_blank" rel="noopener noreferrer">Se renseigner sur WhatsApp ↗</a>
          <p class="order-note">Contactez-nous pour connaître la disponibilité et les modalités de commande.</p>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.detail-main { min-height: 65vh; padding-block: 42px 100px; }
.back-link { color: var(--color-muted); font-size: 14px; }
.detail-grid { display: grid; grid-template-columns: minmax(260px,390px) 1fr; gap: clamp(35px,7vw,90px); align-items: center; margin-top: 38px; }
.detail-cover { aspect-ratio: 3/4; max-height: 560px; overflow: hidden; background: #e9e2d5; box-shadow: var(--shadow-soft); }
.detail-cover img { width: 100%; height: 100%; object-fit: cover; }
.eyebrow { color: var(--color-gold); font-size: 12px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
.detail-copy h1 { margin: 14px 0 8px; color: var(--color-forest); font-family: var(--font-heading); font-size: clamp(42px,6vw,66px); font-weight: 600; line-height: 1; }
.author { color: var(--color-muted); font-size: 14px; }
.summary { max-width: 600px; margin-top: 28px; color: var(--color-muted); font-size: 16px; line-height: 1.9; }
.order-button { display: inline-flex; min-height: 48px; align-items: center; margin-top: 18px; padding: 0 22px; background: var(--color-forest); color: white; font-size: 14px; font-weight: 700; }
.order-note { color: var(--color-muted); font-size: 13px; }
@media(max-width: 700px) { .detail-grid { grid-template-columns: 1fr; } .detail-cover { width: min(100%,330px); } }
</style>

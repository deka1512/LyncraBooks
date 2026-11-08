<script setup lang="ts">
import type { StaticBook } from '~/data/books'
defineProps<{ book: StaticBook }>()
function formatPrice(price: number | null, currency: 'USD' | 'CDF') {
  if (price === null) return 'Prix à confirmer'
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price)
}
</script>
<template>
  <article class="book-card">
    <NuxtLink :to="'/livres/' + book.slug" class="book-image">
      <img :src="book.image" :alt="'Couverture du livre ' + book.title" loading="lazy">
      <span class="image-arrow" aria-hidden="true">↗</span>
    </NuxtLink>
    <div class="book-info">
      <span class="book-category">{{ book.category }}</span>
      <h3><NuxtLink :to="'/livres/' + book.slug">{{ book.title }}</NuxtLink></h3>
      <p class="book-author">{{ book.author }}</p>
      <div class="book-bottom"><strong class="book-price">{{ formatPrice(book.price, book.currency) }}</strong><NuxtLink class="book-link" :to="'/livres/' + book.slug">Voir le livre <span>↗</span></NuxtLink></div>
    </div>
  </article>
</template>
<style scoped>
.book-card{min-width:0;overflow:hidden;border-radius:18px;background:rgba(255,255,255,.58);box-shadow:0 8px 28px rgba(25,60,50,.055);transition:transform .35s ease,box-shadow .35s ease}
.book-card:hover{transform:translateY(-7px);box-shadow:0 18px 38px rgba(25,60,50,.12)}
.book-image{position:relative;display:block;aspect-ratio:3/4;overflow:hidden;background:#e9e2d5}
.book-image img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}
.book-card:hover .book-image img{transform:scale(1.07)}
.image-arrow{position:absolute;right:13px;bottom:13px;display:grid;width:40px;height:40px;place-items:center;border-radius:50%;background:var(--color-forest);color:white}
.book-info{padding:17px 17px 19px}.book-category{color:var(--color-gold);font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
.book-info h3{margin:8px 0 3px;color:var(--color-forest);font-family:var(--font-heading);font-size:24px;font-weight:600;line-height:1.08}
.book-author{margin:0 0 15px;color:var(--color-muted);font-size:12px}
.book-bottom{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;padding-top:12px;border-top:1px solid var(--color-border)}
.book-price{color:var(--color-forest);font-size:13px}.book-link{color:var(--color-forest);font-size:12px;font-weight:700}.book-link span{margin-left:4px;color:var(--color-gold)}
@media(prefers-reduced-motion:reduce){.book-card,.book-image img{transition:none}}
</style>

<script setup lang="ts">
import type { StaticBook } from '~/data/books'

defineProps<{
  book: StaticBook
}>()
</script>

<template>
  <article class="book-card">
    <NuxtLink :to="`/livres/${book.slug}`" class="book-image">
      <img :src="book.image" :alt="`Ambiance de lecture pour ${book.title}`" loading="lazy">
      <span class="image-arrow" aria-hidden="true">↗</span>
    </NuxtLink>
    <div class="book-info">
      <span class="book-category">{{ book.category }}</span>
      <h3><NuxtLink :to="`/livres/${book.slug}`">{{ book.title }}</NuxtLink></h3>
      <p class="book-author">{{ book.author }}</p>
      <NuxtLink class="book-link" :to="`/livres/${book.slug}`">Découvrir le livre <span>↗</span></NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.book-card { min-width: 0; }
.book-image { position: relative; display: block; aspect-ratio: 3 / 4; overflow: hidden; background: #e9e2d5; }
.book-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease; }
.book-card:hover .book-image img { transform: scale(1.045); }
.image-arrow { position: absolute; right: 14px; bottom: 14px; display: grid; width: 38px; height: 38px; place-items: center; border-radius: 50%; background: var(--color-ivory); color: var(--color-forest); }
.book-info { padding-top: 16px; }
.book-category { color: var(--color-gold); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.book-info h3 { margin: 8px 0 3px; color: var(--color-forest); font-family: var(--font-heading); font-size: 25px; font-weight: 600; line-height: 1.08; }
.book-author { margin: 0 0 13px; color: var(--color-muted); font-size: 13px; }
.book-link { color: var(--color-forest); font-size: 13px; font-weight: 700; }
.book-link span { margin-left: 5px; color: var(--color-gold); }
</style>

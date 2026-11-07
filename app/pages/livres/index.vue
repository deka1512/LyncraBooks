<script setup lang="ts">
import { books } from '~/data/books'

const selectedCategory = ref('Toutes')
const categories = ['Toutes', ...new Set(books.map(book => book.category))]
const visibleBooks = computed(() =>
  selectedCategory.value === 'Toutes'
    ? books
    : books.filter(book => book.category === selectedCategory.value),
)

useSeoMeta({
  title: 'Catalogue des livres | Lyncra Books',
  description: 'Parcourez le catalogue Lyncra Books et trouvez votre prochaine lecture.',
})
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container page-main">
      <p class="eyebrow">La bibliothèque</p>
      <h1 class="section-title">Le catalogue des livres.</h1>
      <p class="page-intro">Des lectures sélectionnées pour nourrir la réflexion, la foi et la connaissance.</p>

      <div class="filters" aria-label="Filtrer les livres par collection">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <p class="result-count">{{ visibleBooks.length }} livre(s) dans la sélection</p>
      <div class="book-grid">
        <BookCard v-for="book in visibleBooks" :key="book.id" :book="book" />
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page-main { min-height: 60vh; padding-block: 76px 100px; }
.eyebrow { margin: 0 0 14px; color: var(--color-gold); font-size: 12px; font-weight: 700; letter-spacing: .17em; text-transform: uppercase; }
.section-title { margin: 0; color: var(--color-forest); font-family: var(--font-heading); font-size: clamp(42px,6vw,66px); font-weight: 600; line-height: 1; }
.page-intro { max-width: 560px; color: var(--color-muted); font-size: 16px; line-height: 1.8; }
.filters { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 38px; }
.filters button { padding: 10px 16px; border: 1px solid var(--color-border); background: transparent; color: var(--color-brown); font-size: 13px; }
.filters button.active { border-color: var(--color-forest); background: var(--color-forest); color: white; }
.result-count { margin: 30px 0 18px; color: var(--color-muted); font-size: 13px; }
.book-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 38px 22px; }
@media(max-width: 900px) { .book-grid { grid-template-columns: repeat(3,minmax(0,1fr)); } }
@media(max-width: 650px) { .page-main { padding-block: 52px 70px; } .book-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px 14px; } .filters { gap: 7px; } .filters button { padding: 9px 11px; font-size: 12px; } }
</style>

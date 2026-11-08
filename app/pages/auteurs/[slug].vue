<script setup lang="ts">
import { authors } from '~/data/authors'
import { books } from '~/data/books'

const route = useRoute()
const author = authors.find(item => item.slug === String(route.params.slug))
if (!author) throw createError({ statusCode: 404, statusMessage: 'Auteur introuvable' })

const authorBooks = books.filter(book => book.authorSlug === author.slug)

useSeoMeta({
  title: () => `${author.name} | Lyncra Books`,
  description: () => author.shortBio,
})
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container author-page">
      <NuxtLink to="/auteurs" class="back-link">← Tous les auteurs</NuxtLink>
      <section class="author-hero">
        <div class="author-visual" aria-hidden="true">
          <span class="author-monogram">L</span>
          <span class="author-signature">LYNCRA BOOKS</span>
        </div>
        <div class="author-copy">
          <p class="eyebrow">{{ author.role }}</p>
          <h1>{{ author.name }}</h1>
          <p class="lead">{{ author.shortBio }}</p>
          <p>{{ author.biography }}</p>
          <span class="book-total">{{ authorBooks.length }} ouvrage(s) associé(s)</span>
        </div>
      </section>

      <section class="author-bibliography">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Bibliographie</p>
            <h2>Les lectures de {{ author.name }}.</h2>
          </div>
          <NuxtLink to="/livres" class="text-link">Tout le catalogue ↗</NuxtLink>
        </div>
        <div v-if="authorBooks.length" class="book-grid">
          <BookCard v-for="book in authorBooks" :key="book.id" :book="book" />
        </div>
        <p v-else class="empty-state">Aucun ouvrage n'est associé à ce profil pour le moment.</p>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.author-page { min-height: 60vh; padding-block: 42px 100px; }
.back-link { display: inline-flex; padding: 10px 15px; border-radius: 99px; background: #eee9df; color: var(--color-forest); font-size: 13px; }
.author-hero { display: grid; grid-template-columns: minmax(230px,340px) 1fr; gap: clamp(32px,7vw,86px); align-items: center; margin: 42px 0 92px; }
.author-visual { position: relative; display: grid; min-height: 400px; place-items: center; overflow: hidden; border-radius: 22px; background: radial-gradient(circle at 50% 45%,#315b4c 0,#193c32 55%,#102b23 100%); }
.author-visual::before,.author-visual::after { position: absolute; width: 260px; height: 260px; border: 1px solid rgba(217,195,147,.28); border-radius: 50%; content: ''; }
.author-visual::after { width: 190px; height: 190px; }
.author-monogram { z-index: 1; color: #e1d0aa; font-family: var(--font-heading); font-size: 150px; line-height: 1; }
.author-signature { position: absolute; right: 20px; bottom: 18px; color: rgba(255,255,255,.65); font-size: 9px; letter-spacing: .2em; }
.eyebrow { margin: 0 0 12px; color: var(--color-gold); font-size: 11px; font-weight: 700; letter-spacing: .17em; text-transform: uppercase; }
.author-copy h1 { margin: 0 0 18px; color: var(--color-forest); font-family: var(--font-heading); font-size: clamp(42px,6vw,68px); font-weight: 600; line-height: 1; }
.author-copy > p:not(.eyebrow) { color: var(--color-muted); font-size: 15px; line-height: 1.9; }
.author-copy .lead { color: var(--color-brown); font-size: 18px; }
.book-total { display: inline-block; margin-top: 14px; color: var(--color-gold); font-size: 12px; font-weight: 700; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 22px; margin-bottom: 32px; }
.section-heading h2 { margin: 0; color: var(--color-forest); font-family: var(--font-heading); font-size: clamp(30px,4vw,44px); font-weight: 600; line-height: 1.05; }
.text-link { color: var(--color-forest); font-size: 13px; font-weight: 700; white-space: nowrap; }
.book-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 28px 20px; }
.empty-state { padding: 28px; background: #fff; color: var(--color-muted); }
@media (max-width: 900px) { .book-grid { grid-template-columns: repeat(3,minmax(0,1fr)); } }
@media (max-width: 700px) {
  .author-page { padding-block: 30px 72px; }
  .author-hero { grid-template-columns: 1fr; margin: 30px 0 65px; }
  .author-visual { min-height: 280px; max-width: 360px; }
  .section-heading { align-items: flex-start; flex-direction: column; }
  .book-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px 14px; }
}
</style>

<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug)
const { getAuthorBySlug, getBooksByAuthor, bookImage, bookCategories } = useWordPress()
const { data: author } = await useAsyncData(`author-${slug}`, () => getAuthorBySlug(slug))
if (!author.value) throw createError({ statusCode: 404, statusMessage: 'Auteur introuvable' })
const { data: books } = await useAsyncData(`author-books-${slug}`, () => getBooksByAuthor(slug))
useSeoMeta({ title: () => `${author.value?.name || 'Auteur'} | Lyncra Books`, description: () => author.value?.shortBio || 'Découvrez les livres de cet auteur.' })
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container author-page" v-if="author">
      <NuxtLink to="/auteurs" class="back-link">← Tous les auteurs</NuxtLink>
      <section class="author-hero">
        <div class="author-photo"><img :src="author.portrait" :alt="`Portrait de ${author.name}`"></div>
        <div class="author-bio">
          <p class="eyebrow">Notre auteur</p>
          <h1>{{ author.name }}</h1>
          <p class="lead">{{ author.shortBio }}</p>
          <p>{{ author.biography }}</p>
          <span class="book-total">{{ books?.length || 0 }} ouvrage(s) disponible(s)</span>
        </div>
      </section>
      <section class="author-books">
        <p class="eyebrow">Bibliographie</p>
        <h2>Les livres de {{ author.name }}</h2>
        <div v-if="books?.length" class="book-grid">
          <article v-for="book in books" :key="book.id" class="book-card">
            <NuxtLink :to="`/livres/${book.slug}`" class="book-cover">
              <img v-if="bookImage(book)" :src="bookImage(book)" :alt="`Couverture de ${book.title.rendered}`" loading="lazy">
              <span v-else>{{ book.title.rendered }}</span>
            </NuxtLink>
            <p class="category">{{ bookCategories(book).join(' · ') }}</p>
            <h3><NuxtLink :to="`/livres/${book.slug}`">{{ book.title.rendered }}</NuxtLink></h3>
            <NuxtLink class="discover" :to="`/livres/${book.slug}`">Découvrir ↗</NuxtLink>
          </article>
        </div>
        <p v-else class="empty">Aucun livre associé pour le moment.</p>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.author-page{min-height:60vh;padding-block:42px 100px}.back-link{color:var(--color-muted);font-size:14px}.author-hero{display:grid;grid-template-columns:minmax(240px,360px) 1fr;gap:clamp(32px,7vw,90px);align-items:center;margin:38px 0 100px}.author-photo{aspect-ratio:4/5;overflow:hidden;background:#e9e2d5}.author-photo img{width:100%;height:100%;object-fit:cover}.eyebrow{color:var(--color-gold);font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}.author-bio h1{margin:12px 0 20px;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(42px,6vw,66px);font-weight:500;line-height:1}.author-bio p:not(.eyebrow){color:var(--color-muted);font-size:16px;line-height:1.9}.author-bio .lead{color:var(--color-brown);font-size:19px!important}.book-total{display:inline-block;margin-top:12px;color:var(--color-gold);font-size:13px;font-weight:700}.author-books h2{margin:10px 0 30px;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(30px,4vw,42px);font-weight:500}.book-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px 20px}.book-cover{display:flex;aspect-ratio:3/4;overflow:hidden;align-items:center;justify-content:center;background:var(--color-forest);color:white}.book-cover img{width:100%;height:100%;object-fit:cover}.category{margin:12px 0 5px;color:var(--color-gold);font-size:11px;text-transform:uppercase;letter-spacing:.08em}.book-card h3{margin:5px 0;color:var(--color-forest);font-family:var(--font-heading);font-size:21px}.discover{color:var(--color-brown);font-size:13px;font-weight:700}.empty{color:var(--color-muted)}@media(max-width:850px){.author-hero{grid-template-columns:250px 1fr}.book-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:600px){.author-hero{grid-template-columns:1fr;margin-bottom:65px}.author-photo{width:min(100%,300px)}.book-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
</style>

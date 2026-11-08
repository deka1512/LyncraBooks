<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug)
const { getCategories, getBooks, bookImage } = useWordPress()
const { data: categories } = await useAsyncData('collection-categories', getCategories)
const category = computed(() => categories.value?.find(item => item.slug === slug) || null)
const { data: books } = await useAsyncData(`collection-${slug}`, () => getBooks({ category: slug, per_page: 100 }))
if (!category.value) throw createError({ statusCode: 404, statusMessage: 'Collection introuvable' })
useSeoMeta({ title: () => `${category.value?.name || 'Collection'} | Lyncra Books`, description: () => category.value?.description || 'Découvrez les livres de cette catégorie.' })
</script>
<template>
  <div><SiteHeader /><main class="container collection-page">
    <NuxtLink to="/collections" class="back-link">← Toutes les collections</NuxtLink>
    <p class="eyebrow">Collection / catégorie</p><h1>{{ category?.name }}</h1>
    <p class="intro">{{ category?.description }}</p>
    <div v-if="books?.length" class="book-grid">
      <article v-for="book in books" :key="book.id" class="book-card">
        <NuxtLink :to="`/livres/${book.slug}`" class="book-cover">
          <img v-if="bookImage(book)" :src="bookImage(book)" :alt="`Couverture de ${book.title.rendered}`" loading="lazy">
          <span v-else>{{ book.title.rendered }}</span>
        </NuxtLink>
        <h2><NuxtLink :to="`/livres/${book.slug}`">{{ book.title.rendered }}</NuxtLink></h2>
        <p v-if="book.authors?.length" class="authors">Par {{ book.authors.map(author => author.name).join(' · ') }}</p>
        <NuxtLink class="discover" :to="`/livres/${book.slug}`">Découvrir le livre ↗</NuxtLink>
      </article>
    </div>
    <div v-else class="empty">Aucun livre n'est encore associé à cette catégorie.</div>
  </main><SiteFooter /></div>
</template>
<style scoped>
.collection-page{min-height:60vh;padding-block:42px 100px}.back-link{color:var(--color-muted);font-size:14px}.eyebrow{margin-top:45px;color:var(--color-gold);font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}.collection-page h1{margin:12px 0;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(42px,6vw,66px);font-weight:500;line-height:1}.intro{max-width:600px;color:var(--color-muted);font-size:16px;line-height:1.8}.book-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px 22px;margin-top:45px}.book-cover{display:flex;aspect-ratio:3/4;align-items:center;justify-content:center;overflow:hidden;background:var(--color-forest);color:white}.book-cover img{width:100%;height:100%;object-fit:cover}.book-card h2{margin:12px 0 5px;color:var(--color-forest);font-family:var(--font-heading);font-size:22px}.authors{margin:0 0 8px;color:var(--color-muted);font-size:13px}.discover{color:var(--color-brown);font-size:13px;font-weight:700}.empty{margin-top:40px;padding:35px;background:#fff;color:var(--color-muted)}@media(max-width:850px){.book-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:600px){.book-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 14px}}
</style>
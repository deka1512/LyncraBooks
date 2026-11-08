<script setup lang="ts">
const { getCategories, getBooks } = useWordPress()
const { data: categories } = await useAsyncData('book-categories', getCategories)
const { data: books } = await useAsyncData('collection-counts', () => getBooks({ per_page: 100 }))
useSeoMeta({ title: 'Collections | Lyncra Books', description: 'Explorez les catégories et univers de lecture de Lyncra Books.' })
const countFor = (slug: string) => books.value?.filter(book => book._embedded?.['wp:term']?.flat().some(term => term.slug === slug)).length || 0
</script>
<template>
  <div><SiteHeader /><main class="container page-main">
    <p class="eyebrow">Explorer nos univers</p><h1 class="section-title">Des collections pour chaque chemin.</h1>
    <p class="intro">Les catégories rassemblent les livres par thème. Choisissez un univers et découvrez les ouvrages qui lui sont associés.</p>
    <div class="collection-list">
      <article v-for="(item,index) in categories || []" :key="item.id" class="collection-card" :class="`tone-${index % 3}`">
        <span class="number">0{{ index + 1 }}</span><div><span class="subtitle">Catégorie de lecture</span><h2>{{ item.name }}</h2><p>{{ item.description || 'Une sélection de livres à découvrir.' }}</p><small>{{ countFor(item.slug) }} livre(s)</small></div>
        <NuxtLink :to="`/collections/${item.slug}`" aria-label="Explorer cette catégorie">↗</NuxtLink>
      </article>
    </div>
  </main><SiteFooter /></div>
</template>
<style scoped>
.page-main{min-height:60vh;padding-block:76px 100px}.eyebrow,.subtitle{color:var(--color-gold);font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}.section-title{max-width:780px;margin:15px 0;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(42px,6vw,68px);font-weight:500;line-height:1}.intro{max-width:570px;color:var(--color-muted);font-size:16px;line-height:1.8}.collection-list{display:grid;gap:16px;margin-top:48px}.collection-card{min-height:210px;display:grid;grid-template-columns:70px 1fr 40px;align-items:center;gap:20px;padding:30px;color:white}.tone-0{background:var(--color-forest)}.tone-1{background:var(--color-brown)}.tone-2{background:#86734f}.number{color:#d9c393;font-size:13px}.collection-card h2{margin:8px 0;font-family:var(--font-heading);font-size:36px;font-weight:500}.collection-card p{margin:0;color:rgba(255,255,255,.7);font-size:15px}.collection-card small{display:inline-block;margin-top:12px;color:#d9c393}.collection-card a{color:#d9c393;font-size:26px}@media(max-width:600px){.page-main{padding-block:52px 70px}.collection-card{grid-template-columns:35px 1fr 25px;padding:20px 15px}.collection-card h2{font-size:27px}}
</style>
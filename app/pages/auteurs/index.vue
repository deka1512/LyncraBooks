<script setup lang="ts">
const { getAuthors, getBooksByAuthor } = useWordPress()
const { data: authors } = await useAsyncData('authors-index', getAuthors)
useSeoMeta({ title: 'Nos auteurs | Lyncra Books', description: 'Découvrez les auteurs et leurs ouvrages disponibles chez Lyncra Books.' })
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container authors-page">
      <p class="eyebrow">Les voix derrière les livres</p>
      <h1>Rencontrez nos auteurs.</h1>
      <p class="intro">Des auteurs aux parcours singuliers, des idées qui font grandir et des livres à découvrir.</p>
      <div class="authors-grid">
        <article v-for="author in authors || []" :key="author.id" class="author-card">
          <NuxtLink :to="`/auteurs/${author.slug}`" class="portrait"><img :src="author.portrait" :alt="`Portrait de ${author.name}`" loading="lazy"></NuxtLink>
          <div class="author-copy">
            <p class="eyebrow">Auteur Lyncra Books</p>
            <h2><NuxtLink :to="`/auteurs/${author.slug}`">{{ author.name }}</NuxtLink></h2>
            <p>{{ author.shortBio }}</p>
            <span class="book-count">{{ getBooksByAuthor(author.slug).length }} livre(s) au catalogue</span>
            <NuxtLink class="author-link" :to="`/auteurs/${author.slug}`">Découvrir l'auteur ↗</NuxtLink>
          </div>
        </article>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.authors-page{min-height:60vh;padding-block:76px 100px}.eyebrow{color:var(--color-gold);font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}.authors-page h1{max-width:800px;margin:15px 0;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(44px,6vw,70px);font-weight:500;line-height:1}.intro{max-width:600px;color:var(--color-muted);font-size:16px;line-height:1.8}.authors-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px;margin-top:48px}.author-card{display:grid;grid-template-columns:190px 1fr;gap:22px;background:#fff;padding:18px}.portrait{display:block;aspect-ratio:3/4;overflow:hidden;background:#e9e2d5}.portrait img{width:100%;height:100%;object-fit:cover}.author-copy{align-self:center}.author-copy h2{margin:8px 0;color:var(--color-forest);font-family:var(--font-heading);font-size:28px;font-weight:600}.author-copy>p:not(.eyebrow){color:var(--color-muted);font-size:14px;line-height:1.7}.book-count{display:block;margin:14px 0;color:var(--color-gold);font-size:12px;font-weight:700}.author-link{color:var(--color-forest);font-size:13px;font-weight:700}@media(max-width:900px){.authors-grid{grid-template-columns:1fr}}@media(max-width:560px){.authors-page{padding-block:52px 70px}.author-card{grid-template-columns:115px 1fr;gap:14px;padding:12px}.author-copy h2{font-size:22px}.author-copy>p:not(.eyebrow){font-size:13px}}
</style>

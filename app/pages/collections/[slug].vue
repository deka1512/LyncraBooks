<script setup lang="ts">
import { books } from '~/data/books'

const route = useRoute()
const collections = [
  { slug: 'foi-spiritualite', title: 'Foi & spiritualité', subtitle: 'Approfondir sa relation avec Dieu', description: 'Des ouvrages pour nourrir la foi, approfondir la prière et méditer les Écritures.' },
  { slug: 'vie-chretienne-croissance', title: 'Vie chrétienne & croissance', subtitle: 'Vivre sa foi au quotidien', description: 'Des lectures pour grandir en caractère, renouveler ses pensées et mettre les valeurs de l’Évangile en pratique.' },
  { slug: 'bible-connaissance', title: 'Bible & connaissance', subtitle: 'Comprendre et discerner', description: 'Des ressources pour approfondir la connaissance biblique, rechercher la sagesse et exercer son discernement.' },
]
const collection = collections.find(item => item.slug === String(route.params.slug))
if (!collection) throw createError({ statusCode: 404, statusMessage: 'Collection introuvable' })
const collectionBooks = computed(() => books.filter(book => book.category === collection.title))
useSeoMeta({ title: () => `${collection.title} | Collections Lyncra Books`, description: () => collection.description })
</script>

<template>
  <div><SiteHeader /><main class="container collection-detail">
    <NuxtLink to="/collections" class="back-link">← Toutes les collections</NuxtLink>
    <header class="collection-heading"><p class="eyebrow">{{ collection.subtitle }}</p><h1>{{ collection.title }}</h1><p>{{ collection.description }}</p><span>{{ collectionBooks.length }} livre(s) dans cette collection</span></header>
    <section class="collection-books"><div v-if="collectionBooks.length" class="book-grid"><BookCard v-for="book in collectionBooks" :key="book.id" :book="book" /></div><p v-else class="empty-state">De nouveaux ouvrages seront bientôt ajoutés à cette collection.</p></section>
  </main><SiteFooter /></div>
</template>

<style scoped>
.collection-detail{min-height:60vh;padding-block:45px 100px}.back-link{display:inline-flex;padding:10px 15px;border-radius:99px;background:#eee9df;color:var(--color-forest);font-size:13px}.collection-heading{max-width:760px;margin:58px 0 48px}.eyebrow{margin:0 0 12px;color:var(--color-gold);font-size:11px;font-weight:700;letter-spacing:.17em;text-transform:uppercase}.collection-heading h1{margin:0;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(42px,6vw,68px);font-weight:600;line-height:1}.collection-heading>p:not(.eyebrow){max-width:600px;margin:20px 0;color:var(--color-muted);font-size:16px;line-height:1.85}.collection-heading>span{color:var(--color-gold);font-size:12px;font-weight:700}.book-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px 22px}.empty-state{padding:28px;background:white;color:var(--color-muted)}@media(max-width:900px){.book-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:650px){.collection-detail{padding-block:32px 70px}.collection-heading{margin:42px 0 35px}.book-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 14px}}
</style>

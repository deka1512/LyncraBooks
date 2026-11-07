<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug)
const { getBookBySlug, bookImage, bookCategories, baseUrl } = useWordPress()
const { orderLink } = useWhatsApp()
const { data: book } = await useAsyncData(`book-${slug}`, () => getBookBySlug(slug))

if (!book.value) {
  throw createError({ statusCode: 404, statusMessage: 'Livre introuvable' })
}

useSeoMeta({
  title: () => `${book.value?.title.rendered || 'Livre'} | Lyncra Books`,
  description: () => book.value?.excerpt?.rendered?.replace(/<[^>]*>/g, '').slice(0, 160) || 'Découvrez ce livre chez Lyncra Books.',
})
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container detail-main" v-if="book">
      <NuxtLink to="/livres" class="back-link">← Retour au catalogue</NuxtLink>
      <div class="detail-grid">
        <div class="detail-cover">
          <img v-if="bookImage(book)" :src="bookImage(book)" :alt="book.title.rendered">
          <div v-else class="cover-placeholder"><span>Lyncra Books</span><strong>{{ book.title.rendered }}</strong></div>
        </div>
        <div class="detail-copy">
          <p class="eyebrow">{{ bookCategories(book).join(' · ') || 'Sélection Lyncra' }}</p>
          <h1>{{ book.title.rendered }}</h1>
          <div v-if="book.excerpt?.rendered" class="book-excerpt" v-html="book.excerpt.rendered" />
          <div v-if="book.content?.rendered" class="book-content" v-html="book.content.rendered" />
          <a class="order-button" :href="orderLink(book.title.rendered)" target="_blank" rel="noopener noreferrer">Commander sur WhatsApp ↗</a>
          <p class="order-note">Contactez-nous pour connaître le prix et la disponibilité.</p>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.detail-main { min-height:65vh; padding-block:42px 100px; }
.back-link { color:var(--color-muted); font-size:14px; }
.detail-grid { display:grid; grid-template-columns:minmax(260px,390px) 1fr; gap:clamp(35px,7vw,90px); align-items:start; margin-top:38px; }
.detail-cover { aspect-ratio:3/4; max-height:560px; overflow:hidden; background:#e9e2d5; box-shadow:var(--shadow-soft); }
.detail-cover img { width:100%; height:100%; object-fit:cover; }
.cover-placeholder { height:100%; display:flex; flex-direction:column; justify-content:space-between; padding:28px; background:var(--color-forest); color:var(--color-ivory); }
.cover-placeholder span { color:var(--color-gold); font-family:var(--font-heading); font-size:20px; }
.cover-placeholder strong { font-family:var(--font-heading); font-size:32px; font-weight:500; }
.eyebrow { color:var(--color-gold); font-size:12px; letter-spacing:.15em; text-transform:uppercase; }
.detail-copy h1 { margin:14px 0 20px; color:var(--color-forest); font-family:var(--font-heading); font-size:clamp(42px,6vw,66px); font-weight:500; line-height:1; }
.book-excerpt,.book-content { color:var(--color-muted); font-size:16px; line-height:1.9; }
.book-content { margin-top:24px; }
.order-button { display:inline-flex; min-height:48px; align-items:center; margin-top:28px; padding:0 22px; background:var(--color-forest); color:white; font-size:14px; font-weight:700; }
.order-note { color:var(--color-muted); font-size:13px; }
@media(max-width:700px) { .detail-grid { grid-template-columns:1fr; } .detail-cover { width:min(100%,330px); } }
</style>

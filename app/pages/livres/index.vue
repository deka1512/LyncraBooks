<script setup lang="ts">
const { getBooks, bookImage, bookCategories, baseUrl } = useWordPress()
const { data: books, pending } = await useAsyncData('catalogue-books', () => getBooks({ per_page: 24 }))
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

      <div v-if="pending" class="status-message">Chargement du catalogue…</div>
      <div v-else-if="books?.length" class="book-grid">
        <article v-for="book in books" :key="book.id" class="book-card">
          <NuxtLink :to="`/livres/${book.slug}`" class="book-cover">
            <img v-if="bookImage(book)" :src="bookImage(book)" :alt="book.title.rendered" loading="lazy">
            <div v-else class="cover-placeholder"><span>Lyncra Books</span><strong>{{ book.title.rendered }}</strong></div>
          </NuxtLink>
          <div class="book-info">
            <span class="book-category">{{ bookCategories(book).join(' · ') || 'Sélection Lyncra' }}</span>
            <h2><NuxtLink :to="`/livres/${book.slug}`">{{ book.title.rendered }}</NuxtLink></h2>
            <NuxtLink class="read-link" :to="`/livres/${book.slug}`">Découvrir le livre ↗</NuxtLink>
          </div>
        </article>
      </div>
      <div v-else class="empty-state">
        <span class="empty-icon">✳</span>
        <h2>Notre sélection se prépare.</h2>
        <p v-if="!baseUrl">Le catalogue sera bientôt disponible. Revenez découvrir nos premières références.</p>
        <p v-else>Aucun livre n'est publié pour le moment. Notre catalogue sera enrichi très bientôt.</p>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page-main { min-height:60vh; padding-block:76px 100px; }
.eyebrow { color:var(--color-gold); font-size:12px; font-weight:700; letter-spacing:.17em; text-transform:uppercase; }
.section-title { margin:14px 0; color:var(--color-forest); font-family:var(--font-heading); font-size:clamp(42px,6vw,66px); font-weight:500; line-height:1; }
.page-intro { max-width:560px; color:var(--color-muted); font-size:16px; }
.book-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:34px 22px; margin-top:48px; }
.book-cover { display:block; aspect-ratio:3/4; overflow:hidden; background:#e9e2d5; box-shadow:var(--shadow-soft); }
.book-cover img { width:100%; height:100%; object-fit:cover; transition:transform .3s ease; }
.book-card:hover img { transform:scale(1.04); }
.cover-placeholder { width:100%; height:100%; display:flex; flex-direction:column; justify-content:space-between; padding:22px; background:var(--color-forest); color:var(--color-ivory); }
.cover-placeholder span { color:var(--color-gold); font-family:var(--font-heading); font-size:17px; }
.cover-placeholder strong { font-family:var(--font-heading); font-size:25px; font-weight:500; line-height:1.1; }
.book-info { padding-top:14px; }
.book-category { color:var(--color-gold); font-size:12px; letter-spacing:.1em; text-transform:uppercase; }
.book-info h2 { margin:7px 0 10px; color:var(--color-forest); font-family:var(--font-heading); font-size:24px; font-weight:600; line-height:1.1; }
.read-link { color:var(--color-brown); font-size:13px; font-weight:700; }
.empty-state { margin-top:55px; padding:60px 24px; background:#fff; text-align:center; }
.empty-icon { color:var(--color-gold); font-size:30px; }
.empty-state h2 { color:var(--color-forest); font-family:var(--font-heading); font-size:32px; font-weight:500; }
.empty-state p,.status-message { color:var(--color-muted); font-size:16px; }
@media(max-width:900px) { .book-grid { grid-template-columns:repeat(3,minmax(0,1fr)); } }
@media(max-width:600px) { .page-main { padding-block:52px 70px; } .book-grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:25px 14px; } }
</style>

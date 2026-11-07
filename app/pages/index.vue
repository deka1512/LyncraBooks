<script setup lang="ts">
import { books } from '~/data/books'

useSeoMeta({
  title: 'Lyncra Books — Des livres pour nourrir votre esprit',
  description: 'Découvrez une sélection de lectures inspirantes autour de la foi, du développement personnel et de la connaissance.',
})

const featuredBooks = books.filter(book => book.featured).slice(0, 4)

const collections = [
  {
    number: '01',
    title: 'Foi & spiritualité',
    subtitle: 'Nourrir sa foi',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1100&q=85',
    description: 'Des lectures pour approfondir la foi, la méditation et la vie spirituelle.',
  },
  {
    number: '02',
    title: 'Développement personnel',
    subtitle: 'Grandir et avancer',
    image: 'https://images.unsplash.com/photo-1473755504818-b72b6dfdc226?auto=format&fit=crop&w=1100&q=85',
    description: 'Des idées et des outils pour mieux se connaître et progresser.',
  },
  {
    number: '03',
    title: 'Savoir & connaissance',
    subtitle: 'Élargir ses horizons',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1100&q=85',
    description: 'Des ouvrages pour apprendre, réfléchir et découvrir de nouvelles perspectives.',
  },
]
</script>

<template>
  <div>
    <SiteHeader />

    <main>
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">La lecture qui inspire</p>
            <h1>Des livres pour <em>élever</em> l’esprit et nourrir la réflexion.</h1>
            <p class="hero-description">
              Explorez des lectures choisies pour accompagner votre cheminement,
              enrichir vos réflexions et éclairer votre quotidien.
            </p>
            <div class="hero-actions">
              <NuxtLink class="button" to="/livres">Découvrir les livres <span>↗</span></NuxtLink>
              <NuxtLink class="text-link" to="/collections">Explorer les collections <span>↗</span></NuxtLink>
            </div>
            <div class="hero-note"><span></span>Des lectures choisies avec sens et intention.</div>
          </div>
          <div class="hero-image">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=90"
              alt="Livres ouverts et empilés dans une ambiance chaleureuse"
              fetchpriority="high"
            >
            <div class="image-caption"><span>LYNCRA BOOKS</span><strong>Lire. Grandir. Transmettre.</strong></div>
          </div>
        </div>
      </section>

      <section class="intro-section">
        <div class="container intro-grid">
          <div>
            <p class="eyebrow">Notre sélection</p>
            <h2 class="section-title">Une bibliothèque<br>qui a du sens.</h2>
          </div>
          <div class="intro-copy">
            <p>Chaque livre ouvre une porte : vers une nouvelle idée, une compréhension plus profonde ou une perspective différente. Trouvez celui qui accompagnera votre prochaine étape.</p>
            <NuxtLink to="/a-propos" class="text-link">Découvrir notre univers ↗</NuxtLink>
          </div>
        </div>
      </section>

      <section class="featured-section">
        <div class="container">
          <div class="section-heading">
            <div><p class="eyebrow">À découvrir</p><h2 class="section-title">Quelques pages à ouvrir.</h2></div>
            <NuxtLink class="text-link" to="/livres">Tout le catalogue ↗</NuxtLink>
          </div>
          <div class="book-grid">
            <BookCard v-for="book in featuredBooks" :key="book.id" :book="book" />
          </div>
        </div>
      </section>

      <section class="collections-section">
        <div class="container">
          <div class="section-heading">
            <div><p class="eyebrow">Explorer</p><h2 class="section-title">Des univers à découvrir.</h2></div>
            <NuxtLink to="/collections" class="text-link">Toutes les collections ↗</NuxtLink>
          </div>
          <div class="collection-grid">
            <NuxtLink
              v-for="collection in collections"
              :key="collection.number"
              to="/collections"
              class="collection-card"
            >
              <img :src="collection.image" :alt="collection.title" loading="lazy">
              <span class="collection-number">{{ collection.number }}</span>
              <div class="collection-copy">
                <span>{{ collection.subtitle }}</span>
                <h3>{{ collection.title }}</h3>
                <p>{{ collection.description }}</p>
                <b aria-hidden="true">↗</b>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="quote-section">
        <div class="container quote-inner">
          <span class="quote-mark">“</span>
          <blockquote>Un bon livre ne remplit pas seulement une étagère. <em>Il ouvre de nouveaux horizons.</em></blockquote>
          <p class="eyebrow">L’esprit Lyncra Books</p>
        </div>
      </section>

      <section class="contact-section">
        <div class="container contact-inner">
          <div><p class="eyebrow">Parlons lecture</p><h2>Votre prochain livre<br>vous attend.</h2></div>
          <div><p>Une question sur un livre ou besoin d’un conseil ? Notre équipe sera heureuse de vous orienter.</p><NuxtLink to="/contact" class="button button--light">Nous contacter <span>↗</span></NuxtLink></div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.hero { overflow: hidden; background: var(--color-ivory); }
.hero-grid { min-height: 620px; display: grid; grid-template-columns: 1fr .92fr; align-items: center; gap: clamp(38px, 6vw, 82px); padding-block: 66px; }
.hero-copy { max-width: 590px; }
.eyebrow { margin: 0 0 14px; color: var(--color-gold); font-size: 12px; font-weight: 700; letter-spacing: .17em; text-transform: uppercase; }
.hero-copy h1 { margin: 0; color: var(--color-forest); font-family: var(--font-heading); font-size: clamp(3.5rem, 6.2vw, 5.4rem); font-weight: 600; line-height: .98; letter-spacing: -.025em; }
.hero-copy h1 em { color: var(--color-gold); font-weight: 500; }
.hero-description { max-width: 470px; margin: 24px 0 0; color: var(--color-muted); font-size: 16px; line-height: 1.9; }
.hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 25px; margin-top: 32px; }
.hero-actions .button span,.button--light span { margin-left: 8px; color: var(--color-gold); }
.text-link { color: var(--color-forest); font-size: 14px; font-weight: 700; }
.hero-note { display: flex; align-items: center; gap: 12px; margin-top: 48px; color: #8b857b; font-size: 12px; }
.hero-note span { width: 34px; height: 1px; background: var(--color-gold); }
.hero-image { position: relative; min-height: 490px; overflow: hidden; background: #d9d0c1; }
.hero-image img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.image-caption { position: absolute; right: 20px; bottom: 20px; left: 20px; display: flex; flex-direction: column; gap: 5px; padding: 20px; background: rgba(25,60,50,.88); color: white; }
.image-caption span { color: #d9c393; font-size: 10px; letter-spacing: .18em; }
.image-caption strong { font-family: var(--font-heading); font-size: 25px; font-weight: 600; }
.intro-section { padding-block: 92px 70px; background: #fff; }
.intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; }
.section-title { margin: 0; color: var(--color-forest); font-family: var(--font-heading); font-size: clamp(2.8rem, 5vw, 4.1rem); font-weight: 600; line-height: 1; letter-spacing: -.02em; }
.intro-copy { max-width: 510px; color: var(--color-muted); font-size: 15px; line-height: 1.9; }
.intro-copy .text-link { display: inline-block; margin-top: 10px; }
.featured-section { padding-block: 82px 100px; background: #fff; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 25px; margin-bottom: 38px; }
.section-heading .eyebrow { margin-bottom: 10px; }
.section-heading .section-title { font-size: clamp(2.4rem, 4.5vw, 3.5rem); }
.section-heading > .text-link { padding-bottom: 8px; white-space: nowrap; }
.book-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 28px 22px; }
.collections-section { padding-block: 88px 100px; }
.collection-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 20px; }
.collection-card { position: relative; display: flex; min-height: 390px; flex-direction: column; justify-content: space-between; overflow: hidden; padding: 22px; color: white; background: var(--color-forest); }
.collection-card::after { position: absolute; inset: 0; background: linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.78)); content: ''; }
.collection-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
.collection-card:hover img { transform: scale(1.05); }
.collection-number,.collection-copy { position: relative; z-index: 1; }
.collection-number { font-size: 12px; color: #f0d7a5; }
.collection-copy > span { color: #f0d7a5; font-size: 11px; letter-spacing: .13em; text-transform: uppercase; }
.collection-copy h3 { margin: 8px 0; font-family: var(--font-heading); font-size: 31px; font-weight: 600; line-height: 1.05; }
.collection-copy p { max-width: 300px; margin: 0; color: rgba(255,255,255,.82); font-size: 13px; line-height: 1.65; }
.collection-copy b { display: inline-block; margin-top: 18px; color: #f0d7a5; font-size: 20px; }
.quote-section { padding-block: 100px; background: #eee8dc; text-align: center; }
.quote-inner { max-width: 850px; }
.quote-mark { color: var(--color-gold); font-family: var(--font-heading); font-size: 90px; line-height: .8; }
blockquote { margin: 20px 0 25px; color: var(--color-forest); font-family: var(--font-heading); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; line-height: 1.08; }
blockquote em { color: var(--color-gold); font-weight: 500; }
.contact-section { padding-block: 76px; background: var(--color-forest); color: var(--color-ivory); }
.contact-inner { display: grid; grid-template-columns: 1fr .7fr; gap: 60px; align-items: center; }
.contact-inner h2 { margin: 0; font-family: var(--font-heading); font-size: clamp(2.8rem,5vw,4rem); font-weight: 600; line-height: 1; }
.contact-inner > div:last-child p { margin: 0 0 22px; color: rgba(255,255,255,.72); line-height: 1.8; }
.button--light { background: var(--color-ivory); border-color: var(--color-ivory); color: var(--color-forest); }
@media(max-width: 900px) { .hero-grid { grid-template-columns: 1fr 1fr; gap: 28px; } .hero-copy h1 { font-size: clamp(3rem,6vw,4.5rem); } .book-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } .collection-grid { grid-template-columns: 1fr 1fr; } }
@media(max-width: 640px) {
  .hero-grid { min-height: 0; grid-template-columns: 1fr; padding-block: 55px 40px; }
  .hero-copy h1 { font-size: clamp(3.2rem,13vw,4.6rem); }
  .hero-description { font-size: 15px; }
  .hero-actions { align-items: flex-start; flex-direction: column; gap: 18px; }
  .hero-note { margin-top: 32px; }
  .hero-image { min-height: 370px; }
  .intro-section { padding-block: 65px 45px; }
  .intro-grid { grid-template-columns: 1fr; gap: 22px; }
  .featured-section,.collections-section { padding-block: 62px 70px; }
  .section-heading { align-items: flex-start; flex-direction: column; gap: 12px; margin-bottom: 28px; }
  .book-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px 14px; }
  .collection-grid { grid-template-columns: 1fr; }
  .collection-card { min-height: 330px; }
  .quote-section { padding-block: 70px; }
  .contact-inner { grid-template-columns: 1fr; gap: 28px; }
}
</style>

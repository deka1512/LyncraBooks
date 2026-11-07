<script setup lang="ts">
useSeoMeta({ title: 'Lyncra Books — Des livres pour nourrir votre esprit', description: 'Découvrez des livres inspirants autour de la foi, du développement personnel et de la connaissance. Commandez directement via WhatsApp.' })
const config = useRuntimeConfig()
const { getBooks, bookImage } = useWordPress()
const { data: featuredBooks } = await useAsyncData('home-featured-books', () => getBooks({ per_page: 4 }))
const whatsappNumber = config.public.whatsappNumber
const whatsappMessage = encodeURIComponent(
  'Bonjour Lyncra Books, je souhaite découvrir votre catalogue de livres.',
)
const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  : '#contact'
</script>

<template>
  <main>
    <header class="site-header">
      <div class="container header-inner">
        <NuxtLink class="brand" to="/" aria-label="Lyncra Books, accueil">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M5 13.5c7-2.5 13.3-1.7 19 2.4v24c-5.7-4.1-12-4.9-19-2.4v-24Z" />
              <path d="M43 13.5c-7-2.5-13.3-1.7-19 2.4v24c5.7-4.1 12-4.9 19-2.4v-24Z" />
              <path d="M24 15.9v24" />
              <path d="M24 4v8" class="gold-stroke" />
              <path d="M20 8h8" class="gold-stroke" />
            </svg>
          </span>
          <span class="brand-name">Lyncra <span>Books</span></span>
        </NuxtLink>

        <nav class="main-nav" aria-label="Navigation principale">
          <a href="#accueil">Accueil</a>
          <a href="#catalogue">Livres</a>
          <a href="#collections">Collections</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </nav>

        <a class="header-cta" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">
          Nous contacter <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>

    <section id="accueil" class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">La lecture qui inspire</p>
          <h1>Des livres pour <em>élever</em> l’esprit et nourrir la foi.</h1>
          <p class="hero-description">
            Explorez une sélection de lectures inspirantes, pensées pour accompagner
            votre cheminement, enrichir vos réflexions et éclairer votre quotidien.
          </p>
          <div class="hero-actions">
            <a class="button" href="#catalogue">Découvrir les livres <span>→</span></a>
            <a class="text-link" href="#apropos">Notre univers <span>↗</span></a>
          </div>
          <div class="hero-note">
            <span class="note-line"></span>
            <span>Des lectures choisies avec sens et intention.</span>
          </div>
        </div>

        <div class="hero-art" aria-label="Composition éditoriale de livres">
          <div class="art-circle"></div>
          <div class="art-label">Lire · Grandir · Transmettre</div>
          <div class="book book-back"><span>LA SAGESSE</span></div>
          <div class="book book-middle"><span>GRANDIR EN FOI</span></div>
          <div class="book book-front">
            <div class="book-cover-rule"></div>
            <span class="book-small">UNE INVITATION À</span>
            <strong>VIVRE<br />AUTREMENT</strong>
            <span class="book-author">LYNCRA BOOKS</span>
            <div class="book-cover-rule bottom"></div>
          </div>
          <span class="art-sparkle sparkle-one">✳</span>
          <span class="art-sparkle sparkle-two">✧</span>
        </div>
      </div>
    </section>

    <section id="catalogue" class="intro-section">
      <div class="container intro-grid">
        <div>
          <p class="eyebrow">Notre sélection</p>
          <h2 class="section-title">Une bibliothèque<br />qui a du sens.</h2>
        </div>
        <div class="intro-copy">
          <p>
            Chaque livre ouvre une porte : vers une nouvelle idée, une compréhension
            plus profonde ou une perspective différente. Trouvez celui qui accompagnera
            votre prochaine étape.
          </p>
          <span class="coming-soon">Une sélection de livres pour nourrir votre curiosité et accompagner votre cheminement.</span>
        </div>
      </div>
    </section>

    <section class="featured-section">
      <div class="container">
        <div class="section-heading">
          <div><p class="eyebrow">À découvrir</p><h2 class="section-title">Quelques pages à ouvrir.</h2></div>
          <NuxtLink class="text-link" to="/livres">Tout le catalogue ↗</NuxtLink>
        </div>
        <div v-if="featuredBooks?.length" class="featured-grid">
          <article v-for="book in featuredBooks" :key="book.id" class="featured-card">
            <NuxtLink class="featured-cover" :to="`/livres/${book.slug}`">
              <img v-if="bookImage(book)" :src="bookImage(book)" :alt="book.title.rendered" loading="lazy">
              <span v-else>{{ book.title.rendered }}</span>
            </NuxtLink>
            <h3><NuxtLink :to="`/livres/${book.slug}`">{{ book.title.rendered }}</NuxtLink></h3>
            <NuxtLink class="read-link" :to="`/livres/${book.slug}`">Découvrir ↗</NuxtLink>
          </article>
        </div>
        <div v-else class="featured-empty">Notre sélection de livres sera bientôt disponible.</div>
      </div>
    </section>

    <section id="collections" class="collections-section">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Explorer</p>
            <h2 class="section-title">Des univers à découvrir.</h2>
          </div>
          <span class="heading-index">01 — 03</span>
        </div>
        <div class="collection-grid">
          <article class="collection-card collection-card--one">
            <span class="collection-number">01</span>
            <div>
              <p>Approfondir</p>
              <h3>Foi & spiritualité</h3>
              <span class="collection-arrow">↗</span>
            </div>
          </article>
          <article class="collection-card collection-card--two">
            <span class="collection-number">02</span>
            <div>
              <p>Se construire</p>
              <h3>Développement personnel</h3>
              <span class="collection-arrow">↗</span>
            </div>
          </article>
          <article class="collection-card collection-card--three">
            <span class="collection-number">03</span>
            <div>
              <p>Comprendre</p>
              <h3>Savoir & connaissance</h3>
              <span class="collection-arrow">↗</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="apropos" class="quote-section">
      <div class="container quote-inner">
        <span class="quote-mark">“</span>
        <blockquote>
          Un bon livre ne remplit pas seulement une étagère.
          <em>Il ouvre de nouveaux horizons.</em>
        </blockquote>
        <p class="eyebrow">L'esprit Lyncra Books</p>
      </div>
    </section>

    <footer id="contact" class="site-footer">
      <div class="container footer-main">
        <div>
          <NuxtLink class="brand brand--footer" to="/">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M5 13.5c7-2.5 13.3-1.7 19 2.4v24c-5.7-4.1-12-4.9-19-2.4v-24Z" />
                <path d="M43 13.5c-7-2.5-13.3-1.7-19 2.4v24c5.7-4.1 12-4.9 19-2.4v-24Z" />
                <path d="M24 15.9v24" />
                <path d="M24 4v8" class="gold-stroke" />
                <path d="M20 8h8" class="gold-stroke" />
              </svg>
            </span>
            <span class="brand-name">Lyncra <span>Books</span></span>
          </NuxtLink>
          <p class="footer-tagline">Des lectures qui inspirent, éclairent et transforment.</p>
        </div>
        <div class="footer-contact">
          <p class="eyebrow">Parlons lecture</p>
          <h2>Votre prochain livre<br />vous attend.</h2>
          <a class="button button--light" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">
            Écrire sur WhatsApp <span>↗</span>
          </a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© {{ new Date().getFullYear() }} Lyncra Books. Tous droits réservés.</span>
        <span>Lire. Grandir. Transmettre.</span>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.site-header { height: var(--header-height); background: var(--color-ivory); border-bottom: 1px solid var(--color-border); }
.header-inner { height: 100%; display: flex; align-items: center; justify-content: space-between; gap: 28px; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: var(--color-forest); flex-shrink: 0; }
.brand-mark { width: 38px; height: 38px; }
.brand-mark svg { width: 100%; height: 100%; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.brand-mark .gold-stroke { stroke: var(--color-gold); }
.brand-name { font-family: var(--font-heading); font-size: 27px; font-weight: 700; line-height: 1; }
.brand-name span { color: var(--color-gold); font-weight: 500; }
.main-nav { display: flex; align-items: center; gap: clamp(16px, 2.5vw, 34px); }
.main-nav a, .header-cta { font-size: 11px; font-weight: 600; }
.main-nav a { color: var(--color-brown); transition: color 160ms ease; }
.main-nav a:hover { color: var(--color-gold); }
.header-cta { padding: 12px 16px; border: 1px solid var(--color-forest); color: var(--color-forest); white-space: nowrap; }
.header-cta span { margin-left: 8px; color: var(--color-gold); }
.hero { overflow: hidden; background: var(--color-ivory); }
.hero-grid { min-height: 610px; display: grid; grid-template-columns: 1fr 0.9fr; align-items: center; gap: 50px; padding-block: 70px; }
.hero-copy { max-width: 570px; }
.hero-copy h1 { margin: 20px 0; color: var(--color-forest); font-family: var(--font-heading); font-size: clamp(3.6rem, 6.2vw, 5.7rem); font-weight: 500; line-height: 0.98; letter-spacing: -0.035em; }
.hero-copy h1 em { color: var(--color-gold); font-weight: 400; }
.hero-description { max-width: 470px; color: #746f66; font-size: 14px; line-height: 1.9; }
.hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 28px; margin-top: 32px; }
.hero-actions .button { font-size: 10px; }
.text-link { color: var(--color-forest); font-size: 11px; font-weight: 700; }
.text-link span { margin-left: 8px; color: var(--color-gold); }
.hero-note { display: flex; align-items: center; gap: 12px; margin-top: 54px; color: #8b857b; font-size: 10px; }
.note-line { width: 34px; height: 1px; background: var(--color-gold); }
.hero-art { min-height: 450px; position: relative; display: flex; align-items: center; justify-content: center; }
.art-circle { position: absolute; width: min(410px, 90%); aspect-ratio: 1; border: 1px solid rgba(184,154,97,.35); border-radius: 50%; background: radial-gradient(circle, rgba(184,154,97,.12), transparent 68%); }
.art-label { position: absolute; top: 28px; right: 0; color: var(--color-gold); font-size: 9px; letter-spacing: .2em; text-transform: uppercase; }
.book { position: absolute; width: 170px; height: 255px; display: flex; align-items: center; justify-content: center; box-shadow: 12px 18px 35px rgba(40,32,23,.18); }
.book-back { transform: translate(75px, -2px) rotate(10deg); background: #b6a17d; color: #fff9ec; }
.book-back span { writing-mode: vertical-rl; font-family: var(--font-heading); font-size: 17px; letter-spacing: .18em; }
.book-middle { transform: translate(-70px, 8px) rotate(-10deg); background: #d7c8ac; color: var(--color-forest); }
.book-middle span { writing-mode: vertical-rl; font-family: var(--font-heading); font-size: 16px; letter-spacing: .12em; }
.book-front { z-index: 2; flex-direction: column; gap: 13px; transform: rotate(-2deg); padding: 22px 15px; border: 1px solid rgba(255,255,255,.35); background: var(--color-forest); color: #f8f1e4; text-align: center; }
.book-cover-rule { width: 36px; height: 1px; background: var(--color-gold); }
.book-cover-rule.bottom { margin-top: 8px; }
.book-small, .book-author { color: #d5bd8d; font-size: 7px; letter-spacing: .2em; }
.book-front strong { font-family: var(--font-heading); font-size: 27px; font-weight: 500; line-height: 1.05; }
.art-sparkle { position: absolute; z-index: 3; color: var(--color-gold); }
.sparkle-one { top: 90px; left: 55px; font-size: 28px; }
.sparkle-two { right: 42px; bottom: 72px; font-size: 36px; }
.intro-section { padding-block: 100px; background: #fff; }
.intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; }
.intro-grid .eyebrow { margin-bottom: 18px; }
.intro-copy { max-width: 480px; color: #77736c; font-size: 13px; line-height: 1.9; }
.coming-soon { display: inline-block; margin-top: 12px; color: var(--color-forest); font-size: 11px; font-weight: 700; }
.featured-section { padding-block: 85px; background: #fff; }\n.featured-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; margin-top:35px; }\n.featured-cover { display:flex; aspect-ratio:3/4; align-items:center; justify-content:center; overflow:hidden; padding:18px; background:var(--color-forest); color:var(--color-ivory); font-family:var(--font-heading); font-size:24px; text-align:center; }\n.featured-cover img { width:100%; height:100%; object-fit:cover; }\n.featured-card h3 { margin:12px 0 6px; color:var(--color-forest); font-family:var(--font-heading); font-size:22px; font-weight:600; line-height:1.1; }\n.read-link { color:var(--color-brown); font-size:10px; font-weight:700; }\n.featured-empty { margin-top:28px; padding:28px; background:var(--color-ivory); color:var(--color-muted); font-size:12px; }\n.collections-section { padding-block: 100px; }
.section-heading { display: flex; justify-content: space-between; align-items: end; margin-bottom: 38px; }
.section-heading .eyebrow { margin-bottom: 15px; }
.heading-index { color: var(--color-gold); font-size: 10px; letter-spacing: .15em; }
.collection-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.collection-card { min-height: 270px; display: flex; flex-direction: column; justify-content: space-between; padding: 26px; color: #fff; }
.collection-card--one { background: linear-gradient(145deg, rgba(25,60,50,.88), rgba(25,60,50,.96)), radial-gradient(circle at 80% 20%, #b89a61, transparent 50%); }
.collection-card--two { background: linear-gradient(145deg, rgba(70,55,46,.78), rgba(70,55,46,.96)), radial-gradient(circle at 80% 20%, #b89a61, transparent 50%); }
.collection-card--three { background: linear-gradient(145deg, rgba(130,111,78,.75), rgba(70,55,46,.96)), radial-gradient(circle at 80% 20%, #b89a61, transparent 50%); }
.collection-number { color: #d7c29a; font-size: 10px; }
.collection-card p { margin: 0 0 7px; color: #d7c29a; font-size: 10px; letter-spacing: .15em; text-transform: uppercase; }
.collection-card h3 { max-width: 240px; margin: 0; font-family: var(--font-heading); font-size: 30px; font-weight: 500; line-height: 1.05; }
.collection-arrow { display: inline-block; margin-top: 18px; color: #d7c29a; }
.quote-section { padding-block: 100px; background: #eee9df; text-align: center; }
.quote-inner { max-width: 760px; }
.quote-mark { color: var(--color-gold); font-family: var(--font-heading); font-size: 80px; line-height: .8; }
.quote-section blockquote { margin: 20px 0 24px; color: var(--color-forest); font-family: var(--font-heading); font-size: clamp(2.2rem, 4.5vw, 3.5rem); line-height: 1.12; }
.quote-section blockquote em { color: var(--color-gold); }
.site-footer { padding-top: 75px; background: var(--color-forest); color: #f8f5ef; }
.footer-main { display: flex; justify-content: space-between; gap: 50px; padding-bottom: 65px; }
.brand--footer { color: #fff; }
.footer-tagline { max-width: 280px; margin-top: 20px; color: rgba(255,255,255,.65); font-size: 12px; }
.footer-contact { min-width: 300px; }
.footer-contact h2 { margin: 13px 0 24px; font-family: var(--font-heading); font-size: 38px; font-weight: 500; line-height: 1.05; }
.button--light { border-color: #d9c393; background: #d9c393; color: var(--color-forest); }
.button--light:hover { background: transparent; color: #fff; }
.footer-bottom { display: flex; justify-content: space-between; gap: 20px; padding-block: 20px; border-top: 1px solid rgba(255,255,255,.16); color: rgba(255,255,255,.55); font-size: 10px; }
@media (max-width: 900px) {
  .main-nav { gap: 14px; }
  .main-nav a { font-size: 10px; }
  .header-cta { display: none; }
  .hero-grid { gap: 20px; }
  .hero-art { transform: scale(.9); }
}
@media (max-width: 680px) {
  .site-header { height: auto; }
  .header-inner { height: auto; min-height: var(--header-height); flex-wrap: wrap; justify-content: center; padding-block: 12px; }
  .main-nav { display: flex; order: 3; width: 100%; justify-content: center; flex-wrap: wrap; gap: 12px 18px; }
  .main-nav a { font-size: 10px; }
  .hero-grid { grid-template-columns: 1fr; padding-block: 65px 30px; }
  .hero-copy h1 { font-size: clamp(3.4rem, 15vw, 5rem); }
  .hero-note { margin-top: 34px; }
  .hero-art { min-height: 370px; transform: scale(.82); transform-origin: top center; margin-bottom: -35px; }
  .intro-section, .featured-section, .collections-section, .quote-section { padding-block: 70px; }\n  .featured-grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:22px 14px; }
  .intro-grid { grid-template-columns: 1fr; gap: 24px; }
  .collection-grid { grid-template-columns: 1fr; }
  .collection-card { min-height: 220px; }
  .footer-main { flex-direction: column; padding-bottom: 45px; }
  .footer-contact { min-width: 0; }
  .footer-bottom { flex-direction: column; gap: 6px; }
}

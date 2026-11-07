<script setup lang="ts">
useSeoMeta({ title: 'Collections | Lyncra Books', description: 'Explorez les grands univers de lecture de Lyncra Books.' })
const collections = [
  { number: '01', title: 'Foi & spiritualité', subtitle: 'Approfondir', description: 'Des lectures pour nourrir la foi, la méditation et la vie spirituelle.', tone: 'forest' },
  { number: '02', title: 'Développement personnel', subtitle: 'Se construire', description: 'Des idées et des outils pour mieux se connaître et progresser.', tone: 'brown' },
  { number: '03', title: 'Savoir & connaissance', subtitle: 'Comprendre', description: 'Des ouvrages pour apprendre, réfléchir et élargir ses horizons.', tone: 'gold' },
]
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container page-main">
      <p class="eyebrow">Explorer nos univers</p>
      <h1 class="section-title">Des collections pour chaque chemin.</h1>
      <p class="intro">Chaque univers rassemble des lectures autour d'un même désir : apprendre, grandir et donner du sens.</p>
      <div class="collection-list">
        <article v-for="item in collections" :key="item.number" class="collection-card" :class="`tone-${item.tone}`">
          <span class="number">{{ item.number }}</span>
          <div><span class="subtitle">{{ item.subtitle }}</span><h2>{{ item.title }}</h2><p>{{ item.description }}</p></div>
          <NuxtLink to="/livres" aria-label="Voir les livres">↗</NuxtLink>
        </article>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page-main { min-height:60vh; padding-block:76px 100px; }
.eyebrow,.subtitle { color:var(--color-gold); font-size:12px; font-weight:700; letter-spacing:.16em; text-transform:uppercase; }
.section-title { max-width:780px; margin:15px 0; color:var(--color-forest); font-family:var(--font-heading); font-size:clamp(42px,6vw,68px); font-weight:500; line-height:1; }
.intro { max-width:570px; color:var(--color-muted); font-size:16px; line-height:1.8; }
.collection-list { display:grid; gap:16px; margin-top:48px; }
.collection-card { min-height:210px; display:grid; grid-template-columns:70px 1fr 40px; align-items:center; gap:20px; padding:30px; color:white; }
.tone-forest { background:var(--color-forest); }
.tone-brown { background:var(--color-brown); }
.tone-gold { background:#86734f; }
.number { color:#d9c393; font-size:13px; }
.collection-card h2 { margin:8px 0; font-family:var(--font-heading); font-size:36px; font-weight:500; }
.collection-card p { margin:0; color:rgba(255,255,255,.7); font-size:15px; }
.collection-card a { color:#d9c393; font-size:26px; }
@media(max-width:600px) { .page-main { padding-block:52px 70px; } .collection-card { grid-template-columns:35px 1fr 25px; padding:20px 15px; } .collection-card h2 { font-size:27px; } }
</style>

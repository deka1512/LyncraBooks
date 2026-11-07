<script setup lang="ts">
const route = useRoute()
const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Livres', to: '/livres' },
  { label: 'Collections', to: '/collections' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink class="brand" to="/" aria-label="Lyncra Books, accueil">
        <span class="brand-mark" aria-hidden="true">L</span>
        <span class="brand-name">Lyncra <span>Books</span></span>
      </NuxtLink>
      <nav class="main-nav" aria-label="Navigation principale">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :aria-current="route.path === link.to ? 'page' : undefined"
        >{{ link.label }}</NuxtLink>
      </nav>
      <NuxtLink class="header-cta" to="/contact">Nous contacter <span>↗</span></NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.site-header { min-height: var(--header-height); background: var(--color-ivory); border-bottom: 1px solid var(--color-border); }
.header-inner { min-height: var(--header-height); display:flex; align-items:center; justify-content:space-between; gap:24px; }
.brand { display:inline-flex; align-items:center; gap:10px; color:var(--color-forest); }
.brand-mark { width:36px; height:36px; display:grid; place-items:center; border:1px solid var(--color-gold); border-radius:50%; font-family:var(--font-heading); font-size:25px; }
.brand-name { font-family:var(--font-heading); font-size:26px; font-weight:700; line-height:1; }
.brand-name span { color:var(--color-gold); font-weight:500; }
.main-nav { display:flex; align-items:center; gap:clamp(14px,2.3vw,30px); }
.main-nav a,.header-cta { font-size:11px; font-weight:600; }
.main-nav a { color:var(--color-brown); }
.main-nav a.router-link-active { color:var(--color-gold); }
.header-cta { padding:11px 15px; border:1px solid var(--color-forest); color:var(--color-forest); white-space:nowrap; }
.header-cta span { color:var(--color-gold); margin-left:7px; }
@media(max-width:760px) { .header-inner { flex-wrap:wrap; justify-content:center; padding-block:14px; } .main-nav { order:3; width:100%; justify-content:center; flex-wrap:wrap; } .header-cta { display:none; } }

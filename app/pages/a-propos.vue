<script setup lang="ts">
useSeoMeta({ title: 'À propos | Lyncra Books', description: 'Découvrez la vision et l’univers de Lyncra Books.' })
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container about-main">
      <p class="eyebrow">Notre histoire</p>
      <h1>La lecture comme<br><em>chemin de croissance.</em></h1>
      <div class="about-copy">
        <p>Lyncra Books est né d'une conviction simple : les livres peuvent ouvrir des perspectives, nourrir la réflexion et accompagner les transformations personnelles.</p>
        <p>Nous souhaitons proposer un espace de découverte où chaque lecteur peut trouver des ouvrages qui font écho à ses questions, à ses aspirations et à son parcours.</p>
        <p>Notre ambition est de rendre la découverte du livre plus accessible, plus humaine et plus inspirante.</p>
      </div>
      <div class="values"><div><span>01</span><h2>Choisir avec sens</h2><p>Mettre en avant des lectures porteuses de valeur.</p></div><div><span>02</span><h2>Inspirer durablement</h2><p>Encourager la curiosité et l'apprentissage continu.</p></div><div><span>03</span><h2>Partager simplement</h2><p>Faciliter l'échange entre les livres et les lecteurs.</p></div></div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.about-main { min-height:65vh; padding-block:90px 110px; }
.eyebrow { color:var(--color-gold); font-size:12px; letter-spacing:.17em; text-transform:uppercase; }
h1 { margin:18px 0 32px; color:var(--color-forest); font-family:var(--font-heading); font-size:clamp(52px,8vw,88px); font-weight:500; line-height:.95; }
h1 em { color:var(--color-gold); font-weight:400; }
.about-copy { max-width:720px; color:var(--color-muted); font-size:16px; line-height:2; }
.values { display:grid; grid-template-columns:repeat(3,1fr); gap:30px; margin-top:75px; padding-top:32px; border-top:1px solid var(--color-border); }
.values span { color:var(--color-gold); font-size:13px; }
.values h2 { color:var(--color-forest); font-family:var(--font-heading); font-size:27px; font-weight:600; }
.values p { color:var(--color-muted); font-size:15px; }
@media(max-width:650px) { .about-main { padding-block:60px 75px; } .values { grid-template-columns:1fr; gap:15px; margin-top:45px; } }
</style>

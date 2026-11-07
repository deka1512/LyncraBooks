<script setup lang="ts">
useSeoMeta({title:'À propos | Lyncra Books',description:'Découvrez la vision et les engagements de Lyncra Books.'})
const values=[
{number:'01',title:'Choisir avec sens',description:'Mettre en lumière des livres qui nourrissent la réflexion et apportent une vraie valeur au lecteur.'},
{number:'02',title:'Inspirer durablement',description:'Encourager la curiosité, la confiance et l’apprentissage tout au long de la vie.'},
{number:'03',title:'Partager simplement',description:'Créer un lien accessible et humain entre les livres, les idées et les lecteurs.'},
]
</script>
<template>
<div><SiteHeader/><main>
<section class="about-hero"><div class="container about-hero-grid"><div><p class="eyebrow">L’univers Lyncra Books</p><h1>Lire pour voir<br><em>plus loin.</em></h1><p class="hero-lead">Nous croyons au pouvoir des livres : celui de faire réfléchir, d’ouvrir des horizons et de faire grandir chacun à son rythme.</p><NuxtLink to="/livres" class="green-button">Découvrir notre sélection <span>↗</span></NuxtLink></div><div class="about-image"><img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=90" alt="Bibliothèque lumineuse et livres" loading="lazy"><span>Lire. Grandir. Transmettre.</span></div></div></section>
<section class="container story-section"><div class="story-label"><span>Notre conviction</span><b>01 / 03</b></div><div class="story-copy"><h2>Un livre peut devenir le début d’un nouveau regard.</h2><p>Lyncra Books est né d’une conviction simple : la lecture est bien plus qu’un moment de détente. Elle permet de prendre du recul, de mieux comprendre le monde et de découvrir de nouvelles façons d’avancer.</p><p>Nous souhaitons proposer un espace de découverte où chacun peut trouver des ouvrages en résonance avec ses questions, ses aspirations et son parcours. Notre ambition : rendre la découverte du livre plus accessible, plus humaine et plus inspirante.</p></div></section>
<section class="values-section"><div class="container"><p class="eyebrow">Ce qui nous guide</p><h2>Nos engagements.</h2><div class="values-grid"><article v-for="value in values" :key="value.number" class="value-card"><span>{{value.number}}</span><h3>{{value.title}}</h3><p>{{value.description}}</p></article></div></div></section>
<section class="about-end container"><p>Et si votre prochaine lecture changeait votre perspective ?</p><NuxtLink to="/collections" class="green-button">Explorer nos collections <span>↗</span></NuxtLink></section>
</main><SiteFooter/></div>
</template>
<style scoped>
.about-hero{padding:80px 0;background:#eee9df}.about-hero-grid{display:grid;grid-template-columns:1fr .9fr;gap:65px;align-items:center}.eyebrow{color:var(--color-gold);font-size:11px;font-weight:700;letter-spacing:.17em;text-transform:uppercase}
.about-hero h1{margin:20px 0;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(60px,8vw,100px);font-weight:600;line-height:.88}.about-hero h1 em{color:var(--color-gold);font-weight:500}
.hero-lead{max-width:500px;margin-bottom:28px;color:var(--color-muted);font-size:16px;line-height:1.9}.green-button{display:inline-flex;gap:14px;align-items:center;padding:14px 22px;border-radius:99px;background:var(--color-forest);color:white;font-size:13px;font-weight:700;transition:transform .2s ease,background .2s ease}.green-button:hover{transform:translateY(-3px);background:#245344}
.about-image{position:relative;min-height:440px;overflow:hidden;border-radius:28px;box-shadow:var(--shadow-soft)}.about-image img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.about-image span{position:absolute;right:18px;bottom:18px;padding:12px 17px;border-radius:99px;background:var(--color-ivory);color:var(--color-forest);font-size:12px;font-weight:700}
.story-section{display:grid;grid-template-columns:.55fr 1.45fr;gap:60px;padding-block:100px}.story-label{display:flex;justify-content:space-between;color:var(--color-gold);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.story-copy{max-width:750px}
.story-copy h2,.values-section h2{margin:0 0 24px;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(36px,5vw,58px);font-weight:600;line-height:1.05}.story-copy p{color:var(--color-muted);font-size:15px;line-height:2}
.values-section{padding-block:80px 95px;background:var(--color-forest)}.values-section h2{margin:10px 0 35px;color:white}.values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.value-card{padding:28px;border:1px solid rgba(255,255,255,.18);border-radius:22px;transition:background .25s ease,transform .25s ease}.value-card:hover{transform:translateY(-5px);background:rgba(255,255,255,.07)}.value-card>span{color:#d8c18e;font-size:12px}.value-card h3{margin:20px 0 10px;color:white;font-family:var(--font-heading);font-size:28px;font-weight:600}.value-card p{margin:0;color:rgba(255,255,255,.68);font-size:14px;line-height:1.8}
.about-end{display:flex;justify-content:space-between;align-items:center;gap:25px;padding-block:55px}.about-end p{color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(24px,3vw,34px);font-weight:600}
@media(max-width:750px){.about-hero{padding:55px 0}.about-hero-grid,.story-section{grid-template-columns:1fr;gap:30px}.about-image{min-height:320px}.story-section{padding-block:65px}.values-section{padding-block:60px}.values-grid{grid-template-columns:1fr}.about-end{align-items:flex-start;flex-direction:column;padding-block:40px}}
@media(prefers-reduced-motion:reduce){.green-button,.value-card{transition:none}}
</style>

<script setup lang="ts">
import { books } from '~/data/books'
useSeoMeta({ title: 'Collections | Lyncra Books', description: 'Explorez les grands univers de lecture de Lyncra Books.' })
const collections = [
{number:'01',title:'Foi & spiritualité',subtitle:'Nourrir sa foi',description:'Des lectures pour nourrir la foi, cultiver la méditation et approfondir sa vie intérieure.',image:'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1100&q=85'},
{number:'02',title:'Développement personnel',subtitle:'Grandir et avancer',description:'Des idées pour mieux se connaître, dépasser ses limites et avancer avec intention.',image:'https://images.unsplash.com/photo-1473755504818-b72b6dfdc226?auto=format&fit=crop&w=1100&q=85'},
{number:'03',title:'Savoir & connaissance',subtitle:'Élargir ses horizons',description:'Des ouvrages pour apprendre, aiguiser son discernement et découvrir de nouvelles perspectives.',image:'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1100&q=85'},
]
function countBooks(category:string){return books.filter(book=>book.category===category).length}
</script>
<template>
<div><SiteHeader/><main>
<section class="collection-hero"><div class="container hero-content"><p class="eyebrow">Explorer nos univers</p><h1>Des idées qui nourrissent.<br><em>Des lectures qui transforment.</em></h1><p>Chaque collection est une invitation à découvrir, apprendre et faire grandir ce qui compte vraiment.</p><a href="#univers" class="discover-link">Explorer les univers <span>↓</span></a></div><span class="hero-decoration">L</span></section>
<section id="univers" class="container collection-main"><div class="section-intro"><div><p class="eyebrow">Nos univers de lecture</p><h2>Choisissez votre chemin.</h2></div><p>Trois univers, une même envie : vous accompagner dans votre curiosité et votre évolution.</p></div>
<div class="collection-list"><article v-for="item in collections" :key="item.number" class="collection-card"><div class="collection-visual"><img :src="item.image" :alt="item.title" loading="lazy"><span>{{item.number}}</span></div><div class="collection-copy"><span class="subtitle">{{item.subtitle}}</span><h2>{{item.title}}</h2><p>{{item.description}}</p><div class="collection-meta"><span>{{countBooks(item.title)}} livres dans le catalogue</span><NuxtLink to="/livres">Voir les livres <b>↗</b></NuxtLink></div></div></article></div>
<div class="collection-cta"><p>Vous ne savez pas par où commencer ?</p><h2>Nous vous aidons à trouver votre prochaine lecture.</h2><NuxtLink to="/contact" class="green-button">Parlons de vos envies <span>↗</span></NuxtLink></div></section>
</main><SiteFooter/></div>
</template>
<style scoped>
.collection-hero{position:relative;overflow:hidden;padding:90px 0 100px;background:var(--color-forest);color:white}.hero-content{position:relative;z-index:1}
.eyebrow,.subtitle{color:#d8c18e;font-size:11px;font-weight:700;letter-spacing:.17em;text-transform:uppercase}
.collection-hero h1{max-width:900px;margin:20px 0;font-family:var(--font-heading);font-size:clamp(44px,7vw,82px);font-weight:600;line-height:.98}.collection-hero h1 em{color:#d8c18e;font-weight:500}
.collection-hero p:not(.eyebrow){max-width:580px;color:rgba(255,255,255,.76);line-height:1.9}.discover-link{display:inline-flex;gap:15px;margin-top:24px;padding:13px 19px;border:1px solid rgba(255,255,255,.35);border-radius:99px;color:white;font-size:13px}
.hero-decoration{position:absolute;right:8%;bottom:-150px;color:rgba(255,255,255,.045);font-family:var(--font-heading);font-size:440px;line-height:1}
.collection-main{padding-block:85px 100px}.section-intro{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:38px}
.section-intro h2,.collection-cta h2{margin:8px 0 0;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(34px,5vw,52px);font-weight:600;line-height:1.05}.section-intro>p{max-width:400px;color:var(--color-muted);line-height:1.8}
.collection-list{display:grid;gap:22px}.collection-card{display:grid;grid-template-columns:minmax(230px,.85fr) 1.15fr;min-height:300px;overflow:hidden;border-radius:26px;background:white;box-shadow:var(--shadow-soft);transition:transform .35s ease}.collection-card:hover{transform:translateY(-5px)}
.collection-visual{position:relative;min-height:300px;overflow:hidden}.collection-visual img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s ease}.collection-card:hover .collection-visual img{transform:scale(1.06)}
.collection-visual>span{position:absolute;top:20px;left:20px;display:grid;width:46px;height:46px;place-items:center;border-radius:50%;background:var(--color-forest);color:white}
.collection-copy{display:flex;flex-direction:column;justify-content:center;padding:36px clamp(25px,5vw,65px)}.subtitle{color:var(--color-gold)}
.collection-copy h2{margin:10px 0;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(30px,4vw,44px);font-weight:600;line-height:1.05}.collection-copy>p{max-width:470px;color:var(--color-muted);line-height:1.8}
.collection-meta{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:15px;margin-top:22px;padding-top:17px;border-top:1px solid var(--color-border);color:var(--color-muted);font-size:12px}.collection-meta a{color:var(--color-forest);font-weight:700}.collection-meta b{color:var(--color-gold);margin-left:6px}
.collection-cta{margin-top:70px;padding:45px;border-radius:26px;background:#eee9df;text-align:center}.collection-cta>p{color:var(--color-gold);font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
.green-button{display:inline-flex;gap:15px;padding:14px 23px;border-radius:99px;background:var(--color-forest);color:white;font-size:13px;font-weight:700;transition:transform .2s ease,background .2s ease}.green-button:hover{transform:translateY(-3px);background:#245344}
@media(max-width:700px){.collection-hero{padding:65px 0 75px}.collection-main{padding-block:60px 70px}.section-intro{display:block}.collection-card{grid-template-columns:1fr}.collection-visual{min-height:230px}.collection-copy{padding:28px 23px}.collection-cta{margin-top:45px;padding:32px 20px}}
@media(prefers-reduced-motion:reduce){.collection-card,.collection-visual img,.green-button{transition:none}}
</style>

<script setup lang="ts">
const config=useRuntimeConfig()
const {link,number}=useWhatsApp()
const contactUrl=link('Bonjour Lyncra Books, je souhaite obtenir des informations sur vos livres.')
const phone=String(config.public.contactPhone||'')
const email=String(config.public.contactEmail||'')
const socials=[
{label:'Instagram',url:config.public.instagramUrl,mark:'ig'},
{label:'Facebook',url:config.public.facebookUrl,mark:'f'},
{label:'TikTok',url:config.public.tiktokUrl,mark:'♪'},
].filter(item=>item.url)
useSeoMeta({title:'Contact | Lyncra Books',description:'Contactez Lyncra Books pour toute question sur le catalogue et les commandes.'})
</script>
<template>
<div><SiteHeader/><main>
<section class="contact-hero"><div class="container"><p class="eyebrow">Restons en contact</p><h1>Une question ?<br><em>Écrivons la suite.</em></h1><p>Un livre vous intéresse, vous souhaitez passer une commande ou simplement obtenir un conseil ? Nous sommes à votre écoute.</p></div></section>
<section class="container contact-content">
<div class="contact-main-card"><span class="contact-icon">✳</span><p class="eyebrow">Le plus simple</p><h2>Discutons sur WhatsApp.</h2><p>Écrivez-nous directement pour connaître la disponibilité d’un livre, son prix ou les modalités de commande.</p><a class="whatsapp-button" :href="contactUrl" target="_blank" rel="noopener noreferrer"><span>◉</span> Continuer sur WhatsApp <b>↗</b></a><small v-if="!number">Le numéro WhatsApp sera activé dès qu’il sera renseigné dans la configuration.</small></div>
<div class="contact-side"><p class="eyebrow">Nos coordonnées</p><h2>À votre écoute.</h2>
<a v-if="phone" class="contact-line" :href="'tel:'+phone.replace(/\s/g,'')"><span class="line-icon">☎</span><span><small>Téléphone</small><strong>{{phone}}</strong></span><b>↗</b></a>
<div v-else class="contact-line"><span class="line-icon">☎</span><span><small>Téléphone</small><strong>Coordonnée à renseigner</strong></span></div>
<a v-if="email" class="contact-line" :href="'mailto:'+email"><span class="line-icon">✉</span><span><small>E-mail</small><strong>{{email}}</strong></span><b>↗</b></a>
<div v-else class="contact-line"><span class="line-icon">✉</span><span><small>E-mail</small><strong>Adresse à renseigner</strong></span></div>
<div class="social-block"><small>Retrouvez-nous aussi</small><div class="social-links"><a v-for="social in socials" :key="social.label" :href="social.url" target="_blank" rel="noopener noreferrer" :aria-label="social.label">{{social.mark}}</a><span v-if="!socials.length" class="social-pending">Réseaux sociaux à renseigner</span></div></div>
</div></section></main><SiteFooter/></div>
</template>
<style scoped>
.contact-hero{padding:78px 0 105px;background:var(--color-forest);color:white}.eyebrow{color:var(--color-gold);font-size:11px;font-weight:700;letter-spacing:.17em;text-transform:uppercase}.contact-hero .eyebrow{color:#d8c18e}
.contact-hero h1{margin:18px 0;font-family:var(--font-heading);font-size:clamp(54px,8vw,88px);font-weight:600;line-height:.94}.contact-hero h1 em{color:#d8c18e;font-weight:500}.contact-hero p:not(.eyebrow){max-width:580px;color:rgba(255,255,255,.72);line-height:1.9}
.contact-content{display:grid;grid-template-columns:1.05fr .95fr;gap:35px;padding-block:70px 95px}.contact-main-card{padding:40px;border-radius:26px;background:#eee9df}.contact-icon{display:grid;width:48px;height:48px;margin-bottom:25px;place-items:center;border-radius:50%;background:var(--color-forest);color:white;font-size:23px}
.contact-main-card h2,.contact-side h2{margin:8px 0 12px;color:var(--color-forest);font-family:var(--font-heading);font-size:clamp(30px,4vw,42px);font-weight:600}.contact-main-card>p:not(.eyebrow){color:var(--color-muted);line-height:1.85}
.whatsapp-button{display:flex;align-items:center;gap:12px;margin-top:28px;padding:16px 20px;border-radius:99px;background:var(--color-forest);color:white;font-size:14px;font-weight:700;transition:transform .2s ease,background .2s ease}.whatsapp-button:hover{transform:translateY(-3px);background:#245344}.whatsapp-button b{margin-left:auto;color:#d8c18e}.contact-main-card small{display:block;margin-top:12px;color:var(--color-muted);font-size:11px}
.contact-side{padding:20px 10px}.contact-side h2{margin-bottom:24px}.contact-line{display:flex;align-items:center;gap:15px;padding:18px 0;border-bottom:1px solid var(--color-border)}.line-icon{display:grid;width:44px;height:44px;flex:0 0 44px;place-items:center;border-radius:50%;background:#e9e5dc;color:var(--color-forest)}.contact-line span:nth-child(2){display:grid;gap:3px}.contact-line small,.social-block>small{color:var(--color-muted);font-size:11px}.contact-line strong{color:var(--color-forest);font-size:14px;font-weight:600}.contact-line>b{margin-left:auto;color:var(--color-gold)}
.social-block{margin-top:28px}.social-links{display:flex;align-items:center;gap:10px;margin-top:14px}.social-links a{display:grid;width:42px;height:42px;place-items:center;border:1px solid var(--color-border);border-radius:50%;color:var(--color-forest);font-size:14px;font-weight:700;transition:background .2s ease,color .2s ease}.social-links a:hover{background:var(--color-forest);color:white}.social-pending{color:var(--color-muted);font-size:12px}
@media(max-width:700px){.contact-hero{padding:60px 0 75px}.contact-content{grid-template-columns:1fr;padding-block:45px 65px}.contact-main-card{padding:28px 22px}.contact-side{padding-inline:3px}}
@media(prefers-reduced-motion:reduce){.whatsapp-button,.social-links a{transition:none}}
</style>

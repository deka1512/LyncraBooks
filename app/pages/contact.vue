<script setup lang="ts">
const { link, number } = useWhatsApp()
const contactUrl = link('Bonjour Lyncra Books, je souhaite obtenir des informations sur vos livres.')
useSeoMeta({ title: 'Contact | Lyncra Books', description: 'Contactez Lyncra Books pour toute question sur le catalogue et les commandes.' })
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container contact-main">
      <p class="eyebrow">Nous contacter</p>
      <h1>Parlons de votre<br><em>prochaine lecture.</em></h1>
      <p class="intro">Une question sur un livre, sa disponibilité ou une commande ? Notre équipe sera heureuse de vous répondre.</p>
      <a class="contact-button" :href="contactUrl" target="_blank" rel="noopener noreferrer">Écrire sur WhatsApp ↗</a>
      <p v-if="!number" class="setup-note">Le numéro WhatsApp sera activé dès qu'il sera ajouté à la configuration du site.</p>
      <div class="contact-details"><div><span>Échanges</span><strong>Du lundi au samedi</strong></div><div><span>Canal de contact</span><strong>WhatsApp</strong></div><div><span>Catalogue</span><strong>Livres & collections</strong></div></div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.contact-main { min-height:65vh; padding-block:85px 100px; }
.eyebrow { color:var(--color-gold); font-size:12px; letter-spacing:.17em; text-transform:uppercase; }
h1 { margin:18px 0; color:var(--color-forest); font-family:var(--font-heading); font-size:clamp(52px,8vw,86px); font-weight:500; line-height:.95; }
h1 em { color:var(--color-gold); font-weight:400; }
.intro { max-width:530px; color:var(--color-muted); font-size:16px; line-height:1.9; }
.contact-button { display:inline-flex; min-height:50px; align-items:center; margin-top:22px; padding:0 24px; background:var(--color-forest); color:#fff; font-size:14px; font-weight:700; }
.setup-note { color:var(--color-muted); font-size:14px; }
.contact-details { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; max-width:760px; margin-top:75px; padding-top:28px; border-top:1px solid var(--color-border); }
.contact-details span { display:block; color:var(--color-gold); font-size:12px; text-transform:uppercase; letter-spacing:.12em; }
.contact-details strong { display:block; margin-top:8px; color:var(--color-forest); font-family:var(--font-heading); font-size:22px; font-weight:600; }
@media(max-width:600px) { .contact-main { padding-block:60px 75px; } .contact-details { grid-template-columns:1fr; gap:18px; margin-top:45px; } }
</style>

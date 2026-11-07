<script setup lang="ts">
useSeoMeta({ title: 'FAQ | Lyncra Books', description: 'Les réponses aux questions fréquentes sur les livres et les commandes Lyncra Books.' })
const questions = [
  { q: 'Comment commander un livre ?', a: 'Ouvrez la fiche du livre qui vous intéresse puis cliquez sur « Commander sur WhatsApp ». Vous pourrez échanger directement avec notre équipe.' },
  { q: 'Les prix sont-ils affichés sur le site ?', a: 'Les prix et la disponibilité sont confirmés directement avec notre équipe sur WhatsApp.' },
  { q: 'Puis-je payer directement sur le site ?', a: 'Non. Le site présente le catalogue et facilite la prise de contact. Les modalités de paiement sont communiquées lors de votre échange avec notre équipe.' },
  { q: 'Comment connaître la disponibilité d’un ouvrage ?', a: 'Contactez-nous sur WhatsApp en indiquant le titre du livre. Nous vous confirmerons sa disponibilité.' },
  { q: 'Le catalogue est-il régulièrement mis à jour ?', a: 'Oui. Les nouveaux ouvrages seront ajoutés au catalogue au fur et à mesure de leur disponibilité.' },
]
</script>

<template>
  <div>
    <SiteHeader />
    <main class="container faq-main">
      <p class="eyebrow">Besoin d'aide ?</p>
      <h1 class="section-title">Questions fréquentes.</h1>
      <div class="faq-list">
        <details v-for="item in questions" :key="item.q">
          <summary>{{ item.q }}<span>+</span></summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.faq-main { min-height:65vh; padding-block:80px 100px; }
.eyebrow { color:var(--color-gold); font-size:12px; letter-spacing:.17em; text-transform:uppercase; }
.section-title { margin:15px 0 45px; color:var(--color-forest); font-family:var(--font-heading); font-size:clamp(45px,7vw,70px); font-weight:500; }
.faq-list { max-width:850px; border-top:1px solid var(--color-border); }
details { padding:22px 0; border-bottom:1px solid var(--color-border); }
summary { display:flex; justify-content:space-between; gap:20px; color:var(--color-forest); font-family:var(--font-heading); font-size:25px; font-weight:600; cursor:pointer; list-style:none; }
summary::-webkit-details-marker { display:none; }
summary span { color:var(--color-gold); font-family:var(--font-body); font-size:20px; }
details[open] summary span { transform:rotate(45deg); }
details p { max-width:700px; color:var(--color-muted); font-size:16px; line-height:1.8; }
@media(max-width:600px) { .faq-main { padding-block:55px 75px; } summary { font-size:21px; } }
</style>

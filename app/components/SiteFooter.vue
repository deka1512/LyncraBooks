<script setup lang="ts">
const { link } = useWhatsApp()
const contactUrl = link('Bonjour Lyncra Books, je souhaite obtenir des informations.')
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-main">
      <div>
        <NuxtLink class="footer-brand" to="/">Lyncra <span>Books</span></NuxtLink>
        <p>Des lectures qui inspirent, éclairent et transforment.</p>
      </div>
      <div class="footer-contact">
        <span class="eyebrow">Parlons lecture</span>
        <h2>Votre prochain livre vous attend.</h2>
        <a class="button button--light" :href="contactUrl" target="_blank" rel="noopener noreferrer">Écrire sur WhatsApp ↗</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {{ new Date().getFullYear() }} Lyncra Books. Tous droits réservés.</span>
      <span>Lire. Grandir. Transmettre.</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { padding-top:64px; background:var(--color-forest); color:var(--color-ivory); }
.footer-main { display:flex; justify-content:space-between; gap:40px; padding-bottom:48px; }
.footer-brand { font-family:var(--font-heading); font-size:30px; font-weight:700; }
.footer-brand span { color:var(--color-gold); font-weight:500; }
.footer-main p { color:rgba(255,255,255,.65); font-size:12px; }
.footer-contact { max-width:390px; }
.eyebrow { color:#d9c393; font-size:10px; letter-spacing:.16em; text-transform:uppercase; }
.footer-contact h2 { margin:12px 0 20px; font-family:var(--font-heading); font-size:36px; font-weight:500; line-height:1.1; }
.button { display:inline-flex; min-height:46px; align-items:center; padding:0 20px; background:#d9c393; color:var(--color-forest); font-size:11px; font-weight:700; }
.footer-bottom { display:flex; justify-content:space-between; gap:20px; padding-block:18px; border-top:1px solid rgba(255,255,255,.16); color:rgba(255,255,255,.55); font-size:10px; }
@media(max-width:650px) { .footer-main,.footer-bottom { flex-direction:column; } }

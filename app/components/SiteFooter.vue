<script setup lang="ts">
const config = useRuntimeConfig()
const { link } = useWhatsApp()

const contactUrl = link('Bonjour Lyncra Books, je souhaite obtenir des informations.')
const phoneHref = `tel:${String(config.public.contactPhone || '').replace(/[^+\d]/g, '')}`

const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos livres', to: '/livres' },
  { label: 'Nos auteurs', to: '/auteurs' },
  { label: 'Collections', to: '/collections' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-main">
      <section class="footer-brand-block" aria-label="À propos de Lyncra Books">
        <NuxtLink class="footer-brand" to="/">Lyncra <span>Books</span></NuxtLink>
        <p class="footer-description">
          Des lectures pour connaître davantage Dieu, aimer sa Parole et grandir dans une foi vivante.
          Que chaque livre vous encourage à marcher avec Christ et à mettre l’Évangile en pratique.
        </p>
        <p class="footer-motto">Lire. Grandir. Transmettre.</p>
      </section>

      <nav class="footer-nav" aria-label="Navigation de pied de page">
        <h2 class="footer-heading">Explorer</h2>
        <ul>
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <section class="footer-contact">
        <span class="eyebrow">Restons en contact</span>
        <h2 class="footer-heading footer-contact-title">Une question sur votre prochaine lecture chrétienne ?</h2>
        <p>Nous sommes à votre écoute pour vous aider à trouver des ressources qui édifient votre foi.</p>
        <a class="footer-contact-link" :href="contactUrl" target="_blank" rel="noopener noreferrer">
          Nous écrire sur WhatsApp <span aria-hidden="true">↗</span>
        </a>
        <a v-if="config.public.contactPhone" class="footer-detail" :href="phoneHref">
          {{ config.public.contactPhone }}
        </a>
        <a v-if="config.public.contactEmail" class="footer-detail" :href="`mailto:${config.public.contactEmail}`">
          {{ config.public.contactEmail }}
        </a>
      </section>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span>© {{ new Date().getFullYear() }} Lyncra Books. Tous droits réservés.</span>
        <span class="footer-credit">
          Lovely by
          <a href="https://bydeka.net" target="_blank" rel="noopener noreferrer">Bydeka</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding-top: 68px;
  background: var(--color-forest);
  color: var(--color-ivory);
}
.footer-main {
  display: grid;
  grid-template-columns: minmax(240px, 1.35fr) minmax(140px, .7fr) minmax(250px, 1fr);
  gap: clamp(32px, 6vw, 84px);
  padding-bottom: 54px;
}
.footer-brand {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -.025em;
}
.footer-brand span { color: var(--color-gold); font-weight: 500; }
.footer-description {
  max-width: 370px;
  margin: 16px 0 20px;
  color: rgba(255,255,255,.7);
  font-size: 14px;
  line-height: 1.85;
}
.footer-motto {
  color: #d9c393;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
}
.footer-heading {
  margin: 0 0 19px;
  color: var(--color-ivory);
  font-family: var(--font-heading);
  font-size: 23px;
  font-weight: 600;
}
.footer-nav ul {
  display: grid;
  gap: 11px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer-nav a,
.footer-detail {
  color: rgba(255,255,255,.68);
  font-size: 14px;
  transition: color .2s ease;
}
.footer-nav a:hover,
.footer-detail:hover,
.footer-credit a:hover { color: #e2c98f; }
.footer-contact .eyebrow {
  color: #d9c393;
  font-size: 11px;
  letter-spacing: .16em;
  text-transform: uppercase;
}
.footer-contact-title { margin-top: 12px; line-height: 1.15; }
.footer-contact > p {
  margin: 0 0 18px;
  color: rgba(255,255,255,.68);
  font-size: 14px;
  line-height: 1.8;
}
.footer-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  padding: 11px 17px;
  border: 1px solid #d9c393;
  border-radius: 99px;
  background: #d9c393;
  color: var(--color-forest);
  font-size: 13px;
  font-weight: 700;
  transition: background .2s ease, color .2s ease;
}
.footer-contact-link:hover { background: transparent; color: #e2c98f; }
.footer-detail { display: block; width: fit-content; margin-top: 7px; }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.16);
}
.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-block: 19px;
  color: rgba(255,255,255,.55);
  font-size: 12px;
}
.footer-credit { white-space: nowrap; }
.footer-credit a { color: #d9c393; font-weight: 700; transition: color .2s ease; }
@media (max-width: 800px) {
  .footer-main { grid-template-columns: 1fr 1fr; }
  .footer-brand-block { grid-column: 1 / -1; }
}
@media (max-width: 560px) {
  .site-footer { padding-top: 52px; }
  .footer-main { grid-template-columns: 1fr; gap: 34px; padding-bottom: 40px; }
  .footer-brand-block { grid-column: auto; }
  .footer-bottom-inner { flex-direction: column; gap: 8px; }
}
@media (prefers-reduced-motion: reduce) {
  .footer-nav a, .footer-detail, .footer-contact-link, .footer-credit a { transition: none; }
}
</style>

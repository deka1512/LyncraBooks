export default defineNuxtConfig({
  compatibilityDate: '2026-11-07',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [],
  runtimeConfig: {
    wordpressUrl: '',
    public: {
      siteUrl: '',
      whatsappNumber: '',
      contactPhone: '',
      contactEmail: '',
      instagramUrl: '',
      facebookUrl: '',
      tiktokUrl: '',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Lyncra Books — Des livres pour nourrir votre esprit',
      meta: [
        { name: 'description', content: 'Découvrez une sélection de lectures inspirantes autour de la foi, du développement personnel et de la connaissance.' },
        { name: 'theme-color', content: '#193C32' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap' },
      ],
    },
  },
})

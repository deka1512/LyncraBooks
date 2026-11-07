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
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Lyncra Books — Des livres pour nourrir votre foi',
      meta: [
        {
          name: 'description',
          content:
            'Découvrez une sélection de livres inspirants pour nourrir votre foi, approfondir vos connaissances et grandir au quotidien.',
        },
        { name: 'theme-color', content: '#193C32' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})

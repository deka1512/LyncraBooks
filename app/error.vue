<script setup lang="ts">
defineProps<{ error: { statusCode?: number; statusMessage?: string; message?: string } }>()
</script>

<template>
  <main class="error-page">
    <div class="error-content">
      <NuxtLink to="/" class="brand">Lyncra <span>Books</span></NuxtLink>
      <p class="eyebrow">Une petite parenthèse</p>
      <h1>{{ error.statusCode === 404 ? 'Cette page reste à écrire.' : 'Un imprévu est survenu.' }}</h1>
      <p class="description">
        {{ error.statusCode === 404
          ? 'La page recherchée est introuvable ou n’est plus disponible.'
          : 'Nous ne pouvons pas afficher cette page pour le moment.' }}
      </p>
      <NuxtLink to="/" class="home-link">Retour à l’accueil ↗</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.error-page { min-height:100vh; display:grid; place-items:center; padding:30px; background:var(--color-ivory); text-align:center; }
.error-content { max-width:650px; }
.brand { color:var(--color-forest); font-family:var(--font-heading); font-size:28px; font-weight:700; }
.brand span { color:var(--color-gold); font-weight:500; }
.eyebrow { margin-top:65px; color:var(--color-gold); font-size:10px; letter-spacing:.18em; text-transform:uppercase; }
h1 { margin:15px 0; color:var(--color-forest); font-family:var(--font-heading); font-size:clamp(42px,7vw,68px); font-weight:500; line-height:1; }
.description { color:var(--color-muted); font-size:13px; }
.home-link { display:inline-flex; margin-top:25px; padding:14px 20px; background:var(--color-forest); color:white; font-size:11px; font-weight:700; }
</style>

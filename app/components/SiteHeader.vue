
<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)

const links = [
  { label: 'Livres', to: '/livres' },
  { label: 'Collections', to: '/collections' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
]

watch(() => route.path, () => {
  menuOpen.value = false
})
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">

      <!-- Logo -->
      <NuxtLink
        class="brand"
        to="/"
        aria-label="Lyncra Books, accueil"
      >
        <span class="brand-mark" aria-hidden="true">L</span>
        <span class="brand-name">Lyncra <span>Books</span></span>
      </NuxtLink>

      <!-- Navigation PC -->
      <nav class="main-nav" aria-label="Navigation principale">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :aria-current="route.path === link.to ? 'page' : undefined"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Bouton contact PC -->
      <NuxtLink class="header-cta" to="/contact">
        Nous contacter <span>↗</span>
      </NuxtLink>

      <!-- Bouton burger mobile -->
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Ouvrir le menu"
        aria-controls="mobile-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ active: menuOpen }"></span>
        <span :class="{ active: menuOpen }"></span>
      </button>
    </div>

    <!-- Menu plein écran mobile -->
    <Transition name="menu">
      <div
        v-if="menuOpen"
        id="mobile-navigation"
        class="mobile-menu"
      >
        <nav class="mobile-nav" aria-label="Navigation mobile">
          <NuxtLink
            v-for="(link, index) in links"
            :key="link.to"
            :to="link.to"
            :class="{ active: route.path === link.to }"
          >
            <span class="nav-number">0{{ index + 1 }}</span>
            <span>{{ link.label }}</span>
            <span class="nav-arrow">↗</span>
          </NuxtLink>

          <NuxtLink class="mobile-cta" to="/contact">
            Nous contacter <span>↗</span>
          </NuxtLink>
        </nav>

        <div class="mobile-footer">
          <span>Lyncra Books</span>
          <span>La culture à portée de main.</span>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  min-height: var(--header-height);
  background: var(--color-ivory);
  border-bottom: 1px solid var(--color-border);
  position: relative;
  z-index: 100;
}

.header-inner {
  min-height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  z-index: 102;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--color-forest);
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 1px solid var(--color-gold);
  border-radius: 50%;
  font-family: var(--font-heading);
  font-size: 25px;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
}

.brand-name span {
  color: var(--color-gold);
  font-weight: 500;
}

/* Navigation desktop */
.main-nav {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2.3vw, 30px);
}

.main-nav a,
.header-cta {
  font-size: 14px;
  font-weight: 600;
}

.main-nav a {
  color: var(--color-brown);
}

.main-nav a.router-link-active {
  color: var(--color-gold);
}

.header-cta {
  padding: 11px 15px;
  border: 1px solid var(--color-forest);
  color: var(--color-forest);
  white-space: nowrap;
}

.header-cta span {
  color: var(--color-gold);
  margin-left: 7px;
}

/* Burger */
.menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  padding: 10px;
  border: 0;
  background: transparent;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
}

.menu-toggle span {
  display: block;
  width: 23px;
  height: 2px;
  background: var(--color-forest);
  transition: transform 0.3s ease;
}

.menu-toggle span:first-child.active {
  transform: translateY(4.5px) rotate(45deg);
}

.menu-toggle span:last-child.active {
  transform: translateY(-4.5px) rotate(-45deg);
}

/* Menu mobile plein écran */
.mobile-menu {
  display: none;
}

@media (max-width: 760px) {
  .header-inner {
    min-height: 72px;
    padding-block: 10px;
  }

  .brand-name {
    font-size: 23px;
  }

  .main-nav,
  .header-cta {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-menu {
    display: flex;
    position: fixed;
    inset: 0;
    z-index: 101;
    background: var(--color-ivory);
    flex-direction: column;
    justify-content: center;
    padding: 100px 28px 35px;
    overflow-y: auto;
  }

  .mobile-nav {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .mobile-nav > a:not(.mobile-cta) {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 18px 0;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-brown);
    font-family: var(--font-heading);
    font-size: clamp(24px, 7vw, 32px);
    transition: color 0.2s ease;
  }

  .mobile-nav > a.active {
    color: var(--color-gold);
  }

  .nav-number {
    font-family: var(--font-body);
    font-size: 11px;
    color: var(--color-gold);
  }

  .nav-arrow {
    margin-left: auto;
    font-size: 18px;
  }

  .mobile-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
    padding: 17px 20px;
    background: var(--color-forest);
    color: var(--color-ivory);
    font-size: 15px;
    font-weight: 600;
  }

  .mobile-cta span {
    color: var(--color-gold);
  }

  .mobile-footer {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-top: auto;
    padding-top: 45px;
    color: var(--color-brown);
    font-size: 11px;
    opacity: 0.7;
  }
}

/* Animation */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

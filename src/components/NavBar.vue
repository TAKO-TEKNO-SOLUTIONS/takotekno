<template>
  <header
    :class="[
      isDarkMode ? 'dark-nav' : 'light-nav',
      scrolled ? 'scrolled' : ''
    ]"
    class="nav-header"
    role="banner"
  >
    <div class="container mx-auto px-5 max-w-7xl">
      <div class="flex justify-between items-center h-20">

        <!-- Logo -->
        <a href="#home" class="logo-wrap flex items-center gap-3" aria-label="TakoTekno Home">
          <img src="@assets/logo.png" alt="TakoTekno Logo" class="h-10 w-auto object-contain" width="400" height="140" fetchpriority="high" />
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <a v-for="link in navLinks" :key="link.key"
            :href="link.href"
            class="nav-link"
            :class="isDarkMode ? 'nav-link-dark' : 'nav-link-light'"
          >{{ t(`nav.${link.key}`) }}</a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <!-- Language Toggle -->
          <button
            @click="toggleLanguage"
            class="lang-btn"
            :class="isDarkMode ? 'lang-btn-dark' : 'lang-btn-light'"
            :aria-label="`Switch to ${currentLanguage === 'en' ? 'Indonesian' : 'English'}`"
          >
            <Globe :size="14" />
            <span>{{ currentLanguage === 'en' ? 'EN' : 'ID' }}</span>
          </button>



          <!-- CTA Button (desktop) -->
          <a
            href="https://wa.me/62881080002564"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
            aria-label="Contact TakoTekno on WhatsApp"
          >
            <MessageCircle :size="15" />
            {{ t('nav.contact') }}
          </a>

          <!-- Hamburger -->
          <button
            class="md:hidden p-2"
            @click="toggleMenu"
            :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="isMenuOpen"
          >
            <div class="hamburger" :class="{ open: isMenuOpen }">
              <span class="bg-[var(--primary)]"></span>
              <span class="bg-[var(--primary)]"></span>
              <span class="bg-[var(--primary)]"></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="isMenuOpen"
        class="md:hidden mobile-menu"
      >
        <nav class="flex flex-col gap-2 mb-6" aria-label="Mobile navigation">
          <a
            v-for="link in navLinks"
            :key="link.key"
            :href="link.href"
            @click="closeMenu"
            class="mobile-nav-link"
          >{{ t(`nav.${link.key}`) }}</a>
        </nav>
        <a
          href="https://wa.me/62881080002564"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary w-full justify-center"
          @click="closeMenu"
        >
          <MessageCircle :size="16" />
          {{ t('contact.whatsapp') }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Globe, MessageCircle } from 'lucide-vue-next';
import { useTheme } from '@/composables/useTheme.js';
import { useTranslations } from '@/composables/useTranslations.js';

const { isDarkMode, toggleDarkMode } = useTheme();
const { currentLanguage, toggleLanguage, t } = useTranslations();

const isMenuOpen = ref(false);
const scrolled = ref(false);

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'whyUs', href: '#why-us' },
  { key: 'clients', href: '#clients' },
  { key: 'contact', href: '#contact' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-header {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
}

.dark-nav {
  background: rgba(13, 10, 17, 0.85);
  border-bottom: 1px solid rgba(105, 89, 125, 0.15);
}
.light-nav {
  background: rgba(250, 249, 250, 0.85);
  border-bottom: 1px solid rgba(105, 89, 125, 0.15);
}
.nav-header.scrolled {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0,0,0,0.08);
}
.dark-nav.scrolled {
  box-shadow: 0 4px 30px rgba(105, 89, 125, 0.15);
}

.logo-wrap { text-decoration: none; }
.logo-accent {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-link { text-decoration: none; font-size: 0.88rem; font-weight: 500; }
.nav-link-light { color: var(--text-secondary); }
.nav-link-light:hover { color: var(--primary); }
.nav-link-dark { color: var(--dark-text-secondary); }
.nav-link-dark:hover { color: var(--primary-light); }

.lang-btn {
  display: flex; align-items: center; gap: 4px;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.2s ease;
}
.lang-btn-light {
  background: transparent;
  border-color: var(--glass-border);
  color: var(--text-secondary);
}
.lang-btn-light:hover { background: var(--surface-1); border-color: var(--primary); color: var(--primary); }
.lang-btn-dark {
  background: transparent;
  border-color: var(--dark-glass-border);
  color: var(--dark-text-secondary);
}
.lang-btn-dark:hover { background: rgba(105,89,125,0.10); border-color: var(--primary-light); color: var(--primary-light); }

.icon-btn {
  padding: 8px; border-radius: 8px;
  border: none; cursor: pointer;
  transition: all 0.2s ease;
  display: flex; align-items: center; justify-content: center;
}
.icon-btn-light { background: transparent; color: var(--text-secondary); }
.icon-btn-light:hover { background: var(--surface-1); color: var(--primary); }
.icon-btn-dark { background: transparent; color: var(--dark-text-secondary); }
.icon-btn-dark:hover { background: rgba(105,89,125,0.10); color: var(--primary-light); }

.mobile-menu {
  padding: 20px;
  border-top: 1px solid var(--glass-border);
  background: var(--surface-0);
}

.mobile-nav-link {
  display: block;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}
.mobile-nav-link:hover {
  background: var(--surface-1);
  color: var(--primary);
}

/* Slide transition */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

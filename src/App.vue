<template>
  <div
    :class="isDarkMode ? 'dark-mode' : ''"
    class="app-root"
  >
    <NavBar />
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <WhyUsSection />
      <ContactSection />
    </main>
    <FooterSection />

    <!-- Back to top button -->
    <Transition name="fade-up">
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="back-to-top"
        aria-label="Kembali ke atas"
        title="Back to top"
      >
        <ArrowUp :size="20" />
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUp } from 'lucide-vue-next';

import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import ClientsSection from '@/components/ClientsSection.vue';
import WhyUsSection from '@/components/WhyUsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';

import { useTheme } from '@/composables/useTheme.js';
import { useTranslations } from '@/composables/useTranslations.js';

const { isDarkMode, initTheme } = useTheme();
const { initLanguage } = useTranslations();

// Back to top
const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Scroll animation observer (global for all sections)
const initScrollAnimations = () => {
  const els = document.querySelectorAll(
    '.scroll-fade-up, .scroll-fade-left, .scroll-fade-right'
  );
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const delay = parseInt(e.target.style.transitionDelay) || 0;
          setTimeout(() => e.target.classList.add('visible'), delay);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
  );
  els.forEach((el) => io.observe(el));
};

onMounted(() => {
  initTheme();
  initLanguage();
  window.addEventListener('scroll', handleScroll, { passive: true });
  // Small delay to let components render before observing
  setTimeout(initScrollAnimations, 100);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.app-root {
  min-height: 100vh;
  transition: background 0.3s ease, color 0.3s ease;
  background: var(--surface-0);
  color: var(--text-primary);
}

/* Back to top */
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--gradient-primary);
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(105, 89, 125, 0.35);
  transition: all 0.3s ease;
}
.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(105, 89, 125, 0.50);
}

.fade-up-enter-active, .fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-up-enter-from, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>

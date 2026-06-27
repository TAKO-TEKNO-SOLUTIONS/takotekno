<template>
  <footer
    class="footer-section"
    role="contentinfo"
    aria-label="Site footer"
  >
    <!-- Top gradient bar -->
    <div class="footer-top-bar" aria-hidden="true"></div>

    <div class="relative z-10 container mx-auto px-5 max-w-7xl pt-16 pb-8">

      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

        <!-- Brand -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-5">
            <img src="@assets/logo.png" alt="TakoTekno Logo" class="h-10 w-auto" width="228" height="79" loading="lazy" />
          </div>
          <p class="footer-tagline mb-6 text-[var(--text-secondary)]">{{ t('footer.tagline') }}</p>

          <!-- SEO keywords paragraph (hidden visually, good for bots) -->
          <p class="footer-seo-text seo-only">
            Otomasi Bisnis Indonesia | Modernisasi Web Indonesia | Agentic AI Indonesia | Software House Indonesia |
            Digital Agency Indonesia | AI Chatbot Indonesia | Web Development Indonesia |
            Otomasi Bisnis Surabaya | Modernisasi Web Surabaya | Agentic AI Surabaya | Software House Surabaya |
            Digital Agency Surabaya | AI Chatbot Surabaya | Web Development Surabaya
          </p>

          <!-- Social Icons -->
          <div class="flex gap-3 mt-5">
            <a v-for="social in socials" :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
            >
              <component :is="social.icon" :size="18" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="footer-heading">{{ t('footer.quickLinks') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.key">
              <a :href="link.href" class="footer-link">
                <ChevronRight :size="14" class="footer-link-arrow" />
                {{ t(`nav.${link.key}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="footer-heading">{{ t('footer.services') }}</h3>
          <ul class="space-y-3">
            <li v-for="(svc, i) in t('footer.serviceLinks')" :key="i">
              <a href="#services" class="footer-link">
                <ChevronRight :size="14" class="footer-link-arrow" />
                {{ svc }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom row -->
      <div class="footer-bottom">
        <p class="footer-copy text-[var(--text-secondary)]">
          &copy; {{ currentYear }} {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { ChevronRight, Linkedin, Twitter, Facebook, Instagram } from 'lucide-vue-next';
import { useTranslations } from '@/composables/useTranslations.js';

const { t } = useTranslations();

const currentYear = computed(() => new Date().getFullYear());

const quickLinks = [
  { key: 'home',    href: '#home' },
  { key: 'about',   href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'whyUs',   href: '#why-us' },
  { key: 'clients', href: '#clients' },
  { key: 'contact', href: '#contact' },
];

const socials = [
  { icon: Linkedin,  label: 'LinkedIn TakoTekno',  href: '#' },
  { icon: Twitter,   label: 'Twitter TakoTekno',   href: '#' },
  { icon: Instagram, label: 'Instagram TakoTekno', href: '#' },
  { icon: Facebook,  label: 'Facebook TakoTekno',  href: '#' },
];
</script>

<style scoped>
.footer-section {
  position: relative;
  background: var(--surface-1);
  color: var(--text-secondary);
}

.footer-top-bar {
  height: 1.5px;
  background: var(--gradient-primary);
}

.footer-tagline {
  font-size: 0.92rem;
  line-height: 1.7;
  max-width: 360px;
}

.footer-seo-text {
  font-size: 0.72rem;
  color: rgba(105, 89, 125, 0.25);
  line-height: 1.5;
}

.footer-heading {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  transition: color 0.2s ease;
}
.footer-link:hover { color: var(--primary); }
.footer-link-arrow {
  flex-shrink: 0;
  color: var(--primary);
  transition: transform 0.2s ease;
}
.footer-link:hover .footer-link-arrow { transform: translateX(3px); }

.social-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  background: var(--surface-0);
  border: 1px solid var(--glass-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}
.social-icon:hover {
  background: rgba(105, 89, 125, 0.10);
  border-color: var(--primary-light);
  color: var(--primary);
  transform: translateY(-3px);
}

.footer-divider {
  height: 1px;
  background: var(--glass-border);
  margin-bottom: 24px;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.footer-copy { font-size: 0.82rem; }

</style>

<template>
  <section
    id="home"
    class="hero-section"
    aria-label="Hero section"
  >
    <!-- Content -->
    <div class="relative z-10 container mx-auto px-5 max-w-7xl pt-36 pb-24">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Left: Text -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <!-- Headline -->
          <h1 class="scroll-fade-up hero-title mb-6" style="transition-delay: 100ms">
            <span class="text-[var(--text-primary)] block">{{ t('hero.title') }}</span>
            <span class="gradient-text block">{{ t('hero.titleAccent') }}</span>
            <span class="text-[var(--text-secondary)] block">{{ t('hero.titleEnd') }}</span>
          </h1>

          <!-- Subtitle -->
          <p class="scroll-fade-up hero-subtitle mb-10" style="transition-delay: 200ms">
            {{ t('hero.subtitle') }}
          </p>

          <!-- CTAs -->
          <div class="scroll-fade-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12" style="transition-delay: 300ms">
            <a
              href="https://wa.me/62881080002564"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary btn-glow"
              id="hero-cta-whatsapp"
              aria-label="Konsultasi AI Gratis via WhatsApp"
            >
              <MessageCircle :size="18" />
              {{ t('hero.cta') }}
            </a>
            <a
              href="#services"
              class="btn-secondary"
              id="hero-cta-services"
              aria-label="Lihat layanan TakoTekno"
            >
              {{ t('hero.ctaSecondary') }}
            </a>
          </div>

          <!-- Tech Pills -->
          <div class="scroll-fade-up flex flex-wrap gap-2 justify-center lg:justify-start" style="transition-delay: 400ms">
            <span
              v-for="(pill, i) in t('hero.pills')"
              :key="i"
              class="tech-pill"
            >
              <component :is="pillIcons[i]" :size="12" />
              {{ pill }}
            </span>
          </div>
        </div>

        <!-- Right: Visual -->
        <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div class="scroll-fade-right hero-visual-wrap" style="transition-delay: 200ms">
            <!-- Main Logo Display Card -->
            <div class="hero-logo-card">
              <div class="logo-glow-ring">
                <img
                  src="@assets/tako-logo.png"
                  alt="TakoTekno — AI Agency Indonesia"
                  class="hero-logo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" aria-hidden="true">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { MessageCircle, Sparkles, Bot, Brain, Smartphone, Globe, Zap, Code } from 'lucide-vue-next';
import { useTranslations } from '@/composables/useTranslations.js';

const { t } = useTranslations();

const pillIcons = [Brain, Bot, Code, Smartphone, Zap, Globe];

onMounted(() => {
  // Trigger scroll animations
  const els = document.querySelectorAll('.scroll-fade-up, .scroll-fade-left, .scroll-fade-right');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.style.transitionDelay || '0ms';
        setTimeout(() => {
          e.target.classList.add('visible');
        }, parseInt(delay));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
});
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: var(--surface-0);
  display: flex;
  align-items: center;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 520px;
  line-height: 1.8;
}

/* Visual Wrapper - Fully Responsive Grid/Card */
.hero-visual-wrap {
  width: 100%;
  max-width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-logo-card {
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-1);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  box-shadow: var(--glass-shadow);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}
.hero-logo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(105, 89, 125, 0.08);
}

.logo-glow-ring {
  padding: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(105, 89, 125, 0.10), transparent 70%);
}

.hero-logo-img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(105, 89, 125, 0.2));
  animation: logoPulse 6s ease-in-out infinite;
}

@keyframes logoPulse {
  0%, 100% { filter: drop-shadow(0 0 20px rgba(105, 89, 125, 0.2)); transform: scale(1); }
  50%       { filter: drop-shadow(0 0 35px rgba(125, 105, 89, 0.25)); transform: scale(1.02); }
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.scroll-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--primary);
  animation: scrollBounce 1.5s ease-in-out infinite;
}
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50%       { transform: translateY(10px); opacity: 0.3; }
}
</style>

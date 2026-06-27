<template>
  <section
    id="services"
    class="services-section"
    aria-labelledby="services-heading"
  >
    <div class="relative z-10 container mx-auto px-5 max-w-7xl py-28">

      <!-- Header -->
      <div class="text-center mb-16 scroll-fade-up">
        <p class="section-label justify-center">{{ t('services.badge') }}</p>
        <h2 id="services-heading" class="section-title text-[var(--text-primary)]">
          {{ t('services.title') }}
          <span class="gradient-text"> {{ t('services.titleAccent') }}</span>
        </h2>
        <p class="services-subtitle mt-4 mx-auto text-[var(--text-secondary)]">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <!-- Balanced 3-Column Grid -->
      <div class="services-grid">
        <div
          v-for="(item, i) in serviceItems"
          :key="i"
          class="service-card neon-card scroll-fade-up"
          :style="`transition-delay: ${i * 100}ms`"
        >
          <div class="service-icon-wrap mb-6" :class="`icon-wrap-${item.colorClass}`">
            <component :is="item.icon" :size="26" class="text-white" />
          </div>
          <h3 class="service-title text-xl text-[var(--text-primary)]">
            {{ t(`services.items.${i}.title`) }}
          </h3>
          <p class="service-desc mt-3 text-sm text-[var(--text-secondary)]">
            {{ t(`services.items.${i}.description`) }}
          </p>
          <div class="flex flex-wrap gap-2 mt-5">
            <span
              v-for="tag in t(`services.items.${i}.tags`)"
              :key="tag"
              class="tag-chip text-xs"
              :class="`tag-chip-${item.colorClass}`"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16 scroll-fade-up">
        <a
          href="https://wa.me/62881080002564"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary btn-glow inline-flex"
          id="services-cta"
          aria-label="Diskusikan proyek otomasi atau modernisasi Anda"
        >
          <MessageCircle :size="18" />
          {{ currentLanguage === 'id' ? 'Diskusikan Proyek Anda' : 'Discuss Your Project' }}
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Brain, Zap, Code, MessageCircle } from 'lucide-vue-next';
import { useTranslations } from '@/composables/useTranslations.js';

const { t, currentLanguage } = useTranslations();

const serviceItems = [
  { icon: Brain, colorClass: 'primary' },   // Agentic AI & Chatbots (Mauve)
  { icon: Zap, colorClass: 'secondary' },    // Business Automation & AI Tools (Terracotta)
  { icon: Code, colorClass: 'accent' },     // Web & Mobile Modernization (Sage Green)
];
</script>

<style scoped>
.services-section {
  position: relative;
  overflow: hidden;
  background: var(--surface-0);
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}
.services-subtitle {
  font-size: 1.05rem;
  max-width: 560px;
  line-height: 1.7;
}

/* Responsive 3-Column Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 960px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

.service-card {
  padding: 32px 28px;
  border-radius: 20px;
  background: var(--surface-1);
  border: 1px solid var(--glass-border);
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
}

.service-title {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.3;
}
.service-desc {
  line-height: 1.75;
  flex-grow: 1;
}

/* Triadic Tag Chips */
.tag-chip-primary {
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
  background: rgba(105, 89, 125, 0.06);
  border: 1px solid rgba(105, 89, 125, 0.15);
  color: var(--primary);
}
.dark-mode .tag-chip-primary { color: var(--primary-light); }

.tag-chip-secondary {
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
  background: rgba(125, 105, 89, 0.06);
  border: 1px solid rgba(125, 105, 89, 0.15);
  color: var(--secondary);
}
.dark-mode .tag-chip-secondary { color: var(--secondary-light); }

.tag-chip-accent {
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
  background: rgba(89, 125, 105, 0.06);
  border: 1px solid rgba(89, 125, 105, 0.15);
  color: var(--accent);
}
.dark-mode .tag-chip-accent { color: var(--accent-light); }

/* Triadic Icon Wrappers */
.service-icon-wrap {
  width: 56px; height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-wrap-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  box-shadow: 0 4px 16px rgba(105, 89, 125, 0.15);
}
.icon-wrap-secondary {
  background: linear-gradient(135deg, var(--secondary), var(--secondary-light));
  box-shadow: 0 4px 16px rgba(125, 105, 89, 0.15);
}
.icon-wrap-accent {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  box-shadow: 0 4px 16px rgba(89, 125, 105, 0.15);
}
</style>

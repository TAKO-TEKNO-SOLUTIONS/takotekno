<template>
  <section
    id="why-us"
    class="whyus-section"
    aria-labelledby="whyus-heading"
  >
    <div class="relative z-10 container mx-auto px-5 max-w-7xl py-28">

      <!-- Header -->
      <div class="text-center mb-16 scroll-fade-up">
        <p class="section-label justify-center">{{ t('whyUs.badge') }}</p>
        <h2 id="whyus-heading" class="section-title text-[var(--text-primary)]">
          {{ t('whyUs.title') }}
          <span class="gradient-text"> {{ t('whyUs.titleAccent') }}</span>
        </h2>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feat, i) in t('whyUs.features')"
          :key="i"
          class="feature-card neon-card scroll-fade-up"
          :style="`transition-delay: ${i * 80}ms`"
        >
          <div class="feature-num">0{{ i + 1 }}</div>
          <div class="feature-icon-box mb-4">
            <component :is="featureIcons[i]" :size="24" class="text-white" />
          </div>
          <h3 class="feature-title text-[var(--text-primary)]">
            {{ feat.title }}
          </h3>
          <p class="feature-desc mt-3 text-[var(--text-secondary)]">
            {{ feat.description }}
          </p>
        </div>
      </div>

      <!-- Trust indicators row -->
      <div class="trust-row mt-16 scroll-fade-up">
        <div
          v-for="(trust, i) in trustItems"
          :key="i"
          class="trust-item text-[var(--text-secondary)]"
        >
          <component :is="trust.icon" :size="20" class="trust-icon" />
          <span>{{ trust.label }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Brain, MapPin, Layers, Clock, Shield, HeartHandshake, CheckCircle } from 'lucide-vue-next';
import { useTranslations } from '@/composables/useTranslations.js';

const { t } = useTranslations();

const featureIcons = [Brain, MapPin, Layers, Clock, Shield, HeartHandshake];

const trustItems = [
  { icon: CheckCircle, label: 'ISO-aligned Development' },
  { icon: CheckCircle, label: 'Data Privacy Compliant' },
  { icon: CheckCircle, label: 'GDPR-aware AI Systems' },
  { icon: CheckCircle, label: '24/7 Support SLA' },
  { icon: CheckCircle, label: 'Agile & Transparent' },
];
</script>

<style scoped>
.whyus-section {
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

.feature-card {
  padding: 28px;
  border-radius: 20px;
  background: var(--surface-1);
  border: 1px solid var(--glass-border);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.feature-num {
  position: absolute;
  top: 20px; right: 24px;
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  color: rgba(105, 89, 125, 0.05);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.feature-icon-box {
  width: 52px; height: 52px;
  border-radius: 14px;
  background: var(--gradient-primary);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 16px rgba(105,89,125,0.15);
  transition: transform 0.3s ease;
}
.feature-card:hover .feature-icon-box {
  transform: scale(1.1) rotate(-5deg);
}

.feature-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
}
.feature-desc { font-size: 0.9rem; line-height: 1.7; }

/* Trust Row */
.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.trust-item {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(105,89,125,0.04);
  border: 1px solid rgba(105,89,125,0.12);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}
.trust-item:hover {
  background: rgba(105,89,125,0.08);
  border-color: rgba(105,89,125,0.20);
}
.trust-icon { color: var(--accent); flex-shrink: 0; }
</style>

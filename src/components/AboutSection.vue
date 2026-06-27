<template>
  <section
    id="about"
    class="about-section"
    aria-labelledby="about-heading"
  >
    <div class="container mx-auto px-5 max-w-7xl py-28">

      <!-- Header -->
      <div class="text-center mb-20 scroll-fade-up">
        <p class="section-label justify-center">
          {{ t('about.badge') }}
        </p>
        <h2 id="about-heading" class="section-title text-[var(--text-primary)]">
          {{ t('about.title') }}
          <span class="gradient-text"> {{ t('about.titleAccent') }}</span>
        </h2>
      </div>

      <!-- Main Content: 2 cols -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Text -->
        <div class="scroll-fade-left">
          <p class="about-para text-[var(--text-primary)] mb-6">
            {{ t('about.paragraph1') }}
          </p>
          <p class="about-para text-[var(--text-secondary)]">
            {{ t('about.paragraph2') }}
          </p>
        </div>

        <!-- Right: Feature bullets -->
        <div class="scroll-fade-right grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="(item, i) in aboutFeatures"
            :key="i"
            class="about-feature-card neon-card"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <div class="feature-icon-wrap mb-4">
              <component :is="item.icon" :size="22" class="text-white" />
            </div>
            <h3 class="text-base font-semibold mb-2 text-[var(--text-primary)]">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-relaxed text-[var(--text-secondary)]">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Brain, Zap, MapPin, Shield, Layers, Users } from 'lucide-vue-next';
import { useTranslations } from '@/composables/useTranslations.js';

const { t } = useTranslations();

const aboutFeatures = [
  { icon: Brain,  title: 'AI-First Approach',   desc: 'Setiap solusi dirancang berdasarkan keunggulan AI sejak awal.' },
  { icon: MapPin, title: 'Jangkauan Nasional',   desc: 'Berbasis di Surabaya untuk kolaborasi langsung, melayani digitalisasi & otomasi bisnis di seluruh Indonesia.' },
  { icon: Zap,    title: 'Otomatisasi Efektif',        desc: 'Fokus memangkas alur kerja manual agar efisiensi meningkat nyata.' },
  { icon: Shield, title: 'Modernisasi Sistem',  desc: 'Membangun ulang web lama Anda menjadi portal modern berkecepatan tinggi.' },
  { icon: Layers, title: 'Full-Stack Integration', desc: 'Frontend, backend, AI model, serta mobile integration dalam satu pintu.' },
  { icon: Users,  title: 'Partner Terpercaya',   desc: 'Berkomitmen memberikan solusi jangka panjang yang transparan.' },
];
</script>

<style scoped>
.about-section {
  background: var(--surface-1);
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.about-para { font-size: 1.05rem; line-height: 1.8; }

/* Feature cards */
.about-feature-card {
  padding: 24px;
  border-radius: 16px;
  background: var(--surface-0);
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.feature-icon-wrap {
  width: 48px; height: 48px;
  border-radius: 12px;
  background: var(--gradient-primary);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 16px rgba(105, 89, 125, 0.15);
}
</style>

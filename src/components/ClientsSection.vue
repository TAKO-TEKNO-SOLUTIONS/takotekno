<template>
  <section
    id="clients"
    class="clients-section"
    aria-labelledby="clients-heading"
  >
    <div class="container mx-auto px-5 max-w-7xl py-28">

      <!-- Header -->
      <div class="text-center mb-16 scroll-fade-up">
        <p class="section-label justify-center">{{ t('clients.badge') }}</p>
        <h2 id="clients-heading" class="section-title text-[var(--text-primary)]">
          {{ t('clients.title') }}
          <span class="gradient-text"> {{ t('clients.titleAccent') }}</span>
        </h2>
      </div>

      <!-- Balanced 3-Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(client, i) in clientItems"
          :key="i"
          class="client-card neon-card scroll-fade-up"
          :style="`transition-delay: ${i * 100}ms`"
        >
          <div class="client-icon-wrap mb-5" :style="`background: ${client.bgColor}`">
            <component :is="client.icon" :size="26" class="text-white" />
          </div>
          <h3 class="client-title text-[var(--text-primary)]">
            {{ t(`clients.items.${i}.title`) }}
          </h3>
          <p class="client-desc mt-3 text-[var(--text-secondary)]">
            {{ t(`clients.items.${i}.description`) }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Briefcase, Building2, GraduationCap } from 'lucide-vue-next';
import { useTranslations } from '@/composables/useTranslations.js';

const { t } = useTranslations();

const clientItems = [
  { icon: Briefcase,     bgColor: 'var(--primary)' },
  { icon: Building2,     bgColor: 'var(--secondary)' },
  { icon: GraduationCap, bgColor: 'var(--accent)' },
];
</script>

<style scoped>
.clients-section {
  background: var(--surface-1);
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.client-card {
  padding: 32px 24px;
  border-radius: 20px;
  background: var(--surface-0);
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
  text-align: center;
}

.client-icon-wrap {
  width: 64px; height: 64px;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 6px 20px rgba(105, 89, 125, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.client-card:hover .client-icon-wrap {
  transform: translateY(-4px) scale(1.05);
}

.client-title {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
}
.client-desc {
  font-size: 0.9rem;
  line-height: 1.7;
}
</style>

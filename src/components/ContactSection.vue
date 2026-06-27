<template>
  <section
    id="contact"
    class="contact-section"
    aria-labelledby="contact-heading"
  >
    <div class="relative z-10 container mx-auto px-5 max-w-7xl py-28">

      <!-- Header -->
      <div class="text-center mb-16 scroll-fade-up">
        <p class="section-label justify-center">{{ t('contact.badge') }}</p>
        <h2 id="contact-heading" class="section-title text-[var(--text-primary)]">
          {{ t('contact.title') }}
          <span class="gradient-text"> {{ t('contact.titleAccent') }}</span>
        </h2>
        <p class="contact-subtitle mt-4 mx-auto text-[var(--text-secondary)]">
          {{ t('contact.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

        <!-- Left Info Panel -->
        <div class="lg:col-span-2 scroll-fade-left">
          <!-- WhatsApp CTA -->
          <a
            href="https://wa.me/62881080002564"
            target="_blank"
            rel="noopener noreferrer"
            class="wa-button mb-8 block"
            id="contact-whatsapp-btn"
            aria-label="Chat TakoTekno via WhatsApp"
          >
            <div class="wa-icon">
              <MessageCircle :size="28" class="text-white" />
            </div>
            <div>
              <p class="wa-label">WhatsApp</p>
              <p class="wa-number">+62 881 08000 2564</p>
            </div>
            <ArrowRight :size="20" class="ml-auto wa-arrow" />
          </a>

          <!-- Info cards -->
          <div class="space-y-4">
            <div class="info-card">
              <div class="info-icon bg-primary">
                <Mail :size="18" class="text-white" />
              </div>
              <div>
                <p class="info-label text-[var(--text-muted)]">Email</p>
                <a
                  href="mailto:halo@takotekno.biz.id"
                  class="info-value underline-animated text-[var(--text-primary)]"
                >
                  halo@takotekno.biz.id
                </a>
              </div>
            </div>
            <div class="info-card">
              <div class="info-icon bg-secondary">
                <MapPin :size="18" class="text-white" />
              </div>
              <div>
                <p class="info-label text-[var(--text-muted)]">Lokasi</p>
                <p class="info-value text-[var(--text-primary)]">Surabaya, Jawa Timur, Indonesia</p>
              </div>
            </div>
            <div class="info-card">
              <div class="info-icon bg-accent">
                <Clock :size="18" class="text-white" />
              </div>
              <div>
                <p class="info-label text-[var(--text-muted)]">Response Time</p>
                <p class="info-value text-[var(--text-primary)]">≤ 24 jam kerja</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="lg:col-span-3 scroll-fade-right">
          <form
            @submit.prevent="submitForm"
            class="contact-form"
            novalidate
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <!-- Name -->
              <div class="form-group">
                <label for="contact-name" class="form-label text-[var(--text-secondary)]">
                  {{ t('contact.form.name') }} <span class="text-[var(--secondary)]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  v-model="form.name"
                  required
                  :placeholder="t('contact.form.namePlaceholder')"
                  class="input-styled"
                />
              </div>
              <!-- Email -->
              <div class="form-group">
                <label for="contact-email" class="form-label text-[var(--text-secondary)]">
                  {{ t('contact.form.email') }} <span class="text-[var(--secondary)]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  v-model="form.email"
                  required
                  :placeholder="t('contact.form.emailPlaceholder')"
                  class="input-styled"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <!-- Company -->
              <div class="form-group">
                <label for="contact-company" class="form-label text-[var(--text-secondary)]">
                  {{ t('contact.form.company') }}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  v-model="form.company"
                  :placeholder="t('contact.form.companyPlaceholder')"
                  class="input-styled"
                />
              </div>
              <!-- Service -->
              <div class="form-group">
                <label for="contact-service" class="form-label text-[var(--text-secondary)]">
                  {{ t('contact.form.service') }}
                </label>
                <select
                  id="contact-service"
                  v-model="form.service"
                  class="input-styled"
                >
                  <option value="">{{ t('contact.form.servicePlaceholder') }}</option>
                  <option v-for="opt in t('contact.form.serviceOptions')" :key="opt" :value="opt">
                    {{ opt }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Message -->
            <div class="form-group mb-6">
              <label for="contact-message" class="form-label text-[var(--text-secondary)]">
                {{ t('contact.form.message') }} <span class="text-[var(--secondary)]">*</span>
              </label>
              <textarea
                id="contact-message"
                v-model="form.message"
                rows="5"
                required
                :placeholder="t('contact.form.messagePlaceholder')"
                class="input-styled"
              ></textarea>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="btn-primary w-full justify-center"
              :class="{ 'opacity-70 cursor-not-allowed': isSubmitting }"
              :disabled="isSubmitting"
              id="contact-submit"
            >
              <Loader2 v-if="isSubmitting" :size="18" class="animate-spin" />
              <Send v-else :size="18" />
              {{ isSubmitting ? t('contact.form.sending') : t('contact.form.submit') }}
            </button>

            <!-- Success message -->
            <Transition name="fade">
              <div v-if="showSuccess" class="success-msg mt-4">
                <CheckCircle :size="18" />
                {{ t('contact.form.success') }}
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { MessageCircle, Mail, MapPin, Clock, ArrowRight, Send, Loader2, CheckCircle } from 'lucide-vue-next';
import { useTranslations } from '@/composables/useTranslations.js';

const { t } = useTranslations();

const form = ref({ name: '', email: '', company: '', service: '', message: '' });
const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitForm = async () => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;
  // Simulate API call
  await new Promise(r => setTimeout(r, 1500));
  isSubmitting.value = false;
  showSuccess.value = true;
  form.value = { name: '', email: '', company: '', service: '', message: '' };
  setTimeout(() => (showSuccess.value = false), 6000);
};
</script>

<style scoped>
.contact-section {
  position: relative;
  overflow: hidden;
  background: var(--surface-1);
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}
.contact-subtitle {
  font-size: 1.05rem;
  max-width: 500px;
  line-height: 1.7;
}

/* WhatsApp Button */
.wa-button {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: var(--accent);
  border-radius: 16px;
  text-decoration: none;
  box-shadow: 0 6px 30px rgba(89, 125, 105, 0.15);
  transition: all 0.3s ease;
  color: #fff;
}
.wa-button:hover {
  background: var(--accent-dark);
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(89, 125, 105, 0.25);
}
.wa-icon {
  width: 52px; height: 52px;
  border-radius: 14px;
  background: rgba(255,255,255,0.20);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.wa-label { font-size: 0.78rem; opacity: 0.8; font-weight: 500; }
.wa-number { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; }
.wa-arrow { opacity: 0.7; transition: transform 0.2s ease; }
.wa-button:hover .wa-arrow { transform: translateX(4px); }

/* Info Cards */
.info-card {
  display: flex; align-items: center; gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  background: var(--surface-0);
  border: 1px solid var(--glass-border);
}

.info-icon {
  width: 42px; height: 42px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.bg-primary { background: var(--primary); }
.bg-secondary { background: var(--secondary); }
.bg-accent { background: var(--accent); }
.info-label { font-size: 0.75rem; font-weight: 500; margin-bottom: 2px; }
.info-value { font-size: 0.92rem; font-weight: 600; }

/* Form */
.contact-form {
  border-radius: 24px;
  padding: 32px;
  background: var(--surface-0);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-label { font-size: 0.85rem; font-weight: 600; }

.input-styled {
  width: 100%;
  padding: 14px 18px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--glass-border);
  background: var(--surface-1);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: all var(--transition-fast);
  outline: none;
}
.input-styled:focus {
  border-color: var(--primary-light);
  background: var(--surface-0);
  box-shadow: 0 0 0 3px rgba(105, 89, 125, 0.10);
}
.input-styled::placeholder {
  color: var(--text-muted);
}
.input-styled option {
  background: var(--surface-0);
  color: var(--text-primary);
}

/* Success */
.success-msg {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 18px;
  border-radius: 12px;
  background: rgba(89, 125, 105, 0.10);
  border: 1px solid rgba(89, 125, 105, 0.25);
  color: var(--accent-dark);
  font-weight: 500;
  font-size: 0.9rem;
}
.dark-mode .success-msg {
  color: var(--accent-light);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-8px); }

.animate-spin { animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>

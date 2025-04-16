<template>
  <div :class="[isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800']" class="font-sans transition-colors duration-300">
    <header :class="[isDarkMode ? 'bg-gray-800 bg-opacity-95' : 'bg-white bg-opacity-95']" class="fixed top-0 left-0 w-full z-50 shadow-sm transition-colors duration-300">
     <div class="container mx-auto px-5 max-w-7xl">
        <div class="flex justify-between items-center h-20">
          <div class="logo">
            <h1 :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="text-2xl font-bold">Tako<span
                :class="[isDarkMode ? 'dark:text-[#dcd8e0]' : 'text-[#94849c]']">Tekno</span></h1>
          </div>
          <nav class="nav" :class="{ 'nav-active': isMenuOpen }">
            <ul class="hidden md:flex space-x-8">
              <li><a href="#home"
                  :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
                  class="font-medium transition-colors duration-300">{{
                    t('nav.home') }}</a></li>
              <li><a href="#about"
                  :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
                  class="font-medium transition-colors duration-300">{{
                    t('nav.about') }}</a></li>
              <li><a href="#who-is-this-for"
                  :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
                  class="font-medium transition-colors duration-300">{{
                    t('nav.whoIsThisFor') }}</a></li>
              <li><a href="#services"
                  :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
                  class="font-medium transition-colors duration-300">{{
                    t('nav.services') }}</a></li>
              <li><a href="#why-us"
                  :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
                  class="font-medium transition-colors duration-300">{{
                    t('nav.whyUs') }}</a></li>
              <li><a href="#contact"
                  :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
                  class="font-medium transition-colors duration-300">{{
                    t('nav.contact') }}</a></li>
            </ul>
          </nav>
          <div class="flex items-center space-x-4">
            <!-- Language Switcher -->
            <div class="hidden md:flex items-center">
              <button @click="toggleLanguage"
                :class="[isDarkMode ? 'dark:border-gray-600 dark:hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100']"
                class="flex items-center space-x-1 px-3 py-1 rounded-md border transition-colors duration-300">
                <Globe size="16" :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" />
                <span class="text-sm font-medium">{{ currentLanguage === 'en' ? 'EN' : 'ID' }}</span>
              </button>
            </div>

            <!-- Dark Mode Toggle -->
            <button @click="toggleDarkMode"
              :class="[isDarkMode ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-200']"
              class="p-2 rounded-full transition-colors duration-300"
              aria-label="Toggle dark mode">
              <Sun v-if="isDarkMode" size="20" class="text-yellow-400" />
              <Moon v-else size="20" class="text-[#6b5c7c]" />
            </button>

            <!-- Mobile Menu Toggle -->
            <div class="md:hidden cursor-pointer" @click="toggleMenu">
              <div class="hamburger" :class="{ 'active': isMenuOpen }">
                <span
                  :class="[isDarkMode ? 'dark:bg-[#b4abbc]' : 'bg-[#6b5c7c]']"
                  class="block absolute h-0.5 w-full rounded-sm transition-all duration-300"></span>
                <span
                  :class="[isDarkMode ? 'dark:bg-[#b4abbc]' : 'bg-[#6b5c7c]']"
                  class="block absolute h-0.5 w-full rounded-sm transition-all duration-300 mt-2"></span>
                <span
                  :class="[isDarkMode ? 'dark:bg-[#b4abbc]' : 'bg-[#6b5c7c]']"
                  class="block absolute h-0.5 w-full rounded-sm transition-all duration-300 mt-4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen"
        :class="[isDarkMode ? 'dark:bg-gray-800' : 'bg-white']"
        class="md:hidden py-5 px-5 shadow-lg transition-colors duration-300">
        <ul class="flex flex-col space-y-4">
          <li><a href="#home" @click="closeMenu"
              :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
              class="block font-medium transition-colors duration-300">{{
                t('nav.home') }}</a></li>
          <li><a href="#about" @click="closeMenu"
              :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
              class="block font-medium transition-colors duration-300">{{
                t('nav.about') }}</a></li>
          <li><a href="#who-is-this-for" @click="closeMenu"
              :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
              class="block font-medium transition-colors duration-300">{{
                t('nav.whoIsThisFor') }}</a></li>
          <li><a href="#services" @click="closeMenu"
              :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
              class="block font-medium transition-colors duration-300">{{
                t('nav.services') }}</a></li>
          <li><a href="#why-us" @click="closeMenu"
              :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
              class="block font-medium transition-colors duration-300">{{
                t('nav.whyUs') }}</a></li>
          <li><a href="#contact" @click="closeMenu"
              :class="[isDarkMode ? 'dark:hover:text-[#b4abbc]' : 'hover:text-[#6b5c7c]']"
              class="block font-medium transition-colors duration-300">{{
                t('nav.contact') }}</a></li>
        </ul>
        <div :class="[isDarkMode ? 'dark:border-gray-700' : 'border-gray-200']" class="mt-4 pt-4 border-t">
          <button @click="toggleLanguage"
            :class="[isDarkMode ? 'dark:border-gray-600 dark:hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100']"
            class="flex items-center space-x-1 px-3 py-1 rounded-md border transition-colors duration-300">
            <Globe size="16" :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" />
            <span class="text-sm font-medium">{{ currentLanguage === 'en' ? 'English' : 'Indonesia' }}</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home"
      :class="[isDarkMode ? 'dark:from-gray-800 dark:to-gray-900' : 'from-[#dcd8e0] to-[#f2f2f2']"
      class="pt-40 pb-24 bg-gradient-to-r transition-colors duration-300">
      <div class="container mx-auto px-5 max-w-7xl">
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div v-scroll-animate class="w-full md:w-1/2 text-center md:text-left">
            <h1 :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#746b8c]']" class="text-4xl md:text-5xl font-bold leading-tight mb-6">{{
              t('hero.title') }}</h1>
            <p :class="[isDarkMode ? 'dark:text-gray-300' : 'text-gray-700']" class="text-lg md:text-xl mb-8">{{ t('hero.subtitle') }}</p>
            <a
              href="https://wa.me/62881080002564"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-[#6b5c7c] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#746b8c] transform hover:-translate-y-0.5 transition-all duration-300 inline-block"
            >
              {{ t('hero.cta') }}
            </a>
          </div>
          <div v-scroll-animate="{ delay: 200 }" class="w-full md:w-1/2">
            <img src="@assets/tako-logo.png" alt="Tech illustration" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" :class="[isDarkMode ? 'dark:bg-gray-800' : 'bg-[#dcd8e0]']" class="py-24 transition-colors duration-300">
      <div class="container mx-auto px-5 max-w-7xl">
        <div v-scroll-animate class="text-center mb-12">
          <h2 :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="text-4xl font-bold mb-4">{{ t('about.title') }}</h2>
        </div>
        <div v-scroll-animate class="max-w-3xl mx-auto">
          <div :class="[isDarkMode ? 'dark:text-gray-300' : 'text-gray-700']" class="text-base md:text-lg">
            <p class="mb-6">{{ t('about.paragraph1') }}</p>
            <p>{{ t('about.paragraph2') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who Is This For Section -->
    <section id="who-is-this-for" :class="[isDarkMode ? 'dark:bg-gray-900' : 'bg-[#aca5bc]']" class="py-24 transition-colors duration-300">
      <div class="container mx-auto px-5 max-w-7xl">
        <div v-scroll-animate class="text-center mb-12">
          <h2  :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="text-4xl font-bold mb-4">{{ t('whoIsThisFor.title') }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(client, index) in clientTypes" :key="index" v-scroll-animate="{ delay: index * 100 }"
            :class="[isDarkMode ? 'dark:bg-gray-800' : 'bg-white']"
            class="p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
            <div :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="flex justify-center mb-5">
              <component :is="client.icon" size="48" />
            </div>
            <h3  :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="text-2xl font-semibold mb-4">{{
              t(`whoIsThisFor.clients.${index}.title`) }}</h3>
            <p :class="[isDarkMode ? 'dark:text-gray-300' :'text-[#6b5c7c]']">{{ t(`whoIsThisFor.clients.${index}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" :class="[isDarkMode ? 'dark:bg-gray-900' : 'bg-[#dcd8e0]']" class="py-24 transition-colors duration-300">
      <div class="container mx-auto px-5 max-w-7xl">
        <div v-scroll-animate class="text-center mb-12">
          <h2 :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="text-4xl font-bold">{{ t('services.title') }}</h2>
        </div>
        <div v-scroll-animate class="relative max-w-4xl mx-auto overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentServiceSlide * 100}%)` }">
            <div v-for="(service, index) in services" :key="index" class="min-w-full px-4">
              <div
                :class="[isDarkMode ? 'dark:bg-gray-800' : 'bg-white']"
                class="p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center h-full">
                <div :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="flex justify-center mb-5">
                  <component :is="service.icon" size="48" />
                </div>
                <h3 :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#746b8c]']" class="text-2xl font-semibold mb-4">{{
                  t(`services.items.${index}.title`) }}</h3>
                <p :class="[isDarkMode ? 'dark:text-gray-300' : 'text-gray-800']">{{ t(`services.items.${index}.description`) }}</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-8">
            <div class="flex space-x-3">
              <button v-for="(_, index) in services" :key="index" @click="goToServiceSlide(index)"
                :class="{ 'bg-[#6b5c7c] scale-110': currentServiceSlide === index, 'bg-[#6b5c7c] bg-opacity-30 dark:bg-opacity-50': currentServiceSlide !== index }"
                class="w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none"
                aria-label="Go to service slide"></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section id="why-us" :class="[isDarkMode ? 'dark:bg-gray-900' : 'bg-[#aca5bc]']" class="py-24 transition-colors duration-300">
      <div class="container mx-auto px-5 max-w-7xl">
        <div v-scroll-animate class="text-center mb-12">
          <h2 :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="text-4xl font-bold mb-4">{{ t('whyUs.title') }}</h2>
        </div>
        <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index" v-scroll-animate="{ delay: index * 100 }"
            :class="[isDarkMode ? 'dark:hover:bg-[#6b5c7c] dark:bg-gray-800' : 'hover:bg-[#6b5c7c] hover:text-white bg-white']"
            class="p-6 rounded-lg shadow-md transition-all duration-300 group">
            <div :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="mb-4 group-hover:text-white transition-colors duration-300">
              <component :is="feature.icon" size="32" />
            </div>
            <h3
              :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#746b8c]']"
              class="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
              {{ t(`whyUs.features.${index}.title`) }}</h3>
            <p :class="[isDarkMode ? 'dark:text-gray-300' : 'text-gray-800']" class="group-hover:text-white transition-colors duration-300">{{
              t(`whyUs.features.${index}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" :class="[isDarkMode ? 'dark:bg-gray-800' : 'bg-[#dcd8e0]']" class="py-24 transition-colors duration-300">
      <div class="container mx-auto px-5 max-w-7xl">
        <div v-scroll-animate class="text-center mb-12">
          <h2 :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="text-4xl font-bold mb-4">{{ t('contact.title') }}</h2>
        </div>
        <div class="flex flex-col md:flex-row gap-12 items-start">
          <div v-scroll-animate class="w-full md:w-1/2">
            <h3 :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="text-3xl font-semibold mb-5">{{ t('contact.subtitle') }}</h3>
            <p :class="[isDarkMode ? 'dark:text-gray-300' : 'text-gray-800']" class="text-lg mb-8">{{ t('contact.description') }}</p>
            <div class="space-y-4 mt-8">
              <div :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="flex items-center">
                <Mail size="20" />
                <a href="mailto:info@takotekno.solutions" :class="[isDarkMode ? 'dark:text-gray-300' : 'text-gray-800']" class="ml-3 hover:underline">
                  info@takotekno.solutions
                </a>
              </div>
              <div :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="flex items-center">
                <Phone size="20" />
                <a href="https://wa.me/62881080002564" target="_blank" rel="noopener noreferrer" :class="[isDarkMode ? 'dark:text-gray-300' : 'text-gray-800']" class="ml-3 hover:underline">
                  +62 881 08000 2564
                </a>
              </div>
              <div :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#6b5c7c]']" class="flex items-center">
                <MapPin size="20" />
                <span :class="[isDarkMode ? 'dark:text-gray-300' : 'text-gray-800']" class="ml-3">Surabaya, Indonesia</span>
              </div>
            </div>
          </div>
          <div v-scroll-animate="{ delay: 200 }" class="w-full md:w-1/2">
            <form @submit.prevent="submitForm"
              :class="[isDarkMode ? 'dark:bg-gray-800' : 'bg-white']"
              class="p-8 rounded-lg shadow-lg border border-[#6b5c7c] border-opacity-20 dark:border-opacity-40">
              <div class="mb-5">
                <label for="name" :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#746b8c]']" class="block mb-2 font-medium">{{
                  t('contact.form.name') }}</label>
                <input type="text" id="name" v-model="form.name" required
                  :class="[isDarkMode ? 'dark:border-gray-600 dark:bg-gray-700  dark:text-gray-200' : 'border-gray-300 bg-white text-gray-800']"
                  class="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b5c7c] focus:border-[#6b5c7c]" />
              </div>
              <div class="mb-5">
                <label for="email" :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#746b8c]']" class="block mb-2 font-medium">{{
                  t('contact.form.email') }}</label>
                <input type="email" id="email" v-model="form.email" required
                  :class="[isDarkMode ? 'dark:border-gray-600 dark:bg-gray-700  dark:text-gray-200' : 'border-gray-300 bg-white text-gray-800']"
                  class="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b5c7c] focus:border-[#6b5c7c]" />
              </div>
              <div class="mb-5">
                <label for="message" :class="[isDarkMode ? 'dark:text-[#b4abbc]' : 'text-[#746b8c]']" class="block mb-2 font-medium">{{
                  t('contact.form.message') }}</label>
                <textarea id="message" v-model="form.message" rows="5" required
                  :class="[isDarkMode ? 'dark:border-gray-600 dark:bg-gray-700  dark:text-gray-200' : 'border-gray-300 bg-white text-gray-800']"
                  class="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b5c7c] focus:border-[#6b5c7c]"></textarea>
              </div>
              <button type="submit"
                class="w-full bg-[#6b5c7c] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#746b8c] transition-colors duration-300 mt-3">{{
                  t('contact.form.submit') }}</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer :class="[isDarkMode ? 'dark:bg-gray-900' : 'bg-[#746b8c]']" class="text-white py-16 pb-5 transition-colors duration-300">
      <div class="container mx-auto px-5 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h2 class="text-2xl font-bold mb-4">Tako<span class="text-[#dcd8e0]">Tekno</span></h2>
            <p>{{ t('footer.tagline') }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-5 text-[#dcd8e0]">{{ t('footer.quickLinks') }}</h3>
            <ul class="space-y-3">
              <li><a href="#home" class="text-[#b4abbc] hover:text-white transition-colors duration-300">{{
                t('nav.home') }}</a></li>
              <li><a href="#about" class="text-[#b4abbc] hover:text-white transition-colors duration-300">{{
                t('nav.about') }}</a></li>
              <li><a href="#who-is-this-for" class="text-[#b4abbc] hover:text-white transition-colors duration-300">{{
                t('nav.whoIsThisFor') }}</a></li>
              <li><a href="#services" class="text-[#b4abbc] hover:text-white transition-colors duration-300">{{
                t('nav.services') }}</a></li>
              <li><a href="#why-us" class="text-[#b4abbc] hover:text-white transition-colors duration-300">{{
                t('nav.whyUs') }}</a></li>
              <li><a href="#contact" class="text-[#b4abbc] hover:text-white transition-colors duration-300">{{
                t('nav.contact') }}</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-5 text-[#dcd8e0]">{{ t('footer.connectWithUs') }}</h3>
            <div class="flex space-x-4">
              <a href="#" aria-label="LinkedIn"
                :class="[isDarkMode ? 'dark:hover:bg-[#6b5c7c]' : 'hover:bg-[#94849c]']"
                class="flex items-center justify-center w-10 h-10 bg-opacity-10 rounded-full hover:-translate-y-1 transition-all duration-300">
                <Linkedin size="20" />
              </a>
              <a href="#" aria-label="Twitter"
                :class="[isDarkMode ? 'dark:hover:bg-[#6b5c7c]' : 'hover:bg-[#94849c]']"
                class="flex items-center justify-center w-10 h-10 bg-opacity-10 rounded-full hover:-translate-y-1 transition-all duration-300">
                <Twitter size="20" />
              </a>
              <a href="#" aria-label="Facebook"
                :class="[isDarkMode ? 'dark:hover:bg-[#6b5c7c]' : 'hover:bg-[#94849c]']"
                class="flex items-center justify-center w-10 h-10 bg-opacity-10 rounded-full hover:-translate-y-1 transition-all duration-300">
                <Facebook size="20" />
              </a>
              <a href="#" aria-label="Instagram"
                :class="[isDarkMode ? 'dark:hover:bg-[#6b5c7c]' : 'hover:bg-[#94849c]']"
                class="flex items-center justify-center w-10 h-10 bg-opacity-10 rounded-full hover:-translate-y-1 transition-all duration-300">
                <Instagram size="20" />
              </a>
            </div>
          </div>
        </div>
        <div class="text-center pt-5 border-t border-white border-opacity-10">
          <p>&copy; 2025 PT TAKO TEKNOLOGI SOLUTIONS</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import {
  Monitor,
  Smartphone,
  Database,
  Brain,
  Code,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Briefcase,
  Landmark,
  GraduationCap,
  User,
  Sun,
  Moon,
  Globe
} from 'lucide-vue-next';

// Mobile menu state
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = 'auto';
};

// Dark mode functionality
const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('takotekno-dark-mode', isDarkMode.value ? 'dark' : 'light');

  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

// Language functionality
const currentLanguage = ref('en');

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'id' : 'en';
  localStorage.setItem('takotekno-language', currentLanguage.value);
};

// Translation system
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      whoIsThisFor: 'Who Is This For',
      services: 'Services',
      whyUs: 'Why Us',
      contact: 'Contact'
    },
    hero: {
      title: 'Innovative Tech Solutions for Tomorrow\'s Challenges',
      subtitle: 'We build custom software that transforms businesses and drives growth in the digital era.',
      cta: 'Get Free Consultation'
    },
    about: {
      title: 'About Tako Tekno',
      paragraph1: 'Tako Tekno is a forward-thinking technology company dedicated to delivering innovative software solutions that empower businesses to thrive in an increasingly digital world. Our mission is to combine technical excellence with creative problem-solving to create software that not only meets but exceeds our clients\' expectations.',
      paragraph2: 'With expertise spanning web development, mobile applications, blockchain technology, and artificial intelligence, we\'re equipped to tackle complex challenges across industries. We believe in building partnerships, not just products, working closely with our clients to understand their unique needs and deliver tailored solutions.'
    },
    whoIsThisFor: {
      title: 'Who Is This For?',
      clients: [
        {
          title: 'Business',
          description: 'From startups to enterprises, we help businesses optimize operations, increase efficiency, and drive digital transformation with custom software solutions.'
        },
        {
          title: 'Government',
          description: 'We partner with government agencies to modernize public services, enhance security, and improve citizen engagement through innovative technology.'
        },
        {
          title: 'Education',
          description: 'Educational institutions rely on our expertise to create learning management systems, student portals, and data analytics tools that enhance the educational experience.'
        },
        {
          title: 'Personal',
          description: 'We develop custom applications for individuals seeking to bring their ideas to life, from personal websites to innovative apps that solve everyday challenges.'
        }
      ]
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'Web Development',
          description: 'Custom web applications and responsive websites built with modern frameworks and technologies.'
        },
        {
          title: 'Mobile Development',
          description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.'
        },
        {
          title: 'Blockchain Solutions',
          description: 'Smart contracts, decentralized applications, and blockchain integration for secure, transparent systems.'
        },
        {
          title: 'AI Integration',
          description: 'Machine learning models, data analytics, and AI-powered automation to transform your business processes.'
        },
        {
          title: 'Custom Software',
          description: 'Tailored software solutions designed to address your specific business challenges and requirements.'
        }
      ]
    },
    whyUs: {
      title: 'Why Choose Us',
      features: [
        {
          title: 'Technical Expertise',
          description: 'Our team of experienced developers stays at the forefront of technology to deliver cutting-edge solutions.'
        },
        {
          title: 'Timely Delivery',
          description: 'We understand the importance of deadlines and ensure your project is completed on time, every time.'
        },
        {
          title: 'Security Focus',
          description: 'We implement robust security measures to protect your data and ensure your applications are secure.'
        },
        {
          title: 'Future-Proof Technology',
          description: 'Our solutions are built with scalability and future growth in mind, adapting as your business evolves.'
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your project?',
      description: 'Fill out the form and our team will get back to you within 24 hours.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message'
      }
    },
    footer: {
      tagline: 'Innovative solutions for tomorrow\'s challenges',
      quickLinks: 'Quick Links',
      connectWithUs: 'Connect With Us'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang Kami',
      whoIsThisFor: 'Untuk Siapa',
      services: 'Layanan',
      whyUs: 'Mengapa Kami',
      contact: 'Kontak'
    },
    hero: {
      title: 'Solusi Teknologi Inovatif untuk Tantangan Masa Depan',
      subtitle: 'Kami membangun perangkat lunak kustom yang mentransformasi bisnis dan mendorong pertumbuhan di era digital.',
      cta: 'Dapatkan Konsultasi Gratis'
    },
    about: {
      title: 'Tentang Tako Tekno',
      paragraph1: 'Tako Tekno adalah perusahaan teknologi berpikiran maju yang berdedikasi untuk memberikan solusi perangkat lunak inovatif yang memberdayakan bisnis untuk berkembang di dunia yang semakin digital. Misi kami adalah menggabungkan keunggulan teknis dengan pemecahan masalah kreatif untuk menciptakan perangkat lunak yang tidak hanya memenuhi tetapi melebihi harapan klien kami.',
      paragraph2: 'Dengan keahlian yang mencakup pengembangan web, aplikasi seluler, teknologi blockchain, dan kecerdasan buatan, kami siap mengatasi tantangan kompleks di berbagai industri. Kami percaya dalam membangun kemitraan, bukan hanya produk, bekerja sama dengan klien kami untuk memahami kebutuhan unik mereka dan memberikan solusi yang disesuaikan.'
    },
    whoIsThisFor: {
      title: 'Untuk Siapa?',
      clients: [
        {
          title: 'Bisnis',
          description: 'Dari startup hingga perusahaan besar, kami membantu bisnis mengoptimalkan operasi, meningkatkan efisiensi, dan mendorong transformasi digital dengan solusi perangkat lunak kustom.'
        },
        {
          title: 'Pemerintah',
          description: 'Kami bermitra dengan lembaga pemerintah untuk memodernisasi layanan publik, meningkatkan keamanan, dan meningkatkan keterlibatan warga melalui teknologi inovatif.'
        },
        {
          title: 'Pendidikan',
          description: 'Institusi pendidikan mengandalkan keahlian kami untuk membuat sistem manajemen pembelajaran, portal siswa, dan alat analisis data yang meningkatkan pengalaman pendidikan.'
        },
        {
          title: 'Personal',
          description: 'Kami mengembangkan aplikasi kustom untuk individu yang ingin mewujudkan ide mereka, dari situs web pribadi hingga aplikasi inovatif yang menyelesaikan tantangan sehari-hari.'
        }
      ]
    },
    services: {
      title: 'Layanan Kami',
      items: [
        {
          title: 'Pengembangan Web',
          description: 'Aplikasi web kustom dan situs web responsif yang dibangun dengan framework dan teknologi modern.'
        },
        {
          title: 'Pengembangan Mobile',
          description: 'Aplikasi seluler native dan cross-platform untuk iOS dan Android yang memberikan pengalaman pengguna yang luar biasa.'
        },
        {
          title: 'Solusi Blockchain',
          description: 'Smart contract, aplikasi terdesentralisasi, dan integrasi blockchain untuk sistem yang aman dan transparan.'
        },
        {
          title: 'Integrasi AI',
          description: 'Model pembelajaran mesin, analisis data, dan otomatisasi berbasis AI untuk mengubah proses bisnis Anda.'
        },
        {
          title: 'Perangkat Lunak Kustom',
          description: 'Solusi perangkat lunak yang disesuaikan untuk mengatasi tantangan bisnis dan persyaratan spesifik Anda.'
        }
      ]
    },
    whyUs: {
      title: 'Mengapa Memilih Kami',
      features: [
        {
          title: 'Keahlian Teknis',
          description: 'Tim pengembang berpengalaman kami selalu berada di garis depan teknologi untuk memberikan solusi mutakhir.'
        },
        {
          title: 'Pengiriman Tepat Waktu',
          description: 'Kami memahami pentingnya tenggat waktu dan memastikan proyek Anda selesai tepat waktu, setiap saat.'
        },
        {
          title: 'Fokus Keamanan',
          description: 'Kami menerapkan langkah-langkah keamanan yang kuat untuk melindungi data Anda dan memastikan aplikasi Anda aman.'
        },
        {
          title: 'Teknologi Masa Depan',
          description: 'Solusi kami dibangun dengan skalabilitas dan pertumbuhan masa depan, beradaptasi seiring berkembangnya bisnis Anda.'
        }
      ]
    },
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Siap memulai proyek Anda?',
      description: 'Isi formulir dan tim kami akan menghubungi Anda dalam waktu 24 jam.',
      form: {
        name: 'Nama',
        email: 'Email',
        message: 'Pesan',
        submit: 'Kirim Pesan'
      }
    },
    footer: {
      tagline: 'Solusi inovatif untuk tantangan masa depan',
      quickLinks: 'Tautan Cepat',
      connectWithUs: 'Terhubung Dengan Kami'
    }
  }
};

// Translation helper function
const t = (key) => {
  const keys = key.split('.');
  let result = translations[currentLanguage.value];

  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      return key; // Fallback to key if translation not found
    }
  }

  return result;
};

// Services data
const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom web applications and responsive websites built with modern frameworks and technologies.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.'
  },
  {
    icon: Database,
    title: 'Blockchain Solutions',
    description: 'Smart contracts, decentralized applications, and blockchain integration for secure, transparent systems.'
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Machine learning models, data analytics, and AI-powered automation to transform your business processes.'
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to address your specific business challenges and requirements.'
  }
];

// Features data
const features = [
  {
    icon: CheckCircle,
    title: 'Technical Expertise',
    description: 'Our team of experienced developers stays at the forefront of technology to deliver cutting-edge solutions.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We understand the importance of deadlines and ensure your project is completed on time, every time.'
  },
  {
    icon: Shield,
    title: 'Security Focus',
    description: 'We implement robust security measures to protect your data and ensure your applications are secure.'
  },
  {
    icon: TrendingUp,
    title: 'Future-Proof Technology',
    description: 'Our solutions are built with scalability and future growth in mind, adapting as your business evolves.'
  }
];

// Client types data
const clientTypes = [
  {
    icon: Briefcase,
    title: 'Business',
    description: 'From startups to enterprises, we help businesses optimize operations, increase efficiency, and drive digital transformation with custom software solutions.'
  },
  {
    icon: Landmark,
    title: 'Government',
    description: 'We partner with government agencies to modernize public services, enhance security, and improve citizen engagement through innovative technology.'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Educational institutions rely on our expertise to create learning management systems, student portals, and data analytics tools that enhance the educational experience.'
  },
  {
    icon: User,
    title: 'Personal',
    description: 'We develop custom applications for individuals seeking to bring their ideas to life, from personal websites to innovative apps that solve everyday challenges.'
  }
];

// Contact form
const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form.value);
  // Reset form after submission
  form.value = {
    name: '',
    email: '',
    message: ''
  };
  alert(t('contact.form.submit') + '!');
};

// Services Slider functionality
const currentServiceSlide = ref(0);
let serviceSlideInterval = null;

const goToServiceSlide = (index) => {
  currentServiceSlide.value = index;
};

const nextServiceSlide = () => {
  currentServiceSlide.value = (currentServiceSlide.value + 1) % services.length;
};

// Scroll animation directive
const vScrollAnimate = {
  mounted(el, binding) {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const delay = binding.value?.delay || 0;

    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.remove('opacity-0', 'translate-y-10');
            el.classList.add('opacity-100', 'translate-y-0');
          }, delay);
          observer.unobserve(el);
        }
      });
    }, options);

    observer.observe(el);
  }
};

// Initialize dark mode and language from localStorage
onMounted(() => {
  // Set up automatic slider
  serviceSlideInterval = setInterval(nextServiceSlide, 5000);

  const savedDarkMode = localStorage.getItem('takotekno-dark-mode');
  if (savedDarkMode) {
    isDarkMode.value = savedDarkMode === 'dark';
    document.documentElement.classList.toggle('dark', isDarkMode.value);
  }

  const savedLanguage = localStorage.getItem('takotekno-language');
  if (savedLanguage) {
    currentLanguage.value = savedLanguage;
  }
});

onBeforeUnmount(() => {
  if (serviceSlideInterval) clearInterval(serviceSlideInterval);
});
</script>
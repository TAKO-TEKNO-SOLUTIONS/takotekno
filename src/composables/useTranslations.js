import { ref } from 'vue';

const currentLanguage = ref('id'); // Default Indonesia

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      whyUs: 'Why Us',
      clients: 'Clients',
      contact: 'Contact',
    },
    hero: {
      badge: 'Business Automation & Modernization Partner — Indonesia',
      title: 'Automate & Modernize',
      titleAccent: 'Your Business Systems',
      titleEnd: 'with Agentic AI',
      subtitle:
        'TakoTekno is an AI agency based in Surabaya that helps Indonesian companies build AI agents, automate business processes, and modernize their digital systems.',
      cta: 'Free AI Consultation',
      ctaSecondary: 'Our Services',
      pills: ['Otomasi Bisnis', 'Modernisasi Web', 'Agentic AI', 'WhatsApp Bot', 'Mobile App'],
    },
    about: {
      badge: 'About TakoTekno',
      title: 'AI & Web Modernization',
      titleAccent: 'Software House',
      paragraph1:
        'TakoTekno is an AI agency and software house based in Surabaya. We help established companies and enterprises across Indonesia boost efficiency through Agentic AI, smart chatbots, workflow automation, and legacy web & mobile systems modernization.',
      paragraph2:
        'Our mission is to democratize AI technology for traditional and medium-sized businesses. We build practical, direct tech solutions to streamline your operations, replace outdated websites, and eliminate manual workflow bottlenecks.',
    },
    services: {
      badge: 'Our Core Services',
      title: 'Tailored AI & Software',
      titleAccent: 'Solutions',
      subtitle:
        'We design and build technology focused on automations and legacy modernization to grow your business.',
      items: [
        {
          title: 'Agentic AI & Chatbots',
          description:
            'Build autonomous AI agents and smart WhatsApp or web assistants. They handle customer inquiries, process sales, and coordinate tasks 24/7 using your custom business knowledge base.',
          tags: ['Agentic AI', 'WhatsApp Bot', 'GPT-4', 'RAG'],
        },
        {
          title: 'Business Automation & AI Tools',
          description:
            'Eliminate manual bottleneck tasks. We create custom AI workflows for automated invoice extraction, customer support routing, document synthesis, and automated data entry.',
          tags: ['Workflow AI', 'Otomasi', 'Data Processing', 'OCR'],
        },
        {
          title: 'Web & Mobile Modernization',
          description:
            'Turn your slow, legacy web platform or app into a modern, responsive digital product. High-performance frontends built with React, Vue, or Next.js, and native mobile apps with Flutter.',
          tags: ['React/Vue', 'Flutter', 'Next.js', 'Legacy Upgrade'],
        },
      ],
    },
    clients: {
      badge: 'Target Industries',
      title: 'Built for Established',
      titleAccent: 'Businesses',
      items: [
        {
          title: 'UMKM & Local Businesses',
          description:
            'Affordable AI tools and software to automate operations, manage sales, and boost efficiency for local businesses.',
        },
        {
          title: 'Enterprise & Corporates',
          description:
            'Established companies looking to modernize legacy systems, upgrade custom software, and integrate agentic AI workflows.',
        },
        {
          title: 'Education & EdTech',
          description:
            'Modern platforms and AI assistants for educational institutions to automate administrative tasks and enhance learning.',
        },
      ],
    },
    whyUs: {
      badge: 'Why TakoTekno',
      title: 'The Right Tech Partner',
      titleAccent: 'for Your Business',
      features: [
        {
          title: 'Automation-Focused',
          description:
            'We don\'t just deploy AI features. We re-engineer workflows around intelligent agents to save real manual hours.',
        },
        {
          title: 'Based in Indonesia',
          description:
            'Get direct, dedicated support and active collaboration. Fast responses in both Indonesian and English.',
        },
        {
          title: 'Legacy Modernization',
          description:
            'We specialize in taking old, clunky websites or databases and rebuilding them into high-speed, modern products.',
        },
        {
          title: 'Transparent Timelines',
          description:
            'Weekly sprint reviews, transparent milestones, and zero hidden costs. You know exactly what is being shipped.',
        },
        {
          title: 'Data & Privacy First',
          description:
            'Strict adherence to secure data handling practices. Your customer interactions and internal documents stay safe.',
        },
        {
          title: 'Long-term Support',
          description:
            'Continuous post-delivery updates, server optimizations, and feature expansions to grow alongside your business.',
        },
      ],
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Start Your AI',
      titleAccent: 'Journey Today',
      subtitle: 'Ready to automate your workflows or modernize your app?',
      description:
        'Book a free consultation — we\'ll analyze your business operations and propose the perfect tech solution.',
      whatsapp: 'Chat on WhatsApp',
      form: {
        name: 'Your Name',
        namePlaceholder: 'e.g. Budi Santoso',
        email: 'Email Address',
        emailPlaceholder: 'e.g. budi@company.com',
        company: 'Company / Business',
        companyPlaceholder: 'e.g. PT Maju Bersama',
        service: 'Service Interested In',
        servicePlaceholder: 'Select a service...',
        serviceOptions: [
          'Agentic AI & Chatbots',
          'Business Automation & AI Tools',
          'Web & Mobile Modernization',
          'Not sure yet — need consultation',
        ],
        message: 'Tell us about your project',
        messagePlaceholder:
          'Describe your project, legacy systems, or automation goals...',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent! We\'ll reply within 24 hours.',
      },
    },
    footer: {
      tagline: 'Surabaya-based software house, specializing in AI automation and digital system modernization for Indonesian businesses.',
      quickLinks: 'Quick Links',
      services: 'Services',
      connectWithUs: 'Connect With Us',
      copyright: 'PT TAKO TEKNOLOGI SOLUTIONS. All rights reserved.',
      serviceLinks: [
        'Agentic AI & Chatbots',
        'Business Automation',
        'Web & Mobile Modernization',
      ],
    },
  },

  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      whyUs: 'Keunggulan',
      clients: 'Klien',
      contact: 'Kontak',
    },
    hero: {
      badge: 'Partner Otomasi & Modernisasi Bisnis — Indonesia',
      title: 'Otomatisasi & Modernisasi',
      titleAccent: 'Sistem Bisnis Anda',
      titleEnd: 'dengan Agentic AI',
      subtitle:
        'TakoTekno adalah AI agency berbasis di Surabaya yang membantu perusahaan Indonesia membangun AI agent, mengotomasi proses bisnis, dan memodernisasi sistem digital mereka.',
      cta: 'Konsultasi AI Gratis',
      ctaSecondary: 'Layanan Kami',
      pills: ['Otomasi Bisnis', 'Modernisasi Web', 'Agentic AI', 'WhatsApp Bot', 'Mobile App'],
    },
    about: {
      badge: 'Tentang TakoTekno',
      title: 'Software House Otomasi AI',
      titleAccent: 'untuk Bisnis Anda',
      paragraph1:
        'TakoTekno adalah agency AI dan software house berbasis di Surabaya. Kami membantu perusahaan dan UMKM di seluruh Indonesia meningkatkan efisiensi melalui solusi Agentic AI, chatbot cerdas, otomasi alur kerja, serta modernisasi sistem web & mobile legacy.',
      paragraph2:
        'Misi kami adalah mendemokratisasi pemanfaatan AI untuk membantu bisnis tradisional dan menengah naik kelas. Kami merancang solusi teknologi praktis dan tepat guna, tanpa jargon rumit, demi memangkas biaya operasional bisnis Anda.',
    },
    services: {
      badge: 'Layanan Utama',
      title: 'Solusi AI & Software',
      titleAccent: 'Kustom',
      subtitle:
        'Kami merancang dan membangun teknologi yang difokuskan untuk otomasi dan modernisasi demi pertumbuhan bisnis Anda.',
      items: [
        {
          title: 'Agentic AI & Chatbot Cerdas',
          description:
            'Bangun AI agent otonom dan asisten WhatsApp/web pintar. Otomatisasi pertanyaan pelanggan, koordinasi data, and sales lead 24/7 berdasarkan basis pengetahuan internal bisnis Anda.',
          tags: ['Agentic AI', 'WhatsApp Bot', 'GPT-4', 'RAG'],
        },
        {
          title: 'Otomasi Alur Kerja & Tools AI',
          description:
            'Pangkas proses manual yang memakan waktu. Kami membuat alur kerja AI kustom untuk ekstraksi invoice otomatis, routing support tiket, pengolahan dokumen, dan entri data otomatis.',
          tags: ['Workflow AI', 'Otomasi', 'Pemrosesan Data', 'OCR'],
        },
        {
          title: 'Modernisasi Web & Mobile',
          description:
            'Perbarui platform web portal lama atau website lambat Anda menjadi produk digital yang cepat dan responsif dengan React/Vue/Next.js, serta aplikasi mobile native dengan Flutter.',
          tags: ['React/Vue', 'Flutter', 'Next.js', 'Legacy Upgrade'],
        },
      ],
    },
    clients: {
      badge: 'Target Industri',
      title: 'Dibangun untuk Semua',
      titleAccent: 'Bisnis',
      items: [
        {
          title: 'UMKM & Bisnis Lokal',
          description:
            'Solusi software dan tools AI terjangkau untuk mengotomatisasi operasional, mengelola penjualan, dan meningkatkan efisiensi bagi bisnis lokal.',
        },
        {
          title: 'Enterprise & Korporat',
          description:
            'Perusahaan mapan yang ingin memodernisasi sistem warisan (legacy systems), meningkatkan aplikasi kustom, dan mengintegrasikan alur kerja AI.',
        },
        {
          title: 'Pendidikan & EdTech',
          description:
            'Platform modern dan asisten AI bagi lembaga pendidikan untuk mengotomatisasi tugas administratif dan meningkatkan pengalaman belajar.',
        },
      ],
    },
    whyUs: {
      badge: 'Mengapa TakoTekno',
      title: 'Partner Teknologi Tepat',
      titleAccent: 'untuk Bisnis Anda',
      features: [
        {
          title: 'Fokus Otomatisasi',
          description:
            'Kami tidak sekadar meluncurkan fitur AI. Kami merancang ulang alur kerja di sekitar agen cerdas untuk memangkas jam kerja manual.',
        },
        {
          title: 'Berbasis di Indonesia',
          description:
            'Dapatkan dukungan teknis langsung secara cepat dalam Bahasa Indonesia dan English.',
        },
        {
          title: 'Modernisasi Sistem Lama',
          description:
            'Spesialisasi kami adalah membangun ulang website atau database kuno menjadi sistem modern yang cepat, aman, dan mudah digunakan.',
        },
        {
          title: 'Timeline Transparan',
          description:
            'Review sprint mingguan, pencapaian milestone yang jelas, dan tanpa biaya tersembunyi. Anda tahu persis apa yang sedang dikerjakan.',
        },
        {
          title: 'Privasi & Data Aman',
          description:
            'Standar keamanan tinggi dalam penanganan data. Interaksi pelanggan dan dokumen internal perusahaan Anda terjamin aman.',
        },
        {
          title: 'Kemitraan Jangka Panjang',
          description:
            'Kami menawarkan pemeliharaan rutin, optimalisasi server, dan pengembangan fitur baru seiring perkembangan bisnis Anda.',
        },
      ],
    },
    contact: {
      badge: 'Hubungi Kami',
      title: 'Mulai Langkah AI',
      titleAccent: 'Anda Hari Ini',
      subtitle: 'Siap mengotomatisasi operasional atau memperbarui sistem lama Anda?',
      description:
        'Dapatkan sesi konsultasi gratis — kami akan menganalisis alur bisnis Anda dan memberikan solusi teknologi yang paling pas.',
      whatsapp: 'Chat via WhatsApp',
      form: {
        name: 'Nama Anda',
        namePlaceholder: 'mis. Budi Santoso',
        email: 'Alamat Email',
        emailPlaceholder: 'mis. budi@perusahaan.com',
        company: 'Perusahaan / Bisnis',
        companyPlaceholder: 'mis. PT Maju Bersama',
        service: 'Layanan yang Diminati',
        servicePlaceholder: 'Pilih layanan...',
        serviceOptions: [
          'Agentic AI & Chatbot Cerdas',
          'Otomasi Alur Kerja & Tools AI',
          'Modernisasi Web & Mobile',
          'Belum tahu — butuh konsultasi',
        ],
        message: 'Ceritakan proyek Anda',
        messagePlaceholder: 'Deskripsikan proyek, sistem lama Anda, atau target otomatisasi...',
        submit: 'Kirim Pesan',
        sending: 'Mengirim...',
        success: 'Pesan terkirim! Kami akan membalas dalam 24 jam.',
      },
    },
    footer: {
      tagline: 'Software house berbasis di Surabaya, spesialis otomasi AI dan modernisasi sistem digital untuk bisnis Indonesia.',
      quickLinks: 'Tautan Cepat',
      services: 'Layanan',
      connectWithUs: 'Terhubung Dengan Kami',
      copyright: 'PT TAKO TEKNOLOGI SOLUTIONS. Hak cipta dilindungi.',
      serviceLinks: [
        'Agentic AI & Chatbot Cerdas',
        'Otomasi Alur Kerja',
        'Modernisasi Web & Mobile',
      ],
    },
  },
};

export function useTranslations() {
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'id' : 'en';
    localStorage.setItem('takotekno-language', currentLanguage.value);
  };

  const initLanguage = () => {
    const saved = localStorage.getItem('takotekno-language');
    if (saved) currentLanguage.value = saved;
  };

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[currentLanguage.value];
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        // Fallback to english
        result = translations['en'];
        for (const k2 of keys) {
          if (result && result[k2] !== undefined) result = result[k2];
          else return key;
        }
        return result;
      }
    }
    return result;
  };

  return { currentLanguage, toggleLanguage, initLanguage, t };
}

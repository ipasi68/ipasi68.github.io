// Translations for the main linktree page
const translations = {
  en: {
    username: "@ipthai68",
    youtube: "My YouTube",
    tiktok: "My TikTok",
    glammet: "Glammet Pan",
    studies: "All Studies",
    "buy-coffee": "Buy Me a Coffee"
  },
  it: {
    username: "@ipthai68",
    youtube: "Il Mio YouTube",
    tiktok: "Il Mio TikTok",
    glammet: "Glammet Pan",
    studies: "Tutti gli Studi",
    "buy-coffee": "Offrimi un Caffè"
  },
  th: {
    username: "@ipthai68",
    youtube: "YouTube ของฉัน",
    tiktok: "TikTok ของฉัน",
    glammet: "Glammet Pan",
    studies: "การศึกษาทั้งหมด",
    "buy-coffee": "ซื้อกาแฟให้ฉัน"
  }
};

// Language switching functionality
let currentLanguage = 'en';

function switchLanguage(lang) {
  // Check if language exists
  if (!translations[lang]) {
    console.error(`Language ${lang} not found in translations`);
    return;
  }

  currentLanguage = lang;

  // Update active language indicator
  document.querySelectorAll('.language-option').forEach(option => {
    const isActive = option.getAttribute('data-lang') === lang;
    option.setAttribute('data-active', isActive);
  });

  // Update all translatable elements
  const translatableElements = document.querySelectorAll('[data-translate]');
  translatableElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update page title
  const titles = {
    en: "ipthai68 | Links",
    it: "ipthai68 | Link",
    th: "ipthai68 | ลิงก์"
  };
  document.title = titles[lang] || titles.en;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Read saved preference
  const savedLang = localStorage.getItem('preferred-language');
  const defaultLang = savedLang || 'en';
  currentLanguage = defaultLang;
  switchLanguage(defaultLang);

  // Language change listeners
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      if (lang !== currentLanguage) {
        localStorage.setItem('preferred-language', lang);
        switchLanguage(lang);
      }
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => { this.style.transform = ''; }, 150);
    });
  });
}); 
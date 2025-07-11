console.log("Thank you page loaded successfully!");

// Translations object
const translations = {
  en: {
    title: "☕ Thank you so much!",
    intro: "If you found my content useful, fun, or it simply kept you company, and you’d like to buy me a coffee to support my work, know that I truly appreciate it.",
    description: "It’s a small gesture, but it means a lot to me. 🙏",
    closing: "Thank you for being here! ❤️\n— ipthai68",
    "support-title": "Support This Project",
    "support-subtitle": "Choose your preferred way to show support:",
    "promptpay-title": "PromptPay QR",
    "promptpay-desc": "Scan QR code with Alipay, WeChat, KakaoPay, or any Thai bank app",
    "scan-qr": "Scan QR Code",
    "truemoney-title": "True Money",
    "truemoney-desc": "Popular e-wallet in Thailand",
    "truemoney-donate": "Scan QR Code",
    "truemoney-preferred": "For those using TrueMoney Wallet or Thai PromptPay",
    "coming-soon-title": "More Options Coming Soon",
    "coming-soon-desc": "Additional payment methods will be available here",
    "coming-soon": "Coming Soon",
    "preferred": "Preferred",
    "footer-text": "Made with ❤️ and lots of coffee",
    disclaimer: "Please note: this donation is entirely voluntary and not required to use any feature of the app.",
    "buy-coffee": "Buy Me a Coffee",
    "thai-preferred": "For users with Alipay, WeChat, KakaoPay, or Thai bank app",
    "truemoney-preferred": "For those using TrueMoney Wallet or Thai PromptPay"
  },
  it: {
    title: "☕ Grazie di cuore!",
    intro: "Se i miei contenuti ti sono stati utili, divertenti o semplicemente ti hanno fatto compagnia, e ti va di offrirmi un caffè per supportare il mio lavoro, sappi che lo apprezzo tantissimo.",
    description: "È un piccolo gesto, ma per me significa molto. 🙏",
    closing: "Grazie per esserci! ❤️\n— ipthai68",
    "support-title": "Supporta Questo Progetto",
    "support-subtitle": "Scegli il modo preferito per mostrare il tuo supporto:",
    "promptpay-title": "PromptPay QR",
    "promptpay-desc": "Scansiona il QR con Alipay, WeChat, KakaoPay o una qualsiasi app bancaria thailandese",
    "scan-qr": "Scansiona QR",
    "truemoney-title": "True Money",
    "truemoney-desc": "Portafoglio elettronico popolare in Thailandia",
    "truemoney-donate": "Scansiona QR",
    "truemoney-preferred": "Per chi usa TrueMoney Wallet o promptpay THAI",
    "coming-soon-title": "Altre Opzioni in Arrivo",
    "coming-soon-desc": "Altri metodi di pagamento saranno disponibili qui",
    "coming-soon": "Prossimamente",
    "preferred": "Preferito",
    "footer-text": "Fatto con ❤️ e tanto caffè",
    disclaimer: "Nota: questa donazione è completamente volontaria e non richiesta per utilizzare qualsiasi funzionalità dell'app.",
    "buy-coffee": "Offrimi un Caffè",
    "thai-preferred": "Per chi usa Alipay, WeChat, KakaoPay o una app bancaria thailandese",
    "truemoney-preferred": "Per chi usa TrueMoney Wallet o promptpay THAI"
  },
  th: {
    title: "☕ ขอบคุณมาก ๆ!",
    intro: "หากเนื้อหาของผมมีประโยชน์ สนุก หรือช่วยให้คุณรู้สึกดีขึ้น และคุณอยากเลี้ยงกาแฟเพื่อสนับสนุนงานของผม ผมขอขอบคุณจากใจจริง",
    description: "เป็นน้ำใจเล็ก ๆ ที่มีความหมายกับผมมาก 🙏",
    closing: "ขอบคุณที่อยู่ตรงนี้! ❤️\n— ipthai68",
    "support-title": "สนับสนุนโปรเจกต์นี้",
    "support-subtitle": "เลือกวิธีที่คุณต้องการแสดงการสนับสนุน:",
    "promptpay-title": "พร้อมเพย์ QR",
    "promptpay-desc": "สแกน QR ด้วย Alipay, WeChat, KakaoPay หรือแอปธนาคารไทย",
    "scan-qr": "สแกน QR",
    "truemoney-title": "ทรูมันนี่",
    "truemoney-desc": "กระเป๋าเงินอิเล็กทรอนิกส์ยอดนิยมในประเทศไทย",
    "truemoney-donate": "สแกน QR",
    "truemoney-preferred": "สำหรับผู้ใช้ TrueMoney Wallet หรือพร้อมเพย์ไทย",
    "coming-soon-title": "ตัวเลือกเพิ่มเติมเร็วๆ นี้",
    "coming-soon-desc": "วิธีการชำระเงินเพิ่มเติมจะพร้อมใช้งานที่นี่",
    "coming-soon": "เร็วๆ นี้",
    "preferred": "แนะนำ",
    "footer-text": "สร้างด้วย ❤️ และกาแฟมากมาย",
    disclaimer: "โปรดทราบ: การบริจาคนี้เป็นไปโดยสมัครใจทั้งหมดและไม่จำเป็นต้องใช้คุณสมบัติใดๆ ของแอป",
    "buy-coffee": "ซื้อกาแฟให้ฉัน",
    "thai-preferred": "สำหรับผู้ใช้ Alipay, WeChat, KakaoPay หรือแอปธนาคารไทย",
    "truemoney-preferred": "สำหรับผู้ใช้ TrueMoney Wallet หรือพร้อมเพย์ไทย"
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
      const translation = translations[lang][key];
      // Handle elements with icons
      if (element.innerHTML.includes('<i class=')) {
        const iconMatch = element.innerHTML.match(/<i[^>]*>.*?<\/i>/g);
        if (iconMatch) {
          element.innerHTML = translation + ' ' + iconMatch.join('');
        } else {
          element.textContent = translation;
        }
      } else {
        element.textContent = translation;
      }
    }
  });

  // Forza aggiornamento badge PromptPay
  const badgePromptPay = document.querySelector('.preferred-badge[data-translate="thai-preferred"]');
  if (badgePromptPay) {
    badgePromptPay.textContent = translations[lang]['thai-preferred'];
    console.log('[DEBUG] Badge PromptPay aggiornato:', badgePromptPay.textContent);
  }
  // Forza aggiornamento badge TrueMoney
  const badgeTrueMoney = document.querySelector('.preferred-badge[data-translate="truemoney-preferred"]');
  if (badgeTrueMoney) {
    badgeTrueMoney.textContent = translations[lang]['truemoney-preferred'];
    console.log('[DEBUG] Badge TrueMoney aggiornato:', badgeTrueMoney.textContent);
  }

  // Update page title
  const titles = {
    en: "Thank You – Buy Me a Coffee",
    it: "Grazie – Offrimi un Caffè",
    th: "ขอบคุณ – ซื้อกาแฟให้ฉัน"
  };
  document.title = titles[lang] || titles.en;
}

// Add smooth scrolling and interactive features
document.addEventListener('DOMContentLoaded', function() {
  // Leggi la preferenza salvata
  const savedLang = localStorage.getItem('preferred-language');
  const defaultLang = savedLang || 'en';
  currentLanguage = defaultLang;
  switchLanguage(defaultLang);

  // Listener per cambio lingua
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      if (lang !== currentLanguage) {
        localStorage.setItem('preferred-language', lang);
        switchLanguage(lang);
      }
      this.style.transform = 'scale(0.95)';
      setTimeout(() => { this.style.transform = ''; }, 150);
    });
  });

  // Add click animation to payment buttons
  const paymentButtons = document.querySelectorAll('.payment-button:not(.disabled)');
  
  paymentButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Add ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add hover effects to payment methods
  const paymentMethods = document.querySelectorAll('.payment-method');
  
  paymentMethods.forEach(method => {
    method.addEventListener('mouseenter', function() {
      if (!this.classList.contains('coming-soon')) {
        this.style.transform = 'translateY(-4px) scale(1.02)';
      }
    });
    
    method.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Add loading animation for the coffee icon
  const coffeeIcon = document.querySelector('.coffee-icon');
  if (coffeeIcon) {
    coffeeIcon.addEventListener('click', function() {
      this.style.transform = 'rotate(360deg) scale(1.1)';
      setTimeout(() => {
        this.style.transform = 'rotate(0deg) scale(1)';
      }, 600);
    });
  }

  // Remove intersection observer that was causing language switching issues
  // Payment methods will be visible immediately without animation

  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const focusedElement = document.activeElement;
      if (focusedElement.classList.contains('payment-button')) {
        focusedElement.click();
      }
    }
  });

  // Add analytics tracking (optional)
  function trackPaymentClick(method) {
    // You can add Google Analytics or other tracking here
    console.log(`Payment method clicked: ${method}`);
  }

  // Track payment button clicks
  paymentButtons.forEach(button => {
    button.addEventListener('click', function() {
      const methodName = this.closest('.payment-method').querySelector('h3').textContent;
      trackPaymentClick(methodName);
    });
  });

  // Add CSS for ripple effect
  const style = document.createElement('style');
  style.textContent = `
    .payment-button {
      position: relative;
      overflow: hidden;
    }
    
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

// Add service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful');
      })
      .catch(function(err) {
        console.log('ServiceWorker registration failed');
      });
  });
}

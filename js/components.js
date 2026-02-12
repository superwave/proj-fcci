// Reusable UI Components

// Navbar Component
window.renderNavbar = function() {
    const lang = window.i18n ? window.i18n.getLang() : 'zh';
    const langParam = lang === 'en' ? '&lang=en' : '';
    const currentPage = new URLSearchParams(window.location.search).get('page') || 'home';

    const menuItems = [
        {
            id: 'about',
            title_zh: '關於FCCI',
            title_en: 'About FCCI',
            url: '?page=about'
        },
        {
            id: 'projects',
            title_zh: '國際合作',
            title_en: 'Projects',
            children: [
                { id: 'india', title_zh: '印度', title_en: 'India', url: '?page=india' },
                { id: 'asean', title_zh: '東協', title_en: 'ASEAN', url: '?page=asean' },
                { id: 'tisec', title_zh: 'TISEC', title_en: 'TISEC', url: '?page=tisec' },
                { id: 'other', title_zh: '其他', title_en: 'Others', url: '?page=other' }
            ]
        },
        {
            id: 'industry',
            title_zh: '產業動態',
            title_en: 'Industry Watch',
            children: [
                { id: 'news', title_zh: '新聞快訊', title_en: 'News Articles', url: '?page=news' },
                { id: 'reports', title_zh: '調研報告', title_en: 'Research Papers', url: '?page=reports' }
            ]
        },
        {
            id: 'contact',
            title_zh: '聯絡我們',
            title_en: 'Contact us',
            url: '?page=contact'
        }
    ];

    function renderMenuItem(item) {
        const title = lang === 'en' ? item.title_en : item.title_zh;
        const isActive = currentPage === item.id;

        if (item.children) {
            const hasActiveChild = item.children.some(child => currentPage === child.id);
            return `
                <li class="nav-item dropdown ${hasActiveChild ? 'active' : ''}">
                    <span class="nav-link">${title}</span>
                    <ul class="dropdown-menu">
                        ${item.children.map(child => {
                            const childTitle = lang === 'en' ? child.title_en : child.title_zh;
                            const childActive = currentPage === child.id ? 'active' : '';
                            return `<li><a href="${child.url}${langParam}" class="${childActive}">${childTitle}</a></li>`;
                        }).join('')}
                    </ul>
                </li>
            `;
        } else {
            return `
                <li class="nav-item ${isActive ? 'active' : ''}">
                    <a href="${item.url}${langParam}" class="nav-link">${title}</a>
                </li>
            `;
        }
    }

    return `
        <div class="navbar-container">
            <div class="navbar-brand">
                <a href="?page=home${langParam}" class="brand-logo">
                    <span class="brand-text">${lang === 'en' ? 'FCCI' : '國際商貿文化交流基金會'}</span>
                </a>
            </div>
            <button class="navbar-toggler" onclick="toggleMobileMenu()">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="navbar-menu" id="navbarMenu">
                <ul class="nav-menu">
                    ${menuItems.map(item => renderMenuItem(item)).join('')}
                </ul>
                <div class="lang-switcher">
                    <button onclick="window.i18n.switchLanguage('zh')" class="${lang === 'zh' ? 'active' : ''}">中文</button>
                    <button onclick="window.i18n.switchLanguage('en')" class="${lang === 'en' ? 'active' : ''}">English</button>
                </div>
            </div>
        </div>
    `;
};

// Footer Component
window.renderFooter = function() {
    const lang = window.i18n ? window.i18n.getLang() : 'zh';

    return `
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>${lang === 'en' ? 'Contact Information' : '聯絡資訊'}</h3>
                    <div class="contact-item">
                        <h4>${lang === 'en' ? 'Taipei Office' : '台北辦公室'}</h4>
                        <p>${lang === 'en' ? '4F-4, No.2, Sec.3, Bade Rd., Taipei City' : '台北市八德路三段2號4樓之四'}</p>
                        <p>Tel: +886-2-2577 7318</p>
                        <p>Fax: +886-2-2577 7163</p>
                    </div>
                    <div class="contact-item">
                        <h4>${lang === 'en' ? 'India Office' : '印度辦公室'}</h4>
                        <p>Barton Centre, Suite 705, No-84, MG Rd., Bangalore, Karnataka</p>
                        <p>Tel: +91-80-4127 0933</p>
                    </div>
                    <div class="contact-item">
                        <h4>${lang === 'en' ? 'ASEAN Office' : '東協辦公室'}</h4>
                        <p>UMFCCI Office Tower, No.29, MinYeKyawSwar Road, Yangon</p>
                        <p>Tel: +91-80-4127 0933</p>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>${lang === 'en' ? 'Follow Us' : '關注我們'}</h3>
                    <div class="social-links">
                        <a href="https://www.facebook.com/fcci.tw" target="_blank" rel="noopener">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UCRPsunSB_iR3dRbw8xchvZw" target="_blank" rel="noopener">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 ${lang === 'en' ? 'Foundation for Commerce and Culture Interchange' : '國際商貿文化交流基金會'}. All Rights Reserved.</p>
            </div>
        </div>
    `;
};

// Banner Carousel Component
window.renderBannerCarousel = function() {
    const banners = [
        'banner1.jpg',
        'banner2.jpg',
        'banner3.jpg',
        'banner4.jpg',
        'banner5.jpg'
    ];

    return `
        <div class="banner-carousel" id="bannerCarousel">
            <div class="carousel-inner">
                ${banners.map((banner, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="images/banners/${banner}" alt="Banner ${index + 1}">
                    </div>
                `).join('')}
            </div>
            <button class="carousel-control prev" onclick="carouselPrev()" aria-label="Previous">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
                    <path d="M25 10L15 20L25 30" stroke="white" stroke-width="3" fill="none"/>
                </svg>
            </button>
            <button class="carousel-control next" onclick="carouselNext()" aria-label="Next">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
                    <path d="M15 10L25 20L15 30" stroke="white" stroke-width="3" fill="none"/>
                </svg>
            </button>
            <div class="carousel-indicators">
                ${banners.map((_, index) => `
                    <button class="${index === 0 ? 'active' : ''}" onclick="carouselGoTo(${index})" aria-label="Go to slide ${index + 1}"></button>
                `).join('')}
            </div>
        </div>
    `;
};

// News Card Component
window.renderNewsCard = function(news, fullWidth = false) {
    const lang = window.i18n ? window.i18n.getLang() : 'zh';
    const langParam = lang === 'en' ? '&lang=en' : '';
    const title = window.i18n ? window.i18n.getLocalizedField(news, 'title') : news.title_zh;
    const excerpt = window.i18n ? window.i18n.getLocalizedField(news, 'excerpt') : news.excerpt_zh;

    return `
        <div class="news-card ${fullWidth ? 'full-width' : ''}">
            <a href="?p=${news.id}${langParam}" class="news-card-link">
                <div class="news-card-image">
                    <img src="images/news/${news.image}" alt="${title}" loading="lazy">
                </div>
                <div class="news-card-content">
                    <h3 class="news-card-title">${title}</h3>
                    ${excerpt ? `<p class="news-card-excerpt">${excerpt}</p>` : ''}
                    <p class="news-card-date">${news.date}</p>
                </div>
            </a>
        </div>
    `;
};

// Partners Component
window.renderPartners = function() {
    const lang = window.i18n ? window.i18n.getLang() : 'zh';

    // Note: Partner logos will need to be added manually or scraped from the site
    const strategicPartners = ['strategic1.png', 'strategic2.png'];
    const generalPartners = Array.from({length: 16}, (_, i) => `partner${i + 1}.png`);

    return `
        <div class="partners-section">
            <div class="strategic-partners">
                <h3>${lang === 'en' ? 'Strategic Partners' : '戰略合作夥伴'}</h3>
                <div class="partners-grid strategic">
                    ${strategicPartners.map(logo => `
                        <div class="partner-logo">
                            <img src="images/partners/${logo}" alt="Strategic Partner" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="general-partners">
                <h3>${lang === 'en' ? 'Partners' : '合作夥伴'}</h3>
                <div class="partners-grid">
                    ${generalPartners.map(logo => `
                        <div class="partner-logo">
                            <img src="images/partners/${logo}" alt="Partner" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
};

// Contact Info Component
window.renderContactInfo = function() {
    const lang = window.i18n ? window.i18n.getLang() : 'zh';

    return `
        <div class="contact-info-grid">
            <div class="contact-office">
                <h3>${lang === 'en' ? 'Taipei Office' : '台北辦公室'}</h3>
                <p>${lang === 'en' ? '4F-4, No.2, Sec.3, Bade Rd., Taipei City' : '台北市八德路三段2號4樓之四'}</p>
                <p>Tel: +886-2-2577 7318</p>
                <p>Fax: +886-2-2577 7163</p>
            </div>
            <div class="contact-office">
                <h3>${lang === 'en' ? 'India Office' : '印度辦公室'}</h3>
                <p>Barton Centre, Suite 705</p>
                <p>No-84, MG Rd., Bangalore, Karnataka</p>
                <p>Tel: +91-80-4127 0933</p>
            </div>
            <div class="contact-office">
                <h3>${lang === 'en' ? 'ASEAN Office' : '東協辦公室'}</h3>
                <p>UMFCCI Office Tower</p>
                <p>No.29, MinYeKyawSwar Road, Yangon</p>
                <p>Tel: +91-80-4127 0933</p>
            </div>
        </div>
    `;
};

// Contact Form Component
window.renderContactForm = function() {
    const lang = window.i18n ? window.i18n.getLang() : 'zh';

    return `
        <div class="contact-form-container">
            <h3>${lang === 'en' ? 'Send us a message' : '發送訊息'}</h3>
            <form id="contactForm" onsubmit="handleContactFormSubmit(event)" class="contact-form">
                <div class="form-group">
                    <label for="name">${lang === 'en' ? 'Name' : '姓名'} *</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">${lang === 'en' ? 'Email' : '電子郵件'} *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="subject">${lang === 'en' ? 'Subject' : '主旨'} *</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group">
                    <label for="message">${lang === 'en' ? 'Message' : '訊息內容'} *</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" class="btn-primary">
                    ${lang === 'en' ? 'Send Message' : '發送訊息'}
                </button>
            </form>
        </div>
    `;
};

// Carousel Functions
let currentSlide = 0;
let carouselInterval;

function carouselNext() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators button');

    items[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % items.length;

    items[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function carouselPrev() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators button');

    items[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = (currentSlide - 1 + items.length) % items.length;

    items[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function carouselGoTo(index) {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators button');

    items[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = index;

    items[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function startCarousel() {
    carouselInterval = setInterval(carouselNext, 5000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

// Auto-start carousel when page loads
window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.banner-carousel')) {
        startCarousel();

        // Pause on hover
        const carousel = document.querySelector('.banner-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', stopCarousel);
            carousel.addEventListener('mouseleave', startCarousel);
        }
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('navbarMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Contact Form Handler
function handleContactFormSubmit(event) {
    event.preventDefault();

    const lang = window.i18n ? window.i18n.getLang() : 'zh';
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // TODO: Send to backend API
    console.log('Form submitted:', data);

    // Show success message
    alert(lang === 'en'
        ? 'Thank you for your message! We will get back to you soon.'
        : '感謝您的訊息！我們會盡快回覆您。'
    );

    // Reset form
    event.target.reset();
}

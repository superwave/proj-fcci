// Page Render Functions
// Each function returns HTML string for its page content.
// Asset paths use window.BASE to work from any directory depth.

(function() {
    'use strict';

    // Resolve base path relative to current HTML file
    // Pages at root: BASE = ''
    // Pages in subdirs: BASE = '../'
    const BASE = window.BASE || '';

    function img(path) { return BASE + 'images/' + path; }
    function page(path) { return BASE + path; }

    // --- Home Page ---
    window.renderHomePage = function() {
        const lang = window.i18n.getLang();
        const langQ = lang === 'en' ? '?lang=en' : '';
        const news = window.i18n.getAllNews().slice(0, 4);

        const galleryImages = [
            'gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg',
            'gallery5.jpg', 'gallery6.jpg', 'gallery7.jpg'
        ];

        return `
            ${window.renderBannerCarousel()}

            <section class="home-section latest-news">
                <div class="container">
                    <h2 class="section-title">${lang === 'en' ? 'Latest News' : '最新消息'}</h2>
                    <div class="news-grid">
                        ${news.map(n => window.renderNewsCard(n)).join('')}
                    </div>
                    <div class="section-footer">
                        <a href="${page('news/')}${langQ}" class="btn-more">
                            ${lang === 'en' ? 'View All News' : '查看更多消息'}
                        </a>
                    </div>
                </div>
            </section>

            <section class="home-section gallery-section">
                <div class="container">
                    <h2 class="section-title">${lang === 'en' ? 'Event Gallery' : '活動集錦'}</h2>
                    <div class="gallery-grid">
                        ${galleryImages.map(f => `
                            <div class="gallery-item">
                                <img src="${img('gallery/' + f)}" alt="Event photo">
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section class="home-section video-section">
                <div class="container">
                    <h2 class="section-title">${lang === 'en' ? 'Videos' : '影片集錦'}</h2>
                    <div class="video-gallery">
                        <div class="video-featured">
                            <iframe src="https://www.youtube.com/embed/SXjLqjN8gKE?rel=0"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                        <div class="video-list">
                            <div class="video-embed-item">
                                <iframe src="https://www.youtube.com/embed/F2n58KkWf9c?rel=0"
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <div class="video-embed-item">
                                <iframe src="https://www.youtube.com/embed/F2n58KkWf9c?rel=0"
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <div class="video-embed-item">
                                <iframe src="https://www.youtube.com/embed/9KNdjrBw84A?rel=0"
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-section partners-section">
                <div class="container">
                    <h2 class="section-title">${lang === 'en' ? 'Our Partners' : '合作夥伴'}</h2>
                    ${window.renderPartners()}
                </div>
            </section>
        `;
    };

    // --- About Page ---
    window.renderAboutPage = function() {
        const lang = window.i18n.getLang();
        const slides = [
            { image: 'slide01.jpg', caption: 'ASEAN Smart Industry Collaboration Opportunities Outlook 2021' },
            { image: 'slide02.jpg', caption: '2019 Vibrant Gujarat' },
            { image: 'slide03.jpg', caption: '2019 MTCF' },
            { image: 'slide04.jpg', caption: '' },
            { image: 'slide05.jpg', caption: 'Career Seminar 2020' },
            { image: 'slide06.jpg', caption: '2020 ITCF' },
            { image: 'slide07.jpg', caption: '2021 India Outlook' },
            { image: 'slide08.jpg', caption: '' },
            { image: 'slide09.jpg', caption: '2019 ITCF' },
            { image: 'slide10.jpg', caption: '2020 Smart Dialogue' },
            { image: 'slide11.jpg', caption: '' }
        ];

        return `
            <div class="about-banner">
                <div class="about-banner-overlay"></div>
                <div class="about-banner-content">
                    <h2>Who we are &amp; What we do</h2>
                </div>
            </div>

            <div class="page-content">
                <div class="container">
                    <div class="about-hero">
                        <img src="${img('about/hero.jpg')}" alt="FCCI - Who we are & What we do">
                    </div>
                    <div class="about-filmstrip">
                        <div class="filmstrip-track">
                            ${slides.map((s, i) => `
                                <div class="filmstrip-item" onclick="openLightbox(${i})">
                                    <img src="${img('about/' + s.image)}" alt="${s.caption || 'Event photo'}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <section class="home-section partners-section">
                    <div class="container">
                        <h2 class="section-title">${lang === 'en' ? 'Our Partners' : '合作夥伴'}</h2>
                        ${window.renderPartners()}
                    </div>
                </section>
            </div>

            <div id="lightbox" class="lightbox" onclick="closeLightbox(event)">
                <button class="lightbox-close" onclick="closeLightbox(event)">&times;</button>
                <button class="lightbox-prev" onclick="lightboxPrev(event)">&#8249;</button>
                <button class="lightbox-next" onclick="lightboxNext(event)">&#8250;</button>
                <div class="lightbox-content">
                    <img id="lightbox-img" src="" alt="">
                    <p id="lightbox-caption" class="lightbox-caption"></p>
                </div>
            </div>
        `;
    };

    // --- Project Page (single page, tab-filtered) ---
    const projectMeta = {
        india:  { title_zh: '印度', title_en: 'India',   bg: 'projects_india_bg.jpg',  bgPos: 'center center', activeColor: '#F39700' },
        asean:  { title_zh: '東協', title_en: 'ASEAN',   bg: 'projects_asean_bg.jpg',  bgPos: 'center right',  activeColor: '#55B332' },
        tisec:  { title_zh: 'TISEC', title_en: 'TISEC',  bg: 'projects_tisec_bg.jpg',  bgPos: 'top center',    activeColor: '#55B332' },
        other:  { title_zh: '其他', title_en: 'Others',  bg: 'projects_others_bg.jpg', bgPos: 'bottom center', activeColor: '#55B332' }
    };

    const subNavItems = [
        { id: 'india',  icon: 'icon_india.png', title_zh: '印度', title_en: 'India'  },
        { id: 'asean',  icon: 'icon_asean.png', title_zh: '東協', title_en: 'ASEAN'  },
        { id: 'tisec',  icon: 'icon_tisec.png', title_zh: 'TISEC', title_en: 'TISEC' },
        { id: 'other',  icon: 'icon_other.png', title_zh: '其他', title_en: 'Others' }
    ];

    // Current filter state
    let _activeTab = 'india';
    let _activeMonth = null; // null = show all
    let _currentPage = 1;
    const POSTS_PER_PAGE = 10;

    function getActiveTab() {
        const hash = window.location.hash.replace('#', '');
        return projectMeta[hash] ? hash : 'india';
    }

    function getFilteredPosts(tab, month) {
        let posts = window.i18n.getAllNews().filter(n =>
            n.projects && n.projects.includes(tab)
        );
        if (month) {
            posts = posts.filter(n => {
                const ym = n.date.substring(0, 7).replace('-', '');
                return ym === month;
            });
        }
        return posts;
    }

    function renderPostList(tab, month) {
        const lang = window.i18n.getLang();
        const allPosts = getFilteredPosts(tab, month);

        if (allPosts.length === 0) {
            return `<p class="no-posts">${lang === 'en' ? 'No articles yet.' : '尚無相關文章。'}</p>`;
        }

        const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
        if (_currentPage > totalPages) _currentPage = totalPages;
        const start = (_currentPage - 1) * POSTS_PER_PAGE;
        const pagePosts = allPosts.slice(start, start + POSTS_PER_PAGE);

        const postHtml = pagePosts.map(n => {
            const title = window.i18n.getLocalizedField(n, 'title');
            return `
                <a href="${page('post.html')}?p=${n.id}${lang === 'en' ? '&lang=en' : ''}" class="project-post-item">
                    <div class="project-post-thumb">
                        <img src="${img('news/' + n.image)}" alt="${title}">
                    </div>
                    <div class="project-post-info">
                        <h3>${title}</h3>
                        <span class="project-post-date">${n.date}</span>
                    </div>
                </a>
            `;
        }).join('');

        const paginationHtml = totalPages > 1 ? renderPagination(_currentPage, totalPages) : '';

        return postHtml + paginationHtml;
    }

    function renderPagination(current, total) {
        const lang = window.i18n.getLang();
        let items = '';

        // Previous button
        items += `<li class="${current === 1 ? 'disabled' : ''}">
            <a href="#" onclick="window.goToPage(${current - 1}, event)"${current === 1 ? ' tabindex="-1"' : ''}>&laquo;</a>
        </li>`;

        // Page numbers with ellipsis
        const pages = buildPageNumbers(current, total);
        pages.forEach(p => {
            if (p === '...') {
                items += `<li class="ellipsis"><span>…</span></li>`;
            } else {
                items += `<li class="${p === current ? 'active' : ''}">
                    <a href="#" onclick="window.goToPage(${p}, event)">${p}</a>
                </li>`;
            }
        });

        // Next button
        items += `<li class="${current === total ? 'disabled' : ''}">
            <a href="#" onclick="window.goToPage(${current + 1}, event)"${current === total ? ' tabindex="-1"' : ''}>&raquo;</a>
        </li>`;

        const tabColor = projectMeta[_activeTab]?.activeColor || '#55B332';
        return `<nav class="pagination" style="--tab-color:${tabColor}"><ul>${items}</ul></nav>`;
    }

    function buildPageNumbers(current, total) {
        if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
        const pages = [];
        pages.push(1);
        if (current > 3) pages.push('...');
        for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
            pages.push(i);
        }
        if (current < total - 2) pages.push('...');
        pages.push(total);
        return pages;
    }

    function renderArchiveSidebar(activeMonth) {
        const lang = window.i18n.getLang();
        const allNews = window.i18n.getAllNews().filter(n =>
            n.projects && n.projects.includes(_activeTab)
        );

        // Build year-month counts
        const ymMap = {};
        allNews.forEach(n => {
            const [year, month] = n.date.split('-');
            const key = year + month;
            if (!ymMap[key]) {
                ymMap[key] = { year, month, count: 0 };
            }
            ymMap[key].count++;
        });

        const entries = Object.entries(ymMap).sort(([a], [b]) => b.localeCompare(a));

        const allActive = !activeMonth ? 'active' : '';
        let html = `<li><a href="#" class="archive-link ${allActive}" data-ym="" onclick="window.filterByMonth(null, event)">${lang === 'en' ? 'All' : '全部'}</a></li>`;

        html += entries.map(([key, data]) => {
            const isActive = activeMonth === key ? 'active' : '';
            const label = lang === 'en'
                ? `${data.year} / ${parseInt(data.month)}`
                : `${data.year} 年 ${parseInt(data.month)} 月`;
            return `<li><a href="#" class="archive-link ${isActive}" data-ym="${key}" onclick="window.filterByMonth('${key}', event)">${label}</a>&nbsp;(${data.count})</li>`;
        }).join('');

        return html;
    }

    window.renderProjectPage = function() {
        const lang = window.i18n.getLang();
        _activeTab = getActiveTab();
        _activeMonth = null;
        _currentPage = 1;
        const meta = projectMeta[_activeTab];

        // Sub-nav tabs
        const subNav = subNavItems.map(item => {
            const isActive = item.id === _activeTab;
            const title = lang === 'en' ? item.title_en : item.title_zh;
            const activeStyle = isActive ? `background-color:${projectMeta[item.id].activeColor};color:#fff;` : '';
            return `
                <a href="#${item.id}" class="project-subnav-item ${isActive ? 'active' : ''}" style="${activeStyle}"
                   onclick="window.switchProjectTab('${item.id}', event)">
                    <img src="${img('icons/' + item.icon)}" alt="${title}">
                    <span>${title}</span>
                </a>
            `;
        }).join('');

        return `
            <div class="project-banner" id="project-banner"
                 style="background-image:url('${img(meta.bg)}'); background-position:${meta.bgPos};">
                <div class="project-banner-overlay"></div>
            </div>

            <div class="project-subnav" id="project-subnav">
                ${subNav}
            </div>

            <div class="page-content">
                <div class="container">
                    <div class="project-layout">
                        <div class="project-main">
                            <div class="project-post-list" id="project-posts">
                                ${renderPostList(_activeTab, null)}
                            </div>
                        </div>
                        <aside class="project-sidebar">
                            <h5>${lang === 'en' ? 'Archives' : '年份彙整'}</h5>
                            <ul class="archive-list" id="archive-list">
                                ${renderArchiveSidebar(null)}
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        `;
    };

    // Page navigation
    window.goToPage = function(pageNum, event) {
        if (event) event.preventDefault();
        const allPosts = getFilteredPosts(_activeTab, _activeMonth);
        const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
        if (pageNum < 1 || pageNum > totalPages) return;
        _currentPage = pageNum;
        document.getElementById('project-posts').innerHTML = renderPostList(_activeTab, _activeMonth);
        // Scroll to top of post list
        document.getElementById('project-posts').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Tab switch: update banner, subnav highlights, and post list
    window.switchProjectTab = function(tabId, event) {
        if (event) event.preventDefault();
        if (!projectMeta[tabId]) return;

        _activeTab = tabId;
        _activeMonth = null;
        _currentPage = 1;
        window.location.hash = tabId;

        const lang = window.i18n.getLang();
        const meta = projectMeta[tabId];

        // Update banner
        const banner = document.getElementById('project-banner');
        if (banner) {
            banner.style.backgroundImage = `url('${img(meta.bg)}')`;
            banner.style.backgroundPosition = meta.bgPos;
        }

        // Update subnav highlights
        const subnav = document.getElementById('project-subnav');
        if (subnav) {
            subnav.querySelectorAll('.project-subnav-item').forEach(el => {
                const id = el.getAttribute('onclick').match(/'(\w+)'/)?.[1];
                const isActive = id === tabId;
                el.classList.toggle('active', isActive);
                el.style.backgroundColor = isActive ? projectMeta[id].activeColor : '';
                el.style.color = isActive ? '#fff' : '';
            });
        }

        // Update post list
        document.getElementById('project-posts').innerHTML = renderPostList(tabId, null);

        // Update archive sidebar (reset month filter)
        document.getElementById('archive-list').innerHTML = renderArchiveSidebar(null);
    };

    // Month filter: re-filter post list within current tab
    window.filterByMonth = function(ym, event) {
        if (event) event.preventDefault();
        _activeMonth = ym || null;
        _currentPage = 1;

        // Update post list
        document.getElementById('project-posts').innerHTML = renderPostList(_activeTab, _activeMonth);

        // Update archive active state
        document.getElementById('archive-list').innerHTML = renderArchiveSidebar(_activeMonth);
    };

    // Listen for hash changes (back/forward navigation)
    window.addEventListener('hashchange', function() {
        if (document.body.dataset.page === 'projects') {
            const newTab = getActiveTab();
            if (newTab !== _activeTab) {
                window.switchProjectTab(newTab);
            }
        }
    });

    // --- News List Page ---
    window.renderNewsListPage = function() {
        const lang = window.i18n.getLang();
        const allNews = window.i18n.getAllNews().filter(n => n.category === 'news');
        return `
            <div class="page-header">
                <div class="container">
                    <h1 class="page-title">${lang === 'en' ? 'News Articles' : '新聞快訊'}</h1>
                </div>
            </div>
            <div class="page-content">
                <div class="container">
                    <div class="news-list">
                        ${allNews.map(n => window.renderNewsCard(n, true)).join('')}
                    </div>
                </div>
            </div>
        `;
    };

    // --- Reports Page ---
    window.renderReportsPage = function() {
        const lang = window.i18n.getLang();
        const reports = window.i18n.getAllNews().filter(n => n.category === 'report');
        return `
            <div class="page-header">
                <div class="container">
                    <h1 class="page-title">${lang === 'en' ? 'Research Papers' : '調研報告'}</h1>
                </div>
            </div>
            <div class="page-content">
                <div class="container">
                    <div class="news-list">
                        ${reports.map(n => window.renderNewsCard(n, true)).join('')}
                    </div>
                </div>
            </div>
        `;
    };

    // --- Single Post Page ---
    window.renderPostPage = function(postId) {
        const post = window.i18n.getNews(postId);
        if (!post) return window.render404Page();

        const lang = window.i18n.getLang();
        const langQ = lang === 'en' ? '?lang=en' : '';
        const title = window.i18n.getLocalizedField(post, 'title');
        const content = window.i18n.getLocalizedField(post, 'content');
        const image = post.image ? `<img src="${img('news/' + post.image)}" alt="${title}" class="post-image">` : '';

        return `
            <div class="post-header">
                <div class="container">
                    <h1 class="post-title">${title}</h1>
                    <p class="post-date">${post.date}</p>
                </div>
            </div>
            <div class="post-content">
                <div class="container">
                    ${image}
                    <div class="content-body">${content}</div>
                    <div class="post-footer">
                        <a href="${page('news/')}${langQ}" class="btn-back">
                            ${lang === 'en' ? '← Back to News' : '← 返回新聞列表'}
                        </a>
                    </div>
                </div>
            </div>
        `;
    };

    // --- Contact Page ---
    window.renderContactPage = function() {
        const lang = window.i18n.getLang();
        return `
            <div class="page-header">
                <div class="container">
                    <h1 class="page-title">${lang === 'en' ? 'Contact Us' : '聯絡我們'}</h1>
                </div>
            </div>
            <div class="page-content">
                <div class="container">
                    ${window.renderContactInfo()}
                    ${window.renderContactForm()}
                </div>
            </div>
        `;
    };

    // --- 404 Page ---
    window.render404Page = function() {
        const lang = window.i18n ? window.i18n.getLang() : 'zh';
        const langQ = lang === 'en' ? '?lang=en' : '';
        return `
            <div class="error-page">
                <div class="container">
                    <h1>404</h1>
                    <p>${lang === 'en' ? 'Page not found' : '找不到頁面'}</p>
                    <a href="${page('index.html')}${langQ}" class="btn-primary">
                        ${lang === 'en' ? 'Go Home' : '返回首頁'}
                    </a>
                </div>
            </div>
        `;
    };

    // --- Page init dispatcher ---
    // Called by app.js after i18n is ready.
    window.renderCurrentPage = function() {
        const pageId = document.body.dataset.page;
        const content = document.getElementById('app-content');

        switch (pageId) {
            case 'home':     content.innerHTML = window.renderHomePage(); break;
            case 'about':    content.innerHTML = window.renderAboutPage(); break;
            case 'projects': content.innerHTML = window.renderProjectPage(); break;
            case 'news':     content.innerHTML = window.renderNewsListPage(); break;
            case 'reports':  content.innerHTML = window.renderReportsPage(); break;
            case 'contact':  content.innerHTML = window.renderContactPage(); break;
            case 'post':
                const postId = new URLSearchParams(window.location.search).get('p');
                content.innerHTML = postId ? window.renderPostPage(postId) : window.render404Page();
                break;
            default:        content.innerHTML = window.render404Page();
        }

        // Post-render hooks
        if (pageId === 'home' && typeof startCarousel === 'function') {
            startCarousel();
        }
    };
})();

// SPA Router Module
class Router {
    constructor() {
        this.routes = {
            'home': () => this.renderHomePage(),
            'about': () => this.renderStaticPage('about'),
            'india': () => this.renderStaticPage('india'),
            'asean': () => this.renderStaticPage('asean'),
            'tisec': () => this.renderStaticPage('tisec'),
            'other': () => this.renderStaticPage('other'),
            'news': () => this.renderNewsListPage(),
            'reports': () => this.renderReportsPage(),
            'contact': () => this.renderContactPage()
        };
        this.currentPage = null;
    }

    init() {
        // Handle browser back/forward
        window.addEventListener('popstate', () => this.handleRoute());

        // Handle initial load
        window.addEventListener('DOMContentLoaded', () => this.handleRoute());

        // Intercept link clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="?"]');
            if (link) {
                e.preventDefault();
                const url = link.getAttribute('href');
                this.navigate(url);
            }
        });
    }

    navigate(url) {
        history.pushState(null, null, url);
        this.handleRoute();
    }

    async handleRoute() {
        this.showLoading();

        const params = new URLSearchParams(window.location.search);
        const page = params.get('page') || 'home';
        const postId = params.get('p');
        const lang = params.get('lang') || 'zh';

        // Update i18n language
        if (window.i18n) {
            window.i18n.currentLang = lang;
            document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';
        }

        try {
            const content = document.getElementById('app-content');

            if (postId) {
                // Load single post/article
                content.innerHTML = await this.renderPostPage(postId);
            } else if (this.routes[page]) {
                // Load page using route handler
                content.innerHTML = await this.routes[page]();
            } else {
                // 404 page
                content.innerHTML = this.render404Page();
            }

            // Scroll to top
            window.scrollTo(0, 0);

            // Update navbar active state
            this.updateNavbar();
        } catch (error) {
            console.error('Route error:', error);
            document.getElementById('app-content').innerHTML =
                `<div class="error-page"><h1>Error loading page</h1><p>${error.message}</p></div>`;
        } finally {
            this.hideLoading();
        }
    }

    showLoading() {
        const loading = document.getElementById('loading');
        if (loading) loading.style.display = 'flex';
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        if (loading) loading.style.display = 'none';
    }

    updateNavbar() {
        // Re-render navbar to update active states
        if (window.renderNavbar) {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                navbar.innerHTML = window.renderNavbar();
            }
        }
    }

    // Render home page
    async renderHomePage() {
        const lang = window.i18n.getLang();
        const news = window.i18n.getAllNews().slice(0, 4); // Get latest 4 news

        return `
            ${window.renderBannerCarousel()}

            <section class="home-section latest-news">
                <div class="container">
                    <h2 class="section-title">${lang === 'en' ? 'Latest News' : '最新消息'}</h2>
                    <div class="news-grid">
                        ${news.map(n => window.renderNewsCard(n)).join('')}
                    </div>
                    <div class="section-footer">
                        <a href="?page=news${lang === 'en' ? '&lang=en' : ''}" class="btn-more">
                            ${lang === 'en' ? 'View All News' : '查看更多消息'}
                        </a>
                    </div>
                </div>
            </section>

            <section class="home-section gallery-section">
                <div class="container">
                    <h2 class="section-title">${lang === 'en' ? 'Event Gallery' : '活動集錦'}</h2>
                    <div class="gallery-grid">
                        ${this.renderGalleryGrid()}
                    </div>
                </div>
            </section>

            <section class="home-section video-section">
                <div class="container">
                    <h2 class="section-title">${lang === 'en' ? 'Videos' : '影片集錦'}</h2>
                    <div class="video-container">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?list=PLYourPlaylistID"
                                frameborder="0" allowfullscreen></iframe>
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
    }

    renderGalleryGrid() {
        const images = [
            'gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg',
            'gallery5.jpg', 'gallery6.jpg', 'gallery7.jpg'
        ];

        return images.map(img => `
            <div class="gallery-item">
                <img src="images/gallery/${img}" alt="Event photo">
            </div>
        `).join('');
    }

    // Render static page (about, india, asean, etc.)
    async renderStaticPage(pageId) {
        const pageData = window.i18n.getPage(pageId);

        if (!pageData) {
            return this.render404Page();
        }

        const lang = window.i18n.getLang();
        const title = window.i18n.getLocalizedField(pageData, 'title');
        const content = window.i18n.getLocalizedField(pageData, 'content');
        const icon = pageData.icon ? `<img src="images/icons/${pageData.icon}" alt="${title}" class="page-icon">` : '';
        const headerImage = pageData.header_image ? `<img src="images/${pageData.header_image}" alt="${title}" class="page-header-image">` : '';

        return `
            <div class="page-header">
                <div class="container">
                    ${icon}
                    <h1 class="page-title">${title}</h1>
                </div>
            </div>
            ${headerImage}
            <div class="page-content">
                <div class="container">
                    <div class="content-body">
                        ${content}
                    </div>
                    ${pageData.featured_posts ? this.renderFeaturedPosts(pageData.featured_posts) : ''}
                </div>
            </div>
        `;
    }

    renderFeaturedPosts(postIds) {
        const lang = window.i18n.getLang();
        const posts = postIds.map(id => window.i18n.getNews(id)).filter(p => p);

        if (posts.length === 0) return '';

        return `
            <section class="featured-posts">
                <h2 class="section-title">${lang === 'en' ? 'Related Articles' : '相關文章'}</h2>
                <div class="news-grid">
                    ${posts.map(p => window.renderNewsCard(p)).join('')}
                </div>
            </section>
        `;
    }

    // Render news list page
    async renderNewsListPage() {
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
    }

    // Render reports page
    async renderReportsPage() {
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
    }

    // Render single post page
    async renderPostPage(postId) {
        const post = window.i18n.getNews(postId);

        if (!post) {
            return this.render404Page();
        }

        const lang = window.i18n.getLang();
        const title = window.i18n.getLocalizedField(post, 'title');
        const content = window.i18n.getLocalizedField(post, 'content');
        const image = post.image ? `<img src="images/news/${post.image}" alt="${title}" class="post-image">` : '';

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
                    <div class="content-body">
                        ${content}
                    </div>
                    <div class="post-footer">
                        <a href="?page=news${lang === 'en' ? '&lang=en' : ''}" class="btn-back">
                            ${lang === 'en' ? '← Back to News' : '← 返回新聞列表'}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Render contact page
    async renderContactPage() {
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
    }

    // Render 404 page
    render404Page() {
        const lang = window.i18n.getLang();
        return `
            <div class="error-page">
                <div class="container">
                    <h1>404</h1>
                    <p>${lang === 'en' ? 'Page not found' : '找不到頁面'}</p>
                    <a href="?page=home${lang === 'en' ? '&lang=en' : ''}" class="btn-primary">
                        ${lang === 'en' ? 'Go Home' : '返回首頁'}
                    </a>
                </div>
            </div>
        `;
    }
}

// Create global router instance
window.router = new Router();

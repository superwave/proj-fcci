// Internationalization (i18n) Module
class I18n {
    constructor() {
        this.currentLang = 'zh';
        this.translations = null;
        this.pages = null;
        this.news = null;
    }

    async init() {
        try {
            // Use embedded data (no fetch required!)
            // 使用內嵌資料（不需要 fetch！）
            this.translations = window.DATA.config;
            this.pages = window.DATA.pages;
            this.news = window.DATA.news;

            // Get language from URL or default to Chinese
            const urlParams = new URLSearchParams(window.location.search);
            this.currentLang = urlParams.get('lang') || 'zh';

            // Update HTML lang attribute
            document.documentElement.lang = this.currentLang === 'en' ? 'en' : 'zh-TW';

            return true;
        } catch (error) {
            console.error('Failed to load translations:', error);
            return false;
        }
    }

    // Get translated text by key
    t(key, lang = null) {
        lang = lang || this.currentLang;
        const suffix = lang === 'en' ? '_en' : '_zh';

        // Navigate nested object path
        const keys = key.split('.');
        let value = this.translations;

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if not found
            }
        }

        // If value is an object with language suffix, return that
        if (typeof value === 'string') {
            return value;
        } else if (value && typeof value === 'object' && value[suffix]) {
            return value[suffix];
        }

        return key;
    }

    // Get page content
    getPage(pageId) {
        return this.pages?.[pageId] || null;
    }

    // Get news article
    getNews(newsId) {
        return this.news?.find(n => n.id === parseInt(newsId)) || null;
    }

    // Get all news articles
    getAllNews() {
        return this.news || [];
    }

    // Switch language
    switchLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';

        // Update URL
        const url = new URL(window.location);
        if (lang === 'en') {
            url.searchParams.set('lang', 'en');
        } else {
            url.searchParams.delete('lang');
        }

        history.pushState(null, null, url);

        // Reload current page
        if (window.router) {
            window.router.handleRoute();
        }
    }

    // Get current language
    getLang() {
        return this.currentLang;
    }

    // Get localized field from object
    getLocalizedField(obj, fieldName) {
        const lang = this.currentLang;
        const suffix = lang === 'en' ? '_en' : '_zh';
        return obj?.[fieldName + suffix] || obj?.[fieldName] || '';
    }
}

// Create global instance
window.i18n = new I18n();

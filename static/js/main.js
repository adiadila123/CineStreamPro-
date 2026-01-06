// CineStream Pro - Main Application (with 5-language i18n + global helpers)
(function () {
    'use strict';

    // Translation Dictionary - 5 Languages
    const translations = {
        en: {
            home: "Home",
            movies: "Movies",
            tv: "TV Shows",
            tvShows: "TV Shows",
            watchlist: "Watchlist",
            myWatchlist: "My Watchlist",
            totalItems: "Total Items",
            browseContent: "Browse Content",
            emptyWatchlist: "Your watchlist is empty",
            clearWatchlist: "Clear Watchlist",
            confirmClearWatchlist: "Are you sure you want to clear your watchlist?",
            watchlistCleared: "Watchlist cleared",

            featured: "Featured",
            watchNow: "Watch Now",
            addToWatchlist: "Add to Watchlist",
            inWatchlist: "In Watchlist",
            trendingNow: "Trending Now",
            popularMovies: "Popular Movies",
            popularTVShows: "Popular TV Shows",
            topRated: "Top Rated",
            browseByGenre: "Browse by Genre",
            seeAll: "See All",

            action: "Action",
            actionDesc: "Thrilling adventures",
            comedy: "Comedy",
            comedyDesc: "Laugh out loud",
            drama: "Drama",
            dramaDesc: "Emotional stories",
            horror: "Horror",
            horrorDesc: "Spine-chilling tales",
            scifi: "Sci-Fi",
            scifiDesc: "Future adventures",
            animation: "Animation",
            animationDesc: "Animated worlds",

            allGenres: "All Genres",
            allYears: "All Years",
            sortPopularity: "Popularity",
            sortRating: "Top Rated",
            sortNewest: "Newest",
            sortRevenue: "Revenue",
            noResults: "No content found",
            loadMore: "Load More",
            clearFilter: "Clear Filter",

            moviesAvailable: "Movies Available",
            countries: "Countries",
            activeUsers: "Active Users",

            browse: "Browse",
            company: "Company",
            aboutUs: "About Us",
            contact: "Contact",
            careers: "Careers",
            support: "Support",
            helpCenter: "Help Center",
            termsOfService: "Terms of Service",
            privacyPolicy: "Privacy Policy",
            followUs: "Follow Us",
            footerText: "Your ultimate destination for discovering movies and TV shows from around the world.",
            copyright: "© 2024 CineStream Pro. All rights reserved.",
            poweredBy: "Powered by",

            addedToWatchlist: "Added to watchlist",
            removedFromWatchlist: "Removed from watchlist",
            searchPlaceholder: "Search movies, TV shows...",
            playTrailer: "Play Trailer",
            trailer: "Trailer",
            noTrailer: "No trailer available",
            cast: "Cast",
            castNotAvailable: "Cast not available",
            noOverview: "No overview available.",
            movie: "Movie",
            tvSeries: "TV Series"
        },
        ro: {
            home: "Acasă",
            movies: "Filme",
            tv: "Seriale TV",
            tvShows: "Seriale TV",
            watchlist: "Listă",
            myWatchlist: "Lista Mea",
            totalItems: "Total Elemente",
            browseContent: "Explorează Conținut",
            emptyWatchlist: "Lista ta este goală",
            clearWatchlist: "Golește Lista",
            confirmClearWatchlist: "Sigur vrei să golești lista?",
            watchlistCleared: "Lista a fost ștearsă",

            featured: "Recomandat",
            watchNow: "Vizionează Acum",
            addToWatchlist: "Adaugă la Listă",
            inWatchlist: "În Listă",
            trendingNow: "În Tendințe",
            popularMovies: "Filme Populare",
            popularTVShows: "Seriale TV Populare",
            topRated: "Top Evaluări",
            browseByGenre: "Navighează după Gen",
            seeAll: "Vezi Tot",

            action: "Acțiune",
            actionDesc: "Aventuri senzaționale",
            comedy: "Comedie",
            comedyDesc: "Râsul copios",
            drama: "Dramă",
            dramaDesc: "Povești emoționante",
            horror: "Horror",
            horrorDesc: "Povești înfiorătoare",
            scifi: "SF",
            scifiDesc: "Aventuri viitoare",
            animation: "Animație",
            animationDesc: "Lumi animate",

            allGenres: "Toate genurile",
            allYears: "Toți anii",
            sortPopularity: "Popularitate",
            sortRating: "Top evaluări",
            sortNewest: "Cele mai noi",
            sortRevenue: "Încasări",
            noResults: "Nu s-a găsit conținut",
            loadMore: "Încarcă mai mult",
            clearFilter: "Șterge filtrul",

            moviesAvailable: "Filme disponibile",
            countries: "Țări",
            activeUsers: "Utilizatori activi",

            browse: "Navighează",
            company: "Companie",
            aboutUs: "Despre noi",
            contact: "Contact",
            careers: "Cariere",
            support: "Suport",
            helpCenter: "Centru ajutor",
            termsOfService: "Termeni de utilizare",
            privacyPolicy: "Politică de confidențialitate",
            followUs: "Urmărește-ne",
            footerText: "Destinația ta pentru descoperirea filmelor și serialelor TV din întreaga lume.",
            copyright: "© 2024 CineStream Pro. Toate drepturile rezervate.",
            poweredBy: "Powered by",

            addedToWatchlist: "Adăugat la listă",
            removedFromWatchlist: "Eliminat din listă",
            searchPlaceholder: "Caută filme, seriale TV...",
            playTrailer: "Rulează trailerul",
            trailer: "Trailer",
            noTrailer: "Trailer indisponibil",
            cast: "Distribuție",
            castNotAvailable: "Distribuție indisponibilă",
            noOverview: "Descriere indisponibilă.",
            movie: "Film",
            tvSeries: "Serial TV"
        },
        es: {
            home: "Inicio",
            movies: "Películas",
            tv: "Series TV",
            tvShows: "Series TV",
            watchlist: "Lista",
            myWatchlist: "Mi lista",
            totalItems: "Total",
            browseContent: "Explorar contenido",
            emptyWatchlist: "Tu lista está vacía",
            clearWatchlist: "Vaciar lista",
            confirmClearWatchlist: "¿Seguro que quieres vaciar tu lista?",
            watchlistCleared: "Lista vaciada",

            featured: "Destacado",
            watchNow: "Ver ahora",
            addToWatchlist: "Añadir a la lista",
            inWatchlist: "En la lista",
            trendingNow: "Tendencias",
            popularMovies: "Películas populares",
            popularTVShows: "Series populares",
            topRated: "Mejor valoradas",
            browseByGenre: "Explorar por género",
            seeAll: "Ver todo",

            action: "Acción",
            actionDesc: "Aventuras emocionantes",
            comedy: "Comedia",
            comedyDesc: "Ríe a carcajadas",
            drama: "Drama",
            dramaDesc: "Historias emocionales",
            horror: "Terror",
            horrorDesc: "Historias escalofriantes",
            scifi: "Ciencia ficción",
            scifiDesc: "Aventuras futuras",
            animation: "Animación",
            animationDesc: "Mundos animados",

            allGenres: "Todos los géneros",
            allYears: "Todos los años",
            sortPopularity: "Popularidad",
            sortRating: "Mejor valoradas",
            sortNewest: "Más nuevas",
            sortRevenue: "Ingresos",
            noResults: "No se encontró contenido",
            loadMore: "Cargar más",
            clearFilter: "Quitar filtro",

            moviesAvailable: "Películas disponibles",
            countries: "Países",
            activeUsers: "Usuarios activos",

            browse: "Explorar",
            company: "Empresa",
            aboutUs: "Sobre nosotros",
            contact: "Contacto",
            careers: "Empleo",
            support: "Soporte",
            helpCenter: "Centro de ayuda",
            termsOfService: "Términos de servicio",
            privacyPolicy: "Política de privacidad",
            followUs: "Síguenos",
            footerText: "Tu destino para descubrir películas y series de todo el mundo.",
            copyright: "© 2024 CineStream Pro. Todos los derechos reservados.",
            poweredBy: "Desarrollado por",

            addedToWatchlist: "Añadido a la lista",
            removedFromWatchlist: "Eliminado de la lista",
            searchPlaceholder: "Buscar películas, series...",
            playTrailer: "Ver tráiler",
            trailer: "Tráiler",
            noTrailer: "No hay tráiler disponible",
            cast: "Reparto",
            castNotAvailable: "Reparto no disponible",
            noOverview: "Sin descripción.",
            movie: "Película",
            tvSeries: "Serie"
        },
        fr: {
            home: "Accueil",
            movies: "Films",
            tv: "Séries TV",
            tvShows: "Séries TV",
            watchlist: "Liste",
            myWatchlist: "Ma liste",
            totalItems: "Total",
            browseContent: "Explorer",
            emptyWatchlist: "Votre liste est vide",
            clearWatchlist: "Vider la liste",
            confirmClearWatchlist: "Voulez-vous vraiment vider votre liste ?",
            watchlistCleared: "Liste vidée",

            featured: "À la une",
            watchNow: "Regarder",
            addToWatchlist: "Ajouter à la liste",
            inWatchlist: "Dans la liste",
            trendingNow: "Tendances",
            popularMovies: "Films populaires",
            popularTVShows: "Séries populaires",
            topRated: "Mieux notés",
            browseByGenre: "Explorer par genre",
            seeAll: "Voir tout",

            action: "Action",
            actionDesc: "Aventures palpitantes",
            comedy: "Comédie",
            comedyDesc: "Rires garantis",
            drama: "Drame",
            dramaDesc: "Histoires émouvantes",
            horror: "Horreur",
            horrorDesc: "Histoires terrifiantes",
            scifi: "Science-fiction",
            scifiDesc: "Aventures futures",
            animation: "Animation",
            animationDesc: "Mondes animés",

            allGenres: "Tous les genres",
            allYears: "Toutes les années",
            sortPopularity: "Popularité",
            sortRating: "Mieux notés",
            sortNewest: "Nouveautés",
            sortRevenue: "Recettes",
            noResults: "Aucun contenu trouvé",
            loadMore: "Charger plus",
            clearFilter: "Effacer le filtre",

            moviesAvailable: "Films disponibles",
            countries: "Pays",
            activeUsers: "Utilisateurs actifs",

            browse: "Explorer",
            company: "Entreprise",
            aboutUs: "À propos",
            contact: "Contact",
            careers: "Carrières",
            support: "Support",
            helpCenter: "Centre d'aide",
            termsOfService: "Conditions d'utilisation",
            privacyPolicy: "Politique de confidentialité",
            followUs: "Suivez-nous",
            footerText: "Votre destination pour découvrir des films et séries du monde entier.",
            copyright: "© 2024 CineStream Pro. Tous droits réservés.",
            poweredBy: "Propulsé par",

            addedToWatchlist: "Ajouté à la liste",
            removedFromWatchlist: "Retiré de la liste",
            searchPlaceholder: "Rechercher des films, séries...",
            playTrailer: "Voir la bande-annonce",
            trailer: "Bande-annonce",
            noTrailer: "Aucune bande-annonce disponible",
            cast: "Distribution",
            castNotAvailable: "Distribution non disponible",
            noOverview: "Aucun résumé.",
            movie: "Film",
            tvSeries: "Série"
        },
        de: {
            home: "Startseite",
            movies: "Filme",
            tv: "Serien",
            tvShows: "Serien",
            watchlist: "Liste",
            myWatchlist: "Meine Liste",
            totalItems: "Gesamt",
            browseContent: "Inhalte entdecken",
            emptyWatchlist: "Deine Liste ist leer",
            clearWatchlist: "Liste leeren",
            confirmClearWatchlist: "Möchtest du deine Liste wirklich leeren?",
            watchlistCleared: "Liste geleert",

            featured: "Empfohlen",
            watchNow: "Jetzt ansehen",
            addToWatchlist: "Zur Liste hinzufügen",
            inWatchlist: "In der Liste",
            trendingNow: "Im Trend",
            popularMovies: "Beliebte Filme",
            popularTVShows: "Beliebte Serien",
            topRated: "Bestbewertet",
            browseByGenre: "Nach Genre durchsuchen",
            seeAll: "Alle anzeigen",

            action: "Action",
            actionDesc: "Spannende Abenteuer",
            comedy: "Komödie",
            comedyDesc: "Zum Lachen",
            drama: "Drama",
            dramaDesc: "Emotionale Geschichten",
            horror: "Horror",
            horrorDesc: "Gruselige Geschichten",
            scifi: "Science-Fiction",
            scifiDesc: "Zukünftige Abenteuer",
            animation: "Animation",
            animationDesc: "Animierte Welten",

            allGenres: "Alle Genres",
            allYears: "Alle Jahre",
            sortPopularity: "Popularität",
            sortRating: "Bestbewertet",
            sortNewest: "Neueste",
            sortRevenue: "Umsatz",
            noResults: "Keine Ergebnisse",
            loadMore: "Mehr laden",
            clearFilter: "Filter löschen",

            moviesAvailable: "Filme verfügbar",
            countries: "Länder",
            activeUsers: "Aktive Nutzer",

            browse: "Durchsuchen",
            company: "Unternehmen",
            aboutUs: "Über uns",
            contact: "Kontakt",
            careers: "Karriere",
            support: "Support",
            helpCenter: "Hilfezentrum",
            termsOfService: "Nutzungsbedingungen",
            privacyPolicy: "Datenschutz",
            followUs: "Folge uns",
            footerText: "Dein Ziel, um Filme und Serien aus aller Welt zu entdecken.",
            copyright: "© 2024 CineStream Pro. Alle Rechte vorbehalten.",
            poweredBy: "Unterstützt von",

            addedToWatchlist: "Zur Liste hinzugefügt",
            removedFromWatchlist: "Von der Liste entfernt",
            searchPlaceholder: "Filme, Serien suchen...",
            playTrailer: "Trailer ansehen",
            trailer: "Trailer",
            noTrailer: "Kein Trailer verfügbar",
            cast: "Besetzung",
            castNotAvailable: "Besetzung nicht verfügbar",
            noOverview: "Keine Beschreibung verfügbar.",
            movie: "Film",
            tvSeries: "Serie"
        }
    };

    const languageFlags = {
        en: '🇺🇸',
        ro: '🇷🇴',
        es: '🇪🇸',
        fr: '🇫🇷',
        de: '🇩🇪'
    };

    const API_CONFIG = {
        baseUrl: '/api/tmdb',          // ✅ proxy
        imageBaseUrl: 'https://image.tmdb.org',
        language: 'en-US'
    };

    const state = {
        currentLanguage: 'en',
        sliderItems: [],
        watchlist: JSON.parse(localStorage.getItem('cinestream_watchlist') || '[]'),
        currentSlide: 0,
        autoPlayTimer: null,
        isAnimating: false
    };

    function t(key) {
        const langData = translations[state.currentLanguage] || translations.en;
        return langData[key] || (translations.en[key] || key);
    }

    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast-custom ${type}`;

        const icons = {
            success: 'bi-check-circle',
            error: 'bi-x-circle',
            warning: 'bi-exclamation-circle',
            info: 'bi-info-circle'
        };

        toast.innerHTML = `<i class="bi ${icons[type] || icons.info}"></i><span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    function applyTranslations(root = document) {
        root.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);

            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', val);
            } else {
                el.textContent = val;
            }
        });

        const flagEl = document.getElementById('currentFlag');
        const langEl = document.getElementById('currentLang');
        if (flagEl) flagEl.textContent = languageFlags[state.currentLanguage] || '🌐';
        if (langEl) langEl.textContent = state.currentLanguage.toUpperCase();

        document.querySelectorAll('.language-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === state.currentLanguage);
        });
    }

   async function apiRequest(endpoint, params = {}) {
  // Calls Flask proxy: /api/tmdb/<endpoint> (API key stays server-side)
  const urlParams = new URLSearchParams({
    language: API_CONFIG.language,
    ...params
  });

  const url = `/api/tmdb${endpoint}?${urlParams.toString()}`;

  const response = await fetch(url, {
    headers: { 'Accept': 'application/json' }
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

    function getImageUrl(path, size = 'w780') {
        if (!path) {
            return 'data:image/svg+xml,' + encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="780" height="439" viewBox="0 0 780 439"><rect fill="#1E1E2E" width="780" height="439"/><text fill="#64748B" font-family="Arial" font-size="24" x="50%" y="45%" text-anchor="middle">No Image</text></svg>'
            );
        }
        return `${API_CONFIG.imageBaseUrl}/t/p/${size}${path}`;
    }

    function pickRandomBackdrop(items) {
        const candidates = (items || [])
            .map(i => i?.backdrop_path)
            .filter(Boolean);

        if (!candidates.length) return null;

        const idx = Math.floor(Math.random() * candidates.length);
        return candidates[idx];
    }

    function pickRandomBackdrop(items) {
        if (!Array.isArray(items) || !items.length) return null;

        const candidates = items
            .map(i => i?.backdrop_path || i?.poster_path)
            .filter(Boolean);

        if (!candidates.length) return null;

        return candidates[Math.floor(Math.random() * candidates.length)];
    }

    function setTopHeroBackgroundFromPath(path) {
        const el = document.getElementById('topHeroBg');
        if (!el || !path) return;

        // IMPORTANT: fără gradient aici, gradient-ul e în CSS ::after
        el.style.backgroundImage = `url("${API_CONFIG.imageBaseUrl}/t/p/w1280${path}")`;
    }

    function getPosterUrl(path) {
        if (!path) {
            return 'data:image/svg+xml,' + encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" viewBox="0 0 200 300"><rect fill="#1E1E2E" width="200" height="300"/><text fill="#64748B" font-family="Arial" font-size="16" x="50%" y="50%" text-anchor="middle">No Image</text></svg>'
            );
        }
        return `${API_CONFIG.imageBaseUrl}/t/p/w200${path}`;
    }

    function pickRandomBackdrop(items) {
        if (!Array.isArray(items) || !items.length) return null;

        const candidates = items
            .map(i => i.backdrop_path || i.poster_path)
            .filter(Boolean);

        if (!candidates.length) return null;

        return candidates[Math.floor(Math.random() * candidates.length)];
    }

    function setTopHeroBackgroundFromPath(path) {
        const el = document.getElementById('topHeroBg');
        if (!el || !path) return;

        el.style.backgroundImage = `url(${API_CONFIG.imageBaseUrl}/t/p/w1280${path})`;
    }

    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');

        stats.forEach(stat => {
            const target = Number(stat.dataset.count || 0);
            let current = 0;

            if (!target) return;

            const increment = Math.max(1, Math.floor(target / 120));

            const update = () => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target.toLocaleString();
                } else {
                    stat.textContent = current.toLocaleString();
                    requestAnimationFrame(update);
                }
            };

            update();
        });
    }

    const app = {
        init() {
            const savedLang = localStorage.getItem('cinestream_language');
            if (savedLang && translations[savedLang]) state.currentLanguage = savedLang;

            const tmdbLangMap = {
                en: 'en-US',
                ro: 'ro-RO',
                es: 'es-ES',
                fr: 'fr-FR',
                de: 'de-DE'
            };
            API_CONFIG.language = tmdbLangMap[state.currentLanguage] || 'en-US';

            window.addEventListener('scroll', () => {
                const navbar = document.getElementById('navbar');
                if (!navbar) return;
                if (window.scrollY > 50) navbar.classList.add('scrolled');
                else navbar.classList.remove('scrolled');
            });

            document.addEventListener('click', (e) => {
                const dropdown = document.getElementById('languageDropdown');
                const switcher = document.querySelector('.language-switcher');
                if (dropdown && switcher && !switcher.contains(e.target)) {
                    dropdown.classList.remove('show');
                }
            });

            applyTranslations();

            // Set a random top background even on non-home pages
            if (!document.getElementById('heroSlider')) {
                this.loadTopHeroBackground();
            }

            // Only run home-only loaders if hero exists
            if (document.getElementById('heroSlider')) {
                this.loadHero();
                this.loadTrending();
                this.loadPopularMovies();
                this.loadPopularTVShows();
                this.loadTopRated();
            }

            // 🔥 START STATISTICS
            animateStats();

            const randomBackdrop = pickRandomBackdrop(state.sliderItems);
            if (randomBackdrop) setTopHeroBackgroundFromPath(randomBackdrop);
        },

        t,

        updateTranslations(root) {
            applyTranslations(root);
        },

        toggleLanguageDropdown() {
            const dropdown = document.getElementById('languageDropdown');
            if (dropdown) dropdown.classList.toggle('show');
        },

        setLanguage(lang) {
            if (!translations[lang]) return;

            // 1) UI language (i18n)
            state.currentLanguage = lang;
            localStorage.setItem('cinestream_language', lang);

            // 2) TMDb API language (IMPORTANT)
            const tmdbLangMap = {
                en: 'en-US',
                ro: 'ro-RO',
                es: 'es-ES',
                fr: 'fr-FR',
                de: 'de-DE'
            };
            API_CONFIG.language = tmdbLangMap[lang] || 'en-US';

            // Close dropdown
            const dropdown = document.getElementById('languageDropdown');
            if (dropdown) dropdown.classList.remove('show');

            // Apply translations on page
            applyTranslations();

            // Toast (add "languageChanged" key in translations for best result)
            showToast(`${languageFlags[lang] || '🌐'} ${t('languageChanged')}`, 'success');

            // Optional: refresh homepage dynamic content to match language
            if (document.getElementById('heroSlider')) {
                this.loadHero();
                this.loadTrending();
                this.loadPopularMovies();
                this.loadPopularTVShows();
                this.loadTopRated();
            }
        },

        async loadTopHeroBackground() {
            try {
                const response = await apiRequest('/trending/all/week', {page: 1});
                const items = (response.results || []).slice(0, 12);
                const randomPath = pickRandomBackdrop(items);
                if (randomPath) setTopHeroBackgroundFromPath(randomPath);
            } catch (e) {
                console.error('Error loading top hero background:', e);
            }
        },

        async loadHero() {
            try {
                const response = await apiRequest('/movie/now_playing', {page: 1});
                state.sliderItems = (response.results || []).slice(0, 8).map(item => ({...item, media_type: 'movie'}));

                const randomBackdrop = pickRandomBackdrop(state.sliderItems);
                if (randomBackdrop) setTopHeroBackgroundFromPath(randomBackdrop);

                if (state.sliderItems.length > 0) {
                    this.renderSlider();
                    this.startAutoPlay();
                    this.setupSliderInteractions();
                } else {
                    this.loadFallbackContent();
                }
            } catch (error) {
                console.error('Error loading hero content:', error);
                this.loadFallbackContent();
            }
        },

        async loadFallbackContent() {
            try {
                const response = await apiRequest('/trending/all/week');
                state.sliderItems = (response.results || []).slice(0, 8).map(item => ({
                    ...item,
                    media_type: item.media_type || (item.title ? 'movie' : 'tv')

                }));

                const randomBackdrop = pickRandomBackdrop(state.sliderItems);
                if (randomBackdrop) setTopHeroBackgroundFromPath(randomBackdrop);

                this.renderSlider();
                this.startAutoPlay();
                this.setupSliderInteractions();
            } catch (error) {
                console.error('Error loading fallback:', error);
            }
        },

        renderSlider() {
            const container = document.getElementById('heroSlidesContainer');
            const indicatorsContainer = document.getElementById('sliderIndicators');
            if (!container || !indicatorsContainer || !state.sliderItems.length) return;

            container.innerHTML = state.sliderItems.map((item, index) => `
                <div class="hero-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img class="hero-slide-bg" src="${getImageUrl(item.backdrop_path)}" alt="${item.title || item.name}" onerror="this.src='${getImageUrl(null)}'">
                    <div class="hero-overlay"></div>
                    <div class="hero-overlay-gradient"></div>
                    <div class="container">
                        <div class="hero-content">
                            <div style="display:flex;align-items:center;margin-bottom:1rem;">
                                <span class="hero-type-badge">
                                    <i class="bi ${item.media_type === 'movie' ? 'bi-film' : 'bi-tv'}"></i>
                                    ${item.media_type === 'movie' ? t('movie') : t('tvSeries')}
                                </span>
                                <span class="hero-badge" style="margin-bottom:0;">
                                    <i class="bi bi-calendar3-event"></i>
                                    <span>${(item.release_date || item.first_air_date || '').split('-')[0]}</span>
                                </span>
                            </div>
                            <h1 class="hero-title">${item.title || item.name}</h1>
                            <div class="hero-meta">
                                <span class="hero-rating"><i class="bi bi-star-fill"></i> ${item.vote_average.toFixed(1)}</span>
                                <span class="hero-type">${item.media_type === 'movie' ? t('movie') : t('tvSeries')}</span>
                            </div>
                            <p class="hero-overview">${item.overview || t('noOverview')}</p>
                            <div class="hero-actions">
                                <button class="btn-play" onclick="app.openSliderContent(${index})">
                                    <i class="bi bi-play-fill"></i>
                                    <span data-i18n="watchNow">${t('watchNow')}</span>
                                </button>
                                <button class="btn-watchlist ${this.isInSliderWatchlist(index) ? 'active' : ''}" onclick="app.toggleSliderWatchlist(${index})">
                                    <i class="bi ${this.isInSliderWatchlist(index) ? 'bi-check-lg' : 'bi-plus-lg'}"></i>
                                    <span>${this.isInSliderWatchlist(index) ? t('inWatchlist') : t('addToWatchlist')}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            indicatorsContainer.innerHTML = state.sliderItems.map((_, index) => `
                <button class="slider-indicator ${index === 0 ? 'active' : ''}" onclick="app.goToSlide(${index})" aria-label="Slide ${index + 1}"></button>
            `).join('');

            state.currentSlide = 0;
            applyTranslations(container);
        },

        setupSliderInteractions() {
            const slider = document.getElementById('heroSlider');
            if (!slider) return;

            slider.addEventListener('mouseenter', () => this.stopAutoPlay());
            slider.addEventListener('mouseleave', () => this.startAutoPlay());

            document.addEventListener('keydown', (e) => {
                if (document.getElementById('heroSlider')?.contains(document.activeElement) || document.activeElement === document.body) {
                    if (e.key === 'ArrowRight') this.nextSlide();
                    if (e.key === 'ArrowLeft') this.prevSlide();
                }
            });
        },

        isInSliderWatchlist(index) {
            const item = state.sliderItems[index];
            if (!item) return false;
            return state.watchlist.some(w => w.id === item.id && w.type === item.media_type);
        },

        goToSlide(index) {
            if (index < 0 || index >= state.sliderItems.length || state.isAnimating) return;

            state.isAnimating = true;
            const slides = document.querySelectorAll('.hero-slide');
            const indicators = document.querySelectorAll('.slider-indicator');

            slides[state.currentSlide]?.classList.remove('active');
            indicators[state.currentSlide]?.classList.remove('active');

            state.currentSlide = index;

            slides[state.currentSlide]?.classList.add('active');
            indicators[state.currentSlide]?.classList.add('active');

            setTimeout(() => {
                state.isAnimating = false;
            }, 800);
            this.resetAutoPlay();
        },

        nextSlide() {
            const nextIndex = (state.currentSlide + 1) % state.sliderItems.length;
            this.goToSlide(nextIndex);
        },

        prevSlide() {
            const prevIndex = (state.currentSlide - 1 + state.sliderItems.length) % state.sliderItems.length;
            this.goToSlide(prevIndex);
        },

        startAutoPlay() {
            if (state.autoPlayTimer) clearInterval(state.autoPlayTimer);
            state.autoPlayTimer = setInterval(() => this.nextSlide(), 6000);
        },

        resetAutoPlay() {
            if (state.autoPlayTimer) clearInterval(state.autoPlayTimer);
            this.startAutoPlay();
        },

        stopAutoPlay() {
            if (state.autoPlayTimer) {
                clearInterval(state.autoPlayTimer);
                state.autoPlayTimer = null;
            }
        },

        openSliderContent(index) {
            const item = state.sliderItems[index];
            if (item) this.openContentModal(item.id, item.media_type);
        },

        toggleSliderWatchlist(index) {
            const item = state.sliderItems[index];
            if (!item) return;

            const type = item.media_type;
            const existingIndex = state.watchlist.findIndex(w => w.id === item.id && w.type === type);
            const isInList = existingIndex > -1;

            if (isInList) {
                state.watchlist.splice(existingIndex, 1);
                showToast(t('removedFromWatchlist'), 'info');
            } else {
                state.watchlist.unshift({
                    id: item.id,
                    type: type,
                    title: item.title || item.name,
                    poster_path: item.poster_path,
                    vote_average: item.vote_average,
                    release_date: item.release_date || item.first_air_date
                });
                showToast(t('addedToWatchlist'), 'success');
            }

            localStorage.setItem('cinestream_watchlist', JSON.stringify(state.watchlist));

            const slide = document.querySelectorAll('.hero-slide')[index];
            if (slide) {
                const btn = slide.querySelector('.btn-watchlist');
                if (btn) {
                    btn.classList.toggle('active', !isInList);
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = !isInList ? 'bi bi-check-lg' : 'bi bi-plus-lg';
                    const label = btn.querySelector('span');
                    if (label) label.textContent = !isInList ? t('inWatchlist') : t('addToWatchlist');
                }
            }
        },

        async loadTrending() {
            try {
                const response = await apiRequest('/trending/all/week', {page: 1});
                this.renderCarousel('trendingCarousel', (response.results || []).slice(0, 12), false);
            } catch (error) {
                console.error('Error loading trending:', error);
            }
        },

        async loadPopularMovies() {
            try {
                const response = await apiRequest('/movie/popular', {page: 1});
                this.renderCarousel('popularCarousel', (response.results || []).slice(0, 12), false);
            } catch (error) {
                console.error('Error loading popular movies:', error);
            }
        },

        async loadPopularTVShows() {
            try {
                const response = await apiRequest('/tv/popular', {page: 1});
                this.renderCarousel('tvshowsCarousel', (response.results || []).slice(0, 12), false);
            } catch (error) {
                console.error('Error loading TV shows:', error);
            }
        },

        async loadTopRated() {
            try {
                const response = await apiRequest('/movie/top_rated', {page: 1});
                this.renderCarousel('topratedCarousel', (response.results || []).slice(0, 12), false);
            } catch (error) {
                console.error('Error loading top rated:', error);
            }
        },

        renderCarousel(containerId, items, isFeatured = false) {
            const container = document.getElementById(containerId);
            if (!container) return;

            container.innerHTML = items.map(item => `
                <div class="movie-card${isFeatured ? ' featured-card' : ''}" onclick="app.openContentModal(${item.id}, '${item.media_type || (item.title ? 'movie' : 'tv')}')">
                    <div class="movie-card-image">
                        <img src="${getPosterUrl(item.poster_path)}" alt="${item.title || item.name}" loading="lazy" onerror="this.src='${getPosterUrl(null)}'">
                        <div class="movie-card-overlay">
                            <button class="movie-card-play" onclick="event.stopPropagation(); app.openContentModal(${item.id}, '${item.media_type || (item.title ? 'movie' : 'tv')}')">
                                <i class="bi bi-play-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="movie-card-info">
                        <h4 class="movie-card-title">${item.title || item.name}</h4>
                        <div class="movie-card-meta">
                            <span>${(item.release_date || item.first_air_date || '').split('-')[0]}</span>
                            <span class="movie-card-rating"><i class="bi bi-star-fill"></i> ${Number(item.vote_average || 0).toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        },

        scrollCarousel(prefix, direction) {
            const container = document.getElementById(prefix + 'Carousel');
            if (!container) return;

            const scrollAmount = container.clientWidth * 0.8;
            container.scrollBy({left: direction * scrollAmount, behavior: 'smooth'});
        },

        async openContentModal(id, type) {
            try {
                const endpoint = type === 'movie' ? `/movie/${id}` : `/tv/${id}`;
                const content = await apiRequest(endpoint, {append_to_response: 'videos,credits'});

                const cast = content.credits?.cast?.slice(0, 8) || [];
                const trailer = content.videos?.results?.find(v => v.type === 'Trailer') || content.videos?.results?.[0];

                const modalHtml = `
                    <div class="modal fade" id="contentModal" tabindex="-1">
                        <div class="modal-dialog modal-fullscreen-md-down modal-lg">
                            <div class="modal-content bg-dark">
                                <div class="modal-header border-secondary">
                                    <h5 class="modal-title">${content.title || content.name}</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body p-0">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-lg-5 p-0">
                                                <img src="${getImageUrl(content.poster_path, 'w500')}" class="img-fluid w-100" alt="${content.title || content.name}" style="min-height: 400px; height: 100%; object-fit: cover;">
                                            </div>
                                            <div class="col-lg-7 p-4">
                                                <p class="text-secondary">${content.overview || t('noOverview')}</p>
                                                <div class="mb-3">
                                                    <span class="badge bg-primary me-2">★ ${Number(content.vote_average || 0).toFixed(1)}</span>
                                                    <span class="badge bg-secondary">${content.release_date || content.first_air_date || ''}</span>
                                                </div>

                                                <h6 class="mt-3"><i class="bi bi-play-circle me-2"></i>${t('trailer')}</h6>
                                                ${trailer ? `
                                                    <div class="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/${trailer.key}" allowfullscreen></iframe>
                                                    </div>
                                                ` : `<p class="text-muted">${t('noTrailer')}</p>`}

                                                <div class="mt-4">
                                                    <h6 class="mb-3"><i class="bi bi-people me-2"></i>${t('cast')}</h6>
                                                    <div id="modalCast" class="cast-list">
                                                        ${cast.length > 0 ? cast.map(person => `
                                                            <div class="cast-item">
                                                                <img class="cast-avatar" src="${getPosterUrl(person.profile_path)}" alt="${person.name}">
                                                                <div class="cast-name">${person.name}</div>
                                                                <div class="cast-character">${person.character || ''}</div>
                                                            </div>
                                                        `).join('') : `<p class="text-muted">${t('castNotAvailable')}</p>`}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                document.body.insertAdjacentHTML('beforeend', modalHtml);
                const modal = new bootstrap.Modal(document.getElementById('contentModal'));
                modal.show();

                document.getElementById('contentModal').addEventListener('hidden.bs.modal', function () {
                    this.remove();
                });

            } catch (error) {
                console.error('Error loading content:', error);
                showToast('Unable to load content details', 'error');
            }
        }
    };

    document.addEventListener('DOMContentLoaded', () => app.init());

    // Back to Top
    document.addEventListener('DOMContentLoaded', () => {
        const backToTopBtn = document.getElementById('backToTop');
        if (!backToTopBtn) return;

        const toggleBackToTop = () => {
            if (window.scrollY > 600) backToTopBtn.classList.add('show');
            else backToTopBtn.classList.remove('show');
        };

        toggleBackToTop();
        window.addEventListener('scroll', toggleBackToTop, {passive: true});

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    });

    // Expose helpers for page templates (watchlist/browse)
    window.app = app;
    window.t = t;
    window.showToast = showToast;
})();
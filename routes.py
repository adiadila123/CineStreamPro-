from flask import Blueprint, render_template, request, jsonify, session, make_response
import requests
from datetime import datetime, timedelta
from config import Config

# Create blueprint for main routes
main_bp = Blueprint('main', __name__)

def get_image_url(path, size='original'):
    """Generate TMDb image URL."""
    if not path:
        return 'data:image/svg+xml,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="780" height="439"><rect fill="#1E1E2E" width="780" height="439"/><text fill="#64748B" font-family="Arial" font-size="24" x="50%" y="50%" text-anchor="middle">No Image</text></svg>'
        )
    return f"{Config.TMDB_IMAGE_BASE_URL}/{size}{path}"

def get_poster_url(path):
    """Generate TMDb poster URL."""
    if not path:
        return 'data:image/svg+xml,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><rect fill="#1E1E2E" width="200" height="300"/><text fill="#64748B" font-family="Arial" font-size="16" x="50%" y="50%" text-anchor="middle">No Image</text></svg>'
        )
    return f"{Config.TMDB_IMAGE_BASE_URL}/w200{path}"

def encodeURIComponent(s):
    """URL encode a string."""
    return s.replace('<', '%3C').replace('>', '%3E').replace('"', '%22').replace("'", '%27').replace('&', '%26')

def tmdb_request(endpoint, params=None):
    """Make request to TMDb API."""
    url = f"{Config.TMDB_BASE_URL}{endpoint}"
    lang = session.get('language', 'en-US')
    default_params = {
        'api_key': Config.TMDB_API_KEY,
        'language': lang
    }
    if params:
        default_params.update(params)
    
    response = requests.get(url, params=default_params)
    if response.status_code == 200:
        return response.json()
    return {'results': [], 'total_results': 0}

def get_translation(key, lang_code=None):
    """Get translation for a key."""
    if lang_code is None:
        lang_code = session.get('language', 'en-US').split('-')[0]
    lang_translations = Config.TRANSLATIONS.get(lang_code, Config.TRANSLATIONS['en'])
    return lang_translations.get(key, key)

@main_bp.get("/api/tmdb/<path:endpoint>")
def api_tmdb_proxy(endpoint):
    """
    Server-side proxy to TMDb (hides API key from client).
    Example: /api/tmdb/movie/now_playing?page=1
    """
    # Ensure endpoint starts with /
    endpoint = "/" + endpoint.lstrip("/")

    # Forward query params (except api_key — we inject ours)
    params = dict(request.args)

    data = tmdb_request(endpoint, params)
    return jsonify(data)

@main_bp.context_processor
def inject_config():
    """Inject config variables into templates."""
    lang = session.get('language', 'en-US')
    lang_code = lang.split('-')[0]
    return {
        'config': Config,
        'current_language': lang_code,
        'current_flag': Config.LANGUAGE_FLAGS.get(lang_code, '🇺🇸'),
        'get_image_url': get_image_url,
        'get_poster_url': get_poster_url,
        't': lambda key: get_translation(key)
    }

@main_bp.route('/set-language/<lang>')
def set_language(lang):
    """Set language for the session."""
    session['language'] = f"{lang}-{lang.upper()}"
    session.permanent = True
    return make_response({'status': 'success', 'language': lang})

@main_bp.route('/')
def index():
    """Home page with hero slider showing latest releases."""
    # Fetch latest releases (last 30 days)
    today = datetime.now()
    last_month = today - timedelta(days=30)
    date_str = last_month.strftime('%Y-%m-%d')
    
    # Fetch movies and TV shows
    movies_response = tmdb_request('/discover/movie', {
        'primary_release_date.gte': date_str,
        'sort_by': 'primary_release_date.desc',
        'page': 1
    })
    
    tv_response = tmdb_request('/discover/tv', {
        'first_air_date.gte': date_str,
        'sort_by': 'first_air_date.desc',
        'page': 1
    })
    
    # Combine and shuffle
    movie_items = [{**m, 'media_type': 'movie'} for m in (movies_response.get('results', []) or [])]
    tv_items = [{**t, 'media_type': 'tv'} for t in (tv_response.get('results', []) or [])]
    
    import random
    all_items = movie_items + tv_items
    random.shuffle(all_items)
    latest_releases = all_items[:8]
    
    # Fetch carousel content
    trending = tmdb_request('/trending/all/week', {'page': 1})
    popular_movies = tmdb_request('/movie/popular', {'page': 1})
    popular_tv = tmdb_request('/tv/popular', {'page': 1})
    top_rated = tmdb_request('/movie/top_rated', {'page': 1})
    
    return render_template('index.html',
                         latest_releases=latest_releases,
                         trending=(trending.get('results', []) or [])[:12],
                         popular_movies=(popular_movies.get('results', []) or [])[:12],
                         popular_tv=(popular_tv.get('results', []) or [])[:12],
                         top_rated=(top_rated.get('results', []) or [])[:12])

@main_bp.route('/movies')
def movies():
    """Movies browsing page."""
    page = request.args.get('page', 1, type=int)
    genre = request.args.get('genre', '')
    year = request.args.get('year', '')
    sort = request.args.get('sort', 'popularity.desc')
    
    # Fetch genres
    genres_response = tmdb_request('/genre/movie/list')
    genres = genres_response.get('genres', []) or []
    
    # Build discover params
    discover_params = {
        'page': page,
        'sort_by': sort,
        'include_adult': False
    }
    if genre:
        discover_params['with_genres'] = genre
    if year:
        discover_params['primary_release_year'] = year
    
    movies_response = tmdb_request('/discover/movie', discover_params)
    
    return render_template('browse.html',
                         title='movies',
                         items=(movies_response.get('results', []) or []),
                         genres=genres,
                         page=page,
                         total_pages=min(movies_response.get('total_pages', 1), 500),
                         has_more=page < min(movies_response.get('total_pages', 1), 500))

@main_bp.route('/tv-shows')
def tv_shows():
    """TV Shows browsing page."""
    page = request.args.get('page', 1, type=int)
    genre = request.args.get('genre', '')
    year = request.args.get('year', '')
    sort = request.args.get('sort', 'popularity.desc')
    
    # Fetch genres
    genres_response = tmdb_request('/genre/tv/list')
    genres = genres_response.get('genres', []) or []
    
    # Build discover params
    discover_params = {
        'page': page,
        'sort_by': sort,
        'include_adult': False
    }
    if genre:
        discover_params['with_genres'] = genre
    if year:
        discover_params['first_air_date_year'] = year
    
    tv_response = tmdb_request('/discover/tv', discover_params)
    
    return render_template('browse.html',
                         title='tv_shows',
                         items=(tv_response.get('results', []) or []),
                         genres=genres,
                         page=page,
                         total_pages=min(tv_response.get('total_pages', 1), 500),
                         has_more=page < min(tv_response.get('total_pages', 1), 500))

@main_bp.route('/browse/<type>')
def browse(type):
    """Generic browse page for different content types."""
    page = request.args.get('page', 1, type=int)
    genre = request.args.get('genre', '')
    year = request.args.get('year', '')
    sort = request.args.get('sort', 'popularity.desc')
    
    # Map type to TMDb endpoint and genre list
    type_map = {
        'trending': ('/trending/all/week', 'all'),
        'popular': ('/movie/popular', 'movie'),
        'movies': ('/discover/movie', 'movie'),
        'tvshows': ('/discover/tv', 'tv'),
        'toprated': ('/movie/top_rated', 'movie')
    }
    
    if type not in type_map:
        type = 'trending'
    
    endpoint, content_type = type_map[type]
    
    # If it's a discover endpoint, fetch genres
    genres = []
    if 'discover' in endpoint:
        genres_response = tmdb_request(f'/genre/{content_type}/list')
        genres = genres_response.get('genres', []) or []
    
    # Build discover params
    discover_params = {
        'page': page,
        'sort_by': sort,
        'include_adult': False
    }
    if genre:
        discover_params['with_genres'] = genre
    if year:
        if content_type == 'movie':
            discover_params['primary_release_year'] = year
        else:
            discover_params['first_air_date_year'] = year
    
    if 'discover' in endpoint:
        response = tmdb_request(endpoint, discover_params)
    else:
        response = tmdb_request(endpoint, {'page': page})
    
    return render_template('browse.html',
                         title=type,
                         items=(response.get('results', []) or [])[:20],
                         genres=genres,
                         page=page,
                         total_pages=min(response.get('total_pages', 1), 500),
                         has_more=page < min(response.get('total_pages', 1), 500))

@main_bp.route("/help")
def help_center():
    return render_template("help.html")


@main_bp.route("/terms")
def terms():
    return render_template("terms.html")


@main_bp.route("/privacy")
def privacy():
    return render_template("privacy.html")

# API Routes for dynamic content
@main_bp.route('/api/content')
def api_content():
    """Get content for browsing pages."""
    content_type = request.args.get('type', 'movie')
    page = request.args.get('page', 1, type=int)
    genre = request.args.get('genre', '')
    year = request.args.get('year', '')
    sort = request.args.get('sort', 'popularity.desc')
    
    discover_params = {
        'page': page,
        'sort_by': sort,
        'include_adult': False
    }
    if genre:
        discover_params['with_genres'] = genre
    if year:
        if content_type == 'movie':
            discover_params['primary_release_year'] = year
        else:
            discover_params['first_air_date_year'] = year
    
    response = tmdb_request(f'/discover/{content_type}', discover_params)
    return jsonify(response)

@main_bp.route('/api/details/<content_type>/<int:content_id>')
def api_details(content_type, content_id):
    """Get detailed content info including cast and videos."""
    params = {'append_to_response': 'credits,videos'}
    data = tmdb_request(f'/{content_type}/{content_id}', params)
    
    # Process cast
    cast = []
    for actor in (data.get('credits', {}).get('cast', []) or [])[:10]:
        cast.append({
            'name': actor.get('name'),
            'character': actor.get('character'),
            'profile_path': get_image_url(actor.get('profile_path'), 'w185') if actor.get('profile_path') else None
        })
    
    # Get trailer
    videos = data.get('videos', {}).get('results', []) or []
    trailer = None
    for video in videos:
        if video.get('type') == 'Trailer':
            trailer = video.get('key')
            break
    if not trailer and videos:
        trailer = videos[0].get('key')
    
    return jsonify({
        'id': data.get('id'),
        'title': data.get('title') or data.get('name'),
        'overview': data.get('overview'),
        'poster_path': get_image_url(data.get('poster_path'), 'w500'),
        'backdrop_path': get_image_url(data.get('backdrop_path'), 'original'),
        'vote_average': data.get('vote_average'),
        'release_date': data.get('release_date') or data.get('first_air_date'),
        'cast': cast,
        'trailer': trailer,
        'videos': data.get('videos', {}).get('results', [])
    })

@main_bp.route('/api/genres/<content_type>')
def api_genres(content_type):
    """Get genres for content type."""
    response = tmdb_request(f'/genre/{content_type}/list')
    return jsonify(response)

@main_bp.route('/api/search')
def api_search():
    """Search content."""
    query = request.args.get('q', '')
    content_type = request.args.get('type', 'movie')
    page = request.args.get('page', 1, type=int)
    
    if not query:
        return jsonify({'results': []})
    
    response = tmdb_request(f'/search/{content_type}', {
        'query': query,
        'page': page
    })
    
    return jsonify(response)

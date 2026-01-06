# 🎬 CineStream Pro (Flask)

A Flask-based movie and TV show discovery platform powered by the TMDb API.  
Includes a dynamic hero slider, genre browsing, multi-language UI, and a local watchlist.

> **Disclaimer:** This product uses the TMDb API but is not endorsed or certified by TMDb.

---

## ✨ Features

- **Dynamic Hero Slider** – showcases “Now Playing” with a Trending fallback
- **Multi-language UI** – English, Romanian, Spanish, French, German
- **Browse Movies & TV Shows** – filter by genre/year and sort by popularity, rating, newest
- **Watchlist** – save favourites (stored locally in the browser)
- **Content Details Modal** – cast, trailer (YouTube), overview, rating
- **Responsive Design** – desktop + mobile (Bootstrap 5)

---

## 🧱 Project Structure

```
flask_app/
├── __init__.py
├── app.py
├── routes.py
├── config.py
├── requirements.txt
├── .env.example
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── templates/
    ├── base.html
    ├── index.html
    ├── browse.html
    └── watchlist.html
```

---

## ⚙️ Installation (Local)

### 1) Create and activate a virtual environment
```bash
python -m venv venv
source venv/bin/activate        # macOS / Linux
venv\Scripts\activate         # Windows
```

### 2) Install dependencies
```bash
cd flask_app
pip install -r requirements.txt
```

### 3) Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` and set at least:
- `SECRET_KEY`
- `TMDB_API_KEY`

### 4) Run the application
```bash
python app.py
```

Open:
```
http://127.0.0.1:5000
```

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SECRET_KEY` | Flask secret key (sessions, security) | Yes |
| `TMDB_API_KEY` | TMDb API key | Yes |

---

## 🔌 API Endpoints

- `GET /api/content?type=movie&page=1&genre=28`
- `GET /api/details/<type>/<id>`
- `GET /api/genres/<type>`
- `GET /api/search?q=query&type=movie`
- `POST /watchlist/add`
- `POST /watchlist/remove/<id>`
- `GET /set-language/<lang>`

---

## 🚀 Production

```bash
gunicorn -w 2 -b 0.0.0.0:5000 app:app
```

---

## 🧰 Tech Stack

- Backend: Flask (Python)
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Styling: Bootstrap 5
- API: The Movie Database (TMDb)

---

## 📄 Licence

Educational / portfolio project.

---

## 🙌 Credits

- Data: https://www.themoviedb.org/
- Icons: https://icons.getbootstrap.com/
- Fonts: https://fonts.google.com/

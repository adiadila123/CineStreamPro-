#!/usr/bin/env python3
"""
CineStream Pro - Main Application Entry Point
A Flask-based movie and TV show discovery platform.
"""

from flask import Flask
from flask_cors import CORS
from config import Config
from routes import main_bp

app = Flask(__name__)
app.config.from_object(Config)

if not app.config.get("TMDB_API_KEY"):
    raise RuntimeError("TMDB_API_KEY is not set. Put it in .env / environment variables.")

# Enable CORS
CORS(app)

# Register blueprints
app.register_blueprint(main_bp)

# Make session permanent
@app.before_request
def make_session_permanent():
    from flask import session
    session.permanent = True

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)

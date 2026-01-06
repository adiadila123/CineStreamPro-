"""CineStream Pro - Flask Application Factory"""

from flask import Flask
from flask_cors import CORS
from .config import Config
from .routes import main_bp

def create_app(config_class=Config):
    """Create and configure the Flask application."""
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Enable CORS
    CORS(app)
    
    # Register blueprints
    app.register_blueprint(main_bp)
    
    # Make session permanent
    @app.before_request
    def make_session_permanent():
        from flask import session
        session.permanent = True
    
    return app

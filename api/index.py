from flask import Flask
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]  # project root

app = Flask(
    __name__,
    static_folder=str(ROOT / "static"),
    template_folder=str(ROOT / "templates"),
)

# then register blueprint etc.
from routes import main_bp
app.register_blueprint(main_bp)
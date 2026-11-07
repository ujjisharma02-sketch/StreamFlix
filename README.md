# StreamFlix Backend

## Included files
- `backend/app/main.py` — FastAPI application and API routes; imports and connects the other backend modules.
- `backend/app/database.py` — SQLite engine and database sessions.
- `backend/app/models.py` — SQLAlchemy database tables and relationships.
- `backend/app/schemas.py` — Pydantic request and response schemas.
- `backend/app/security.py` — password hashing and signed login tokens.
- `seed_data.json` — sample movie and show records loaded on first startup.
- `requirements.txt` — Python dependencies.

## Run it
Run these commands from the folder containing `backend/` and `seed_data.json`:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn backend.app.main:app --reload
```

Open `http://127.0.0.1:8000` for the website (when the frontend folder is alongside `backend/`), or `http://127.0.0.1:8000/docs` for the API documentation.

The backend expects the project's `frontend/` folder to sit beside `backend/` to serve the website. If you are testing the API only, the frontend folder is not needed to import the API routes, but the static mount needs that folder to exist when the app starts.

For deployment, set a strong `STREAMFLIX_SECRET_KEY` environment variable. The built-in default is only for local development.

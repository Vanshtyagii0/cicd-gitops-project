from fastapi import FastAPI
from datetime import datetime
import logging

# Logging setup - taaki logs meaningful hon
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
logger = logging.getLogger(__name__)

app = FastAPI(title="Python Backend Service")

@app.on_event("startup")
async def startup_event():
    logger.info("🐍 Python Backend Service starting up...")
    logger.info("✅ Service ready to accept requests")

@app.get("/health")
async def health_check():
    logger.info("Health check called")
    return {
        "status": "healthy",
        "service": "python-backend",
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/message")
async def get_message():
    logger.info("Message endpoint called")
    return {
        "message": "Hello from Python Backend! 🐍",
        "service": "python-backend",
        "timestamp": datetime.now().isoformat()
    }

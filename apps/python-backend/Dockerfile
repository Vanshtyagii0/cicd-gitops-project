# Base image - Python 3.11 slim (chhota size)
FROM python:3.11-slim

# Working directory set karo container ke andar
WORKDIR /app

# Pehle requirements copy karo (caching ke liye)
COPY requirements.txt .

# Dependencies install karo
RUN pip install --no-cache-dir -r requirements.txt

# Application code copy karo
COPY main.py .

# Port expose karo
EXPOSE 8000

# App start karo
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--log-level", "info"]

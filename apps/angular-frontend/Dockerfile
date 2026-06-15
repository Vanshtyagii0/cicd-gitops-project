# Stage 1: Build Angular app
FROM node:20-alpine AS builder

WORKDIR /app

# Dependencies pehle copy karo (caching)
COPY package*.json ./
RUN npm ci --silent

# Source code copy karo aur build karo
COPY . .
RUN npm run build

# Stage 2: Nginx se serve karo
FROM nginx:alpine

# Built files copy karo nginx mein
COPY --from=builder /app/dist/angular-frontend/browser /usr/share/nginx/html

# Nginx config copy karo
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

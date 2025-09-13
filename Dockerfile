# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install deps based on lockfile when present for reproducible builds
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm i; fi

# Copy source
COPY . .

# Build
ENV NODE_ENV=production
RUN npm run build

# Runtime stage (static files served by nginx)
FROM nginx:1.27-alpine AS runtime

# Nginx will run as root in container (standard practice)

# Vite builds to dist by default
COPY --from=build /app/dist /usr/share/nginx/html

# Minimal, secure nginx config for SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fix ownership of web content
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


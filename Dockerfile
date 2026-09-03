# Base stage for building the static files
FROM node:lts-alpine AS base
WORKDIR /app

RUN apk add --no-cache libc6-compat && npm install -g pnpm@9

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .
RUN ls -la
RUN pnpm run build

FROM nginx:mainline-alpine-slim AS runtime
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

COPY --from=base /app/dist /usr/share/nginx/html

EXPOSE 80
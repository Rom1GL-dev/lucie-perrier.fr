# -----------------------------
# Base
# -----------------------------
FROM node:22-bullseye-slim AS base

# Dépendances système nécessaires
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash git curl openssl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app/apps/web

# -----------------------------
# Builder
# -----------------------------
FROM base AS builder

# Copier package.json et yarn.lock pour installer les dépendances
COPY apps/web/package.json apps/web/package.json
COPY package.json yarn.lock ./

# Préparer Yarn
RUN corepack enable && corepack prepare yarn@4.7.0

# Installer Next.js globalement (moins recommandé)
RUN yarn global add next

# Installer les dépendances locales
RUN yarn install --frozen-lockfile

# Copier tout le code source
COPY apps/web/ .

# Build Next.js
RUN yarn build

# -----------------------------
# Production
# -----------------------------
FROM base AS production
WORKDIR /app/apps/web

# Copier le build et les fichiers nécessaires
COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder /app/apps/web/node_modules ./node_modules

EXPOSE 3000

# Lancer Next.js avec le binaire global
CMD ["node", ".next/server/main.js"]

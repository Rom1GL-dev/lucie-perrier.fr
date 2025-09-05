# -----------------------------
# Base
# -----------------------------
FROM node:22-bullseye-slim AS base

# Installer les dépendances système
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash git curl openssl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# -----------------------------
# Builder
# -----------------------------
FROM base AS builder

# Copier seulement package.json et yarn.lock pour installer les dépendances
COPY package.json yarn.lock ./
COPY apps/web/package.json ./apps/web/

# Activer corepack et préparer Yarn 4
RUN corepack enable && corepack prepare yarn@4.7.0

# Installer toutes les dépendances
RUN yarn install --frozen-lockfile

# Copier le reste du code source
COPY apps/web/ ./apps/web/

# Build Next.js
WORKDIR /app/apps/web
RUN yarn build

# -----------------------------
# Production
# -----------------------------
FROM base AS production
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour la production
COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder /app/apps/web/node_modules ./node_modules

# Exposer le port de l'app
EXPOSE 3000

# Lancer l'application
CMD ["yarn", "start"]

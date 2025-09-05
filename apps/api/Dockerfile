# -----------------------------
# Base
# -----------------------------
FROM node:22-alpine AS base

# Dépendances système pour Node, Prisma et Turbo
RUN apk add --no-cache bash git curl openssl libc6-compat

WORKDIR /app

# -----------------------------
# Builder
# -----------------------------
FROM base AS builder
ARG YARN_VERSION=4.7.0
ARG DATABASE_USER
ARG DATABASE_PASSWORD
ARG DATABASE_NAME

# Préparer Yarn et Turbo
RUN corepack enable && corepack prepare yarn@$YARN_VERSION
RUN yarn global add turbo

# Copier les fichiers package.json et yarn.lock
COPY package.json yarn.lock ./
COPY apps/api/package.json apps/api/
COPY packages/ packages/

# Installer toutes les dépendances
RUN yarn install --frozen-lockfile

# Copier le code source
COPY apps/api/ apps/api/

# Définir DATABASE_URL pour Prisma
ENV DATABASE_URL="postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@database:5432/${DATABASE_NAME}?schema=public"

# Prune le workspace API + packages nécessaires pour Turbo
RUN yarn turbo prune api @yogiamelie/database @yogiamelie/typescript-config --docker

# -----------------------------
# Installer
# -----------------------------
FROM base AS installer
ARG YARN_VERSION=4.7.0
ARG DATABASE_USER
ARG DATABASE_PASSWORD
ARG DATABASE_NAME

WORKDIR /app

# Préparer Yarn
RUN corepack enable && corepack prepare yarn@$YARN_VERSION

# Copier les fichiers générés par le prune
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock /yarn.lock

# Installer les dépendances finales
RUN yarn install --frozen-lockfile

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# Re-définir DATABASE_URL pour Prisma pendant le build
ENV DATABASE_URL="postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@database:5432/${DATABASE_NAME}?schema=public"

# Build du workspace API
RUN yarn turbo run build --filter=api...

# -----------------------------
# Production
# -----------------------------
FROM base AS production
WORKDIR /app

# Créer un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 apiuser

# Copier l'app compilée depuis l'installer
COPY --from=installer --chown=nodejs:nodejs /app .

EXPOSE 3001
USER apiuser

CMD ["node", "apps/api/dist/main.js"]

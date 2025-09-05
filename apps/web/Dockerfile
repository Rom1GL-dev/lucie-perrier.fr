# -----------------------------
# Base
# -----------------------------
FROM node:22-bullseye-slim

# Dépendances système nécessaires
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash git curl openssl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# -----------------------------
# Installer les dépendances
# -----------------------------
COPY package.json yarn.lock ./
RUN corepack enable && corepack prepare yarn@4.7.0
RUN yarn install --frozen-lockfile

# -----------------------------
# Copier le code source
# -----------------------------
COPY . .

# -----------------------------
# Build et export statique
# -----------------------------
RUN yarn build
RUN yarn export

# -----------------------------
# Serveur statique
# -----------------------------
EXPOSE 3000
CMD ["npx", "serve", "-s", "out", "-l", "3000"]

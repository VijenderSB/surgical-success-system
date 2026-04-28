# syntax=docker/dockerfile:1.7

# ─── Build stage ──────────────────────────────────────────────────────────────
FROM node:20-bookworm-slim AS build
WORKDIR /app

# Install bun for the client build (matches dev tooling)
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates unzip \
 && curl -fsSL https://bun.sh/install | bash \
 && ln -s /root/.bun/bin/bun /usr/local/bin/bun \
 && rm -rf /var/lib/apt/lists/*

COPY package.json bun.lock* package-lock.json* ./
RUN bun install --frozen-lockfile || bun install

COPY . .

# Build client SPA → ./dist  and  Node server → ./dist-server
RUN bun run build:node

# ─── Runtime stage ────────────────────────────────────────────────────────────
FROM node:20-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

# Production deps only
COPY package.json package-lock.json* ./
RUN npm install --omit=dev --no-audit --no-fund

COPY --from=build /app/dist        ./dist
COPY --from=build /app/dist-server ./dist-server
COPY --from=build /app/db          ./db

EXPOSE 3000
USER node
CMD ["node", "dist-server/index.js"]

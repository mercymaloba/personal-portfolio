# ---------- 1️⃣ Base image ----------
FROM node:18-alpine AS base
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# ---------- 2️⃣ Dependencies ----------
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---------- 3️⃣ Build stage ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
RUN pnpm build

# ---------- 4️⃣ Production runner ----------
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install pnpm in final image too
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only what we need to run
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules


EXPOSE 3000

CMD ["pnpm", "start"]

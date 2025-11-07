# -----------------
# Stage 1: builder
# -----------------
FROM node:20.13.1-alpine AS builder
RUN apk add --no-cache bash python3 make g++ libc6-compat

WORKDIR /app

# Copy environment file if exists
COPY .env.production ./

RUN echo "🔄 Setting environment variables from .env.production..." && \
    set -a && . ./.env.production && set +a && \
    echo "✅ Environment variables set" && \
    echo "NEXT_PUBLIC_API_URL: $NEXT_PUBLIC_API_URL" && \
    echo "NEXT_PUBLIC_API_VERSION: $NEXT_PUBLIC_API_VERSION" && \
    echo "NEXT_PUBLIC_API_KEY: $NEXT_PUBLIC_API_KEY" && \
    echo "NEXT_PUBLIC_INTERNAL_LOGOUT_URL: $NEXT_PUBLIC_INTERNAL_LOGOUT_URL" && \
    echo "ENVIRONMENT: $ENVIRONMENT"

COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm@8.8.0

RUN if [ -f pnpm-lock.yaml ]; then \
      pnpm install --frozen-lockfile; \
    else \
      pnpm install --no-frozen-lockfile; \
    fi

COPY . .
RUN if [ ! -f next.config.js ]; then echo "module.exports = {}" > next.config.js; fi
RUN if [ ! -f next-i18next.config.js ]; then echo "module.exports = {}" > next-i18next.config.js; fi

ENV NODE_ENV=production
RUN pnpm build
RUN npm_config_ignore_scripts=true pnpm prune --prod

# -----------------
# Stage 2: runtime
# -----------------
FROM node:20.13.1-alpine AS runner
WORKDIR /app

RUN apk add --no-cache bash nginx apache2-utils
RUN mkdir -p /etc/nginx/conf.d /var/log/nginx && chmod 755 /etc/nginx /etc/nginx/conf.d /var/log/nginx

# Copy app artifacts
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/next-i18next.config.js ./
COPY --from=builder /app/.env.production ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["pnpm", "start"]

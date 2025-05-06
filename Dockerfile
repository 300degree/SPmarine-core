FROM node:22 AS builder
ENV NODE_ENV=development
WORKDIR /app
COPY package.json pnpm-lock.yaml .
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:22-alpine AS prod
RUN apk add --no-cache libc6-compat
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 18000
CMD ["node", "dist/main"]
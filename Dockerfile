FROM node:21.2.0-bookworm-slim as builder-intermediate

WORKDIR /home/node
COPY package.json package-lock.json tsconfig.json tsconfig.node.json vite.config.ts index.html ./
RUN --mount=type=secret,id=NPMRC,dst=./.npmrc npm ci

COPY public ./public
COPY src ./src
RUN npm run build

FROM nginx:1.25.3-alpine3.18-slim

ENV PORT=8080

RUN chown -R nginx:nginx /var/cache/nginx && \
  chown -R nginx:nginx /var/log/nginx && \
  chown -R nginx:nginx /etc/nginx/conf.d && \
  touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid

USER nginx

COPY --from=builder-intermediate /home/node/build/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/nginx.conf

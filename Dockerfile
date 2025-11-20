# Stage 1: Build Vue (Tetap Node, tapi jalan di GitHub Action)
FROM node:23-alpine AS build
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 2: Serve dengan Nginx (Super Hemat RAM ~10MB)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
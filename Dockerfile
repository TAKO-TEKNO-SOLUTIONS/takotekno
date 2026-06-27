# Stage 1: Build Vue
FROM node:23-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve dengan Nginx (Super Hemat RAM ~10MB)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Custom nginx config: sets proper cache headers for fonts, assets, HTML
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Stage 1: Build Vue
FROM node:23-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve static files tanpa NGINX
FROM node:23-alpine

WORKDIR /app

# Install serve secara global
RUN npm install -g serve

# Copy hasil build dari stage sebelumnya
COPY --from=build /app/dist .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "tcp://0.0.0.0:3000"]

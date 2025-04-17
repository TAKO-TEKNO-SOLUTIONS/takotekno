# Stage 1: Build Vue
FROM node:23-alpine AS build

WORKDIR /app

# Salin dependency file
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file project
COPY . .

# Build aplikasi Vue
RUN npm run build

# Stage 2: Jalankan hasil build menggunakan npx serve
FROM node:23-alpine

WORKDIR /app

# Salin hasil build dari stage sebelumnya
COPY --from=build /app/dist .

# Ekspose port
EXPOSE 3000

# Jalankan static server pakai npx
CMD ["npx", "serve", "-s", ".", "-l", "0.0.0.0"]

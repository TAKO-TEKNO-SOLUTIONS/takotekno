# Gunakan image Node.js versi 23 untuk membangun aplikasi Vue.js
FROM node:23-alpine AS build

# Set working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json (atau yarn.lock jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file dari proyek ke dalam container
COPY . .

# Jalankan build aplikasi Vue.js
RUN npm run build

# Gunakan Nginx untuk menyajikan file statis setelah build
FROM nginx:alpine

# Salin hasil build dari tahap sebelumnya ke dalam folder yang digunakan oleh Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Hapus file default dari Nginx
RUN rm -rf /usr/share/nginx/html/*

# Port 80 digunakan oleh Nginx untuk melayani aplikasi
EXPOSE 80

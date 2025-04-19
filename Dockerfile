# Stage 1: Build Vue
FROM node:23-alpine AS build

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

RUN pnpm run build

# Stage 2: Jalankan hasil build menggunakan serve
FROM node:23-alpine

WORKDIR /app

# Install serve secara global
RUN npm install -g serve

COPY --from=build /app/dist .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "tcp://0.0.0.0:3000"]

# Stage 1: Build the Angular app
FROM node:18 AS build

WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Собираем Angular приложение
RUN npm run build --prod

# Stage 2: Serve the app with nginx
FROM nginx:alpine

# Копируем собранное Angular приложение в папку, которая обслуживается Nginx
COPY --from=build /app/dist/polygon-app /usr/share/nginx/html

# Копируем файл конфигурации Nginx (если есть, иначе будет использоваться дефолтный)
COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порт 80 для веб-сервера
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
FROM node:18.15.0 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
COPY ./dist /usr/share/nginx/html




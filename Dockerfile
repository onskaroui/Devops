FROM node:18.15.0 AS build
WORKDIR /app/dist/empl
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/empl /usr/share/nginx/html

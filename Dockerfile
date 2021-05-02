FROM nginx:stable-alpine
COPY /dist/punky /usr/share/nginx/html

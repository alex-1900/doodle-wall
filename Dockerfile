FROM node:13.8.0-alpine3.11

WORKDIR /web

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories \
    && apk update && apk upgrade \
    && apk add --no-cache \
        build-base \
        libpng \
        libpng-dev \
        jpeg-dev \
        pango-dev \
        cairo-dev \
        giflib-dev;

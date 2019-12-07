FROM node:12.10.0-alpine

COPY ./client/package.json /var/www/client/package.json
COPY ./client/yarn.lock /var/www/client/yarn.lock

RUN yarn install

WORKDIR /var/www/client

VOLUME /var/www/public/assets
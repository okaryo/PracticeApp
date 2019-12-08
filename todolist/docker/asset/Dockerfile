FROM node:12.10.0-alpine

COPY ./frontend/package.json /var/www/frontend/package.json
COPY ./frontend/yarn.lock /var/www/frontend/yarn.lock

RUN yarn install

WORKDIR /var/www/frontend

VOLUME /var/www/public/dist
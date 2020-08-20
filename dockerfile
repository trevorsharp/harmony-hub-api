FROM node:14.4.0-alpine

RUN apk add --no-cache yarn

WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
RUN yarn

COPY ./src ./src

CMD [ "yarn", "start" ]
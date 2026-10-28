FROM node:22.23.4-alpine

RUN apk add --no-cache yarn

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./src ./src

CMD [ "yarn", "start" ]

FROM node:10.16-jessie

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV HOST 0.0.0.0
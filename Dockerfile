FROM node:alpine3.11

WORKDIR /home/node/app

COPY package*.json ./
COPY ./public ./
COPY server.js ./

ENV NODE_ENV production

RUN npm install

EXPOSE 8080

USER "node"

CMD ["npm", "start"]

FROM node:10-alpine

ENV PORT=8080

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

 CMD [ "npm", "start" ]
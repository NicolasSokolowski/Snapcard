FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src src

COPY index.ts ./

EXPOSE 3000

CMD ["npx", "ts-node", "index.ts"]

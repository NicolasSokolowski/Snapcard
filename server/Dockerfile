FROM node:lts-alpine AS prod

WORKDIR /app

COPY *.json ./

RUN npm install --production

COPY src src
COPY index.ts ./

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]

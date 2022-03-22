FROM node:14-alpine

WORKDIR /app/client

COPY client/package*.json .

RUN npm install

COPY client/. .

RUN npm run build

WORKDIR /app/api

COPY api/package*.json .

RUN npm install

COPY api/. .

CMD ["npm", "start"]
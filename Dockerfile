FROM node:latest

WORKDIR /app

COPY ./ ./

RUN npm i

RUN npm run build

WORKDIR /app/build

EXPOSE 3000

CMD ["node", "."]
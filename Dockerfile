FROM node:lts

WORKDIR /app

COPY ./ /app

RUN npm i

RUN npm run build

EXPOSE 6969

CMD ["node", "-r", "dotenv/config", "build"]
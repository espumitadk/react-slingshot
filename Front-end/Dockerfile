FROM node:7.10

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY webpack.config.dev.js .
COPY ./tools ./tools
COPY ./src ./src

RUN ["npm", "install"]

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
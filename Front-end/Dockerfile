FROM node:8.0.0

WORKDIR /front-end-web

COPY . /front-end-web

RUN  rm -rf /fron-end-web/node_modules
RUN ["npm", "install"]

EXPOSE 3000

CMD ["npm", "start"]
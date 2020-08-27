FROM node:12.14.0-alpine3.11

WORKDIR /app

ADD package.json /app/package.json

RUN npm config set registry http://registry.npmjs.org

RUN npm install

ADD . /app

EXPOSE 3000

CMD ["npm", "run", "start"]
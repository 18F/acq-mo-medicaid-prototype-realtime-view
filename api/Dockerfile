FROM node:6

RUN mkdir /app
WORKDIR /app

ADD ./package.json .
RUN npm install

CMD npm run start-dev

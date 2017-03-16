FROM node:6.9

RUN mkdir /app
WORKDIR /app

ADD ./package.json .
RUN npm install

RUN mkdir dist
ADD ./src/index.html dist

CMD npm run start

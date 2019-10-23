FROM node:alpine
ENV NPM_CONFIG_LOGLEVEL info

COPY package*.json ./

RUN apk update &&\
  apk add python g++ make &&\
  rm -rf /var/cache/apk/*

COPY . .

RUN rm -rf node_modules/

RUN yarn

RUN yarn global add nodemon

EXPOSE 4001

CMD [ "yarn", "dev" ]
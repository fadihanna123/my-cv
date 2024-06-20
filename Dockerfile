FROM node:20.14.0-alpine3.20
WORKDIR /app
COPY package.json .
RUN npm i --ignore-scripts -g rimraf
RUN yarn --ignore-scripts
COPY . .
EXPOSE 3000
CMD yarn dev

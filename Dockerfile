FROM node:20.15.0-alpine3.20
WORKDIR /app
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g rimraf
RUN yarn --silent --ignore-scripts
COPY . .
EXPOSE 3000
CMD yarn dev

FROM node:20.18.0-alpine3.20
WORKDIR /app
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts --imutable -g rimraf
RUN yarn setup
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
FROM node:22.13.0-alpine3.20
WORKDIR /app
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g rimraf
RUN yarn setup
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
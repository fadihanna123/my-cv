FROM node:22.11.0-alpine3.20
WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN npm i --silent --ignore-scripts -g rimraf pnpm
RUN pnpm run setup
COPY . .
EXPOSE 3000
CMD ["pnpm", "run", "dev"]
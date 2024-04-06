FROM node:20-alpine as BUILD
WORKDIR /app


COPY package*.json ./
COPY nest-cli.json ./
COPY .eslintrc.js ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm ci && npm run build

FROM node:20-alpine as PRODUCTION

RUN apk --no-cache add curl

WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY --from=BUILD /app/dist/ dist/

EXPOSE 3000

HEALTHCHECK CMD curl --fail http://localhost:3000/api/healthcheck || exit 1

CMD ["npm", "run", "start:prod"]
# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY ./dist ./dist

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

CMD [ "npm", "run", "start:prod" ]
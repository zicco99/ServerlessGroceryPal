FROM node:20.9-alpine

WORKDIR /app

COPY frontend/ionic-app/package*.json ./

RUN npm install

COPY frontend/ionic-app .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

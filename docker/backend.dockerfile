FROM node:20-alpine

WORKDIR /app

COPY backend/api/package*.json ./

RUN npm install

COPY backend/api .

EXPOSE 3000

CMD ["npm", "run", "start:dev", "--", "--host", "0.0.0.0"]

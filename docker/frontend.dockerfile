# Use Node.js as base image
FROM node:20.9-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/ionic-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY frontend/ionic-app .

# Build the application
RUN npm run build

# Expose the application port (default for Ionic is 8100)
EXPOSE 8100

# Start the application
CMD ["npm", "run", "start"]

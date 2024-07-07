# Use Node.js as base image
FROM node:20.9-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY backend/api/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY backend/api .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]

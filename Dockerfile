# Use the official Node.js runtime as a parent image
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install application dependencies
RUN yarn install

# Copy the rest of your application source code to the container
COPY . .

# Expose the port that your Nest.js application will run on
EXPOSE 3000

# Start your Nest.js application
CMD [ "yarn", "run", "start:dev" ]

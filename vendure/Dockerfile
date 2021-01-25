FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY . .
RUN yarn install --production
RUN yarn tsc --version
RUN yarn build

# Run the web service on container startup.
CMD [ "yarn", "start" ]

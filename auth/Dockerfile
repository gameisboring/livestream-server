FROM node:16
WORKDIR /usr/src/appp
COPY package*.json ./
RUN npm install
COPY server.js ./
CMD ["npm", "start"]
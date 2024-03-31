FROM node:alpine
WORKDIR /usr/products
COPY package*.json ./
RUN npm install 
COPY . . 
EXPOSE 3000
CMD npm start
FROM node:18-alpine

WORKDIR /webapp

COPY package.json .

COPY . .

RUN npm install

EXPOSE 8082

ENTRYPOINT ["npm", "run", "dev"]

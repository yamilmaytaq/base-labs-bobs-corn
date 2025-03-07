# Usa una versión estable de Node.js
FROM node:22

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps && npm cache clean --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

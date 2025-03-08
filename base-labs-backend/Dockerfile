FROM node:22

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps && npm cache clean --force

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]

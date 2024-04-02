# Usa una imagen base con Node.js
FROM node:latest

# Establece el directorio de trabajo
WORKDIR /usr/src/atu_big_data

# Copiar package.json y .env
COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3070

CMD ["npm", "run", "start"]
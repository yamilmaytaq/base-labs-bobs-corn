# Usa una versión estable de Node.js
FROM node:22

# Define el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias antes para optimizar la caché de Docker
COPY package.json package-lock.json ./

# Instala las dependencias dentro del contenedor
RUN npm install --legacy-peer-deps && npm cache clean --force

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]

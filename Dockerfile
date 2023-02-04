# Utilizamos como base la imagen oficial seleccionada.
FROM node:lts-bullseye-slim

# Buenas prácticas para la gestión de proyectos con Node.
WORKDIR /application

# Copiamos lo necesario para instalar las dependencias del proyecto.
COPY package.json ./
COPY yarn.lock ./

# Cambiamos a un usuario no privilegiado para prevenir problemas de seguridad y permisos.
RUN chown -R node:node /application
USER node

# Instalamos dependencias
RUN yarn install

# Copiamos los demás archivos necesarios para el funcionamiento
COPY lib/ ./lib/
COPY test/ ./test/

# Ejecutamos el comando para correr el test
CMD ["yarn", "test"]
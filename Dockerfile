# Utilizamos como base la imagen oficial seleccionada.
FROM node:19-bullseye-slim

# Buenas prácticas para la gestión de proyectos con Node.
WORKDIR /app/test

# Copiamos lo necesario para instalar las dependencias del proyecto.
COPY package.json ./
COPY yarn.lock ./

# Cambiamos a un usuario no privilegiado para prevenir problemas de seguridad y permisos.
RUN chown -R 1001:1001 /app/test

# Instalamos dependencias
RUN yarn install

# Copiamos los demás archivos necesarios para el funcionamiento
COPY lib/ ./lib/
COPY test/ ./test/

# Ejecutamos el comando para correr el test
CMD ["yarn", "test"]
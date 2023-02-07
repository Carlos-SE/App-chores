# Utilizamos como base la imagen oficial seleccionada.
FROM alpine:latest

# Actualizamos repos e instalamos node y yarn
RUN apk update \
    && apk add nodejs yarn

# Buenas prácticas para la gestión de proyectos con Node.
WORKDIR /app/test

# Copiamos lo necesario para instalar las dependencias del proyecto.
COPY package.json yarn.lock ./

# Cambiamos a un usuario no privilegiado para prevenir problemas de seguridad y permisos.
RUN adduser -u 1001 -D node &&\
    chown -R node:node /app/test
USER node

# Instalamos dependencias
RUN yarn install

# Ejecutamos el comando para correr el test
CMD ["yarn", "test"]
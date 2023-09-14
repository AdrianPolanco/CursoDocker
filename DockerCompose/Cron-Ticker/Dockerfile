#Jalando imagen de node con tag 20-alpine3.17
FROM node:20-alpine3.17
#Cambiando al directorio app, la cual crea Node en el contenedor Linux automaticamente
WORKDIR /app
#Se usa el COPY para copiar los archivos que especificamos, el ultimo directorio que especifiquemos
#debe de ser el directorio del contenedor en el que se copiarán nuestros archivos, como usamos
#WORKDIR /app, no tenemos que volver a especificarlo sino a usar ./
COPY app.js package.json ./
#Corriendo el comando npm i para instalar las dependencias y el package.json utilizando el comando RUN
#OJO: RUN se utiliza durante la construcción de la imagen, mientras que CMD se usa cuando YA
#el contenedor esta iniciado
RUN npm install

#CMD se correra cuando se corra la imagen en un contenedor
CMD [ "node", "app.js" ]
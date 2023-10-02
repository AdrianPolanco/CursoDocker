#Jalando imagen de node con tag 20-alpine3.17 y especificando de que arquitectura/plataforma sera
FROM --platform=linux/arm64 node:20-alpine3.17
#Se recomienda poner los comandos que tienen menos probabilidad de cambiar de lugar arriba (por ejemplo, el comando para exponer puertos), ya que cuando cambias algun comando o su orden, Docker los volvera a ejecutar, mientras que, sino, simplemente guardara los comandos en caché, lo que hará la construcción de la imagen mucho más rápida
#Cambiando al directorio app, la cual crea Node en el contenedor Linux automaticamente
WORKDIR /app



#Se usa el COPY para copiar los archivos que especificamos, el ultimo directorio que especifiquemos
#debe de ser el directorio del contenedor en el que se copiarán nuestros archivos, como usamos
#WORKDIR /app, no tenemos que volver a especificarlo sino a usar ./
COPY . .

#Corriendo el comando npm i para instalar las dependencias y el package.json utilizando el comando RUN
#OJO: RUN se utiliza durante la construcción de la imagen, mientras que CMD se usa cuando YA
#el contenedor esta iniciado

RUN npm install
#Ejecutar pruebas, si no se pasan las pruebas, la imagen no se construira
RUN npm run test

#Removiendo archivos y directorios no necesarios en PRODUCCION, es decir, las devDependencies
RUN rm -rf tests && rm -rf node_modules

#Instalando SOLAMENTE las dependencias de produccion
RUN npm install --prod

#CMD se correra cuando se corra la imagen en un contenedor, osea, cuando pongamos a correr el contenedor, ahí se ejecutara este comando
CMD [ "node", "app.js" ]

#Construimos la imagen con docker build --tag container-name:tag . OJO: Es importante ponerle un tag explicito a la imagen para que cuando la reconstruyamos de nuevo, las demas imagenes no queden como basura u obsoletas en el image ls, digase, que pasen a tener el nombre de <none>
# Utiliza la imagen oficial de Node.js
FROM node:14

# Copia el archivo JavaScript al contenedor
COPY app.js /app.js

# Ejecuta el programa
CMD ["node", "/app.js"]

# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el código fuente al contenedor
COPY . .

# Ejecutar el programa
CMD ["node", "celsius_to_fahrenheit.js"]

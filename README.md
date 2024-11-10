# JavaScript Celsius to Fahrenheit Converter

Este repositorio contiene un programa en JavaScript que convierte grados Celsius a Fahrenheit.

## Descripción

El programa toma una temperatura en grados Celsius y la convierte a Fahrenheit utilizando la fórmula F = C * 9/5 + 32.

## Requisitos

- **Lenguaje**: JavaScript (Node.js)
- **Requisitos**: Node.js

## Cómo Clonar y Ejecutar

Para clonar este repositorio en tu máquina local, usa los siguientes comandos:

```bash
git clone https://github.com/<tu-usuario>/javascript-celsius-to-fahrenheit.git
cd javascript-celsius-to-fahrenheit
```
** Para ejecutar el programa, usa:**

```bash
node index.js
```
## Dockerización

Paso 1: Construir la Imagen Docker
```bash
docker build -t javascript-celsius-to-fahrenheit .
```
Paso 2: Etiquetar la Imagen
```bash
docker tag javascript-celsius-to-fahrenheit <tu-usuario>/javascript-celsius-to-fahrenheit:latest
```
Paso 3: Subir la Imagen a Docker Hub

```bash
docker push <tu-usuario>/javascript-celsius-to-fahrenheit:latest
```

## Enlace al Docker Hub
JavaScript Celsius to Fahrenheit en Docker Hub (https://hub.docker.com/repository/docker/alex8991/node-celsius-to-fahrenheit/general)


## Licencia
Este repositorio está disponible bajo la Licencia MIT.

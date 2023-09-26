# Rick y Morty: Identificador de Humanos - Backend

Este es el servidor backend que alimenta nuestra [herramienta frontend](#enlace-al-repositorio-del-frontend) para identificar humanos en el universo de Rick y Morty.

El backend actúa como intermediario entre la API de Rick y Morty y el frontend, proporcionando datos filtrados y estructurados para una mejor visualización.

## Características:

- **Express**: Un micro marco para manejar solicitudes HTTP y crear el servidor.
- **GraphQL**: Se utiliza para hacer solicitudes específicas a la API de Rick y Morty, lo que nos permite obtener solo los datos que realmente necesitamos.
- **CORS**: Una middleware de Express que permite solicitudes cruzadas, esencial para que nuestro frontend se comunique con el backend.

## Estructura del código:

### Middleware:

- **CORS**: Habilita las solicitudes cruzadas para todas las rutas, permitiendo que el frontend se comunique con el backend sin problemas de CORS.

### Endpoints:

- **/humans**: Al recibir una solicitud GET, este endpoint consulta la API de Rick y Morty para obtener una lista de personajes humanos. Utiliza GraphQL para estructurar la solicitud y filtrar los resultados.

## Cómo ejecutar el proyecto:

1. Clona el repositorio de GitHub.
2. Navega hasta el directorio del backend.
3. Instala las dependencias con `npm install` o `yarn install`.
4. Ejecuta el servidor con `node server.js` o el comando equivalente que hayas configurado.

## Enlace al repositorio del frontend
https://github.com/wesaka/humans-rick-morty

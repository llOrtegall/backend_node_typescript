# API USUARIOS - README

- API desarrollada con el propósito de gestionar usuarios, roles y permisos.
- Falta agregar la documentación de la API.

## Tecnologías
- NodeJS
- Express
- MySQL
- TypeScript
- Bcryptjs: para encriptar contraseñas

## Instalación
- Clonar el repositorio.
- Ejecutar el comando `npm install` o `yarn`. NOTA: el proyecto de base lo hice con yarn.
- Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno del `.env.example`:
  - PORT=9060
  - MYSQL_HOST=''
  - MYSQL_PORT=
  - MYSQL_USER=''
  - MYSQL_PASSWORD=''
  - MYSQL_DATABASE=''

- Ejecutar el comando `npm run build` o `yarn build` para compilar el proyecto de TypeScript a JavaScript.
- Ejecutar el comando `docker-compose up -d` para levantar los servicios de MySQL y Node.
  - Docker levantará dos servicios:
  - Mysql:Innovation - Base de datos
  - Node:slim - Servidor de la API
  
  Observación Mysql: 
  - Al levantar el servicio de MySQL, se designará la contraseña del usuario root como se defina en la variable de entorno MYSQL_PASSWORD.
  - Se creará una base de datos llamada "login".
  - Se creará una tabla llamada "usuarios".
  - Se creará un volumen en la raíz del proyecto llamado "mysql" para almacenar los datos de la base de datos.

## Variables de entorno
- PORT=9060

Mi objetivo principal es poner a prueba mis conocimientos. He creado esta API con el propósito de aprender y mejorar mis habilidades en el desarrollo de software. Si tienes alguna sugerencia o recomendación, no dudes en darme feedback. Además, mi propósito es poder recibir feedback de la comunidad para mejorar mis habilidades. Considerando que sé que el código no es perfecto, pero con la ayuda de la comunidad puedo mejorar. 

- Gracias por tu tiempo y por revisar mi proyecto.

- A futuro se agregará la documentación de la API.
- Además, también deseo agregar autenticación con JWT.
- Agregar pruebas unitarias.
- Agregar pruebas de integración.
- Agregar pruebas de seguridad.

No dudes en dejarme tu pull request si deseas colaborar con el proyecto.

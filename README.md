# API USUARIOS - README

- Api desarrollada con el proposito de gestionar usuarios, roles y permisos.
- Falta Agregar la documentacion de la API

## Tecnologias
- NodeJS
- Express
- Mysql
- TypeScript
- Bycriptjs - Para encriptar contraseñas

## Instalacion
- Clonar el repositorio
- Ejecutar el comando npm install o yarn NOTA: el proyecto de base lo hize con yarn
- Crear un archivo .env en la raiz del proyecto con las siguientes variables de entorno del .env.example
    - PORT=9060
    - MYSQL_HOST=''
    - MYSQL_PORT=
    - MYSQL_USER=''
    - MYSQL_PASSWORD=''
    - MYSQL_DATABASE=''

- Ejecutar el comando npm run build o yarn build - para compilar el proyecto de typescript a javascript
- Ejecutar el comando docker compose up -d para levantar el contenedor de la base de datos
  - Docker levantará dos servicios:
    - Mysql:Innovation - Base de datos
    - Node:slim - Servidor de la API
  
  Observación Mysql: 
  - Al levantar el servicio de mysql, se designara la contraseña del usuario root como se defina en la variable de entonro MYSQL_PASSWORD
  - Se creara una base de datos llamada login
  - Se creara una table llamada usuarios
  - Se creara un volumen en la raiz del proyecto llamado mysql, para almacenar los datos de la base de datos

## Variables de entorno
- PORT=9060

Mi objectivo principal es poner a prueba mis conocimientos, he creado esta api con el proposito de aprender y mejorar mis habilidades en el desarrollo de software. Si tienes alguna sugerencia o recomendacion, no dudes en darme feedback. ademas que mi proposito es poder recibir feedback de la comunidad para mejorar mis habilidades y conocimientos. considerando que sé el codigo no es perfecto, pero con la ayuda de la comunidad puedo mejorar. 

- Gracias por tu tiempo y por revisar mi proyecto.

- A futuro se agregara la documentacion de la API
- A demas tambien deseo agregar autentificación con JWT
- Agregar pruebas unitarias
- Agregar pruebas de integracion
- Agregar pruebas de rendimiento
- Agregar pruebas de seguridad

```
No dudes en dejarme tu pull request, si deseas colaborar con el proyecto.
```




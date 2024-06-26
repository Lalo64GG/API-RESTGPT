## API RESTGPT - API REST con SQLite y Node.js

Esta es una API REST desarrollada con Node.js y SQLite que permite la creación de usuarios, autenticación mediante JSON Web Token (JWT) y otras funcionalidades. La API sigue un modelo basado en capas y utiliza migraciones para gestionar la base de datos.

### Tecnologías Utilizadas

- Node.js v20
- Nodemon
- SQLite

### Estructura del Proyecto

La API sigue una estructura de carpetas organizadas de la siguiente manera:

- `service`: Contiene lógica de negocio y acceso a la base de datos.
- `controller`: Maneja las solicitudes HTTP y llama a los servicios correspondientes.
- `middleware`: Contiene funciones de middleware para la autenticación y otras funciones auxiliares.
- `routes`: Define las rutas de la API.

### Requisitos

- Node.js v20 o superior
- NPM (viene con Node.js)

>[!NOTE]    
Nota: Aseguraté de tener instalado nodemon para facilitar el uso de la api.

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/TU_USUARIO/API-RESTGPT.git

2. Navega al directorio del proyecto:
   
   ```bash
   cd API-RESTGPT

3. Instala las dependencias:

    ```bash
    npm install

## Configuración de la Base de Datos

- `Archivo .env.example`
El archivo .env.example debe contener las siguientes variables de entorno:

OPENAI_API_KEY=your_api_key
PORT=3000
DB_PATH=your_db_path
BCRYPT_COST=10
JWT_SECRET=your_jwt_secret_here

## Migración

La base de datos SQLite ya está configurada y lista para su uso. Las migraciones se pueden ejecutar utilizando el siguiente comando:

1. Correr migración:

    ```bash
    npm run migrate
    

Este comando generará las tablas necesarias y cualquier otra configuración requerida.

## Uso
Para iniciar la API, puedes ejecutar el siguiente comando:

1. Correr Localhost
    ```bash
    npm start#
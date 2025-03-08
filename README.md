# 📌 Bob´s Corn - Configuracion del Proyecto

Este repositorio contiene los proyectos **Frontend** y **Backend** de Base Labs - Bob´s Corn. A continuación, se detallan los pasos para clonar, instalar dependencias y ejecutar ambos proyectos correctamente en un entorno local.

---

## 🛠️ Requisitos Previos
Antes de comenzar, asegúrate de tener instalado en tu sistema:
- [Node.js](https://nodejs.org/) (versión recomendada: **LTS**)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

---

## 🚀 Pasos de Instalación

### 1️⃣ Clonar el Repositorio
```sh
# Clonar el repositorio
git clone https://github.com/yamilmaytaq/base-labs-bobs-corn.git

# Ingresar al directorio del repositorio
cd base-labs-bobs-corn
```

---

## 🖥️ Configuración y Ejecución del Backend

### 2️⃣ Instalar dependencias del Backend
```sh
cd base-labs-backend
npm install
```

### 3️⃣ Crear el archivo `.env` en **backend**
Crea un archivo `.env` en el directorio `backend/` y agrega las siguientes variables:
```ini
DATABASE_URL=postgresql://admin:5134yamil@localhost:5432/base-labs-case
PORT=4000

# Configuración de compra
PURCHASE_QUANTITY=1
PURCHASE_COOLDOWN_MINUTES=1
PURCHASE_COOLDOWN_SECONDS=0
MAX_ATTEMPTS=3
```

📌 **Explicación de variables:**
- `PURCHASE_QUANTITY`: Cantidad maxima de compras permitidas antes de activar el cooldown.
- `PURCHASE_COOLDOWN_MINUTES`: Minutos de espera desde la última compra exitosa.
- `PURCHASE_COOLDOWN_SECONDS`: Segundos adicionales de espera.
- `MAX_ATTEMPTS`: Numero maximo de intentos fallidos antes de bloquear temporalmente nuevas compras.

### 4️⃣ Iniciar la Base de Datos con Docker
```sh
cd base-labs-backend
docker-compose up -d
```
Esto levantará **PostgreSQL** y **pgAdmin** en contenedores Docker.

Ejecutar las migraciones de prisma con el siguiente comando.
```sh
npx prisma migrate dev --name purchase-init
```

### 5️⃣ Ejecutar el Servidor Backend
```sh
npm run dev
```
El servidor estará disponible en: **[http://localhost:4000](http://localhost:4000)**

---

## 🎨 Configuración y Ejecución del Frontend

### 6️⃣ Instalar dependencias del Frontend
```sh
cd ../base-labs-frontend
npm install
```

### 7️⃣ Crear el archivo `.env` en **frontend**
Crea un archivo `.env` en el directorio `frontend/` y agrega las siguientes variables:
```ini
API_BASE_URL=http://localhost:4000/api
COOKIE_EXPIRATION_DAYS=365
COOKIE_SECURE=false
```
📌 **Explicación de variables:**
- `API_BASE_URL`: Dirección base de la API Backend.
- `COOKIE_EXPIRATION_DAYS`: Tiempo de duración del `userId` en las cookies.
- `COOKIE_SECURE`: Si `true`, las cookies solo se enviarán en conexiones seguras (HTTPS).

### 8️⃣ Ejecutar el Servidor Frontend
```sh
npm run dev
```
El frontend estará disponible en: **[http://localhost:3000](http://localhost:3000)**

---

## 📌 Notas Adicionales
- **Para detener los contenedores Docker:**
  ```sh
  cd base-labs-backend
  docker-compose down
  ```
- **Para reconstruir el backend:**
  ```sh
  docker-compose up --build -d
  ```
- **Para ver los logs del backend (postgres, pgAdmin):**
  ```sh
  docker logs -f base-labs-backend
  ```

---

## 🎯 Contacto y Soporte
Si tienes algún problema con la instalación o ejecución, por favor contacta al usuario que subio el repositorio.


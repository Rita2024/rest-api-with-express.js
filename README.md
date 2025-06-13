# Express.js REST API - MongoDB & JWT Auth

## Features

- Modular, scalable structure
- MongoDB (Mongoose) integration
- JWT Authentication (register/login)
- All `/items` routes protected with JWT
- Centralized error handling
- Validation middleware

## Setup

1. **Install dependencies**

    ```sh
    npm install
    ```

2. **Configure your `.env` file**

    ```
    MONGODB_URI=mongodb://localhost:27017/your_db_name
    JWT_SECRET=your_jwt_secret_here
    PORT=3000
    ```

3. **Start MongoDB** (if not already running):

    ```sh
    mongod
    ```

4. **Run the app**

    ```sh
    npm start
    ```

## API

### Auth

- `POST /auth/register`  
  `{ "username": "myuser", "password": "mypassword" }`

- `POST /auth/login`  
  `{ "username": "myuser", "password": "mypassword" }`  
  Returns: `{ "token": "..." }`

### Items (all require Bearer token in `Authorization` header)

- `GET /items`
- `GET /items/:id`
- `POST /items`  
  `{ "name": "Item", "description": "Desc" }`
- `PUT /items/:id`  
  `{ "name": "New Name", "description": "New Desc" }`
- `DELETE /items/:id`

---

## Example Usage

1. Register a user:

    ```sh
    curl -X POST http://localhost:3000/auth/register \
      -H "Content-Type: application/json" \
      -d '{"username":"testuser","password":"testpass"}'
    ```

2. Login and get JWT token:

    ```sh
    curl -X POST http://localhost:3000/auth/login \
      -H "Content-Type: application/json" \
      -d '{"username":"testuser","password":"testpass"}'
    ```

3. Use the token to access items:

    ```sh
    curl http://localhost:3000/items \
      -H "Authorization: Bearer YOUR_TOKEN_HERE"
    ```

---

## Project Structure

- `src/models/` — Mongoose models
- `src/controllers/` — Route logic
- `src/routes/` — Express routers
- `src/middlewares/` — Custom middleware (auth, error handling)
- `src/utils/` — Validation
- `src/app.js`, `src/server.js` — App and entry point

---

## In-Memory Data Storage

This API uses an in-memory data store to manage items. All data is held in server memory and will be lost if the server restarts or stops. There is no external database connected in this implementation.
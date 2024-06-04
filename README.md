# MelodyVerse

MelodyVerse is a full-stack web application where users can sign up, log in, and view a list of posts. This project uses Node.js, Express.js, MongoDB, React.js, and JWT for authentication.

### Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Install backend dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `melodyverse-backend` directory and add the following:

    ```env
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    ```

4. **Run the backend server:**

    ```bash
    npm run dev
    ```

    The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install frontend dependencies:**

    ```bash
    npm install
    ```

3. **Run the frontend application:**

    ```bash
    npm start
    ```

    The frontend application will start on `http://localhost:3000`.

## API Endpoints

### Authentication

- **POST /api/auth/signup**

- **POST /api/auth/login**

- **GET /api/posts**

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Frontend:** React.js, Tailwind CSS, Axios

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

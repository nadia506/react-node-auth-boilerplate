# Boilerplate code for JWT Authentication

This repository is a boilerplate for implementing JWT authentication using React for the frontend, Node.js with Express for the backend, and MongoDB for database storage. It includes complete functionality for user registration, login, logout, and persistent authentication using Redux for state management.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Features

- **User Registration**: Allows users to sign up with email and password.
- **User Login**: Provides authentication using JWT upon successful login.
- **Persistent Authentication**: Uses Redux to manage user authentication state across sessions.
- **Validation**: Implements validation checks for user inputs and authentication processes.
- **Protected Routes**: protected routes for users who signed in.

## How to run locally

### Install backend dependencies

-cd backend

-npm install

### Install frontend dependencies

-cd frontend

-yarn install

### set up your own env variables in .env file

-MONGODB_URI = your-mongodb-uri

-JWT_SECRET = your-jwt-secret

### Run both frontend and backend

-backend: npm run dev

-frontend: yarn start

# Bookstore App

Welcome to the Bookstore App! This is a MERN (MongoDB, Express.js, React.js, Node.js) application for managing a bookstore. The backend is deployed on Render and the frontend is deployed on Netlify.

## Live Demo

You can access the live demo of the frontend here: [Bookstore App](https://bookstore-client.netlify.app/)

## Features

### Backend:

- Utilizes Node.js and Express.js to create the backend server.
- Implements RESTful API endpoints for CRUD (Create, Read, Update, Delete) operations on books.
- Uses MongoDB as the database to store book information.
- Includes validation for book data (e.g., title, author, year) to ensure consistency and integrity.
- Implements error handling and appropriate HTTP status codes for API responses.

### Frontend:

- Utilizes React.js to create the frontend interface.
- Implements a page to display a list of books fetched from the backend.
- Includes functionality to add new books via a form.
- Allows users to edit existing book information.
- Provides a feature to delete books.
- Ensures user-friendly interfaces with proper feedback messages for actions.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js
- **Deployment**: Render (Backend), Netlify (Frontend)

## Getting Started

To run this application locally or contribute to it, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/bookstore.git
2. Navigate to the project directory::

   ```bash
   cd client
   npm install

   cd backend
   npm install

3. Run both frontend and backend:
   
    ```bash
    # In the client directory
    npm start

    # In the server directory
    npm start
4. Access the application in your browser:
   http://localhost:3000


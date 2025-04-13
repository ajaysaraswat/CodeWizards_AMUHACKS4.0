# CodeWizards_AMUHACKS4.0

## Project Overview

CodeWizards_AMUHACKS4.0 is a **MERN stack project** designed to facilitate user interactions based on hobbies. Users can register, complete their profiles by specifying hobbies, and connect with others who share similar interests. The platform offers real-time features like online user indicators and video calling for seamless interaction.

---

## Features

### 1. **User Registration & Authentication**
- Users can register by providing a unique username, email, and password.
- Secure login and token-based authentication using JSON Web Tokens (JWT).

### 2. **Profile Management**
- Users complete their profiles by adding hobbies after login.
- Hobbies are used to calculate similarity percentages for user matchmaking.

### 3. **Hobby-Based User Matching**
- Users are sorted based on hobby similarity percentages.
- Users with similar hobbies appear at the top.
- Online users are highlighted with a green disk.

### 4. **Zero Similarity Users**
- Users with no hobby similarity are displayed in a separate section for visibility.

### 5. **Real-Time Video Calling**
- Users can send video call requests to online users.
- A video call interface is displayed upon acceptance, featuring:
  - Two video streams (caller and receiver).
  - Buttons to accept or end the call.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Other Tools & Libraries**:
  - bcrypt.js for password hashing
  - Joi for input validation
  - dotenv for environment variable management
  - Mongoose for MongoDB object modeling

---

## Project Structure

```
CodeWizards_AMUHACKS4.0/
├── backend/
│   ├── config/             # Database and environment configurations
│   ├── controllers/        # Backend logic for API routes
│   ├── models/             # Mongoose models
│   ├── routes/             # API route definitions
│   ├── .env                # Environment variables (ignored by Git)
│   ├── .gitignore          # Ignored files and directories
│   ├── package.json        # Backend dependencies and scripts
│   ├── server.js           # Entry point for the backend
├── frontend/
│   ├── public/             # Public assets for the frontend
│   ├── src/                # React application source code
│   ├── package.json        # Frontend dependencies and scripts
```

---

## Installation and Setup

### Prerequisites
- Node.js (v18 or later)
- MongoDB installed locally or an online MongoDB URI

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ajaysaraswat/CodeWizards_AMUHACKS4.0.git
   cd CodeWizards_AMUHACKS4.0
   ```

2. **Set up the backend**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file with the following content:
     ```
     PORT=5000
     NODE_ENV=development
     MONGODB_URI=mongodb://localhost:27017/AMUHACKS
     JWT_SECRET=your_jwt_secret
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Set up the frontend**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

4. **Access the application**:
   - Visit `http://localhost:3000` in your browser for the frontend.
   - The backend runs at `http://localhost:5000`.

---

## API Endpoints

### **Authentication Routes**
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login and receive a JWT token.

### **User Routes**
- Additional user-specific routes can be defined in the `routes` directory.

---

## Key Backend Files

### 1. **Database Connection (`config/db.js`)**
- Handles MongoDB connection using Mongoose.
- Reads the connection URI from the `.env` file.

### 2. **User Model (`models/User.js`)**
- Mongoose schema for `User` includes fields for username, email, password, and creation date.
- Passwords are hashed before saving using bcrypt.js.
- Includes a method to validate passwords.

### 3. **Authentication Controller (`controllers/authController.js`)**
- Handles user registration and login.
- Generates JWT tokens for authentication.

---

## Future Improvements

- **Enhanced Matching**: Incorporate additional parameters, such as location or age, for better matchmaking.
- **Notifications**: Add real-time notifications for video call requests.
- **UI/UX Enhancements**: Improve design and responsiveness for a better user experience.
- **Testing**: Add unit and integration tests for both the backend and frontend.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the **MIT License**.

---

## Contact

For any queries or feedback, feel free to open an issue in the repository.

--- 

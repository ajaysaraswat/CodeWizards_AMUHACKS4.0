#AMUHACKS 4.0 #CSSAMU #AMU

# CodeWizards_AMUHACKS4.0

## Project Overview

CodeWizards_AMUHACKS4.0 is a **MERN stack project** designed to facilitate user interactions based on hobbies. Users can register, complete their profiles by specifying hobbies, and connect with others who share similar interests. The platform offers real-time features like online user indicators and video calling for seamless interaction.

---

## Features

### 🔐 1. User Registration & Authentication
- Register with a **unique username, email, and password**.
- **JWT-based secure login system** ensures safe authentication.

### 👤 2. Profile Management
- Users complete their profiles by **adding hobbies**.
- Hobbies can be added:
  - **Manually**
  - Using **voice-to-text** from **sound recordings**.

### 🔎 3. Hobby-Based User Matching
- Users are **sorted based on hobby similarity percentage**.
- Higher similarity = Higher rank in the match list.
- **Online users** are indicated with a **green dot** for easy visibility.

### 🚫 4. Zero Similarity Users
- Users with **no hobby similarity** are displayed in a **separate section** to promote diverse interactions.

### 🎥 5. Real-Time Video Calling
- Send **video call requests** to online users.
- Once accepted, a **video call interface** is launched with:
  - **Two live video streams** (caller + receiver).
  - **Accept** and **End Call** buttons.

### 🔄 6. Random User Connection
- Option to **connect randomly** with any available user, enhancing social discovery.

### 💬 7. Real-Time Messaging
- Integrated **real-time chat system**:
  - Instant message delivery.
  - Live updates and status indicators.

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

## 🧠 Backend Architecture

### 1. **Database Connection (`config/db.js`)**
- Manages **MongoDB connection** using **Mongoose**.
- Fetches the connection URI from the **`.env`** file.
- Ensures the app exits gracefully if the database fails to connect.

---

### 2. **User Model (`models/User.js`)**
- Defines a **Mongoose schema** for user data:
  - `username`, `email`, `password`, `createdAt`, `hobbies`.
- **Password Security:**
  - Uses **bcrypt.js** to **hash passwords** before saving.
  - Includes a method to **validate entered passwords** during login.

---

### 3. **Authentication Controller (`controllers/authController.js`)**
- Manages:
  - **User registration**
  - **User login**
- On successful login/registration:
  - Returns a **JWT token** for secure session handling.
- Integrates a **vector-based hobby matching algorithm** to calculate **similarity percentages** between users.

---

### 4. **Real-Time Communication**
- Uses **WebSocket (Socket.IO)** for:
  - **Real-time messaging**
  - **User status updates (online/offline)**
  - **Video call signaling**
- Efficient handling of:
  - Incoming message delivery
  - Live typing indicators
  - Video call request/response

---

### 5. **Real-Time Messaging**
- Built with **Socket.IO** to enable:
  - **Instant chat delivery**
  - Message status updates (delivered/seen)
  - Real-time conversation threads between users

---

### 6. **Deployment**
- The backend is **deployed on [Render](https://render.com)** for:
  - Continuous deployment
  - Auto-scaling
  - Easy environment variable setup
- Frontend and backend are fully integrated for seamless real-time interaction.

---


---

## Future Improvements

- **Enhanced Matching**: Incorporate additional parameters, such as location or age, for better matchmaking.
- **Notifications**: Add real-time notifications for video call requests.
- **UI/UX Enhancements**: Improve design and responsiveness for a better user experience.
- **Testing**: Add unit and integration tests for both the backend and frontend.

---


## Contact

For any queries or feedback, feel free to open an issue in the repository.

--- 

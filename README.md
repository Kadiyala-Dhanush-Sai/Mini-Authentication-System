# 🔐 Full Stack Authentication App

A simple full stack web application that allows users to **register and login** using a React frontend and Node.js backend with MongoDB database.

---

## 🚀 Features

* 📝 User Signup (Register)
* 🔑 User Login Authentication
* ⚠️ Error Handling (Incorrect password / User not found)
* 🔄 Navigation using React Router
* 🌐 API communication using Axios
* 🗄️ Data stored in MongoDB

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Bootstrap (UI Styling)
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## 📁 Project Structure

```
project-root/
│
├── client/       # React frontend
│   ├── src/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│
├── server/       # Backend
│   ├── index.js
│   ├── models/
│       └── employee.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔗 API Endpoints

### ➤ Register User

```
POST /register
```

### ➤ Login User

```
POST /login
```


## ⚠️ Note

* Passwords are currently stored in plain text (for learning purpose only)
* Future improvements: password hashing (bcrypt), JWT authentication

---

## 🚀 Future Improvements

* 🔐 Secure authentication using JWT
* 🔒 Password hashing using bcrypt
* 🌍 Deployment (Vercel + Render + MongoDB Atlas)
* 🎨 Improved UI/UX

---

## 👨‍💻 Author

Kadiyala Dhanush Sai

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!


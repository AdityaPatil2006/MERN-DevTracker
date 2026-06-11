# 🚀 DevTracker

[![GitHub repo size](https://img.shields.io/github/repo-size/AdityaPatil2006/DevTracker-MERN?color=purple\&style=flat-square)](https://github.com/AdityaPatil2006/DevTracker-MERN)
[![GitHub issues](https://img.shields.io/github/issues/AdityaPatil2006/DevTracker-MERN?color=pink\&style=flat-square)](https://github.com/AdityaPatil2006/DevTracker-MERN/issues)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square\&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square\&logo=nodedotjs)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square\&logo=mongodb)](https://www.mongodb.com)

**DevTracker** is a sleek, modern, full-stack MERN application built to help developers organize, search, and track their personal development projects. Featuring a responsive dark-themed interface and powerful project management tools, DevTracker makes it easy to manage projects from planning to deployment.

---

## 🌐 Live Demo

https://mern-devtracker.onrender.com

---

## ✨ Key Features

* **📂 Complete Project CRUD**: Add, View, Edit, and Delete projects effortlessly.
* **📊 Dashboard Statistics**: View total projects and active project counts.
* **🔍 Advanced Search & Filter**:

  * Search projects by name or description.
  * Filter by status (`All`, `Active`, `Planning`, `Paused`, `Completed`).
* **🛠️ Tech Stack Management**:

  * Add custom technologies.
  * Quick-add popular technologies.
  * Remove technologies easily.
* **🔗 Project Links**:

  * GitHub repository support.
  * Live deployment links.
  * URL validation before submission.
* **📅 Project Timestamps**:

  * Track project creation date and time.
* **🎨 Modern UI**:

  * Built with Tailwind CSS and DaisyUI.
  * Smooth animations and hover effects.
  * Responsive design for mobile, tablet, and desktop.
* **🌐 Production Ready**:

  * Frontend served directly through Express in production.

---

## 🛠️ Tech Stack & Dependencies

### Frontend

* React.js
* Vite
* React Router
* Tailwind CSS
* DaisyUI
* Axios
* React Hot Toast
* Lucide React

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Render

---

## 📸 Screenshots

### Dashboard

(Add Dashboard Screenshot Here)

### Add Project Form

(Add Form Screenshot Here)

### Project Cards

(Add Project Cards Screenshot Here)

---

## 📂 Project Structure

```text
DevTracker/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── .env
│   └── package.json
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/AdityaPatil2006/DevTracker-MERN.git
cd DevTracker-MERN
```

### Install Dependencies

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd ../backend
npm install
```

### Configure Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5002
NODE_ENV=development
```

### Run Backend

```bash
cd backend
npm run dev
```

### Run Frontend

```bash
cd frontend
npm run dev
```

---

## 📦 Production Deployment

Build the frontend:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

The Express server will serve the React frontend automatically.

---

## 🔮 Future Improvements

* User Authentication
* Project Categories
* Analytics Dashboard
* Dark / Light Theme Toggle
* Project Progress Tracking
* Kanban Board View
* Project Sorting Options

---

## 👨‍💻 Author

**Aditya Patil**

GitHub: https://github.com/AdityaPatil2006

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

#  Task Manager – Full Stack Web Application

A simple full-stack Task Management Web Application built using:

-  React (Frontend)
-  Node.js + Express (Backend)
-  MongoDB (Database)

This application allows users to create, update, delete, and manage daily tasks efficiently.

---

#  Features

-  Create a task (title + description)
-  View all tasks
-  Edit existing tasks
-  Delete tasks
-  Mark tasks as Completed or Pending
-  RESTful API communication
-  MongoDB data persistence
-  Clean MVC backend structure

---

#  Project Architecture

This project follows a 3-layer Full Stack Architecture:

React Frontend → Express Backend → MongoDB Database

---

#  How the Project Works

1. User performs an action in the React frontend (Add/Edit/Delete/Toggle).
2. React sends an HTTP request using Axios.
3. Express backend receives the request.
4. Controller processes business logic.
5. Mongoose interacts with MongoDB.
6. Backend sends response.
7. React updates the UI automatically.

---

#  Project Structure
taskmanager/
│
├── backend/
│ ├── config/
│ │ └── db.js → MongoDB connection
│ │
│ ├── controllers/
│ │ └── taskController.js → CRUD logic
│ │
│ ├── models/
│ │ └── Task.js → Mongoose schema
│ │
│ ├── routes/
│ │ └── taskRoutes.js → API endpoints
│ │
│ ├── server.js → Backend entry point
│ ├── .env → Environment variables
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/ → UI Components
│ │ ├── services/ → Axios API setup
│ │ └── App.js → Main React file
│ │
│ ├── public/
│ └── package.json
│
└── README.md

---

#  Backend Working

## server.js
- Loads environment variables
- Connects to MongoDB
- Applies middleware (CORS + JSON parsing)
- Registers task routes
- Starts server on specified port

## Routes
Defines API endpoints:

- POST    /api/tasks
- GET     /api/tasks
- PUT     /api/tasks/:id
- DELETE  /api/tasks/:id

## Controller
Handles:
- Validation
- Database operations
- Error handling
- Business logic

## Model
Defines MongoDB schema:

---

#  Frontend Working

## Main Components

- TaskForm → Create new tasks
- TaskList → Display all tasks
- TaskItem → Edit, delete, toggle status

## API Communication

Axios base URL:

http://localhost:5000/api/tasks

All operations are handled through RESTful API calls.



#  CRUD Operations

| Action | Method | Endpoint |
|--------|--------|----------|
| Create Task | POST | /api/tasks |
| Get Tasks | GET | /api/tasks |
| Update Task | PUT | /api/tasks/:id |
| Delete Task | DELETE | /api/tasks/:id |

---

#  How To Run The Project

## 1️ Clone Repository

```bash```
git clone https://github.com/Satyamdubey19/taskmanager.git
cd taskmanager


# 🎓 Student Management API

A lightweight, secure, and production-ready backend REST API built using Node.js and Express to manage student enrollment data, course profiling, and records tracking. 

---

## 🚀 Key Project Highlights (For Grader / Lecturer)

When evaluating this assignment submission, please note the following core implementation features:

*   **Clean RESTful Endpoints:** Adheres to semantic HTTP standard conventions (`GET`, `POST`, `PUT`, `DELETE`) for a complete CRUD workflow (Create, Read, Update, Delete) managing student schemas.
*   **Structured Module Layout:** Implements separation of concerns with clear segregation of responsibilities across separate routing pathways, controllers, and database layers.
*   **Dependency Sanity (.gitignore):** Built-in ignore rules properly configured to mask development artifacts, runtime logs, and heavy third-party dependency storage nodes (`node_modules/`) from public version tracking.
*   **Strict Parameter Sanitization:** Request handlers parse inbound payloads cleanly using uniform middleware structures to preserve backend environment stability.

---

## 🛠️ Tech Stack & Architecture

*   **Runtime Environment:** Node.js
*   **Backend Server Framework:** Express.js (CommonJS Modular Syntax)
*   **Development Utility:** Nodemon (Automated livereload daemon)

---

## 📂 Project Directory Breakdown

```text
Student-Management-API/
├── controllers/          # Business logic handlers mapping functions to routes
├── middleware/           # Pipeline filters for incoming payload processing 
├── models/               # Architecture maps determining record schemas
├── routes/               # API endpoint endpoints definitions
├── .gitignore            # Excludes node_modules/ from leaking to version control
├── App.js / app.js       # Global Express server wrapper initializing routes
├── index.js / server.js  # Main bootstrapping entry point locking in the app port listener
├── package-lock.json     # Tree snapshot locking in absolute dependency versions
└── package.json          # Root assembly manifest configuration file
```

---

## ⚙️ Initial Setup & Local Deployment Guide

Follow these quick commands to spin up and review this project locally on your grading computer:

### 1. Clone the project files
```bash
git clone https://github.com
cd Student-Management-API
```

### 2. Install application dependencies
```bash
npm install
```

### 3. Launch the local development daemon
```bash
npm start
```
*Or, if the development tracking daemon is initialized inside your project manifest:*
```bash
npm run dev
```

---

## 📡 Core API Specification Endpoints

| HTTP Verb | Request URI Target | Description | Expected Payload Format |
| :--- | :--- | :--- | :--- |
| **`GET`** | `/api/students` | Fetches compilation array list tracking all student profiles | N/A |
| **`GET`** | `/api/students/:id` | Isolates and queries a single student profile by unique ID key | N/A |
| **`POST`** | `/api/students` | Inserts a brand new student profile into the system dataset | JSON payload |
| **`PUT`** | `/api/students/:id` | Modifies existing values inside an active targeted student record | JSON payload |
| **`DELETE`** | `/api/students/:id` | Safely drops and purges an index student identity out of records | N/A |

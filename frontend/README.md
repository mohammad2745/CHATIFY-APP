# Chatify App

A modern real-time chat application built with React, Vite, Node.js, Express, MongoDB, and Socket.IO.

The project follows a full-stack architecture with separate frontend and backend services.

---

# Tech Stack

## Frontend

- React 19
- Vite
- Zustand
- Socket.IO Client
- Tailwind CSS
- DaisyUI

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication

---

# Project Structure

```bash
chatify-app/
├── backend/
├── frontend/
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd chatify-app
```

---

# Backend Setup

```bash
cd backend
npm install
```

## Run Backend Development Server

```bash
npm run dev
```

## Start Production Server

```bash
npm start
```

---

# Frontend Setup

```bash
cd frontend
npm install
```

## Run Frontend Development Server

```bash
npm run dev
```

## Build Frontend

```bash
npm run build
```

---

# Environment Variables

## Backend `.env`

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RESEND_API_KEY=your_resend_api_key
CLIENT_URL=http://localhost:5173
```

---

# Third-Party Packages

# Backend Dependencies

## express

### Usage

Creates REST APIs and handles HTTP requests/responses.

### Why Needed

Express simplifies backend development and routing management.

---

## mongoose

### Usage

Connects Node.js application with MongoDB.

### Why Needed

Provides schema-based database modeling and easier database operations.

---

## jsonwebtoken

### Usage

Creates and verifies JWT access tokens.

### Why Needed

Used for secure user authentication and protected routes.

---

## bcryptjs

### Usage

Hashes and compares passwords.

### Why Needed

Protects user passwords before storing them in the database.

---

## socket.io

### Usage

Enables real-time bidirectional communication.

### Why Needed

Required for instant messaging, typing status, and live updates.

---

## cookie-parser

### Usage

Parses cookies from incoming requests.

### Why Needed

Helps manage authentication tokens and session-related data.

---

## cors

### Usage

Allows cross-origin requests.

### Why Needed

Enables frontend and backend communication from different origins.

---

## dotenv

### Usage

Loads environment variables from `.env` file.

### Why Needed

Keeps sensitive configuration secure and outside source code.

---

## cloudinary

### Usage

Uploads and manages media files.

### Why Needed

Used for profile images, chat media, and cloud storage.

---

## resend

### Usage

Sends transactional emails.

### Why Needed

Useful for OTP verification, welcome emails, and password reset.

---

## @arcjet/node

### Usage

Provides API protection and security features.

### Why Needed

Helps prevent abuse, spam, and malicious traffic.

---

## @arcjet/inspect

### Usage

Debugging and monitoring Arcjet security rules.

### Why Needed

Helps inspect request security behavior during development.

---

## nodemon

### Usage

Automatically restarts backend server on file changes.

### Why Needed

Improves development workflow and productivity.

---

# Frontend Dependencies

## react

### Usage

Builds user interfaces using components.

### Why Needed

Core library for frontend development.

---

## react-dom

### Usage

Renders React components into the browser DOM.

### Why Needed

Required for web application rendering.

---

## react-router

### Usage

Handles frontend routing and navigation.

### Why Needed

Enables multi-page SPA behavior without page reload.

---

## axios

### Usage

Makes HTTP requests to backend APIs.

### Why Needed

Simplifies API communication and error handling.

---

## zustand

### Usage

Manages global application state.

### Why Needed

Provides lightweight and simple state management.

---

## socket.io-client

### Usage

Connects frontend to Socket.IO backend.

### Why Needed

Required for real-time messaging functionality.

---

## react-hot-toast

### Usage

Displays toast notifications.

### Why Needed

Improves user experience with instant feedback messages.

---

## lucide-react

### Usage

Provides modern SVG icons.

### Why Needed

Used for clean and customizable UI icons.

---

# Frontend Development Dependencies

## vite

### Usage

Frontend build tool and development server.

### Why Needed

Provides fast startup and optimized production builds.

---

## @vitejs/plugin-react

### Usage

Adds React support to Vite.

### Why Needed

Required for JSX transformation and React Fast Refresh.

---

## tailwindcss

### Usage

Utility-first CSS framework.

### Why Needed

Speeds up responsive UI development.

---

## daisyui

### Usage

Tailwind CSS component library.

### Why Needed

Provides prebuilt UI components and themes.

---

## postcss

### Usage

Processes CSS transformations.

### Why Needed

Required by Tailwind CSS build pipeline.

---

## autoprefixer

### Usage

Adds vendor prefixes to CSS.

### Why Needed

Improves browser compatibility.

---

## eslint

### Usage

Checks code quality and coding standards.

### Why Needed

Helps maintain clean and consistent code.

---

## eslint-plugin-react-hooks

### Usage

Validates React Hooks rules.

### Why Needed

Prevents incorrect hook usage.

---

## eslint-plugin-react-refresh

### Usage

Supports React Fast Refresh linting.

### Why Needed

Improves Vite React development experience.

---

## @eslint/js

### Usage

Base ESLint JavaScript configuration.

### Why Needed

Provides recommended linting rules.

---

## globals

### Usage

Defines global variables for ESLint.

### Why Needed

Prevents undefined variable lint errors.

---

## @types/react

### Usage

Type definitions for React.

### Why Needed

Improves editor IntelliSense and type support.

---

## @types/react-dom

### Usage

Type definitions for React DOM.

### Why Needed

Provides typing support for React rendering APIs.

---

# Features

- Real-time messaging
- Authentication with JWT
- Secure password hashing
- Socket.IO live communication
- Image upload support
- Toast notifications
- Global state management
- Responsive UI
- REST API architecture

---

# Production Build

## Build Frontend

```bash
npm run build
```

## Start Backend

```bash
npm start
```

---

# Source References

Backend package configuration: fileciteturn1file0L1-L29

Frontend package configuration: fileciteturn1file1L1-L36

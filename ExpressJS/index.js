// What is Express.js?

// A minimal and flexible Node.js framework used to build web servers and APIs.
// It simplifies tasks like routing, handling requests, sending responses, and managing middleware.

// Key points:

// Built on top of Node.js
// Lightweight
// Fast development
// Easy to scale and maintain

// Why Use Express.js?

// Reduces boilerplate code compared to raw Node.js http module
// Better routing system
// Middleware support (logging, authentication, validation, etc.)
// Large ecosystem of third-party packages
// Easy integration with databases and frontend frameworks

// Installing Express.js (Setup)

// npm install
// npm install nodemon --save-dev

// Step 1: Initialize npm
// npm init -y

// Step 2: Install Express.js
// npm install express
// npm install dotenv

// Step 3: Install nodemon for development
// npm install nodemon --save-dev


// Creating a Basic Express Server

const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});

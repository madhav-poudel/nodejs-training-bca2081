// Firstly Install the following commands:

// npm init -y
// npm install
// npm install nodemon --save-dev
// npm install express
// npm install dotenv
// npm install -g express



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

// const express = require("express");
// require("dotenv").config();

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Server running...");
// });



// Basic Routing in Express.js
// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact form submitted");
// });


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// Middleware in Express.js

// Middleware functions are functions that have access to the request object (req),
//  the response object (res), and the next middleware function in the 
// application request-response cycle. They can perform tasks like logging, 
// authentication, parsing request bodies, etc.

// Middleware can be application-level or router-level.

// Middleware can be used for:
// Logging requests
// Parsing request bodies
// Handling authentication
// Serving static files
// Error handling

// // Example of Middleware

// const express = require("express");
// const app = express();

// // Middleware to log requests
// app.use((req, res, next) => {
//   console.log(`${req.method} request for ${req.url}`);
//   next(); // Pass control to the next middleware function
// });

// // Route handler
// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// GET Request

// What GET is used for:
// Fetch data from the server
// Show pages, list items, get user info
// Browser can call GET easily

// Example of GET Request

// const express = require("express");
// const app = express();

// app.get("/user", (req, res) => {
//   res.send("User data fetched");
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


// POST Request

// What POST is used for:
// Send data to the server
// Create new resources, submit forms, upload files
// Not cached by browsers

// const express = require("express");
// const app = express();
// const port = 5000;

// app.use(express.json()); // for JSON body
// app.use(express.urlencoded({ extended: true })); // for form data

// app.post("/contact", (req, res) => {
//   const { name, email } = req.body;
//   res.send(`Received: Name = ${name}, Email = ${email}`);
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const express = require("express");
// const app = express();
// const port = 5000;

// // To read JSON body (Postman raw -> JSON)
// app.use(express.json());

// // To read form data (Postman x-www-form-urlencoded)
// app.use(express.urlencoded({ extended: true }));

// // POST Route
// app.post("/contact", (req, res) => {
//   const { name, email } = req.body;

//   res.send({
//     message: "Data received successfully!!",
//     name: name,
//     email: email
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



// // // GET Request with Query Params and URL Params
// const express = require("express");
// const app = express();
// const port = 5000;

// // Simple GET
// app.get("/info", (req, res) => {
//   res.send("Server is running.");
// });
// // GET with Query Params
// app.get("/user", (req, res) => {
//   const { name, age } = req.query;

//   res.send(
//     `Query Received\nName: ${name}\nAge: ${age}`
//   );
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });




// Advanced Routing in ExpressJS

//  Advanced routing means creating cleaner, modular, and more flexible routes using route 
// parameters, query params, and express.Router().
 
// const express = require("express");
// const app = express();

// // Parse JSON (not needed for this route but good practice)
// app.use(express.json());

// // Route parameter example
// app.get("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID is: ${userId}`);
// });

// // Start server
// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });


// Middleware in ExpressJS
// Middleware = a function that runs between request and response.
// Used for: logging, authentication, validation, parsing, errors, etc.

// Types of Middleware:
// 1. Application Level middleware
// 2. Custom middleware
// 3.Route-level & App-level middleware
// 4. Error-handling middleware

// Application Level Middleware
// Middleware that runs on every request.
// Used for logging, authentication, parsing, etc.
// const express = require("express");
// const app = express();

// // Simple middleware
// app.use((req, res, next) => {
//   console.log("Middleware works!");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

// app.listen(5000, () => {
//   console.log("Server started at http://localhost:5000");
// });



// Custom Middleware

// Custom middleware is a middleware you create yourself to perform a specific task 
// (logging, checking, validation, authentication, etc.)
// It is written as a function and used with app.use() or directly in routes.

// //Example of Custom Middleware
// const express = require("express");
// const app = express();

//  function myMiddleware(req, res, next) {
//   console.log("This is my custom middleware");
//   next();
// }
// app.use(myMiddleware);

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.listen(5000, () => {
//   console.log("Server started at http://localhost:5000");
// });




// 3. Error Handling Middleware

// Error-handling middleware is used to catch and handle errors in Express 
// so that the server does not crash and the user gets a proper message.

// Uses:
// Prevents server from crashing when an error occurs
// Sends a proper and user-friendly error message to the client
// Handles all errors from one central place
// Helps in debugging by logging error details
// Improves application security by hiding internal errors
// Allows sending correct HTTP status codes (400, 500, etc.)

// Commonly used HTTP Status Codes:
// 200 - OK - Request Successful
// 201 - Created - Resource Created Successfully
// 400 - Bad Request - Invalid Request
// 401 - Unauthorized - Authentication Required
// 403 - Forbidden - Access Denied
// 404 - Not Found - Resource Not Found
// 500 - Internal Server Error - Server Error
// 503 - Service Unavailable - Server Overloaded or Down


// Example of Error Handling Middleware
// const express = require("express");
// const app = express();

// app.get("/", (req, res, next) => {
//   // const error = new Error("Something went wrong");
//   next("Something went wrong");
// // next(error);
// });
// app.use((err, req, res, next) => {
//   console.log("Error:", err.message);
//   res.send("Error occurred!");
// });

// app.listen(5000, () => {
//   console.log("Server started http://localhost:5000");
// });




// 4. Route-level & App-level middleware

// App Level Middleware
// App-level middleware is applied to the whole Express application. 
// It runs on every request that comes to the server, regardless of the route.

// Where it is used:
// Logging requests
// Authentication checks for all routes
// Parsing JSON or form data globally
// Handling CORS or global headers

// Route-level Middleware
// Route-level middleware is applied to specific routes only. 
// It runs only when that route is called.

// Where it is used:
// Authentication for a particular route
// Validating request data for a specific endpoint
// Route-specific logging or custom logic



// // Example of Route-level & App-level Middleware

// const express = require("express");
// const app = express();

// app.use((req, res, next) => {
//   console.log("App-level middleware");
//   next();
// });

// function routeMiddleware(req, res, next) {
//   console.log("Route-level middleware");
//   next();
// }

// app.get("/dashboard", routeMiddleware, (req, res) => {
//   res.send("Dashboard Page");
// });

// app.listen(5000, () => {
//   console.log("Server started");
// });


// Async/Await Middleware

// Async/Await middleware is used to wait for a task to finish before moving to the next step.


// Examples of Async/Await middleware.

const express = require ("express");
const app = express();

app.use(async(req, res, next)=>{
  console.log ("Middleware Started");

  await console.log ("Waiting task done");
  next();
});

app.get ("/", (req, res,)=>{
  res.send("Hello BCA Students");
});

app.listen(5000, ()=>{
  console.log ("Server Started");
});

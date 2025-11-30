// Definition of Node.js

// Node.js is a JavaScript runtime environment that allows JavaScript to run on the server-side.
// Unlike JavaScript that runs in the browser, Node.js can handle backend tasks, file operations, 
// network requests, and server logic.

// Key features:

// Event-driven and non-blocking I/O
// Uses Google V8 engine
// Lightweight and fast
// Supports npm (Node Package Manager) for installing packages




// // Example of a simple Node.js server:
// const http = require('http');

// // Create server
// const server = http.createServer((req, res) => {
//   res.end('Hello from Node.js server!');
// });

// // Start server on port 3000
// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


// What will happen if you run this code in Node.js?

const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello Node!');
});
console.log('Server running...');

// A) Server starts and responds to requests automatically
// B) Server is created but does not respond to any requests
// C) Code throws an error
// D) “Hello Node!” is printed in the console

// Answer: B) Server is created but does not respond to any requests
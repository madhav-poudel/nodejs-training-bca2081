// console.log("Hello World!");

// Variables in JavaScript
// let program = "HELLO";
// console.log(program);

// Constants in JavaScript
// const pi = 3.14;
// console.log(pi);

// Functions in JavaScript


// Guess The Output
// const x = 5;
// let y = 10;

// y = y + x;

// console.log("Final value of y is:", y);






// Guess The Output

// let x = 10;

// if (true) {
//     let x = 20;
//     console.log("Inside:", x);
// }
// console.log("Outside:", x);



// Guess The Output
// {
//     let y = 50;
// }

// console.log(y);


// Guess The Output
// let score = 88;
// let extraCredit = 5;

// if(score + extraCredit >= 95){
//     console.log("Grade: A+");
// }else if(score >= 85 && score < 95){
//     console.log("Grade: A");
// }else if(score >= 75 || extraCredit > 0){
//     console.log("Grade: B");
// }else{
//     console.log("Grade: C");
// }



// Function In JavaScript

// A function is a reusable block of code that performs a specific task. 
// It helps avoid repetition and makes code organized.


// Example:
// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 3));



// Create a function named doubleNumber that:

// Takes one number

// Returns the number multiplied by 2

// Print the result


// function doubleNumber(num) {
//   return num * 2;
// }
// console.log(doubleNumber(5));


// Create a function named isEven that:

// Takes one number

// Checks if the number is even

// Returns true if even, otherwise false

// Print the returned value


// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(6)); 
// console.log(isEven(7)); 




// Scope in JavaScript

// Scope means where your variable is allowed to live and where it can be used.
// Think of it like borders: some variables can travel everywhere, some can only stay inside their own area.




// let x = 10; // global

// function test() {
//   let y = 5; // local
//   console.log(x); // allowed
//   console.log(y); // allowed
// }

// console.log(x); // allowed
// console.log(y); // error (outside scope)







// Create:

// A global variable x = 5

// A function test()

// Inside it, create a local variable y = 10

// Print both x and y

// Outside the function, print only x

// Printing y should give an error




// let x = 5; // global

// function test() {
//   let y = 10; // local
//   console.log(x); // allowed
//   console.log(y); // allowed
// }

// test();

// console.log(x); // allowed
// console.log(y); // error



// Task:

// Create a global variable a = 20.

// Create a function showValues().

// Inside the function, create a local variable b = 30.

// Print both a and b inside the function.

// Outside the function, print only a.

// Try printing b outside the function and note what happens.




// Task:

// Create a global variable score = 50.

// Create a function updateScore().

// Inside the function, create a local variable score = 100.

// Print score inside the function.

// Outside the function, print the global score.

// Call the function twice and see what happens to the global score.




// let score = 50;

// function updateScore() {
//   let score = 100;
//   console.log("Inside function, score =", score);
// }

// updateScore(); 

// updateScore(); 

// console.log("Outside function, score =", score);



// Create a global variable points = 0.

// Create a function playGame() which does the following:

// Inside, create a local variable points = 50.

// Increment the global points by 10.

// Print both local and global points.

// Call playGame() twice.

// Outside the function, print the global points.

// Hint: This mixes local variable shadowing and updating global variable at the same time.


// Global variable
// let points = 0;

// function playGame() {
//   // Local variable shadows the global one
//   let points = 50;

//   // Update global variable directly by referring to its name
//   globalPoints += 10;

//   console.log("Inside function, local points =", points);   // 50
//   console.log("Inside function, global points =", globalPoints); // 10, 20, etc.
// }

// // Use a separate variable to track global updates
// let globalPoints = points;
// First call
// playGame(); 
// Output:
// Inside function, local points = 50
// Inside function, global points = 10

// Second call
// playGame(); 
// Output:
// Inside function, local points = 50
// Inside function, global points = 20

// Outside function
// console.log("Outside function, global points =", globalPoints); // 20




// Synchronous JavaScript Example
// Code runs line-by-line.
// Next line waits for the previous line to finish.

// Example:

// console.log("Start");

// for (let i = 1; i <= 3; i++) {
//     console.log("Counting:", i);
// }
// console.log("End");


// Asynchronous JavaScript Example

// Uses setTimeout → code does NOT wait.
// Other lines continue running while the timer works in background.


// console.log("Start");
// setTimeout(() => {
//     console.log("This prints after 2 seconds");
// }, 2000);

// console.log("End");


// Guess the Output
// let num = 1;
// setTimeout(() => {
//     num = 5;
// }, 10);
// setTimeout(() => {
//     console.log("A:", num);
// }, 0);

// console.log("B:", num);


// Guess the Output
// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// setTimeout(() => {
//     console.log("C");
// }, 50);

// console.log("D");



// Task (Asynchronous JS – setTimeout & order confusion)

// You have four messages: "Step 1", "Step 2", "Step 3", "Step 4".

// Requirements:

// "Step 1" prints immediately.

// "Step 2" prints after 0 ms using setTimeout.

// "Step 3" prints after 500 ms.

// "Step 4" prints after "Step 2" but before "Step 3" without changing 
// the existing setTimeouts, only by adding one extra setTimeout.



// console.log("Step 1");

// setTimeout(() => {
//     console.log("Step 2");
// }, 0);

// setTimeout(() => {
//     console.log("Step 3");
// }, 500);

// // Extra setTimeout to print Step 4 after Step 2 but before Step 3
// setTimeout(() => {
//     console.log("Step 4");
// }, 0);


// Task:
// Print messages "A", "B", "C", "D" in this tricky order:

// "A" prints immediately.

// "B" prints after 0 ms.

// "C" prints after "B" but before "D".

// "D" prints last after 50 ms.


// Callback in JavaScript
// A callback is a function passed as an argument to another function and 
// executed inside it to perform a task.

// Callbacks are commonly used in asynchronous operations such as setTimeout, 
// file reading, or API calls.


// Example Without callback
// function greet(name) {
//     console.log("Hello, " + name);
// }
// function askQuestion() {
//     console.log("How are you?");
// }
// // Called separately
// greet("User");
// askQuestion();



// // With callback
//  function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }
// function askQuestion() {
//     console.log("How are you?");
// }
// greet("User", askQuestion);



// Promise in JavaScript
// A Promise is an object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.

// It helps manage asynchronous tasks in a cleaner way than callbacks.

// A Promise has three states:
// Pending – initial state, operation not finished.
// Fulfilled – operation completed successfully.
// Rejected – operation failed.

// // Create a simple promise
// let promise = new Promise((resolve, reject) => {
//     let taskDone = true; // change to false to see rejection
//     if(taskDone){
//         resolve("Task is done!");
//     } else {
//         reject("Task failed!");
//     }
// });

// // Using the promise
// promise
//     .then((message) => {
//         console.log(message); // runs if resolve() is called
//     })
//     .catch((error) => {
//         console.log(error);   // runs if reject() is called
//     });






// Async/Await in JavaScript

// async makes your function wait-friendly.
// It means the function can use await, and it automatically returns a Promise.

// Await
// await tells JavaScript:
// “Stop here until this work is finished.”
// (But only works inside an async function.)


// async function test() {
//     console.log("1");

//     await new Promise(r => setTimeout(r, 1000)); // waits here

//     console.log("2");
// }

// test();




// Task:
// Create an async function greetUser.
// Inside it, print "Hello" first.
// Then await a promise that resolves immediately with "Welcome!".
// Finally, print the resolved message.



// What is Error Handling?
// Error handling is how a program deals with mistakes or problems that happen while
//  it’s running. Instead of crashing, the program can catch the error and respond 
// safely.


// 1. Try-Catch
// try → code that might cause an error goes here.
// catch → what to do if an error happens.


// 2. Finally
// finally always runs, no matter if there’s an error or not.
// Useful for cleanup (closing files, stopping timers).



// 3. Throwing Errors
// You can create your own error when something is wrong using throw.


// 4. Promise Error Handling
// For asynchronous code:
// .catch() handles promise errors
// With async-await, use try-catch.


// 5. Error Types
// Common JavaScript errors:
// Error → general error
// TypeError → wrong type (like number + string)
// ReferenceError → variable doesn’t exist



// Example of Try-Catch-Finally
function divide(a, b) {
    try {
        if (b === 0) throw "Cannot divide by zero!"; // Throw error if b is 0
        let result = a / b;
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error); // Handle the error
    } finally {
        console.log("Division attempt finished."); // Always runs
    }
}









// // Test cases
// divide(10, 2); // Works fine
// divide(10, 0); // Error handled



// Task:
// Create a function checkNumber(num) that:
// Throws an error "Number must be positive!" if num < 0.
// Otherwise, returns the number.
// Create another function getData(num) that:
// Uses try-catch-finally.
// Calls checkNumber(num) and prints "Valid number: " if no error.
// In catch, prints "Error caught: " followed by the error.
// In finally, prints "Check finished.".
// Test your function with:
// getData(5) → should print "Valid number: 5" and "Check finished.".
// getData(-3) → should print "Error caught: Number must be positive!" and "Check finished.".


// Solution:

// Function that may throw an error
// function checkNumber(num) {
//     if (num < 0) throw "Number must be positive!";
//     return num;
// }

// // Function to handle errors
// function getData(num) {
//     try {
//         let validNumber = checkNumber(num);
//         console.log("Valid number:", validNumber);
//     } catch (err) {
//         console.log("Error caught:", err);
//     } finally {
//         console.log("Check finished.");
//     }
// }
// // Test cases
// getData(5);   // Valid number: 5
// getData(-3);  // Error caught: Number must be positive!




// What are Modules?

// Modules are separate files of code that can be imported and reused in other files.

// Helps organize code better.
// Avoids repeating code.
// Makes large projects easier to manage.

// Exporting: Share code (functions, variables, classes) from a module.
// Importing: Use code from another module. 





// Scopes

// Scope defines where a variable can be accessed.
// Types:
// Global Scope: Accessible anywhere.
// Function Scope: Accessible only inside a function.
// Block Scope: Accessible only inside { } (let, const).








// Examples:

//  let a = 100; 
// const b = 200;



function test() {
 let a = 10; 
const b = 20;
}


console.log(a); 
console.log(b); 


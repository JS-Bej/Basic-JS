// Function to log the sum of two numbers
function myFunction(a, b) {
    console.log("Sum: " + (a + b));
}

// Function to return the sum of two numbers
function sum(num1, num2) {
    let result;
    result = num1 + num2;
    return result;
}

// Call the functions
myFunction(5, 3); // Logs: Sum: 8
console.log(sum(2, 4)); // Logs: 6

// Anonymous function to calculate the sum of two numbers
let x = function (a, b) { return a + b; };
let result = x(1, 2); // Stores 3 in result

// Recursive function to calculate the factorial of a number
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(3)); // Logs: 6

// Arrow function to calculate the sum of two numbers
const arrowSumFunction = (num1, num2) => num1 + num2;
let result1 = arrowSumFunction(3, 4); // Stores 7 in result1
console.log(result1); // Logs: 7

//////////////////////////////////////////////////////

// Demonstrates nested functions and variable scope
var u = 10; // Global variable
function foo() {
    var v = 20; // Local variable in foo
    function bar() {
        var z = 15; // Local variable in bar
        var output = u + v + z; // Sum of all variables
        return output;
    }
    return bar(); // Calls bar and returns its result
}
console.log(foo()); // Logs: 45

// Arrow function with a default parameter
let funct = (a = 3) => console.log(a);
funct(); // Logs: 3
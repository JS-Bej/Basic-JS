// Using eval
console.log("hello");
console.log(eval("2+2"));

// Variable declarations
var first_name = "Danilo";
console.log(first_name);

let last_name;
last_name = "Gutierrez";

const secondLastName = "Gonzales";

let fullName1 = "Juan ...";
let fullName2 = "David ...";
console.log(fullName1);
console.log(fullName2);

// Boolean, Symbol, and undefined
var flag = true;
var symbol = Symbol("My symbol");
var c = undefined;

// Null
var y = null;

// Array
var cars = ['BMW', "Audi", 'Volvo'];
// Object
var person = {
    name: "Daniel",
    lastName: "Gonzales",
    favoriteColor: "Blue"
  };
  
  // Function
  function who() {
    console.log(person);
  }
  who();
  
  // Class
  class Group {
    constructor(number, leader) {
      this.number = number;
      this.leader = leader;
    }
  }


// Arithmetic operations
let a = 3;
let b = 2;
let z = a + b;
console.log("Addition: " + z);

z = a - b;
console.log("Subtraction: " + z);

z = a * b;
console.log("Multiplication: " + z);

z = a / b;
console.log("Division: " + z);

z = a % b;
console.log("Modulo: " + z);

z = a ** b;
console.log("Exponentiation: " + z);

// Undefined variables
let var1, var2;
console.log(var1);

// Pre-increment
let i = 0;
console.log(++i);

// Post-increment
console.log(i++);
console.log(i);

// Pre-decrement
let p = 1;
console.log(--p);

// Post-decrement
console.log(p--);
console.log(p);

// Ternary operator examples
let result1=5
result1 = (result1 > 2) ? "true" : "false";
console.log(result1);

let result2=5
result2 = (result2 < 3) ? "true" : "false";
console.log(result2);

let result3 = 10
result2 = (result3 % 2 == 0) ? "Even" : "Odd";
console.log(result3);
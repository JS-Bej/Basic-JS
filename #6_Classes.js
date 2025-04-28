// Define a Person class
class Person {
    // Constructor to initialize firstName and lastName
    constructor(firstName, lastName) {
        this.firstName = firstName; // Use the setter to initialize firstName
        this.lastName = lastName;   // Use the setter to initialize lastName
    }

    // Getter for firstName
    get firstName() {
        return this._firstName;
    }

    // Setter for firstName
    set firstName(firstName) {
        this._firstName = firstName;
    }

    // Setter for lastName
    set lastName(lastName) {
        this._lastName = lastName;
    }
}

// Create two Person objects
let person1 = new Person("Camilo", "Rocha");
console.log(person1); // Logs the person1 object

let person2 = new Person("David", "Triana");
console.log(person2); // Logs the person2 object

// Update the firstName of person1
person1.firstName = "Camilo Enrique";
console.log(person1.firstName); // Logs: Camilo Enrique

////////////////////////////////////////////////////

// Define a Person2 class with static properties and methods
class Person2 {
    static personCounter = 0; // Static property to count Person2 objects

    static get MAX_OBJECTS() {
        return 5; // Static getter for maximum objects
    }

    // Static method to log a greeting message
    static greet() {
        console.log("Greetings from the static method");
    }

    static greet2(person) {
        console.log(person.firstName); // logs the firstName of the passed person object
    }
}

// Attempt to call a static method on an instance (not allowed)
let person3 = new Person2();
console.log(person3.greet()); // Logs: undefined (static methods cannot be called on instances)
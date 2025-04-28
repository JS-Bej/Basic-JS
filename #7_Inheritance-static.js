class Person {
    static personCounter = 0; // Static property to count the number of Person objects
    email = "default email"; // Default email property

    // Static getter for the maximum number of objects allowed
    static get maxObjects() {
        return 5;
    }

    // Constructor to initialize name and last name
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
        if (Person.personCounter < Person.maxObjects) {
            this.idPerson = ++Person.personCounter; // Increment the counter and assign an ID
        } else {
            console.log('The maximum number of users has been reached');
        }
    }

    // Getter and setter for name
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    // Getter and setter for last name
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }

    // Method to return the full name
    fullName() {
        return `${this.idPerson} ${this._name} ${this._lastName}`;
    }

    // Override the toString method to return the full name
    toString() {
        return this.fullName();
    }
}

// Create a Person object
let person1 = new Person("J", "B");
console.log(person1.toString());

// Define an Employee class that extends Person
class Employee extends Person {
    constructor(name, lastName, position) {
        super(name, lastName); // Call the parent class constructor
        this._position = position; // Initialize the position property
    }

    // Getter and setter for position
    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }

    // Override the fullName method to include the position
    fullName() {
        return `${super.fullName()} ${this._position}`;
    }
}

// Create Employee objects
let employee1 = new Employee("Juan", "Bejarano", "Computer Science");
let employee2 = new Employee("David", "Smith", "Aeronautical Engineer");
let employee3 = new Employee("Lalia", "Gonzales", "Lawyer");
let employee4 = new Employee("Leonel", "Gomez", "Psychologist");

// Log the full names of the employees
console.log(employee1.fullName());
console.log(employee2.fullName());
console.log(employee3.fullName());
console.log(employee4.fullName());

// Attempt to create another Employee object exceeding the maximum limit
let employee5 = new Employee("Juan", "Bejarano", "Computer Science"); // Exceeds the maximum number of users
console.log(employee5.fullName());

let person = {
    name: "Jhon",
    last_name:"Smith",
    contact: 1234567890,
    email: "jhon.smith@gmail.com",
    age: 18
}
let person2= new Object();
person2.name="Daniel"
persona2.last_name="Jhonson"

let person3 ={
    name: "David",
    last_name: "Jackson",
    contact: 1819283 ,
    email: "david.jackson@gmail.com",
    age: 20,
    fullName: function (){return this.name+' '+this.last_name}
}

/////////////////////

console.log(person3.fullName())
console.log(person["name"])

for (property in person){
    console.log(person[property]);
}
let personArray = Object.values(person)
console.log(personArray)
let personString=JSON.stringify(person)
console.log(personString)
console.log(person)
function Person (name ='Juan', last_name, email, fullName){
this.name = name;
this.last_name = last_name;
this.email = email;
this.fullName = function(){
return this.name + ' ' + this.last_name
}
}
let father = new Person("Camilo", "Rocha", "Camiloroc98@gmail.com");
console.log(father)
let mother = new Person("Laura", "Contreras", "lauco@unal.edu.co");
console.log(mother)
Person.prototype.contact = null;
mother.contact=12345;
father.contact=33221;
console.log(mother)
console.log(father)

///

function fGreetings(name){
    return ("Hello "+ name +"!");
};
var client1 ={
    greet : fGreetings
}
console.log(client1.greet("Santiago"));

///

var constructor = function (price)
{
    let myObject = {
        basePrice: price,
        iva: 1.21,
        calculateIva: function(){
            return (this.basePrice*this.iva)
        }
    }
    return myObject;
}
price1 = constructor(100);
console.log(price1);

// This function creates a counter and returns its current value.
function createCounter(){
    let count = 1;
    function counter(){
        return count;
    }
    return counter();
}
console.log(createCounter())
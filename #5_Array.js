let vehicles = new Array('BMW', 'Mercedes Benz', 'Volvo');
const cars = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(cars[1]);
for (let cunter=0;cunter<cars.length;cunter++){
    console.log(cunter+': '+cars[cunter]);
}
cars[1]='Modified';
cars.push('Nissan');
console.log(cars)
cars[cars.length]='Audi';
console.log(cars)
cars.pop();
console.log(cars)
console.log(Array.isArray(cars));
console.log(cars instanceof Array);
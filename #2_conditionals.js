// Even or odd
let a = 3;
if (a % 2 == 0) {
    console.log("The number " + a + " is even");
} else {
    console.log("The number " + a + " is odd");
}

// Triangle
let side1 = 3;
let side2 = 3;
let side3 = 3;

if ((side1 == side2 || side2 == side3 || side1 == side3) && 
    (side1 != side2 || side2 != side3 || side1 != side3)) {
    console.log("Isosceles triangle");
}
if (side1 != side2 && side2 != side3 && side1 != side3) {
    console.log("Scalene triangle");
}
if (side1 == side2 && side2 == side3 && side1 == side3) {
    console.log("Equilateral triangle");
}
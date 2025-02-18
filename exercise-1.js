//Declare variables using var, let, const and log them to the console.

// let variables can be reassigned, but cannot be redeclared.
let x1 = 6;
let x2 = "Hello World";
let x3 = true;
let x4 = null;
let x5 = undefined;

console.log("Use of let for variables:");
console.log("x1:", x1);
console.log("x2:", x2);
console.log("x3:", x3);
console.log("x4:", x4);
console.log("x5:", x5);

// var variables can be reassigned and redeclared. Obsolete.
var y1 = 6;
var y2 = "Hello World";
var y3 = true;
var y4 = null;
var y5 = undefined;

console.log("--------------------------");
console.log("Use of var for variables:");
console.log("type of y1 is:", typeof y1);
console.log("y2:", y2);
console.log("y3:", y3);
console.log("type of y4 is:", typeof y4);
console.log("type of y5 is:", typeof y5);

// const variables cannot be reassigned or redeclared.
const z1 = 6;
const z2 = "Hello World";
const z3 = true;
const z4 = null;
const z5 = undefined;

console.log("--------------------------");
console.log("Use of const for variables:");
console.log("z1:", z1);
console.log("type of z2 is:", typeof z2);
console.log("type of z3 is:", typeof z3);
console.log("z4:", z4);
console.log("z5:", z5);

// Date Object in TS
const dob = new Date(1998, 3, 11);
console.log(dob);
console.log(dob.getDate());


/**
 * any type -> your free ticket to get rid of TS type checking
 * 
 * if you want to define a variable with type any, then either mention ": any" while declaring the variable
 * or donot assign a value while declaring a variable
 * 
 */

let x; // this variable x is of type any
console.log(x);
x = "10";
x = 10;

function fun() : void { 
}

console.log(fun());


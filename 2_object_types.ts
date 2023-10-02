const result = {
    name: "Sanket",
    marks: 98
}
/*
the type of the above raw object is inferred as {name: string, marks: number}
something like the given object below
const result : {name: string, marks: number} = {
    name: "Sanket",
    marks: 98
}
*/
console.log(result);

// updating an old key value pair
result.marks = 99; // do you think TS will allow this?

// adding a new key value pair
result.address = "XYZ"; // do you think TS will allow this?
/**
 * Now the above statement will throw a compiler error because in the type {name: string, marks: number}
 * we never mentioned anything about any address. 
 * That's why TS thinks we are violating the default type
 * To solve this, we can add an additional optional address property while defining the
 * object
 * const result : {name: string, marks: number, address? : string} = {
    name: "Sanket",
    marks: 98
}
 */


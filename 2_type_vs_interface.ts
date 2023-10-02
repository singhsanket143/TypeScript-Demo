// type vs interface 

type text = string;

// for defining custom types for arrays, type keyword is more easy
type stringArray = string[];
// using an interface we will define an object which will be always having keys 
// of type number and value to be of the type of the array
interface numberArray {
    [index: number]: number
}


// Let's say we want to define a pair or a triplet or a custom tuple (set of x values)
type pair = [number, number];
type triplet = [number, number, number];

interface pairInterface {
    first: number,
    second: number
}


// Can type and interfaces represent functions ?

type logger = (msg: string, errorCode: number) => void;

interface loggerInterface {
    (msg: string, errorCode: number): void;
}


// Defining unions is possible with type but not interfaces

type unionOfstrandnum = number | string;


interface ComplexNumber {
    real: number,
    imaginary: number
}

interface ComplexNumber {
    add: (num: ComplexNumber) => ComplexNumber
}

/**
 * 
 * interface ComplexNumber {
    real: number,
    imaginary: number
    add: (num: ComplexNumber) => ComplexNumber
}
 */

/**
 * ComplexNumber
 *  - what will be the data members ? 
 *  - write two member functions 
 *      - add two complex numbers
 *      - multiply two complex numbers
 */

class Complex {
    private real: number;
    private imag: number;
    constructor(real:number, imag: number) {
        this.real = real;
        this.imag = imag;
    }

    display() : void {
        console.log(`${this.real} ÷ i${this.imag}`);
    }

    add(C: Complex) : void {
        this.real += C.real;
        this.imag += C.imag;
    }

    multiply(C: Complex) : void {
        this.real = (this.real*C.real - this.imag*C.imag);
        this.imag = (this.real*C.imag + this.imag*C.real);
    }
}

let c1: Complex = new Complex(2, 3);
let c2: Complex = new Complex(1, 3);
c1.display();
c2.display();
c1.multiply(c2);
c1.display();

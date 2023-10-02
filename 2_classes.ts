class Product {
    public name: string;
    private price: number | undefined;
    readonly category:string;
    readonly tags: string[];

    constructor(name : string, category:string, price ?: number) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.tags = ["electronics", "mobile"];
    }

    display() : void {
        console.log("Product name is", this.name, " and price is ", this.price);
    }

    setPrice(p:number) : void {
        if(p <= 0) return;
        this.price = p;
    }

}

const p1 = new Product("Iphone", "electronics", 1000000);
p1.setPrice(-20);
const arr = [10, 20];
arr[0] = 0;
console.log(p1);

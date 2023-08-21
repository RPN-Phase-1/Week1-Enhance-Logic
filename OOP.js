class Shape{
    constructor(panjangSisi, lebarSisi){
        this.panjangSisi = panjangSisi;
        this.lebarSisi = lebarSisi
    }

    area(){
        return this.panjangSisi, this.lebarSisi
    }
}

class Triangle extends Shape{
    area(){
        return 1/2 * this.lebarSisi * this.panjangSisi;
    }
}

class Rectangle extends Shape{
    area(){
        return this.lebarSisi * this.panjangSisi;
    }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

console.log(`\n`)

class Vehicle{
    constructor(brand, type, release){
        this.brand = brand;
        this.type = type;
        this.release = release;
    }

    getInfo(){
        return `${this.brand} ${this.type} ${this.release}`;
    }
}

class Car extends Vehicle{
    constructor(brand, type, release){
        super(brand, type, release);
        this.jenis = "Car";
    }

    getInfo(){
        return `${this.brand} ${this.type} ${this.release} ${this.jenis}`;
    }
}

class Motorcycle extends Vehicle{
    constructor(brand, type, release){
        super(brand, type, release);
        this.jenis = "Motorcycle";
    }

    getInfo(){
        return `${this.brand} ${this.type} ${this.release} ${this.jenis}`;
    }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car
const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle
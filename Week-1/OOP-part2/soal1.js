class Shape {
    area() {
        return 0
    }
}

class Triangle extends Shape {
    constructor(alas, tinggi) {
        super()
        this.alas = alas
        this.tinggi = tinggi
    }
    area() {
        return 0.5 * this.alas * this.tinggi
    }
}

class Rectangle extends Shape {
    constructor(panjang, lebar) {
        super()
        this.panjang = panjang
        this.lebar = lebar
    }
    area() {
        return this.panjang * this.lebar
    }
}


const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30
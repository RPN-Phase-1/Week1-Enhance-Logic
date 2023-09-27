class Shape {
  constructor(side) {
    this.side = side;
  }
  area() {
    return 0;
  }
}
class Triangle extends Shape {
  constructor(side, height) {
    super(side);
    this.height = height;
  }
  area() {
    return (this.side * this.height) / 2;
  }
}

class Rectangle extends Shape {
  constructor(side, width) {
    super(side);
    this.width = width;
  }
  area() {
    return this.side * this.width;
  }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

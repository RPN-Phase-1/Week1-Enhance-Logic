// ======================================================================
// Soal 1: Warisan (Inheritance) dan Metode
// ======================================================================

class Shape {
  constructor(x, y) {
    this.xsides = x
    this.ysides = y
  }
}

class Triangle extends Shape {
  area() {
    return (this.xsides * this.ysides) / 2
  }
}

class Rectangle extends Shape {
  area() {
    return this.xsides * this.ysides
  }
}

const triangle = new Triangle(3, 4)
console.log(triangle.area()) // Output: 6

const rectangle = new Rectangle(5, 6)
console.log(rectangle.area()) // Output: 30

// ======================================================================
// Soal 2: Polimorfisme dan Antarmuka
// ======================================================================

class Vehicle {
  constructor(producer, model, year) {
    this.producer = producer
    this.model = model
    this.productionYear = year
  }

  getInfo() {
    return ""
  }
}

class Car extends Vehicle {
  getInfo() {
    return `${this.producer} ${this.model} ${this.productionYear} Car`
  }
}

class Motorcycle extends Vehicle {
  getInfo() {
    return `${this.producer} ${this.model} ${this.productionYear} Motorcycle`
  }
}

const car = new Car("Toyota", "Corolla", 2020)
console.log(car.getInfo()) // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022)
console.log(motorcycle.getInfo()) // Output: Honda CBR 2022 Motorcycle

// ======================================================================
// Soal 3: Enkapsulasi dan Validasi
// ======================================================================

class Student {
  constructor(name, age, grade) {
    this._name = name
    this._age = age
    this._grade = grade
  }

  studentAge() {
    return this._age < 6 || this._age > 18 ? false : true
  }

  studentGrade() {
    return this._grade < 0 || this._grade > 100 ? false : true
  }

  getInfo() {
    if (this.studentAge() && this.studentGrade()) {
      return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`
    } else {
      return "Invalid Age or Grade"
    }
  }
}

const student1 = new Student("Alice", 12, 85)
console.log(student1.getInfo()) // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student("Bob", 20, 95)
console.log(student2.getInfo()) // Output: Invalid Age or Grade

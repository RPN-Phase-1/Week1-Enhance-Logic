// Polymorphism (Polimorfisme)
// Polimorfisme memungkinkan objek dengan tipe yang berbeda untuk merespons metode yang sama sesuai dengan tipe mereka sendiri. Ini memungkinkan fleksibilitas dalam pemanggilan metode.
// Contoh:

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(circle.area()); // Output: 78.53981633974483
console.log(rectangle.area()); // Output: 24

// Dalam contoh ini, meskipun metode area digunakan untuk objek circle dan rectangle, hasilnya akan disesuaikan dengan jenis bentuk yang sesuai.

console.log('\n');
/* ============================================================================================================= */

// Soal 2: Polimorfisme dan Antarmuka
// Deskripsi: Buatlah kelas Vehicle dengan metode getInfo yang mengembalikan informasi umum tentang kendaraan. Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle dan mengimplementasikan metode getInfo yang spesifik.

// Contoh Input/Output:

// Kelas dasar Vehicle
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Metode getInfo untuk mengembalikan informasi umum tentang kendaraan
  getInfo() {
    return `${this.brand} ${this.model} ${this.year}`;
  }
}

// Kelas turunan Car yang mewarisi dari Vehicle
class Car extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model, year); // Memanggil konstruktor kelas induk Vehicle
  }

  // Mengimplementasikan ulang metode getInfo untuk Car
  getInfo() {
    return `${super.getInfo()} Car`; // Memanggil implementasi metode getInfo dari kelas induk dan menambahkan "Car"
  }
}

// Kelas turunan Motorcycle yang mewarisi dari Vehicle
class Motorcycle extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model, year); // Memanggil konstruktor kelas induk Vehicle
  }

  // Mengimplementasikan ulang metode getInfo untuk Motorcycle
  getInfo() {
    return `${super.getInfo()} Motorcycle`; // Memanggil implementasi metode getInfo dari kelas induk dan menambahkan "Motorcycle"
  }
}

// Contoh penggunaan
const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

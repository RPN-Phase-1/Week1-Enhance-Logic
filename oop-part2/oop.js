// Soal 1: Warisan (Inheritance) dan Metode
// Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. Buatlah kelas turunan Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.
class Shape {
  constructor(sides1, sides2) {
    this.sides1 = sides1;
    this.sides2 = sides2;
  }
}

class Triangle extends Shape {
  area() {
    return (1 / 2) * this.sides1 * this.sides2;
  }
}

class Rectangle extends Shape {
  area() {
    return this.sides1 * this.sides2;
  }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

console.log();
// Soal 2: Polimorfisme dan Antarmuka
// Deskripsi: Buatlah kelas Vehicle dengan metode getInfo yang mengembalikan informasi umum tentang kendaraan. Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle dan mengimplementasikan metode getInfo yang spesifik.
class vehicle {
  getInfo() {
    return `${this.brand} ${this.type} ${this.year}`;
  }
}

class Car extends vehicle {
  constructor(brand, type, year) {
    super();
    this.brand = brand;
    this.type = type;
    this.year = year;
  }
}

class Motorcycle extends vehicle {
  constructor(brand, type, year) {
    super();
    this.brand = brand;
    this.type = type;
    this.year = year;
  }
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle("Honda", "CBR", 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle

console.log();
// Soal 3: Enkapsulasi dan Validasi
// Deskripsi: Buatlah kelas Student dengan properti name, age, dan grade. Pastikan bahwa umur berada dalam rentang 6 hingga 18 tahun, dan nilai berada dalam rentang 0 hingga 100. Implementasikan metode getInfo untuk mencetak informasi siswa.

class Student {
  constructor(name, age, grade) {
    this._name = name;
    this._age = age;
    this._grade = grade;
  }

  getInfo() {
    return this._age < 6 ||
      this._age > 18 ||
      this._grade < 0 ||
      this._grade > 100
      ? "Invalid Age or Grade"
      : `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`;
  }
}

const student1 = new Student("Alice", 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student("Bob", 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade

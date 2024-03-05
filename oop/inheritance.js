// 1.Inheritance (Pewarisan)
// Inheritance memungkinkan Kalian untuk membuat kelas baru berdasarkan kelas yang sudah ada. Kelas baru ini dapat mewarisi properti dan metode dari kelas yang sudah ada (kelas induk atau superclass).
// Contoh:

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.
// Dalam contoh ini, kelas Dog mewarisi properti name dan metode speak dari kelas Animal.


console.log('\n');
/* ============================================================================================================= */

// Soal 1: Warisan (Inheritance) dan Metode
// Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. Buatlah kelas turunan Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.

// Kelas dasar Shape dengan properti sides
class Shape {
  constructor(sides) {
    this.sides = sides;
  }
}

// Kelas turunan Triangle yang mewarisi dari Shape
class Triangle extends Shape {
  constructor(base, height) {
    super(3); // Memanggil konstruktor kelas induk dengan jumlah sisi 3
    this.base = base;
    this.height = height;
  }

  // Metode untuk menghitung area Triangle
  area() {
    return 0.5 * this.base * this.height;
  }
}

// Kelas turunan Rectangle yang mewarisi dari Shape
class Rectangle extends Shape {
  constructor(length, width) {
    super(4); // Memanggil konstruktor kelas induk dengan jumlah sisi 4
    this.length = length;
    this.width = width;
  }

  // Metode untuk menghitung area Rectangle
  area() {
    return this.length * this.width;
  }
}

// Contoh penggunaan
const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 30

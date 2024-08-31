/*LOGIC NOLEP (OOP.js)
tugas ini dibuat dengan 1 file oop.js, jangan lupa submit tugas ini dengan cara di ⁠WELCOME TO PHASE 1. 



Soal 1: Warisan (Inheritance) dan Metode
Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. Buatlah kelas turunan 
Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.

Contoh Input/Output:
*/
// const triangle = new Triangle(3, 4);
// console.log(triangle.area()); // Output: 6

// const rectanglee = new Rectanglee(5, 6);
// console.log(rectanglee.area()); // Output: 30



/*Soal 2: Polimorfisme dan Antarmuka
Deskripsi: Buatlah kelas Vehicle dengan metode getInfo yang mengembalikan informasi umum tentang kendaraan. 
Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle dan mengimplementasikan metode getInfo yang 
spesifik.

Contoh Input/Output: */
// const car = new Car('Toyota', 'Corolla', 2020);
// console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

// const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
// console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle


/*Soal 3: Enkapsulasi dan Validasi
Deskripsi: Buatlah kelas Student dengan properti name, age, dan grade. Pastikan bahwa umur berada dalam rentang 6 
hingga 18 tahun, dan nilai berada dalam rentang 0 hingga 100. Implementasikan metode getInfo untuk mencetak 
informasi siswa.

Contoh Input/Output: */
// const student1 = new Student('Alice', 12, 85);
// console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

// const student2 = new Student('Bob', 20, 95);
// console.log(student2.getInfo()); // Output: Invalid Age or Grade


/*Catatan: Pastikan untuk memeriksa batasan umur dan nilai dalam konstruktor atau metode lainnya untuk 
menghindari data yang tidak valid. */






// /*Soal 1: Warisan (Inheritance) dan Metode
// Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. Buatlah kelas turunan 
// Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.
//  */


class Shape {
    constructor(sides){
        this.sides = sides
    }
  }
  
  class Triangle extends Shape {
    constructor (a, b){
        super()
        this.a = a
        this.b = b
    }
  
    area(){
        return  this.a * this.b / 2
    }
  }
  
  class Rectangle extends Shape {
    constructor (c, d){
        super()
        this.c = c
        this.d = d
    }
  
    area (){
        return this.c * this.d
    }
  }
  
  const triangle = new Triangle(3, 4);
  console.log(triangle.area()); // Output: 6
  
  const rectangle = new Rectangle(5, 6);
  console.log(rectangle.area()); // Output: 3
  
  
  
  
  
  /*Soal 2: Polimorfisme dan Antarmuka
  Deskripsi: Buatlah kelas Vehicle dengan metode getInfo yang mengembalikan informasi umum tentang kendaraan. 
  Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle dan mengimplementasikan metode getInfo yang 
  spesifik.
  
  Contoh Input/Output: */
  
  class Vehicle {
    constructor (merek, nama, tahun){
        this.merek = merek
        this.nama = nama
        this.tahun = tahun
    }
    getInfo(){
        return `${this.merek} ${this.nama} ${this.tahun}`
    }
  }
  
  class Car extends Vehicle {
    constructor(merek, nama, tahun){
        super(merek, nama, tahun)
        this.jenis1 = 'Car'
    }
    getInfo(){
        return `${this.merek} ${this.nama} ${this.tahun} ${this.jenis1}`
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(merek, nama, tahun){
        super(merek, nama, tahun)
        this.jenis2 = 'Motorcycle'
    }
    getInfo(){
        return `${this.merek} ${this.nama} ${this.tahun} ${this.jenis2}`
    }
  }
  
  const car = new Car('Toyota', 'Corolla', 2020);
  console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car
  
  const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
  console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle
  
  
  
  
  
  
  
  /*Soal 3: Enkapsulasi dan Validasi
  Deskripsi: Buatlah kelas Student dengan properti name, age, dan grade. Pastikan bahwa umur berada dalam rentang 6 
  hingga 18 tahun, dan nilai berada dalam rentang 0 hingga 100. Implementasikan metode getInfo untuk mencetak 
  informasi siswa.
  
  Contoh Input/Output: */
  
  class Student {
    constructor(name, age, grade){
        this._name = name
        this._age = ''
        this._grade = ''
        this.cek1(age)//untuk memvalidasi nilai age
        this.cek2(grade)//untuk memvalidasi nilai grade
    }
  
    cek1 (age){
        if (age >= 6 && age <= 18){
            this._age = age
        } else {
           this._age = undefined
        }
    }
  
    cek2 (grade){
        if (grade >= 0 && grade <= 100){
            this._grade = grade
        } else {
            this._grade = undefined
        }
    }
  
    getInfo(){
        if (this._age === undefined || this._grade === undefined){
            return `Invalid Age or Grade`
        } else {
            return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`
        }
    } 
    
  }
  
  
  const student1 = new Student('Alice', 12, 85);
  console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85
  
  const student2 = new Student('Bob', 20, 95);
  console.log(student2.getInfo()); // Output: Invalid Age or Grade
  
  /*Catatan: Pastikan untuk memeriksa batasan umur dan nilai dalam konstruktor atau metode lainnya untuk 
  menghindari data yang tidak valid. */
  
  
  
  
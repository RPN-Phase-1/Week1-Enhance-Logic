# OOP

Pemrograman Berorientasi Objek (OOP) adalah paradigma pemrograman yang memungkinkan Anda untuk mengorganisasi kode menjadi objek-objek yang memiliki sifat dan perilaku tertentu. Dalam JavaScript, OOP dapat diimplementasikan menggunakan konsep "class" dan "prototype".

## Class, Constructor, Method, dan Property

- **Class**: Kelas adalah cetak biru atau blueprint untuk membuat objek. Ini adalah entitas yang mendefinisikan properti dan metode yang akan dimiliki oleh objek yang dibuat berdasarkan kelas ini.
- **Constructor**: Konstruktor adalah metode khusus dalam sebuah kelas yang dipanggil saat objek dibuat dari kelas tersebut. Ini digunakan untuk menginisialisasi properti objek.
- **Method**: Metode adalah fungsi yang terkait dengan kelas. Mereka mendefinisikan perilaku objek yang akan dibuat berdasarkan kelas tersebut.
- **Property**: Properti adalah data yang dimiliki oleh objek. Ini mewakili atribut atau karakteristik dari objek.

## Contoh Implementasi OOP dalam JavaScript

Mari kita buat contoh sederhana: sebuah kelas `Person` untuk merepresentasikan orang dengan properti `name` dan `age`, serta metode `greet` untuk menyapa.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Membuat objek dari kelas Person
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Memanggil metode pada objek
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
```

Dalam contoh di atas:

*   `Person` adalah kelas yang memiliki properti name dan age, serta metode greet.
*   `constructor` di kelas Person digunakan untuk menginisialisasi properti name dan age saat objek dibuat.
*   `greet` adalah metode yang mencetak pesan sapaan dengan menggunakan properti name dan age dari objek.
    

Dalam skenario ini:
*   `name` dan age adalah properti dalam kelas Person.
*   `constructor` adalah metode yang disebut saat objek dibuat.
*   `greet` adalah metode yang dapat dipanggil pada objek untuk menjalankan perilaku tertentu.
    
Ini adalah contoh sederhana tentang bagaimana OOP dapat diimplementasikan dalam JavaScript menggunakan kelas dan konsep konstruktor, metode, dan properti. Dalam proyek yang lebih besar, konsep ini akan membantu Kalian mengorganisir kode dengan lebih baik dan membuat struktur yang lebih terkelola.

## Sifat OOP

berikut adalah penjelasan singkat tentang beberapa sifat utama Pemrograman Berorientasi Objek (OOP) beserta contoh kode untuk masing-masing:

### Inheritance (Pewarisan)
Inheritance memungkinkan Kalian untuk membuat kelas baru berdasarkan kelas yang sudah ada. Kelas baru ini dapat mewarisi properti dan metode dari kelas yang sudah ada (kelas induk atau superclass).

Contoh:
```js
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
```

Dalam contoh ini, kelas Dog mewarisi properti name dan metode speak dari kelas Animal.

### Polymorphism (Polimorfisme)
Polimorfisme memungkinkan objek dengan tipe yang berbeda untuk merespons metode yang sama sesuai dengan tipe mereka sendiri. Ini memungkinkan fleksibilitas dalam pemanggilan metode.

Contoh:
```js
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
```

Dalam contoh ini, meskipun metode area digunakan untuk objek circle dan rectangle, hasilnya akan disesuaikan dengan jenis bentuk yang sesuai.

### Encapsulation (Enkapsulasi)
Enkapsulasi melibatkan penyembunyian detail internal dari objek dan hanya mengizinkan akses terbatas melalui antarmuka publik yang ditentukan. Ini membantu dalam memisahkan responsibilitas dan mencegah perubahan langsung pada properti objek.

Contoh:
```js
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    }
  }
}

const account = new BankAccount(1000);
console.log(account.balance); // Output: 1000

account.deposit(500);
console.log(account.balance); // Output: 1500

account.withdraw(200);
console.log(account.balance); // Output: 1300
```

Dalam contoh ini, properti _balance dienkapsulasi dan hanya dapat diakses melalui metode balance, deposit, dan withdraw.

Inilah beberapa sifat utama dalam Pemrograman Berorientasi Objek. Masing-masing sifat ini membantu Kalian membangun kode yang lebih terorganisir, fleksibel, dan mudah diatur.

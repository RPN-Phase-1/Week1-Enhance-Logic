# week1-Enhance-Logic
___

Pemrograman Berorientasi Objek (OOP) adalah paradigma pemrograman yang memungkinkan Anda untuk mengorganisasi kode menjadi objek-objek yang memiliki sifat dan perilaku tertentu. Dalam JavaScript, OOP dapat diimplementasikan menggunakan konsep "class" dan "prototype".

Class, Constructor, Method, dan Property
Class: Kelas adalah cetak biru atau blueprint untuk membuat objek. Ini adalah entitas yang mendefinisikan properti dan metode yang akan dimiliki oleh objek yang dibuat berdasarkan kelas ini.

Constructor: Konstruktor adalah metode khusus dalam sebuah kelas yang dipanggil saat objek dibuat dari kelas tersebut. Ini digunakan untuk menginisialisasi properti objek.

Method: Metode adalah fungsi yang terkait dengan kelas. Mereka mendefinisikan perilaku objek yang akan dibuat berdasarkan kelas tersebut.

Property: Properti adalah data yang dimiliki oleh objek. Ini mewakili atribut atau karakteristik dari objek.

Contoh Implementasi OOP dalam JavaScript:
Mari kita buat contoh sederhana: sebuah kelas Person untuk merepresentasikan orang dengan properti name dan age, serta metode greet untuk menyapa.

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


Dalam contoh di atas:
Person adalah kelas yang memiliki properti name dan age, serta metode greet.
constructor di kelas Person digunakan untuk menginisialisasi properti name dan age saat objek dibuat.
greet adalah metode yang mencetak pesan sapaan dengan menggunakan properti name dan age dari objek.

Dalam skenario ini:
name dan age adalah properti dalam kelas Person.
constructor adalah metode yang disebut saat objek dibuat.
greet adalah metode yang dapat dipanggil pada objek untuk menjalankan perilaku tertentu.

Ini adalah contoh sederhana tentang bagaimana OOP dapat diimplementasikan dalam JavaScript menggunakan kelas dan konsep konstruktor, metode, dan properti. Dalam proyek yang lebih besar, konsep ini akan membantu Kalian mengorganisir kode dengan lebih baik dan membuat struktur yang lebih terkelola.
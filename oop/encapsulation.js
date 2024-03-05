// Encapsulation (Enkapsulasi)
// Enkapsulasi melibatkan penyembunyian detail internal dari objek dan hanya mengizinkan akses terbatas melalui antarmuka publik yang ditentukan. Ini membantu dalam memisahkan responsibilitas dan mencegah perubahan langsung pada properti objek.

// Contoh:

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

//   Dalam contoh ini, properti _balance dienkapsulasi dan hanya dapat diakses melalui metode balance, deposit, dan withdraw.
// Inilah beberapa sifat utama dalam Pemrograman Berorientasi Objek. Masing-masing sifat ini membantu Kalian membangun kode yang lebih terorganisir, fleksibel, dan mudah diatur.
console.log('\n');
/* ============================================================================================================= */

// Soal 3: Enkapsulasi dan Validasi
// Deskripsi: Buatlah kelas Student dengan properti name, age, dan grade. Pastikan bahwa umur berada dalam rentang 6 hingga 18 tahun, dan nilai berada dalam rentang 0 hingga 100. Implementasikan metode getInfo untuk mencetak informasi siswa.

// Contoh Input/Output:

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.isValid = true; // Penanda validasi data

    // Validasi untuk age
    if (age >= 6 && age <= 18) {
      this.age = age;
    } else {
    //   console.log("Invalid Age");
      this.isValid = false;
    }

    // Validasi untuk grade
    if (grade >= 0 && grade <= 100) {
      this.grade = grade;
    } else {
    //   console.log("Invalid Grade");
      this.isValid = false;
    }
  }

  // Metode getInfo untuk mencetak informasi siswa
  getInfo() {
    if (this.isValid) {
      return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    } else {
      return "Invalid Age or Grade";
    }
  }
}

// Contoh penggunaan
const student1 = new Student("Alice", 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student("Bob", 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade

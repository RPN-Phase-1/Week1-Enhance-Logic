class Bank {
  constructor(nameBank) {
    this.nameBank = nameBank;
  }

  register(person, memberType, amount) {
    let minimumBalance;
    if(memberType.toLowerCase() === 'platinum'){
      minimumBalance = 50000;
    } else if (memberType.toLowerCase() === 'silver'){
      minimumBalance = 100000;
    } 

    if (amount <= minimumBalance) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
    } else {
      console.log(
        `Selamat datang ke ${this.nameBank}, ${person.name}. Nomor Akun anda adalah 6332937. Total saldo adalah ${amount}`
      );
      person.balance = amount;

      if (memberType.toLowerCase() === "platinum") {
        person.member = new Platinum(person.name, person.balance, minimumBalance);
      } else if (memberType.toLowerCase() === "silver") {
        person.member = new Silver(person.name, person.balance, minimumBalance);
      }
    }
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  get bankAccount() {
    return this.member;
  }
}

class Member {
  constructor(name, balance, minimumBalance, accountNumber) {
    this.memberName = name;
    this.balance = balance;
    this.minimumBalance = minimumBalance;
    this.accountNumber = accountNumber;
    this.transactions = [];
  }

  credit(amount) {
    if (amount >= this.minimumBalance) {
      this.balance += amount;
      console.log("Anda sukses menyimpan uang ke dalam bank.");
      this.transactions.push(new Transaction(amount, "credit", "nyetor"));
    } else {
      console.log("Belum memenuhi minimal uang yang dapat di setor");
    }
  }

  debet(amount, note) {
    if (this.balance <= amount) {
      console.log("Saldo anda tidak cukup");
      return;
    }

    if (this.balance - amount <= this.minimumBalance) {
      console.log(
        "Saldo minimum anda tidak terpenuhi untuk melakukan transaksi."
      );
      return;
    }

    this.balance -= amount;
    console.log("Anda sukses menarik uang dari bank");
    this.transactions.push(new Transaction(amount, "debet", note));
  }

  transfer(receiverAccount, amount) {
    if (this.balance - amount >= this.minimumBalance) {
      this.debet(amount, `transfer ke akun ${receiverAccount.memberName}`);
      receiverAccount.credit(amount);
      console.log(`Anda sukses transfer ke ${receiverAccount.memberName}`);
    } else {
      console.log(`Anda gagal transfer ke ${receiverAccount.memberName}`);
    }
  }
}

class Platinum extends Member {
  constructor(name, balance, minimumBalance) {
    super(name, balance, minimumBalance);
    this.accountNumber = Math.floor(Math.random() * 1000000);
    this.type = "platinum";
  }
}

class Silver extends Member {
  constructor(name, balance, minimumBalance) {
    super(name, balance, minimumBalance);
    this.accountNumber = Math.floor(Math.random() * 10000000);
    this.type = "silver";
  }
}

class Transaction {
  constructor(nominal, status, note) {
    this.nominal = nominal;
    this.status = status;
    this.date = new Date();
    this.note = note;
  }
}

// TESTCASE
// TIDAK BOLEH MENGUBAH CODE DI BAWAH INI

let yudhistiraBank = new Bank("Yudhistira Bank");
let nadia = new Person("Nadia");

yudhistiraBank.register(nadia, "platinum", 5000);
// Expected: Saldo awal kurang dari minimum saldo yang ditentukan

yudhistiraBank.register(nadia, "platinum", 540000);
// Expected: Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 540000

let nadiaAccount = nadia.bankAccount;

/* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
nadiaAccount.credit(300000);
// Expected: Anda sukses menyimpan uang ke dalam bank.

nadiaAccount.credit(1000);
// Expected: Belum memenuhi minimal uang yang dapat di setor

nadiaAccount.debet(200000, "Beli Keyboard");
// Expected: Anda sukses menarik uang dari bank

nadiaAccount.debet(480000, "Beli Keyboard Lagi");
// Expected: Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.

nadiaAccount.debet(600000, "Bisa gak ya lebih besar dari balance ? ");
// Expected: Saldo anda tidak cukup

let semmi = new Person("Semmi Verian");
yudhistiraBank.register(semmi, "silver", 10000000);
let semmiAccount = semmi.bankAccount;

nadiaAccount.transfer(semmiAccount, 100000);
// Expected: Anda sukses transfer ke Semmi Verian

nadiaAccount.transfer(semmiAccount, 1000000);
// Expected: Anda gagal transfer ke Semmi Verian

console.log(nadiaAccount);
// Expected:
// Platinum {
//   memberName: 'Nadia',
//   accountNumber: 5622164,
//   minimumBalance: 50000,
//   balance: 60000,
//   transactions: [
//     Transaction {
//       nominal: 300000,
//       status: 'credit',
//       date: 2024-08-03T13:21:13.818Z,
//       note: 'nyetor'
//     },
//     Transaction {
//       nominal: 200000,
//       status: 'debet',
//       date: 2024-08-03T13:21:13.819Z,
//       note: 'Beli Keyboard'
//     },
//     Transaction {
//       nominal: 480000,
//       status: 'debet',
//       date: 2024-08-03T13:21:13.819Z,
//       note: 'Beli Keyboard Lagi'
//     },
//     Transaction {
//       nominal: 100000,
//       status: 'debet',
//       date: 2024-08-03T13:21:13.820Z,
//       note: 'transfer ke akun Semmi Verian'
//     }
//   ],
//   type: 'platinum'
// }

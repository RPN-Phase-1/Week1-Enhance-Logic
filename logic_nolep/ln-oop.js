class Bank {
    constructor(name) {
        this.name = name;
    }

    register(person, type, balance) {
        if (type.toLowerCase() === "platinum" && balance >= 50000) {
            person.bankAccount = new Platinum(person.name, balance);
        } else if (type.toLowerCase() === "silver" && balance >= 15000) {
            person.bankAccount = new Silver(person.name, balance);
        } else {
            console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
        }

        if (person.bankAccount) {
            console.log(`Selamat datang ke ${this.name}, ${person.name}. Nomor Akun anda adalah ${person.bankAccount.accountNumber}. Total saldo adalah ${balance}`);
        }
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.bankAccount = null;
    }
}

class Member {
    constructor(name, balance) {
        this.memberName = name;
        this.accountNumber = Math.floor(1000000 + Math.random() * 9000000);
        this.minimumBalance = 0;
        this.balance = balance;
        this.transactions = [];
    }

    credit(value) {
        if (value > 1000) {
            this.balance += value;
            this.transactions.push(new Transaction(value, 'credit', 'nyetor'));

            console.log("Anda sukses menyimpan uang ke dalam bank");
        } else {
            console.log("Belum memenuhi minimal uang yang dapat di setor");
        }
    }

    debet(value, note) {
        if (value > this.balance) {
            console.log("Saldo anda tidak cukup");
        } else {
            this.balance -= value;
            this.transactions.push(new Transaction(value, "debet", note));

            if (this.balance - value < this.minimumBalance) {
                console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi");
            } else {
                console.log("Anda sukses menarik uang dari bank");
            }

        }
    }

    transfer(person, value) {
        if (value > this.balance) {
            console.log(`Anda gagal transfer ke ${person.memberName}`);
        } else {
            this.balance -= value;
            this.transactions.push(new Transaction(value, "debet", `transfer ke akun ${person.memberName}`));

            person.balance += value;
            person.transactions.push(new Transaction(value, "credit", `transfer dari akun ${this.memberName}`));

            console.log(`Anda sukses transfer ke ${person.memberName}`);
        }
    }
}

class Platinum extends Member {
    constructor(name, balance) {
        super(name, balance);
        this.minimumBalance = 50000;
        this.type = "platinum";
    }
}

class Silver extends Member {
    constructor(name, balance) {
        super(name, balance);
        this.minimumBalance = 15000;
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

let yudhistiraBank = new Bank('Yudhistira Bank')
let nadia = new Person('Nadia')

yudhistiraBank.register(nadia, 'platinum', 5000)
// Expected: Saldo awal kurang dari minimum saldo yang ditentukan

yudhistiraBank.register(nadia, 'platinum', 540000)
// Expected: Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000

let nadiaAccount = nadia.bankAccount

/* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
nadiaAccount.credit(300000)
// Expected: Anda sukses menyimpan uang ke dalam bank.

nadiaAccount.credit(1000)
// Expected: Belum memenuhi minimal uang yang dapat di setor


nadiaAccount.debet(200000, 'Beli Keyboard')
// Expected: Anda sukses menarik uang dari bank

nadiaAccount.debet(480000, 'Beli Keyboard Lagi')
// Expected: Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.

nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? ')
// Expected: Saldo anda tidak cukup

let semmi = new Person('Semmi Verian')
yudhistiraBank.register(semmi, 'silver', 10000000)
let semmiAccount = semmi.bankAccount

nadiaAccount.transfer(semmiAccount, 100000)
// Anda sukses transfer ke Semmi Verian
nadiaAccount.transfer(semmiAccount, 1000000)
// Anda gagal transfer ke Semmi Verian

console.log(nadiaAccount)
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

# LOGIC NOLEP (OOP.js)

## Selesaikanlah masalah Bank dengan menggunakan structur object

```js
class Bank {
  // Tulis Code Disini
}

class Person {
  // Tulis Code Disini
}

class Member {
  // Tulis Code Disini
}

class Platinum extends Member{
  // Tulis Code Disini
}

class Silver extends Member{
  // Tulis Code Disini
}

class Transaction {
  // Tulis Code Disini
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
```

**Dilarang mengubah code testcase**

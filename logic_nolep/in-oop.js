
class Bank {
    // Tulis Code Disini
    constructor(bankName){
        this.bankName = bankName;
        this.Members = [];
    }
    
    register(namePerson, type, amount) {
        const minimSilver = 10000;
        const minimplatinum = 50000;
        let member;
        if (type == 'platinum' && amount >= minimplatinum) {
                member = new Platinum(namePerson.memberName, amount);
            } else if (type == 'silver' && amount >= minimSilver) {
                member = new Silver(namePerson.memberName, amount);
            } else {
            console.log("Saldo awal kurang dari minimum saldo yang ditentukan");
            return;
        }
        this.Members.push(member);
        namePerson.bankAccount = member;
        console.log(`Selamat datang ke ${this.bankName}, ${namePerson.memberName}. Nomor Akun anda adalah ${member.accountNumber}. Total saldo adalah ${amount}`);
   
    }
}
  
class Person {
    // Tulis Code Disini
    constructor(memberName){
        this.memberName = memberName;
    }    
}

class Member {
    // Tulis Code Disini
    constructor(memberName, minimumBalance, amount) {
        this.memberName = memberName;
        this.accountNumber = Math.floor(Math.random() * 1000000);
        this.minimumBalance = minimumBalance;
        this.balance = amount;
        this.transactions = [];
    }

    credit(amount){
        if(amount < 10000){
            console.log("Belum memenuhi minimal uang yang dapat di setor");
        } else {
            this.balance += amount;
            console.log("Anda sukses menyimpan uang ke dalam bank");

            let transaction = new Transaction(amount, 'credit', `nyetor`);
            this.transactions.push(transaction);
        }
    }
    
    debet(amountHarga, note){
        if(amountHarga > this.balance){
            console.log("Saldo anda tidak cukup.");
        } else {
            if(this.balance - amountHarga <= this.minimumBalance){
                console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.");
            } else{
                console.log("Anda sukses menarik uang dari bank");
                this.balance -= amountHarga;

                let transaction = new Transaction(amountHarga, 'debet', note);
                this.transactions.push(transaction);
            }
        }
    }

    transfer(target, amounttf){
        if(amounttf > this.balance - this.minimumBalance){
            console.log(`Anda gagal transfer ke ${target.memberName}`);
        } else{
            console.log(`Anda sukses transfer ke ${target.memberName}`);
            this.balance-=amounttf
            target.balance += amounttf;

	        this.transactions.push(new Transaction(amounttf, 'debet', `Transfer ke akun ${target.memberName}`));
            target.transactions.push(new Transaction(amounttf, 'credit', `Transfer dari akun ${this.memberName}`));
        }
    }
}

class Platinum extends Member{
    // Tulis Code Disini
    constructor(owner, amount) {
        super(owner, 50000, amount);
        this.type = "platinum";
    }
}

class Silver extends Member {
    // Tulis Code Disini
    constructor(owner, amount) {
        super(owner, 10000, amount);
        this.type = "silver";
    }
}

    
  class Transaction {
    // Tulis Code Disini
    constructor(nominal, status, note) {
        this.nominal = nominal;
        this.status = status;
        this.date = new Date();
        this.note = note;
    }
  }
  
  // TESTCASE
  // TIDAK BOLEH MENGUBAH CODE DI BAWAH INI
  
  let yudhistiraBank = new Bank('Yudhistira Bank');
  let nadia = new Person('Nadia')
  
  yudhistiraBank.register(nadia, 'platinum', 5000)
  // Saldo awal kurang dari minimum saldo yang ditentukan
  yudhistiraBank.register(nadia, 'platinum', 54000)
  //Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000
  
  let nadiaAccount = nadia.bankAccount
    
  /* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
  nadiaAccount.credit(300000)
  // Anda sukses menyimpan uang ke dalam bank.
  
  nadiaAccount.credit(1000)
  // Belum memenuhi minimal uang yang dapat di setor
  
  nadiaAccount.debet(200000, 'Beli Keyboard')
  // Anda sukses menarik uang dari bank
  
  nadiaAccount.debet(130000, 'Beli Keyboard Lagi')
  // Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.
  nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? ')
  // Saldo anda tidak cukup
  
  let semmi = new Person('Semmi Verian')
  yudhistiraBank.register(semmi, 'silver', 10000000)
  let semmiAccount = semmi.bankAccount
  
  nadiaAccount.transfer(semmiAccount, 100000)
  // Anda sukses transfer ke Semmi Verian
  nadiaAccount.transfer(semmiAccount, 1000000)
  // Anda gagal transfer ke Semmi Verian
  
  console.log(semmiAccount)
  // Silver {
  //   memberName: 'Semmi Verian',
  //   accountNumber: 1319650,
  //   minimumBalance: 10000,
  //   balance: 10100000,
  //   transactions: [
  //     Transaction {
  //       nominal: 100000,
  //       status: 'credit',
  //       date: 2025-01-28T07:13:54.802Z,
  //       note: 'transfer dari akun Nadia'
  //     }
  //   ],
  //   type: 'silver'
  // }
  
  console.log(nadiaAccount)
  // Platinum {
  //   memberName: 'Nadia',
  //   accountNumber: 3971487,
  //   minimumBalance: 50000,
  //   balance: 54000,
  //   transactions: [
  //     Transaction {
  //       nominal: 300000,
  //       status: 'credit',
  //       date: 2025-01-28T07:13:54.800Z,
  //       note: 'nyetor'
  //     },
  //     Transaction {
  //       nominal: 200000,
  //       status: 'debet',
  //       date: 2025-01-28T07:13:54.801Z,
  //       note: 'Beli Keyboard'
  //     },
  //     Transaction {
  //       nominal: 100000,
  //       status: 'debet',
  //       date: 2025-01-28T07:13:54.802Z,
  //       note: 'transfer ke akun Semmi Verian'
  //     }
  //   ],
  //   type: 'platinum'
  // }
# Hashing Algorithm 

Hashing merupakan praktek keamanan yang menggunakan algoritma untuk memetakan data-data dalam beberapa ukuran untuk menetepkan panjangnya. Dengan mengubah data input yang panjang menjadi value output dengan ukuran yang telah ditentukan sebelumnya, ini’lah yang disebut sebagai hash value. Fungsi hash umumnya meliputi lapisan dan skema terminasi yang berkerja sama dengan fungsi itu sendiri untuk menghasilkan value keamanan yang lebih hebat lagi.

Fungsi hash yang baik memiliki beberapa karakteristik penting:
1. Deterministik: Input yang sama selalu menghasilkan hash yang sama.
2. Efisien: Proses hashing harus cepat.
3. Distribusi merata: Hash harus terdistribusi secara merata di seluruh ruang output.
4. Tahan terhadap collision: Sulit menemukan dua input berbeda yang menghasilkan hash yang sama.
5. Efek avalanche: Perubahan kecil pada input harus menghasilkan perubahan besar pada hash..

Hashing biasanya digunakan untuk:
- Verifikasi integritas data
- Penyimpanan password
- Pengecekan cepat kesamaan data

Berikut adalah contoh sederhana dari hashing algorithm menggunakan JavaScript:

```js
function simpleHash(input) {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
}

// Contoh penggunaan
const text = "Hello, World!";
console.log(simpleHash(text)); // Output akan berupa angka integer
```

Fungsi ini menggunakan algoritma hashing sederhana yang disebut "djb2". Perlu diingat bahwa ini bukan algoritma kriptografis yang aman dan tidak boleh digunakan untuk tujuan keamanan.

# Hashing pada Blockchain

Hashing memainkan peran krusial dalam teknologi blockchain. Pada blockchain, hashing digunakan untuk beberapa tujuan utama:

1. Integritas Data: Setiap blok dalam blockchain berisi hash dari blok sebelumnya. Ini menciptakan rantai yang tidak dapat diubah, karena mengubah satu blok akan mengubah semua blok berikutnya.
2. Proof of Work (PoW): Dalam banyak blockchain seperti Bitcoin, hashing digunakan dalam proses mining. Miners harus menemukan nilai nonce yang, ketika digabungkan dengan data blok, menghasilkan hash dengan jumlah nol awal tertentu.
3. Identifikasi Transaksi dan Blok: Hash digunakan sebagai identifikator unik untuk transaksi dan blok.
4. Merkle Trees: Struktur data yang menggunakan hashing untuk memverifikasi integritas dan konsistensi data transaksi dalam blok.

Algoritma hashing yang umum digunakan dalam blockchain adalah SHA-256 (Secure Hash Algorithm 256-bit). Ini menghasilkan hash 64 karakter heksadesimal.

Implementasi Sederhana Blockchain menggunakan JavaScript:

```js
const crypto = require('crypto');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return crypto.createHash('sha256').update(
            this.index + 
            this.previousHash + 
            this.timestamp + 
            JSON.stringify(this.data) + 
            this.nonce
        ).digest('hex');
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2024", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

// Penggunaan
let myCoin = new Blockchain();

console.log("Mining block 1...");
myCoin.addBlock(new Block(1, "02/08/2024", { amount: 4 }));

console.log("Mining block 2...");
myCoin.addBlock(new Block(2, "03/08/2024", { amount: 10 }));

console.log("Is blockchain valid? " + myCoin.isChainValid());

// Mencoba memanipulasi blok
myCoin.chain[1].data = { amount: 100 };
console.log("Is blockchain valid? " + myCoin.isChainValid());
```

Penjelasan kode:

1. `Block` class: Merepresentasikan sebuah blok dalam blockchain. Setiap blok memiliki index, timestamp, data, hash dari blok sebelumnya, hash sendiri, dan nonce (digunakan untuk mining).
2. `calculateHash()`: Menghitung hash blok menggunakan SHA-256.
3. `mineBlock()`: Implementasi sederhana dari Proof of Work. Blok di-mine dengan mencari hash yang dimulai dengan sejumlah nol tertentu.
4. `Blockchain class`: Merepresentasikan keseluruhan blockchain.
5. `createGenesisBlock()`: Membuat blok pertama (genesis) dalam blockchain.
6. `addBlock()`: Menambahkan blok baru ke blockchain setelah di-mine.
7. isChainValid()`: Memeriksa integritas seluruh blockchain.


Kode ini mendemonstrasikan konsep dasar blockchain:

- Setiap blok terhubung ke blok sebelumnya melalui previousHash.
- Mining blok menggunakan Proof of Work sederhana.
- Validasi integritas seluruh chain.

ini adalah implementasi sangat sederhana dan tidak mencakup banyak fitur yang ada pada blockchain sebenarnya seperti manajemen transaksi, konsensus terdistribusi, atau keamanan jaringan. karna hashing merupakan fundamental yg penting dalam blockchain oleh karena itu lebih baik kalian mengetahui dasarnya

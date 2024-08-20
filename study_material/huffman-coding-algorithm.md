# Huffman Coding Algorithm

Huffman Coding Algorithm adalah metode kompresi data yang digunakan untuk mengurangi ukuran data dengan cara memberikan kode biner yang lebih pendek kepada simbol-simbol atau karakter-karakter yang lebih sering muncul dalam data. Algoritma ini merupakan salah satu metode kompresi lossless, yang artinya data yang dikompresi akan dapat dikembalikan ke bentuk aslinya tanpa kehilangan informasi.

Cara Kerja Huffman Coding Algorithm:
1. Hitung frekuensi masing-masing simbol dalam data.
2. Buat pohon Huffman, di mana setiap simpul memiliki frekuensi dan mewakili satu simbol atau kombinasi dari dua simpul lain.
3. Susun pohon Huffman dengan menggabungkan dua simpul dengan frekuensi terendah, hingga hanya tersisa satu simpul yang menjadi akar pohon.
4. Berikan kode biner 0 pada setiap cabang kiri dan kode biner 1 pada setiap cabang kanan saat membuat pohon.
5. Lakukan traversing pada pohon Huffman untuk mendapatkan kode biner unik untuk setiap simbol.

Cara Penggunaan Huffman Coding Algorithm dalam JavaScript:
Di bawah ini adalah langkah-langkah umum dalam mengimplementasikan Huffman Coding Algorithm menggunakan JavaScript:

1. Hitung frekuensi kemunculan setiap simbol dalam data.
2. Buat simpul-simpul yang merepresentasikan setiap simbol, dan masukkan ke dalam priority queue (heap).
3. Buat pohon Huffman dengan menggabungkan simpul-simpul dengan frekuensi terendah dari priority queue.
4. Lakukan traversing pada pohon Huffman untuk membuat tabel kode biner untuk setiap simbol.
5. Gunakan tabel kode biner untuk menggantikan simbol-simbol dalam data dengan kode-kode biner.
6. Simpan data yang telah dikodekan dan tabel kode biner sebagai hasil kompresi.

Berikut adalah contoh implementasi sederhana Huffman Coding Algorithm menggunakan JavaScript:

```js
class Node {
  constructor(symbol, freq) {
    this.symbol = symbol;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

function buildHuffmanTree(symbols, freqs) {
  const priorityQueue = symbols.map((symbol, index) => new Node(symbol, freqs[index]));
  while (priorityQueue.length > 1) {
    priorityQueue.sort((a, b) => a.freq - b.freq);
    const leftNode = priorityQueue.shift();
    const rightNode = priorityQueue.shift();
    const combinedNode = new Node(null, leftNode.freq + rightNode.freq);
    combinedNode.left = leftNode;
    combinedNode.right = rightNode;
    priorityQueue.push(combinedNode);
  }
  return priorityQueue[0];
}

function buildHuffmanTable(root, prefix = '', table = {}) {
  if (root.symbol !== null) {
    table[root.symbol] = prefix;
  }
  if (root.left) {
    buildHuffmanTable(root.left, prefix + '0', table);
  }
  if (root.right) {
    buildHuffmanTable(root.right, prefix + '1', table);
  }
  return table;
}

function huffmanEncode(data) {
  const freqs = {};
  for (const symbol of data) {
    if (!freqs[symbol]) {
      freqs[symbol] = 0;
    }
    freqs[symbol]++;
  }

  const symbols = Object.keys(freqs);
  const root = buildHuffmanTree(symbols, symbols.map(symbol => freqs[symbol]));
  const table = buildHuffmanTable(root);

  let encodedData = '';
  for (const symbol of data) {
    encodedData += table[symbol];
  }

  return { encodedData, table };
}

const data = 'huffman_algorithm_example';
const { encodedData, table } = huffmanEncode(data);

console.log('Original data:', data);
console.log('Encoded data:', encodedData);
console.log('Huffman table:', table);
```

## Berikut ini adalah contoh visualisasi langkah-langkah Huffman Coding Algorithm dengan data berikut: "huffmanalgorithm_example"

1. Hitung Frekuensi Kemunculan Setiap Simbol
- h: 3 kali
- u: 2 kali
- f: 2 kali
- m: 1 kali
- a: 3 kali
- n: 1 kali
- a: 1 kali
- l: 1 kali
- g: 1 kali
- o: 2 kali
- r: 2 kali
- i : 1 kali
- t : 1 kali
- e: 2 kali
- x: 1 kali
- p: 1 kali

<br/>

2. Buat Simpul-simpul dan Priority Queue (Heap)

Berikut adalah daftar simpul yang dibuat berdasarkan frekuensi kemunculan setiap simbol:

- Simbol 'n', Frekuensi 1
- Simbol 'm', Frekuensi 1
- Simbol '_', Frekuensi 1
- Simbol 'l', Frekuensi 1
- Simbol 'g', Frekuensi 1
- Simbol 'i', Frekuensi 1
- Simbol 't', Frekuensi 1
- Simbol 'x', Frekuensi 1
- Simbol 'p', Frekuensi 1
- Simbol 'u', Frekuensi 2
- Simbol 'f', Frekuensi 2
- Simbol 'o', Frekuensi 2
- Simbol 'r', Frekuensi 2
- Simbol 'e', Frekuensi 2
- Simbol 'a', Frekuensi 3
- Simbol 'h', Frekuensi 3


<br/>

3. Bangun Pohon Huffman

Berdasarkan priority queue, kita bisa menggabungkan simpul-simpul dengan frekuensi terendah untuk membentuk pohon Huffman. Di bawah ini adalah visualisasi pohon Huffman yang terbentuk:

![image](https://github.com/user-attachments/assets/ea3bd571-c838-4692-ba2c-464a2685600d)

<br/>

4. Buat Tabel Kode Huffman
Kita akan menggabungkan simbol-simbol pada setiap cabang dalam pohon Huffman untuk membuat tabel kode Huffman. Simbol-simbol yang terletak pada cabang kiri akan memiliki kode biner '0', sementara yang terletak pada cabang kanan akan memiliki kode biner '1'. Berikut adalah tabel kode Huffman berdasarkan pohon Huffman di atas:

- n: 00000
- m: 00001
- _: 00010
- l: 00011
- g: 00100
- i: 00101
- t: 00110
- x: 00111
- p: 01000
- u: 01001
- f: 01010
- o: 01011
- r: 01100
- e: 01101
- a: 01110
- h: 01111

<br/>

5. Kodekan Data dengan Tabel Kode Huffman

Kodekan setiap simbol dalam data dengan menggunakan tabel kode Huffman. Data awal adalah "huffman_algorithm_example". Berikut adalah kode biner yang dihasilkan setelah mengkodekan data dengan tabel Huffman:

Encoded data: `"011110011101110011100101110110000100000110010010111101100001100011100101010001101011101011110100001111000110100010011101101000110100011100101100001001100100110100011101010010101110001010101111011111110001101001000101110100100110011101000001"`



#### Harap diingat bahwa contoh visualisasi di atas hanya merupakan ilustrasi sederhana dari langkah-langkah dalam Huffman Coding Algorithm. Implementasi sebenarnya akan lebih rumit dan melibatkan lebih banyak kode.

<br/>

Huffman Coding Algorithm memiliki beberapa manfaat dan kegunaan yang membuatnya penting dalam kompresi data dan penyimpanan informasi. Beberapa manfaat utamanya meliputi:

1. Kompresi Data: Salah satu manfaat utama Huffman Coding adalah kemampuannya untuk mengompresi data dengan efisien. Algoritma ini memungkinkan representasi data yang lebih pendek dan lebih efisien dengan mengurangi jumlah bit yang diperlukan untuk menyimpan informasi.

2. Pengurangan Penggunaan Ruang: Dengan menggantikan simbol-simbol yang paling sering muncul dengan kode biner yang lebih pendek, Huffman Coding dapat mengurangi penggunaan ruang penyimpanan yang diperlukan untuk menyimpan data. Hal ini sangat bermanfaat dalam penyimpanan file, pengiriman data melalui jaringan, dan penggunaan memori dalam komputasi.

3. Kecepatan Pemrosesan: Data yang telah dikompresi menggunakan Huffman Coding dapat dengan cepat didekompresi untuk mendapatkan kembali data aslinya. Proses ini efisien dan tidak memerlukan banyak waktu atau sumber daya.

4. Peningkatan Efisiensi Jaringan: Huffman Coding sangat berguna dalam mengurangi ukuran data yang harus dikirim melalui jaringan. Hal ini dapat menghemat bandwidth dan mempercepat transfer data.

5. Penyimpanan Multimedia: Huffman Coding sering digunakan dalam kompresi file multimedia seperti gambar, audio, dan video. Hal ini memungkinkan penyimpanan dan pengiriman konten multimedia dengan lebih efisien tanpa mengorbankan kualitas yang signifikan.

Kapan Harus Menggunakan Huffman Coding Algorithm:
- Ketika Anda perlu mengompresi atau menyimpan data dengan lebih efisien, terutama jika ada repetisi dan pola dalam data.
- Ketika Anda ingin mengurangi penggunaan ruang penyimpanan dalam penyimpanan file atau dalam pengiriman data melalui jaringan.
- Ketika Anda bekerja dengan data yang memiliki distribusi frekuensi yang tidak merata, seperti teks atau data multimedia.
- Huffman Coding sangat berguna dalam aplikasi seperti kompresi file, penyimpanan data dalam basis data, kompresi video dan audio, serta mengurangi overhead jaringan dalam pengiriman data.

Namun, penting untuk diingat bahwa Huffman Coding lebih cocok untuk data dengan distribusi frekuensi yang tidak merata. Dalam beberapa kasus, jika distribusi frekuensi relatif merata, algoritma kompresi lain seperti Run-Length Encoding atau algoritma Lempel-Ziv mungkin lebih efektif. 

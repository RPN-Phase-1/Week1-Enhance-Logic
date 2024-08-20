# Process Argv

process.argv adalah properti dalam lingkungan Node.js yang berisi array argumen baris perintah yang digunakan saat menjalankan script Node.js. Argumen ini adalah input yang diberikan saat menjalankan script dari terminal atau command line.

Properti process.argv adalah array di mana elemen pertama (process.argv[0]) adalah path ke binary Node.js, elemen kedua (process.argv[1]) adalah path ke script yang sedang dijalankan, dan elemen-elemen berikutnya adalah argumen yang diberikan saat menjalankan script.

Misalnya, jika kita menjalankan script Node.js dengan perintah seperti ini:

```
node script.js arg1 arg2 arg3
```

Maka process.argv akan memiliki nilai sebagai berikut:
```
process.argv[0] = "path/to/node"
process.argv[1] = "path/to/script.js"
process.argv[2] = "arg1"
process.argv[3] = "arg2"
process.argv[4] = "arg3"
```

Penggunaan umum dari `process.argv` adalah untuk menerima input dari pengguna saat menjalankan script dan melakukan tindakan tertentu berdasarkan input tersebut. Misalnya, jika kita ingin menjalankan skrip yang melakukan operasi berbeda berdasarkan argumen yang diberikan, kita dapat menggunakan `process.argv `untuk membaca dan memproses argumen tersebut.

rikut contoh penggunaan `process.argv`:

```js
// script.js
console.log("Argumen yang diberikan:");
console.log(process.argv);

// Ambil argumen kedua (index 2) sebagai nama pengguna
const username = process.argv[2];
if (username) {
  console.log(`Halo, ${username}! Selamat datang.`);
} else {
  console.log("Halo, siapa kamu?");
}
```

Jalankan skrip di atas dengan perintah:
```
node script.js John
```

Output yang diharapkan:
```
Argumen yang diberikan:
[
  'path/to/node',
  'path/to/script.js',
  'John'
]
Halo, John! Selamat datang.
```
Output akan berbeda jika tidak ada argumen yang diberikan.

process.argv memungkinkan kita untuk berinteraksi dengan pengguna melalui command line, memberikan argumen yang relevan, dan melakukan tindakan berdasarkan argumen tersebut dalam script Node.js yang dijalankan.

// Sekarang kalian berada di week 1 phase 1, dimana di week ini terakhirnya kalinya kalian bertemu dengan logic, karena next week dan seterusnya tugas tugas kalian bukan lagi cuman tentang soal algoritma dan jawaban di console.log. Di week 1 ini kalian akan belajar tentang paradigma programming lain yaitu (OOP) dan algoritma algoritma next level yang bakal berguna di interview kerja nanti. kalian juga bakal belajar data struktur baru seperti graph,  belajarlebih tentang terminal, cara membuat parameter dan animasi di terminal. 

// langsung saja kita mulai week 1 dan materi pertama kita adalah paradigma pemrograman.

/* ========================================================================================================================= */
// Programming Paradigm
// Paradigma pemrograman adalah pendekatan atau cara berpikir dalam mengembangkan solusi pemrograman. Ada beberapa paradigma pemrograman, termasuk paradigma pemrograman prosedural, berorientasi objek, fungsional, logika, dan lain-lain. Mari kita lihat contoh kode untuk beberapa paradigma menggunakan bahasa pemrograman JavaScript:
// Paradigma Pemrograman Prosedural:
// Paradigma ini berfokus pada urutan eksekusi instruksi yang terorganisir dengan baik. Contoh sederhana dari paradigma ini adalah kalkulator sederhana.

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

const hasilTambah = tambah(5, 3);
const hasilKurang = kurang(10, 4);

console.log("Hasil tambah:", hasilTambah);
console.log("Hasil kurang:", hasilKurang);


// Paradigma Berorientasi Objek:
// Paradigma ini berfokus pada pemodelan dunia nyata dengan menggunakan objek yang memiliki properti dan metode. Contoh di bawah ini adalah contoh sederhana pembuatan objek "Manusia."

class Manusia {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  perkenalan() {
    return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
  }
}

const orang = new Manusia("John", 25);
console.log(orang.perkenalan());

/* ========================================================================================================================= */
// Paradigma Pemrograman Fungsional:
// Paradigma ini berfokus pada fungsi sebagai unit dasar. Fungsi dapat diteruskan sebagai argumen dan mengembalikan nilai.

const angka = [1, 2, 3, 4, 5];

const kuadratkan = angka.map(function(item) {
  return item * item;
});

console.log(kuadratkan); // Output: [1, 4, 9, 16, 25]



/* ========================================================================================================================= */
// Paradigma Pemrograman Logika:
// Paradigma ini berfokus pada pemrograman berdasarkan aturan dan fakta logika. Prolog adalah contoh bahasa pemrograman yang berbasis pada paradigma logika.
// Ini bukan Prolog, tetapi contoh serupa
function manusia(X) {
  mempunyai(X, "kulit");
}

function mempunyai(seseorang, objek) {
  return true; // Logika dapat diimplementasikan sesuai kebutuhan
}

const seseorang = "John";
const objek = "kulit";

if (manusia(seseorang) && mempunyai(seseorang, objek)) {
  console.log(`${seseorang} memiliki ${objek}.`);
}

// Kalau kalian lihat, hampir semua paradigma kalian sudah pelajarin di phase 0. cuman paradigma orientasi objek saja yang belum kita pelajari, jadi kita bakal fokus belajar object oriented programming (OOP) di week 
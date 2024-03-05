/*
Dijkstra's Algorithm adalah algoritma yang digunakan untuk mencari jalur terpendek dari satu simpul ke semua simpul lain dalam graf berbobot. Algoritma ini dinamakan setelah matematikawan Belanda Edsger W. Dijkstra dan merupakan salah satu algoritma yang paling umum digunakan dalam pemrosesan graf.

Prinsip dasar dari algoritma Dijkstra adalah mempertimbangkan semua jalur yang mungkin dari simpul awal ke simpul tujuan, dan secara bertahap memilih jalur terpendek hingga mencapai simpul tujuan. Algoritma ini cocok untuk digunakan pada graf berbobot, di mana setiap sisi memiliki bobot yang mewakili jarak, biaya, atau metrik lainnya.

Berikut adalah langkah-langkah umum dari algoritma Dijkstra:

Inisialisasi: Atur nilai jarak awal dari simpul awal ke semua simpul lain sebagai tak terbatas (kecuali simpul awal sendiri yang bernilai 0). Buat sebuah himpunan (atau prioritas antrian) yang berisi simpul-simpul yang akan dijelajahi.

Looping: Selama himpunan tidak kosong, ambil simpul dengan jarak terpendek dari himpunan dan tandai sebagai "dikunjungi". Kemudian, periksa semua tetangga simpul ini yang belum dikunjungi. Jika jarak baru melalui simpul ini lebih pendek dari jarak sebelumnya, perbarui jaraknya.

Berhenti: Ulangi langkah 2 sampai himpunan kosong atau hingga Kalian mencapai simpul tujuan.

Setelah algoritma selesai, Kalian akan memiliki informasi tentang jarak terpendek dari simpul awal ke semua simpul lain dalam graf.

Contoh penggunaan Dijkstra's Algorithm dalam JavaScript:

function dijkstra(graph, startNode) {
  const distances = {}; // Menyimpan jarak terpendek dari startNode ke setiap simpul
  const visited = new Set(); // Menandai simpul-simpul yang sudah dikunjungi
  const queue = []; // Antrian prioritas untuk simpul-simpul yang akan dieksplorasi

  // Inisialisasi jarak awal dan antrian
  for (const node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
    queue.push({ node, distance: distances[node] });
  }

  // Looping utama
  while (queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance);
    const { node } = queue.shift();

    if (visited.has(node)) continue;

    visited.add(node);

    for (const neighbor in graph[node]) {
      const distance = distances[node] + graph[node][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        queue.push({ node: neighbor, distance });
      }
    }
  }

  return distances;
}

// Contoh graf berbobot dalam bentuk objek
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 8 },
  D: { B: 3, C: 8 }
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances); // Hasil jarak terpendek dari simpul A ke semua simpul lain


Kapan kita harus menggunakan Dijkstra's Algorithm?

Dijkstra's Algorithm sangat berguna ketika Kalian perlu mencari jalur terpendek antara dua simpul dalam graf berbobot. Ini dapat digunakan dalam berbagai konteks seperti perutean jaringan, navigasi peta, perencanaan perjalanan, dan lain-lain. Namun, algoritma ini bekerja efisien hanya pada graf yang tidak memiliki bobot negatif. Jika graf Kalian memiliki bobot negatif, Kalian mungkin perlu mempertimbangkan algoritma lain seperti Bellman-Ford Algorithm.














contoh visualisasi langkah demi langkah dari Dijkstra's Algorithm menggunakan contoh graf berikut:

      5       2
  A ----- B ----- C
  |  \  /      |  |
  |   \/       |  |
  |   /\       |  |
  |  /  \      |  |
  D ----- E ----- F
       3       8


Graf ini memiliki simpul A, B, C, D, E, dan F, serta sisi-sisi dengan bobot yang ditunjukkan di atas masing-masing sisi.

Langkah 1: Inisialisasi
Jarak awal dari simpul awal (A) ke semua simpul lain adalah tak terbatas, kecuali jarak dari A ke dirinya sendiri adalah 0.
Kami memasukkan semua simpul ke dalam antrian prioritas, dengan jarak terpendek pertama.

Langkah 2: Iterasi
Ambil simpul dengan jarak terpendek dari antrian (di sini adalah simpul A).
Periksa semua tetangga simpul ini (B dan D).
Hitung jarak baru melalui simpul saat ini ke tetangga. Jika jarak baru lebih pendek dari jarak sebelumnya, perbarui jarak.
Tandai simpul saat ini sebagai "dikunjungi".
Ulangi proses untuk simpul-simpul lain dalam antrian.

Berikut adalah visualisasi langkah-langkahnya:

Langkah 1: Inisialisasi
     A (0)
   /   |   \
5 /    |    \ 2
 /     |     \
B (∞) C (∞) D (∞)   E (∞) F (∞)


Langkah 2: Iterasi (Ambil simpul A)
Jarak terpendek dari A ke B adalah 5.
Jarak terpendek dari A ke D adalah 3.
     A (0)
   /   |   \
5 /    |    \ 2
 /     |     \
B (5)  C (∞) D (3)   E (∞) F (∞)


Langkah 3: Iterasi (Ambil simpul D)
Jarak terpendek dari A ke D melalui D adalah 3.
Jarak terpendek dari A ke E adalah ∞ (belum diketahui).
     A (0)
   /   |   \
5 /    |    \ 2
 /     |     \
B (5)  C (∞) D (3)   E (∞) F (∞)
            |
            8


Langkah 4: Iterasi (Ambil simpul B)
Jarak terpendek dari A ke B melalui D adalah 3 + 3 = 6.
Jarak terpendek dari A ke C adalah ∞ (belum diketahui).
Jarak terpendek dari A ke E adalah 5 (tidak berubah).
     A (0)
   /   |   \
5 /    |    \ 2
 /     |     \
B (5)  C (∞) D (3)   E (5) F (∞)
        |
        8


Langkah 5: Iterasi (Ambil simpul E)
Jarak terpendek dari A ke E melalui D adalah 3 + 3 + 3 = 9.
Jarak terpendek dari A ke C adalah ∞ (belum diketahui).
     A (0)
   /   |   \
5 /    |    \ 2
 /     |     \
B (5)  C (∞) D (3)   E (5) F (∞)
        |
        8
        |
        8


Langkah 6: Iterasi (Ambil simpul C)
Jarak terpendek dari A ke C melalui D adalah 3 + 3 = 6.
     A (0)
   /   |   \
5 /    |    \ 2
 /     |     \
B (5)  C (6) D (3)   E (5) F (∞)
        |
        8
        |
        8


Langkah 7: Iterasi (Ambil simpul F)
Jarak terpendek dari A ke F melalui D adalah 3 + 3 + 8 = 14.
     A (0)
   /   |   \
5 /    |    \ 2
 /     |     \
B (5)  C (6) D (3)   E (5) F (14)
        |
        8
        |
        8


Hasil akhir adalah jarak terpendek dari A ke semua simpul lain:
A -> A: 0
A -> B: 5
A -> C: 6
A -> D: 3
A -> E: 5
A -> F: 14

Semoga visualisasi ini membantu Anda memahami cara kerja Dijkstra's Algorithm!









Belajar contoh implementasi Dijkstra’s Algorithm pada soal competitive programming.
Deskripsi Soal:
Kalian diminta untuk mengimplementasikan sebuah fungsi shortestPathWeightedGraph yang akan menghitung jarak terpendek antara dua simpul pada sebuah graph berbobot. Graph tersebut akan diwakili oleh objek JavaScript yang memiliki properti-properti sebagai simpul-simpulnya dan nilai-nilai sebagai koneksi antar simpul dengan bobot yang terhubung.

Tugas:
Implementasikan fungsi shortestPathWeightedGraph dengan tiga parameter:
graph (objek): Representasi graph berbobot dalam bentuk objek. Setiap properti dalam objek merepresentasikan sebuah simpul dan memiliki nilai yang merupakan array dari objek-objek yang menyatakan tetangga-tetangganya beserta bobotnya. Contohnya: 'A': [{ node: 'B', weight: 3 }, { node: 'C', weight: 2 }] menyatakan bahwa simpul 'A' terhubung ke simpul 'B' dengan bobot 3 dan ke simpul 'C' dengan bobot 2.
start (string): Nama simpul awal.
target (string): Nama simpul tujuan.

Fungsi tersebut harus mengembalikan jarak terpendek dari simpul start ke simpul target dalam graph berbobot yang diberikan. Jika tidak ada jalur yang memungkinkan, fungsi harus mengembalikan nilai -1.

Contoh:
Misalkan terdapat graph berbobot berikut:
   A --3-- B --1-- C --2-- D

Graph tersebut dapat direpresentasikan dalam bentuk objek sebagai berikut:
{
  'A': [{ node: 'B', weight: 3 }, { node: 'C', weight: 2 }],
  'B': [{ node: 'C', weight: 1 }, { node: 'D', weight: 4 }],
  'C': [{ node: 'D', weight: 2 }],
  'D': []
}

Jika kita ingin mencari jarak terpendek dari simpul 'A' ke simpul 'D', maka fungsi harus mengembalikan nilai 4.
Contoh code jawab soal tersebut:
*/

function shortestPathWeightedGraph(graph, start, target) {
  const INF = Number.MAX_SAFE_INTEGER; // Jarak tak terhingga untuk inisialisasi
  const distances = {}; // Menyimpan jarak terpendek dari start ke setiap simpul
  const visited = new Set(); // Menandai simpul yang sudah dikunjungi
  const priorityQueue = []; // Priority queue sederhana

  // Inisialisasi jarak dari start ke semua simpul dengan tak terhingga
  for (const node in graph) {
    distances[node] = INF;
  }

  distances[start] = 0; // Jarak dari start ke start adalah 0
  priorityQueue.push([start, 0]); // Masukkan simpul start ke priority queue dengan jarak 0

  // Loop hingga priority queue kosong
  while (priorityQueue.length > 0) {
    priorityQueue.sort((a, b) => a[1] - b[1]); // Urutkan berdasarkan jarak terpendek
    const [currentNode, currentDistance] = priorityQueue.shift(); // Ambil simpul dengan jarak terpendek dari priority queue

    if (visited.has(currentNode)) {
      continue; // Lewati jika simpul sudah dikunjungi sebelumnya
    }

    visited.add(currentNode); // Tandai simpul sebagai dikunjungi

    // Iterasi melalui tetangga dari simpul saat ini
    for (const { node: neighbor, weight } of graph[currentNode]) {
      const totalDistance = currentDistance + weight;
      // Update jarak terpendek jika totalDistance lebih kecil dari jarak sebelumnya
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        priorityQueue.push([neighbor, totalDistance]); // Masukkan simpul tetangga ke priority queue
      }
    }
  }

  // Kembalikan jarak terpendek dari start ke target, jika tidak ada jalur, kembalikan -1
  return distances[target] !== INF ? distances[target] : -1;
}

// Implementasi Dijkstra's Algorithm dimulai dari fungsi shortestPathWeightedGraph
// yang menerima graph berbobot, simpul awal, dan simpul tujuan. Kode tersebut
// melakukan inisialisasi variabel dan priority queue, lalu iterasi melalui simpul-simpul
// untuk mencari jarak terpendek dari start ke target.
// Setelah selesai, fungsi mengembalikan jarak terpendek atau -1 jika tidak ada jalur.

// Testcase 1
console.log(
  shortestPathWeightedGraph(
    {
      // Visualisasi graph:
      //   A --3-- B --1-- C --2-- D
      A: [
        { node: "B", weight: 3 },
        { node: "C", weight: 2 },
      ],
      B: [
        { node: "C", weight: 1 },
        { node: "D", weight: 4 },
      ],
      C: [{ node: "D", weight: 2 }],
      D: [],
    },
    "A",
    "D"
  )
); // Output: 4

// Testcase 2
console.log(
  shortestPathWeightedGraph(
    {
      // Visualisasi graph:
      //   A --3-- B --1-- C --2-- D
      A: [
        { node: "B", weight: 3 },
        { node: "C", weight: 2 },
      ],
      B: [
        { node: "C", weight: 1 },
        { node: "D", weight: 4 },
      ],
      C: [{ node: "D", weight: 2 }],
      D: [],
    },
    "B",
    "D"
  )
); // Output: 3

// Testcase 3
console.log(
  shortestPathWeightedGraph(
    {
      // Visualisasi graph:
      //   A --3-- B --1-- C --2-- D
      A: [
        { node: "B", weight: 3 },
        { node: "C", weight: 2 },
      ],
      B: [
        { node: "C", weight: 1 },
        { node: "D", weight: 4 },
      ],
      C: [{ node: "D", weight: 2 }],
      D: [],
    },
    "A",
    "A"
  )
); // Output: 0

// Testcase 4
console.log(
  shortestPathWeightedGraph(
    {
      // Visualisasi graph:
      //   A --3-- B --1-- C --2-- D
      A: [
        { node: "B", weight: 3 },
        { node: "C", weight: 2 },
      ],
      B: [
        { node: "C", weight: 1 },
        { node: "D", weight: 4 },
      ],
      C: [{ node: "D", weight: 2 }],
      D: [],
    },
    "C",
    "B"
  )
); // Output: -1


/* berikut penjelasan dari jawaban tersebut:

Inisialisasi Variabel: Pada awalnya, kode membuat variabel INF yang merepresentasikan jarak tak terhingga, objek distances untuk menyimpan jarak terpendek dari start ke setiap simpul, visited sebagai himpunan untuk menyimpan simpul yang sudah dikunjungi, dan priorityQueue sebagai antrean prioritas sederhana.

Inisialisasi Jarak: Loop pertama for (const node in graph) digunakan untuk menginisialisasi jarak dari simpul start ke semua simpul lainnya dengan nilai tak terhingga, kecuali simpul start sendiri yang diinisialisasi dengan 0.

Algoritma Dijkstra's: Selanjutnya, algoritma Dijkstra dimulai dengan menggunakan priority queue yang diurutkan berdasarkan jarak terpendek. Ini memastikan bahwa simpul dengan jarak terpendek selalu diambil dari antrian terlebih dahulu.

Pengolahan Simpul: Setelah mengambil simpul dengan jarak terpendek dari priority queue, kode memeriksa apakah simpul tersebut sudah dikunjungi sebelumnya. Jika sudah, maka simpul dilewati.

Pengolahan Tetangga: Selanjutnya, kode melakukan iterasi melalui tetangga-tetangga dari simpul saat ini. Untuk setiap tetangga, total jarak dari start ke tetangga tersebut dihitung dan dibandingkan dengan jarak sebelumnya. Jika total jarak lebih kecil, maka jarak terpendek diperbarui dan tetangga dimasukkan ke dalam priority queue.

Kembali Hasil: Setelah semua simpul telah diproses, hasil akhir ditemukan di objek distances. Jika jarak terpendek dari start ke target tidak berubah (masih tak terhingga), maka dikembalikan nilai -1, menandakan bahwa tidak ada jalur dari start ke target.

Testcase dan Implementasi: Di bawah komentar "Testcase 1" dan seterusnya, terdapat pemanggilan fungsi shortestPathWeightedGraph dengan graph dan testcase yang berbeda. Kode ini menguji algoritma Dijkstra dengan contoh kasus dan mencetak hasil ke konsol.

Keseluruhan implementasi di atas menggunakan pendekatan Dijkstra's Algorithm untuk mencari jarak terpendek antara simpul start dan target pada graph berbobot. Komentar pada kode menjelaskan langkah-langkah yang diambil dalam algoritma untuk memastikan pemahaman yang lebih baik. */
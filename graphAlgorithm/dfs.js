/*

Depth-First Search (DFS):
DFS adalah algoritma pencarian yang bekerja dengan cara menjelajahi graph secara lebih dalam terlebih dahulu, mengunjungi semua simpul dalam suatu cabang sebelum kembali ke simpul sebelumnya dan menjelajahi cabang lainnya. Pendekatan ini dapat diimplementasikan dengan rekursi.

class Graph {
  // ... (implementasi Graph lainnya)

  // Depth-First Search
  dfs(startValue, targetValue, visited = new Set()) {
    if (visited.has(startValue)) return false; // Jika simpul sudah dikunjungi, kembalikan false

    visited.add(startValue); // Tandai simpul sebagai sudah dikunjungi
    if (startValue === targetValue) return true; // Jika target ditemukan, kembalikan true

    const startNode = this.nodes.get(startValue);
    for (const neighbor of startNode.edges) {
      if (this.dfs(neighbor.value, targetValue, visited)) {
        return true; // Jika target ditemukan di tetangga, kembalikan true
      }
    }

    return false; // Jika target tidak ditemukan
  }
}


Kompleksitas Waktu:
Waktu: O(V + E), di mana V adalah jumlah simpul (nodes) dan E adalah jumlah sisi (edges).
DFS juga mengunjungi setiap simpul dan sisi tepat satu kali seperti BFS.

Keuntungan dari DFS adalah:
DFS lebih efisien dalam mengunjungi semua simpul dalam satu cabang sebelum pindah ke cabang lainnya.
DFS umumnya digunakan dalam mencari jalur yang lebih panjang atau dalam solusi optimasi ketika mencari solusi terbaik bukan prioritas utama.
 
Namun, DFS dapat tersesat dalam grafik yang sangat dalam atau berlubang tanpa solusi. Oleh karena itu, jika Anda ingin mencari jalur terpendek, DFS mungkin tidak akan bekerja dengan baik, terutama dalam grafik yang berbentuk pohon yang dalam.

Pastikan untuk memahami kode dan komentar ini dengan seksama. Anda dapat menjalankan kode ini dan menguji algoritma BFS dan DFS pada contoh graph yang telah Anda definisikan sebelumnya. Kedua algoritma ini memiliki kegunaan yang berbeda tergantung pada skenario penggunaan dan tujuan pencarian Anda.

Kapan Menggunakan BFS dan DFS:
Gunakan BFS jika Anda ingin mencari jalur terpendek antara dua simpul, terutama jika semua sisi memiliki bobot yang sama.
Gunakan DFS jika Anda ingin menjelajahi cabang secara lebih dalam terlebih dahulu, atau dalam skenario di mana Anda mencari solusi optimasi.
Jika Anda tidak yakin antara BFS dan DFS, atau jika Anda perlu menjelajahi seluruh grafik tanpa memperhatikan urutan, Anda juga bisa menggunakan BFS atau DFS sesuai kebutuhan.

Pilihan antara BFS dan DFS tergantung pada struktur grafik Anda, tujuan pencarian Anda, dan bagaimana Anda ingin menjelajah grafik tersebut.

// ===========================================================================================================================



Soal 2: Depth-First Search (DFS)
Judul: Island Count

Deskripsi:
Anda diberikan sebuah peta yang direpresentasikan dalam bentuk matriks grid, di mana "1" mewakili daratan dan "0" mewakili air. Anda perlu menghitung jumlah pulau yang ada di peta. Pulau adalah area yang terdiri dari daratan yang saling berdekatan secara horizontal atau vertikal.

Tuliskan sebuah fungsi yang mengambil input berupa matriks grid dan mengembalikan jumlah pulau yang ada.

 */

class Graph {
  // Implementasi graph dan metode DFS
  constructor(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
  }

  // Fungsi untuk menjalankan DFS pada grid
  dfs(row, col) {
    // Cek apakah posisi saat ini di luar batas atau merupakan air
    if (
      row < 0 ||
      col < 0 ||
      row >= this.rows ||
      col >= this.cols ||
      this.grid[row][col] === 0
    ) {
      return;
    }

    // Tandai daratan saat ini sebagai sudah dikunjungi dengan mengubah nilainya menjadi 0
    this.grid[row][col] = 0;

    // Jelajahi semua tetangga dari daratan saat ini (horizontal dan vertikal)
    this.dfs(row - 1, col); // Atas
    this.dfs(row + 1, col); // Bawah
    this.dfs(row, col - 1); // Kiri
    this.dfs(row, col + 1); // Kanan
  }

  // Fungsi untuk menghitung jumlah pulau
  countIslands() {
    let count = 0;
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.grid[row][col] === 1) {
          count++;
          this.dfs(row, col); // Lakukan DFS dari sel daratan ini
        }
      }
    }
    return count;
  }
}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau

  const graph = new Graph(grid);
  // Membuat instance Graph dengan grid yang diberikan

  return graph.countIslands();
  // Menggunakan metode countIslands untuk mendapatkan jumlah pulau
}

// Testcase 1
console.log(
  islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // Expected Output: 1

// Testcase 2
console.log(
  islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ])
); // Expected Output: 3

// Testcase 3
console.log(
  islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1],
  ])
); // Expected Output: 5

// Testcase 4
console.log(
  islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ])
); // Expected Output: 4

// Testcase 5
console.log(
  islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ])
); // Expected Output: 6

// Testcase 6
console.log(
  islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0],
  ])
); // Expected Output: 2

// Testcase 7
console.log(
  islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
); // Expected Output: 3

/* 

Breadth-First Search (BFS):
BFS adalah algoritma pencarian yang bekerja dengan cara menjelajahi graph secara berlapis-lapis, mulai dari simpul awal dan kemudian bergerak ke tetangga-tetangga terdekat sebelum melanjutkan ke tetangga-tetangga yang lebih jauh. Dalam pendekatan ini, semua simpul dalam lapisan yang sama akan diperiksa sebelum berpindah ke lapisan berikutnya.

class Graph {
  // ... (implementasi Graph lainnya)

  // Breadth-First Search
  bfs(startValue, targetValue) {
    const visited = new Set(); // Set untuk melacak simpul yang telah dikunjungi
    const queue = []; // Antrian untuk menjaga simpul yang akan diperiksa

    // Menambahkan simpul awal ke antrian dan tanda sebagai sudah dikunjungi
    queue.push(this.nodes.get(startValue));
    visited.add(startValue);

    while (queue.length > 0) {
      const currentNode = queue.shift(); // Ambil simpul dari depan antrian
      if (currentNode.value === targetValue) return true; // Jika ditemukan, kembalikan true

      // Periksa semua tetangga dari simpul saat ini
      for (const neighbor of currentNode.edges) {
        if (!visited.has(neighbor.value)) {
          queue.push(neighbor); // Tambahkan tetangga yang belum dikunjungi ke antrian
          visited.add(neighbor.value); // Tandai tetangga sebagai sudah dikunjungi
        }
      }
    }

    return false; // Jika target tidak ditemukan
  }
}


Kompleksitas Waktu:
Waktu: O(V + E), di mana V adalah jumlah simpul (nodes) dan E adalah jumlah sisi (edges).
BFS mengunjungi setiap simpul dan sisi tepat satu kali.

Keuntungan dari BFS adalah:
BFS menemukan jalur terpendek antara dua simpul jika graph memiliki bobot yang sama pada setiap sisi.
Jika Anda ingin menemukan jalur terpendek dalam jumlah langkah, maka BFS biasanya merupakan pilihan yang baik.
Digunakan dalam pencarian yang melibatkan grafik yang cukup besar, tetapi memiliki kedalaman yang terbatas.


// ===========================================================================================================================




Soal 1: Breadth-First Search (BFS)

Judul: Shortest Path Friends

Deskripsi:

Anda diberikan daftar teman-teman dalam bentuk objek dengan struktur sebagai berikut:

const friends = {
  'Alice': ['Bob', 'Charlie'],
  'Bob': ['Alice', 'David', 'Eve'],
  'Charlie': ['Alice', 'Eve'],
  'David': ['Bob'],
  'Eve': ['Bob', 'Charlie']
};


Objek friends ini menggambarkan hubungan pertemanan antara beberapa orang. Setiap kunci dalam objek tersebut adalah nama seseorang, dan nilai yang terkait adalah daftar teman-teman orang tersebut.

Sebagai contoh, untuk orang Alice, teman-temannya adalah Bob dan Charlie. Untuk orang Bob, teman-temannya adalah Alice, David, dan Eve, dan seterusnya.

Tugas Anda adalah mengimplementasikan fungsi shortestPath(friends, start, target) yang akan menghitung panjang jalur terpendek dari teman start ke teman target menggunakan algoritma BFS (Breadth-First Search). Ini berarti Anda akan mencari jalur yang melibatkan teman-teman secara berurutan dari start ke target.

Jika tidak ada jalur yang menghubungkan start dan target, maka fungsi harus mengembalikan nilai -1.

Sebagai contoh, dalam objek friends yang diberikan di atas, jika Anda ingin mencari jalur terpendek dari Alice ke David, Anda akan menemukan bahwa jalur terpendek adalah Alice -> Bob -> David, yang memiliki panjang 2.

*/

function shortestPath(friends, start, target) {
  //code
  if (start === target) return 0; // Jika start sama dengan target, jalur terpendek adalah 0

  const visited = new Set(); // Set untuk melacak simpul yang telah dikunjungi
  const queue = []; // Antrian untuk menjaga simpul yang akan diperiksa

  queue.push({ person: start, depth: 0 }); // Menambahkan simpul awal ke antrian dengan kedalaman 0
  visited.add(start); // Tandai simpul awal sebagai sudah dikunjungi

  while (queue.length > 0) {
    const { person, depth } = queue.shift(); // Ambil simpul dari depan antrian

    // Jika simpul saat ini adalah target, kembalikan kedalaman saat ini sebagai panjang jalur
    if (person === target) return depth;

    // Iterasi melalui semua teman dari simpul saat ini
    for (const friend of friends[person]) {
      // Jika teman belum dikunjungi, tambahkan ke antrian dan tandai sebagai dikunjungi
      if (!visited.has(friend)) {
        queue.push({ person: friend, depth: depth + 1 });
        visited.add(friend);
      }
    }
  }
  return -1; // Jika tidak ada jalur yang ditemukan, kembalikan -1
}

// Testcase 1
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Alice",
    "David"
  )
); // Expected Output: 2

// Testcase 2
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Alice",
    "Eve"
  )
); // Expected Output: 2

// Testcase 3
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Alice",
    "Alice"
  )
); // Expected Output: 0

// Testcase 4
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "David",
    "Charlie"
  )
); // Expected Output: 3

// Testcase 5
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Eve",
    "Bob"
  )
); // Expected Output: 1

// Testcase 6
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Charlie",
    "Alice"
  )
); // Expected Output: 1

// Testcase 7
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "David",
    "Eve"
  )
); // Expected Output: 2

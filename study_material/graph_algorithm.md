# Graph Algorithm

Graph adalah struktur data yang terdiri dari simpul (node) dan sisi (edge) yang menghubungkan simpul-simpul tersebut. Graph digunakan untuk merepresentasikan berbagai jenis hubungan atau jaringan antara entitas. Ada dua jenis utama graph: directed (berarah) dan undirected (tak berarah).

Mari kita mulai dengan membuat representasi sederhana untuk graph menggunakan JavaScript. Pertama, mari kita buat struktur dasar untuk simpul (node):

```js
class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }

  addEdge(node) {
    this.edges.push(node);
  }
}
```

Kemudian, kita bisa membuat kelas untuk merepresentasikan graph itu sendiri:

```js
class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const newNode = new Node(value);
    this.nodes.push(newNode);
    return newNode;
  }

  addEdge(node1, node2) {
    node1.addEdge(node2);
    // Jika graph tidak berarah, tambahkan ini juga:
    // node2.addEdge(node1);
  }
}
```

Sekarang mari kita buat contoh penggunaan dari struktur graph yang sudah kita buat:
```js
const myGraph = new Graph();

const nodeA = myGraph.addNode('A');
const nodeB = myGraph.addNode('B');
const nodeC = myGraph.addNode('C');

myGraph.addEdge(nodeA, nodeB);
myGraph.addEdge(nodeB, nodeC);
myGraph.addEdge(nodeC, nodeA);

console.log(myGraph);
```

Pada contoh yang telah kita buat, kita memiliki 3 simpul (A, B, dan C) dan 3 sisi yang menghubungkannya:
- Node A terhubung ke Node B
- Node B terhubung ke Node C
- Node C terhubung kembali ke Node A

Ini adalah representasi visual dari graph yang telah kita buat:

![image](https://github.com/user-attachments/assets/1aefa00f-fb8f-4b36-94da-3a44cc41d631)

Di dalam representasi ini, setiap huruf merepresentasikan simpul, dan garis-garis (edges) merepresentasikan hubungan antara simpul-simpul tersebut. Node A terhubung ke Node B dan Node C, Node B terhubung ke Node A dan Node C, dan Node C terhubung ke Node A dan Node B.

Jika Anda ingin melihat visualisasi grafik secara interaktif, Anda bisa menggunakan pustaka JavaScript seperti D3.js atau pustaka visualisasi grafik lainnya. Anda bisa menggambar simpul dan sisi menggunakan elemen HTML (misalnya, div atau svg) berdasarkan data yang Anda miliki.

Tentu saja, struktur graph ini masih sangat sederhana. Dalam implementasi nyata, Anda mungkin perlu menambahkan berbagai fitur seperti penghapusan simpul atau sisi, pencarian jarak terpendek, dan banyak lagi, tergantung pada kebutuhan Anda.

Selain itu, ada juga pustaka JavaScript yang sudah ada, seperti NetworkX.js, yang menyediakan fungsionalitas yang lebih canggih dan siap pakai untuk bekerja dengan graph.


mari kita pelajari beberapa fitur yang lebih kompleks dari struktur data graph menggunakan JavaScript. Kami akan melihat bagaimana melaksanakan penghapusan simpul dan sisi, serta melakukan pencarian jarak terpendek menggunakan algoritma Breadth-First Search (BFS) dan Depth-First Search (DFS). 

Berikut adalah contoh implementasi lebih lanjut:
```js
class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(value) {
    this.nodes.set(value, new Node(value));
  }

  addEdge(source, destination) {
    if (!this.nodes.has(source) || !this.nodes.has(destination)) {
      throw new Error('Source or destination node does not exist.');
    }
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    sourceNode.addEdge(destinationNode);
  }

  removeNode(value) {
    const nodeToRemove = this.nodes.get(value);
    if (!nodeToRemove) return;
    
    for (const node of this.nodes.values()) {
      node.removeEdge(nodeToRemove);
    }
    
    this.nodes.delete(value);
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    if (!sourceNode || !destinationNode) return;
    
    sourceNode.removeEdge(destinationNode);
  }

  // Breadth-First Search
  bfs(startValue, targetValue) {
    const visited = new Set();
    const queue = [];
    queue.push(this.nodes.get(startValue));

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode.value === targetValue) return true;

      visited.add(currentNode);
      for (const neighbor of currentNode.edges) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }

    return false;
  }

  // Depth-First Search
  dfs(startValue, targetValue, visited = new Set()) {
    if (visited.has(startValue)) return false;
    
    visited.add(startValue);
    if (startValue === targetValue) return true;

    const startNode = this.nodes.get(startValue);
    for (const neighbor of startNode.edges) {
      if (this.dfs(neighbor.value, targetValue, visited)) {
        return true;
      }
    }

    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }

  addEdge(node) {
    this.edges.push(node);
  }

  removeEdge(node) {
    const index = this.edges.indexOf(node);
    if (index !== -1) {
      this.edges.splice(index, 1);
    }
  }
}
```

Dalam contoh di atas, kita telah menambahkan metode removeNode, removeEdge, serta implementasi BFS dan DFS ke dalam kelas Graph. Metode-metode ini memberikan fitur lebih lanjut untuk mengelola graph dan melakukan pencarian.
berikut ini adalah contoh penggunaan kode untuk melakukan operasi-operasi pada graph yang telah kita definisikan sebelumnya:

Mari kita anggap kita memiliki graph dengan simpul-simpul A, B, C, dan D, serta beberapa sisi yang menghubungkan mereka:

```js
// Membuat graph dan menambahkan simpul serta sisi
const myGraph = new Graph();

myGraph.addNode('A');
myGraph.addNode('B');
myGraph.addNode('C');
myGraph.addNode('D');

myGraph.addEdge('A', 'B');
myGraph.addEdge('B', 'C');
myGraph.addEdge('C', 'A');
myGraph.addEdge('C', 'D');

console.log("Graph awal:");
console.log(myGraph);

// Menghapus simpul 'B' dan sisi antara 'C' dan 'D'
myGraph.removeNode('B');
myGraph.removeEdge('C', 'D');

console.log("Setelah penghapusan simpul dan sisi:");
console.log(myGraph);

// Pencarian jarak terpendek menggunakan BFS dari 'A' ke 'D'
const bfsResult = myGraph.bfs('A', 'D');
console.log("Pencarian jarak terpendek menggunakan BFS:", bfsResult);

// Pencarian jarak terpendek menggunakan DFS dari 'A' ke 'D'
const dfsResult = myGraph.dfs('A', 'D');
console.log("Pencarian jarak terpendek menggunakan DFS:", dfsResult);
```
Berikut adalah representasi visual dari graph ini:

![image](https://github.com/user-attachments/assets/ca69a5b7-de0e-4455-b944-28a2989254ac)

Sekarang, mari kita lakukan beberapa operasi tambahan:

1. Hapus simpul 'B':
Setelah menghapus simpul 'B', sisi yang terhubung ke 'B' juga akan dihapus.

![image](https://github.com/user-attachments/assets/8884759c-056d-4405-b59f-bb4edeeebb79)

2. Hapus sisi antara 'C' dan 'D':
Setelah menghapus sisi antara 'C' dan 'D', graph tetap sama hanya saja sisi tersebut hilang.

![image](https://github.com/user-attachments/assets/fe70708e-3a95-412d-93ec-203e2e024806)

3. Pencarian jarak terpendek menggunakan BFS dari 'A' ke 'D':
BFS akan mengunjungi simpul secara berurutan A, B, C, D. Jarak terpendek dari 'A' ke 'D' adalah 2 sisi.

![image](https://github.com/user-attachments/assets/abec8362-fc71-475f-a2ae-a5aac83161ab)

4. Pencarian jarak terpendek menggunakan DFS dari 'A' ke 'D':
DFS mungkin mengunjungi simpul dalam urutan A, B, C, D atau A, C, D. Jarak terpendek dari 'A' ke 'D' adalah 2 sisi.

![image](https://github.com/user-attachments/assets/b6ea547e-5fb7-4dda-93bd-33b863488353)

Harapannya, deskripsi visual ini membantu Anda memahami bagaimana graph dapat diubah oleh operasi-operasi tersebut dan bagaimana algoritma BFS dan DFS bekerja dalam mencari jalur di dalam graph. 


#

# Graph Algorithm (BFS dan DFS)
Breadth-First Search (BFS) dan Depth-First Search (DFS) adalah dua algoritma pencarian yang digunakan dalam struktur data graph. Kedua algoritma ini memiliki tujuan yang sama, yaitu untuk menemukan atau menjelajahi simpul tertentu dalam graph, tetapi mereka melakukannya dengan pendekatan yang berbeda.

## Breadth-First Search (BFS):
BFS adalah algoritma pencarian yang bekerja dengan cara menjelajahi graph secara berlapis-lapis, mulai dari simpul awal dan kemudian bergerak ke tetangga-tetangga terdekat sebelum melanjutkan ke tetangga-tetangga yang lebih jauh. Dalam pendekatan ini, semua simpul dalam lapisan yang sama akan diperiksa sebelum berpindah ke lapisan berikutnya.

```js
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
```

Kompleksitas Waktu:
- Waktu: O(V + E), di mana V adalah jumlah simpul (nodes) dan E adalah jumlah sisi (edges).
- BFS mengunjungi setiap simpul dan sisi tepat satu kali.

<br/>

Keuntungan dari BFS adalah:
- BFS menemukan jalur terpendek antara dua simpul jika graph memiliki bobot yang sama pada setiap sisi.
- Jika Anda ingin menemukan jalur terpendek dalam jumlah langkah, maka BFS biasanya merupakan pilihan yang baik.
- Digunakan dalam pencarian yang melibatkan grafik yang cukup besar, tetapi memiliki kedalaman yang terbatas.


## Depth-First Search (DFS):
DFS adalah algoritma pencarian yang bekerja dengan cara menjelajahi graph secara lebih dalam terlebih dahulu, mengunjungi semua simpul dalam suatu cabang sebelum kembali ke simpul sebelumnya dan menjelajahi cabang lainnya. Pendekatan ini dapat diimplementasikan dengan rekursi.

```js
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
```

Kompleksitas Waktu:
- Waktu: O(V + E), di mana V adalah jumlah simpul (nodes) dan E adalah jumlah sisi (edges).
- DFS juga mengunjungi setiap simpul dan sisi tepat satu kali seperti BFS.

<br/> 

Keuntungan dari DFS adalah:
- DFS lebih efisien dalam mengunjungi semua simpul dalam satu cabang sebelum pindah ke cabang lainnya.
- DFS umumnya digunakan dalam mencari jalur yang lebih panjang atau dalam solusi optimasi ketika mencari solusi terbaik bukan prioritas utama.


Namun, DFS dapat tersesat dalam grafik yang sangat dalam atau berlubang tanpa solusi. Oleh karena itu, jika Anda ingin mencari jalur terpendek, DFS mungkin tidak akan bekerja dengan baik, terutama dalam grafik yang berbentuk pohon yang dalam.

Pastikan untuk memahami kode dan komentar ini dengan seksama. Anda dapat menjalankan kode ini dan menguji algoritma BFS dan DFS pada contoh graph yang telah Anda definisikan sebelumnya. Kedua algoritma ini memiliki kegunaan yang berbeda tergantung pada skenario penggunaan dan tujuan pencarian Anda.

Kapan Menggunakan BFS dan DFS:
- Gunakan BFS jika Anda ingin mencari jalur terpendek antara dua simpul, terutama jika semua sisi memiliki bobot yang sama.
- Gunakan DFS jika Anda ingin menjelajahi cabang secara lebih dalam terlebih dahulu, atau dalam skenario di mana Anda mencari solusi optimasi.
- Jika Anda tidak yakin antara BFS dan DFS, atau jika Anda perlu menjelajahi seluruh grafik tanpa memperhatikan urutan, Anda juga bisa menggunakan BFS atau DFS sesuai kebutuhan.

Pilihan antara BFS dan DFS tergantung pada struktur grafik Anda, tujuan pencarian Anda, dan bagaimana Anda ingin menjelajah grafik tersebut.

# Source Tambahan Queue Data Structure
Ada baiknya kita juga belajar queue data structure sebelum implementasi graph. karena queue dibutuhkan di 2 algoritma ini.
https://www.geeksforgeeks.org/queue-data-structure/

Queue adalah struktur data yang mengikuti konsep FIFO (First-In-First-Out), yang berarti elemen pertama yang dimasukkan ke dalam queue akan menjadi yang pertama dikeluarkan. Queue mirip dengan antrian dalam kehidupan sehari-hari, seperti antrian di toko atau di tempat pembayaran.

Dalam JavaScript, Anda dapat mengimplementasikan queue menggunakan array biasa. Anda dapat menambahkan elemen baru ke bagian akhir array menggunakan metode push(), dan menghapus elemen dari bagian depan array menggunakan metode shift(). Namun, untuk implementasi yang lebih efisien, terutama dalam kasus dengan jumlah elemen yang besar, Anda bisa menggunakan LinkedList.

Contoh implementasi queue dalam JavaScript:

```js
// Implementasi queue menggunakan array
const queue = [];

// Menambahkan elemen ke queue
queue.push(1);
queue.push(2);
queue.push(3);

// Menghapus dan mengembalikan elemen pertama dari queue
const firstElement = queue.shift();
console.log(firstElement); // Output: 1

// Sekarang queue: [2, 3]
```
Contoh implementasi queue dalam graph algorithm:

```js
class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(node) {
    this.adjList.set(node, []);
  }

  addEdge(node1, node2) {
    this.adjList.get(node1).push(node2);
  }

  bfs(startNode) {
    const visited = new Set();
    const queue = [];

    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode);

      for (const neighbor of this.adjList.get(currentNode)) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log('BFS Traversal:');
graph.bfs('A');
```

Dalam contoh di atas, implementasi Breadth-First Search (BFS) pada graf menggunakan queue. Node-node yang belum dikunjungi dimasukkan ke dalam queue dan dikeluarkan satu per satu saat dilakukan penjelajahan. Dalam hal ini, queue digunakan untuk menjaga urutan traversal dan mencegah loop tak terbatas saat menjelajahi graf.

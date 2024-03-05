/*
Graph adalah struktur data yang terdiri dari simpul (node) dan sisi (edge) yang menghubungkan simpul-simpul tersebut. Graph digunakan untuk merepresentasikan berbagai jenis hubungan atau jaringan antara entitas. Ada dua jenis utama graph: directed (berarah) dan undirected (tak berarah).

Mari kita mulai dengan membuat representasi sederhana untuk graph menggunakan JavaScript. Pertama, mari kita buat struktur dasar untuk simpul (node):

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }

  addEdge(node) {
    this.edges.push(node);
  }
}


Kemudian, kita bisa membuat kelas untuk merepresentasikan graph itu sendiri:

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


Sekarang mari kita buat contoh penggunaan dari struktur graph yang sudah kita buat:

const myGraph = new Graph();

const nodeA = myGraph.addNode('A');
const nodeB = myGraph.addNode('B');
const nodeC = myGraph.addNode('C');

myGraph.addEdge(nodeA, nodeB);
myGraph.addEdge(nodeB, nodeC);
myGraph.addEdge(nodeC, nodeA);

console.log(myGraph);


Pada contoh yang telah kita buat, kita memiliki 3 simpul (A, B, dan C) dan 3 sisi yang menghubungkannya:

Node A terhubung ke Node B
Node B terhubung ke Node C
Node C terhubung kembali ke Node A

Ini adalah representasi visual dari graph yang telah kita buat:

A -- B
 \  /
   C


Di dalam representasi ini, setiap huruf merepresentasikan simpul, dan garis-garis (edges) merepresentasikan hubungan antara simpul-simpul tersebut. Node A terhubung ke Node B dan Node C, Node B terhubung ke Node A dan Node C, dan Node C terhubung ke Node A dan Node B.

Jika Anda ingin melihat visualisasi grafik secara interaktif, Anda bisa menggunakan pustaka JavaScript seperti D3.js atau pustaka visualisasi grafik lainnya. Anda bisa menggambar simpul dan sisi menggunakan elemen HTML (misalnya, div atau svg) berdasarkan data yang Anda miliki.

Tentu saja, struktur graph ini masih sangat sederhana. Dalam implementasi nyata, Anda mungkin perlu menambahkan berbagai fitur seperti penghapusan simpul atau sisi, pencarian jarak terpendek, dan banyak lagi, tergantung pada kebutuhan Anda.

Selain itu, ada juga pustaka JavaScript yang sudah ada, seperti NetworkX.js, yang menyediakan fungsionalitas yang lebih canggih dan siap pakai untuk bekerja dengan graph.
Zexo
OP
 — 08/20/2023 1:27 PM
mari kita pelajari beberapa fitur yang lebih kompleks dari struktur data graph menggunakan JavaScript. Kami akan melihat bagaimana melaksanakan penghapusan simpul dan sisi, serta melakukan pencarian jarak terpendek menggunakan algoritma Breadth-First Search (BFS) dan Depth-First Search (DFS). 

Berikut adalah contoh implementasi lebih lanjut:

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


Dalam contoh di atas, kita telah menambahkan metode removeNode, removeEdge, serta implementasi BFS dan DFS ke dalam kelas Graph. Metode-metode ini memberikan fitur lebih lanjut untuk mengelola graph dan melakukan pencarian.
berikut ini adalah contoh penggunaan kode untuk melakukan operasi-operasi pada graph yang telah kita definisikan sebelumnya:

Mari kita anggap kita memiliki graph dengan simpul-simpul A, B, C, dan D, serta beberapa sisi yang menghubungkan mereka:

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


Berikut adalah representasi visual dari graph ini:

A -- B
 \  /
  C
  |
  D


Sekarang, mari kita lakukan beberapa operasi tambahan:

Hapus simpul 'B':
Setelah menghapus simpul 'B', sisi yang terhubung ke 'B' juga akan dihapus.
A
 \
  C
  |
  D


Hapus sisi antara 'C' dan 'D':
Setelah menghapus sisi antara 'C' dan 'D', graph tetap sama hanya saja sisi tersebut hilang.
A
 \
  C


Pencarian jarak terpendek menggunakan BFS dari 'A' ke 'D':
BFS akan mengunjungi simpul secara berurutan A, B, C, D. Jarak terpendek dari 'A' ke 'D' adalah 2 sisi.
A -- B
 \  /
  C
  |
  D


Pencarian jarak terpendek menggunakan DFS dari 'A' ke 'D':
DFS mungkin mengunjungi simpul dalam urutan A, B, C, D atau A, C, D. Jarak terpendek dari 'A' ke 'D' adalah 2 sisi.
A -- B
 \  /
  C
  |
  D


Harapannya, deskripsi visual ini membantu Anda memahami bagaimana graph dapat diubah oleh operasi-operasi tersebut dan bagaimana algoritma BFS dan DFS bekerja dalam mencari jalur di dalam graph. 
=================================================================================
Graph Algorithm (BFS dan DFS)
Breadth-First Search (BFS) dan Depth-First Search (DFS) adalah dua algoritma pencarian yang digunakan dalam struktur data graph. Kedua algoritma ini memiliki tujuan yang sama, yaitu untuk menemukan atau menjelajahi simpul tertentu dalam graph, tetapi mereka melakukannya dengan pendekatan yang berbeda.

*/
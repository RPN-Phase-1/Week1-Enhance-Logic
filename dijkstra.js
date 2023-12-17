/*LOGIC NOLEP (dijkstra.js)
Deskripsi Soal:

Kalian diminta untuk mengimplementasikan fungsi shortestPathDijkstraArray yang akan menghitung jarak terpendek antara dua simpul pada sebuah graph berbobot dengan bobot non-negatif. Graph tersebut direpresentasikan dalam bentuk array dua dimensi yang menyatakan bobot antara simpul-simpul. Elemen graph[i][j] pada array merepresentasikan bobot dari simpul i ke simpul j. Jika tidak ada sisi yang menghubungkan simpul i dan j, maka graph[i][j] akan bernilai -1.

Tugas:

Implementasikan fungsi shortestPathDijkstraArray dengan tiga parameter:

graph (array): Representasi graph berbobot dalam bentuk array dua dimensi.

start (number): Nomor simpul awal.

target (number): Nomor simpul tujuan.

Fungsi shortestPathDijkstraArray harus mengembalikan jarak terpendek dari simpul start ke simpul target dalam graph berbobot yang diberikan. Jika tidak ada jalur yang memungkinkan, fungsi harus mengembalikan nilai -1.

Contoh:

Misalkan terdapat graph berbobot berikut:
Graph:
  0 --3-- 1 --1-- 2
  |        |
  4 --2-- 3


Graph tersebut dapat direpresentasikan dalam bentuk array dua dimensi sebagai berikut:
const graph = [
  [-1, 3, -1, -1, -1],
  [3, -1, 1, 1, -1],
  [-1, 1, -1, -1, -1],
  [-1, 1, -1, -1, 2],
  [-1, -1, -1, 2, -1]
];


Jika kita ingin mencari jarak terpendek dari simpul 0 ke simpul 2, maka fungsi shortestPathDijkstraArray(graph, 0, 2) harus mengembalikan nilai 4.

Note:

Pastikan Anda menggunakan Dijkstra's Algorithm untuk mencari jarak terpendek pada graph berbobot.*/
function shortestPathDijkstraArray(graph, start, target) {
    // code
    const veir = Number.MAX_SAFE_INTEGER;//untuk nilai infinity atau tak hingga
    const save = {};//untuk menyimpan jarak terpendek dari start sampai simpul lainnya
    const cek = new Set();// untuk menandai simpul telah dikunjungi
    const queue = [];//untuk antrian yang belum dikunjungi
  
    for (const node in graph){
      save[node] = veir;//jadikan setiap jarak dari start kesemua simpul tak hingga
    }
  
    save[start] = 0;//beri nilai jara start ke start = 0
    queue.push([start, 0]);
  
    while(queue.length > 0){
      queue.sort((a,b) => a[1] - b[1]);//urutkan dari yang terkecil sampai yang terbesar
      const [currentNode, currentSave] = queue.shift();//ambil simpul pertama
  
      if (cek.has(currentNode)){
          continue; //jika simpul telah dikunjungi maka continue
      }
  
      cek.add(currentNode);//lalu tandai simpul sebagai telah dikunjungi
  
      //karna array 2d, maka jika index berisi -1, maka count + 1, dan continue atau skip ke iterasi selanjutnya
      let count = 0;
     for (const key of graph[currentNode]){
      if (key === -1){
          count++;
          continue;
      }
      const distance = currentSave + key;
  
      //ubah jarak terpendek sebelumnya dengan jarak terpendek sesudahnya jika jarak terpendek sesudahnya lebih kecil
      if (distance < save[count]){
          save[count] = distance;
          queue.push([count, distance])//masukan jarak yang telah diupdate atau diubah
      }
      count++
     }
    }
    if (save[target] !== veir){//jika jarak terpendek ke target tidak sama dengan tak hingga atau infinity
      return save[target]//maka return jarak tersebut
    }else{//jika sama dengan tak hingga 
      return -1//maka return -1
    }
  }
  
  // Testcase 1
  console.log(shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1]
    ],
    0,
    2
  )); // Expected Output: 4
  
  // Testcase 2
  console.log(shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1]
    ],
    0,
    4
  )); // Expected Output: 6
  
  // Testcase 3
  console.log(shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1]
    ],
    1,
    3
  )); // Expected Output: 1
  
  // Testcase 4
  console.log(shortestPathDijkstraArray(
    [
      [-1, 2, -1, -1, -1],
      [2, -1, 1, -1, 3],
      [-1, 1, -1, 4, -1],
      [-1, -1, 4, -1, 2],
      [-1, 3, -1, 2, -1]
    ],
    0,
    4
  )); // Expected Output: 5
  
  // Testcase 5
  console.log(shortestPathDijkstraArray(
    [
      [-1, 1, 2, -1],
      [1, -1, -1, 3],
      [2, -1, -1, -1],
      [-1, 3, -1, -1]
    ],
    0,
    3
  )); // Expected Output: 4
  
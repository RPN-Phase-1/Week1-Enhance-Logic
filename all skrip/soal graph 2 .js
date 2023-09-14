class Node {
    constructor(value){
        this.value = value;
        this.edges = [];
    }
    addEdge(node2){
        this.edges.push(node2);
    }
}

class Set{
    constructor(){
        this.visit = []
    }
    cekVisit(value){
        //let visited = false;
        for (let i = 0; i < this.visit.length; i++) {
            //console.log(this.visit[i],value)
            if(this.visit[i] == value){
                return true
            }
        }
        return false
    }
    
    addVisit(nodeValue){
        this.visit.push(nodeValue);
    }
    setVisit(nodesValue){
        this.visit = nodesValue;
    }
    getVisit(){
        return this.visit;
    }
    getValue(value){
        for (let i = 0; i < this.visit.length; i++) {
            const element = this.visit[i];
            if(element == value){
                return i
            }
            
        }
    }
}

class Graph{
    constructor(){
        this.nodes = [];
        this.visit = [];
    }
    getNodeFromValue(value){
        for(let i=0; i<this.nodes.length;i++){
            //console.log(this.nodes[i].value,value,this.nodes)
            if(value == this.nodes[i].value){
                return this.nodes[i]
            }
        }
        return false;
    }

    getNodeValue(value){
        for(let i=0; i<this.nodes.length;i++){
            //console.log(this.nodes[i])
            if(value == this.nodes[i].value){
                return value
            }
        }
        return false;
    }

    addNode(value){
        const newNode = new Node(value);
        this.nodes.push(newNode)
        return newNode
    }
    addEdge(node1,node2){
        node1.addEdge(node2);

        //jika tidak berarah
        //node2.addEdge(node1);
    }
    
    bfs(startValue,targetValue){
        if(!this.getNodeValue(startValue)){
            return -1
        }
        const visited = new Set();
        const queue = [];
        
        queue.push(startValue);
        
        visited.addVisit(startValue);
        //let BeforeCurrentNode;
        while(queue.length>0){
            const valueQueue = queue.shift();
            const currentNode = this.getNodeFromValue(valueQueue);
                       
            if(currentNode.value == targetValue){
                
                //return visited.getVisit()
            }
            

            //periksa semua simpul
            let neighbor = currentNode.edges
            for(let i = 0; i<neighbor.length; i++){
                if(!visited.cekVisit(neighbor[i].value)){ //kalau belum pernah dikunjungi
                    queue.push(neighbor[i].value);
                    visited.addVisit(neighbor[i].value);
                    if(neighbor[i].value == targetValue){
                        let index = visited.getValue(currentNode.value)
                        return index+1
                        
                    }
                }
            }
        }
        return 0;
    }

//     dfs(startValue, targetValue, visited = new Set()) {
//         let urutan = [];
//         if (visited.getValue(startValue)){
//             return false; // Jika simpul sudah dikunjungi, kembalikan false
//         }
//         urutan.push(startValue)
    
//         visited.addVisit(startValue); // Tandai simpul sebagai sudah dikunjungi
//         if (startValue === targetValue) {
//             return true // Jika target ditemukan, kembalikan true
//         }
    
//         const startNode = this.getNodeFromValue(startValue);
//         //console.log(startNode)
//         //return
//         for (const neighbor of startNode.edges) {
//           if (this.dfs(neighbor.value, targetValue, visited)) {
//             return true,visited; // Jika target ditemukan di tetangga, kembalikan true
//           }
//         }
    
//         return false; // Jika target tidak ditemukan
//       }
// }


dfs(startValue,targetValue, visited = new Set()) {
    //console.log(startValue.value)
    
    
    let startNode = this.nodes.find((e)=>{
        let valueToFind = startValue.value[0];
        let valueElement = e.value[0];
        if(valueElement == valueToFind){
            return valueElement
        }
        
    })

    //cek apakah sudah di kunjungi
    if (visited.visit.find((e)=>{ if(e==startNode.value){
        return true
    }})){
        return false; // Jika simpul sudah dikunjungi, kembalikan false
    }

    //jika belum tambahkan ke add visit
    //console.log(startValue.value[1],targetValue)
    if (startValue.value[1] === targetValue) {
        //console.log(visited)
        return true // Jika target ditemukan, kembalikan true
    }
    
    visited.addVisit(startValue.value[0]); // Tandai simpul sebagai sudah dikunjungi
    for (const neighbor of startNode.edges) {
        
        if (this.dfs(neighbor,targetValue, visited)) {
            //console.log(visited)
            //return true
            if(visited.visit.find((e)=>{if(e === neighbor.value[0]) return true })){
                //console.log(visited)
            }else{

            }
        }
    }

    this.visit = visited.visit;
    return false; // Jika target tidak ditemukan
  }
}


function shortestPath(friends, start, target) {
    //code

    //membuat obj graph
    let nodes = Object.keys(friends)
    let myGraph = new Graph();
    
    //memasukan node kedalam graph
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i]
        myGraph.addNode(node)
        // console.log(edges)
    }

    //menambahkan edges kedalam graph
    for (let i = 0; i < nodes.length; i++) {
        let node1 = myGraph.getNodeFromValue(nodes[i])
        let edges = friends[nodes[i]];
        for (let j = 0; j < edges.length; j++) {
            const neighbor= edges[j];
            let node2 = myGraph.getNodeFromValue(neighbor)
            myGraph.addEdge(node1,node2)
            
            
        };
    }
    
    //mengecek apakah pembuatan Obj graph dari friend telah berhasil
    // myGraph.nodes.forEach(node => {
    //     console.log(node)
    // });

    //melakukan pencarian jarak terpendek dan terpanjang
    return myGraph.bfs(start,target);
    


  }
  //sample
//   const hudzaGraph = new Graph();
//   const nodeA = hudzaGraph.addNode("A")
//   const nodeB = hudzaGraph.addNode("B")
//   const nodeC = hudzaGraph.addNode("C")
//   const nodeD = hudzaGraph.addNode("D")
//   const nodeE = hudzaGraph.addNode("E")

//   hudzaGraph.addEdge(nodeA,nodeB);
//   //hudzaGraph.addEdge(nodeA,nodeC);
//   hudzaGraph.addEdge(nodeA,nodeD);
  
//   //hudzaGraph.addEdge(nodeB,nodeA);
//   hudzaGraph.addEdge(nodeB,nodeC);
//   //hudzaGraph.addEdge(nodeB,nodeD);
//   hudzaGraph.addEdge(nodeB,nodeE);
  
//   //hudzaGraph.addEdge(nodeC,nodeA);
//   //hudzaGraph.addEdge(nodeC,nodeB);

//   //hudzaGraph.addEdge(nodeD,nodeA);
//   hudzaGraph.addEdge(nodeD,nodeB);
  
//   //hudzaGraph.addEdge(nodeE,nodeB);


//   //console.log(hudzaGraph.nodes[1].edges)

//   const dfs = hudzaGraph.dfs("A","E");
  
  
//   console.log(dfs)

//   return 

function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    let maps = new Graph();
    let nodes = []
    //buat node
    for (let i = 0; i < grid.length; i++) {
        let temp = []
        for (let j = 0; j < grid[i].length; j++) {
            let node = maps.addNode([`${i},${j}`,grid[i][j]])
            temp.push(node)
        }
        nodes.push(temp)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j+1] != undefined){
                nodes[i][j].addEdge(nodes[i][j+1])
            }
            if(grid[i+1] != undefined){
                nodes[i][j].addEdge(nodes[i+1][j])
            }
        }
    }
    //console.log(nodes)
    //console.log(maps.nodes[0])
    
    //looping seluruh nodes
    let island = [];
    let visitHistory = []
    for (let i = 0; i < maps.nodes.length; i++) {
        const node = maps.nodes[i];
        const nodeValue = maps.nodes[i].value[0];
        
        if(visitHistory.find((e)=>{
            if(e == nodeValue){
                return true
            }
        })){
            continue;
        }

        maps.dfs(node,0) //untuk mendapatkan visit
        
        //mendapatkan jejak unik hasil visit melakukan pencarian
        let rememberNodeValue = [];
        for (let i = 0; i < maps.visit.length; i++) {
            const node = maps.visit[i];
            if(!rememberNodeValue.find((e)=>{
                if(node == e){
                    return true
                }
            })){
                rememberNodeValue.push(node)
            }
            if(i==maps.visit.length-1){
                island.push(rememberNodeValue);    
            }
        }
        //menghapus jejak visit pulau
        maps.visit = []
        for (let k = 0; k < rememberNodeValue.length; k++) {
            const valueVisit = rememberNodeValue[k];
            visitHistory.push(valueVisit)
        }
        
    }
    // console.log(visitHistory);
    
    // console.log(island)

    //maps.dfs(maps.nodes[0],0) //mendapatkan visit

    return island.length
}
  
  // Testcase 1
  console.log(islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ])); // Expected Output: 1
  
//   // Testcase 2
  console.log(islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
  ])); // Expected Output: 3
  
  // Testcase 3
  console.log(islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1]
  ])); // Expected Output: 5
  
  // Testcase 4
  console.log(islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1]
  ])); // Expected Output: 4
  
  // Testcase 5
  console.log(islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ])); // Expected Output: 6
  
  // Testcase 6
  console.log(islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0]
  ])); // Expected Output: 2
  
  // Testcase 7
  console.log(islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1]
  ])); // Expected Output: 3
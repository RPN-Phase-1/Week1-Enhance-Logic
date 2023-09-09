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
}
class Hops{
    constructor(){
        this.nodes = [];
    }
    
}


class Graph{
    constructor(){
        this.nodes = [];
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
        node2.addEdge(node1);
    }
    bfs(startValue,targetValue){
        if(!this.getNodeValue(startValue)){
            return -1
        }
        const visited = new Set();
        const hops = new Hops();
        const queue = [];
        
        queue.push(startValue);
        hops.nodes.push(queue[0]);
        visited.addVisit(startValue);
        //let BeforeCurrentNode;
        while(queue.length>0){
            const valueQueue = queue.shift();
            const currentNode = this.getNodeFromValue(valueQueue);
                       
            if(currentNode.value == targetValue){
                hops.nodes.push(currentNode.value)
                return visited.getVisit()
            }
            

            //periksa semua simpul
            let neighbor = currentNode.edges
            for(let i = 0; i<neighbor.length; i++){
                if(!visited.cekVisit(neighbor[i].value)){ //kalau belum pernah dikunjungi
                    queue.push(neighbor[i].value);
                    visited.addVisit(neighbor[i].value);
                    if(neighbor[i].value == targetValue){
                        hops.nodes.push(currentNode.value)
                    }
                }
            }
        }
        return false;
    }
}

const myGraph = new Graph();

const nodeA = myGraph.addNode('A');
const nodeB = myGraph.addNode('B');
const nodeC = myGraph.addNode('C');
const nodeD = myGraph.addNode('D');
const nodeE = myGraph.addNode('E');

myGraph.addEdge(nodeA, nodeB)
myGraph.addEdge(nodeA, nodeD)
myGraph.addEdge(nodeB, nodeC)
myGraph.addEdge(nodeC, nodeD)
myGraph.addEdge(nodeD, nodeE)

//console.log(myGraph.getNodeFromValue("B"));

// const myVisit = new Set();
// myVisit.addVisit(nodeA);
// myVisit.addVisit(nodeB);
console.log(myGraph.bfs("D","A"))
console.log(myGraph.bfs("A","E"));
// console.log(myGraph.bfs("E","B"));
// const test = new Set();
// test.addVisit("A");
// test.addVisit("B");
// console.log(test)
// console.log(test.cekVisit("C"))
// console.log(myVisit.cekVisit("C"))

hudzaGraph = new Graph();

// const nodeHudza = hudzaGraph.addNode("HUDZA");
// const nodeIfa = hudzaGraph.addNode("IFA");
// const nodeHasy = hudzaGraph.addNode("HASY");
// const nodeAid = hudzaGraph.addNode("AID");
// const nodePipit = hudzaGraph.addNode("PIPIT");
// const nodeUyun = hudzaGraph.addNode("UYUN");
// const nodeFitri = hudzaGraph.addNode("Fitri");

// hudzaGraph.addEdge(nodeHudza,nodePipit);
// hudzaGraph.addEdge(nodeHudza,nodeFitri);
// hudzaGraph.addEdge(nodeHudza,nodeAid);
// hudzaGraph.addEdge(nodeHudza,nodeIfa);

// hudzaGraph.addEdge(nodePipit,nodeHasy);
// hudzaGraph.addEdge(nodePipit,nodeHudza);
// hudzaGraph.addEdge(nodePipit,nodeFitri);

// hudzaGraph.addEdge(nodeHasy,nodePipit);
// hudzaGraph.addEdge(nodeHasy,nodeIfa);

// hudzaGraph.addEdge(nodeIfa,nodeHasy);
// hudzaGraph.addEdge(nodeIfa,nodeAid);
// hudzaGraph.addEdge(nodeIfa,nodeHudza);

// hudzaGraph.addEdge(nodeAid,nodeHudza);
// hudzaGraph.addEdge(nodeAid,nodeIfa);
// hudzaGraph.addEdge(nodeAid,nodeFitri);

// hudzaGraph.addEdge(nodeFitri,nodeAid);
// hudzaGraph.addEdge(nodeFitri,nodePipit);
// hudzaGraph.addEdge(nodeFitri,nodeUyun);
// hudzaGraph.addEdge(nodeFitri,nodeHudza);

// hudzaGraph.addEdge(nodeUyun,nodeFitri);

// //console.log(hudzaGraph)
// console.log(hudzaGraph.bfs("HUDZA","PIPIT"))
// console.log(hudzaGraph.bfs("HUDZA","UYUN"))
// console.log(hudzaGraph.bfs("UYUN","HASY"))
// console.log(hudzaGraph.bfs("HASY","AID"))
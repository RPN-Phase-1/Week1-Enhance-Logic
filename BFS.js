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
      let countPath = 0;
      queue.push(this.nodes.get(startValue));
     
      while (queue.length > 0) {
        const currentNode = queue.shift();
        if (currentNode.value === targetValue) {
            return countPath;
        };
  
        visited.add(currentNode);
        for (const neighbor of currentNode.edges) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
  
      return -1;
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
  


function shortestPath(friends, start, target) {
    //code
    const myGraph = new Graph();

    for (const name in friends) {
        myGraph.addNode(name);
    }

    for (const listFriend in friends) {
        friends[listFriend].map((friend) => myGraph.addEdge(listFriend, friend));
    }

    return myGraph.bfs(start, target);
  }
  
  // Testcase 1
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'David')); // Expected Output: 2
    
    // Testcase 2
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'Eve')); // Expected Output: 2
    
    // // Testcase 3
    // console.log(shortestPath({
    //   'Alice': ['Bob', 'Charlie'],
    //   'Bob': ['Alice', 'David', 'Eve'],
    //   'Charlie': ['Alice', 'Eve'],
    //   'David': ['Bob'],
    //   'Eve': ['Bob', 'Charlie']
    // }, 'Alice', 'Alice')); // Expected Output: 0
    
    // // Testcase 4
    // console.log(shortestPath({
    //   'Alice': ['Bob', 'Charlie'],
    //   'Bob': ['Alice', 'David', 'Eve'],
    //   'Charlie': ['Alice', 'Eve'],
    //   'David': ['Bob'],
    //   'Eve': ['Bob', 'Charlie']
    // }, 'David', 'Charlie')); // Expected Output: 3
    
    // // Testcase 5
    // console.log(shortestPath({
    //   'Alice': ['Bob', 'Charlie'],
    //   'Bob': ['Alice', 'David', 'Eve'],
    //   'Charlie': ['Alice', 'Eve'],
    //   'David': ['Bob'],
    //   'Eve': ['Bob', 'Charlie']
    // }, 'Eve', 'Bob')); // Expected Output: 1
    
    // // Testcase 6
    // console.log(shortestPath({
    //   'Alice': ['Bob', 'Charlie'],
    //   'Bob': ['Alice', 'David', 'Eve'],
    //   'Charlie': ['Alice', 'Eve'],
    //   'David': ['Bob'],
    //   'Eve': ['Bob', 'Charlie']
    // }, 'Charlie', 'Alice')); // Expected Output: 1
    
    // // Testcase 7
    // console.log(shortestPath({
    //   'Alice': ['Bob', 'Charlie'],
    //   'Bob': ['Alice', 'David', 'Eve'],
    //   'Charlie': ['Alice', 'Eve'],
    //   'David': ['Bob'],
    //   'Eve': ['Bob', 'Charlie']
    // }, 'David', 'Eve')); // Expected Output: 2
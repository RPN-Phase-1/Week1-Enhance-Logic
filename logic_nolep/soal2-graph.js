class Graph {
    // Implementasi graph dan metode DFS
    dfs(grid, row, col){
        if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] == "0"){
            return;
        } else {
            grid[row][col] = "0";            
            this.dfs(grid, row - 1, col);
            this.dfs(grid, row + 1, col);
            this.dfs(grid, row, col - 1);
            this.dfs(grid, row, col + 1);
        }
    }
  }
  
  function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    let row = grid.length;
    let col = grid[0].length;
    let graph = new Graph();

    let count = 0;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] == "1"){
                count++;
                graph.dfs(grid, i, j);
            }
        }
    }
    return count;
  }
  
  // Testcase 1
  console.log(islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ])); // Expected Output: 1
  
  // Testcase 2
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
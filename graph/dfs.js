class Graph {
  constructor(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
  }

  // DFS Algorithm, takes the current row and column as parameters
  dfs(r, c) {
    // Check the boundary conditions and if the current cell is already visited or not an island cell
    const rows = r < 0 || r >= this.rows;
    const cols = c < 0 || c >= this.cols;
    if (rows || cols || this.grid[r][c] === 0) {
      return false;
    }

    // If the current cell is a valid island cell
    this.grid[r][c] = 0; // Mark as visited

    // Recursively call the dfs function on the four adjacent neighbors
    this.dfs(r - 1, c); // Up
    this.dfs(r + 1, c); // Down
    this.dfs(r, c - 1); // Left
    this.dfs(r, c + 1); // Right
  }
}

function islandCount(grid) {
  const graph = new Graph(grid); // new Graph instance
  let count = 0;

  // Iterate through each cell of the grid using nested loops
  for (let r = 0; r < graph.rows; r++) {
    for (let c = 0; c < graph.cols; c++) {
      // If we found a new island
      if (graph.grid[r][c] === 1) {
        graph.dfs(r, c); // Explore all the connected cells
        count++; // Increment the count
      }
    }
  }

  return count;
}

// Testcase 1
console.log(
  islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]),
); // Expected Output: 1

// Testcase 2
console.log(
  islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ]),
); // Expected Output: 3

// Testcase 3
console.log(
  islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1],
  ]),
); // Expected Output: 5

// Testcase 4
console.log(
  islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ]),
); // Expected Output: 4

// Testcase 5
console.log(
  islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ]),
); // Expected Output: 6

// Testcase 6
console.log(
  islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0],
  ]),
); // Expected Output: 2

// Testcase 7
console.log(
  islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]),
); // Expected Output: 3

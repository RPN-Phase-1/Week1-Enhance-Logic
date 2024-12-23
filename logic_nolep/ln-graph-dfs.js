class Graph {
    constructor(grid) {
        this.grid = grid;
        this.row = grid.length;
        this.col = grid[0].length;
    }

    dfs(r, c, visited) {
        const rowInbounds = 0 <= r && r < this.row;
        const colInbounds = 0 <= c && c < this.col;
        if (!rowInbounds || !colInbounds) return false;

        if (this.grid[r][c] === 0) return false;

        const pos = r + "," + c;
        if (visited.has(pos)) return false;
        visited.add(pos);

        this.dfs(r - 1, c, visited); // down
        this.dfs(r + 1, c, visited); // up
        this.dfs(r, c - 1, visited); // left
        this.dfs(r, c + 1, visited); // right

        return true;
    }
}

function islandCount(grid) {
    const graph = new Graph(grid);

    const visited = new Set();
    let count = 0;

    for (let r = 0; r < graph.row; r++) {
        for (let c = 0; c < graph.col; c++) {
            if (graph.dfs(r, c, visited) === true) {
                count++;
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

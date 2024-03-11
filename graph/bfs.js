function shortestPath(friends, start, target) {
  if (start === target) return 0;

  const queue = [[start, 0]];
  const visited = new Set([[start]]);

  while (queue.length > 0) {
    const [person, distance] = queue.shift();

    if (person === target) return distance;

    for (const neighbor of friends[person]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
}

const friends = {
  Alice: ["Bob", "Charlie"],
  Bob: ["Alice", "David", "Eve"],
  Charlie: ["Alice", "Eve"],
  David: ["Bob"],
  Eve: ["Bob", "Charlie"],
};

// Testcase 1
console.log(shortestPath(friends, "Alice", "David")); // Expected Output: 2

// Testcase 2
console.log(shortestPath(friends, "Alice", "Eve")); // Expected Output: 2

// Testcase 3
console.log(shortestPath(friends, "Alice", "Alice")); // Expected Output: 0

// Testcase 4
console.log(shortestPath(friends, "David", "Charlie")); // Expected Output: 3

// Testcase 5
console.log(shortestPath(friends, "Eve", "Bob")); // Expected Output: 1

// Testcase 6
console.log(shortestPath(friends, "Charlie", "Alice")); // Expected Output: 1

// Testcase 7
console.log(shortestPath(friends, "David", "Eve")); // Expected Output: 2

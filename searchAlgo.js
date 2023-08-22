function searchRotatednumsay(nums, target) {
  //untuk mencari nilai pivot;
  function findPivot(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] > nums[mid + 1]) {
        return mid; // Jika angka di tengah lebih besar dari angka di sebelah kanan, maka mid adalah titik rotasi.
      } else if (nums[mid] > nums[left]) {
        left = mid + 1; // Jika angka di tengah lebih besar dari angka di awal, maka titik rotasi berada di sebelah kanan.
      } else {
        right = mid; // Jika angka di tengah kurang dari atau sama dengan angka di awal, maka titik rotasi berada di sebelah kiri.
      }
    }
  }

  //untuk mencari target dari awal - pivot;
  let left = 0;
  let right = findPivot(nums);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  //untuk mencari target dari pivot - akhir;
  left = findPivot(nums) + 1;
  right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Test Case
console.log(searchRotatednumsay([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(searchRotatednumsay([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(searchRotatednumsay([1], 0)); // Output: -1
console.log(searchRotatednumsay([6, 7, 0, 1, 2, 4, 5], 7)); // Output: 1
console.log(searchRotatednumsay([4, 5, 6, 7, 8, 1, 2, 3], 6)); // Output: 2
console.log(searchRotatednumsay([3, 4, 5, 6, 7, 8, 1, 2], 8)); // Output: 5
console.log(searchRotatednumsay([5, 6, 7, 8, 1, 2, 3, 4], 1)); // Output: 4
console.log(searchRotatednumsay([2, 3, 4, 5, 6, 7, 8, 1], 9)); // Output: -1
console.log(searchRotatednumsay([3, 1], 1)); // Output: 1
console.log(searchRotatednumsay([5, 1, 3], 5)); // Output: 0

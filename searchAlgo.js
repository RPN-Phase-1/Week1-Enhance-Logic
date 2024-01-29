const searchRotatedArray = (nums, target) => {
  // Linear Search
  // let result = -1
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) result = i
  // }
  // return result

  // Binary Search
  let left = 0 // first index
  let right = nums.length - 1 // last index

  while (left <= right) {
    let mid = Math.floor((left + right) / 2) // middle index
    // console.log(`left: ${left}, mid: ${mid}, right: ${right}`)
    // console.log(`nums[left]: ${nums[left]}, nums[mid]: ${nums[mid]}, nums[right]: ${nums[right]}`)
    if (nums[mid] === target) return mid // return index

    if (nums[left] <= nums[mid]) {
      nums[left] <= target && target < nums[mid] ? (right = mid - 1) : (left = mid + 1)
    } else {
      nums[mid] < target && target <= nums[right] ? (left = mid + 1) : (right = mid - 1)
    }
  }

  return -1
}

// Test Case
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)) // Output: 4
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)) // Output: -1
console.log(searchRotatedArray([1], 0)) // Output: -1
console.log(searchRotatedArray([6, 7, 0, 1, 2, 4, 5], 7)) // Output: 1
console.log(searchRotatedArray([4, 5, 6, 7, 8, 1, 2, 3], 6)) // Output: 2
console.log(searchRotatedArray([3, 4, 5, 6, 7, 8, 1, 2], 8)) // Output: 5
console.log(searchRotatedArray([5, 6, 7, 8, 1, 2, 3, 4], 1)) // Output: 4
console.log(searchRotatedArray([2, 3, 4, 5, 6, 7, 8, 1], 9)) // Output: -1
console.log(searchRotatedArray([3, 1], 1)) // Output: 1
console.log(searchRotatedArray([5, 1, 3], 5)) // Output: 0

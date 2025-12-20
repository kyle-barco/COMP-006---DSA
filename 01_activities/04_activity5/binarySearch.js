// divide and conquer
// if high >= low
  // if num == mid, find the middle index
  // else if num > mid, search to right
  // else, search to left
// else return -1


function binarySearch(arr, num, low, high) {
  
  if (high >= low) {
    let mid = low + (high - low) / 2
    // if num == mid, find the middle index
    if(num == arr[mid]) {
      return mid
    } else if (num > mid) {
    // else if num > mid, search to right
      return binarySearch(arr, num, mid + 1, high)
    } else {
    // else, search to left
      return binarySearch(arr, num, low, mid - 1)
    }
  } else {
    return -1
  }
} 

const arrayNum = [1, 2, 3, 4, 5, 6, 7]
let num = 2
let res = binarySearch(arrayNum, num, )

if ()

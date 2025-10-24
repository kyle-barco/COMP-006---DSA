let arr = [1,2,3,4,5,6,7,8,9,0]

function binarySearch(array, num) {
  let left = 0, right = array.length - 1
    
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    
    if(array[middle] == num) {
      return middle
    } else if (array[middle] < num) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1 
}

function output(arr, num) {
  let index = binarySearch(arr, num)
    if(index !== -1) {
      return `Index of "${num}": "${index}"`
    } else {
      return `Number "${num}" is not in the list`
    }
}

console.log(output(arr, 7))
console.log(output(arr, 22))




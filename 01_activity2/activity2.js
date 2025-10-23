let arr = [1,2,3,4,5,6,7,8,9,0]

function isNumExists(array, num ) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === num) {
     return `Number "${num}" exists: found in index "${array.indexOf(num)}" ` 
    }       
  }
  return `Number "${num}" does not found`
}
console.log(isNumExists(arr, 7))


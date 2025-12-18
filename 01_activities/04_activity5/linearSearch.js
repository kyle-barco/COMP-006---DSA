// pass the array and desired number
// loop the array
// n -> get the length of arr
  // if pass value is equal to array index, return index
  // else return -1

const arrFruits = ["mangga", "apple", "pinya", "kaong"]

function linearSearch(arr, val) {
  const arrLength = arr.length

  for(let i = 0; i < arrLength; i++) {
    if(arr[i] == val) {
      return {
        indexNum: i,
        fruit: arr[i]
      }
    }
  }
  return -1 || val
}

let searchIdx = linearSearch(arrFruits, "apple").indexNum
let searchVal = linearSearch(arrFruits, "apple").fruit

function fruitSaladMaker(searchIdx, searchVal) {

  if (searchIdx == -1 || searchIdx === undefined) {
    console.log(`Fruit cant be found!`)
  } else {
    console.log(`Fruit "${searchVal}" found at index ${searchIdx}! You can make fruit salad`)
  }
}

fruitSaladMaker(searchIdx, searchVal)



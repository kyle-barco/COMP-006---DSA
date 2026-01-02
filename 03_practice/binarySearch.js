let arrNum = [1,2,3,4,5,6,7,8,9]

function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === num) {
            return mid
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
    return -1
}

const CHOSEN_NUM = 7
const idx = binarySearch(arrNum, CHOSEN_NUM)

if (idx !== -1) {
    console.log(`Number found at index: ${idx}`)
} else {
    console.log(`Number not found`)
}
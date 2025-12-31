let arrNum = [1,2,3,4,5,6,7,8,9]

function binarySearch (arr, num) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] == num) {
            return num
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
}

function insert_sort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j >= 0; j--) {
      if(arr[j] < arr[j-1]) {
        swap(arr,j,j-1)
      }
    }
  }
  return arr
}
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
let arr = [1, 7, 5, 5, 6, 5, 8, 4, 1, 3, 5, 9]
console.log(insert_sort(arr))
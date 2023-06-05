function bubble_sort(arr) {
  if(arr.length < 2 || arr == null) return arr
  for(let i = arr.length - 1; i > 0; i--) {
    for(let j = 0 ; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr,j,j+1)
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
console.log(bubble_sort(arr))
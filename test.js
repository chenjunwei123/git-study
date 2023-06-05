function quick_sort(arr) {
  if(arr.length < 2 || arr == null) return
  return process(arr,0,arr.length-1)
}
function process(arr,low,high) {
  if(low < high) {
    let a = low + Math.floor(Math.random()*(high-low+1))
    swap(arr,a,high)
    let arrIndex = partion(arr,low,high)
    process(arr,low,arrIndex[0])
    process(arr,arrIndex[1],high)
    if(low==0 && high==arr.length-1) {
      return arr
    }
  }
}
function partion(arr,low,high) {
  let less = low - 1
  let more = high
  let arrIndex = new Array(2)
  while(low < more) {
    if(arr[low] < arr[high]) {
      less++
      swap(arr,low,less)
      low++
    }else if(arr[low] == arr[high]) {
      low++
    }else {
      more--
      swap(arr,low,more)
    }
  }
  swap(arr,high,more)
  arrIndex[0] = less
  arrIndex[1] = more
  return arrIndex
}
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
let arr = [1, 7, 5, 5, 6, 5, 8, 4, 1, 3, 5, 9]
console.log(quick_sort(arr))
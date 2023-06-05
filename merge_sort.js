function merge_sort(arr,low,high) {
  if(low == high) return
  let mid = (low+high) >> 1
  merge_sort(arr,low,mid)
  merge_sort(arr,mid+1,high)
  return merge(arr,low,mid,high)
}
function merge(arr,low,mid,high) {
  let p1 = low
  let p2 = mid + 1
  let helpArr = []
  let i = 0
  while(p1 <= mid && p2 <= high) {
    helpArr[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
  }
  while(p1<=mid) {
    helpArr[i++] = arr[p1++]
  }
  while(p2<=high) {
    helpArr[i++] = arr[p2++]
  }
  for(let i = 0; i < helpArr.length;i++) {
    arr[i+low] = helpArr[i]
  }
  if(arr.length === helpArr.length) {
    return arr
  }
}

let arr = [7, 5, 6, 3, 2, 1, 4, 9, 8, 7]
let arr1 = merge_sort(arr, 0, arr.length - 1)
console.log(arr1)
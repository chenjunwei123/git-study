//选择排序算法
//从第一个数起，之后的数一个个与第一个数比较，若其小于第一个数，那么minIndex就为该数的索引，遍历完第一个数之后的所有数，就可以得到第一个数之后所有数的最小的那个数的索引，然后通过swap交换第一个数与最小的数。此时第一个数即为数组中的最小数。第二个数以此类推
 function selectionSort(arr) {
  if ((arr == null) | (arr.length < 2)) return
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i
    for(let j = i; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    swap(arr,i,minIndex)
  }
  return arr
}
function swap(arr, i, minIndex) {
  var tmp = arr[i]
  arr[i] = arr[minIndex]
  arr[minIndex] = tmp
}
var arr = [1, 2, 2, 2, 546, 3, 657, 3, 2, 2]
console.log(selectionSort(arr));

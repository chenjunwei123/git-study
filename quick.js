// function quicSort(arr){
//   if(arr.length<=1){return arr}
//   let mid = parseInt(arr.length/2)
//   let midVal = arr.splice(mid,1)[0]
//   console.log(midVal);
//   let left = []
//   let right = []
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]<midVal)
//     {left.push(arr[i])}
//     else{
//       right.push(arr[i])
//     }
//   }
//   return quicSort(left).concat(midVal,quicSort(right))
// }
// let arr = [2,7,5,3,24,8,09,5,34,2,1,56,8,9,8,9]
// console.log(quicSort(arr));



function quickSort(arr) {
  if(arr.length <= 1) return arr
  let mid = parseInt(arr.length/2)
  let midVal = arr.splice(mid,1)[0]
  let left = []
  let right = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < midVal) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }
  console.log("11111");
  return quickSort(left).concat(midVal,quickSort(right))
}

let arr = [2,7,5,3,24,8,09,5,34,2,1,56,8,9,8,9]
console.log(quickSort(arr));

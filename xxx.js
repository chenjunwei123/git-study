// var obj = {brand:'华为',price:1999}
// Object.defineProperty(obj,'id',{value:1})
// console.log('obj',obj);
// Object.defineProperty(obj,'price',{configurable:false})
// console.log(Object.keys(obj).length);
// for(var k in obj) {
//   console.log(obj[k]);
// }
// obj.price = 999
// delete obj['price']
// console.log(obj);

// var i = 100
// function foo() {
//   bbb:try {console.log('pos1');
// return i++}finally {
//   break bbb
// }
// console.log('pos2');
// return i
// }
// console.log(foo());

// const map = new Map()
// map.set(true,0)
// map[true] = 10
// console.log(map.get(true));
// console.log(map.get('true'));
// console.log(map['true']);


// class cls extends Array {
//   sum() {
//     return this.reduce(function reducer(acc,curr) {
//       return acc + curr
//     },0)
//   }
// }
// const x = new cls(3)
// const y = new Array(3)
// const z = cls.of(3)
// console.log(x.length);
// console.log(y.length);
// console.log(z.length);

Promise.resolve(1)
  .then(x => x + 1)
  .then(x => {
    throw new Error('My Error')
  })
  .catch(() => 1)
  .then(x => x + 1)
  .then(x => console.log(x)) //2
  .catch(console.error)

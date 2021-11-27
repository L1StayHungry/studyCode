const arr = ['11', 'aa']
const obj = {
  a: '11',
  b: '22'
}

for(const i in arr){
  console.log(i); // 0 1
}

for(const i in obj){
  console.log(i); // a b
}

for(const i of arr){
  console.log(i); // 11 aa
}

for(const i of obj){
  console.log(i); // TypeError: obj is not iterable 不是可迭代对象
}
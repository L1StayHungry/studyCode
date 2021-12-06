const myObj = {
  name: 'hhh'
}
console.log(myObj); // {}
console.log(myObj.prototype);// undifined
console.log(myObj.__proto__);// {}


let myObj2 = new Object()
console.log(myObj2);// {}
console.log(myObj2.prototype);// undifined
console.log(myObj2.__proto__);// {}
myObj2.name = 'lhj'
console.log(myObj2.prototype);// undifined

const func1 = function() {
  const name = '111'
}
console.log(func1);// [Function: func1]
console.log(func1.prototype);// func1 {}
console.log(func1.__proto__);// [Function]
console.log(func1.hasOwnProperty['name']);// hasOwnProperty !!!字符串，没有则返回Undefine，原来不是返回布尔值啊，被骗了



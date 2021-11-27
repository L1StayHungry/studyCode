/**
 * Symbol（符号）是 ECMAScript 6 新增的数据类型。符号是原始值，且符号实例是唯一、不可变的。
符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
尽管听起来跟私有属性有点类似，但符号并不是为了提供私有属性的行为才增加的（尤其是因为
Object API 提供了方法，可以更方便地发现符号属性）。相反，符号就是用来创建唯一记号，进而用作非
字符串形式的对象属性。
 */

let sym = Symbol('666');
console.log(sym); // 'symbol'
console.log(typeof sym); // 'symbol'
let myStr = new String();
console.log(myStr);

const obj = {
  [sym]: [1,2,3],
  sss: 2
}
console.log(obj);
console.log(obj[sym]);
// { sss: 2, [Symbol(666)]: [ 1, 2, 3 ] }
// [ 1, 2, 3 ]

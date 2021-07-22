"use strict";
// boolean
var flag = true;
flag = false;
// number
var num;
num = 2.32;
// string
var stri = '我是字符串';
// array
var arr = [1, 2, 3];
var arr2 = ['1'];
// tuple 元组，属于数组的一种
var tup;
tup = ['str', 333];
// enum 枚举
// 若不赋值，则为索引值（或以上一个为标准）
var Flagflag;
(function (Flagflag) {
    Flagflag[Flagflag["success"] = 1] = "success";
    Flagflag[Flagflag["error"] = -1] = "error";
})(Flagflag || (Flagflag = {}));
var f = Flagflag.success;
var ff = Flagflag['1'];
console.log(ff);
// any 任意类型
// 
var iamAny = 1;
iamAny = 'str';
// 多类型
var aaa = 1;
aaa = 'strrr';
// never 类型
// 方法
// function run():void{
//   console.log('我没有返回值');
// }
// function run2():number{
//   console.log('我返回数值');
//   return 2
// }

// boolean
let flag:boolean = true
flag = false
// number
let num:number
num = 2.32
// string
let stri:string = '我是字符串'
// array
let arr:Array<number> = [1,2,3]
let arr2:string[] = ['1']
// tuple 元组，属于数组的一种
let tup:[string,number] 
tup = ['str', 333]
// enum 枚举
// 若不赋值，则为索引值（或以上一个为标准）
enum Flagflag {
  success = 1,
  error = -1
}
let f:Flagflag = Flagflag.success
let ff:string = Flagflag['1']
console.log(ff);
// any 任意类型
// 
let iamAny:any = 1
iamAny = 'str'

// 多类型
let aaa: number | string | null | undefined = 1
aaa = 'strrr'

// never 类型

// 方法
// function run():void{
//   console.log('我没有返回值');
// }
// function run2():number{
//   console.log('我返回数值');
//   return 2
// }
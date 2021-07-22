// 函数
// es5
function fun(){
  return 'fun';
}
let fuc2 = function() {
  return 'fun2'
}
// ts
function fun3():string{
  return 'fun3';
}
// 匿名函数
let fuc4 = function():string {
  return 'fun4'
}
// 带参数
let fuc5 = function(name:string):string {
  return name
}
// 箭头函数
let fuc6 = (name:string):string => {
  return name
}
// 配置可选参数, 可选参数写后面
let fuc7 = function(name:string = '222', age?:number):string | number | undefined {
  return age ? name : age
}

// 配置可选参数, 可选参数写后面
let fuc8 = function(...result:number[]):number {
  return result.reduce((a:number,b:number):number => { return a+b }, 0)
}

// 函数重载
function fun9(config:string):string;
function fun9(value:number):number;
function fun9(str:any):any{
  if(typeof str === 'string'){
    return str
  }else{
    return str
  }
}
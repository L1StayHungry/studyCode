let name ='小明'
let age =18
let flag=true

function sum(num1,num2){
  return num1+num2
}

if(flag){
  console.log(sum(18,18));
}

// 导出方式1
export {
  flag,sum
}

// 导出方式2,定义的时候直接导出
export let num1 =1000;
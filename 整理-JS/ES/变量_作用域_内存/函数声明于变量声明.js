function test(arg){
  // 1. 形参 arg 是 "hi"
  // 2. 因为函数声明比变量声明优先级高，所以此时 arg 是 function
  console.log(arg);
  var arg = 'hello'; // 3.var arg 变量声明被忽略， arg = 'hello'被执行
  function arg(){
  　　console.log('hello world')
  }
  console.log(arg);
}

test('hi');
  
/* 输出：
  [Function: arg]
  hello
*/
// 约定的对象--接口
interface User {
  name: string,
  age?: number
}

function printUser(user): void{
  console.log(user.name, ':', user.age);
}

const user2:User = {
  name: 'zhangsan',
  age: 3333
}

printUser(user2);


// 约定的函数类型
interface UserFun {
  (name: string, age: number): void;
}

const testFunction:UserFun = (name, age) => {
  console.log('testFunction');
  console.log(name, ':', age);  
}

testFunction('lisi', 333);
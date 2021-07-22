// 类

// 原型链继承
// 静态方法
// 实例方法

// 组合继承（原型链+对象冒充（改变this指向））
// 可继承构造函数里面的属性和方法
// 但是没有继承原型链里面的方法

// 原型链实现继承
// 即可以继承构造函数里的方法
// 也能继承原型链里面的方法
// 实例化时没法传参

// 组合继承（原型链+构造函数继承）


// function Person(name){
//   this.name = name;
//   this.run = function() {
//     console.log('hhh');
//   }
// }

class Person {
  name:string; // 属性 前面省略了public关键词

  constructor(name:string){
    this.name = name
  }

  getName():string {
    return this.name
  }

  setName(name:string):void {
    this.name = name
  }
}

let p = new Person('张三')
p.setName('Lisi')
console.log(p.getName());

// ts中实现继承

// extends
// super
class Teacher extends Person {
  constructor(name:string){
    super(name)
  }

  work():void{
    console.log('在上课');
    
  }
}

// 类的修饰符
// public protocted private
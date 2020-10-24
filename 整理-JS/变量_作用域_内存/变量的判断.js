function Foo() {
  this.name = 'wyh'
  this.age = '23'
}

console.log(Number instanceof Number)  // false
console.log(String instanceof String)  // false
console.log(Foo instanceof Foo)        // false

Function instanceof Object;//true
Object instanceof Function;//true
console.log(Function instanceof Object);
console.log(Object instanceof Function);


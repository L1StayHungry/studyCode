function foo() {
    console.log('???');
    console.log( this.a );
}

var obj = {
    a: 'hello',
    foo: foo
};
var a = "Global";
var bar = obj.foo; // 函数引用传递
bar(); // "Global"
// this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的

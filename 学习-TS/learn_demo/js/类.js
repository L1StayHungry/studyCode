"use strict";
// 类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('张三');
p.setName('Lisi');
console.log(p.getName());
// ts中实现继承
// extends
// super
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name) {
        return _super.call(this, name) || this;
    }
    Teacher.prototype.work = function () {
        console.log('在上课');
    };
    return Teacher;
}(Person));
// 类的修饰符
// public protocted private

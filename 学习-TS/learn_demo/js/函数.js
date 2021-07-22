"use strict";
// 函数
// es5
function fun() {
    return 'fun';
}
var fuc2 = function () {
    return 'fun2';
};
// ts
function fun3() {
    return 'fun3';
}
// 匿名函数
var fuc4 = function () {
    return 'fun4';
};
// 带参数
var fuc5 = function (name) {
    return name;
};
// 箭头函数
var fuc6 = function (name) {
    return name;
};
// 配置可选参数, 可选参数写后面
var fuc7 = function (name, age) {
    if (name === void 0) { name = '222'; }
    return age ? name : age;
};
// 配置可选参数, 可选参数写后面
var fuc8 = function () {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    return result.reduce(function (a, b) { return a + b; }, 0);
};
function fun9(str) {
    if (typeof str === 'string') {
        return str;
    }
    else {
        return str;
    }
}

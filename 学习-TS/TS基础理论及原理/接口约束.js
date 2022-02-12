function printUser(user) {
    console.log(user.name, ':', user.age);
}
var user2 = {
    name: 'zhangsan',
    age: 3333
};
printUser(user2);
var testFunction = function (name, age) {
    console.log('testFunction');
    console.log(name, ':', age);
};
testFunction('lisi', 333);

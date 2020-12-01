/**类的创建 
 * 
 * ES5:
 * 1.利用function关键字和this关键字
 * 2.原型方法
 * 3.利用Object.create()方法构造
*/

//1.利用function关键字和this关键字
//定义一个动物类
function Animal(name) {
	this.name = name;  //属性
	this.sleep = function() {   //实例方法
		console.log(this.name + 'sleep...');
	}
}
//在原型链上添加一个原型方法
Animal.prototype.eat = function(food) {
	console.log(this.name + ' eat...' + food)
}

//使用
var animal=new Animal('animal');
animal.eat('banana');

// 3.利用Object.create()方法构造
const User = {
    name:'hello',
    getName:function(){
        return this.name;
    }
}

//使用
var user=Object.create(User);
console.log(user.getName());


/**类的继承
 * 1.原型链继承
 * 2.构造继承
 * 3.组合继承
 * 4.寄生组合继承
*/
// 1。原型链继承.不能实现多继承
function Cat(){
	//创建一个空对象
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';
var cat = new Cat;
cat.eat('fish');

// 2.构造继承.
// 特点：可以实现多继承。
// 缺点：只能实现继承父类的属性和方法，
// 		不能继承原型链上的属性和方法。
function Dog(){
	Animal.call(this);
	this.name = 'Dog';
	console.log(this);
}
var dog = new Dog;
// dog.eat();// dog.eat is not a function

// 3.组合继承.
// 缺点：调用了两次父类构造函数，生成了两份实例。
function Tiger(){
	Animal.call(this);
	this.name = 'tiger';
}
Tiger.prototype = new Animal();
Tiger.prototype.constructor = Tiger;
var tiger = new Tiger();
tiger.eat('meat');

// 4.寄生组合继承
function Rabbit() {
	Animal.call(this,'rabbit1');
	// this.name = 'rabbit'
}
(function() {
	var Super = function() {};
	Super.prototype = Animal.prototype;
	Rabbit.prototype = new Super();
})()
var rabbit = new Rabbit();
rabbit.eat('萝卜');
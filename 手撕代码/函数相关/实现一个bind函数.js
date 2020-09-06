// 改变函数this指向
Function.prototype.mybind = function (context){
  let self = this;
  outArgs = Array.prototype.slice.call(arguments);
  return function (){
    let inArgs = Array.prototype.slice.call(arguments);
    return self.apply(context,outArgs.concat(inArgs));
  }
}


var a = {color:'red'};
var color = "blue";

console.log(this.color)

function say(){
  console.log(this.color)
};

say(); //bule

var asay=say.mybind(a);
asay();   //red

function add(a,b){
	return a+b+this.c
}
var c=100;
var obj={c:1};
add(1,2);  //103;
console.log(add(1,2));

var bindAdd=add.mybind(obj);
bindAdd(1,2);  //4
console.log(bindAdd(1,2));


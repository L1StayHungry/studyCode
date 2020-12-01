
// for(let i=0;i<10;i++){
//     let a

//     a=document.createElement('a')

//     a.innerHTML=i+'<br>'

//     document.body.appendChild(a)

//     a.addEventListener('click',function (e){
//       e.preventDefault()
//       alert(i)  
//     })

    
// }


// 函数在块级作用域中，声明但未定义；
// 一旦进入到块级作用域之中，首先马上对函数进行定义
console.log(fn); 	 // undefined
if([] == ![]){
	fn();						//100
	function fn() {
    	console.log(100); 
	}
}
console.log(fn);	//[Function: fn]
fn();							//100
const arr = [1,[2,[3]]]

/** 
 * (1) es6的flat
 */
let newArr1 = arr.flat(Infinity)
console.log(newArr1);                       //[ 1, 2, 3 ]

/**
 * (2) arr.toString().split(’,’)
 */
let newArr2 = arr.toString().split(',');
// console.log(arr.toString());  //1,2,3
console.log(newArr2);                     //[ '1', '2', '3' ]

/** 
 * (3) arr.join().split(’,’)
 */
let newArr3 = arr.join().split(',');
console.log(newArr3);                       //[ '1', '2', '3' ]

/** 
 * (4) 递归拉平
 */
function flatArr(arr){
	var newArr=[];
	for(let i=0;i<arr.length;i++){
		if(typeof arr[i]!='object')
			newArr.push(arr[i]);
		else
			newArr=newArr.concat(flatArr(arr[i]));	
	}
	return newArr;
}
let newArr4 = flatArr(arr);
console.log(newArr4);                          //[ 1, 2, 3 ]

/**
 * 一.
 *    类二分法。中间取值后，分左右两数组，递归调用
 **/
function quickSort(arr){
  if(arr.length<1){
      return arr;
  }
  var pivotIndex=Math.floor(arr.length/2);//找到那个基准数
  var pivot=arr.splice(pivotIndex,1)[0]; //取出基准数，并去除，splice返回值为数组,所以加上[0]取出该元素
  console.log('pivot',pivot);
  console.log('arr',arr);
  
  
  var left=[]; 
  var right=[];
  for(var i=0;i<arr.length;i++){
      if(arr[i]<pivot){
          left.push(arr[i]);
      }else{
          right.push(arr[i]);
      }
  }
  return quickSort(left).concat([pivot],quickSort(right)); //加入基准数
}
arr=[2,1,5,8,3,7,4,6,9];
console.log(quickSort(arr)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

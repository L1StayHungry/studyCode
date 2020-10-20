function solution( arr ){
  arr = arr.filter(item => item>60).sort((a,b) => a-b);
  let arrSet = new Set(arr);//去重

  console.log(arrSet)
}
solution([82,59,70,70,89,100]);
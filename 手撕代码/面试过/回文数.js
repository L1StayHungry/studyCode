let num = 12322;
let ifTrue = function (num){
  if(num<0){
      return false;
  }

    // 转成数组；倒转；变回字符串；判断
console.log('num.toString().split(\'\')',num.toString().split(''));
  // split -- 把一个字符串分割成字符串数组
  // reserse -- 数组倒转
  const a = num.toString().split('').reverse().join('');
   return a === String(num);
}
    
if(ifTrue(num)){
  console.log('是回文数');
}else{
  console.log('不是回文数');
  
}
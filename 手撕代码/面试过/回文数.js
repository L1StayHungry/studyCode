let num = 12322;
let ifTrue = function (num){
  if(num<0){
      return false;
  }

    // 转成数组；倒转；变回字符串；判断
  const a = num.toString().split('').reverse().join('');
   return a === String(num);
}
    
if(ifTrue(num)){
  console.log('是回文数');
}
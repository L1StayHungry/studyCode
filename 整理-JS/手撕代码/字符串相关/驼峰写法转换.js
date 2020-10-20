const str = 'a-bc-dsdf';
let newStr = toHump(str);
console.log(newStr);

/**
 * split分割
 * concat连接
 * slice切割 
 */
function toHump(name){
  let arr = name.split('-');
  let newName = arr[0];

  for(let i=1;i<arr.length;i++){
    let item = arr[i][0].toUpperCase().concat(arr[i].slice(1));
    newName = newName.concat(item);
  }

  return newName;
}

/**  
 * 正则表达式
 */
// 下划线转换驼峰	
function toHump1(name) {
  return name.replace(/\_(\w)/g, function(all, letter){
      return letter.toUpperCase();
  });
}
// 驼峰转换下划线
function toLine(name) {
return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}
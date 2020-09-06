// 注意两种方法的不同，结果会不同
function countStr(str,sub){
  var reg=new RegExp(sub,'g');
  // console.log('str.match(reg)',str.match(reg));   //[ 'abca', 'abca' ]
	return str.match(reg).length;
}
var str="abcabcabca";
var sub="abca";
console.log('countStr(str,sub)',countStr(str,sub)); //2 

function countStr2(str,sub){
	var count=0;
	var reg=new RegExp(sub);
	var len=str.length-sub.length;
	var newStr=str.slice(0, sub.length);
	for(var i=0;i<len;i++){
       if(newStr.match(reg)!=null)
       	count++;
       newStr=str.slice(i,sub.length+i);
	}
	return count;
}
var str="abcabcabca";
var sub="abca";
countStr2(str,sub); //3


/**
 * 补充：
 * 
 * RegExp对象
 * RegExp 对象表示正则表达式
 * 
 * new RegExp(pattern, attributes);
 * ****pattern 是一个字符串，指定了正则表达式的模式或其他正则表达式。
 * ****attributes 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。
 * 
 * RegExp 对象方法:
 * compile	编译正则表达式。
 * exec	检索字符串中指定的值。返回找到的值，并确定其位置。	
 * test	检索字符串中指定的值。返回 true 或 false。
 * 
 * 支持正则表达式的 String 对象的方法
 * search	检索与正则表达式相匹配的值。	
 * match	找到一个或多个正则表达式的匹配。	
 * replace	替换与正则表达式匹配的子串。
 * split	把字符串分割为字符串数组。
 */
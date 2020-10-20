/**
 * 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

 

示例：

输入: words = ["time", "me", "bell"]
输出: 10
说明: S = "time#bell#" ， indexes = [0, 2, 5] 。
 

提示：

1 <= words.length <= 2000
1 <= words[i].length <= 7
每个单词都是小写字母 。
 */

/**
 * 1.建立哈希树
 * 2.切片，若hash树中存在某切片，将其删除
 * 
 * 关于Set:不重复的值的集合
 * Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
 * Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * Set.prototype.clear()：清除所有成员，没有返回值。
 */
var minimumLengthEncoding = function(words) {
    let hashSet = new Set(words);

    words.forEach(element => {
        let length_ = element.length;
        for(let i=1; i<length_; i++){
            let target = element.slice(i)
            hashSet.has(target) && hashSet.delete(target)
        }
    });

    let result = 0;
    hashSet.forEach(item => {
        result += item.length + 1
    })

    return result;
}
/**
 * 1.判断字符串是否包含，若包含，删除被包含元素
 * 2.加入result
 * 
 * 结果：错误。没有排除中间包含的情况
 */
// var minimumLengthEncoding = function(words) {
//     let solution = function(thiswords){
//         let result = '';
//         const words_length = thiswords.length
//         if(words_length === 0){
//             return '';
//         }
    
//         let this_word = thiswords[0];
//         let add_thisword = true;
//         for(let i=1;i<words_length;i++){
//             if(this_word.indexOf(thiswords[i]) != -1){
//                 console.log(thiswords[i],'被去除',this_word);
//                 thiswords.splice(i,1);
//                 add_thisword = false;
//                 result += solution(thiswords);
//                 break;
//             }else if((thiswords[i]+='').indexOf(this_word) != -1){
//                 console.log(this_word,'被去除');
//                 thiswords.splice(0,1);
//                 add_thisword = false;
//                 result += solution(thiswords);
//                 break;
//             }
//         }
//         if(add_thisword){
//             result += (this_word+'#');
//             thiswords.splice(0,1);
//             console.log('1',result,thiswords);
//             result += solution(thiswords);
//         }
    
//         console.log('result',result);
//         return result;
//     }
//     let str = solution(words);
//     return str.length;
// };



const words = ["time", "me","me", "bell","bellaaaa"];

let result = minimumLengthEncoding(words);
console.log('finally_result',result);
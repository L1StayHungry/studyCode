/**
 * 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

示例 1:

输入: J = "aA", S = "aAAbbbb"
输出: 3
示例 2:

输入: J = "z", S = "ZZ"
输出: 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jewels-and-stones
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// var numJewelsInStones = function(J, S) {
//   const len = S.length;
//   let count = 0;
//   for(let i =0;i < len;i++){
//     J.indexOf(S[i]) != -1 && count++
//   }
//   return count;
// };
var numJewelsInStones = function(J, S) {
  const len = S.length;
  let count = 0;
  let J_set = new Set(J.split(''))
  for(let i =0;i < len;i++){
    J_set.has(S[i]) && count++
  }
  return count;
};
console.log(numJewelsInStones('aA','aAAabbbbc'));

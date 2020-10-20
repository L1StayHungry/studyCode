/**
 * @param {string} leaves
 * @return {number}
 * 
 * 1.动态规划
 * 2.运用数组f[0/1/2][i]存储第i个字母前操作数
 * 3.f[i][0/1/2][i]：0代表红色；1代表黄色，2代表红色
 */

let leaves = 'rrryyyrryyyrr';

var minimumOperations = function(leaves) {
  const len = leaves.length;
  let dp_arr = new Array(3);
  for (let i = 0; i < 3; i++) {
    dp_arr[i] = new Array(len)
}
  // 第一种状态（红叶子）可以从 i=0 开始
  dp_arr[0][0] = leaves[0] == 'r' ? 0 : 1
  for(let i = 1;i < len; i++){
    dp_arr[0][i] = leaves[i] == 'r' ? dp_arr[0][i - 1] : dp_arr[0][i - 1] + 1
  }
  
  // 第二种状态（黄叶子）可以从 i=1 开始
  dp_arr[1][1] = leaves[1] == 'y' ? dp_arr[0][0] : dp_arr[0][0] + 1 
  for(let i = 2;i < len; i++){
    // 比较前i-1片叶子，是‘全部为红色’ 还是 ‘红色+黄色’的操作次数多，取较小值 
    dp_arr[1][i] = leaves[i] == 'y' 
      ? Math.min(dp_arr[1][i - 1], dp_arr[0][i -1])
      : Math.min(dp_arr[1][i - 1], dp_arr[0][i -1]) + 1
  }

  // 第三种状态（红叶子）可以从i=2开始
  dp_arr[2][2] = leaves[2] == 'r' ? dp_arr[1][1] : dp_arr[1][1] + 1 
  for(let i = 3;i < len; i++){
    // 比较前i-1片叶子，是‘全部为红色+黄色’ 还是 ‘红色+黄色+红色’的操作次数多，取较小值 
    dp_arr[2][i] = leaves[i] == 'r' 
      ? Math.min(dp_arr[2][i - 1], dp_arr[1][i -1])
      : Math.min(dp_arr[2][i - 1], dp_arr[1][i -1]) + 1
  }

  return dp_arr[2][len -1]
};

let result = minimumOperations('rrryyyryryyyrr');
console.log(result);


/**
 * 题目描述：
 * 
 * 小扣出去秋游，途中收集了一些红叶和黄叶，
 * 他利用这些叶子初步整理了一份秋叶收藏集 leaves， 
 * 字符串 leaves 仅包含小写字符 r 和 y， 
 * 其中字符 r 表示一片红叶，字符 y 表示一片黄叶。
 * 出于美观整齐的考虑，
 * 小扣想要将收藏集中树叶的排列调整成「红、黄、红」三部分。
 * 每部分树叶数量可以不相等，但均需大于等于 1。
 * 每次调整操作，
 * 小扣可以将一片红叶替换成黄叶或者将一片黄叶替换成红叶。
 * 请问小扣最少需要多少次调整操作才能将秋叶收藏集调整完毕。

示例 1：

输入：leaves = "rrryyyrryyyrr"

输出：2

解释：调整两次，将中间的两片红叶替换成黄叶，得到 "rrryyyyyyyyrr"

示例 2：

输入：leaves = "ryr"

输出：0

解释：已符合要求，不需要额外操作

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/UlBDOe
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
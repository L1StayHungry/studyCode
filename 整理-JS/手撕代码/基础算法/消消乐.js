/**
 * 小v在vivo手机的应用商店中下载了一款名为“一维消消乐”的游戏，介绍如下：
1、给出一些不同颜色的豆子，豆子的颜色用数字（0-9）表示，即不同的数字表示不同的颜色；
2、通过不断地按行消除相同颜色且连续的豆子来积分，直到所有的豆子都消掉为止；
3、假如每一轮可以消除相同颜色的连续 k 个豆子（k >= 1），这样一轮之后小v将得到 k*k 个积分；
4、由于仅可按行消除，不可跨行或按列消除，因此谓之“一维消消乐”。
请你帮助小v计算出最终能获得的最大积分。

输入描述:
输入一行n个正整数，代表这一行中豆子的颜色及排列。

示例：

输入：1 4 2 2 3 3 2 4 1
输出：21

示例说明：
第一轮消除3，获得4分，序列变成1 4 2 2 2 4 1
第二轮消除2，获得9分，序列变成1 4 4 1
第三轮消除4，获得4分，序列变成1 1
第四轮消除1，获得4分，序列为空
总共得分21分

输出描述:
小V最终能拿到的最大积分。

输入例子1:
1 4 2 2 3 3 2 4 1

输出例子1:
21
 */
/**
 * @param {number[]} boxes
 * @return {number}
 */

const boxes = [1,3,2,2,2,3,4,3,1];
const removeBoxes = (boxes) => {
  const n = boxes.length;   
  // js创建三维数组有点麻烦
  const memo = new Array(n);   
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      memo[i][j] = new Array(n).fill(0);
    }
  }
  // 函数定义：移除区间[l,r]和区间前面和boxes[l]相同的k个数，所能产出的最大积分和
  const getMax = (l, r, k) => {
    if (l > r) return 0;
    if (memo[l][r][k] != 0) return memo[l][r][k];
    // 找出连续的数字，有k+1个
    while (l < r && boxes[l] == boxes[l + 1]) {
      k++;
      l++;
    }
    // 直接把这段移除，收益(k+1)*(k+1)，加上对剩余部分的递归结果
    let points = (k + 1) * (k + 1) + getMax(l + 1, r, 0)
    // 移除中间部分子数组，让连续数字遇上和自己相同的数字
    for (let i = l + 1; i <= r; i++) {
      if (boxes[l] == boxes[i]) {
        points = Math.max(
          points,
          getMax(l + 1, i - 1, 0) + getMax(i, r, k + 1)
        )
      }
    }
    memo[l][r][k] = points;
    return points;
  };
  return getMax(0, n - 1, 0);
};
console.log(removeBoxes(boxes));

/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，
 * 输入这样的一个二维数组和一个整数，
 * 判断数组中是否含有该整数。
 * 
 * 示例:

  现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
  给定 target = 5，返回 true。

  给定 target = 20，返回 false。
 */

 /**
  * 我的解
  */
 /**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const findNumberIn2DArray = function(matrix, target) {
  const matrixSet = new Set()
  matrix.forEach( item => {
    if( item[0] !== undefined ) {
      item.forEach( intItem => matrixSet.add(intItem) )
    }
  })
  
  if( matrixSet.has(target) ) {
    return true
  }

  return false
};

// const matrix = [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
const matrix = [
  [0]
]

const target = 0

console.log( findNumberIn2DArray(matrix, target) );

/**
 * 较优解
 * 
 * 线性查找：
 *   从右下角的数字出发
 *   如果当前数字大于target,往上移一位
 *   如果当前数字小于target,往右移一位
 */
var findNumberIn2DArray = function(matrix, target) {
  if(!matrix.length) return false;
  let x = matrix.length - 1, y = 0;
  while(x >= 0 && y < matrix[0].length){
      if(matrix[x][y] === target){
          return true;
      }else if(matrix[x][y] > target){
          x--;
      }else{
          y++;
      }
  }
  return false;
};

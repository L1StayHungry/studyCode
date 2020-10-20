/**
 * 给出一个区间的集合，请合并所有重叠的区间。

 

示例 1:

输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 const intervals = [[1,3],[2,6],[8,10],[15,18]];

 /**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let result = [];
  console.log(intervals.length);
  if(intervals.length <= 1){
    return intervals
  }
  // 排序
  intervals.sort((a,b) => {return a[0]-b[0]})
  
  while(intervals.length > 1){
    let this_result = intervals.shift(1);
    if(this_result[1] >= intervals[0][0] && this_result[1] <= intervals[0][1]){
      intervals[0][0] = this_result[0]
    }else if(this_result[1] >= intervals[0][0] && this_result[1] > intervals[0][1]){
      intervals[0] = this_result
    }else{
      result.push(this_result)
    }
  }
  result.push(intervals[0])

  return result;
};

console.log(merge(intervals));

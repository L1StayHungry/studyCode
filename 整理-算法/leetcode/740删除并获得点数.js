/**
 * 给你一个整数数组 nums ，你可以对它进行一些操作。
 * 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。
 * 之后，你必须删除每个等于 nums[i] - 1 或 nums[i] + 1 的元素。
 * 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
 * 
 * 示例:
输入：nums = [3,4,2]
输出：6
解释：
删除 4 获得 4 个点数，因此 3 也被删除。
之后，删除 2 获得 2 个点数。总共获得 6 个点数。

输入：nums = [2,2,3,3,3,4]
输出：9
解释：
删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
总共获得 9 个点数。
 */

/**
 * 我的解答
 */
 var deleteAndEarn_myself = function(nums) {
   if( !nums.length ) {
     return 0
   }
  let result = 0
  // 1.排序
  nums = nums.sort((a,b) => {
    return a-b
  })
  // 2.去重
  const nums_Arr = Array.from( new Set(nums) )
  console.log(nums, nums_Arr);

  // 3.去重后对应的计数
  let nums_sum_Arr = []
  for( let item of nums_Arr ) {
    const start = nums.indexOf( item )
    const last = nums.lastIndexOf( item )
    nums_sum_Arr.push( item * (last-start+1) )
  }
  console.log('nums_sum_Arr',nums_sum_Arr);
  
  // 4.找出分割点
  let splitIndex = [0]
  for( let i = 0; i < nums_Arr.length-1; i++) {
    if( nums_Arr[i]+1 !== nums_Arr[i+1] ) {
      splitIndex.push( i+1 )
    }
  }
  splitIndex.push( nums_Arr.length )
  console.log('splitIndex',splitIndex);
  
  // 5.分割数组，逐个找出最大值
  for( let i=0; i < splitIndex.length-1; i++) {
    console.log('第',i+1,'组');
    // 计算小组内最大值
    result += sumMax( nums_sum_Arr.slice(splitIndex[i],splitIndex[i+1]) ); 
  }

  // 动态规划
  function sumMax( nums ) {
    if( nums.length === 1) return nums[0]
    const size = nums.length;
    let first = nums[0], second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < size; i++) {
        let temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
  }
  
  return result
};

const nums = [1]
let test = 0
nums.forEach( item => {
  test += item
})
console.log('test',test);
console.log(nums.length);
console.log(deleteAndEarn_myself(nums));

/**
 * 官方答案
 * 1.找出最大的数，初始化数组，将数值累加到对应的数组元素处
 * 2.动态规划，打家劫舍。
 */
 var deleteAndEarn = function(nums) {
  let maxVal = 0;
  for (const val of nums) {
      maxVal = Math.max(maxVal, val);
  }
  const sum = new Array(maxVal + 1).fill(0);
  for (const val of nums) {
      sum[val] += val;
  }
  return rob(sum);
};

const rob = (nums) => {
  const size = nums.length;
  let first = nums[0], second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < size; i++) {
      let temp = second;
      second = Math.max(first + nums[i], second);
      first = temp;
  }
  return second;
}
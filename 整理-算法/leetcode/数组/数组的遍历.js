/**数组的遍历：485、495、414、628 */

/**********************************************
 * 485.最大连续1的个数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 const my_findMaxConsecutiveOnes = function(nums) {
  const str = nums.join('')
  nums = str.split('0')
  if(!nums.length) return 0
  let max = nums[0].length
  nums.forEach(item => {
    if(item.length > max){
      max = item.length
    }
  })
  return max
};
/**
 * 官方：一次简单遍历就可以
 */
 const findMaxConsecutiveOnes = function(nums) {
  let maxCount = 0, count = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
      if (nums[i] === 1) {
          count++;
      } else {
          maxCount = Math.max(maxCount, count);
          count = 0;
      }
  }
  maxCount = Math.max(maxCount, count);
  return maxCount;
};

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
//*************************************************** */



/**********************************************
 * 486.提莫攻击
 */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function(timeSeries, duration) {
  // 用sort方法时最好能够带上详细的排序函数
  const arr = timeSeries.sort((a,b) => a-b)
  let count = 0
  const len = arr.length
  for(let i=0; i<len-1; i++){
    if(arr[i] + duration > arr[i+1]){
      count += arr[i+1] - arr[i]
    }else{
      count += duration
    }
  }
  count += duration
  return count
};
// console.log(findPoisonedDuration([1,3,5,7,9,11],1));


/**********************************************
 * 414.
 */

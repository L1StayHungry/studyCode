function quickSort(arr, parentLeftIndex = 0, parentRightIndex = arr.length - 1) {
  // 是否满足排序基本条件
  if(parentLeftIndex >= parentRightIndex) return

  let leftIndex = parentLeftIndex
  let rightIndex = parentRightIndex
  
  // 取基数。我取最后一个数为基数
  const target = arr[rightIndex]
  // 分区, 注意不用取等号
  while(leftIndex < rightIndex){
    // 因为取的最后一个数为基数，所以从左边开始遍历
    // 找到第一个比基数大的数，放到无效位置处，此时无效位置为arr[rightIndex]
    while(leftIndex < rightIndex && arr[leftIndex] <= target){
      leftIndex++
    }
    // 找到了，没找到也不会有影响，大不了原地赋值
    arr[rightIndex] = arr[leftIndex]
    // 此时无效数据为arr[leftIndex]

    // 找到第一个比基数小的数，放到无效位置处，此时无效位置为arr[rightIndex]
    while(leftIndex < rightIndex && arr[rightIndex] >= target){
      rightIndex--
    }
    // 找到了，没找到也不会有影响，大不了原地赋值
    arr[leftIndex] = arr[rightIndex]
    // 此时无效数据为arr[rightIndex]
  }
  // 将基数放到上述无效数据处就完成了分区
  arr[rightIndex] = target

  // 分区排序
  if((rightIndex - 1) - parentLeftIndex >= 1){
    quickSort(arr, parentLeftIndex, rightIndex - 1)
  }
  if( parentRightIndex - (rightIndex + 1) >= 1){
    quickSort(arr, rightIndex + 1, parentRightIndex)
  }
  return arr
}


const arr = [9, 6, 8, 10, 7, 22, 11, 17]
// [3, 6, 3, 6, 8, 10]
console.log('结果', quickSort(arr));
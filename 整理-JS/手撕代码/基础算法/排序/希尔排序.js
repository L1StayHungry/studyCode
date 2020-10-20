let arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 04];
let len = arr.length;
// 增量为fraction
for (let fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
    console.log('fraction',fraction);
    // 对分组进行直接插入排序
    for (let i = fraction; i < len; i++) {
        // 插入排序
        for (let j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
            let temp = arr[j];
            arr[j] = arr[fraction + j];
            arr[fraction + j] = temp;
        }
    }
    console.log(arr);
}
console.log(arr);
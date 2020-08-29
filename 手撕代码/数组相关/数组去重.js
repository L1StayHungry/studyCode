const arr = ['a', 'a', 'b', 'ab']

const arr_later = arrRemove2(arr)
console.log(arr_later);

/**
 * 一、
 * ES6 提供了新的数据结构 Set。
 * 它类似于数组，但是成员的值都是唯一的，没有重复的值。
 * Set 本身是一个构造函数，用来生成 Set 数据结构
 * 
 * [... Set()]和Array.from的作用都是将Set结构转换成数组
 */
function arrRemove(arr) {
    // return [...new Set(arr)];
    return Array.from(new Set(arr))
}

/**
 * 二、
 * indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
 * 如果要检索的字符串值没有出现，则该方法返回 -1
 */
function arrRemove2(arr){
    let  newarr = []
    for(item of arr){
        if(newarr.indexOf(item)<0){
            newarr.push(item)
        }
    }
    return newarr
}
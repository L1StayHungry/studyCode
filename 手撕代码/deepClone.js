let arr = {
    name: 'lihuajun',
    age: 18,
    hobbies: ['basketball','game'],
    family: {
        dad: 'li',
        mon: 'ke'
    }
}

let deepClone_arr = deepClone(arr)
deepClone_arr.name = 'hahaha'
console.log(deepClone_arr)

function deepClone(item){
    // 'object'记得加引号；不要漏了null
    if(typeof item != 'object' || item == null){
        return item
    }

    let result
    if(item instanceof Array){
        result = []
    }else{
        result = {}
    }

    for(let key in item){
        // 判断是否是隐式原型属性
        if(item.hasOwnProperty(key)){
            result[key]=deepClone(item[key])
        }
    }

    return result
}
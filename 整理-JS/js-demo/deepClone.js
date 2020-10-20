/**
 * 深拷贝
 */

 const obj={
     age: 20,
     name: 'lihuajun',
     address:{
         city:1
     }
 }

 const obj2=obj

//  obj.address.city=3
//  console.log(obj.address.city)

 const obj3=deepclone(obj)
 obj3.address.city=7
 console.log(obj)


 function deepclone(obj){
    if(typeof obj!=='object' || obj ==null){
        return obj
    }

    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }

    for(let key in obj){
        if(obj.hasOwnProperty(key))
        // 保证key不是原型的属性
        
        //递归
        result[key]=deepclone(obj[key])
    }
    return result
 }
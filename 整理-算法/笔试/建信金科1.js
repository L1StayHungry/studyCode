function uniqueAward( nums ) {
  // write code here
  let this_map = new Map();
  for(let val of nums){
      if(this_map.has(val)){
        this_map.set(val,false)
      }else{
        this_map.set(val,true)
      }
  }
  
  for(let item of this_map){
      if(item[1]){
          return item[0];
      }
  }
}

console.log(uniqueAward([2,3,3,2,5,6,6,5,9]));



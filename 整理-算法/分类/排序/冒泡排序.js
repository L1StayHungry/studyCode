function sortM(arr) {
  if(!arr.length || arr.length < 2) return arr
  const len = arr.length
  for(const i in arr){
    for(let j=0; j < len - i -1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

const arr = [4, 12, 1, 9, 2]
console.log(sortM(arr));
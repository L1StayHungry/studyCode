// while(line_One=readline()){
//   let lineOne = line_One.split(" ");
//   let n = lineOne[0];
//   let probability = lineOne[1];
//   let numArr = readline().split(" ");
//   numArr.sort((a,b) => a-b);

//   let result = add(n,probability,numArr);
//   print(result);
// }
// let result = add(1,100,[1,2]);
// console.log(result);
let lineOne = '1 100'.split(" ");
  let n = lineOne[0];
  let probability = lineOne[1];
  let numArr = '1 2'.split(" ");
  // numArr.sort((a,b) => a-b);
  numArr.sort((a,b) => {return a-b;});

  let result = add(n,probability,numArr);
  console.log(result);

function add(n,probability,numArr){
  let result = '';

  if(n == 1){
    result = numArr[1]*probability + numArr[0]*(100-probability)
    return solution(result);
  }

  return result;
}

function solution(result){
  if(result%100 == 0){
    return result/100;
  }else{
    return result + '%';
  }
}
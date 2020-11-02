function findFriendNum( M ) {
  // write code here
  if(M.length == 0){
    return 0;
  }
  if(M.length == 1){
    return 1;
  }
  //设置大小为M.length的数组，用于记录对应同事目前所在的组别,初始化为0
  let groups = [];
  // 目前的组数
  let groupsNum = 0;
  for(let i=0;i<M.length;i++){
    groups[i] = -1;
  }
  
  // 如果还有同事未被分组，进行分组
  while(groups.indexOf(-1) != -1){
    groupsNum++;
    let index = groups.indexOf(-1);
    groups[index] = groupsNum;
    // 对该同事的朋友圈进行处理分组
    solution(M[index],groupsNum);
  }

  function solution(arr,groupsNum){
    let len = arr.length;
    for(let i = 0;i<len;i++){
      if(arr[i] == 1){
        groups[i] = groupsNum;
        solution(M[i],groupsNum);
      }
    }
  }
  
  return groupsNum;
}

let M = [[1,1,0],[1,1,0],[0,0,1]]

console.log(findFriendNum(M));

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var inputs = []

rl.on('line', function(line){ // javascript每行数据的回调接口
   inputs.push(line.trim());


   const lineNum = inputs[0];
   let arr = inpits[1].split(' ');
  //  出发点/终点
   let src = [arr[0],arr[1]];
   let des = [arr[2],arr[3]];
   let arrs = [];
   for(let i=0;i<lineNum;i++){
     arrs[i] = inputs[i+2]
   } 
  
  var min = lineNum*lineNum + 1;
  var map = []

  function solution(pos,step,result){
     if(pos[0] == des[0] && pos[1] == des[1]){
       if(step<min){
         map = [];
         for(let j=0;j<result.length;j++){
           map.push(result[j]);
         }
         min = step;
         result = []
       }
     }
     for(let i=0;i<next.length;i++){
       let tmpos=(pos[0]+next[i][0])*n+pos[1]+next[i][1];
       if(pos[0]+next[i][0]<0 || pos[1]+next[i][1] || pos[1]+next[i][1]>=n)
       continue;
       else if (arrs[tmpos] && (arrs[tmpos][2]=='#' || arrs[tmpos][2] == '@')){
         arrs[tmpos][2]=0;
         result.push([pos[0]+next[i][0],pos[1]+next[i][1]])
       }
     }
  } 
});
/**
 * 小v是公司的运维工程师，现有一个有关应用程序部署的任务如下：
1、一台服务器的磁盘空间、内存是固定的，现在有N个应用程序要部署；
2、每个应用程序所需要的磁盘、内存不同，每个应用程序允许访问的用户数也不同，且同一个应用程序不能在一台服务器上部署多个。
对于一台服务器而言，如何组合部署应用程序能够使得单台服务器允许访问的用户数最多？

输入描述:
输入包括三个参数，空格分隔，分别表示服务器的磁盘大小、内存大小，以及应用程序列表；
其中第三个参数即应用程序列表，表述方式为：多个应用程序信息之间用 '#' 分隔，每个应用程序的信息包括 ',' 分隔的部署所需磁盘空间、内存、允许访问的用户量三个数字；比如 50,20,2000 表示部署该应用程序需要50G磁盘空间，20G内存，允许访问的用户数是2000

输出描述:
单台服务器能承载的最大用户数

输入例子1:
15 10 5,1,1000#2,3,3000#5,2,15000#10,4,16000

输出例子1:
31000

例子说明1:
组合部署服务5,2,15000、10,4,16000  ，可以让单台服务器承载最大用户数31000
 */

/**
 * Welcome to vivo !
 */

let disk = 15;
let mem = 10;
let apps = '5,1,1000#2,3,3000#5,2,15000#10,4,16000'
apps= apps.split('#')
// apps.shift(0)
// console.log(apps);

console.log(solution(disk, mem, apps));

function solution(disk, mem, apps) {

  // TODO Write your code here
  console.log(apps.length);
  
  if(apps.length == 0)
  {
    console.log('return');
    return;
  }
  let appsMes = apps[0].split(',');
  let currDisk = appsMes[0];
  let currMemory = appsMes[1];
  let currUsers = appsMes[2];
  
  apps.shift(0);
  if(currDisk <= disk && currMemory <= mem){
      let num1 = 0;
      num1 = solution(disk-currDisk, mem-currMemory,apps)
      console.log('num11',num1);
      
      num1 += currUsers;
      
      let num2 = 0;
      num2 = solution(disk, mem,apps)
      
      console.log('num1',num1);
      console.log('num2',num2);
      
      console.log('Math.max(num1,num2)',Math.max(num1,num2));
      
      return Math.max(num1,num2)
  }
  else{
    return solution(disk, mem,apps)
  }
}

// while (line = readline()) {
//   var inputs = line.split(" ");
//   var disk = inputs[0];
//   var mem = inputs[1];
//   var apps = inputs[2].split('#');
//   print(solution(disk, mem, apps));
// }
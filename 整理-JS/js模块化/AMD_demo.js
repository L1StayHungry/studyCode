define('amdModule',[
  'dependencyModule1',
  'dependencyModule2'
], (dependencyModule1, dependencyModule2) => {
  // dependencyModule1, dependencyModule2加载完才会执行
  'use strict';
  
  // 业务逻辑
  // 处理部分
  let count = 0;
  const increase = () => ++count;
  const reset = () => {
    count = 0;
  }

  return {
    increase, reset
  }
});

/** 引入：
 *
 * require(['amdModule'], amdModule => {
    amdModule.increase();
   })
 */
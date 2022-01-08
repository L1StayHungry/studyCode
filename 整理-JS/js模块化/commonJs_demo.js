// 引入部分
// const dependencyModule1 = require(./dependencyModule1);
// const dependencyModule2 = require(./dependencyModule2);

// 处理部分
let count = 0;
const increase = () => ++count;
const reset = () => {
  count = 0;
}

// 暴露接口部分
exports.increase = increase;
exports.reset = reset;

module.exports = {
  increase, reset
}

/** 使用 **
  const { increase, reset } = require('./xxx.js');

  increase();
  reset();
 */
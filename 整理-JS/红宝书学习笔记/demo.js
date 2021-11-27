/**
 * 函数作用域-块作用域
 */
function testVarandTest() {
  for(var i=0; i<5; i++) {
    console.log(i);
    // 0 1 2 3 4
  }
  for(var j=0; j<5; j++) {
    setTimeout(() => {
      console.log(j);
      // 5 5 5 5 5
    }, 0);
  }
}
// testVarandTest()



// 1、对于Promise对象，await会阻塞主函数的执行，等待 Promise 对象 resolve，
// 然后得到 resolve 的值，作为 await 表达式的运算结果，然后继续执行主函数接下来的代码。
function testAwait(){
    return new Promise((resolve) => {
           setTimeout(function(){
               console.log("testAwait");
               resolve();
           }, 1000);
        });
       }
   async function helloAsync(){
       await testAwait();
       console.log("helloAsync");
   }
   helloAsync();
// testAwait  
// helloAsync

// 2、对于非Promise对象，await等待函数或者直接量的返回，而不是等待其执行结果
function testAwait(){
    setTimeout(function(){
            console.log("testAwait");
        }, 1000);
    }
async function helloAsync(){
    await testAwait();
    console.log("helloAsync");
}
helloAsync();
// helloAsync
// testAwait


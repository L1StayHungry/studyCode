// 1、对于Promise对象，await会阻塞主函数的执行，等待 Promise 对象 resolve，
// 然后得到 resolve 的值，作为 await 表达式的运算结果，然后继续执行主函数接下来的代码。
function testAwait1(){
    return new Promise((resolve) => {
           setTimeout(function(){
               console.log("testAwait1");
               resolve();
        }, 1000);
    });
}
async function helloAsync11(){
    await testAwait1();
    console.log("helloAsync1");
}
helloAsync11();
// testAwait1 
// helloAsync1

// 2、对于非Promise对象，await等待函数或者直接量的返回，而不是等待其执行结果
function testAwait2(){
    setTimeout(function(){
            console.log("testAwait2");
        }, 500);
    }
async function helloAsync22(){
    await testAwait2();
    console.log("helloAsync2");
}
helloAsync22();
// helloAsync2
// testAwait2


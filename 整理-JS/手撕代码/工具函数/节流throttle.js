// 防抖函数也存在问题，譬如图片的懒加载
// 我希望在下滑过程中图片不断的被加载出来
// 而不是只有当我停止下滑时候，图片才被加载出来
// 又或者下滑时候的数据的 ajax 请求加载也是同理

// 这个时候，我们希望即使页面在不断被滚动
// 但是滚动 handler 也可以以一定的频率被触发（譬如 250ms 触发一次）
// 这类场景，就要用到另一种技巧，称为节流函数（throttling）。

// 节流函数，只允许一个函数在 X 毫秒内执行一次。

// 与防抖相比，节流函数最主要的不同在于它保证在 X 毫秒内至少执行一次我们希望触发的事件 handler。

// 与防抖相比，节流函数多了一个 mustRun 属性，代表 mustRun 毫秒内，必然会触发一次 handler
function throttle(func, wait, mustRun) {
  let timeout,
      startTime = new Date();
    
  return function() {
    let context = this,
        args = arguments,
        curTime = new Date();
        
    // 取消由 setTimeout() 方法设置的 timeout
    clearTimeout(timeout);
    // 如果达到了规定的触发时间间隔，触发 hander
    if(curTime - startTime >= mustRun){
      func.apply(context, args);
      startTime = curTime;
    }else{
      timeout = setTimeout(func,wait);
    }
  }
}


// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
  console.log("Success");
}

// 采用了节流函数
window.addEventListener('scroll',throttle(realFunc,500,1000));
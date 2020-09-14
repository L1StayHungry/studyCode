function debounce(func,wait,immediate){
    // 定时器
    var timeout;
    return function() {
        // 清除定时器
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    }
}

// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
    console.log("Success");
}
 
// 采用了防抖动
window.addEventListener('scroll',debounce(realFunc,500));
// 没采用防抖动
// window.addEventListener('scroll',realFunc);
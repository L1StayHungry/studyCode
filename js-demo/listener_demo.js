//通用的事件绑定元素
function bindEvent(elem,type,fn){
    elem.addEventListener(type,fn)
}

const con= document.getElementById('p11')

bindEvent(p11,'click',function(event){
    event.preventDefault()
    alert('clicked')
})


//matches判定是否是触发事件target.matches(selector)
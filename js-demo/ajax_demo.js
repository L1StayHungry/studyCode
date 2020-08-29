const xhr=new XMLHttpRequest()

xhr.open('GET','/js-demo/ajax_demo.json',true)//true异步

xhr.onreadystatechange = function(){
    id=f(xhr.readyState === 4){
        if(xhr.status === 200){
            alert(xhr.responseText)
        }
    }

}

xhr.send(null)
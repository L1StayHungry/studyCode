const getJson = function(url){
    return new Promise(function(resolve,reject){
        const harder = function(){
            if(this.readyState !==4){
                return;
            }
            console.log(this.status,'this.status');
            if(this.status === 200){
                console.log('this.response',this.response);
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }

        const client = new XMLHttpRequest();
        client.open('GET',url);
        // 根据返回的数据做出响应
        client.onreadystatechange = harder;
        client.responseType = "json";
        client.setRequestHeader("Accept","application/json");
        client.send();
    })
}

getJson("http://152.136.185.210:8000/api/z8/home/multidata").then( result => {
  console.log(result);
}).catch(error => {
    console.log('错误');
}).finally(() => {
    console.log('执行完毕');
})

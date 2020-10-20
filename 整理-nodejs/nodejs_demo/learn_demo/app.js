const http = require('http');
const url=require('url');

http.createServer(function (request, response) {
  // console.log(request);
  
  // 根据request传入的url请求地址进行页面数据请求
  console.log(request.url);

  if(request.url!='/favicon.ico'){
    var getValue=url.parse(request.url,true).query;
    console.log(getValue);
    
    console.log(`姓名：${getValue.name}--年龄：${getValue.age}`);
  }
  
  // 设置响应头
  response.writeHead(200, {'Content-Type': "text/html;charset=utf-8"});

  response.write('你好，this is nodejs')
  response.write("<h2>啊啊啊啊</h2>")
  // 结束响应
  response.end();
}).listen(4000);

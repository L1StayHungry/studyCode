const http = require('http');
const serv = http.createServer(function (req,res){
  res.writeHead(200,{
    // 设置响应头
    'Content-Type': 'text/html;charset=utf-8'
  });
  res.write('你好，this is nodejs')
  res.end('<marquee>Hello Node!</marquee>');
}).listen(8899);
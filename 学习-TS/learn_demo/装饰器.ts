function logClass(params:any){
  console.log(params);

  params.prototype.apiUrl = 'xxx'
}

@logClass
class HttpClient {
  constructor() {

  }

  getData(){}
}

let http:any = new HttpClient();
console.log(http.apiUrl);

// 装饰器工厂
function decorateFactory(params:string){
  console.log(params);

  return function(target : any){
    console.log(target);
    console.log(params);
    target.prototype.apiUrl = params
  }
}

@decorateFactory('这里对应params')
class HttpClient2 {
  constructor() {

  }

  getData(){}
}

let http2:any = new HttpClient2();
console.log(http2.apiUrl);

// 类装饰器

// 属性装饰器

// 方法装饰器


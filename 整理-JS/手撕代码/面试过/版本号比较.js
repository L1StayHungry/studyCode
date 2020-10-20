    let a= '1.2.1'
    let b= '1.1.0'

    if_A_New(a,b);

    function if_A_New(a,b){
  //  /xxxx/g 全局替换xxxx
      const aa =a.replace(/\./g,'');
      const bb =b.replace(/\./g,'');
      console.log(aa);
      console.log(bb);
      
      let result = false;
      
      if(a==b){
        console.log('版本号相同');
        return ;
      }else if(a>b){
        result = true;
      }else{
        result = false;
      }

      if(result){
        console.log('是新版本');
      }else{
        console.log('不是新版本');
      }
    }
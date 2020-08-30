let str = 'HelloWorld_hhH';
searchMax(str);

function searchMax(str){
    let maxChar = '';
    let maxNum = 0;
    let obj = {};
    
    const len = str.length;

    for(let i=0;i<len;i++){
        if(obj[str[i]]){
            obj[str[i]]++;
        }else{
            obj[str[i]] = 1;
        }
    }

    for(let props in obj){
        if(obj[props]>maxNum){
            maxNum = obj[props];
            maxChar = props;
        }
    }

    console.log(maxNum+'--'+maxChar);
}
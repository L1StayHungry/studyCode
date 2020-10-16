// let template;
// let count;
// let dict = new Map();
// while((template=read_line())!=null && (count=readInt())!=null) {
//     for(let i=0;i<count;i++){
//     	let newKeyValue = read_line().split('->');
// 		dict.set(newKeyValue[0],newKeyValue[1])
// 	}
//     let c = parse(template,count,dict)
//     print(c);
// }
// function parse(template,count,dict){
//   let thistemplate = template;
//   let thiscount = count;
//   let thisDict = new Map();
//   thisDict = dict;
  
//   let indexOfEnd = thistemplate.indexOf('}}');
//   let toEnd = thistemplate.slice(0,indexOfEnd);
//   let indexOfStart = toEnd.lastIndexOf('{{');
//   let realTemplate = toEnd.slice(indexOfStart+2);
//   let result = '';

//   if(realTemplate == ''){
//     result = '{{}}';
//   }else if(thisDict.has(realTemplate)){
//     result = thisDict.get(realTemplate);
//   }else {
//     result = realTemplate;
//   }

//   return template.replace('{{'+realTemplate+'}}',result);
// }

let ask = 'A';
let count = 3;
let dict = new Map();
dict.set('A','B');
dict.set('B','C');
dict.set('C','A');
// while((ask=read_line())!=null && (count=readInt())!=null) {
//     for(let i=0;i<count;i++){
//     	let newKeyValue = read_line().split('->');
// 		dict.set(newKeyValue[0],newKeyValue[1])
// 	}
//     let c = dependNum(ask,dict)
//     print(c);
// }
console.log(dict);
dependNum(ask,dict);

function dependNum(ask,dict){
  
    let start = ask;
    let result = 0;
    
    while(dict.has(ask)){
        if(dict.get(ask) != start){
            result++;
            ask = dict.get(ask);
        }else{
          return result;
        }
    }
}
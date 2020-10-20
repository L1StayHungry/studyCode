new Promise((resolve,reject)=>{
  console.log('promise1');
  resolve()
}).then(() => {
  console.log('then1-1');
  new Promise((resolve,reject) =>{
    console.log('promise2');
    resolve()
  }).then(() =>{
    console.log('then2-1');
  }).then(() =>{
    console.log('then2-2');
  }).then(() =>{
    console.log('then2-3');
  })
}).then(() =>{
  console.log('then1-2');
  new Promise((resolve,reject) =>{
    console.log('promise3');
    resolve()
  }).then(() =>{
    console.log('then3-1');
  }).then(() =>{
    console.log('then3-2');
  }).then(() =>{
    console.log('then3-3');
  })
}).then(() =>{
  console.log('then1-3');
})



// console.log(typeof "1" == 1);




//a e c b d
// process.nextTick(function() {
//   console.log('p');
// })

// new Promise(function(resolve,reject){
//   console.log('a');
//   setTimeout(function(){
//     console.log('b');
//   })
//   resolve();
// }).then(() => console.log('c'))

// setTimeout(function() {
//   console.log('d');
// });

// console.log('e');


// Promise.resolve().then(()=>{
//   console.log('Promise1')  
//   setTimeout(()=>{
//     console.log('setTimeout2')
//   },0)
// })

// setTimeout(()=>{
//   console.log('setTimeout1')
//   Promise.resolve().then(()=>{
//     console.log('Promise2')    
//   })
// },0)

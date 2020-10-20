async function fn(){
  return 100
}

(async function () {
  const a = fn();
  const b = await fn();

  console.log('a',a); //Promise { 100 }
  console.log('b',b); //100
})()
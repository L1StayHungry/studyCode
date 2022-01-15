const iifeModule = (() => {
  let count = 0;
  return {
    increase: () => ++count,
    reset: () => {
      count = 0;
    },
    getCount: () => {
      return count;
    }
  }
})();

console.log(iifeModule.getCount());
iifeModule.increase();
console.log(iifeModule.getCount());
iifeModule.reset();
console.log(iifeModule.getCount());
const memoize = (fun) => {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fun(...args);
    cache[args] = result;
    return result;
  };
};

const slowFun = (...input) => {
  return input.reduce((a, b) => a + b);
};

const fastFun = memoize(slowFun);

console.time();
console.log(fastFun(3545, 1, 5));
console.timeEnd();

console.time();
console.log(fastFun(3545, 1, 5));
console.timeEnd();

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

const slowFun = (a, b) => {
  return a + b;
};

const fastFun = memoize(slowFun);

console.time();
console.log(fastFun(0253, 3545));
console.timeEnd();

console.time();
console.log(fastFun(0253, 3545));
console.timeEnd();

const Fibonacci = (num) => ({
  [Symbol.iterator]: () => {
    let i = 1,
      old = 0,
      new1 = 0;


    return {
      next: () => {
        if (i++ <= num) {
          [old, new1] = [new1, old + new1 || 1];
          return { value: old, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});
console.log([...Fibonacci(8)]);

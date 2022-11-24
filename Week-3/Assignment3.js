function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }

  let message = `count is ${count}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();

log(); // output will be 0 as we are typing message before increment happend

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

log();

// When we print the message, that time count was 0 and we are not updating the message when count is updating --> simply message is created only once and count is incrementing
// and we can solve it by two ways

// the first way - instead of printing message, print the count

/*
function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }

  let message = `count is ${count}`;

  function log() {
    console.log(count); //##HERE I UPDATED
  }

  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();

log();

*/

// Second Way - Printing message along with increment

/*
function createIncrement() {
  let count = 0;
  let message;
  function increment() {
    count++;
    message = `count is ${count}`;
  }

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();

log();

*/

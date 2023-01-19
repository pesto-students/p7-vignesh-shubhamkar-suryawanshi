// custom promise
function myPromise(executor) {
  let onResolve, onReject;

  this.then = function (fn) {
    onResolve = fn;
    return this;
  };

  this.catch = function (fn) {
    onReject = fn;
    return this;
  };

  function resolve(val) {
    onResolve(val);
  }

  function reject(val) {
    onReject(val);
  }

  executor(resolve, reject);
}

// problem

let getNumber = () => {
  let randomNumber = Math.ceil(Math.random() * 100);
  return randomNumber;
};
let myNum = getNumber();
console.log(myNum);

function divison(a) {
  return new myPromise((resolve, reject) => {
    setTimeout(() => {
      if (a % 5 == 0) resolve(`${a} is divisible by 5`);
      else reject(`${a} is NOT divisible by 5`);
    }, 2000);
  });
}

//Code execution
divison(myNum)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

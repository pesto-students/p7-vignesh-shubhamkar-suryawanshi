// Async await

function doTask1(selectOrderItem) {
  return new Promise((resolve, reject) => {
    console.log(`Kindly select ${selectOrderItem} model`);
    if (selectOrderItem) resolve("Order placed");
    else reject("kindly select item for placing order");
  });
}

function doTask2(makePayment) {
  return new Promise((resolve, reject) => {
    console.log(` ${makePayment}`);
    if (makePayment) resolve("Order Confirmed");
    else reject("kindly pay the bill");
  });
}

function doTask3(showOrderDetails) {
  return new Promise((resolve, reject) => {
    console.log(`${showOrderDetails}`);
    if (showOrderDetails) resolve("Your Order Details");
    else reject("kindly check your order again");
  });
}

async function init() {
  try {
    const res1 = await doTask1("iPhone");
    console.log("Item Selected");

    const res2 = await doTask2(res1);
    console.log("Payment Received");

    const res3 = await doTask3(res2);
    console.log(res3);
  } catch (err) {
    console.log(err);
  }
}

init();

// Generator

function* simpleGenerator() {
  yield `Kindly select iPhone model`;
  yield `Make Payment`;
  yield `Order Summery`;
}

const genObj = simpleGenerator();
// const obj = genObj.next();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());

//question
function createStack() {
  return {
    itemsQ: [],
    push(itemQ) {
      this.itemsQ.push(itemQ);
    },
    pop() {
      return this.itemsQ.pop();
    },
  };
}

const stackQ = createStack();
stackQ.push(5);
stackQ.push(3);
stackQ.pop();
console.log(stackQ.itemsQ);

//answer

function createStack() {
  const items = [];

  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

const stackAns = createStack();
stackAns.push(5);
stackAns.push(3);
stackAns.pop();
stackAns.push(7);
console.log(stackAns.items);

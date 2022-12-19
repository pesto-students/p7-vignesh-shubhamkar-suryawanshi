function hasDuplicate(arr) {
  return arr.length === new Set(arr).size;
}

let arr1 = [1, 2, 3, 4, 5];
console.log(`${arr1} is duplicate => ${!hasDuplicate(arr1)}`);

let arr2 = [1, 1, 2, 3, 4, 5];
console.log(`${arr2} is duplicate => ${!hasDuplicate(arr2)}`);

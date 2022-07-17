function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}

let uniqueArray = [1, 2, 3, 4, 5];
console.log(`${uniqueArray} is unique : ${checkIfArrayIsUnique(uniqueArray)}`);

let nonUniqueArray = [1, 1, 2, 3, 4, 5];
console.log(
  `${nonUniqueArray} is unique : ${checkIfArrayIsUnique(nonUniqueArray)}`
);

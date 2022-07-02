// Assigment 3.1 Memoize Function
const memoize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

function add(a, b) {
  return a + b;
}

const memoizeAdd = memoize(add); // memoizing function add with arguments

console.time("First call");
console.log(memoizeAdd(5, 5));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizeAdd(5, 5));
console.timeEnd("Second call");

console.time("Third call");
console.log(memoizeAdd(5, 4));
console.timeEnd("Third call");

console.time("fourth call");
console.log(memoizeAdd(5, 4));
console.timeEnd("fourth call");

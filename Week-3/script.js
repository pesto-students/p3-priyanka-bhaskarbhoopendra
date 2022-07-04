function createIncreament() {
  let count = 0;
  function increament() {
    count++;
  }
  let message = `count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increament, log];
}

const [increament, log] = createIncreament();
increament();
log();

// The output to program will b 0
// reason - we are not chaigning anything on message, the count will change everytime increament function is called but since the message variable is not getting changed and is not declared on parent function, so it will be printed as 0 taking the value of parent count variable

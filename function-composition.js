let compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    let input = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      const currFunc = functions[i];
      input = currFunc(input);
    }
    return input;
  };
};

const timesTwo = (x) => {
  return 2 * x;
};

const calculateSquare = (x) => {
  return x * x;
};

const addOne = (x) => {
  return x + 1;
};

function main() {
  const functionToCompose = [addOne, calculateSquare, timesTwo];

  const composedFunction = compose(functionToCompose);
  const input = 4;
  const result = composedFunction(input);
  console.log(`Result ${result}`);
}

main();

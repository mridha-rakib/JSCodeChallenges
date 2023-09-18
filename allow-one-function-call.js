let once = (fn) => {
  let hasBeenCalled = false;
  let result;
  return function (...args) {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};

function sayHello(name) {
  //console.log(`Hello ${name}`);
  return `Hello ${name}`;
}

function main() {
  const sayHelloOnce = once(sayHello);
  console.log(sayHelloOnce("Rakib"));
  console.log(sayHelloOnce("Mridha"));
  console.log(sayHelloOnce("Charlie"));
}

main();

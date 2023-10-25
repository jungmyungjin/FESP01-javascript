function sum1(a, b) {
  return a + b;
}

// TODO: IIFE pattern
(function () {})();
function sum([x = 0, y = 0] = []) {
  return x + y;
}

console.log("1", sum([1, 2]));
console.log("2", sum());
console.log("3", sum([]));
console.log("4", sum([1]));
// (function () {
//   function sum({ x = 0, y = 0 } = {}) {
//     return x + y;
//   }
//   console.log(sum());
//   console.log(sum({}));
//   console.log(sum({ x: 4 }));
//   console.log(sum({ x: 5, y: 6 }));

//   console.log(5, sum(10, 20));
// })();

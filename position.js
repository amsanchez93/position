const testArr = [1, 3, 5, 6];
const testTarget1 = 5;
const testTarget2 = 2;
const testTarget3 = 7;
const testTarget4 = 0;

function position(arr, target) {
  for (let i = 0; i <= arr.length; i += 1) {
    if (target <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

console.log(position(testArr, testTarget1));
console.log(position(testArr, testTarget2));
console.log(position(testArr, testTarget3));
console.log(position(testArr, testTarget4));

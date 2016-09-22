const testArr = [1, 3, 5, 6];
const target = 5;

function position(arr, target) {
  for (let i = 0; i <= testArr.length; i++) {
    if (target < arr[i]) {
      return (i - 1);
    }
  }
}

console.log(position(testArr, target));
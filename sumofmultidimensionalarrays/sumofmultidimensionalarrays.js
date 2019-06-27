//Take an array of number value and return the sum.
//The arrays can be multi-dimensional.

function sumOfMultidimensionalArrays(array, sum = 0) {
  for (const element of array) {
    if (Array.isArray(element)) {
      sum = sumOfMultidimensionalArrays(element, sum);
    } else {
      sum += element;
    }
  }

  return sum;
}

// console.log(sumOfMultidimensionalArrays([1, 4, 7])); // = 12
// console.log(sumOfMultidimensionalArrays([1, [2, [3]], [4], [5, 6]])); // = 21
// console.log(sumOfMultidimensionalArrays([1, [2, [3]], [4], 5, [6, [7, [8]], 9], [10]])); // = 55

const arrayToBeCopied = [1, 3, 5];

const pointerToSameArray = arrayToBeCopied;

const brandNewArrayWithSameValues = [...arrayToBeCopied];

console.log(brandNewArrayWithSameValues === arrayToBeCopied);
console.log(pointerToSameArray === arrayToBeCopied);
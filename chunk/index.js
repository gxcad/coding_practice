// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

// my original solution:

// function chunk(array, size) {
//   let result = [];

//   for (let i = 0; i < array.length; i += size) {
//     let chunk = [];
//     for (let k = 0; k < size; k += 1) {
//       if (array[i + k]) chunk.push(array[i + k]);
//     }
//     result.push(chunk);
//   }

//   return result;
// }

// an alternate solution:

const chunk = (array, size) => {
  let finalArray = [];
  
  for (number of array) {
    let lastArray = finalArray[finalArray.length - 1];
    if (!lastArray || lastArray.length >= size) {
      finalArray.push([number]);
    } else {
      lastArray.push(number);
    }
  }

  return finalArray;
}
// explanation:
// finalArray is the value to return
// lastArray is the last sub array in finalArray
// if the lastArray in finalArray doesn't exist or is larger than 'size' argument, create a new sub array with number in it
// if there is still room for another number in the lastArray, push more numbers in
// once completed, return the finalArray

//tests:

console.log(chunk([1, 2, 3, 4], 2)); // --> [[ 1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // --> [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // --> [[ 1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // --> [[ 1, 2, 3, 4, 5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // --> [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
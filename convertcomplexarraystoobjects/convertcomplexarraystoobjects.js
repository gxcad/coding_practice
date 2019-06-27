//Takes an input array of arrays and returns an array of objects using data in arrays as the key and value
//See example:
const input = [
  [
    ['name', 'Ken'], ['height', '187cm'], ['favoriteFood', 'Avocado'], ['bedtime', 'Tomorrow o\'clock']
  ],
  [
    ['name', 'Erin'], ['height', '157cm'], ['favoriteFood', 'Ice Cream'], ['bedtime', 'Midnight']
  ]
];

// [
//   {
//     name: 'Ken',
//     height: '187cm',
//     favoriteFood: 'Avocado',
//     bedtime: 'Tomorrow o'clock'
//   },
//   {
//     name: 'Erin',
//     height: '157cm',
//     favoriteFood: 'Ice Cream',
//     bedtime: 'Midnight'
//   }
// ]

function convertComplexArraysToObjects(array) {
  const convertedArray = [];

  for (const person of array) {
    const personObj = {};
    for (let i = 0; i < person.length; i += 1) {
      let attributePairs = person[i];
      personObj[attributePairs[0]] = attributePairs[1];
    }
    convertedArray.push(personObj);
  }

  return convertedArray;
}

console.log(convertComplexArraysToObjects(input));
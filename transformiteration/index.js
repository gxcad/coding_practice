// Write

// function transform(source, target){}

// that takes in 2 strings and transforms source into the target string.

// source and target will always be of the same length


// pseudocode:
// place source as the first word in the resultArr
// form newWord by taking first different letter of target at matching index and substituting it
// since strings are immutable in JS, we will have to use slice to form a new string taking what has changed so far
// alternatively, use .replace
// alternately, use split and change, then rejoin
// then push result to resultArr

const transform = (source, target) => {
  let resultArr = [source];
  
  for (let i = 0; i < target.length; i += 1) {
    if (source[i] !== target[i]) {
      resultArr.push(target.slice(0, i + 1) + source.slice(i + 1));
    }
  }
  
  return resultArr;
}

//examples / tests:
console.log(transform('car','see')) // === ["car", "sar", "ser", "see"]
console.log(transform('floor','brake')) // === ["floor", "bloor", "broor", "braor", "brakr", "brake"]
console.log(transform('kata','math')) // === ["kata", "mata", "math"]
console.log(transform('deer','beer')) // === ['deer','beer']);
console.log(transform('a fall to the floor', 'braking the door in')) // === ['a fall to the floor','b fall to the floor','brfall to the floor','braall to the floor','brakll to the floor','brakil to the floor','brakin to the floor','brakingto the floor','braking o the floor','braking t the floor','braking ththe floor','braking thehe floor','braking the e floor','braking the d floor','braking the dofloor','braking the dooloor','braking the dooroor','braking the door or','braking the door ir','braking the door in']);
console.log(transform('Codewars','programs')) // === ["Codewars", "podewars", "prdewars", "proewars", "progwars", "progrars", "programs"]);
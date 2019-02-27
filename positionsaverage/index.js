function posAverage(s) {
  let array = s.split(', '), count = 0, multiplier = 0;
  
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      multiplier += 1;
      for (let k = 0; k < array[i].length; k += 1) {
        let num1 = array[i][k];
        let num2 = array[j][k];
        if (num1 === num2) count += 1;
      }
    }
  }
  let solution = (count / (multiplier * array[0].length)) * 100;
  return solution.toFixed(10);
}

console.log(posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490")); //29.2592592593
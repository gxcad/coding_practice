const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    let num1 = nums[i];
    for (let k = i + 1; k < nums.length; k += 1) {
      let num2 = nums[k];
        if (num1 + num2 === target) return [i, k];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
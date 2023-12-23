/* Q7. Create a function that takes an array of numbers as parameter. 
Use a for loop to calculate and return the sum of all the numbers in the array. */

let func_arr = (Numbers: number[]) => {
  let sum = 0;
  for (let i = 0; i < Numbers.length; i++) {
    sum += Numbers[i];
  }
  return sum;
};

let number = [24, 26, 30];
let total_sum = func_arr(number);
console.log(total_sum);

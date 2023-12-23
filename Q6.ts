/* Q6. Write a program having an array of numbers if the number is negative it should remove
the negative number from the array. */

let arr = [1, 2, 3, -1, -2, -3];
let pos_arr = [];
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] >= 0) {
    pos_arr.push(arr[i]);
  }
}
console.log(pos_arr);

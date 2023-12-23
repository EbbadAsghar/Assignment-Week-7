/* Q1) Create a function that takes an array, an index, and a value as parameters. 
Inside the function, use the splice method to insert the value at the specified index in the array.
Return the modified array. */

let a = (b: string[], index: number, value: string): string[] => {
  b.splice(index, 3, value);
  return b;
};

let c = ["rice", "burger", "chips"];
let upd_b = a(c, 0, "chicken");
console.log(upd_b);

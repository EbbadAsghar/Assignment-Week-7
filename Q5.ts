/* Q5. Create a function that takes a positive integer as parameter and uses a for loop to calculate and
return the factorial of that number. */

let calcfact = (Number: number) => {
  if (Number < 0) {
    console.log(`Its not a positive Integer.`);
  }
  let fact: number = 1;
  for (let i = 1; i <= Number; i++) {
    fact *= i;
  }
  return fact;
};

let e = calcfact(4);
console.log(e);

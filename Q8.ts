/* Q8. Implement a program that takes a list of temperatures in Celsius as input from the user.
Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the 
converted temperatures in an array. Use a for loop to perform the conversion for each temperature. */

import prompt from "prompt-sync";

let promptInput = prompt();
let listofTemp: number = parseInt(
  promptInput("Enter Your Temprature In Celsius: ")
);
let celsiusTemp_Arr = [];
for (let i = 0; i < listofTemp; i++) {
  let Temp = parseInt(promptInput(`Enter temprature ${i + 1} in Celsius: `));
  celsiusTemp_Arr.push(Temp);
}
let fahren_temp: number[] = [];
for (let i = 0; i < celsiusTemp_Arr.length; i++) {
  let celsiustofahrenheit = (celsiusTemp_Arr[i] * 9) / 5 + 32;
  fahren_temp.push(celsiustofahrenheit);
}
console.log(`Celsius Tempratures:`, celsiusTemp_Arr);
console.log(`Fahrenhiet Tempratures: `, fahren_temp);

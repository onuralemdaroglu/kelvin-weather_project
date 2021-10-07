//The Temperature is in Kelvin 293 and constant!
const kelvin = 293;
console.log(`The temperature is ${kelvin} degrees Kelvin.`);

//Temperature in Celcius converter formula
let celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius.`);

//Temperature in Farenheit converter formula
//used Math.floor() method to round number to whole number
let farenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);

//Temperature in Newton Scale converter formula
//used Math.floor() method to round number to whole number
let newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${newton} degrees Newton.`);



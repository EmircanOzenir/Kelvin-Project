//Step2
//  The value saved to kelvin will stay constant, therefore I prefered to use const instead of let and var.

//Step1
const kelvin = 283;

//Step4
//  Converted Kelvin to Celsius by subtracting 273 from the kelvin.

// Step3
var celsius = kelvin - 273;

//Step6
//  Calculated Fahrenheit.

//Step5
var fahrenheit = celsius*(9/5)+32;

//Step 8
//  Decimal number converted.

//Step7
var fahrenheit = Math.floor(fahrenheit);

//Step9
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Step10
//  Run the program!

//Step11
//  Change the value of Kelvin and Run the program again! and What's 0 Kelvin in Fahrenheit?

//Step12
//  Extra Practice!

var newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton.`);
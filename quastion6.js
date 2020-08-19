console.log("=======Quastion 6============")
/*
Input: 
  *220.
  *age.
  *fastest heart rate percent: 85%
  *slowest heart rate percent: 65%  
processing:
  *hart rate.
  *fastest heart rate.
  *slowest heart rate.  .
output:
  *fastest heart rate.
  slowest heart rate.
*/
let prompt = require('prompt-sync')();
let age = prompt("Enter your age: ")
let heartRate;
heartRate = 220 - age;
let fastestHeartRate;
fastestHeartRate = 0.85 * heartRate;
let lowestHeartRate;
lowestHeartRate = 0.65 * heartRate;
console.log(fastestHeartRate);
console.log(lowestHeartRate);
console.log("=========Quastion 5===========")
/*
Input: 
  *beginningOdometer.
  *endingOdometer.
  *number of gallon of gasoline
processing:
  *change on odometer.
  .
output:
  *change on odometer per number of gallon used.
*/
let prompt = require('prompt-sync')();
let biginningOdometer = prompt("Enter beginning odoemeter: ");
let endingOdometer = prompt("Enter ending odometer: ");
let numberOfGallon = prompt("Enter number of gallon used: ");
let changeOnOdometer;
changeOnOdometer = endingOdometer - biginningOdometer;
console.log(changeOnOdometer/numberOfGallon);
console.log("==========Quastion 7==========");
/*
Input:- 
  *regular hours.
  *employee's wage.
  *rate of tax = 15%
processing:- 
  *gross pay.
  *tax.
  *after tax pay.
output:-
  after tax pay.
*/
let prompt = require('prompt-sync')();
let regularHours = prompt("Enter regular hours: ");
let employeeWage = prompt("Enter employee's wage: ")
let grossPay;
grosspay = regularHours *employeeWage
let tax;
tax = 0.15 * grosspay;
let afterTaxPay;
afterTaxPay = grosspay - tax;
console.log(afterTaxPay);
console.log("===========Quastion 8==============")
/*
input:-
  * S = distance that the cable must span.
  * d = distance the cable will sag.
  * L = (S + 8 * d*d) / 3 the power of S.
processing
  length of cable.
output:
length of cable.
*/
let prompt = require('prompt-sync')();
let S = prompt("Enter distance that the cable must span: ");
let d = prompt("Enter distance the cable wil sag: ")
let lengthOfCable;
lengthOfCable = (S + 8 * d*d)/Math.pow(3, S);
console.log(lengthOfCable);
console.log("=====Quastion 1======")
/*
Input:- volume in quarts
processing:- convert volume in quart in to volume in liter.
liter = quart * 0.946
output = volume in Litter
*/
let prompt = require('prompt-sync')();
let volumeInQuart = prompt("Enter the volume in quart: ");
let volumeInLitter = volumeInQuart * 0.946;
console.log("volumeInLitter: " + volumeInLitter + "Liter");

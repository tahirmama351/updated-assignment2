console.log("=======Quastion 2========");
/*
Input:- distance in kilometre
processing:- convert distance in kilometre in to distance in distanceInMile
distanceInMile = distanceInKilometre *0.621
output:- distance in mile
 */
let prompt = require('prompt-sync')();
let distanceInKilometre = prompt("Enter the distance in kilometre: ");
let distanceInMile;
distanceInMile = distanceInKilometre * 0.621
console.log("distance in mile: " + distanceInMile);
///////////////////////////
console.log("========Quastion 3============")
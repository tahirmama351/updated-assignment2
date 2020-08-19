console.log("==========Quastion 9 ==================");
/*
Input:- 
  * w = width of the tire in millimeters
  * a = aspect ratio.
  * d = diameter of the wheel in inch.
processin:-
  * convet millimeter in to centmeter.
  * conver inch in to centmeter 
  * v = volume of space inside the tire.
  v=(PI * w*w a(w *a + 2540 * d) )/10000000
output:-
  volume of space inside the tire in cubic sentmeter.
*/
let prompt = require('prompt-sync')();
let w = prompt("Enter width of the tire in millimeters: ");
//convert millimeter into centmeter.
w = w*0.1;
let a = prompt("Enter aspect ratio: ");
let d = prompt("Enter deameter of the wheel in inch: ");
// convert inch in to centmeter.
d = d*2.54;
let v;
v=(Math.PI * w*w *a*(w *a + 2540 * d) )/10000000;
console.log(v);
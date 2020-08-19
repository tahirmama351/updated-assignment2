/*
Input: 
  *Total number of boxes.
  *number of boxes in each stocks
processing:
  calculata number of stocks.
  *it must be intger
  *it is greater than or equal to total number of boxes divided by number of boxes in each stocks.
  *number of stocks = Math.ceil(total number of boxes / muber of boxes in each stocks)
output:
  *number of stocks.
*/
let prompt = require('prompt-sync')();
let totalNumberOfBoxes = prompt("Enter number of boxes: ");
let numberOfBoxesInEachStock = prompt("Enter number of boxes in each stock: ");
let numberOfStocks;
numberOfStocks = Math.ceil(totalNumberOfBoxes/numberOfBoxesInEachStock);
console.log(numberOfStocks);
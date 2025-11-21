/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-11-21
 * @fileoverview This program calculates the cost of a new car.
 */

// Input
const floorMat: string = prompt("Floor mats?") || "no";
const navigation: string = prompt("Navigation system?") || "no";
const heatedSeats: string = prompt("Heated seats?") || "no";
const warranty: string = prompt("5-year extended warranty?") || "no";

// Output
var totalCost: number = 25000;
console.log("Base price: $25,000");
if (floorMat == "yes") {
  totalCost += 500;
  console.log("Floor mat: $500");
}
if (navigation == "yes") {
  totalCost += 1000;
  console.log("Floor mat: $1,000");
}
if (heatedSeats == "yes") {
  totalCost += 500;
  console.log("Heated seats: $500");
}
if (warranty == "yes") {
  totalCost += 2500;
  console.log("5-year extended warranty: $2,500");
}

var tax = totalCost * 0.13;
console.log(`Tax: $${tax}`);
totalCost += tax;

console.log(`Final price: $${totalCost}`);

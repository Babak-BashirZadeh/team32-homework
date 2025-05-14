// calculate the average of the numbers provided as command line arguments.
const args = process.argv.slice(2);
const numbers = args.map(Number);
// Check if all arguments are numbers
if (numbers.some(isNaN)) {
  console.error("Please provide valid numbers.");
  process.exit(1);
}
// Check if the array is empty
if (numbers.length === 0) {
  console.error("Please provide at least one number.");
  process.exit(1);
}
// Calculate the average
const argsum = numbers.reduce((acc, num) => acc + num, 0);
const average = argsum / numbers.length;
console.log(`The Numbers are ${numbers} and average is: ${average}`);
// Example usage:
// node avg.js 1 2 3 4 5
// This will output: The average is: 3

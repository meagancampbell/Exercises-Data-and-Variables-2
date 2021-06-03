
//4.9. Exercises: Data and Variables Exercise

// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeedMph = '17500';
let distanceToMarsKm = '225000000';
const milesPerKm = '0.621';

let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof 'shuttleName');
console.log(typeof 'shuttleSpeedMph');
console.log(typeof 'distanceToMarsKm');
console.log(typeof 'distanceToMoonKm');
console.log(typeof 'milesPerKm');
console.log(typeof 'milesToMars');
console.log(typeof 'hoursToMars');
console.log(typeof 'daysToMars');

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")



// Code your solution to exercises 3 and 4 here:


let kilometersToMoonKm = '384400';
const milesPerKilometer = '0.621';

let milesToMoon = kilometersToMoonKm * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;





// Code your solution to exercise 5 here:
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.")
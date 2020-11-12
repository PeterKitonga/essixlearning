let app = {};

/*
* A variable is a “named storage” for data. In ES6 we use const
* and let to declare variables. 'let' is used to declare variables
* that can change in value at any given time. For 'const', these variables are
* constant and cannot be changed.
*/
const name = 'John Doe';
let title = 'Software Engineer';
let hourly_wage = 40;

console.log('Name: ' + name + ', Title: ' + title + ', Hourly Wage: ' + hourly_wage);

// name = 'Peter Doe'; Here we cannot change the value of a constant variable
title = 'Senior Software Engineer';
hourly_wage = 45;

console.log('Name: ' + name + ', Title: ' + title + ', Hourly Wage: ' + hourly_wage);

/*
* There are two limitations on variable names in JavaScript:
* 1. The name must contain only letters, digits, or the symbols $ and _.
* 2. The first character must not be a digit.
*
* We can declare multiple variables by chaining them like so:
*/
let user = 'John',
    age = 25,
    message = 'Hello';

/*
* There is a widespread practice to use constants as aliases for difficult-to-remember
* values that are known prior to execution. Such constants are named using capital letters and underscores.
* 
* For example, we can declare constant variables for color hexadecimal values:
*/
const COLOR_RED = '#FF0000';
const COLOR_GREEN = '#00FF00';
const COLOR_BLUE = '#0000FF';
const COLOR_ORANGE = '#FF7F00';
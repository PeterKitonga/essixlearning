let app = {};

/*
* Below implements an implicit return using a fat arrow function.
* This is translated as:
* const add = function(a, b) { return a + b; };
*/
const add = (a, b) => a + b;

console.log(`Addition result: ${add(100, 33)}`);

/*
* Here, we have an implicit return that returns an object like:
* {sum: 13, multiplication: 30}
* Below arrow function would be translated as:
* const addMultiply = function (a, b) { return {sum: (a + b), multiplication: (a * b)}; };
*/
const addMultiply = (a, b) => ({sum: (a + b), multiplication: (a * b)});

console.log(`Addition and multiplication result: ${JSON.stringify(addMultiply(10, 3))}`);

/*
* With arrow functions we can also omit the parentheses whenever
* our function has a single arguement.
* Below would be translated as:
* const double = function(number) { return 2 * number; };
*/
const double = number => 2 * number;

console.log(`Double result: ${double(404)}`);

/*
* In the case where our function has no arguements, we
* must have parentheses added before the arrow.
* Below would be translated as:
* const tripple = function() { return 3 * 3 }
*/
const tripple = () => 3 * 3;

console.log(`Tripple result: ${tripple()}`);

const numbers = [1, 2, 3, 4];

const double_numbers = numbers.map(number => double(number));

console.log(`Double numbers array result: ${JSON.stringify(double_numbers)}`);

/*
* Advantage of using arrow functions is the use of lexical 'this' which
* allows the value of 'this' to change in context to where we call it.
* In ES5, that would not be possible and we would have to reassign 'this' to a variable outside
* the function in context in order to access the values.
*/
const team = {
    members: ['Jane', 'Bill'],
    team_name: 'Riff Raff',
    teamSummary: function () {
        return this.members.map((member) => {
            return `${member} is on team ${this.team_name}`;
        });
    }
}

console.log(`Team summary result: ${JSON.stringify(team.teamSummary())}`);
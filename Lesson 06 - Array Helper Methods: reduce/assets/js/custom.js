let app = {};

app.numbers = [10, 20, 30, 40];

/*
* The reduce helper executes a defined function on each element in the
* array to give a single output. For example below we are summing up
* all the integers in the array to give us a result of 100. The initial
* value of the sum is set to 0 which is the second parameter of the reduce helper.
*
* More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
app.number_sum_result = app.numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log('Number sum result: ' + app.number_sum_result);

app.primary_colors = [
    {hex: '#FF0000', color: 'red'},
    {hex: '#FFFF00', color: 'yellow'},
    {hex: '#0000FF', color: 'blue'}
];

/*
* In this example we use reduce to get all the values of colors and push them
* to a new array of colors only.
*/
app.colors_result = app.primary_colors.reduce(function(colors, primary) {
    colors.push(primary.color);

    return colors;
}, []);

console.log('Colors result: ' + JSON.stringify(app.colors_result));

app.parentheses = '(()()()())';

/*
* In this example we check if a string of parentheses(above) are balanced. By this we mean
* if all parentheses have an opening and closing bracket. All parentheses must have a starting
* '(' symbol and end with ')' symbol.
* 
* Example solved in python: https://runestone.academy/runestone/books/published/pythonds/BasicDS/SimpleBalancedParentheses.html
*/
app.balancedParens = function (string) {
    let check = string.split('').reduce(function(counter, char) {
        if (counter < 0) {
            return counter;
        } else if (char === '(') {
            return ++counter;
        } else if(char === ')') {
            return --counter;
        } else {
            return counter;
        }
    }, 0);

    return check === 0 ? 'Balanced' : 'Not Balanced';
};

console.log('Balanced parentheses check of "' + app.parentheses + '" result: ' + app.balancedParens(app.parentheses));

app.desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];
  
app.desk_types = app.desks.reduce(function(stats, desk) {
    if(desk.type === 'sitting') {
        stats.sitting += 1
    } else {
        stats.standing += 1
    }
    
    return stats;
}, { sitting: 0, standing: 0 });

console.log('Desk type stats: ' + JSON.stringify(app.desk_types));

app.duplicate_numbers = [1, 1, 2, 3, 4, 4];

/*
* In this example we use reduce to remove duplicate numbers and only return unique numbers
*/
app.uniqueNumbers = function (array) {
    return array.reduce(function(unique_numbers, number) {
        /*
        * includes method is used here to check whether the number already exists in the result array
        */
        if (!unique_numbers.includes(number)) {
            unique_numbers.push(number);
        }
        
        return unique_numbers;
    }, []);
}

console.log('Unique numbers result: ' + JSON.stringify(app.uniqueNumbers(app.duplicate_numbers)));
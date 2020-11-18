let app = {};

app.expense = {
    type: 'Business',
    amount: 'USD 45'
};

/*
* Destructuring is used to deconstruct arrays(even objects) into individual
* variables during assignment of values. This means that the variable names
* will automatically pick values from matching object key names or array indices.
* For example, below the variable names match the object key names in the expense object.
* This can be translated as:
* const type = app.expense.type;
* const amount = app.expense.amount;
*/
const { type, amount } = app.expense;

console.log(`Value of variable 'type' is: ${type} and 'amount' is: ${amount}`);

app.list = [1, 2, 3, 4];

/*
* Here, we match the variable indices to the value indices in the list array.
* This can be translated as:
* const a = app.list[0], b = app.list[2], c = app.list[3];
* Note: Array index 1 has not be assigned to any variable.
*/
const [ a, , b, c ] = app.list;

console.log(`Value for variable 'a' is: ${a}, 'b' is: ${b} and 'c' is ${c}`);

app.saved_file = {
    name: 'repost',
    extension: 'jpg',
    size: 14040,
    unit: 'MB'
}

/*
* Destructuring can also be used in function arguments where the parameter
* passed is an object whose values will be used in the function. 
*/
app.fileSummary = ({ name, extension, size, unit }, color) => {
    return `The ${color} image file '${name}.${extension}' is of size ${size}${unit}`;
};

console.log(app.fileSummary(app.saved_file, 'red'));

app.expenses = [
    {
        name: 'Government One',
        tag: 'government',
        amount: 'USD 15'
    },
    {
        name: 'Individual Thirty',
        tag: 'individual',
        amount: 'USD 25'
    },
    {
        name: 'Business Ten',
        tag: 'business',
        amount: 'USD 35'
    },
    {
        name: 'Business Six',
        tag: 'business',
        amount: 'USD 45'
    }
];

/*
* We can also use the spread operator with destructuring. In the case
* below, the spread operator will be assigned to the array objects 
* after the first element.
*/
const [ first, ...rest ] = app.expenses;

console.log(`The first expense is: ${JSON.stringify(first)} while the rest of the expenses are: ${JSON.stringify(rest)}`);

/*
* Here, we use destructuring to get the tag of the first element in the
* expenses array object.
*/
const [ { tag } ] = app.expenses;

console.log(`The tag of the first expense is: ${tag}`);

app.google_offices = {
    locations: ['Mountain View', 'New York', 'London']
};

/*
* Here, we fetch the first location in the locations array
*/
const { locations: [ first_location ] } = app.google_offices;

console.log(`The first google office location is: ${first_location}`);

app.points = [
    [4, 5],
    [10, 1],
    [12, 11],
    [24, 7],
];

/*
* To create an array of objects with x and y offsets we can use
* destructuring and the map helper to generate the new array.
*/
let graph = app.points.map(( [ x, y ] ) => {
    return { x, y };
});

console.log(`Graph data coordinates are: ${JSON.stringify(graph)}`);

const numbers = [1, 2, 3];

/*
* In this example we want to double every element in the array via
* a recursive function
*/
function double(numbers) {
    // we first fetch the first element in the array and the rest of the elements as well
    const [ first_number, ...rest ] = numbers;
    // get the length of the array passed
    const { length } = numbers;

    // check if the recursion has gone beyond the bound of the array
    if (length > 0) {
        /*
        * if still within the bounds of the array, double the first element
        * and repeat the process
        */
        return [ first_number * 2, ...double(rest) ];
    } else {
        // otherwise if out of bounds return the default numbers
        return numbers;
    }
}

let result = double(numbers);

console.log(`The result of double each element in array ${JSON.stringify(numbers)} is ${JSON.stringify(result)}`);
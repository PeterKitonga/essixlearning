let app = {};

/*
* The rest operator allows us to define an infinite number of 
* arguments to a function. We use the prefix '...' on an argument to
* signify that there are an unknown number of arguments passed.
*/
app.addNumbers = (...numbers) => {
    // To access the value of numbers in the callback, we remove the prefix '...'
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
};

let add_result = app.addNumbers(1, 2, 3, 4, 5, 6, 7);

console.log(`Add numbers result: ${add_result}`);

/*
* The spread operator allows us to add elements to an
* iterable collection e.g array, strings. The spread operator
* is also used to flatten elements into a single array.
* Here we use the spread operator to split the string 'foo'
* which is flattened into a single array.
*/
let str = 'foo';
let chars = [ ...str ] // [ "f", "o", "o" ]

console.log(`Characters "${str}" result: ${JSON.stringify(chars)}`);

/*
* Here we use the spread operator to flatten the two color arrays
* into a single array result. This can be translated as:
* primary_colors.concat(user_favourites);
*/
const primary_colors = ['red', 'green', 'blue'];
let user_favourites = ['orange', 'purple'];

let available_colors = [ 'white', 'black', ...primary_colors, ...user_favourites ];

console.log(`Available colors result: ${JSON.stringify(available_colors)}`);

/*
* We can use array methods/prototypes to check and modify values
* in the spread operator.
*/
app.validateShoppingList = (fruit, vegetable, ...others) => {
    const default_item = 'milk';

    // To access the value of others in the callback, we remove the prefix '...'
    if(others.indexOf(default_item) < 0) {
        return [fruit, vegetable, default_item, ...others];
    }

    return [fruit, vegetable, ...others];
};

let shopping_list = app.validateShoppingList('orange', 'kales', 'soap', 'toothpaste');

console.log(`Shopping list result: ${JSON.stringify(shopping_list)}`);
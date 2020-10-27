let app = {};

app.numbers = [2, 1, 4, 10, 5];

/*
* The map helper generates a new array which becomes the result of
* the block of code inside it. It is used to modify data in an array.
* In this example we are doubling the numbers into a new array.
*/
app.doubled_numbers = app.numbers.map(function (number, index) {
    let doubled = number * 2;
    return doubled;
});

console.log('Result of doubling ' + JSON.stringify(app.numbers) + ' is ' + JSON.stringify(app.doubled_numbers));

app.cars = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Velar', price: 'EXPENSIVE'},
    {model: 'F-Pace', price: 'MODERATE'},
];

/*
* The map helper can also be used to pluck specific values from an array
* of objects. For example, below we only want the prices from the cars array.
*/

app.car_prices = app.cars.map(function (car) {
    return car.price;
});

console.log('Car prices are ' + JSON.stringify(app.car_prices));
let app = {};

app.colors = ['red', 'blue', 'green'];

app.colors.forEach(function(color, index) {
    console.log('Color ' + (index + 1) + ': ' + color);
});

// create an array of numbers
app.numbers = [10, 52, 23, 44, 56];

// create a variable to hold the sum
app.numbers_sum = 0;

// loop over the array, incrementing the sum variable
app.numbers.forEach(function(number) {
    let current_sum = app.numbers_sum;
    app.numbers_sum += number;
    console.log(number + ' added to the sum(' + current_sum + ') is: ' + app.numbers_sum);
});

// print the sum variable
console.log('Sum result is: ' + app.numbers_sum);

// can also work with objects
app.images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];

app.areas = [];

app.images.forEach(function(image, index) {
    let area = image.height * image.width;
    app.areas[index] = area; // push the area to the areas array
    console.log('Area of image ' + (index + 1) + '(' + JSON.stringify(image) + ') is: ' + area);
});
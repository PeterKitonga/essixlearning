let app = {};

app.computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
]; 

/*
* The every helper tests whether all elements in a given array 
* pass the test implememted in the callback function. This 
* method returns a boolean.
* 
* More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/
app.all_can_run_program = app.computers.every(function(computer) {
    return computer.ram > 16;
});

console.log('Every able computer check result: ' + app.all_can_run_program);

/*
* The some helper tests whether at least one item in a give array
* passes the test in the callback function. This method also returns
* a boolean. This method will still return true if all items 
* in the array satisfy the test.
* 
* More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
*/
app.some_can_run_program = app.computers.some(function(computer) {
    return computer.ram > 16;
});

console.log('Some able computers check result: ' + app.some_can_run_program);

app.names = [
    "Alexandria",
    "Matthew",
    "Luke",
    "Joe"
];

app.all_long_names = app.names.every(function(name) {
    return name.length > 4;
});

console.log('Every long name check result: ' + app.all_long_names);

app.some_long_names = app.names.some(function(name) {
    return name.length > 4;
});

console.log('Some long names check result: ' + app.some_long_names);

/*
* In the below example we have a validate method that
* checks whether all submitted fields of a form are filled.
* Here, the every method is used to loop through and run the validator.
*/
app.Field = function (value) {
    this.value = value;
}

app.fields = ['username', 'email', 'password'];

app.validate = function(field) {
    return field.value.length > 0;
}

app.username = new app.Field('kitongangugi');
app.email = new app.Field('');
app.password = new app.Field('password');

app.validate_check = app.fields.every(function(field) {
    return app.validate(app[field]);
});

console.log('Result for validation check: ' + app.validate_check);


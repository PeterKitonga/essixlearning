let app = {};

app.products = [
    {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10, price: 15},
    {name: 'celery', type: 'vegetable', quantity: 30, price: 13},
    {name: 'orange', type: 'fruit', quantity: 3, price: 5},
    {name: 'green pepper', type: 'vegetable', quantity: 20, price: 2},
    {name: 'garlic', type: 'vegetable', quantity: 2, price: 3},
    {name: 'apple', type: 'fruit', quantity: 3, price: 25}
];

/*
* This method creates a new array that passes the test within it's callback function.
* It can be used to filter data that satisfy specific conditions. For example in the logic below
* we only want products that have a type of 'fruit'
*/
app.fruits = app.products.filter(function(product) {
    return product.type === 'fruit';
});

console.log('Result of fruits is: ' + JSON.stringify(app.fruits));

/*
* Below is a more complex example where we want type is 'vegetable', 
* quantity is greater than 0, price is less than 10
*/
app.vegetables = app.products.filter(function(product) {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

console.log('Result of vegetables is: ' + JSON.stringify(app.vegetables));

app.post = {id: 4, title: 'New Post'};

app.comments = [
    {post_id: 4, content: 'awesome post'},
    {post_id: 3, content: 'it was ok'},
    {post_id: 2, content: 'very good'},
    {post_id: 4, content: 'neat'}
];

/*
* In this example we are filtering objects related to some other object. This 
* can be useful for filtering related data from a database.
*/
app.comments_for_post = function (post, comments) {
    return comments.filter(function (comment) {
        return comment.post_id === post.id;
    });
};

console.log('Result of comments for post (' + app.post.id + ') is: ' + JSON.stringify(app.comments_for_post(app.post, app.comments)));

app.numbers = [10, 20, 30];

app.reject = function(array, iteratorFunction) {
    return array.filter(function(item) {
        return !iteratorFunction(item);
    });
};

app.rejected_numbers = app.reject(app.numbers, function(number) {
    return number === 20;
});

console.log('Result of rejected numbers: ' + JSON.stringify(app.rejected_numbers));
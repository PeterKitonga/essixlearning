let app = {};

app.users = [
    {id: 11, name: 'Jill'},
    {id: 23, name: 'Alex'},
    {id: 48, name: 'Fred'},
    {id: 55, name: 'Peter'},
    {id: 56, name: 'Alex'}
];

/*
* The find helper is similar to the filter helper, however, it retrieves
* the first result that satisfies the condition in the callback. It returns
* only one result.
*/
app.user = app.users.find(function (user) {
    return user.name === 'Alex';
});

console.log('Result for the user: ' + JSON.stringify(app.user));

function Car(make, model) {
    this.make = make;
    this.model = model;
};

/*
* The helper can also be used on objects created from an object class.
*/
app.cars = [
    new Car('Ford', 'Focus'),
    new Car('Toyota', 'Prius'),
    new Car('Chevrolet', 'Camaro'),
    new Car('Chevrolet', 'Corvette')
];

app.car = app.cars.find(function(car) {
    return car.model === 'Camaro';
});

console.log('Result for car model: ' + JSON.stringify(app.car));

app.posts = [
    {id: 4, title: 'New Post'},
    {id: 1, title: 'Old Post'},
];

app.comment = {post_id: 1, content: 'it was ok'};

app.post_for_comment = function (posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.post_id;
    });
};

console.log('Result for post with the comment: ' + JSON.stringify(app.post_for_comment(app.posts, app.comment)));

app.ladders = [
    {id: 1, height: 20},
    {id: 3, height: 25}
];

/*
* We can also use find to create a custom helper method for searching
* through a result set depending on the property and value criteria defined
*/
app.find_where = function (array, criteria) {
    let property = Object.keys(criteria)[0];
    let value = criteria[property];
    let result = array.find(function(item) {
        return item[property] === value;
    });
    
    return result;
}

console.log('Result of custom dynamic find helper: ' + JSON.stringify(app.find_where(app.ladders, {height: 25})));
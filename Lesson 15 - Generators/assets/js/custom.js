let app = {};

const colors = ['red', 'green', 'blue'];

/*
* The for...of statements creates a loop iterating iterable objects such
* as strings, arrays, typed arrays, maps, sets e.t.c.
*/
for(const [index, color] of colors.entries()) {
    console.log(`The color '${color}' is at index: '${index}'`);
}

/*
* Generators are functions that can return('yield') multiple values at different
* execution times on demand. This is unlike regular functions that return a single value.
* To define a generator we add an asterix after the function keyword. This means
* they work great with iterators like the above for...of statement.
*/
function* numbers() {
    /*
    * The yield statement in this point pauses execution
    * of the function and returns the value. When next() is called again
    * the function picks up from this yield to the next yield statement
    */
    yield 1;
    // other code
    yield 2;
    // some other code
    return 3;
}

const number_generator = numbers();

/*
* We use the next() method of the generator function to run it and fetch
* the nearest returned('yield') value. The result of next is always an 
* object with two properties:
* 1. value - the yielded value.
* 2. done - 'true' if the function code has finished, otherwise 'false'.
*/
console.log(`Number generator first result: ${JSON.stringify(number_generator.next())}`);
console.log(`Number generator second result: ${JSON.stringify(number_generator.next())}`);
console.log(`Number generator third  result: ${JSON.stringify(number_generator.next())}`);

/*
* Below we have an example where we simulate a person going to the
* store to buy groceries and do laundry. The generator is not ran until we call next().
* The function describes the whole journey where the next() method determines
* when a desired action was performed
*/
function* shopping() {
    // moves to the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const stuff_from_store = yield 'purchase';
    /* here we pause and pickup on the next call where 
    * yield is reassigned to the value 'groceries'
    */

    // here we reassign yield to 'clean laundry' in the third call
    const clean_clothes = yield 'bought groceries';

    // walking back home
    return `Walks back home with ${stuff_from_store} and ${clean_clothes}`;
}

// the journey
const shopping_generator = shopping();
// we start here 
console.log(`${JSON.stringify(shopping_generator.next('pay with cash'))}`); // leaving our house
// walked into the store
// walking up and down the aisles..
// purchase our stuff
console.log(`${JSON.stringify(shopping_generator.next('groceries'))}`); // leaving the store with groceries
// heads to the dry cleaner, cleans laundry and heads home
console.log(`${JSON.stringify(shopping_generator.next('clean laundry'))}`); // heading home with groceries and clean laundry

function* _colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const primary_colors = [];
/*
* Here, we see a practical example of how the for...of loop
* works with the generator above to fetch the values of yield
* without using the next() method
*/
for(const _color of _colors()) {
    primary_colors.push(_color);
}

console.log(`Colors generator result: ${JSON.stringify(primary_colors)}`);

const testing_team = {
    lead: 'Amanda',
    tester: 'Bill',
    /**
     * We use the Symbol.iterator here for key interpolation(dynamically created key)
     * to tell the for...of loop how to iterate through this object. The asterix lets
     * the for...of iterator know that this is a generator and should use the defined
     * yields to get the values we need
    */
    *[Symbol.iterator]() {
        yield this.lead;
        yield this.tester;
    }
};

const engineering_team = {
    testing_team, // we can add a reference to the testing team object
    size: 4,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    designer: 'Elsa',
    engineer: 'Peter',
    /**
     * Here we use a generator to fetch the desired properties of
     * this object including the testing team generator.
     */
    *[Symbol.iterator]() {
        yield this.lead;
        yield this.manager;
        yield this.designer;
        yield this.engineer;
        /**
         * Here, we delegate the testing team Symbol.iterator to this yield statement to allow
         * the for...of loop to iterate through it as well. The asterix before the yield keyword
         * signifies that there are extra yields that are to be taken into consideration.
        */
        yield* this.testing_team;
    }
};

const names = [];

/**
 * We then use a for...of loop statement to iterate through the generator
 * and push the yielded values to an array
*/
for(const name of engineering_team) {
    names.push(name);
}

console.log(`Team member names are: ${JSON.stringify(names)}`);
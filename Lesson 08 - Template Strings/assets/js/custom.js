let app = {};

app.getYearMessage = function () {
    const year = new Date().getFullYear();

    /*
    * Template strings are a syntactic sugar in ES6 where we concatenate
    * strings by use of "${}" symbols like below. When define a template 
    * string we also need "``" opening and closing symbols inorder for the
    * concatenation to work. The below example can be inteprated as:
    * return 'The year is "' + year + '" and 2 years later will be "' + (year+2) + '"';
    */
    return `The year is "${year}" and 2 years later will be "${year + 2}"`;
}

console.log(app.getYearMessage());

console.log(`This is a message created in "${new Date().getFullYear()}"`);
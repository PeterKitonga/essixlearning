let app = {};

/*
* Here, we give the argument method a default value
* of 'GET'. This value is only changed when the value for
* method is passed. When not passed(meaning undefined) the value
* remains unchanged . This means the argument method is optional.
*/
app.checkRequestParams = (url, method = 'GET') => ({ url, method });

console.log(`Check request params result: ${JSON.stringify(app.checkRequestParams('google.com'))}`);

console.log(`Check request params result: ${JSON.stringify(app.checkRequestParams('google.com', 'POST'))}`);

// null will also be taken as a value for the argument
console.log(`Check request params result: ${JSON.stringify(app.checkRequestParams('google.com', null))}`);
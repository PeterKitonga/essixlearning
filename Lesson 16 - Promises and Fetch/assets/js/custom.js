let app = {};

/**
 * To define a promise we use the Promise() class which always has two arguments:
 * 1. resolve - this means the promise finished running and return a successful response
 * 2. reject- the promise finished running and something went wrong
 * 
*/
let example_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);     
});

/**
 * Here, we get to see that the then() callback is run only when the promise is resolved
 * and catch is run when the promise is rejected
*/
example_promise
    .then(() => {
        console.log('Promise result: Finally finished');
    })
    .then(() => {
        console.log('Promise result: I will also run');
    })
    .catch(() => {
        console.log('Promise result: I only run when rejected');
    });

/**
 * Let's run it
*/
example_promise;

const example_url = 'https://jsonplaceholder.typicode.com/todos/1';
/**
 * Below we are using the Fetch API provided in JavaScript to perform a
 * HTTP request. The fetch method is a promise based HTTP client that
 * we can use to perform basic HTTP requests like below. However fetch() has
 * limitations such as catching HTTP errors from the server.
*/
const example_fetch = fetch(example_url)
    .then((response) => response.json())
    .then(data => {
        console.log(`Example fetch result: ${JSON.stringify(data)}`);
    });

example_fetch;

/**
 * We can also use another promise based HTTP client called axios which has
 * far better handling of requests.
*/
const axios_url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
axios.get(axios_url)
    .then(response => {
        const comments = response.data;
        console.log(`Axios comments result: ${JSON.stringify(comments)}`);
    })
    .catch(error => {
        console.log(error.response);
    });

/**
 * We can further use a promise to perform all get requests where we have axios
 * receiving urls dynamically.
*/
const perform_get_request = (request_url) => {
    return new Promise((resolve, reject) => {
        axios.get(request_url)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response);
            });
    });
};

let names = [];
let user_count = 0;
const users_url = 'https://jsonplaceholder.typicode.com/users';

/**
 * In this example we reuse the above promise to perform our request
 * for use data and do whatever we desire with it.
*/
perform_get_request(users_url)
    .then((response) => {
        names = response.reduce((plucked, user) => {
            plucked.push(user.name);

            return plucked;
        }, []);

        user_count = names.length;

        console.log(`${user_count} Names result: ${JSON.stringify(names)}`);
    });
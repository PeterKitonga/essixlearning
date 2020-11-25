/**
 * Let's create a class that will create an comment object that
 * has children comment objects. This will create a tree where each node
 * has its child nodes
*/
class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    /**
     * Here we use this generator to flatten the tree structure
     * and fetch the values we need(in this case the content)
    */
    *[Symbol.iterator]() {
        yield this.content;

        /**
         * Here we use a for...of loop since we cannot use array
         * helpers in generators to yield values
        */
        for(let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', []),
];

/**
 * Here we create a tree with 'Great post' as the parent node
*/
const tree = new Comment('Great post!', children);

console.log(`Tree result: ${JSON.stringify(tree)}`);

/**
 * Here we will use the for...of loop to iterate through the generator 
 * and get a flattened array
*/
const values = [];
for (const value of tree) {
    values.push(value);
}

console.log(`Tree values result: ${JSON.stringify(values)}`);
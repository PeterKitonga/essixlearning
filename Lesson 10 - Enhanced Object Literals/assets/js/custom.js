let app = {};

app.createBookShop = (inventory) => {
    return {
        /*
        * In ES6 when defining an object and a property has 
        * the same name as the variable, we just pass the variable name.
        */ 
        inventory, 
        /*
        * Function properties are also defined without the function
        * keyword and colon. This allows for the use of lexical 'this'.
        */
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return `USD ${this.inventory.find(book => book.title === title).price}`;
        }
    }
};

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
];

const book_shop = app.createBookShop(inventory);
let book_title = 'Harry Potter';

console.log(`Book shop inventory value result: ${book_shop.inventoryValue()}`);
console.log(`Book shop title price for '${book_title}' result: ${book_shop.priceForTitle(book_title)}`);


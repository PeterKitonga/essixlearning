let app = {};

/*
* In ES6 we define a class using the keyword 'class'. The below class has a
* constructor that initializes the class object to be used in it's methods.
*/
class Car {
    /*
    * We can use destructuring in the constructor to cherry pick the object properties
    * and initialize them.
    */
    constructor({ brand, sound, color }) {
        this.brand = brand;
        this.sound = sound;
        this.color = color;
    }

    /*
    * Using the keyword 'this' we can fetch the values of the object passed to the
    * class and use them in our class methods(prototypes)
    */
    drive() {
        return `The ${this.color} '${this.brand}' makes the sound '${this.sound}' when driving`;
    }
}

const car = new Car({ brand: 'Toyota', sound: 'vroom', color: 'red' });
console.log(car.drive());

/*
* In ES6 we define class inheritance using the keyword 'extends'. To initialize the inherited
* properties and methods we call the 'super()' method in our child class constructor.
*/
class Ford extends Car {
    /*
    * We can use destructuring and the rest operator in our constructor for initializing 
    * the child class properties as well as the parent class properties.
    */
    constructor({ model, honk_sound, ...options }) {
        super(options);
        this.model = model;
        this.honk_sound = honk_sound;
    }

    honk() {
        return `The ${this.color} '${this.brand} ${this.model}' makes the sound '${this.honk_sound}' when honking`;
    }
}

const ford = new Ford({ brand: 'Ford', model: 'Focus', sound: 'grrrr', color: 'blue', honk_sound: 'beep' });
console.log(ford.drive());
console.log(ford.honk());
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

Person.prototype.Greetings = function(name){
    console.log(`Hello, ${name}. I am ${this.name} and I am ${this.age} years old.`)
}

const didier = new Person('Didier', 43);

didier.Greetings('Caty');
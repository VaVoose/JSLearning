// The begining of classes
// Classes are considered "functions"
// properties are 'object specific' while class functions are saved in the prototype
//Static methods and properties are assigned to the class itself not the instatiation

'use strict';

//class declaration
class Person {
    age;

    //You can not have overloaded constructors in javascript
    constructor(name) { //constructor
        if (name == null){
            this.name = "default"
        }
        else {
            this.name = name;
        }
    }

    //Whenever a function used in callbacks with 'this' in it, use arrow notation
    sayHi = () => { //member method
        alert(`${this.name} says hi`);
    }

    //These are useful when you have some outside source/object and you want to get a member of that object
    // Or can be used with symbols
    /*
    [Symbol.iterator]() {
        // my iterator
    }
    */

    ["computed" + "FunctionName"] (){ //function with a computed name, not sure of use cases yet
        alert("Hello")
    }

    //note the ._prop notation that is used for getting and setting
    set name(value) { //setter
        if (value.length < 2){
            alert("This name is too short")
            return;
        }
        else {
            this._name = value;
        }
    }

    get name(){ //getter
        return this._name;
    }
}

class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    stop(){
        alert(`${this.name} has stopped`);
        this.speed = 0;
    }

    run(speed){
        this.speed = speed;
        alert(`${this.name} is running ${this.speed}f/s`);
    }
}

class Rabbit extends Animal {
    //Overridden constructors need to use the super(...args) call in order to work
    constructor(name, earLength){
        super(name);
        this.earLength = earLength;
    }

    hide(){
        alert(`${this.name} has hid`);
    }

    //overridden function
    stop(){
        super.stop();
        this.hide();
    }

    get earLength(){
        return this._earLength;
    }

    set earLength(earLength) {
        this._earLength = earLength;
    }
}

class Article {
    constructor (title, date){
        this.title = title;
        this.date = date;
    }

    //Example of static method, particular example is of a Factory type
    static createTodaysArticle(){
        return new this("Todays Digest", new Date());
    }
}

let p1 = new Person();
let p2 = new Person("Dominic");
//this doesn't require the arrow notation because its not used in call back
alert("p1: " + p1.name + " p2: " + p2.name);
p2.computedFunctionName();

//this however doesn't work unless the sayHi is used in arrow notation
setTimeout(p2.sayHi, 1000);

let a1 = new Animal("Josh");
a1.stop();

let r1 = new Rabbit("Rabbito", 4);
r1.stop();

alert(r1.earLength);

let newArticle = Article.createTodaysArticle();
alert(`${newArticle.title} came out ${newArticle.date}`);


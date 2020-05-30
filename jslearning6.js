// The begining of classes
// Classes are considered "functions"
// properties are 'object specific' while class functions are saved in the prototype

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

let p1 = new Person();
let p2 = new Person("Dominic");
//this doesn't require the arrow notation because its not used in call back
alert("p1: " + p1.name + " p2: " + p2.name);
p2.computedFunctionName();

//this however doesn't work unless the sayHi is used in arrow notation
setTimeout(p2.sayHi, 1000);


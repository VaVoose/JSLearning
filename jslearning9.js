/*
    This file is for using proxys
    Eval() is also used in this file, at this point eval is depreciated
    This will file will also use currying, a way of breaking apart function parameters. It has advanced practical uses
*/

'using strict';

// -- default value with get trap --

let dictionary = {
    'hello' : 'ciao',
    'bye' : 'arivaderci'
}

dictionary = new Proxy(dictionary, {
    get(target, phrase) { //this intercepts the read property from dictionary
        if (phrase in target) { //If there is a translation, use it
            return target[phrase]
        }
        else { //If not leave it untranslated
            return phrase;
        }
    }
});

alert(dictionary['hello']);
alert(dictionary['welcome']);

// -- Validation with set trap --

let numbers = [];

numbers = new Proxy(numbers, {
    set(target, prop, val){
        if (typeof val == "number"){
            target[prop] = val;
            return true; //don't forget to return true
        }
        else {
            return false;
        }
    }
});

numbers.push(3);
numbers.push(4);
alert(numbers.length);

//This will now throw an error
//numbers.push("test");

//There are MANY other ways to use proxies, refer to the book for more  examples

//Takes a string and runs it like its a code block
eval('alert(1+1)');
let code = 'alert("hello from eval code")'
eval(code);

//A curried sum function, 

function sum(a, b, c){
    return(a+b+c);
}

function curry(f){
    return function(a){
        return function(b){
            return function(c){
                return f(a,b,c);
            };
        };
    };
}

let curriedSum = curry(sum);
alert(curriedSum(1)(4)(5));





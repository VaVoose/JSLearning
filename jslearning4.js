//This is the beginning of dates and JSON in the tutorail
//spread parameter, this is useful for functions as well as copying objects/arrays by value, it is a useful tool

'using strict';

//Allows to have an unknown amount of paramters passed into it
function spreadOperator(...numbers){
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }

    return sum;
}

//This outer function is kind of treated like an object
function makeProtectedCounter(){
    //This count varible is protected by the internal variable
    //Can not be set outside the function
    function counter(){
        return counter.count++;
    };

    counter.count = 0;

    return counter;
}

//the func function is not accessable outside the function
//This is a proper way of function calling itself because even if the function name is changed
//the name is not tied to itself
let sayHi = function func(who){
    if(who) {
        alert(`${who} says Hi!`)
    }
    else {
        func("Guest");
    }
}

let sayThis = function(word){
    //The function does not know what 'this' is
    //but we can use the func.call() member method below
    alert(this.name + " : " + word);
}

let start = Date.now();
for (let i = 0; i < 1000000; i++){
    let doSomething = i * i * i;
}
let end = Date.now();

alert(`Loop time was: ${end-start} milliseconds`);

//Lets try to serialize this object with JSON
let user = {
    name: "Dominic",
    room: 44,
    days: {
        birthday: new Date(1999, 4, 31, 12),
        favorite: new Date(2000, 9, 01, 12),
    },
}

alert(`${user.days.birthday}`);

let jsonUser = JSON.stringify(user);
alert(jsonUser);

let readUser = JSON.parse(jsonUser, function(key, value){
    if (key == 'birthday') return new Date(value);
    return value;
});

alert(`${readUser.name} with a birthday ${readUser.days.birthday}`);

let numberArr = [1, 2, 5, 6, 7, 9, 10, 4, 4, 3];
//In this case it breaks down the array into individual values, as needed when passing parameters
sum1 = spreadOperator(...numberArr);
[fNumber, sNumber, theRest] = [numberArr[0], numberArr[1], ...numberArr];
alert(sum1);

//This is called a polyfill
if(!window.Promise){
    alert('The browser is really old.')
    //Do old browser code here
}

let outsideCounter = makeProtectedCounter();
//Now we track how many times the counter function has been ran
outsideCounter();
outsideCounter();
alert(outsideCounter()); //2

sayHi("Dominic");
sayHi();
//Nested setTimeouts are the same thing as interval excpet the time doesnt start until the code from the setTimeout is done running
//code from setInterval continues to run in the background, never takes a break
setTimeout(sayHi, 1000, "Timeout");

//This injects the object 'user' as 'this' within the function
sayThis.call(user, "wabba wabba radda radda");

let multiply = function(a, b){
    return a * b;
}
//This is called partial function application
let double = multiply.bind(null, 2);
let triple = multiply.bind(null, 3);

alert(`${double(6)} and ${triple(6)}`);


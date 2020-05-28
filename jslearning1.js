//Single line comment
/*
Block comments, note you can not create nested comments
*/

'use strict'; //Tells Browser to act in "Modern Mode"

//Function Definition version of declaring a function, created at compile-time
//Has default value for message if no parameter is passed
function showMessage(sender, message = "No message given"){
    //Ensures that the sender has some truthy value
    sender = sender || "Anonomus";
    alert(sender + ': ' + message);
}

//Function expression version of declaring a function, created at run-time
let calcAPlusB = function(a, b) {
    //Makes sure the variables are converted to numbers before addition
    return +a + +b;
};

//Arrow Function version of creating a function
let ask = (question, yes, no) => {
    if(confirm(question)) yes()
    else no();
}

let ifAgreed = () => {
    alert("Thanks for agreeing");
}

let ifDeclined = () => {
    alert("Dont decline next time");
}


alert("This alert is from an external script");
let s = prompt("Who is the sender?");
let m = prompt("What is the message?");

if (m) showMessage(s, m);
else showMessage(s);

let newCalc = calcAPlusB;
alert(newCalc(4, 40));

//This is an example of callback functions
ask("Do you Agree?", ifAgreed, ifDeclined);

let answer = prompt("Enter the word 'like' in the box");

if (answer == 'like'){
    alert("true");
}
else{
    alert(false);
}

(answer == 'like') ?
alert("Woopie!") : alert("Boo!");

let admin;
let name;

name = prompt("Enter your name");

admin = name;
alert("This is the name of the admin " + admin);

//Backticks allow injections of other variables names a string with the wrapper ${}
//This could be useful in the future
//Example:
alert(`My name is ${name}`);
alert(`Math inside of a string wrapper: ${3+7}`);
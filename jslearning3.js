//This is the file for arrays and other more complicated data structures
//Ararys can be used as stacks or queues as needed
//They are sort of like an objects as any type of data can be stored in a singular
//array bu they are different is structure and useage

"using strict";

let learningArray = ["Red", "Blue", "Green", "Alpha", "Useless"];
//leangth is just the largest element in the array plus 1
learningArray[100] = "Purple";
alert(learningArray.length);

//length is an editable property, reduction of the size can not be recovered
learningArray.length = 3;
//Looping over array -notice "of" is used instead of "in", "in" is used with objects and runs slower
alert(learningArray[3]); //undefined
for (let values of learningArray){
    alert(values);
}

//note multiple items can be added during a push or unshift
//from the back - fast, no location allocation involved
alert(learningArray.pop() + " was popped");
//push and unshift return the length of the array
alert(learningArray.push("255 255 255") + " was pushed")
//from the front - slow, location shift needed
alert(learningArray.shift() + " was shifted")
alert(learningArray.unshift("Colors:") + " was unshifted");

//arrays also have a built in toString function
alert(learningArray);

//This is a fancy example of converting something to a array, map, then fromEntries to double all the values in a object
let producePrices = {
    apples: 2,
    bananas: 1,
    peaches: 4,
    toString(){
        return [this.apples, this.bananas, this.peaches];
    }
};

let doublePrices = Object.fromEntries(
    Object.entries(producePrices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.apples);
//breaking a object down into variables using "temporary array" like below
//must be the same name as the property in the obejct, can be renamed with the ':' operator
let {apples: a, bananas: b, peaches: p} = producePrices;
alert(a + b + p);

//Just some fun stuff with splitting strings and saving the output into object properties
let fullname = prompt("Enter Your Name: ");
let user = {};
[user.firstname, user.lastname] = fullname.split(" ");
for (let value in user) alert(user[value]);

//This is a cool swap trick using the priciples above
[user.firstname, user.lastname] = [user.lastname, user.firstname]
for (let value in user) alert(user[value]);

//So now that we have a user lets assign a weakmap to it so cache can be removed when the user is logged off
let wMap = new WeakMap();
let sMap = new Map();
wMap.set(user, "The weakmap user is logged in");
sMap.set(user, "The strong map user is logged in");
alert(wMap.get(user));
alert(sMap.get(user));
//user has logged off, remove account from memory
user = null;
//These two have the same results im not sure why, the regular map should have memory 
//allocated while the weak map should not but that doesn't seem to be the case
alert(wMap.get(user));  
alert(sMap.get(user));

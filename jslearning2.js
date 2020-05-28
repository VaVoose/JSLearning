//This is the beginning of objects in javascript

//Be careful with object cloning and replication
//A straight asignment obj1 = obj2, links the 2 objects by reference
//You can do a clone by using the Object.Assign(dest, [sources]) member function
//but if the src object has any subobjects within it, it will copy those subobjects by reference
//you need libraries or recursion to do "deep cloning"

'use strict';

let user = {
    name: "Dominic",
    age: 20,
    job: "IT",
    //2-word attribute
    ["likes dinner"] : true, 
    whack: false,
};

//Using a function to create an object
let createUser = (name, age, job, likesDinner, whack) => {
    //Shorthand for declaring the attributes and values
    return {
        name,
        age,
        job,
        likesDinner,
        whack,
        //There are also different ways to add functions to objects
        sayHi() {
            //This is generated at run time
            alert(this.name + " says Hi.");
        }
    }
};

//This is a proper use of a constructor but the method above seems to work too?
function User(name, age, job, likesDinner, whack) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.likesDinner = likesDinner;
    this.whack = whack;
    this.sayHi = function(){
        alert(this.name + " says Hi from constructor");
    }
    //This is an example of overriding the 'toString' function of an object
    this.toString = function(){
        return this.name;
    }
}

//delete and add a property from an object
delete user.whack;
user.yolo = 42069;

let key = prompt("What value would you like to know?");
//When getting a value based on a variable use the square brackets
alert(key + " : " + user[key]);
//When getting an explicit value you can use dot notation
alert("Users name is " + user.name);

let user1 = createUser("Wayne", 21, "Programmer", true, false);

for (key in user1) {
    alert(key + " : " + user1[key]);
}

let user2 = createUser("Trevor", 22, "Cable Manager", false, true);
/*
for (key in user1) {
    alert(key + " : " + user1[key]);
}
for (key in user2) {
    alert(key + " : " + user2[key]);
}
*/
user1.sayHi();

let user3 = new User("Tim", 19, "Wire Puller", false, false);
/*
for (key in user3){
    alert(key + " : " + user3[key]);
}
*/
user3.sayHi();

//This used the overriden 'toString' function of this object
alert(user3); //Prints 'this.name' instead of Object object


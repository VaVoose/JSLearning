// this is getting to some complicated stuff starting with object properties

'using strict';

let user = {};
//We are creating a user that has their name and age forever bound and no longer writable
//Since the toString is not enumerable it will not show up in 'in' loops
Object.defineProperties(user, {
    name: {value:"Dominic", writable: false, enumerable: true},
    age: {value: 21, writable: false, enumerable: true},
    toString: {enumerable: false},
});

//This is a user that has a filtered name using getters and setters
//Typically '_property' are know to be internal so they should not be directly set from outside
let user1 = {
    get name(){
        return this._name;
    },

    set name(n){
        if (n.length < 4){
            alert("Name was not saved");
            return;
        }
        else{
            this._name = n;
        }
    }
};

let person = {
    firstname: "Dominic",
    lastname: "Ferrante",

    set fullname(value){
        [this.firstname, this.lastname] = value.split(' ');
    },

    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
};

//user2 prototypically inherits from person
//has name values as well as the full name getter and setters
let user2 = Object.create(person, {
    id: {value: 8044, enumerable: true},
});

alert(user.name);
user.name = "Trevor"; //This shoudl fail

for (let key in user){
    alert(key + " : " + user[key]);
}

user1.name = "Dom"; //Should not work
alert(user1.name);

user1.name = "Dominic";
alert(user1.name);

user2.fullname = "Yolanzo Folly";

for(let key in user2){
    //How to determine if the property is inhereted or not, this doesn't seem to be working as intended
    let isOwn = user2.hasOwnProperty(key);
    if (isOwn){
        alert(`own ${key} : ${user2[key]}`) //interestingly the id property shows up before the person properties
    }
    else {
        alert(`not own ${key} : ${user2[key]}`)
    }
}
//serializing user2 to json
let user2serialized = JSON.stringify(user2);
alert(user2serialized);
//Private and protected properties and methods
//'_' is to show something is protected
//# is the symbol for private variables, it is relatively new and requires polyfilling
//Mixins is the concept that you can combine two object that need unrelated
//This is not done by inheratence but by function assignment


'use strict';

class CoffeeMachine {
    // '_' signal other programmers that this is a protected property but are not enforced language leve
    _waterAmount = 0;
    //Private variable
    #waterlimit = 200;

    constructor(power){
        this._power = power;
    }

    //power is now a read only property since it only has a getter
    get power(){
        return this._power;
    }

    get waterAmount(){
        return this._waterAmount;
    }

    set waterAmount(value){
        if (!(value < 0 || value > this.#waterlimit)) this._waterAmount = value;
    }

    //Private function
    //This is throwing a syntax error not sure why but maybe because private functions are new?
    /*
    #checkWaterValue(v1) {
        if (v1 < 0 || v1 > this.#waterlimit) {
            return false;
        }
        return true;
    }
    */
}

//This is a class containing functions that can be assigned to other objects
//This concept is called "Mixins"
//Combining 2 unrelated objects together
let abilityToSpeak = {
    sayHi(){
        alert(`Hello, my name is ${this.name}`);
    },

    sayBye(){
        alert(`Goodvye, my name is ${this.name}`)
    }
}

class User{
    constructor(name){
        this.name = name;
    }
}

//All users now have the ability to speak and use the functions of that class
Object.assign(User.prototype, abilityToSpeak);

//Create new coffee machine
let cMachine = new CoffeeMachine(100);
//fill it with water
cMachine.waterAmount = 150;
//throws error
//cMachine.waterAmount = -10;

alert(`Coffe Machine Power: ${cMachine.power}W`);
//throws error
//cMachine.power = 6;

let u1 = new User("Dominic");
u1.sayHi();
u1.sayBye();




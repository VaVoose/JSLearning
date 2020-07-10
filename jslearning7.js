//Private and protected properties and methods
// '_' is to show something is protected
// # is the symbol for private variables, it is relatively new and requires polyfilling


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
        if (checkWaterValue(value)) this._waterAmount = value;
    }

    //Private function
    #checkWaterValue(value){
        if (value < 0 || value > this.#waterlimit) return false;
        return true;
    }
}

//Create new coffee machine
let cMachine = new CoffeeMachine(100);
//fill it with water
cMachine.waterAmount = 250;
//throws error
//cMachine.waterAmount = -10;

alert(`Coffe Machine Power: ${cMachine.power}W`);
//throws error
//cMachine.power = 6;


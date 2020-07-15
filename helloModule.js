import {user} from "./userModule.js";

//query selector serches for CCS in the document
document.querySelector("#testButton").innerHTML = user;
//This searches through the whole document for ID
document.getElementById("testButton").innerHTML = user;

//Using the DOM to change the background color
setTimeout(() => document.body.style.background = "red", 3000);

//Using Javascript to create and insert a div
let div1 = document.createElement('div');
div1.className = "testCreation";
div1.innerHTML = "<br> <strong> Hello There </strong> General Kenobi...";
document.body.append(div1);

//An element can have multiple classes assigned to it and this is how to dynamically assign them
div1.classList.add("first");
div1.classList.add("second");
div1.classList.add("third");
div1.classList.remove("third");

alert(div1.classList);

//You can not take style directly so the style must be aquired from computed style
let computedStyle = getComputedStyle(document.body);
alert(computedStyle.paddingLeft);

function handler1() {
    alert("First Handler")
}

function handler2(){
    alert("Second Handler");
}

div1.addEventListener("onClick", handler1);
div1.addEventListener("onClick", handler2);
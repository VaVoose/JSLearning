//This is the beginning of promises
//Before this section in the book there are explanation of try...catch...finally which is self explanitory
//As well as the section for explaining callbacks when loading a page which is usefully knowledge but requires browser functions
//to implement so I will wait until I need to use them to learn them

'using strict';

// A promise is a function that usually takes some amount of time then triggers the resolve or reject function when done 
// baseed on successful or unsuccessful output, those are both seen as return statements
// Promises link producing code and consuming code, where they might be asyncronous

let resolvePromiseExample = new Promise(function(resolve, reject){
    //This is the "producing code"
    /*
        //Do Something that takes time, usually this a asyncronous call
    */

    resolve("Done");
    reject(new Error("First promise was rejected"));
});

let rejectPromiseExample = new Promise(function(resolve, reject){
    //This is the "producing code"
    /*
        //Do something
    */

    //reject must return a Error object
    reject(new Error("Rejected"));
});

resolvePromiseExample.then(
    resolve => alert("The promise was resolved"),
    error => alert(error)
);

rejectPromiseExample.then(
    resolve => alert("The 2nd promise was resolved"),
    error => alert(error)
);

//If you are only interested in the error, catch can be used
/*
rejectPromiseExample.catch(
    alert()
);
*/

//There is also a .finally which as analogous to then(f, f) but not the same because its used for cleanup mostly

//Chaining promises
let chainPromise = new Promise(function(resolve, reject){
    setTimeout(() => resolve(1), 1000);
}).then(function(result){
    alert(result);
    return result*2;
}).then(function(result){
    alert(result);
    return result*2;
}).then(function(result){
    alert(result);
    return result*2;
});


//All 3 of these promises are running at the same time
let promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 resolved");
});

let promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2 resolved");
});

let promise3 = new Promise((resolve, reject) => {
    resolve("Promise 3 resoled");
});

//This promise.all is called when all 3 promises are finished, the result is an array of all the resolves
Promise.all([promise1, promise2, promise3]).then((result) => {
    alert(`All promises resolved ${result}`);
}).catch((error) => {
    alert(`Something failed`);
})

//These are async function, they can be done with promises but this is more clean and easy
function makeRequest(location){
    return new Promise((resolve, reject) => {
        alert(`Making a request to this ${location}`);
        if (location == "Google") {
            resolve("Google says hi");
        }
        else {
            reject("You can only request from Google");
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        alert("Processing response");
        resolve(`Extra information: ${response}`);
    })
}

async function doWork() {
    try{
        const response = await makeRequest("Google");
        alert("Response Recieved");
        const processedResponse = await processRequest(response);
        alert(processedResponse);
    }
    catch(err){
        alert(err);
    }
}

doWork();

/* Something useful to use with chained promises
loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // scripts are loaded, we can use functions declared there
    one();
    two();
    three();
  });
*/




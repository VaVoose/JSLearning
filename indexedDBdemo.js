//This is the javascript behind IndexedDB databases

let currentDB = null;


const btnCreateDB = document.getElementById("btnDB");
btnCreateDB.addEventListener("click", createDB);

const btnAddPart = document.getElementById("btnAddPart");
btnAddPart.addEventListener("click", addPart);

const btnViewPart = document.getElementById("btnViewParts");
btnViewPart.addEventListener("click", viewParts);

function viewParts(){
    let tx = currentDB.transaction("parts", "readonly");
    let tblParts = tx.objectStore("parts");
    let partsCursorRequest = tblParts.openCursor();

    partsCursorRequest.onsuccess = function(event){
        const cursor = partsCursorRequest.result;
        
        if (cursor) {
            //Do Something
            console.log(`key:${cursor.key} value:${cursor.value.mfgNo}`);
            cursor.continue();
        }
        else {
            console.log("No more parts");
        }
    }

    partsCursorRequest.onerror = event => {
        alert(`Error: ${event.target.error}`);
    }
}

function addPart(){
    let samplePart = {
        //Generate a random serial number from 0 - 1000 inclusive
        serialNo: Math.floor(Math.random()*1000),
        mfgNo: "intel"
    }

    const tx = currentDB.transaction("parts", "readwrite");
    //Can not duplicate an item in the object store
    tx.onerror = e => alert(`Error, ${e.target.error}`);
    let tblParts = tx.objectStore("parts");
    tblParts.add(samplePart);
}

function createDB(){
    const dbName = document.getElementById("dbName").value;
    const dbVer = document.getElementById("dbVer").value;

    const request = indexedDB.open(dbName, dbVer);

    //You can only create Object stores within onupgradeneeded
    request.onupgradeneeded = function(event){
        //This gets the current database
        currentDB = event.target.result;

        // This is creating "tables"
        /*
            Part
            [key] SerialNo: int
            MfgNo: int
        */
        const tblParts = currentDB.createObjectStore("parts", {keyPath: "serialNo"});
        const tblLocations = currentDB.createObjectStore("locations", {keyPath: "locationID"});
        alert("Database was upgraded");
    }

    request.onsuccess = function(event){
        currentDB = event.target.result;
        alert("Database was Successful");
        viewParts();
    }

    request.onerror = function(event){
        alert("Database Failed");
    }
}
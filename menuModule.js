//This is an example of event delegation where the common ancestor handles the events of the objects inside it
//This allows dyanically creating buttons inside the menu without creating new handlers for each one

class Menu {
    constructor(elem){
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    save(){
        alert('Saving');
    }

    load(){
        alert('Loading');
    }

    clear(){
        alert('Clearing');
    }

    onClick(event){
        let action = event.target.dataset.action;
        if (action) this[action]();
    }
}

new Menu(document.querySelector("#menu"));
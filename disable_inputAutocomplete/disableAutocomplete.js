class disableInputAutocomplete {
    constructor(id){
        this.id = id
    }

    static randomId(){
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    disable() {
        const el = document.getElementById(this.id);
        const el2 = el.cloneNode(true);
        el.type = 'hidden';
        el2.name = disableInputAutocomplete.randomId();
        el.parentNode.appendChild(el2);
        el2.oninput = function () {
            el.value = el2.value
        }
    }
}

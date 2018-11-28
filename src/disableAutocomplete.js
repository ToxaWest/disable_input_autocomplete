export class disableInputAutocompleteClass {
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

    static hide(el){
        el.style.display = 'none';
        el.style.height = '0';
        el.style.width = '0';
        el.style.overflow = 'hidden';
        el.autocomplete="new-password";
        el.classList = null;
        el.value = '';
        return el
    }

    disable() {
        let el = document.getElementById(this.id);
        const el2 = document.createElement('input');
        el2.classList = el.classList;
        el2.placeholder = el.placeholder;
        el = disableInputAutocompleteClass.hide(el);
        el2.name = disableInputAutocompleteClass.randomId();
        el2.autocomplete="new-password";
        el.parentNode.appendChild(el2);
        el2.oninput = function (e) {
            el.value = e.target.value;
        }
    }
}

export function disableInputAutocomplete(id){
    new disableInputAutocompleteClass(id).disable()
}

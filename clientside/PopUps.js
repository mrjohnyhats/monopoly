class Default {
    constructor(name, text){
        this.name = name;
        this.text = text;
        this.type = 'default'
    }
}

class Buttons extends Default {
    constructor(name, text, buttons){
        super(name, text);
        this.type = 'buttons';
        this.buttons = buttons;
    }
}

class TextField extends Default {
    constructor(name, text){
        super(name, text);
        this.type = 'textfield';
    }
}

export default {
    Default,
    Buttons,
    TextField
}

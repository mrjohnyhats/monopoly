import actionTypes from './actionTypes';

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
        this.type = 'textField';
    }
}

const alert = (text, name='alert with text: ${text}') => {
    return {
        popUp: new Default(name, text),
        type: actionTypes.CREATE_POPUP
    }
}

const choice = (text, choices, name='popup of choices: ${choices.join(\', \')}') => {
    return: {
        popUp: new Buttons(name, text, choices),
        type: actionTypes.CREATE_POPUP
    }
}

const input = (text, name='input popup with text: ${text}') => {
    popUp: new TextField(name, text),
    type: actionTypes.CREATE_POPUP
}

export default {
    alert,
    choice,
    input
};

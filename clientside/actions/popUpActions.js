import actionTypes from './actionTypes';

class Default {
    constructor(name, text){
        this.name = name;
        this.text = text;
        this.type = 'default'
    }
}

class Choices extends Default {
    constructor(name, text, choices){
        super(name, text);
        this.type = 'choice';
        this.choices = choices;
    }
}

class Input extends Default {
    constructor(name, text){
        super(name, text);
        this.type = 'input';
    }
}


const alert = (text, name='alert with text: ${text}') => {
    return {
        popUp: new Default(name, text),
        type: actionTypes.CREATE_POPUP
    };
}

const choice = (text, choices, name='popup of choices: ${choices.join(\', \')}') => {
    return {
        popUp: new Choices(name, text, choices),
        type: actionTypes.CREATE_POPUP
    };
}

const input = (text, name='input popup with text: ${text}') => {
    return {
        popUp: new Input(name, text),
        type: actionTypes.CREATE_POPUP
    };
}

const removePopUp = () => {
    return {
        type: actionTypes.REMOVE_POPUP
    };
}

export default {
    alert,
    choice,
    input,
    removePopUp
};

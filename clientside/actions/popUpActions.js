import actionTypes from './actionTypes';

class DefaultPopUp {
    constructor(name, text){
        this.name = name;
        this.text = text;
        this.type = 'default'
    }
}

class ChoicesPopUp extends DefaultPopUp {
    constructor(name, text, choices){
        super(name, text);
        this.type = 'choice';
        this.choices = choices;
    }
}

class InputPopUp extends DefaultPopUp {
    constructor(name, text){
        super(name, text);
        this.type = 'input';
    }
}


const alert = (text, name=`alert with text: ${text}`) => {
    return {
        popUp: new DefaultPopUp(name, text),
        type: actionTypes.CREATE_POPUP
    };
}

const choice = (text, choices, name=`popup of choices: ${choices.join(', ')}`) => {
    return {
        popUp: new ChoicesPopUp(name, text, choices),
        type: actionTypes.CREATE_POPUP
    };
}

const input = (text, name=`input popup with text: ${text}`) => {
    return {
        popUp: new InputPopUp(name, text),
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

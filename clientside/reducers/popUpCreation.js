const reducer = (state, action) => {
    if(state.curPopUp == null){
        return Object.assign({}, state, {curPopUp: action.popUp});
    } else {
        return Object.assign({}, state, {error: `cannot display \"${action.popUp.name}\" popup while \"${state.curPopUp.name}\" is displayed`});
    }
}

export default reducer;

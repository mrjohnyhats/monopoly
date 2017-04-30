const reducer = (state, action) => {
    if(state.curPopUp == {}){
        state.curPopUp = action.popUp;
    }
    else {
        state.error = "cannot display \"${action.popUp.name}\" popup while \"${state.curPopUp.name}\" is displayed";
    }
}

export default reducer;

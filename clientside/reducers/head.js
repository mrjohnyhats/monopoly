import popUpCreation from './popUpCreation'
import actionTypes from '../actions/actionTypes'

const initialState = {
	playerQuan: 0,
	players: {},
	curPopUp: null,
	error: ''
};

const reducer = (state = initialState, action) => {
	if(action.type == actionTypes.CREATE_POPUP){
		return Object.assign({}, state, popUpCreation(state, action));
	} else if(action.type == actionTypes.REMOVE_POPUP){
		return Object.assign({}, state, {curPopUp: {}});
	} else if(action.type == actionTypes.ERROR){
		return Object.assign({}, state, {error: state.msg});
	}
	return state;
};

export default reducer;

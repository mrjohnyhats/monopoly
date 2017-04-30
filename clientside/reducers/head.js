import popUps from './popUps'
import actionTypes from '../actions/actionTypes'

const initialState = {
	playerQuan: 0,
	players: {},
	curPopUp: {},
	error: ""
};

const reducer = (state = initialState, action) => {
	if(action.type == actionTypes.CREATE_POPUP) state = popUps(state, action);
	else if(action.type == actionTypes.ERROR) state.error = action.msg;
	return state;
};

export default reducer

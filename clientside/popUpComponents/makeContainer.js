import {connect} from 'react-redux';
import popUpActions from '../actions/PopUpActions';

const mapStateToProps = (state) => {
    return {
        popUpObj: state.curPopUp
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePopup: dispatch(popUpActions.removePopUp())
    };
}

export default connect(mapStateToProps, mapDispatchToProps);

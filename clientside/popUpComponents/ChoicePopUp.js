import React from 'react';
import Radium from 'radium';
import PopUp from './PopUp';


class ChoicePopUp extends React.Component {
    render(){
        if(this.props.popUpObj != null && this.props.popUpObj.type == 'choice'){
            return (<PopUp popUpObj={this.props.popUpObj}>

                </PopUp>);
        } else {
            return null;
        }
    }
}

export default Radium(ChoicePopUp);

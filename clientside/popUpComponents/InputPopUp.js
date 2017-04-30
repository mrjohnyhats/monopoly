import React from 'react';
import Radium from 'radium';
import PopUp from './PopUp';


class InputPopUp extends React.Component {
    render(){
        if(this.props.popUpObj != null && this.props.popUpObj.type == 'input'){
            return (<PopUp popUpObj={this.props.popUpObj}>

                </PopUp>);
        } else {
            return null;
        }
    }
}

export default Radium(InputPopUp);

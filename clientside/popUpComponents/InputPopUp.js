import React from 'react';
import Radium from 'radium';
import PopUp from './PopUp';


class InputPopUp extends React.Component {
    render(){
        return (<PopUp popUpObj={this.props.popUpObj}>

            </PopUp>);
    }
}

export default Radium(InputPopUp);

import React from 'react';
import Radium from 'radium';


class PopUp extends React.Component {
    getStyles(){
        return {
            base: {
                zIndex: 2,
                position: 'absolute',
                margin: 'auto',
                display: 'block',
                transition: 'fade-in-out 0.2s',
                backgroundColor: 'red'
            }
        };
    }

    render(){
        // console.log(`popUpObj: ${this.props.popUpObj}`);

        if(this.props.popUpObj != null){
            return (<div style={this.getStyles().base}>
                <p>{this.props.popUpObj.text}</p>
                {this.props.children}
            </div>);

        } else {
            return null;
        }
    }
}

export default Radium(PopUp);

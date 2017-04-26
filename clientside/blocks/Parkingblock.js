import React from 'react'
import Radium from 'radium'
import Block from './Block'

class Parkingblock extends React.Component {
    getStyles(){
        return {
            base: {
                margin: '0'
            },
            img: {
                maxWidth: '100%',
                maxHeight: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block'
            },
            text: {
                margin: '0',
                display: 'block',
                textAlign: 'center',
                fontSize: '1.5vh'
            }
        }
    }

    render(){
        return (<Block style={this.getStyles().base} width="large">
                <img style={this.getStyles().img} src='graphics/free_parking.png'/>
                <p style={this.getStyles().text}>free parking</p>
            </Block>);
    }
}

export default Radium(Parkingblock);

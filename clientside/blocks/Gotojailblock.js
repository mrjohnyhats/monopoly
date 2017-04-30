import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import Block from './Block'

class Gotojailblock extends React.Component {
    getStyles(){
        return {
            img: {
                maxWidth: '100%',
                maxHeight: '75%',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block'
            },
            text: {
                display: 'block',
                textAlign: 'center'
            }
        };
    }

    render(){
        return (<Block width="large" orientation={this.props.orientation}>
                <img style={this.getStyles().img} src="graphics/go_to_jail.jpg"/>
                <p style={this.getStyles().text}>go to jail</p>
            </Block>);
    }
}

Gotojailblock.propTypes = {
    orientation: PropTypes.string
};

Gotojailblock.defaultProps = {
    orientation: 'horizontal'
};

export default Radium(Gotojailblock);

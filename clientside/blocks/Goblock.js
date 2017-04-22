import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import Block from './Block.js'

class Goblock extends React.Component {
	getStyles(){
		return {
			color: 'red',
			fontSize: '7vh',
			fontFamily: 'arial',
			textAlign: 'center'
		}
	}

	render(){
		return (<Block width="large" style={this.getStyles()}>
				GO
			</Block>)
	}
}

export default Radium(Goblock)

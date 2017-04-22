import React from 'react'
import PropTypes from 'prop-types'
import Block from './Block.js'
import Radium from 'radium'

class Regularblock extends React.Component {
	getStyles(){
		return {
			ribbon: {
				width: '100%',
				height: '20%',
				display: 'block'
			},
			base: {
				fontSize: '13px',
			},
			text: {
				margin: '0'
			}
		};
	}

	render(){
		const ribbonStyles = [
			this.getStyles().ribbon,
			{backgroundColor: this.props.color}
		];

		return (<Block width="small" style={this.getStyles().base}>
				<span style={ribbonStyles}></span>
				<p style={this.getStyles().text}>{this.props.text}</p>
				<p>{"$"+this.props.cost}</p>
			</Block>)
	}
}

Regularblock.propTypes = {
	color: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	cost: PropTypes.number.isRequired
}

export default Radium(Regularblock);

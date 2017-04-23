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
			},
			texts: {
				width: '100%',
				textAlign: 'center'
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
				<p style={this.getStyles().texts}>{this.props.text}</p>
				<p style={this.getStyles().texts}>{"$"+this.props.cost}</p>
			</Block>)
	}
}

Regularblock.propTypes = {
	color: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	cost: PropTypes.number.isRequired
}

export default Radium(Regularblock);

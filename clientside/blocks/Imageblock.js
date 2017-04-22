import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import Block from './Block.js'

class Imageblock extends React.Component {
	getStyles(){
		return {
			text: {
				width: '100%',
				textAlign: 'center'
			},
			img: {
				maxHeight: '80%',
				maxWidth: '80%',
				margin: 'auto',
				display: 'block'
			}
		}
	}

	render(){
		return (<Block width="small">
				<p style={this.getStyles().text}>{this.props.text}</p>
				<img style={this.getStyles().img} src={this.props.imgsrc}/>
			</Block>);
	}
}

Imageblock.propTypes = {
	text: PropTypes.string.isRequired,
	imgsrc: PropTypes.string.isRequired
};

export default Radium(Imageblock);

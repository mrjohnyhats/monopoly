import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import Block from './Block.js'

class Imageblock extends React.Component {
	getStyles(){
		return {
			text: {
				width: '100%',
				textAlign: 'center',
				fontSize: '1.5vh',
				height: '10%',
				marginTop: '10%'
			},
			img: {
				maxHeight: '50%',
				maxWidth: '80%',
				marginTop: '10%',
				marginLeft: 'auto',
				marginRight: 'auto',
				display: 'block',
			}
		}
	}

	render(){
		let cost, text;
		if(this.props.cost != undefined){
			cost = <p style={this.getStyles().text}>{"$"+this.props.cost}</p>;
		}
		if(this.props.text 	!= undefined){
			text = <p style={this.getStyles().text}>{this.props.text}</p>
		}
		return (<Block width="small">
				{text}
				<img style={this.getStyles().img} src={this.props.imgsrc}/>
				{cost}
			</Block>);
	}
}

Imageblock.propTypes = {
	text: PropTypes.string,
	imgsrc: PropTypes.string.isRequired,
	cost: PropTypes.number
};

export default Radium(Imageblock);

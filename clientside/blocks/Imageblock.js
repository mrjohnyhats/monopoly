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
				height: '10%',
				marginTop: '5%',
			},
			img: {
				maxHeight: '50%',
				maxWidth: '80%',
				padding: '10%',
				marginLeft: 'auto',
				marginRight: 'auto',
				display: 'block'
			},
			cost: {
				marginBottom: '2%'
			}
		}
	}

	render(){
		let cost, text;
		if(this.props.cost != undefined){
			cost = <p style={[this.getStyles().text, this.getStyles().cost]}>{"$"+this.props.cost}</p>;
		}
		if(this.props.text 	!= undefined){
			text = <p style={this.getStyles().text}>{this.props.text}</p>
		}
		return (<Block width="small" orientation={this.props.orientation}>
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

Imageblock.defaulsProps = {
	orientation: 'horizontal'
};

export default Radium(Imageblock);

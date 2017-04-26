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
				base: {
					maxWidth: '80%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginBottom: '0',
					display: 'block'
				},
				horizontal: {
					maxHeight: '50%',
					paddingTop: '10%',
					paddingBottom: '5%',
				},
				vertical: {
					maxHeight: '40%',
					padding: '0'
				}
			},
			cost: {
				marginBottom: '2%',
				margonTop: '0'
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

		let imgstyles = [this.getStyles().img.base];

		if(this.props.orientation == 'horizontal'){
			imgstyles.push(this.getStyles().img.horizontal);
		} else if(this.props.orientation == 'vertical'){
			imgstyles.push(this.getStyles().img.vertical);
		}

		return (<Block width="small" orientation={this.props.orientation}>
				{text}
				<img style={imgstyles} src={this.props.imgsrc}/>
				{cost}
			</Block>);
	}
}

Imageblock.propTypes = {
	text: PropTypes.string,
	imgsrc: PropTypes.string.isRequired,
	cost: PropTypes.number
};

Imageblock.defaultProps = {
	orientation: 'horizontal'
};

export default Radium(Imageblock);

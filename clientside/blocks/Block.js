import React from 'react';
import PropTypes from 'prop-types'
import Radium from 'radium';

class Block extends React.Component {
	getStyles(){
		return {
			base: {
				height: '15vw',
				display: 'inline-block',
				border: '1px solid black',
				margin: 0,
				float: 'left'
			},
			vertical: {
				width: '15vw',
				display: 'block'
			},
			small: {
				vertical: {
					height: '8.5vh'
				},
				horizontal: {
					width: '8.5vw'
				}
			},
			large: {
				vertical: {
					height: '15vh'
				},
				horizontal: {
					width: '15vw'
				}
			}
		}
	}

	render(){
		let styles;

		if(this.props.orientation == "horizontal"){
			styles = [this.getStyles().base];

			if(this.props.width == "small"){
				styles.push(this.getStyles().small.horizontal);
			} else {
				styles.push(this.getStyles().large.horizontal);
			}
		} else if(this.props.orientation == "vertical"){
			styles = [this.getStyles().base, this.getStyles().vertical];

			if(this.props.width == "small"){
				styles.push(this.getStyles().small.vertical);
			} else {
				styles.push(this.getStyles().large.vertical);
			}
		}


		if(this.props.style != undefined){
			styles = styles.concat(this.props.style);
		}

		return(<div style={styles}>
				{this.props.children}
			</div>);
	}
}

Block.propTypes = {
	width: PropTypes.string.isRequired,
	orientation: PropTypes.string
};

Block.defaultProps = {
	orientation: 'horizontal'
}

export default Radium(Block);

import React from 'react';
import PropTypes from 'prop-types'
import Radium from 'radium';

class Block extends React.Component {
	getStyles(){
		return {
			base: {
				height: '12vh',
				display: 'inline-block',
				border: '1px solid black',
				margin: 0
			},
			small: {
				width: '9vh'
			},
			large: {
				width: '12vh'
			}
		}
	}

	render(){
		let styles = [this.getStyles().base];

		if(this.props.width == "small"){
			styles.push(this.getStyles().small);
		} else {
			styles.push(this.getStyles().large);
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
	width: PropTypes.string.isRequired
};

export default Radium(Block);

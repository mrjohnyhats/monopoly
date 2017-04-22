import React from 'react';
import Radium from 'radium';

class Block extends React.Component {
	getStyles(){
		return {
			base: {
				height: '8vh'
			},
			small: {
				width: '5vh'
			},
			large: {
				width: '8vh'
			}
		}
	}

	render(){
		const styles = [this.getStyles().base];
		if(this.props.width == "small") styles.push(this.getStyles().small);
		else styles.push(this.getStyles().large);
		return <img style={styles} src={this.props.imglink}/>
	}
}

export default Radium(Block);

import React from 'react';
import Radium from 'radium'
import Bottomrow from './blocks/Bottomrow'
import Rightrow from './blocks/Rightrow'


class Board extends React.Component {
	getStyles(){
		return {

		};
	}

	render(){
		return (<div style={this.getStyles()}>
				<Bottomrow/>
				<Rightrow/>
			</div>);
	}
}

export default Radium(Board)

import React from 'react';
import Radium from 'radium'
import Bottomrow from './blocks/Bottomrow'
import Leftrow from './blocks/Leftrow'


class Board extends React.Component {
	getStyles(){
		return {
			// transformOrigin: '50% 50%',
			// transform: 'rotate(90deg)'
		};
	}

	render(){
		return (<div style={this.getStyles()}>
				<Bottomrow/>
				<Leftrow/>
			</div>);
	}
}

export default Radium(Board)

import React from 'react';
import Radium from 'radium'
import Bottomrow from './blocks/Bottomrow'
import Leftrow from './blocks/Leftrow'
import Toprow from './blocks/Toprow'


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
				<Toprow/>
			</div>);
	}
}

export default Radium(Board);

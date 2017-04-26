import React from 'react'
import Radium from 'radium'
import Cchestblock from './Cchestblock'
import Regularblock from './Regularblock'
import Imageblock from './Imageblock'
import Parkingblock from './Parkingblock'
import Chanceblock from './Chanceblock'


class Toprow extends React.Component {
	getStyles(){
		return {
            position: 'absolute',
            top: '0',
            left: '0',
            border: '1px solid red'
        }
	}

	render(){
		return (<div style={this.getStyles()} style={this.getStyles()}>
                <Parkingblock/>
                <Regularblock text="Kentucky Avenue" color="red" cost={220}/>
			</div>);
	}
}

export default Radium(Toprow);

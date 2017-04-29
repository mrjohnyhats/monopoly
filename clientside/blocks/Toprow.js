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
                <Chanceblock color="blue"/>
                <Regularblock text="Indiana Avenue" color="red" cost={220}/>
                <Regularblock text="Illinois Avenue" color="red" cost={240}/>
                <Imageblock text="B & O Railroad" imgsrc="graphics/train.png" cost={200}/>
                <Regularblock text="Atlantic Avenue" color="yellow" cost={260}/>
                <Regularblock text="Ventor Avenue" color="yellow" cost={260}/>
                <Imageblock text="Water Works" imgsrc="somewaterimg" cost={150}/>
                <Regularblock text="Marvin Gardens" color="yellow" cost={280}/>
			</div>);
	}
}

export default Radium(Toprow);

import React from 'react'
import Radium from 'radium'
import Goblock from './Goblock'
import Cchestblock from './Cchestblock'
import Regularblock from './Regularblock'
import Imageblock from './Imageblock'
import Chanceblock from './Chanceblock'

class Bottomrow extends React.Component {
	getStyles(){
		return {
			position: 'absolute',
			right: 0,
			bottom: 0,
			margin: 0
		}
	}

	render(){
		return (<div style={this.getStyles()}>
				<Regularblock color="lightblue" text="Connecticut Avenue" cost={120}/>
				<Regularblock color="lightblue" text="Vermont Avenue" cost={100}/>
				<Chanceblock color="pink"/>
				<Regularblock color="lightblue" text="Oriental Avenue" cost={100}/>
				<Imageblock text="reading railroad" imgsrc="graphics/train.png" cost={200}/>
				<Imageblock imgsrc="graphics/income_tax.png"/>
				<Regularblock color="brown" text="Baltic Avenue" cost={60}/>
				<Cchestblock/>
				<Regularblock color="brown" text="Mediteranean Avenue" cost={60}/>
				<Goblock/>
			</div>);
	}
}

export default Radium(Bottomrow);

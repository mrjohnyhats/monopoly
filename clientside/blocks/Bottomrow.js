import React from 'react'
import Radium from 'radium'
import Goblock from './Goblock'
import Regularblock from './Regularblock'
import Imageblock from './Imageblock'

class Bottomrow extends React.Component {
	getStyles(){
		return {
			position: 'absolute',
			bottom: 0
		}
	}

	render(){
		return (<div style={this.getStyles()}>
				<Regularblock color="lightblue" text="Vermont Avenue" cost={100}/>
				<Imageblock text="chance" imgsrc="graphics/chance.png"/>
				<Regularblock color="lightblue" text="Oriental Avenue" cost={100}/>
				<Imageblock text="reading railroad" imgsrc="graphics/reading_railroad.png" cost={200}/>
				<Imageblock imgsrc="graphics/income_tax.png"/>
				<Imageblock text="community chest" imgsrc="graphics/community_chest.png" cost={10}/>
				<Regularblock color="green" text="Mediteranean Avenue" cost={60}/>
				<Regularblock color="lightblue" text="Connecticut Avenue" cost={120}/>
				<Goblock/>
			</div>);
	}
}

export default Radium(Bottomrow);

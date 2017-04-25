import React from 'react'
import Radium from 'radium'
import Jailblock from './Jailblock'
import Cchestblock from './Cchestblock'
import Regularblock from './Regularblock'
import Imageblock from './Imageblock'

class Leftrow extends React.Component {
	getStyles(){
		return {
			position: 'absolute',
			border: '1px solid red',
			bottom: '0',
			maxHeight: '15vw',
			right: '-8.75vw',
			display: 'inline-block',
			transformOrigin: '0% 100%',
			transform: 'rotate(-90deg)'
		}
	}

	render(){
		return (<div style={this.getStyles()}>
				<Jailblock/>
				<Regularblock color="magenta" text="St. Charles Place" cost={140}/>
				<Imageblock text="Electric Company" imgsrc="graphics/lightbulb.png" cost={150}/>
				<Regularblock color="magenta" text="States Avenue" cost={140}/>
				<Regularblock color="magenta" text="Virginia Avenue" cost={160}/>
				<Imageblock text="Pennsylvania railroad" imgsrc="graphics/train.png" cost={200}/>
				<Regularblock color="orange" text="St. James Place" cost={180}/>
				<Cchestblock/>
				<Regularblock color="orange" text="Tennessee Avenue" cost={180}/>
				<Regularblock color="orange" text="New York Avenue" cost={200}/>
			</div>);
	}
}

export default Radium(Leftrow)

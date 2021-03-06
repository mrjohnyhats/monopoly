import React from 'react'
import Radium from 'radium'
import Jailblock from './Jailblock'
import Cchestblock from './Cchestblock'
import Regularblock from './Regularblock'
import Imageblock from './Imageblock'

class Leftrow extends React.Component {
	getStyles(){
		return {
			maxWidth: '12vw',
			position: 'absolute',
			left: 0,
			bottom: 0
		}
	}

	render(){
		return (<div style={this.getStyles()}>
				<Regularblock color="orange" text="New York Avenue" cost={200} orientation="vertical"/>
				<Regularblock color="orange" text="Tennessee Avenue" cost={180} orientation="vertical"/>
				<Cchestblock orientation="vertical"/>
				<Regularblock color="orange" text="St. James Place" cost={180} orientation="vertical"/>
				<Imageblock text="Pennsylvania railroad" imgsrc="graphics/train.png" cost={200} orientation="vertical"/>
				<Regularblock color="magenta" text="Virginia Avenue" cost={160} orientation="vertical"/>
				<Regularblock color="magenta" text="States Avenue" cost={140} orientation="vertical"/>
				<Imageblock text="Electric Company" imgsrc="graphics/lightbulb.png" cost={150} orientation="vertical"/>
				<Regularblock color="magenta" text="St. Charles Place" cost={140} orientation="vertical"/>
				<Jailblock/>

			</div>);
	}
}

export default Radium(Leftrow)

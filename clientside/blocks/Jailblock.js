import React from 'react'
import Radium from 'radium'
import Block from './Block'

class Jailblock extends React.Component {
	getStyles(){
		return {
			img: {
				height: '80%',
				width: '100%'
			},
			text: {

			}
		}
	}

	render(){
		return(<Block width="large">
				<img style={this.getStyles().img} src="graphics/jail.png"/>
				<p style={this.getStyles().text}>go to jail :(</p>
			</Block>);
	}
}

export default Radium(Jailblock)

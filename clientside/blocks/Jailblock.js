import React from 'react'
import Radium from 'radium'
import Block from './Block'

class Jailblock extends React.Component {
	getStyles(){
		return {
			img: {
				maxHeight: '70%',
				maxWidth: '100%',
				display: 'block',
				marginLeft: 'auto',
				marginRight: 'auto'
			},
			text: {
				width: '100%',
				textAlign: 'center',
				marginBottom: '10%'
			}
		}
	}

	render(){
		return(<Block width="large">
				<img style={this.getStyles().img} src="graphics/jail.png"/>
				<p style={this.getStyles().text}>go to jail</p>
			</Block>);
	}
}

export default Radium(Jailblock)

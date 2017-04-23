import React from 'react'
import Radium from 'radium'
import Imageblock from './Imageblock'

class Cchestblock extends React.Component {
	render(){
		return (<Imageblock text="community chest" imgsrc="graphics/community_chest.png"/>)
	}
}

export default Radium(Cchestblock)

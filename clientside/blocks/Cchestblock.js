import React from 'react'
import Radium from 'radium'
import Imageblock from './Imageblock'

class Cchestblock extends React.Component {
	render(){
		return (<Imageblock text="community chest" orientation={this.props.orientation} imgsrc="graphics/community_chest.png"/>)
	}
}

Cchestblock.defaultProps = {
	orientation: 'horizontal'
};

export default Radium(Cchestblock)

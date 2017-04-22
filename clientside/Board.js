import React from 'react';
import Block from './blocks/Block.js'
import Radium from 'radium'
import Goblock from './blocks/Goblock.js'
import Regularblock from './blocks/Regularblock.js'
import Imageblock from './blocks/Imageblock.js'

class Board extends React.Component {
	getStyles(){
		return {
			width: '100vw',
			height: '100vh'
		};
	}

	render(){
		return (<div>
				<Goblock/>
				<Regularblock color="green" text="Mediteranean avenue" cost={60}/>
				<Imageblock text="community chest" imgsrc="graphics/community_chest.png"/>
			</div>);
	}
}

export default Radium(Board)

import React from 'react';
import Block from './blocks/Block.js'
import Radium from 'radium'

class Board extends React.Component {
	render(){
		return <Block width="small" imglink="http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg"/>
	}
}

export default Radium(Board)

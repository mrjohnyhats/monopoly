import React from 'react'
import Radium from 'radium'
import Jailblock from './Jailblock'
import Regularblock from './Regularblock'
import Imageblock from './Imageblock'

class Rightrow extends React.Component {
	render(){
		return (<div>
				<Jailblock/>
			</div>);
	}
}

export default Radium(Rightrow)

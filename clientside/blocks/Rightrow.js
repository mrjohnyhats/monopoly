import React from 'react'
import Radium from 'radium'
import Cchestblock from './Cchestblock'
import Regularblock from './Regularblock'
import Imageblock from './Imageblock'
import Gotojailblock from './Gotojailblock'
import Chanceblock from './Chanceblock'

class Rightrow extends React.Component {
    getStyles(){
        return {
            maxWidth: '12vw',
            height: '100%',
            position: 'absolute',
            margin: 0,
            top: 0,
            right: 0
        }
    }

    render(){
        return (<div style={this.getStyles()}>
                <Gotojailblock orientation="vertical"/>
                <Regularblock text="Pacific Avenue" cost={300} color="green" orientation="vertical"/>
                <Regularblock text="North Carolina Avenue" cost={300} color="green" orientation="vertical"/>
                <Cchestblock orientation="vertical"/>
                <Regularblock text="Pennsylvania Avenue" cost={320} color="green" orientation="vertical"/>
                <Imageblock text="Short Line" imgsrc="graphics/train.png" cost={200} orientation="vertical"/>
                <Chanceblock color="orange" orientation="vertical"/>
                <Regularblock text="Park Place" cost={350} color="blue" orientation="vertical"/>
                <Imageblock text="luxury tax" imgsrc="graphics/diamond.png" cost={100} orientation="vertical"/>
                <Regularblock text="Boardwalk" cost={400} color="blue" orientation="vertical"/>
            </div>);
    }
}

export default Radium(Rightrow);

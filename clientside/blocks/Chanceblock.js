import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import Imageblock from './Imageblock'

class Chanceblock extends React.Component {
    getImagePaths(){
        return {
            'pink': 'graphics/chance/pink.png',
            'blue': 'graphics/chance/blue.png',
            'orange': 'graphics/chance/orange.png',
        }
    }

    render(){
        return (<Imageblock text="chance" orientation={this.props.orientation} imgsrc={this.getImagePaths()[this.props.color]}/>)
    }
}

Chanceblock.propTypes = {
    color: PropTypes.string,
    orientation: PropTypes.string
};

Chanceblock.defaultProps = {
    color: 'pink',
    orientation: 'horizontal'
}

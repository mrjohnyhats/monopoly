import React from 'react';
import DefaultPopUpContainer from './DefaultPopUpContainer';
import ChoicePopUpContainer from './ChoicePopUpContainer';
import InputPopUpContainer from './InputPopUpContainer';


class AllPopUpContainers extends React.Component {
    render(){
        return (
            <div>
                <DefaultPopUpContainer/>
                <ChoicePopUpContainer/>
                <InputPopUpContainer/>
            </div>
        );
    }
}

export default AllPopUpContainers;

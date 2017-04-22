import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux';
import reducer from './reducer'
import Board_container from './Board_container'

const store = createStore(reducer);

ReactDom.render(<Board_container store={store}/>, document.getElementById('app'));

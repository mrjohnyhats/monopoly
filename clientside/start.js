import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux';
import headReducer from './reducers/head'
import Board_container from './Board_container'

// import Radium from 'radium'

const store = createStore(headReducer);

ReactDom.render(<Board_container store={store}/>, document.getElementById('app'));

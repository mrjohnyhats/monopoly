import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import headReducer from './reducers/head'
import BoardContainer from './BoardContainer'
import AllPopUpContainers from './popUpComponents/AllPopUpContainers';
import popUpActions from './actions/popUpActions';

const store = createStore(headReducer);

const elems = (
    <Provider store={store}>
        <div>
            <BoardContainer/>
            <AllPopUpContainers/>
        </div>
    </Provider>
);

ReactDom.render(elems, document.getElementById('app'));

store.dispatch(popUpActions.alert('hello, world'));

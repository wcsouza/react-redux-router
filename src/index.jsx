import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './store/reducers';

import Routes from './routes';

ReactDom.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <div className='wrapper'>
            <div className='row'>
                <Routes />
            </div>
        </div>
    </Provider >, document.getElementById('app'));
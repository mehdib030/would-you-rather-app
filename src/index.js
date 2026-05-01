import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer,middleware)

const root = createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
        <App/>
   </Provider>
)

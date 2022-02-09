import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {HashRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import 'antd/dist/antd.css'

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);


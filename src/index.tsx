import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store, {appStoreType} from "./redux/reduxStore";
import {Store} from "redux";


 let renderTree = (state:Store & appStoreType) => {


    ReactDOM.render(
        <BrowserRouter>
            <App store={state}  dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe( () => {
    let state = store.getState()
    renderTree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

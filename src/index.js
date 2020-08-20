import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css'
import store from "./store";

const render = () => {
    log()
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );

}

render()
store.subscribe(render)

function log() {
    console.log("Rendered :::");
    console.log(store.getState());
}

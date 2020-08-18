import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css'
import store from "./store";

const render = () => {
    fancyLog()
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );

}

render()
store.subscribe(render)

function fancyLog() {
    console.log("Rendered :::");
    console.log(store.getState());
}

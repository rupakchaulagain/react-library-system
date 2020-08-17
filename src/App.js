import React from 'react';
import Login from "./components/login/Login";
import {BrowserRouter, Route} from "react-router-dom";
import AppLayout from "./AppLayout";
import Dashboard from "./components/Dashboard";

class App extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        return (

            <BrowserRouter>

                <Route path="/" exact component={Login}/>
                {/*<Route path="/home" exact component={AppLayout}/>*/}
                <Route path="/home" exact  render={props => <AppLayout {...props}/>}/>

            </BrowserRouter>


        )
    }

}

export default App;

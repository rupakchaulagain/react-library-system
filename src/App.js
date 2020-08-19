import React from 'react';
import Login from "./components/login/Login";
import {HashRouter, Route} from "react-router-dom";
import routes from "./routes";
import {ProtectedRoute} from "./ProtectedRoute";
import AppLayout from "./AppLayout";
import AddUserForm from "./components/user/AddUserForm";
import Switch from "react-bootstrap/Switch";

function App() {

    return (

        <HashRouter>
            <Switch>

            <Route exact path="/login" component={
                // localStorage.getItem("authenticated") === true ||
                // localStorage.getItem("authenticated") !== null ?
                //     Dashboard :
                    Login
            }/>
            <Route exact path="/signup" component={AddUserForm}/>

            {routes?.map((route, index) => (

                <ProtectedRoute
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={(props) =>
                        <AppLayout
                            {...props}
                            routes={routes}
                            route={route}/>

                    }
                >

                </ProtectedRoute>

            ))}

            </Switch>
        </HashRouter>

    )

}

export default App;

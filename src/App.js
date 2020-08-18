import React from 'react';
import Login from "./components/login/Login";
import {BrowserRouter, Route} from "react-router-dom";
import routes from "./routes";
import {ProtectedRoute} from "./ProtectedRoute";
import AppLayout from "./AppLayout";
import AddUserForm from "./components/user/AddUserForm";
import Dashboard from "./components/Dashboard";

function App() {

    return (

        <BrowserRouter>

            <Route exact path="/" component={
                localStorage.getItem("authenticated") === true ||
                localStorage.getItem("authenticated") !== null ?
                    Dashboard : Login
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
        </BrowserRouter>

    )

}

export default App;

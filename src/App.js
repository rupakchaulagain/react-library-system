import React from 'react';
import Login from "./components/login/Login";
import {BrowserRouter, Route} from "react-router-dom";
import routes from "./routes";
import BreadCrumb from "./components/BreadCrumb";
import {ProtectedRoute} from "./ProtectedRoute";

function App() {

        return (

            <BrowserRouter>
                <Route exact path="/" component={Login}/>

                {routes?.map((route, index) => (

                    <ProtectedRoute
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={(props) =>
                            <div>
                                <BreadCrumb {...props} data={route}/>
                                <route.main/>
                            </div>
                        }


                    >

                    </ProtectedRoute>

                ))}

                {/*<Route exact path="/app" render={props => <AppLayout{...props}/>}/>*/}
            </BrowserRouter>

        )

}

export default App;

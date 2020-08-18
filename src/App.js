import React from 'react';
import Login from "./components/login/Login";
import {BrowserRouter, Route} from "react-router-dom";
import routes from "./routes";
import {ProtectedRoute} from "./ProtectedRoute";
import AppLayout from "./AppLayout";

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

import React from 'react';
import Login from "./components/login/Login";
import {BrowserRouter, Route} from "react-router-dom";
import routes from "./routes";
import BreadCrumb from "./components/BreadCrumb";
import {ProtectedRoute} from "./ProtectedRoute";
import AppLayout from "./AppLayout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListGroup from "react-bootstrap/ListGroup";

function App() {

    function activeRoute(path) {

        localStorage.setItem(
            "active", path
        )

    }

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
                                    <Header/>
                                    <AppLayout/>
                                    <div style={{display: "flex"}}>

                                        <div style={{backgroundColor: "#4267B2", borderRight: "1px solid #0979FA", height: "850px"}}>
                                            <ListGroup style={{width: "300px", height: "850px"}}>

                                                {routes?.map((route, index) => (
                                                    <ListGroup.Item key={index} action href={route.path}
                                                                    onClick={
                                                                        () => this.activeRoute(route.path)
                                                                    }
                                                                    className={localStorage.getItem("active") === route.path ? "active" : ""
                                                                    }>
                                                        {route.menu}
                                                    </ListGroup.Item>
                                                ))
                                                }

                                            </ListGroup>
                                        </div>

                                        <div style={{flex: 1, padding: "10px"}}>
                                            <BreadCrumb {...props} data={route}/>
                                            <route.main/>
                                        </div>

                                    </div>

                                    <Footer/>
                                </div>
                            }


                        >

                        </ProtectedRoute>

                    ))}

                {/*<ProtectedRoute exact path="/app" component={props => <AppLayout{...props}/>}/>*/}

                {/*<Route exact path="/app" render={props => <AppLayout{...props}/>}/>*/}
            </BrowserRouter>

        )

}

export default App;

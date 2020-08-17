import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import routes from "./routes";
import Switch from "react-bootstrap/Switch";
import BreadCrumb from "./components/BreadCrumb";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ProtectedRoute} from "./ProtectedRoute";

class AppLayout extends React.Component {

    activeRoute(path) {

        localStorage.setItem(
            "active", path
        )

    }

    render() {

        return (

            <div>
                <Header/>
                    <div style={{display: "flex"}}>

                        <div
                            style={{backgroundColor: "#4267B2", borderRight: "1px solid #0979FA", height: "850px"}}>
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

                         {/*   <Switch>
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
                            </Switch>*/}
                        </div>

                    </div>
                <Footer/>

            </div>
        )

    }


}

export default AppLayout
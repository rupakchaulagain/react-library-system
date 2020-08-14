import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Switch from "react-bootstrap/Switch";
import routes from "./routes";
import ListGroup from "react-bootstrap/ListGroup";
import BreadCrumb from "./components/BreadCrumb";

class App extends React.Component {

    constructor(props) {
        super(props);

    }

    activeRoute(path) {

        localStorage.setItem(
            "active", path
        )

    }

    render() {

        return (
            // this.state?.isUserLoggedIn === true ? (
            <div>
                <Header/>
                <BrowserRouter>
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

                            <Switch>
                                {routes?.map((route, index) => (

                                    <Route
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

                                    </Route>

                                ))}
                                {/*<ProtectedRoute exact path="/" component={Dashboard} />*/}
                                {/*<Route path="*" component={() => "404 NOT FOUND"} />*/}

                            </Switch>
                        </div>

                    </div>
                </BrowserRouter>
                <Footer/>

            </div>
            // :
            // <Login loginUser={this.loginUser}/>

        );
    }

}

export default App;

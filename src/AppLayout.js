import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import Header from "./components/Header";
import ListGroup from "react-bootstrap/ListGroup";
import Footer from "./components/Footer";
import {ProtectedRoute} from "./ProtectedRoute";

class AppLayout extends React.Component {

    constructor(props) {
        super(props);
        console.log("data=", props.route)
    }

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

                    <div style={{backgroundColor: "#4267b2", borderRight: "1px solid #0979FA", height: "850px"}}>
                        <ListGroup style={{width: "300px", height: "850px"}}>

                            {this.props.routes?.map((route, index) => (
                                <ListGroup.Item
                                    key={index}
                                    action to={route.path}
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

                        <BreadCrumb {...this.props} data={this.props.route}/>
                        <this.props.route.main/>
                    </div>

                </div>

                <Footer/>
            </div>

        )

    }


}

export default AppLayout
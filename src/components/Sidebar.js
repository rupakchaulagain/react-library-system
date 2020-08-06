import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Sidebar extends React.Component {

    state = {
        listActive: false
    }

    handleList=()=>{
        this.setState=({
            listActive: true
        })
    }

    render() {
        return (

            <ListGroup style={{width: "300px", height: "850px"}}>

                <ListGroup.Item action href="/">
                    Home
                </ListGroup.Item>
                <ListGroup.Item action href="/addBookForm">
                    Add Book
                </ListGroup.Item>
                <ListGroup.Item action href="/assignBookForm">
                    Assign Book
                </ListGroup.Item>

            </ListGroup>
        )

    }


}

export default Sidebar;
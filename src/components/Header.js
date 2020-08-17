import React from "react";
import {Form, FormControl} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {

    function logout() {

        localStorage.setItem("authenticated", false)
        window.location.replace('/')


    }


    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Library System</Navbar.Brand>
            <Nav className="mr-auto">
                {/*<Nav.Link href="#home">Home</Nav.Link>*/}
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-light">Search</Button>
                <Button variant="danger" onClick={logout}>Logout</Button>
            </Form>
        </Navbar>
    )

}

export default Header;


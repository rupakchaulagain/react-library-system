import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import BreadCumb from "./BreadCumb";
import Button from "react-bootstrap/Button";
import AddBookForm from "./add-book/AddBookForm";

const Dashboard = (props) => {
    return (
        <div>
            <BreadCumb {...props}/>
            <CardDeck>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <Card.Title>Books</Card.Title>
                        <Card.Text>
                            5
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button  href="/addBookForm" variant="primary">View</Button>{' '}
                    </Card.Footer>
                </Card>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Assigned Books</Card.Title>
                        <Card.Text>
                            0{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="/assignBookForm" variant="primary">View</Button>{' '}
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )

}

export default Dashboard;


import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import BreadCumb from "./BreadCumb";

const Dashboard = (props) => {
    return (
        <div>
            <BreadCumb {...props}/>
            <CardDeck>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <Card.Title>Books</Card.Title>
                        <Card.Text>
                            0
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Account</Card.Title>
                        <Card.Text>
                            0{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Polls</Card.Title>
                        <Card.Text>
                            0
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )

}

export default Dashboard;


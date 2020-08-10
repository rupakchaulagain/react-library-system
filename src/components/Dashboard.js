import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import bookList from '../OnlineBook'
import {Link} from "react-router-dom";

const NoBookFound = () => {
    return (
        <tr>
            <th><h1>No Books found...</h1></th>
        </tr>
    )

}

const Dashboard = (props) => {
    return (
        <div>
            <CardDeck>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <Card.Title>Books</Card.Title>
                        <Card.Text>
                            5
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="/addBookForm" variant="primary">View</Button>{' '}
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

                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Users</Card.Title>
                        <Card.Text>
                            0{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="/assignBookForm" variant="primary">View</Button>{' '}
                    </Card.Footer>
                </Card>
            </CardDeck><br></br>

            <h1>Online Book</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>SN.</th>
                    <th>Book Name</th>
                    <th>Authors</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>

                {bookList.length !== 0 ?
                    (
                        bookList?.map((book, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{book.bookName}</td>
                                    <td>{book.bookAuthor}</td>
                                    <td>
                                        <Link variant="primary"
                                                to={`readBook/${book.bookName}`}>Read Book</Link>{' '}
                                    </td>
                                </tr>
                            )

                        })
                    ) :
                    <NoBookFound/>}

                </tbody>
            </Table>
        </div>
    )

}

export default Dashboard;


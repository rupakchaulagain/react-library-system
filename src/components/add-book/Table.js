import React from 'react'

import Button from 'react-bootstrap/Button';
import TableRowHeaders from "../../hoc/TableRowHeaders";

let headers = [
    "S.N.",
    "Name",
    "Author",
    "Actions"
]

function Table(props) {

    let bookList = props.bookList;
    const NoBookFound = () => {
        return (
            <tr>
                <th><h1>No Books found...</h1></th>
            </tr>
        )

    }

    return (

        <table className="table">

            <thead>

            <TableRowHeaders
                headers={headers}/>

            </thead>
            <tbody>

            {bookList?.length !== 0 ?
                (
                    bookList?.map((book, index) => {
                        return (
                            <tr key={index + 1}>
                                <th scope="row">{index + 1}</th>
                                <td>{book.bookName}</td>
                                <td>{book.bookAuthor}</td>
                                <td>
                                    <Button variant="primary" onClick={() => props.editBook(index)}>Edit</Button>{' '}
                                    <Button variant="danger"
                                            onClick={() => props.deleteBook(index)}>Delete</Button>{' '}
                                </td>
                            </tr>
                        )

                    })
                ) :
                <NoBookFound/>

            }

            </tbody>
        </table>
    )

}

export default Table;
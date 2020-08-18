import React from 'react'

import Button from 'react-bootstrap/Button';

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
            <tr>
                <th scope="col">S.N.</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Actions</th>
            </tr>
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
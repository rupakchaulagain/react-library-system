import React from 'react'

import AddBookForm from './AddBookForm'

import Button from 'react-bootstrap/Button';

function Table(props){

  let bookList=props.bookList;

  console.log("books="+JSON.stringify(bookList))


    if(bookList===null || bookList.length===0 || (typeof AddBookForm === 'undefined')){

      return(

        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.N.</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Published Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
        
                                    <tr>
                                     <th> <h1>No Record Found...</h1></th>
                                    </tr>
                                
        
          </tbody>
        </table>
            )

    }else{

      return(

        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.N.</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Published Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
        
          {
          bookList?.map((book, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{book.bookName}</td>
                                        <td>{book.bookAuthor}</td>
                                        <td>{book.bookPublishedDate}</td>
                                        <td>
                                        <Button variant="primary" onClick={()=>props.editBook(index)}>Edit</Button>{' '}
                                        <Button variant="danger" onClick={() =>props.deleteBook(index)}>Delete</Button>{' '}
                                        </td>
                                    </tr>
                                )
        
                            })
                            
                            
                          
        
           }
        
          </tbody>
        </table>
            )
          }

  }

export default Table;
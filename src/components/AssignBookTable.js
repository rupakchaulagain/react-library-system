import React from 'react'

import Button from 'react-bootstrap/Button';

function Table(props){

  console.log("category="+JSON.stringify(props.categoryList))

  let categoryList = props.categoryList;

  console.log(categoryList);

    return(

<table className="table">
  <thead>
    <tr>
      <th scope="col">S.N.</th>
      <th scope="col">Category</th>
      <th scope="col">Book Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>

  {

categoryList.map((category, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{category.bookCategory}</td>
                                <td>{category.bookName}</td>
                                <td>
                                {/* <Button variant="primary" onClick={index => deleteBook(index)}>Edit</Button>{' '}
                                <Button variant="danger" onClick={index => deleteBook(index)}>Delete</Button>{' '} */}
                                </td>
                            </tr>
                        )

                    })
                  

   }

  </tbody>
</table>
    )
}

export default Table;
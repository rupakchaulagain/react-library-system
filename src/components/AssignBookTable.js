import React from 'react'

function Table(props){

  let categoryList = props.categoryList;
  let bookCategory = props.bookCategory;

  console.log(categoryList);

    return(

<table className="table">
  <thead>
    <tr>
      <th scope="col">S.N.</th>
      <th scope="col">
        
      <select  className="form-control" required="required"
    name="bookCategory"  onChange={props.filterBookCategory}>

   {bookCategory.map(category => {
           return (
           <option key={category.key} value={category.key}>{category.value}</option>
           )
         })}

      </select>
      </th>

      <th scope="col">Book Name</th>
    </tr>
  </thead>
  <tbody>

  {

categoryList.map((category, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{category.bookCategoryValue}</td>
                                <td>{category.bookName}</td>
                            </tr>
                        )

                    })
                  

   }

  </tbody>
</table>
    )
}

export default Table;
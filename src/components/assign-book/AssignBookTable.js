import React from 'react'

function Table(props) {

    let categoryList = props.categoryList;
    let filteredList = props.filteredList;
    let bookCategory = props.bookCategory;

    console.log(categoryList);
    console.log(filteredList);


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
                <th scope="col">

                    <select className="form-control" required="required"
                            name="bookCategory" onChange={props.filterBookCategory}>

                        <option value="-1">All</option>

                        {bookCategory?.map(category => {
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


            {filteredList !== null ? (

                    // (filteredList !== 0 ?
                    (filteredList?.map((filter, index) => {
                            return (
                                <tr key={index + 1}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{filter.bookCategoryValue}</td>
                                    <td>{filter.bookName}</td>
                                </tr>
                            )

                        })
                        // ) :
                        // <NoBookFound/>
                    )

                ) :
                (categoryList?.map((category, index) => {
                        return (
                            <tr key={index + 1}>
                                <th scope="row">{index + 1}</th>
                                <td>{category.bookCategoryValue}</td>
                                <td>{category.bookName}</td>
                            </tr>
                        )

                    })

                )

            }

            </tbody>
        </table>
    )
}

export default Table;
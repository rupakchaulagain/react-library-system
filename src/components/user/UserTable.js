import React from 'react'

function UserTable(props) {

    let userList = props.userList;

    console.log("users=" + JSON.stringify(userList))

    const NoUsersFound = () => {
        return (
            <tr>
                <th><h1>No Users found...</h1></th>
            </tr>
        )

    }

    return (

        <table className="table">
            <thead>
            <tr>
                <th scope="col">S.N.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>

            {userList?.length !== 0 ?
                (
                    userList?.map((user, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    {/*<Button variant="primary" onClick={() => props.editBook(index)}>Edit</Button>{' '}*/}
                                    {/*<Button variant="danger"*/}
                                    {/*        onClick={() => props.deleteUser(index)}>Delete</Button>{' '}*/}
                                </td>
                            </tr>
                        )

                    })
                ):
                <NoUsersFound/>

            }

            </tbody>
        </table>
    )

}

export default UserTable;
import React from 'react'
import TableRowHeaders from "../../hoc/TableRowHeaders";

let headers = [
    "S.N.",
    "Name",
    "Username",
    "Password",
    "Actions",
]

function UserTable(props) {

    let userList = props.userList;

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
            <TableRowHeaders
                headers={headers}/>
            </thead>
            <tbody>

            {userList?.length !== 0 ?
                (
                    userList?.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>
                                </td>
                            </tr>
                        )

                    })
                ) :
                <NoUsersFound/>

            }

            </tbody>
        </table>
    )

}

export default UserTable;
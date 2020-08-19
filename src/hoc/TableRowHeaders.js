import React from "react";
import RowHeaders from "./RowHeaders";

const TableRowHeaders = (props) => {

    console.log("TableRowHeaders",props.headers)

    return (

        <tr>
            {props.headers?.map((header, index) => {
                return (
                    <th scope="col" key={index}>{header}</th>
                )
            })
            }

        </tr>

    )


}

export default RowHeaders(TableRowHeaders)

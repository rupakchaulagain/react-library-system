import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadCrumb = (props) => {

    console.log("breadcrumb=", props)

    let routes = props.data

    return (

        <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
            <Breadcrumb.Item href={routes?.path}>
                {routes?.menu}
            </Breadcrumb.Item>

            {props.match.params.bookName!=='' ?
                (<Breadcrumb.Item active>
                    {props.match.params.bookName}
                </Breadcrumb.Item>) : ""}

        </Breadcrumb>
    )

}

export default BreadCrumb;
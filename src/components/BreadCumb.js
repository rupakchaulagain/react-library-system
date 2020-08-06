import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadCumb=(props)=>{

    console.log("breadcumb=",props)

    return(

        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                {props?.data?.menu}
            </Breadcrumb.Item>
            {/*<Breadcrumb.Item active>Data</Breadcrumb.Item>*/}
        </Breadcrumb>
    )

}

export default BreadCumb;
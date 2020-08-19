import React from "react";

const RowHeaders = (WrappedComponent) => {

    return (props) => (
        <WrappedComponent {...props}/>
    )

}

export default RowHeaders
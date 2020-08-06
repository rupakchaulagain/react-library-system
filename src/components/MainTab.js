import React from "react";
import NavLink from "react-bootstrap/NavLink";

const MainTab=()=>{

    return(
        <div>
            <NavLink to="/addBookForm"
                     activeStyle={{color:'red'}}>Add Book</NavLink>

            <NavLink to="/assignBookForm"
                     activeStyle={{color:'red'}}>Assign Book</NavLink>

        </div>
    )
}

export default MainTab;
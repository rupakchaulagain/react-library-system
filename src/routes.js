import React from "react";
import Dashboard from "./components/Dashboard";
import AddBookForm from "./components/add-book/AddBookForm";
import AssignBookForm from "./components/assign-book/AssignBookForm";
import Test from "./components/test/Test";
import AddUserForm from "./components/user/AddUserForm";

const routes = [
    {
        path: "/",
        exact: true,
        menu: "Dashboard",
        main: Dashboard
    },
    // {
    //     path: "/login",
    //     exact: true,
    //     menu: "Login",
    //     main: Login
    // },
    // {
    //     path: "/logout",
    //     exact: true,
    //     menu: "Logout",
    //     main: Logout
    // },
    {
        path: "/addBookForm",
        exact: true,
        menu: "Add Book Form",
        main: AddBookForm
    },
    {
        path: "/assignBookForm",
        exact: true,
        menu: "Assign Book Form",
        main: AssignBookForm
    },
    {
        path: "/user",
        exact: true,
        menu: "User Management",
        main: AddUserForm
    },
    {
        path: "/components",
        exact: true,
        menu: "Components",
        main: Test
    },


];

export default routes;
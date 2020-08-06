import React from "react";
import Dashboard from "./components/Dashboard";
import AddBookForm from "./components/add-book/AddBookForm";
import AssignBookForm from "./components/assign-book/AssignBookForm";

const routes = [
    {
        path: "/",
        exact: true,
        menu: "Dashboard",
        // sidebar: () => <div>Dashboard</div>,
        main: Dashboard
    },
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

];

export default routes;
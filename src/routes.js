import Dashboard from "./components/Dashboard";
import AddBookForm from "./components/add-book/AddBookForm";
import AssignBookForm from "./components/assign-book/AssignBookForm";
import AddUserForm from "./components/user/AddUserForm";
import ReadBook from "./components/ReadBook";

const routes = [


    {
        path: "/dashboard",
        exact: true,
        menu: "Dashboard",
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
    {
        path: "/user",
        exact: true,
        menu: "User Management",
        main: AddUserForm
    },
    {
        path: "/readBook/:bookName",
        exact: true,
        menu: "Read Book",
        main: ReadBook
    },


];

export default routes;
import {combineReducers} from "redux";
import bookList from './books'
import categoryList from './categories'
import userList from './users'
import bookCategory from "./book-category";

export default combineReducers({
    bookList,
    bookCategory,
    categoryList,
    userList
})
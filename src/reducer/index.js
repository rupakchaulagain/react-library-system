import {combineReducers} from "redux";
import bookList from './books'
import bookCategory from "./book-category";

export default combineReducers({
    bookList,
    bookCategory
})
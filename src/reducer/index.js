import {combineReducers} from "redux";
import bookList from './books'
import categoryList from './categories'
import bookCategory from "./book-category";

export default combineReducers({
    bookList,
    bookCategory,
    categoryList
})
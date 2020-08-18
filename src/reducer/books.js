import bookList from "../book-data";
import * as actions from '../constants/ActionTypes'


export default (state = {bookList}, action) => {


    let bookList = [...state.bookList]



    switch (action.type) {

        case actions.FORM_SUBMIT:
            bookList.push(action.payload)
            state = {
                bookList
            }
            return state

        case actions.UPDATE_BOOK:
            let book = bookList[(action.payload.currentIndex)]
            book.bookName = action.payload.bookName
            book.bookAuthor = action.payload.bookAuthor
            book.bookPublishedDate = action.payload.bookPublishedDate
            return state

        case actions.DELETE_BOOK:

            bookList.splice(action.payload.currentIndex, 1)
            state = {
                bookList
            }

            return state


        default:

            return state;
    }
}
import {applyMiddleware, createStore} from "redux";
import reducer from '../reducer'

//middleware for logging
const logging = store => next => action => {
    console.log("--------------------Middleware triggered---------------------------------------");
    console.log("action=",action.type)
    console.log("payload=",action.payload)
    next(action);
}

const store = createStore(reducer,   applyMiddleware(logging))

export default store
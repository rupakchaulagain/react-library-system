import {applyMiddleware, createStore} from "redux";
import reducer from '../reducer'


const logger=(store)=>(action)=>{

    console.log("-----------------middleware----------------")
    console.log(" store...",store)
    console.log(" action...",action)

}

const store = createStore(reducer, applyMiddleware(logger))

export default store
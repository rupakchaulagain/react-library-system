import * as actions from '../constants/ActionTypes'

export default (state = {
    userList: localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')) :[]
}, action) => {

    let userList = [...state.userList]

    switch (action.type) {

        case actions.SIGN_UP:

            userList.push(action.payload)
            if ((localStorage.getItem('users'))===null) {

                localStorage.setItem(
                    "users", JSON.stringify(userList)
                )

            } else {
                let userList = JSON.parse(localStorage.getItem('users'))
                userList.push(action.payload)
                localStorage.setItem(
                    "users", JSON.stringify(userList)
                )
            }

            state = {
                userList
            }


            return state

        default:
            return state;
    }
}
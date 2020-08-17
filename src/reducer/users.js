import * as actions from '../constants/ActionTypes'

export default (state = {userList: []}, action) => {

    let userList = [...state.userList]

    switch (action.type) {

        case actions.SIGN_UP:
            userList.push(action.payload)

            localStorage.setItem(
                "users", JSON.stringify(userList)
            )

            state = {
                userList
            }
            return state

        // case actions.UPDATE:
        //     let user = userList[(action.payload.currentIndex)]
        //     user.userFullName = action.payload.userFullName
        //     user.userName = action.payload.userName
        //     user.password = action.payload.password
        //     return state
        //
        // case actions.DELETE:
        //
        //     userList.splice(action.payload.currentIndex, 1)
        //     state = {
        //         userList
        //     }
        //
        //     return state

        default:
            return state;
    }
}